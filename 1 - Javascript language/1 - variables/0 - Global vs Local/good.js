(function () {
    var local = 'John';
    console.log(local); // 'John';
}());

console.log(local); // ReferenceError: local is not defined
console.log(window.local);  // undefined