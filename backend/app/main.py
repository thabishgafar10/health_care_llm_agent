from fastapi import FastAPI

from fastapi.middleware.cors import (
    CORSMiddleware
)

from app.api.routes.chat import (
    router as chat_router
)

from app.api.routes.health import (
    router as health_router
)

from app.api.routes.upload import (
    router as upload_router
)

app = FastAPI(

    title="Healthcare AI Assistant",

    version="1.0.0"
)

# CORS

app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)

# ROUTES

app.include_router(chat_router)

app.include_router(health_router)

app.include_router(upload_router)

# ROOT

@app.get("/")

def root():

    return {

        "message":
        "Healthcare AI Backend Running"
    }