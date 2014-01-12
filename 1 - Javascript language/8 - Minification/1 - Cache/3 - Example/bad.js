(function () {
    var oObj = {
        test: 'test',
        getTest: function () {
            return this.test;
        },
        setTest: function (sTest) {
            this.test = sTest;
        }
    };

    console.log( oObj.getTest() );  // 'test'
    oObj.setTest( 'test2' );
    console.log( oObj.getTest() );  // 'test2'
    oObj.setTest( 'test3' );
    console.log( oObj.getTest() );  // 'test3'
    oObj.setTest( 'test4' );
    console.log( oObj.getTest() );  // 'test4'
}());