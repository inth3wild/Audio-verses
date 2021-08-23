from pydantic import BaseModel
from typing import Optional

class InputBase(BaseModel):
    function_type: str
    audio_id: int
    bible_version_id: str
    query: Optional[str] # this will be removed later
    offset: Optional[int]

