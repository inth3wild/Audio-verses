import httpx
from config.config import settings
from apis.data import *


base_url = "https://api.scripture.api.bible/v1/bibles/"

headers = {
    "Api-Key": settings.API_BIBLE_API_KEY
}



# Api search functionality
def search(**kwargs):
    # print(kwargs)
    bible_version_id = bible_ids.get( kwargs.get('bible_version_id') )
    search_endpoint = base_url + f"{bible_version_id}/search"
    params = {
        "query": kwargs.get('query')   # Keyword to search
    }

    response = httpx.get(search_endpoint, params=params, headers=headers)
    result = response.json()
    return result
