const express = require("express");
const home = require("./app")

const app = express();
app.use("/app", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log (`Listening to port ${port}`));
