function testDeleteObjectPrototype() {
  delete Object.prototype;
  console.log( Object.prototype );
}

// No error: Logs Object {}
testDeleteObjectPrototype();