from app.tools.rag_tool import (
    rag_search
)

from app.services.llm_Services import (
    ask_llm
)

# SIMPLE GENERAL CHAT DETECTION

GENERAL_MESSAGES = [

    "hi",
    "hello",
    "hey",
    "how are you",
    "good morning",
    "good evening",
    "who are you",
    "what can you do"
]

# REPORT KEYWORDS

REPORT_KEYWORDS = [

    "report",
    "pdf",
    "medical",
    "findings",
    "analysis",
    "diagnosis",
    "condition",
    "risk",
    "summary",
    "recommendation",
    "blood",
    "glucose",
    "patient"
]

def route_query(query: str):

    lower_query = query.lower()

    # GENERAL CHAT

    if lower_query in GENERAL_MESSAGES:

        return ask_llm(

            f"""
            You are HealthMind AI,
            a friendly healthcare assistant.

            Respond conversationally.

            User:
            {query}
            """
        )

    # REPORT / RAG ROUTING

    if any(
        keyword in lower_query
        for keyword in REPORT_KEYWORDS
    ):

        return rag_search(query)

    # DEFAULT GENERAL AI

    return ask_llm(

        f"""
        You are HealthMind AI,
        an intelligent healthcare assistant.

        Answer naturally and helpfully.

        User:
        {query}
        """
    )
