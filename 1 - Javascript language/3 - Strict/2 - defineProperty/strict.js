function testSetNonWritableProperties() {
  'use strict';
  var obj1 = {};
  Object.defineProperty(obj1, "x", { value: 42, writable: false });
  obj1.x = 9;
}

// Throws "TypeError: Cannot assign to read only property 'x' of #<Object>"
testSetNonWritableProperties();