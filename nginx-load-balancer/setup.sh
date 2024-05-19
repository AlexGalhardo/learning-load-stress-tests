#!/bin/bash
docker login
docker stop $(docker ps -q)
docker rm $(docker ps -a -q)
sudo docker-compose down
sudo docker-compose up -d
