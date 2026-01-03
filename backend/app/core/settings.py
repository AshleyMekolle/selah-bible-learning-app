from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    bible_api_key: str
    bible_id: str

    class Config:
        env_file = ".env"

settings = Settings()