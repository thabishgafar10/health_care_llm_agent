from app.tools.pdf_tool import (
    analyze_pdf
)

from app.tools.rag_tool import (
    rag_search
)

from app.tools.summary_tool import (
    summarize_report
)

from app.tools.symptom_tool import (
    symptom_analysis
)

def route_query(query: str):

    query_lower = query.lower()

    # PDF TOOL

    if (
        "report" in query_lower or
        "pdf" in query_lower
    ):

        return analyze_pdf(query)

    # SUMMARY TOOL

    elif (
        "summarize" in query_lower or
        "summary" in query_lower
    ):

        return summarize_report(query)

    # SYMPTOM TOOL

    elif (
        "symptom" in query_lower or
        "pain" in query_lower or
        "fever" in query_lower
    ):

        return symptom_analysis(query)

    # DEFAULT RAG

    else:

        return rag_search(query)