// function showDetails(nameVal: string): (number | string | boolean) {
// function showDetails(nameVal: string): string {
//     console.log('this is from showDetails function for ', nameVal);
//     return (nameVal as string).toUpperCase();
// }
// let value = 'dinesh';
// // let value = {};
// let result = showDetails(value);
// console.log(result);
var _this = this;
// const showDetails=function(nameVal: string): string {
//     console.log('this is from showDetails function for ', nameVal);
//     return (nameVal as string).toUpperCase();
// }
// let value = 'dinesh gopal';
// // let value = {};
// let result = showDetails(value);
// console.log(result);
// const showDetails=(nameVal: string): string => {
//     console.log('this is from showDetails function for ', nameVal);
//     return (nameVal as string).toUpperCase();
// }
// let value = 'dinesh gopal chand';
// // let value = {};
// let result = showDetails(value);
// console.log(result);
var chekGlobalFunction = function () {
    var someValue = 'someValue';
    // var someValue1='someValue1';
    console.log(this);
};
var chekGlobalFunction1 = function () {
    var someValue = 'someValue';
    // var someValue2='someValue2';
    console.log(_this);
};
console.dir(chekGlobalFunction());
chekGlobalFunction1();
console.log(this);
