const express = require('express');
const  app = express();

app.get('/',(req,res)=>{
  res.send('hello world');
});

app.listen(process.env.PORT || 3000,()=>{
  console.log('app running');
});

module.exports = app;
