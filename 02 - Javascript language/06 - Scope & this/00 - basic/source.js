console.log( this === window );   // true

function testScope(){
    console.log( this );
}

testScope();    // ??