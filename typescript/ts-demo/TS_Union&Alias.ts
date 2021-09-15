// Union
// A union type describes a value that can be one of several types.
let id: string | number;
id = 1;
console.log(id);

id = "10";
console.log(id);

// Type Alias
// we want to use the same type more than once and refer to it by a single name.
// A type alias is exactly that - a name for any type.
// always define type alias by type
type StringOrNumber = string | number; // we can define a type alias from union
type Student = {
  id: StringOrNumber;
  name: string;
};

let studentList: Student[] = [
  { id: 1, name: "tuananh" },
  { id: 2, name: "tuan" },
];

console.log(studentList);

function greet(student: Student): void {
  console.log(`Hello ${student.name} - I have id code is ${student.id}`);
}

studentList.map((student) => greet(student));
