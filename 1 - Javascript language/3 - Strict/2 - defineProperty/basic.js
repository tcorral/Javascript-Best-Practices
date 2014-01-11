function testSetNonWritableProperties() {
  var obj1 = {};
  Object.defineProperty(obj1, "x", { value: 42, writable: false });
  obj1.x = 9;

  console.log( obj1.x );  // Logs 42
}

// No error but logs 42 instead of 9.
testSetNonWritableProperties();