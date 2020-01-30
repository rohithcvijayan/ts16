let nameVal = 'SDLC Training';
nameVal = 'einsh';
let stringVal: string;
stringVal = 'some value';

console.log(stringVal.concat('some thing'));
let booval = true;

let numberVal = 10;
stringVal = numberVal.toString();
type someDetails = {
    name: string,
    numberVal: number
};
let someDetailsArr: someDetails[];
someDetailsArr = [{
    name: 'dinehs',
    numberVal: 34
}];
let someVal: any;
someVal = 'abc';
someVal = 1;
someVal = true;

(someVal as string).length;

let arrayList: number[] = [1, 2, 3, 3, 2];
let NameList: (string | boolean | (number | string)[])[] = ['dinesh', 'gopal', 'chand', true, [1, 'sdlc']];



const showName = (name: any) => {
    // const nameval: string = (name as string);
    const nameval: string = <string>name;
    console.log(name);
}
showName(23344);
