function logFullName() {
  'use strict';
  var sName = 'John';
  sSurname = 'Doe'; // Sets a global value.

  console.log( sName + ' ' + sSurname );
}

// Throws "ReferenceError: sSurname is not defined"
logFullName();