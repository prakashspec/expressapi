const express = require("express");
const serverless = require("serverless-http");
const cors = require('cors');

//const doi2bib = require("./index.js");

//doi2bib.verbose = 0;

const app = express();

app.use(cors({
  origin: '*'
}));

const router = express.Router();

router.get("/", (req, res) => {

  var global = {
    hello: "hi!"
  };
  

  // doi2bib.getCitation('10.1007/s10462-018-09676-2').then((r)=>{
  //   if(r){
  //     global = r.json();
  //   }
  //   else{
  //     global = {
  //       hello: "hi!"
  //     };
  //   }
  // }).catch(console.error);

  

  res.json({
    hello: "hi!"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
