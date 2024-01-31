const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const multer = require("multer");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const authRouter = require("./routes/api/authRouter");
// const userRouter = require("./routes/api/usersRouter");
const waterRateRouter = require("./routes/api/waterRateRouter");
const waterRouter = require("./routes/api/waterRouter");
const todayWaterRouter = require("./routes/api/todayWaterRouter");
// const monthWaterRouter = require("./routes/api/waterRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRouter);
// app.use("/users", userRouter);
app.use("/water-rate", waterRateRouter);
app.use("/water", waterRouter);
app.use("/today", todayWaterRouter);
// app.use("/month", );
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const {
    status = err instanceof multer.MulterError ? 400 : 500,
    message = "Server error",
  } = err;
  res.status(status).json({ message });
});

module.exports = app;
