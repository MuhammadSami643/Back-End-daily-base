
// array with rest operators
/*
const array=[1,2,3,4,5,6,7];

const [a,b,c, ...d]=array;

console.log("a",a);
console.log("b",b);
console.log("c",c);

*/

//spread objects
/*
const person={
    id:123,
    name :"sami",
    age:20,
    dob:2004
}

const {id, ...user}=person;
console.log(id);
console.log(user);

*/

//functions

/*
const person={
    id:123,
    name :"sami",
    age:20,
    dob:2004
}
const array=[1,2,3,4,5,6,7];

const {id, ...user}=person;
const check=({id,...user},array)=>{
    console.log(id);
    console.log(user);
    console.log(array);
};

check(person,array);

*/


//spread with deep copy, changes never saved in the original array

/*
const array = [1, 2, 3, 4, 5, 6, 7];
const array1 = {...array};
array1[0] = "sami";
console.log(array);
console.log(array1);

*/

//spread with shallow copy, changes saved in the original array

/*
const array = [1, 2, 3, 4, 5, 6, 7];
const array1 = array;
array1[0] = "sami";
console.log(array);
console.log(array1);

*/

//functions 

const array=[1,2,3,4,5,6,7,8];

//assign whole array to first parameter and remaining 2 are undefined
const main=(a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
};
main(array);

//assign array to  parameter
const main1=(a,b,c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
};
main1(...array);
