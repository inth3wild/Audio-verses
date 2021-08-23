import httpx
from config.config import settings



base_url = "https://api.scripture.api.bible/v1/bibles/"
api_key = settings.API_BIBLE_API_KEY


def search():
    ...