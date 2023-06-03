import os
import json
import requests
from dotenv import load_dotenv

# import
load_dotenv()
API_KEY = os.getenv('API_KEY')

f = open("temp/input.txt", "r")
data = f.read()

# ChatGPT convert
API_URL = 'https://api-inference.huggingface.co/models/facebook/blenderbot-3B'
headers = {"Authorization": f"Bearer {API_KEY}"}

def query(payload):
    data = json.dumps(payload)
    response = requests.request("POST", API_URL, headers=headers, data=data)
    return json.loads(response.content.decode("utf-8"))
response = query(data)

# output
l = open("temp/output.txt", "w")
l.write(response['generated_text'])
l.close()

# delete input file
f.close()
os.remove("temp/input.txt")


