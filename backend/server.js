// import express
import express from "express";
// import cors
import cors from "cors";
// import routes
import Router from "./routes/routes.js";

// init express
const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };
// app.use(cors(corsOptions));

// use express json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// use cors
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// use router
app.use('/api', Router);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
