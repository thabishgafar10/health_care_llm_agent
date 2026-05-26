from app.services.rag_service import (
    retrieve_context
)

from app.services.llm_Services import (
    ask_llm
)

def rag_search(query: str):

    try:

        result = retrieve_context(query)

        no_document_message = (
            "No uploaded medical documents are available yet."
        )

        if (
            not result or
            result.strip() == "" or
            result.strip() == no_document_message
        ):

            return ask_llm(query)

        prompt = f"""
        Use the medical document context below if it is relevant.
        If the context is not relevant, answer the user normally.

        Context:
        {result}

        User question:
        {query}
        """

        return ask_llm(prompt)

    except Exception:

        # FALLBACK TO LLM

        return ask_llm(query)
