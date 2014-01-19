function testScope() {
    local = 10;
}

// Logs :
// undefined
// 10
// Globals have been polluted.
console.log( window.local );

testScope();

console.log( window.local );