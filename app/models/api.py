from pydantic import BaseModel


class InputBase(BaseModel):
    audio_id: int
    bible_version_id: str