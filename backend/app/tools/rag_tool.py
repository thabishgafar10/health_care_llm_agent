from app.services.rag_service import (
    query_rag
)

from app.services.llm_Services import (
    ask_llm
)

from app.services.medical_data_store import (
    medical_reports
)

def rag_search(query: str):

    rag_context = query_rag(query)

    reports_context = ""

    # BUILD REPORT CONTEXT

    for report in medical_reports:

        reports_context += f"""

REPORT:
{report['filename']}

SUMMARY:
{report['summary']}

CONDITIONS:
{', '.join(report['conditions'])}

RISK LEVEL:
{report['risk_level']}

FINDINGS:
{', '.join(report['findings'])}

RECOMMENDATIONS:
{', '.join(report['recommendations'])}

ENTITIES:
{', '.join(report['entities'])}

"""

    if (
        not reports_context.strip() and
        not rag_context.strip()
    ):

        return ask_llm(query)

    # FINAL PROMPT

    prompt = f"""

You are an advanced healthcare AI assistant.

Use:
1. Uploaded medical reports
2. Extracted findings
3. RAG medical context

Provide:
- accurate healthcare explanations
- important findings
- detected risks
- recommendations
- preventive measures

MEDICAL REPORT DATA:
{reports_context}

RAG CONTEXT:
{rag_context}

USER QUESTION:
{query}

"""

    return ask_llm(prompt)
