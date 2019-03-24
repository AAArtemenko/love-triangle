module.exports = function getLoveTrianglesCount(preferences = []) {
    var count = 0;

    for (var i = 0; i < preferences.length; i++) {
        var point = preferences[i] - 1;
        if (point == i) continue;

        var secondPoint = preferences[point] - 1;
        if (point == secondPoint) continue;

        var thirdPoint = preferences[secondPoint] -1;        
        if (secondPoint == thirdPoint) continue;

        if (thirdPoint == i) {
            count++;
        }
    }
    return count / 3;
};
