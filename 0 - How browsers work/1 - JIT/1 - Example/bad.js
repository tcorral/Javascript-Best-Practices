function f() {
    eval("");
    var sum = 0;
    for (var i = 0; i < N; ++i) {
        sum += i;
    }
}