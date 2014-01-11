function testSetNewPropertiesOnUnextensibleObjects() {
  'use strict';
  var fixed = {};
  Object.preventExtensions(fixed);
  fixed.newProp = "ohai";

  console.log( fixed.newProp );
}
// Throws "TypeError: Can't add property newProp, object is not extensible"
testSetNewPropertiesOnUnextensibleObjects();