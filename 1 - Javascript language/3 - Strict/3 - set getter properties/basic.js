function testSetGetterOnlyProperties() {
  var obj2 = { get x() { return 17; } };
  obj2.x = 5;

  console.log( obj2.x );
}

// No error but logs 17 instead of 5
testSetGetterOnlyProperties();