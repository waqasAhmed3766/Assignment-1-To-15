// // Q.2 :
let myName : string = "Eric";

console.log(`"Hello ${myName}, would you like to learn some Python today?.”`)

// Q.3 :
let goodName : string = "WaqasAhmed";

console.log(goodName.toLowerCase());
console.log(goodName.toUpperCase());
console.log(goodName.charAt(0).toUpperCase() + goodName.slice(1).toLowerCase());

// Q.4 :

console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);

// Q.5 :

let famous_person : string = "Eric";
let message : string = "would you like to learn some Python today?.";

console.log(`"Hello ${famous_person}, ${message}"`);

//Q.6 :

let personName:string = "    \n\tWaqas Ahmed\t\n    "

console.log(personName);
console.log(personName.trim());

// Q.7 & 8 :

console.log(6+2);   // Addition.
console.log(10-2);  // Subtraction.
console.log(4*2);   // Multiplication.
console.log(16/2);  // Divide.

// Q: 9,

let favorite_Number:number = 4;
let message1:string = "My favorite number is " + favorite_Number;
console.log(message1);

// Q: 10,

//  (1)   
// Program Written by: Waqas;
// Current Date: 10-06-2024;

// This program will write Hello World;
// console.log("Hello World");

//(2)
// Program Written by: Waqas;
// Current Date: 10-06-2024;

// This program will add two digits.
//console.log(2+2);

// Q: 11,

let friend_Names:string[] = ["waqas","ahmed","ali","umer","muavia"];

for (let index = 0; index < friend_Names.length; index++) {
    console.log(friend_Names[index]);
}
// Q: 12,

let names:string[] = ["ali","amjad","umer","fareed","ejaz"];

let message2:string = "would you like to learn some TypeScript today?";

for (const name of  names) {
    console.log(`Hello ${name}, ${message2}`);
    
}

// Q: 13,

let transportations:string[] = ["motorCycle","car","train","publicBus"];

for (let index = 0; index < transportations.length; index++) {
    const element = transportations[index];
    console.log(`“I would like to own a ${element}.”`);
    
}

for (const transportation of transportations) {
    console.log(`“I would like to own a ${transportation}.”`);

}

// Q: 14,

let guest_Names:string[] = ["Waqas","Ahmed","Ali","Muavia"];

guest_Names.forEach(guest_Names => {
    console.log(`Dear Mr. ${guest_Names},\n\n\t"It is our pleasure to invite you in our party."\t\n\nThank You!\n\n`);
    
});

// // Q: 15,


let absent_guest:string = "Ahmed";

let new_guest:string = "FaroQi";
guest_Names[1] = new_guest;

for (let index = 0; index < guest_Names.length; index++) {
    const element = guest_Names[index];
    console.log(`Dear Mr. ${element}, \n\n\t"It is our pleasure to invite you in our party."\t\n\nThank You!\n\n`);   
}

console.log(`Mr. ${absent_guest}, can't make it to dinner.`);

