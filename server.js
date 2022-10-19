require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const contactRoute = require("./routes/contactRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/", contactRoute);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get(
    "*",
    (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    },
    (err) => {
      console.log(err);
    }
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
