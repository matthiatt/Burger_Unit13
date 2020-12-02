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
  burgerRouteLink.create(["name"], [req.body.name], (outcomes) => {
    res.json({ id: outcomes.createId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  let status = "id = " + req.params.id;

  burgerRouteLink.update(
    { destroyBurger: req.body.destroyBurger },
    status,
    (outcome) => {
      if (outcome.change == 0) {
        return res.status(404).end();
      }
    }
  );
});

module.exports = router;
