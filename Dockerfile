FROM ubuntu
COPY . .
ENV TZ=Europe/Kiev
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt update && apt -y install python3-pip python-dev npm && npm install && pip3 install -r ./tests/requirements
ENTRYPOINT npm start
EXPOSE 3000
