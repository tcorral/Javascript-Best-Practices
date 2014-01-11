function logFullName() {
  var sName = 'John';
  sSurname = 'Doe'; // Sets a global value.

  console.log( sName + ' ' + sSurname );
}

// No error: Logs 'John Doe' but sSurname has been set as global variable;
logFullName();

console.log( sName ); // Logs undefined because is a local variable in logFullName

console.log( sSurname ); // Logs 'Doe' because we have polluted global variables.