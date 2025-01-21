import express from "express";
import bodyParser from "body-parser";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import postsRouter from "./routes/posts";
import path from "path";
import awsServerlessExpress from "aws-serverless-express";

import { APIGatewayEvent, Context } from "aws-lambda";

const app = express();
const prisma = new PrismaClient();

app.use(
  cors({
    origin: "http://localhost:5143",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "uploads")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/posts", postsRouter);

prisma
  .$connect()
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données : ", err);
  });

// Créer le serveur pour AWS Lambda
const server = awsServerlessExpress.createServer(app);

// Handler pour AWS Lambda avec les types corrects
export const handler = (event: APIGatewayEvent, context: Context) => {
  return awsServerlessExpress.proxy(server, event, context);
};
