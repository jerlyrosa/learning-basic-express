const express = require("express");
const axios = require('axios')

const router = express.Router();

router.get("/", (req, res) => {
  const title = "Home";
  res.render("index", { title });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});


router.get("/posts",  async(req, res) => {

 const responde = await axios.get('https://jsonplaceholder.typicode.com/posts');

  res.render("posts",{
    posts:  responde.data
  });
});


module.exports = router;
