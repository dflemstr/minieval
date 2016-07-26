var aesprim = require('./aesprim');
var staticEval = require('static-eval');

function evaluate(source, context) {
  var ast = aesprim.parse(source).body[0].expression;
  return staticEval(ast, context);
}

function createFunction(source, argNames, context) {
  var ast = {
    type: 'FunctionExpression',
    id: null,
    params: argNames.map(function(n) {
      return {
        type: 'Identifier',
        name: n
      };
    }),
    defaults: [],
    body: {
      type: 'BlockStatement',
      body: [
        {
          type: 'ReturnStatement',
          argument: aesprim.parse(source).body[0].expression
        }
      ]
    }
  };
  return staticEval(ast, context);
}

module.exports = {
  evaluate: evaluate,
  createFunction: createFunction
};
