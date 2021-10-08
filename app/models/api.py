from pydantic import BaseModel
from typing import Optional

class InputBase(BaseModel):
    function_type: str
    audio_id: int
    bible_version_id: str
    query: Optional[str] # this will be removed later

class NextInput(BaseModel):
    audio_text: str
    offset: int
    bible_version_id: str


class BibleApiResponseModel(BaseModel):
    data: Optional[dict]
    meta: Optional[dict]
    statusCode: Optional[int]
    message: Optional[str]

class ResponseOut(BaseModel):
    audio_text: Optional[str]
    query: Optional[str]
    verses: Optional[list]
    offset: Optional[int]
    reference: Optional[str]
    content: Optional[str]
    copyright: Optional[str]
    meta: Optional[dict]

class RecordedAudio(BaseModel):
    file: Optional[str]
    audio: Optional[str] 
