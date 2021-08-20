from fastapi import APIRouter, HTTPException, Request, Response, File, UploadFile
# from models.token import create_access_token, TokenData
from models.audio import AudioIn
from fastapi.encoders import jsonable_encoder
from fastapi.responses import HTMLResponse
from config.config import settings
from fastapi.templating import Jinja2Templates

import speech_recognition as sr
from pathlib import Path


r = sr.Recognizer()


router = APIRouter(
)
templates = Jinja2Templates(directory="templates")


@router.get("/", response_class=HTMLResponse, status_code=200)
async def home(request: Request):
    return templates.TemplateResponse("index.html", {"request":request})



@router.get("/listen", status_code=200)
async def listen():
    return {"msg": "started listening"}


@router.post("/process", status_code=200)
async def process_file(audio_in: AudioIn):
    audio_file = Path.cwd()/'audio-files'/f"{audio_in.audio_id}.wav" 

    my = sr.AudioFile( str(audio_file) )
    with my as source:
        audio = r.record(source)

    print ( r.recognize_google(audio) )
    # print(audio_in.audio_id)
    return {"msg":"good"}