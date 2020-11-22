import express from "express";
import postsController from "../controllers/posts.controller.js";
const routes = express();

routes.get("/", (req, res) => res.send("Invalid Endpoint"));

routes.get("/posts", postsController.get);
routes.get("/post", postsController.getOne);
routes.post("/post", postsController.post);
routes.delete("/post/:id", postsController.delete);


export default routes;