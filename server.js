const express = require("express");
const app = express();

app.use(express.json())

app.get("/",(req,res) => {res.json('starxAi intern server running online')});

const port = process.env.PORT || 3001;

app.listen(port,() => console.log(`server running on port ${port}`));