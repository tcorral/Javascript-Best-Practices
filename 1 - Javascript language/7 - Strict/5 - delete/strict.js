function testDeleteObjectPrototype() {
    'use strict';
    delete Object.prototype;
    console.log(Object.prototype);
}

// Throws "TypeError: Cannot delete property 'prototype' of function Object() { [native code] }"
testDeleteObjectPrototype();