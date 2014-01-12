function testArguments() {
    var callback = function () {
        var dummy = 'dummy';
        console.log(arguments.callee.toString());
    };

    callback();
}
// No error.
// Logs:
//  function (){
//    var dummy = 'dummy';
//    console.log(arguments.callee.toString());
//  }
testArguments();