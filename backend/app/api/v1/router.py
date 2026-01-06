from fastapi import APIRouter
from app.api.v1 import scripture, reading_plans, day, today

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

api_router.include_router(
    day.router,
    prefix="/day",
    tags=["Daily Plans"]
)

api_router.include_router(
    today.router,
    prefix="/today",
    tags=["Get Today"]
)
