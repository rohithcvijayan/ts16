// function showDetails(nameVal: string): (number | string | boolean) {
// function showDetails(nameVal: string): string {
//     console.log('this is from showDetails function for ', nameVal);
//     return (nameVal as string).toUpperCase();
// }
// let value = 'dinesh';
// // let value = {};
// let result = showDetails(value);
// console.log(result);




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


const chekGlobalFunction=function(){
    let someValue='someValue';
    // var someValue1='someValue1';
    console.log(this);
}
const chekGlobalFunction1=()=>{
    let someValue='someValue';
    // var someValue2='someValue2';
    console.log(this);
}
chekGlobalFunction();
chekGlobalFunction1();
console.log(this);

