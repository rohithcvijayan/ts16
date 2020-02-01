
// type Points={
//     maxVal:number,
//     minVal:number
// };
export interface Points{
    maxVal:number,
    minVal:number
};

const getDistance = (points: Points): number=>{
    return points.maxVal - points.minVal;
};


let points:Points={
    maxVal:54,
    minVal:35
};
let result = getDistance(points);
// result = getDistance(54, 34);
console.log(result);