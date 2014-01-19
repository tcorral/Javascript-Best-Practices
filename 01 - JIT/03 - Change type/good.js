var N = 100;
var a = 1;

function noTypeChange() {
    var b = 2;
    var total = 0;
    for (var i = 0; i < N; ++i) {
        if (i === 50) {
            b = 4;
        }
        total += (a + b);
    }
}