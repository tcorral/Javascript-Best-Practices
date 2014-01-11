(function () {
  var testElement = document.getElementById('test');

  testElement.className = 'selected';
  testElement.href = 'http://www.softonic.com';
  $(testElement).bind('click', function(){
    testElement.parentNode.removeChild(testElement);
  });
}());

// 271