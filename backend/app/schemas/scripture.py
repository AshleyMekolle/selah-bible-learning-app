from pydantic import BaseModel
from typing import List, Optional

class ScriptureReference(BaseModel):
    book: str
    chapter: str
    verse: Optional[int] = None

class Verse(BaseModel):
    id: str
    book: str
    chapter: int
    verse: int
    text: str

class ScriptureResponse(BaseModel):
    reference: ScriptureReference
    verse: List[Verse]
    translation: str