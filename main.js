// // Q.2 :
var myName = "Eric";
console.log("\"Hello ".concat(myName, ", would you like to learn some Python today?.\u201D"));
// Q.3 :
var goodName = "WaqasAhmed";
console.log(goodName.toLowerCase());
console.log(goodName.toUpperCase());
console.log(goodName.charAt(0).toUpperCase() + goodName.slice(1).toLowerCase());
// Q.4 :
console.log("Albert Einstein once said, \u201CA person who never made a mistake never tried anything new.\u201D");
// Q.5 :
var famous_person = "Eric";
var message = "would you like to learn some Python today?.";
console.log("\"Hello ".concat(famous_person, ", ").concat(message, "\""));
//Q.6 :
var personName = "    \n\tWaqas Ahmed\t\n    ";
console.log(personName);
console.log(personName.trim());
// Q.7 & 8 :
console.log(6 + 2); // Addition.
console.log(10 - 2); // Subtraction.
console.log(4 * 2); // Multiplication.
console.log(16 / 2); // Divide.
// Q: 9,
var favorite_Number = 4;
var message1 = "My favorite number is " + favorite_Number;
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
var friend_Names = ["waqas", "ahmed", "ali", "umer", "muavia"];
for (var index = 0; index < friend_Names.length; index++) {
    console.log(friend_Names[index]);
}
// Q: 12,
var names = ["ali", "amjad", "umer", "fareed", "ejaz"];
var message2 = "would you like to learn some TypeScript today?";
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Hello ".concat(name_1, ", ").concat(message2));
}
// Q: 13,
var transportations = ["motorCycle", "car", "train", "publicBus"];
for (var index = 0; index < transportations.length; index++) {
    var element = transportations[index];
    console.log("\u201CI would like to own a ".concat(element, ".\u201D"));
}
for (var _a = 0, transportations_1 = transportations; _a < transportations_1.length; _a++) {
    var transportation = transportations_1[_a];
    console.log("\u201CI would like to own a ".concat(transportation, ".\u201D"));
}
// Q: 14,
var guest_Names = ["Waqas", "Ahmed", "Ali", "Muavia"];
guest_Names.forEach(function (guest_Names) {
    console.log("Dear Mr. ".concat(guest_Names, ",\n\n\t\"It is our pleasure to invite you in our party.\"\t\n\nThank You!\n\n"));
});
// // Q: 15,
var absent_guest = "Ahmed";
var new_guest = "FaroQi";
guest_Names[1] = new_guest;
for (var index = 0; index < guest_Names.length; index++) {
    var element = guest_Names[index];
    console.log("Dear Mr. ".concat(element, ", \n\n\t\"It is our pleasure to invite you in our party.\"\t\n\nThank You!\n\n"));
}
console.log("Mr. ".concat(absent_guest, ", can't make it to dinner."));
