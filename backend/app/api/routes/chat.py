from fastapi import APIRouter, HTTPException
import logging

from app.models.request_models import (
    ChatRequest
)

from app.models.response_models import (
    ChatResponse
)

from app.agent.orchestrator import (
    run_agent
)

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post(
    "/chat",
    response_model=ChatResponse
)

async def chat_endpoint(
    request: ChatRequest
):

    try:
        response = run_agent(
            request.message
        )
    except Exception as error:
        logger.exception("Chat agent failed")
        raise HTTPException(
            status_code=500,
            detail=f"Chat agent failed: {error}",
        ) from error

    return ChatResponse(
        response=response
    )
