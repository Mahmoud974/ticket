import { PrismaClient } from "@prisma/client";
import express from "express";
import multer from "multer";
import path from "path";

const prisma = new PrismaClient();
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });
export const createForm = (req: express.Request, res: express.Response) => {
  res.send(` <form action="http://localhost:3000/posts/" method="POST" enctype="multipart/form-data">
    <label for="fullName">Nom complet :</label>
    <input type="text" id="fullName" name="fullName" required><br><br>

    <label for="email">Email :</label>
    <input type="email" id="email" name="email" required><br><br>

    <label for="githubUserName">Nom d'utilisateur GitHub :</label>
    <input type="text" id="githubUserName" name="githubUserName" required><br><br>

    <label for="image">Télécharger une image :</label>
    <input type="file" id="image" name="image" accept="image/*" required><br><br>

    <button type="submit">Envoyer</button>
  </form>`);
};

// ✅ Récupérer tous les posts
export const getAllPosts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Erreur lors de la récupération des posts : ", error);
    res.status(500).json({ error: "Erreur lors de la récupération des posts" });
  }
};
export const createPost = async (
  req: express.Request,
  res: express.Response
) => {
  console.log("Requête reçue :", req.body);
  upload.single("image")(req, res, async (err) => {
    console.log("Fichier reçu :", req.file);

    if (err) {
      console.error("Erreur Multer :", err);
      return res.status(500).send("Erreur lors du téléchargement de l'image");
    }

    if (!req.file) {
      console.log("Aucun fichier trouvé");
      return res.status(400).send("Aucune image téléchargée.");
    }

    const { fullName, email, githubUserName } = req.body;

    try {
      const imgPath = `/uploads/${req.file.filename}`;

      const newPost = await prisma.post.create({
        data: {
          fullName,
          email,
          githubUserName,
          img: imgPath,
        },
      });

      res.status(201).send(newPost);
    } catch (error) {
      console.error("Erreur lors de la création du post : ", error);
      res.status(500).send({ error: "Erreur lors de la création du post" });
    }
  });
};

export default router;
