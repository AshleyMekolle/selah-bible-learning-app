from fastapi import APIRouter
from app.schemas.scripture import ScriptureResponse

router=APIRouter()

@router.get("/", response_model=ScriptureResponse)
def get_scripture():
    return{
        "reference":{
            "book": "Genesis",
            "chapter": 1
        },
        "verses":[
            {
                "id": "GEN.1.1",
                "book": "Genesis",
                "chapter": 1,
                "verse": 1,
                "text": "In the beginning God created the heaven and the earth"
            }
        ],
        "translation": "KJV"
    }