const locationVal = 'Karnatka';
console.log((locationVal[0]));
 const details={
     name:'Dinesh',
     nickName:'Gopal',
     location:'Bangalore'
 }
 console.log(details);
 details.location='Marathahalli,Bangalore';
 console.log(details);


 const fontColor='black';
 const backGroundColor='white';
 const headerColor='blue';


//  const color=['black','white','blue'];
//  console.log(color[0]);

// enum Color{'black','white','blue'};
// console.log(Color);
enum Color{fontColor='black',backGroundColor='white',headerColor='blue'};
console.log(Color['fontColor']);
console.log(Color.backGroundColor);