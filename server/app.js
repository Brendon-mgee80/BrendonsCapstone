// 'Import' the Express module instead of http
import express from "express";
// Initialize the Express application
const app = express();

const logging = (request, response, next) => {
  console.log(
    `${request.method} ${request.url} ${new Date().toLocaleString("en-us")}`
  );
  next();
};

// CORS Middleware
const cors = (request, response, next) => {
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  response.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.use(cors);
app.use(express.json());
app.use(logging);

/*
  express supports chaining `use()` statements,
  so the above 2 statements could look like this as well
  app.use(express.json()).use(logging)
*/
app.use(logging);

// Handle the request with HTTP GET method from http://localhost:4040/status
app.get("/status", (request, response) => {
  response.status(200).json({ message: "Service healthy" });
});

// Tell the Express app to start listening
// Let the humans know I am running and listening on 4040
app.listen(4040, () => console.log("Listening on port 4040"));
