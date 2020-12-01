let linkOrmData = require("../config/orm.js");

let burgerObject = {
  all: function (data) {
    linkOrmData.selectAll("burgers", function (res) {
      data(res);
    });
  },

  create: function (c, v, data) {
    linkOrmData.insertOne("burgers", c, v, function (res) {
      data(res);
    });
  },
  update: function (ocv, state, data) {
    linkOrmData.updateOne("burgers", ocv, state, function (res) {
      data(res);
    });
  },
  delete: function (state, data) {
    linkOrmData.delete("burgers", state, function (res) {
      data(res);
    });
  },
};

module.exports = burgerObject;
