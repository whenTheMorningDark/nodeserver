var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function (req, res, next) {
  res.json({
      error:0,
      data:[
          {name:"咖啡",age:20},
          {name:"绿茶",age:21},
          {name:"奶茶",age:22}
      ]
  })
});
module.exports = router;