// Some data types basic
// When initial a variable, TS understand & inference data type. Then if u assign a difference value, TS will warn you !

let myName = "Tuan Anh";
let age = 27;
let isStudent = false;

// Assignment a new string for myName
myName = "Cung Bui Tuan Anh"; // Absolute right
// But if assign a number will take a error
myName = 50; // Wrong !!
