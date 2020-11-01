// import the following:
// Express
// burger.js
// https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
// https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/index.html
// 
// **NOTE** -- Took this example again from the cat's example we did in class. I changed some methods to correlate with other files being called.

var express = require("express");
var router = express.Router();
var burger = require("../models/burger");

router.get("/", function(req, res) 
{
  burger.selectAll(function(data) //Using 'selectAll' since it was used in a previous example in the 'cat's' example.  Since it was used previously, I am going to be consistant and make it more easily readable, but also for less bug problems.
  {
    var hbsObject = 
    {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function(req, res) 
{
  burger.insertOne( // Using 'insertOne' here since it was used in the ORM file, which was an example from the cats model we did in class.
    [
       "burger_name", "devoured"
    ], 
    [
        req.body.burger_name, req.body.devoured
    ], 
  function(result) 
{
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", function(req, res) 
{
  var condition = "id = " + req.params.id;

  burger.updateOne(
  {
    devoured: req.body.devoured
  },
    condition,
    function(result) 
  {
    if (result.changedRows == 0) 
    {
      return res.status(404).end();
    } else 
    {
      res.status(200).end();
    }
  });
});

router.deleteOne("/api/burger/:id", function(req, res) 
{
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) 
  {
    if (result.affectedRows == 0) 
    {
      return res.status(404).end();
    } else 
    {
      res.status(200).end();
    }
  });
});

module.exports = router.js;