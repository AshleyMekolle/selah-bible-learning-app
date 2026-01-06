from fastapi import APIRouter
from app.api.v1.scripture import router as scripture_router
from app.api.v1.day import router as day_router

router = APIRouter()

router.include_router(scripture_router, prefix="/scripture", tags=["Scripture"])
router.include_router(day_router, prefix="/day", tags=["Day"])