import express from "express";
import {
  getAllPosts,
  createPost,
  createForm,
} from "../controllers/postController";

const router = express.Router();
router.get("/", getAllPosts);
router.get("/ok", createForm);
router.post("/", createPost);
export default router;
