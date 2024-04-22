const express = require("express");
const https = require("https");
const app = express();


app.get("/", function(req,res) {
const url = "https://api.openweathermap.org/data/3.0/weather?q=London,uk&appid=72dfee1d62bd2890146320d171362f15&units=metric";
https.get(url,function(response) {
  console.log(response.statusCode);

response.on("data", function(data)  {
  const weatherdata  = JSON.parse(data);
  const temp = weatherdata.main.temp;
  console.log(temp);
})
})

res.send("Server is up and running.")
})

app.listen(3000, function() {
  console.log("Server is running in port 3000.");
})
