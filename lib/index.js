var aesprim = require('./aesprim');
var evaluate = require('static-eval');

module.exports = function (source, context) {
  var ast = aesprim.parse(source).body[0].expression;
  return evaluate(ast, context);
};
