function testSetNewPropertiesOnUnextensibleObjects() {
    var fixed = {};
    Object.preventExtensions(fixed);
    fixed.newProp = "ohai";

    console.log(fixed.newProp);
}
// No error: Logs undefined
testSetNewPropertiesOnUnextensibleObjects();