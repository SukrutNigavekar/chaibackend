// console.log("Chai and Node")
require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;
// const gitData = {
//   "Name":"Sukrut Atul Nigavekar",
//   "Degree":"BTech CSE",
//   "College/University":"Sanjay Ghodawat University",
//   "Passout":2022,
// }

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login",(req,res)=>{
  res.send('<h1>This is login page</h1>');
});

// app.get("/youtube",(req,res)=>{
//   res.json(gitData);
// })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
