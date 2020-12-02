// var express = require("express");
// var router = express.Router();
// var linkRouteBurger = require("../models/burger.js");

// router.get("/", function (req, res) {
//   linkRouteBurger.all(function (burgerData) {
//     var burgerObj = {
//       burgers: burgerData,
//     };
//     // console.log(burgerObj);
//     res.render("index", burgerObj);
//   });
// });

// router.post("/api/addnew", function (req, res) {
//   console.log(req.body);
//   linkRouteBurger.create(
//     // ["burgerName", "destroyBurger"],
//     // [req.body.name, false],
//     ["burger_name"],
//     [req.body.name],
//     function () {
//       res.send("Added a burger");
//     }
//   );
// });

// router.put("/api/devoured/:burgerId", function (req, res) {
//   linkRouteBurger.update(
//     { devoured: true },
//     " id = " + req.params.burgerId,
//     function () {
//       res.send("Ate it!");
//     }
//   );
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const burgerRouteLink = require("../models/burger");

router.get("/", (req, res) => {
  burgerRouteLink.all((data) => {
    var handlebarsObj = {
      burgerInfo: data,
    };
    res.render("index", handlebarsObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burgerRouteLink.create(["burger_name"], [req.body.name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgerRouteLink.update(req.body, condition, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgerRouteLink.delete(condition, function (result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
