const orm = require("../config/orm.js");

const burgerObject = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  create: (columns, values, cb) => {
    orm.insertOne("burgers", columns, values, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (condition, cb) => {
    orm.delete("burgers", condition, (res) => {
      cb(res);
    });
  },
};

module.exports = burgerObject;
