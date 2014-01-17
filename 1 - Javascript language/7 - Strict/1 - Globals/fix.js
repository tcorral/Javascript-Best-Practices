function logFullName() {
    'use strict';
    var sName = 'John',
        sSurname = 'Doe'; // Sets a global value.

    console.log(sName + ' ' + sSurname);
}

// No error: Logs 'John Doe' and all the variables remain local.
logFullName();

console.log(sName); // Logs undefined because is a local variable in logFullName

console.log(sSurname); // Logs undefined because is a local variable in logFullName