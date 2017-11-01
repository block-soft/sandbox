## Run container

docker build -t blocksoft/study_web3 .

docker-compose stop && docker-compose down && docker-compose up -d  

docker-compose ps


### Console run

docker exec -i -t study_web3 /bin/bash

node /usr/code/test.js

### Directly

docker exec -i -t study_web3 node test.js