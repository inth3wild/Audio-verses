from fastapi import APIRouter, HTTPException, Request, Response, File, UploadFile
# from models.token import create_access_token, TokenData
from fastapi.encoders import jsonable_encoder
from fastapi.responses import HTMLResponse
from config.config import settings
from fastapi.templating import Jinja2Templates



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
async def process_file(file: UploadFile = File(...) ):
    return {"filename": file.filename}