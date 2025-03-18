const express = require("express");
const router = express.Router();

// // @route GET api/users
// // @desc  Test route
// // @access Public
// router.get('/', (req,res) => res.send('users Route'))

// @route POST api/users
// @desc  Register User
// @access Public
router.post("/", (req, res) => {
  console.log("Body->", req.body);
  res.send("users Route");
});

module.exports = router;
