"use strict";

/*global require*/
var createBingBaseMapOptions = require("./createEnviewBingBasemapOptions");

var createGlobalBaseMapOptions = function(terria, bingMapsKey) {
  var result = createBingBaseMapOptions(terria, bingMapsKey);

  return result;
};

module.exports = createGlobalBaseMapOptions;
