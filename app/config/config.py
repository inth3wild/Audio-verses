from pydantic import BaseSettings
from dotenv import load_dotenv
from pathlib import Path


class Base(BaseSettings):
    class Config:
        env_file = str( load_dotenv( Path.cwd()/".env" ) )

class CommonSettings(Base):
    APP_NAME: str = "Audio verses"
    DEBUG_MODE: bool
    API_BIBLE_API_KEY: str

class ServerSettings(Base):
    HOST: str = "127.0.0.1"
    PORT: int = 9000

class DatabaseSettings(Base):
    DB_URL: str
    DB_NAME: str

class TokenSettings(Base):
    JWT_SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int


class Settings(CommonSettings, ServerSettings, DatabaseSettings, TokenSettings):
    pass

settings = Settings()
