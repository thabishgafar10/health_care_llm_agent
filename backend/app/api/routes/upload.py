from fastapi import (
    APIRouter,
    UploadFile,
    File
)

import os
import json

from app.services.pdf_service import (
    extract_text_from_pdf
)

from app.services.rag_service import (
    add_document
)

from app.services.medical_analyzer import (
    analyze_medical_report
)

from app.services.medical_data_store import (
    medical_reports
)

router = APIRouter()

UPLOAD_DIR = "uploaded_files"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)

@router.post("/upload-pdf")

async def upload_pdf(

    file: UploadFile = File(...)
):

    file_path = os.path.join(
        UPLOAD_DIR,
        file.filename
    )

    # SAVE FILE

    with open(
        file_path,
        "wb"
    ) as f:

        f.write(
            await file.read()
        )

    # EXTRACT TEXT

    extracted_text = extract_text_from_pdf(
        file_path
    )

    # ADD TO VECTOR DB

    add_document(extracted_text)

    # AI ANALYSIS

    analysis_result = analyze_medical_report(
        extracted_text
    )

    # CONVERT TO JSON

    try:

        analysis_json = json.loads(
            analysis_result
        )

    except:

        analysis_json = {

            "summary":
            analysis_result,

            "conditions": [],

            "risk_level":
            "Unknown",

            "findings": [],

            "recommendations": [],

            "entities": []
        }

    # STORE REAL STRUCTURED DATA

    report_data = {

        "filename": file.filename,

        "summary":
        analysis_json.get(
            "summary",
            ""
        ),

        "conditions":
        analysis_json.get(
            "conditions",
            []
        ),

        "risk_level":
        analysis_json.get(
            "risk_level",
            ""
        ),

        "findings":
        analysis_json.get(
            "findings",
            []
        ),

        "recommendations":
        analysis_json.get(
            "recommendations",
            []
        ),

        "entities":
        analysis_json.get(
            "entities",
            []
        ),

        "raw_text":
        extracted_text[:2000]
    }

    medical_reports.append(
        report_data
    )

    return {

        "message":
        "Medical report analyzed successfully",

        "report":
        report_data
    }

# REPORTS

@router.get("/reports")

async def get_reports():

    return medical_reports

# KNOWLEDGE BASE

@router.get("/knowledge-base")

async def knowledge_base():

    return medical_reports

# STATS

@router.get("/stats")

async def get_stats():

    total_conditions = sum(

        len(report["conditions"])

        for report in medical_reports
    )

    total_entities = sum(

        len(report["entities"])

        for report in medical_reports
    )

    return {

        "reports_uploaded":
        len(medical_reports),

        "conditions_detected":
        total_conditions,

        "medical_entities":
        total_entities,

        "documents_processed":
        len(medical_reports)
    }