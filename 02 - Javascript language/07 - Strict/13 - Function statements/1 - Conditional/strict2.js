(function () {
    'use strict';
    if (true) {
        function callback() {
            console.log('callback')
        }

    }else {
        function callback(){
            console.log('NO CALLBACK');
        }
    }
}());

// Throws error: SyntaxError: In strict mode code, functions can only be declared at top level or immediately within another function.