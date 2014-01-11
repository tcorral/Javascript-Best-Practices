// When the code is evaluated throws "SyntaxError: Octal literals are not allowed in strict mode."
function testSumOctalAndDecimals() {
  "use strict";
  var sum = 015 + // !!! syntax error
            197 +
            142;

  console.log( sum );
}