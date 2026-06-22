import dotenv from "dotenv"; //environment variable load
dotenv.config();

import express from "express"; // express
import AuthRouter from "./src/routers/auth.route.js";
import PublicRouter from "./src/routers/public.route.js";

const app = express(); // object

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend Project" }); // api creations
});

const port = process.env.PORT || 5000; // verify the port

app.listen(port, () => {
  console.log("Server Strated on PORT:", port); //
});
