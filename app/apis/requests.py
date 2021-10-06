import httpx
from config.config import settings
from apis.data import *
from models.api import BibleApiResponseModel, ResponseOut


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
    modeled_result = BibleApiResponseModel(**response.json())
    # print(modeled_result.data.get('verses'))

    try:
        reference = modeled_result.data.get('passages')[0]['reference']
        content = modeled_result.data.get('passages')[0]['content']
        copyright = modeled_result.data.get('passages')[0]['copyright']
    except TypeError:
        reference = None
        content = None
        copyright = None

    result = ResponseOut(
        audio_text = kwargs.get('query'),
        query = modeled_result.data.get('query'),
        verses = modeled_result.data.get('verses'),
        offset = modeled_result.data.get('offset'),
        reference = reference,
        content = content,
        copyright = copyright,
        meta = modeled_result.meta
        )
    # print(result)

    # For the frontend make sure to check the conntent of "verses" in the response is not an empty array,
    # if empty, display 'sorry not found' kind of error

    # frontend idea for off sets: store the audio text in browser localstorage format = (audio_id:audio_text) 
    # so that, when we want to search the next results range (default is 1-10) 
    # we would not have to be converting the audio again. Then when a new audio is recorded clear the previos one
    # in local storage
    return result


def search_next(**kwargs):
    bible_version_id = bible_ids.get( kwargs.get('bible_version_id') )
    search_endpoint = base_url + f"{bible_version_id}/search"
    params = {
        "query": kwargs.get('audio_text'),   # Keyword to search
        "offset": kwargs.get('offset')
    }
    response = httpx.get(search_endpoint, params=params, headers=headers)
    modeled_result = BibleApiResponseModel(**response.json())
    try:
        reference = modeled_result.data.get('passages')[0]['reference']
        content = modeled_result.data.get('passages')[0]['content']
        copyright = modeled_result.data.get('passages')[0]['copyright']
    except TypeError:
        reference = None
        content = None
        copyright = None

    result = ResponseOut(
        audio_text = kwargs.get('audio_text'),
        query = modeled_result.data.get('query'),
        verses = modeled_result.data.get('verses'),
        offset = modeled_result.data.get('offset'),
        reference = reference,
        content = content,
        copyright = copyright,
        meta = modeled_result.meta
        )
    # result = response.json()
    return result