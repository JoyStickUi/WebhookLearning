FROM ubuntu:latest
COPY . .
RUN apt-get update && apt-get install python3-pip npm && npm install && pip3 install -r ./tests/requirements
ENTRYPOINT npm start
EXPOSE 3000
