function testOverwritingObjectProperties() {
  var oTest = { p: 1, p: 2 };

  console.log( oTest );
}

// No error: Logs Object {p: 2}
testOverwritingObjectProperties();