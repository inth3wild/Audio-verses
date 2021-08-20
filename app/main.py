from fastapi import FastAPI
from fastapi.applications import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from motor.motor_asyncio import AsyncIOMotorClient
from config.config import settings
from fastapi.staticfiles import StaticFiles

# Import routes
from routers.apiRoutes import router as api_router


# Init app
app = FastAPI()
app.mount("/templates/static", StaticFiles(directory="templates/static"), name="static")


# Init DB
@app.on_event("startup")
async def startup_db_client():
    app.mongodb_client = AsyncIOMotorClient(settings.DB_URL)
    app.mongodb = app.mongodb_client[settings.DB_NAME]


@app.on_event("shutdown")
async def shutdown_db_client():
    app.mongodb_client.close()



# Include routers
app.include_router(api_router, tags=["Api route"])




if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host=settings.HOST,
        reload=settings.DEBUG_MODE,
        port=settings.PORT,
    )