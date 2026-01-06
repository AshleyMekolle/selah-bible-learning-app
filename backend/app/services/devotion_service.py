import json
from pathlib import Path

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "daily_devotion.json"

class DevotionService:
    def __init__(self):
        with open(DATA_PATH, "r", encoding="utf-8") as f:
            self.devotions = json.load(f)
    
    def get_devotion_for_day(self, day: int) -> dict:
        return self.devotions.get(str(day),{
            "theme": None,
            "tags": [],
            "selah_reflection": None
        })
    
    def get_day_reading(self, day: int, start: int, limit: int):
        scripture = self._load_scripture_for_day(day)

        verses = scripture["verses"]
        total = len(verses)

        paginated = verses[start - 1 : start - 1 + limit]

        scripture["verses"] = paginated
        scripture["pagination"] = {
            "start": start,
            "limit": limit,
            "total": total,
            "has_more": start - 1 + limit < total
        }

        return scripture
