const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
    res.status(200).json({
        time : Date.now(),
        server: 1 
    });
    return;
})

app.listen(PORT, () => {
  console.log("The server is up and running!");
});
