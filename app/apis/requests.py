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
        "query": kwargs.get('query'),   # Keyword to search
    }

    response = httpx.get(search_endpoint, params=params, headers=headers)
    result = response.json()

    # For the frontend make sure to check the conntent of "verses" in the response is not an empty array,
    # if empty, display 'sorry not found' kind of error

    # frontend idea for off sets: store the audio text in browser localstorage format = (audio_id:audio_text) 
    # so that, when we want to search the next results range (default is 1-10) 
    # we would not have to be converting the audio again. Then when a new audio is recorded clear the previos one
    # in local storage
    return result
