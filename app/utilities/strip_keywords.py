def strip_keywords(voice_text):
    '''Remove Chapter, Verse, and convert 'to' to '-' in interpreted voice text'''
    key_words = ["chapter", "verse"] 

    voice_text = '.'.join(filter(lambda x: x not in key_words,  voice_text.split()))
    voice_text =  voice_text.replace("to", "-")

    # replace '.-.' to '-' for accurate search results
    voice_text = voice_text.replace(".-.", "-")
    return voice_text
