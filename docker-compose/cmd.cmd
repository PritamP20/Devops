## Docker installation
- Install docker
- Create a network - docker network create user_project
- Start postgres
- docker run --network user_project --name postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p
5432:5432 postgres
- Build the image - docker build -network=host -t user-project .*
- Start the image - n
*L to chat, &K to generate
## Docker Compose installation steps
- Install docker, docker-compose
- Run 'docker-compose up*