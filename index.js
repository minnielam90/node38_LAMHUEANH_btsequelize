import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();

app.use(express.json());
app.use(rootRoutes);

const port = 8083;

app.listen(port, () => {
  console.log("Be is starting");
});

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   port: 3307,
//   database: "node38_food",
// });

// app.get("/get-list-user", async (req, res) => {
//   let query = "SELECT * FROM users";
//   try {
//     let data = await conn.promise().query(query);
//     res.send(data[0]);
//   } catch (err) {
//     res.send(`error getting list user: ${err}`);
//   }
// });
