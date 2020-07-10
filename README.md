# Expressjs Server Starter Boilerplate
## A simple starter boilerplate of ExpressJs and MongoDb, integrated with Docker Containers.

## Pre-requisites to run this project on your computer:
#### To run locally:
1.-Have properly installed NodeJs on your computer.

2.-Have proparly installed MongoDB on your computer.

3.-If you don't install MongoDb as a service, you'll start the service before running `mongod` on your terminal.


#### To run on Docker containers:
1.-Have properly installed Docker on your computer.

2.-Make sure you've activated the virtualization option on your Bios to use Hyper-V technology with Docker.

3.-Make sure you've shared your local folders to docker, because this project use the Docker Volumes option.



## Instructions:
#### To run this project locally on your computer:
1.-Clone this repo on your computer.

2.-Locate your code editor inside the project's folder.

3.-Run `npm install` in a terminal/bash located on the project folder to download all dependencies.

2.-Run `npm start` to start the server and conect to the DB.



#### To run this project whit Docker containers:
1.-Clone this repo on your computer.

2.-Locate your code editor inside the project's folder.

3.-Run `docker-compose build` in a terminal/bash located on the project folder to build the docker image. 

(This command will download all the docker images if you don have them in your computer yet).

4.-Run `docker-compose up` in the terminal to start the Docker container.
