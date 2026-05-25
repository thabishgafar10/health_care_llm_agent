from fastapi import APIRouter, HTTPException

from app.models.request_models import ChatRequest
from app.models.response_models import ChatResponse
from app.services.llm_Services import generate_response

router = APIRouter()


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        response = generate_response(request.message)
    except RuntimeError as error:
        raise HTTPException(
            status_code=500,
            detail=str(error),
        ) from error

    return ChatResponse(response=response)
