from fastapi import APIRouter
from datetime import date
from app.api.v1.day import get_day_reading

router = APIRouter()

START_DATE = date(2025,1,1)

@router.get("/today")
async def get_today():
    today = date.today()
    day_number = (today - START_DATE).days + 1

    if day_number < 1:
        day_number = 1
    if day_number > 365:
        day_number = 365

    return await get_day_reading(day_number)