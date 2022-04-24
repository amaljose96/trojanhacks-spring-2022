import pickle
import socket
import struct
from get_points import  get_body_pose as pose_detect
import traceback

import cv2

HOST = "0.0.0.0"
PORT = 8090

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.setsockopt(socket.IPPROTO_TCP, socket.TCP_NODELAY, 1)
print('Socket created')

s.bind((HOST, PORT))
print('Socket bind complete')
s.listen(10)
print('Socket now listening')

conn, addr = s.accept()

data = b'' ### CHANGED
payload_size = struct.calcsize("L") ### CHANGED

words = []
curr_word = None
while True:
    # Retrieve message size
    while len(data) < payload_size:
        data += conn.recv(4096)

    packed_msg_size = data[:payload_size]
    data = data[payload_size:]
    msg_size = struct.unpack("L", packed_msg_size)[0] ### CHANGED

    # Retrieve all data based on message size
    i = 0
    while len(data) < msg_size:
        data += conn.recv(4096)

    frame_data = data[:msg_size]
    data = data[msg_size:]
    
    # Extract frame
    frame = pickle.loads(frame_data)
    word = pose_detect(frame)
    # print(word)
    if (word == "break"):
        if(curr_word != None):
            words.append(curr_word)
            curr_word = None
    elif (word == "complete"):
        print(" ".join(words))
        words = []
        curr_word = None
    elif (word is not None):
        curr_word = word
        print(" ".join(words) + " " + curr_word, end="\r")
    # frames.append(frame)
    # cv2.imwrite(f"frame{i}.png",frame)
    
        
    # Display

#from tqdm import tqdm
#import requests

#url = "http://download.thinkbroadband.com/10MB.zip"
#response = requests.get(url, stream=True)

#with open("10MB", "wb") as handle:
 #   for data in tqdm(response.iter_content()):
  #      handle.write(data)
