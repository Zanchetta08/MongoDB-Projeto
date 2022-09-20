FROM mongo

ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root

RUN apt-get update -y
RUN apt-get install git -y

RUN git clone https://github.com/Zanchetta08/MongoDB-Projeto
RUN cp ./MongoDB-Projeto/mongo-init.js /docker-entrypoint-initdb.d/

EXPOSE 27017