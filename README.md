# MadKudu Challenge


## Run the application

The complete application can be start using [docker-compose](https://docs.docker.com/compose/).
First follow the instruction on the website to install __docker-compose__

Once it's done, go into the root folder (at the same level that __docker-compose.yaml__) and simply run:
```
docker-compose up --build
```

Docker images should be built and every container (backend and frontend) must be started.

The frontend is now available on: http://localhost:5173


## Idea and Work to do

### Robustness

- Add more unit tests in backend, better exception handling.
- Add unit tests in frontend.

### Usability and Ergonomy

- Add upload button to allow user to work using its own JSON file.
- Add list of antelopes in the TreeMap's tooltip.
- Add mark on the header table to visualize on which column table is sorted.
- Use a CSS ninja to fix all glitches.
