const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      id: 0,
      name: "Some radio channel",
      channel: "33.3",
    },
  });
});

module.exports = router;

// ./create, update, delete radio channel
