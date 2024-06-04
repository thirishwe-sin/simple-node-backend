const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/products.model");
const app = express();
const productRoute = require("./routes/product.route");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

mongoose
  .connect(
    "mongodb+srv://admin:nodeadmin@atlascluster.tnbhp3y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=AtlasCluster"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err, "connection failed");
  });
