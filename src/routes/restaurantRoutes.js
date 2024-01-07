import express from "express";

import {
  getLikesByRes,
  getRatesByRes,
} from "../controllers/restaurantControllers.js";

const restaurantRoutes = express.Router();

restaurantRoutes.get("/:res_id/likes", getLikesByRes);
restaurantRoutes.get("/:res_id/rates", getRatesByRes);

export default restaurantRoutes;
