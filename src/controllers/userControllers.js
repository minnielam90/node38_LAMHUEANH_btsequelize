import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const conn = initModels(sequelize);

// Tạo thêm like cho nhà hàng
const createLikeRes = async (req, res) => {
  try {
    let { user_id, res_id, date_like } = req.body;

    let newLike = {
      user_id,
      res_id,
      date_like,
    };
    await conn.like_res.create(newLike);
    res.status(201).send(newLike);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// Xóa like nhà hàng
const deleteLikeRes = async (req, res) => {
  try {
    let { user_id, res_id } = req.body;

    const deleteLike = await conn.like_res.destroy({
      where: { user_id, res_id },
    });

    if (deleteLike) {
      res.status(200).send("Unlike successfully");
    } else {
      res.status(404).send("Like not found");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// Lấy danh sách like nhà hàng dựa trên user
const getLikesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const userLikes = await conn.like_res.findAll({
      where: { user_id },
    });

    if (userLikes.length > 0) {
      res.status(200).json(userLikes);
    } else {
      res.status(404).send("No likes found for the user");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// Lấy danh sách đánh giá nhà hàng dựa trên user
const getRatesByUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const userRates = await conn.rate_res.findAll({
      where: { user_id },
    });

    if (userRates.length > 0) {
      res.status(200).json(userRates);
    } else {
      res.status(404).send("No rates found for the user");
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// tạo thêm đánh giá nhà hàng
const createRateRes = async (req, res) => {
  try {
    let { user_id, res_id, amount, date_rate } = req.body;

    let newRate = {
      user_id,
      res_id,
      amount,
      date_rate,
    };
    await conn.rate_res.create(newRate);
    res.status(201).send(newRate);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

// user đặt món
const createOrder = async (req, res) => {
  try {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;

    let newOrder = {
      user_id,
      food_id,
      amount,
      code,
      arr_sub_id,
    };
    await conn.orders.create(newOrder);
    res.status(201).send(newOrder);
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
};

export {
  createLikeRes,
  deleteLikeRes,
  getLikesByUser,
  getRatesByUser,
  createRateRes,
  createOrder,
};
