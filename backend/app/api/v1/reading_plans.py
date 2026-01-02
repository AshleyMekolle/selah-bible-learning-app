from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_reading_plans():
    return {"plans": []}