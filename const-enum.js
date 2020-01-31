var locationVal = 'Karnatka';
console.log((locationVal[0]));
var details = {
    name: 'Dinesh',
    nickName: 'Gopal',
    location: 'Bangalore'
};
console.log(details);
details.location = 'Marathahalli,Bangalore';
console.log(details);
var fontColor = 'black';
var backGroundColor = 'white';
var headerColor = 'blue';
//  const color=['black','white','blue'];
//  console.log(color[0]);
// enum Color{'black','white','blue'};
// console.log(Color);
var Color;
(function (Color) {
    Color["fontColor"] = "black";
    Color["backGroundColor"] = "white";
    Color["headerColor"] = "blue";
})(Color || (Color = {}));
;
console.log(Color['fontColor']);
console.log(Color.backGroundColor);
