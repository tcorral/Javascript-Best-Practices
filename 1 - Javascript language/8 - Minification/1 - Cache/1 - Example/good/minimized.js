(function () {
    var a = document.getElementById("test");
    a.className = "selected";
    a.href = "http://www.softonic.com";
    $(a).bind("click", function () {
        a.parentNode.removeChild(a)
    })
}());

// 169