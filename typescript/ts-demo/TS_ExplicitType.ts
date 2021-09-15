// explicit type
// Some kind of data types
let username: string;
let age: number;
let isVerify: boolean;
let userList: string[]; // Define string array
let mixedList: (string | boolean | number)[]; // Define an array can have string or boolean and number

username = "tuananh2806";
age = 30;
isVerify = true;

userList = ["tuananh", "tuan2806"];
// if userList is string array, we can push string elements but can't push other data type
userList.push("anhtuan1994");
userList.push(1); // Wrong !
console.log(userList);

mixedList = ["tuananh", 27, true];
// we can push one three of data type to mixedList
mixedList.push(30);
mixedList.push(false);
console.log(mixedList);

// Object
// We can define a variable is an object like
// let student: object;
// or we can define obvious each property
let student: {
  id: number | string;
  name: string;
  isGraduate: boolean;
};

student = {
  id: 1,
  name: "Cung Bui Tuan Anh",
  isGraduate: true,
};
