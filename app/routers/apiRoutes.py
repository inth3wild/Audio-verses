from fastapi import APIRouter, HTTPException, Request, Response
# from models.token import create_access_token, TokenData
from fastapi.encoders import jsonable_encoder
from config.config import settings



router = APIRouter(
)


@router.get("/listen", status_code=200)
async def listen():
    return {"msg": "started listening"}