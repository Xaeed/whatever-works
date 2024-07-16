This project is a NestJS application structured using Clean Code architecture, divided into distinct layers: Server Layer, Application Layer, and Business Layer. Below are the steps to set up and run the projec

### Installation
Clone github repository.
```
git clone https://github.com/Xaeed/whatever-works.git
cd wtworks
```

### Install the dependencies:
```
npm install
```

### Database Setup
1. Install PostgreSQL from the official website of postgres.
2. Create a database named wtworks:
``` 
psql -U postgres -c "CREATE DATABASE wtworks;"
```
Optionally you can use docker image.
```
docker pull postgres

docker run --name wtworks-postgres -e POSTGRES_DB=wtworks -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -p 5432:5432 -d postgres

```

### Running the Application
1. Start the application:
```
npm run start
```
2. The application should now be running on http://localhost:3000.


### Run Test
To run test cases use following command.
```
npm run test:e2e
```

### Usage
To interact with the application, use an HTTP client like Postman or CURL to send requests to the endpoints defined in the Server Layer.
Postman collection is added in repo with name : `wtWorks.postman_collection.json`
