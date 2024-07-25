
const arrow = () => {
    return "value"
}

const arrays = [1, "one", true, Boolean, null, [0, 4], { age: 20 }, arrow
];

// Full array displays
console.log(arrays);
//value at second index
console.log(arrays[2]);
//array at 5 index
console.log(arrays[5]);
//array at 5 index and inside the 5th index array, 0 index value
console.log(arrays[5][0]);

//at 6 index to checkout its age only
console.log(arrays[6].age);


//adding new data at the last of array
console.log(arrays.push(2));
console.log(arrays);

//adding new data in the start of the array
console.log(arrays.unshift(2));
console.log(arrays);

//searching that 2 is present in array and at which index it is
console.log(arrays.indexOf(2));

//searching that 1 is present in array
console.log(arrays.includes(1));

//deleting from the last of the array
console.log(arrays.pop);
console.log(arrays);

//deleting from the start of the array
console.log(arrays.shift);
console.log(arrays);



arrays[1]="sami";
console.log(arrays);

//if sami is exists in array than update it with 2 otherwise add 2 in the last of the array
arrays[arrays.indexOf("sami")?
    arrays.indexOf("sami"):arrays.length
]=2;
console.log(arrays);


// Objects


const person={
    name:"sami",
    age:20,
    gender:"male",
    address:{city:"New York"},
    array:[1,2,function(){
        return "hello";
    }]
   

};

console.log(person.name);



// Multiple Objects with two keys

const person1 = {
    name: "sami",
    age: 21
};

const person2 = {
    name: "sam",
    age: 20
};

const person3 = {
    name: "samy",
    age: 19
};

const person4 = {
    name: "samay",
    age: 18
};

//merging all the objects in one class
const persons = [person1, person2, person3, person4];
console.log(persons[0]);
