const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/auth", (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=6837d368b5a0bf931ef7`);
})

app.get("/callback", (req, res) => {
  axios.post("https://github.com/login/oauth/access_token", {
      client_id: "6837d368b5a0bf931ef7",
      client_secret: "f22a937313e1b77a3f5c019729a8c0cfe0503599",
      code: req.query.code
  }, {
      headers: {
          Accept: "application/json"
      }
  }).then((result) => {
      console.log(result.data.access_token)
      res.send("you are authorized " + result.data.access_token)
  }).catch((err) => {
      console.log(err);
  })
})

app.listen(8000, () => {
  console.log("its running!!!");
})
