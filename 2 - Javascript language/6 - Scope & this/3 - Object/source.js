var oObj = {
    test: 'test',
    test2: 'test2',
    getTest: function () {
        return this.test;
    },
    getContext: function () {
        return this;
    }
};

console.log( oObj.getContext() );   // Object {test: "test", test2: "test2", getTest: function, getContext: function}
console.log( oObj.getTest() );  // test