function testOverwritingObjectProperties() {
  'use strict';
  var oTest = { p: 1, p: 2 };

  console.log( oTest );
}

// Throws "SyntaxError: Duplicate data property in object literal not allowed in strict mode"
testOverwritingObjectProperties();