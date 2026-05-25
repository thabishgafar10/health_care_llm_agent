from fastapi import APIRouter, UploadFile, File, HTTPException

import os

from app.services.pdf_service import (
    extract_text_from_pdf
)

from app.services.rag_service import (
    add_document
)

router = APIRouter()

UPLOAD_DIR = "uploaded_files"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload-pdf")
async def upload_pdf(
    file: UploadFile = File(...)
):

    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    try:
        extracted_text = extract_text_from_pdf(
            file_path
        )
    except RuntimeError as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        ) from error

    add_document(extracted_text)

    return {
        "message": "PDF uploaded successfully"
    }
