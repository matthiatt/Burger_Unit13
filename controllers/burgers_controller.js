var express = require("express");
var router = express.Router();
var linkRouteBurger = require("../models/burger.js");

router.get("/", function (req, res) {
  linkRouteBurger.all(function (burgerData) {
    var burgerObj = {
      burgers: burgerData,
    };
    console.log(burgerObj);
    res.render("index", burgerObj);
  });
});

router.post("/api/addNewBurger", function (req, res) {
  // used to be addnew
  linkRouteBurger.create(
    ["burgerName", "destroyBurger"],
    [req.body.name, false],
    function () {
      res.send("Added a burger");
    }
  );
});

router.put("/api/devoured/:burgerId", function (req, res) {
  linkRouteBurger.update(
    { devoured: true },
    " id = " + req.params.burgerId,
    function () {
      res.send("Ate it!");
    }
  );
});

module.exports = router;
