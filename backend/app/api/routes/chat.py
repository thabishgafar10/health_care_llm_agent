from fastapi import APIRouter

from app.models.request_models import ChatRequest
from app.models.response_models import ChatResponse
from app.services.llm_Services import generate_response

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):

    response = generate_response(request.message)

    return ChatResponse(response=response)
