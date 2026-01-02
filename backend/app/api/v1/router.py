from fastapi import APIRouter
from app.api.v1 import scripture, reading_plans

api_router = APIRouter()

api_router.include_router(
    scripture.router,
    prefix="/scripture",
    tags=["Scripture"]
)

api_router.include_router(
    reading_plans.router,
    prefix="/reading-plans",
    tags=["Reading Plans"]
)