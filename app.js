var falafel = require('falafel');
var fs = require('fs');

require.extensions['.js'] = function(module, filename) {
  return module.exports = fs.readFileSync(filename, 'utf8');
};

var src = require('./simple.js');

//console.log(src);
var rLoggers = /(\$log(Provider)?|remotelog(Provider)?)/;

var output = falafel(src, function(node) {
  var isValidNode = node.callee &&
                    node.callee.object &&
                    node.callee.object.name ;
console.log(node.object);
  if (node.type === 'CallExpression' && isValidNode && node.callee.object.name.match(rLoggers)) {

   node.parent.update('/*' + node.source() + '*/');
  }
});

//console.log(output);