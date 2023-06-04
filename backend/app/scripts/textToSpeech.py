import os
import json
import requests
from dotenv import load_dotenv
from gtts import gTTS

# import
load_dotenv()
API_KEY = os.getenv('API_KEY')

f = open("temp/input.txt", "r")
data = f.read()

# ChatGPT convert
LANGUAGE = 'en'
API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-3B'
HEADERS = {"Authorization": f"Bearer {API_KEY}"}

def query(payload):
    data = json.dumps(payload)
    response = requests.request("POST", API_URL, headers=HEADERS, data=data)
    return json.loads(response.content.decode("utf-8"))

response = query(data)

# output
myAudio = gTTS(text = response['generated_text'], lang = LANGUAGE, slow = False)
myAudio.save("temp/output.mp3")

# delete input file
f.close()
os.remove("temp/input.txt")

