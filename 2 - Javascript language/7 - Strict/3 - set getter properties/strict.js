function testSetGetterOnlyProperties() {
    'use strict';
    var obj2 = { get x() {
        return 17;
    } };
    obj2.x = 5;

    console.log(obj2.x);
}

// Throws error "TypeError: Cannot set property x of #<Object> which has only a getter"
testSetGetterOnlyProperties();