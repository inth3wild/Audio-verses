from fastapi import APIRouter, HTTPException, Request, Response, File, UploadFile
# from models.token import create_access_token, TokenData
from models.api import InputBase
from fastapi.encoders import jsonable_encoder
from fastapi.responses import HTMLResponse
from config.config import settings
from fastapi.templating import Jinja2Templates

import speech_recognition as sr
from pathlib import Path
from apis.requests import search


r = sr.Recognizer()


router = APIRouter(
)
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse, status_code=200)
async def home(request: Request):
    return templates.TemplateResponse("t.html", {"request":request})



@router.get("/listen", status_code=200)
async def listen():
    return {"msg": "started listening"}


@router.post("/process", status_code=200)
async def process_file(input: InputBase):
    audio_file = Path.cwd()/'audio-files'/f"{input.audio_id}.wav" 
    audio_file_type = sr.AudioFile( str(audio_file) )

    with audio_file_type as source:
        r.adjust_for_ambient_noise(source, duration=0.1)
        audio = r.record(source)

    try:
        # voice_text  = r.recognize_google(audio)
        # print(voice_text)
        if input.function_type == "search":
            # input.query = voice_text
            input.query = "Luke.7.6-Luke.7.10"
            return search(**input.dict())
    except sr.UnknownValueError:
        # Handle unrecognizable speech
        print("Sorry the audio file can not be translated")

    return {"msg":"transcription was good"}