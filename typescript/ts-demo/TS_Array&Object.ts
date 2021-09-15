// Example Array & Object

// 'names' is declared an array string < string[] >, if u push a number TS will warn you !
let names = ["Tuan", "Hung", "Son"];

names.push(4); // Wrong !
names.push(false); // Wrong !
names.push("Hoa"); // Right.

// a number array < number[] >
let numbers = [2, 3, 4, 5];
numbers.push("number"); // Wrong;
numbers.push(true); // Wrong too

// a mix array
// type User will focus after
type User = {
  id: number | string;
  userName: string;
};
let mixed: User[] = [
  { id: 1, userName: "tuananh2806" },
  { id: 2, userName: "ha2kc" },
  { id: 3, userName: false }, // Wrong !
];

console.log(mixed);

// When u created an object, u can't add more properties to object but u can assign new object have similar propeties root object

let newObj = {
  id: 1,
  userName: "tuananh2806",
  isVerifed: false,
};

// Try add a new property
newObj.isLogin = false; // Wrong
// Assign new object
newObj = {
  id: 2,
  userName: "ha2kc",
  isVerifed: true,
};
