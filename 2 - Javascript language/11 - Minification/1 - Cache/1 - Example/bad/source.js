(function () {
    document.getElementById('test').className = 'selected';
    document.getElementById('test').href = 'http://www.softonic.com';
    $(document.getElementById('test')).bind('click', function () {
        this.parentNode.removeChild(this);
    });
}());

// 261