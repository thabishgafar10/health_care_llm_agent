from groq import Groq

from app.core.config import GROQ_API_KEY
from app.core.prompts import SYSTEM_PROMPT

from app.services.rag_service import retrieve_context

client = None

def get_client():
    global client

    if not GROQ_API_KEY:
        raise RuntimeError("GROQ_API_KEY is not configured.")

    if client is None:
        client = Groq(api_key=GROQ_API_KEY)

    return client

def generate_response(user_message: str):

    context = retrieve_context(user_message)
    groq_client = get_client()

    final_prompt = f"""
    Context:
    {context}

    User Question:
    {user_message}
    """

    completion = groq_client.chat.completions.create(

        model="llama-3.1-8b-instant",

        messages=[
            {
                "role": "system",
                "content": SYSTEM_PROMPT
            },
            {
                "role": "user",
                "content": final_prompt
            }
        ]

    )

    return completion.choices[0].message.content
