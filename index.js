const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const cors = require("cors");

// import routes
const authRoute = require("./routes/auth");
const radioChannelRoutes = require("./routes/radioChannel");

dotenv.config();

//set cors
const corsOption = {
  origin: ["http://localhost:3000"],
};

app.use(cors(corsOption));

// connect to db
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB!"))
  .catch((error) => console.log(error.message));

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

// middleware
app.use(express.json());

// route middlewares
app.use("/api/user", authRoute);
app.use("/api/radioChannel", radioChannelRoutes);

app.listen(5000, () =>
  console.log(`The server has started in port 5000 - http://localhost:5000/`)
);
