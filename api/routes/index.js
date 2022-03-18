var express = require('express');
var router = express.Router();
var knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.select('*')
  .from('names')
  .then(data => res.status(200).json(data))
  
});


module.exports = router;
