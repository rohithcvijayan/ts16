;
const getDistance = (points) => {
    return points.maxVal - points.minVal;
};
let points = {
    maxVal: 54,
    minVal: 35
};
let result = getDistance(points);
// result = getDistance(54, 34);
console.log(result);
