FROM mongo

ENV MONGO_DATABASE=cadastro
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root

RUN apt-get update -y
RUN apt-get install git -y

RUN git clone https://github.com/Zanchetta08/MongoDB-Projeto
RUN cp ./MongoDB-Projeto/aluno.json /docker-entrypoint-initdb.d/
RUN cp ./MongoDB-Projeto/professor.json /docker-entrypoint-initdb.d/
RUN cp ./MongoDB-Projeto/materia.json /docker-entrypoint-initdb.d/

#ENV MONGO_INITDB_DATABASE=cadastro
#ENV use cadastro

EXPOSE 27017
