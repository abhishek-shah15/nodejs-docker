# nodejs-docker

Sample project to demostrate how to create Node & MongoDB with Dockerfile and docker-compose.yml 


## Installation

Use the Docker [docker](https://docs.docker.com/compose/gettingstarted/) to install project. Check the docker version using below command

```bash
docker version
```

## Usage

```bash
# First create docker images for both containers: Node & Mongo
docker compose build

# Run Container in detach mode
docker compose up -d

# check running containers
docker ps -a

# Verify the logs of containers
docker logs Api-Container
docker logs DB-Container
```

## Common Errors

Many times developers getting error while connecting MongoDB from Node Container, so for that they need to use links in ```docker-compose.yml``` and in the mongodb connection string use container service name instead of localhost (For our example we use mongo) 

```Javascript
Js file - 
mongoose.connect("mongodb://mongo:27017/<Collection Name>", {useNewUrlParser: true});
``` 

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
