const cors = require('cors');
const express = require('express');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/', async(request, response) => {
try {
  const {data} = await axios('https://api.github.com/users/r-santtos');
  return response.json(data);
} catch (error) {
  console.log(error);
}  

});

app.listen('3333');