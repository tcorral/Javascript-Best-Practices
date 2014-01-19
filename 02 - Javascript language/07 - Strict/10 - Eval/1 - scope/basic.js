function testEval() {
    var x = 17;
    var evalX = eval("var x = 42; x");
    console.log('X is equals to 17? ' + (x === 17));
    console.log('evalX is equals to 42?' + (evalX === 42));
}
// No error:
// Logs 'X is equals to 17? false'
// Logs 'evalX is equals to 42? true'
// x and evalX have 42 has value.
testEval();
