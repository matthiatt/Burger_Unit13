let linkOrmData = require("../config/orm.js");

let burger = {
  all: function (data) {
    linkOrmData.selectAll("burgers", function (res) {
      data(res);
    });
  },

  create: function (cols, vals, data) {
    linkOrmData.insertOne("burgers", cols, vals, function (res) {
      data(res);
    });
  },
  update: function (objColVals, condition, data) {
    linkOrmData.updateOne("burgers", objColVals, condition, function (res) {
      data(res);
    });
  },
  delete: function (condition, data) {
    linkOrmData.delete("burgers", condition, function (res) {
      data(res);
    });
  },
};

module.exports = burger;
