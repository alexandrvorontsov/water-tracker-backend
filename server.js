const mongoose = require("mongoose");

const app = require("./app");
require("dotenv").config();

const { DB_BASE, PORT } = process.env;

mongoose
  .connect(DB_BASE)
  .then(() => {
    app.listen(PORT);
    console.log(`Database conect: MongoDB Cloud`);
    console.log(`Server running. Use our API on port: ${PORT}`);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
