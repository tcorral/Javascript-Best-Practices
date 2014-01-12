function testScope() {
    var local = 10;
}

// Logs :
// undefined
// undefined
console.log( window.local );

testScope();

console.log( window.local );