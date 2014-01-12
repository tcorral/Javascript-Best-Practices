(function () {
    var fpGetTest = function () {
            return this.test;
        },
        fpSetTest = function ( sTest ) {
            this.test = sTest;
        },
        oObj = {
            test: 'test',
            getTest: fpGetTest,
            setTest: fpSetTest
        };


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