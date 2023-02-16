# Node version and creating home folder for inside of container
FROM node:16
RUN mkdir /server
# Copy everything from local directory (using the . from where dockerfile is in root) to the folder we just made in the container
COPY . /server
WORKDIR /server
RUN npm i
# Expose port inside container so we can connect inside the container (not outside yet!)
EXPOSE 3000
# Command to start the program
CMD ["npm", "start"]

# Make .dockerignore to ignore things like node modules
# Don't have to dockerignore what's already in gitignore (like .env)

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# docker run builds it from the image (only need to do this at first)
# then can just start it from docker start

# docker ps shows all containers RUNNING
# docker ps -a shows all containers, running or not