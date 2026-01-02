from fastapi import FastAPI
from app.api.v1.router import api_router

app = FastAPI(
    title="Selah Backend",
    version="1.0.0",
    description="Backend service for Selah"
)

app.include_router(api_router, prefix="/api/v1")