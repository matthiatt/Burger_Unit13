const orm = require("../config/orm.js");

const burgerObject = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },

  create: (columns, values, cb) => {
    orm.create("burgers", columns, values, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
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
