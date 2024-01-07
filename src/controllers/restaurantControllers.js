// controllers/restaurantController.js
import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

// Lấy danh sách like theo nhà hàng
const getLikesByRes = async (req, res) => {
  try {
    const { res_id } = req.params;

    const resLikes = await conn.like_res.findAll({
      where: { res_id },
    });

    if (resLikes.length > 0) {
      res.status(200).json(resLikes);
    } else {
      res.status(404).send("No likes found for the restaurant");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// Lấy danh sách rate theo nhà hàng
const getRatesByRes = async (req, res) => {
  try {
    const { res_id } = req.params;

    const resRates = await conn.rate_res.findAll({
      where: { res_id },
    });

    if (resRates.length > 0) {
      res.status(200).json(resRates);
    } else {
      res.status(404).send("No rates found for the restaurant");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

export { getLikesByRes, getRatesByRes };
