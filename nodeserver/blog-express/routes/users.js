var express = require('express');
var router = express.Router();
const { login } = require('../controller/user');
const {SuccessModel,ErrorModel} = require('../model/resModel')
/* GET users listing. */
router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  // console.log(username);
  const result = login(username,password);
  // console.log(result);
  return result.then(data=>{
    // console.log(data);
    if(data.username){
      res.json(new SuccessModel(
        {username:data.username}
      ));
    } else {
      res.json(new ErrorModel());
    }
  })
  // res.json("a");
});

module.exports = router;
