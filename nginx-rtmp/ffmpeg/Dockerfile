FROM ubuntu:22.04

RUN apt update
RUN apt install -y ffmpeg

WORKDIR /media
COPY premier.mp4 .

ENTRYPOINT ffmpeg -re -i premier.mp4 -c:v libx264 -c:a aac -f flv rtmp://nginx-c/hls/my-video