var N = 100;
var popdata = { 'New York': 6 };
var NY = {
    id: 'New York',
    population: '5M'
};
function getPop(city) {
    return popdata[city.id];
}
function noOptimized(city) {
    var total = 0;
    for (var i = 0; i < N; ++i) {
        total += getPop(city);
    }
}