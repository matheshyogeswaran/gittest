const express = require("express");
const app = express();

const axios = require("axios");

const token ="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";

app.get("/hello", (req, res) => {
  res.send("Welcome");

  axios
    .get("https://api.github.com/matheshyogeswaran", {
      headers: {
        Authorization: `token ${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}`,
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
});
app.listen(8000, () => {
  console.log("listening 8000");
});
