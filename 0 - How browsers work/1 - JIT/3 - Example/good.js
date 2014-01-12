var N = 100;
var popdata = { 'New York': 6 };
var NY = {
    id: 'New York',
    population: '5M'
};
function optimized(city) {
    var total = 0;
    for (var i = 0; i < N; i++) {
        total += popdata[city.id];
    }
}