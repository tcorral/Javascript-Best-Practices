(function () {
    global = 'James';
    console.log(global);  // 'James'
}());

console.log(global);  // 'James'
console.log(this.global); // 'James' (this is window or global object)