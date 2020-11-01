// import the following:
// Express
// burger.js
// https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/
// https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/index.html
// 
// Took this example again from the cat's example we did in class.

var express = require("express");
var router = express.Router();
var cat = require("../models/burger");

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

router.delete("/api/cats/:id", function(req, res) 
{
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) 
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

module.exports = router;



// After I request the get request and it's been redirected to the area I want it to.  In this case I want it to go to 'burgers'.  From there I must/should do another get request to explain what function I want done. In short, once I get the redirect, I need to tell the system what iformation/data I want, or what my main objective is.


// Now since that is completed, I now need to see how I can make data typed into the field(s) on the front-end are able to connect and correlate with my back-end. AKA - I need the user information from the front-end to be able to copy over to the backend DB. So first, I want to start with a 'post' method here.
