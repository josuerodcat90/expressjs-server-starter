# Expressjs Server Starter Boilerplate
### A simple ExpressJs and MongoDb starter project, integrated with Docker Containers.

## -Prerequisites to run this project on your computer:
#### --To run locally:
1.-Make sure you have NodeJs installed correctly on your computer.

2.-Make sure you have MongoDB installed correctly on your computer.

3.-If you don't installed MongoDb as a service, you must start it before, running `mongod` on your terminal.


#### --To run on Docker containers:
1.-Make sure you have Docker installed correctly on your computer.

2.-Make sure you have activated the virtualization option in your Bios to use Hyper-V technology with Docker.

3.-Make sure you have shared your local folders with Docker, because this project uses the Docker Volumes option.



## -Instructions:
#### --To run this project locally on your computer:
1.-Clone this repository on your computer.

2.-Locate your code editor inside the project folder.

3.-Run `npm install` in a terminal / bash located in the project folder to download all dependencies.

2.-Run `npm start` to start the server and connect to the database.



#### --To run this project with Docker containers:
1.-Clone this repository on your computer.

2.-Locate your code editor inside the project folder.

3.-Run `docker-compose build` in a terminal / bash located in the project folder to build the docker image.

(This command will download all the images from DockerHub if you don't already have them on your computer.)

4.-Run 'docker-compose up' in the terminal to start the Docker container, see the logs in terminal if server and database started successfully.
