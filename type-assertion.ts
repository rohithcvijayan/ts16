let someValue: any;
someValue = 1;
someValue = 'SDLC';
console.log(typeof (someValue));
(<string>someValue).indexOf('D');
(someValue as string).indexOf('D');
console.log((<string>someValue).indexOf('D'));
console.log((someValue as string).indexOf('D'));

let ObjectVal = {
    name: 'dinesh',
    mark: 23,
    showDetails: function () {
        return this.mark;
    }
};
let ObjectVal1: any = ObjectVal;

// type objectType={
//     name: string;
//     mark: number;
//     showDetails: () => any;
// };
type objectType={
    name: string;
    mark: number;
    showDetails: () => any;
};
(ObjectVal1 as objectType ).mark;

