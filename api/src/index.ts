import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello tu es le meilleur ");
});
app.post("/", (req, res) => {
  const { fullName, email, githubUserName, img } = req.body;
  res.status(200).send({ fullName, email, githubUserName, img });
});

app.listen(port, () => {
  console.log(`Le serveur Express est en écoute sur http://localhost:${port}/`);
});
