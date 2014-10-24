var test = function () {};
function test2() {}

(function () {
  test();
  function test() {
    console.log('pepe');
  }
}());