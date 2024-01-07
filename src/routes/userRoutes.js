import express from "express";

import {
  createLikeRes,
  createOrder,
  createRateRes,
  deleteLikeRes,
  getLikesByUser,
  getRatesByUser,
} from "../controllers/userControllers.js";

const userRoutes = express.Router();

userRoutes.post("/like", createLikeRes);
userRoutes.delete("/unlike", deleteLikeRes);
userRoutes.get("/:user_id/likes", getLikesByUser);
userRoutes.get("/:user_id/rates", getRatesByUser);
userRoutes.post("/rates", createRateRes);
userRoutes.post("/order", createOrder);

export default userRoutes;
