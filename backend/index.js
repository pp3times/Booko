import express from "express";
import cors from "cors";
import Router from "./routes/routes.js";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());

app.use(cors());

app.use(express.static("public"))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))



app.get("/", (req, res) => {
  res.send("API ใช้งานได้!");
});

app.use("/api", Router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
