// import orm.js into burger.js
// inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file

// Got this layout from the Cat's example again. Changed the methods and elements.

const orm = require("../config/orm");

var burger = {
    // Using 'selectAll' here since I want to select all within this specific area, and not EVERYTHING.
  selectAll: function(cb) 
  {
    orm.selectAll("burger", function(res) 
    {
      cb(res);
    });
  },
  // Using 'insertOne' here since I want to input, or the user is submitting one burger at a time in the fourm.
  insertOne: function(cols, vals, cb) 
  {
    orm.insertOne("burger", cols, vals, function(res) 
    {
      cb(res);
    });
  },
  // I have been using 'updateOne' since in this case I don't want to update, which will update everything.  I want to keep other options there and not over-write thier saved data. Just the one option.
  updateOne: function(objColVals, condition, cb) 
  {
    orm.updateOne("burger", objColVals, condition, function(res) 
    {
      cb(res);
    });
  },
  //db.collection.deleteOne
  deleteOne: function(condition, cb) 
  {
    orm.deleteOne("burger", condition, function(res) 
    {
      cb(res);
    });
  }
};

module.exports = burger.js;