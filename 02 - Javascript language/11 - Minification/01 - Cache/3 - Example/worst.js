(function () {
    var oObj = {
            test: 'test',
            getTest: function () {
                return this.test;
            },
            setTest: function (sTest) {
                this.test = sTest;
            }
        },
        fpGetTest = oObj.getTest,
        fpSetTest = oObj.setTest;


    console.log( fpGetTest() );  // 'undefined'
    fpSetTest( 'test2' );
    console.log( fpGetTest() );  // 'test2'
    fpSetTest( 'test3' );
    console.log( fpGetTest() );  // 'test3'
    fpSetTest( 'test4' );
    console.log( fpGetTest() );  // 'test4'
}());

console.log( test );            // 'test4'
console.log( window.test );     // 'test4'
// Globals have been polluted see Scope & this section.