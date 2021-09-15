// Example about Funtion

// Ex1: param: <data_type> - define data type for side param
let square = (side: number) => side * side;
console.log(square(3));

// Ex2: We can define data type before
let greet: Function;
greet = () => console.log("Hello World");
greet();

// Ex3:
// use "?" after param consider have or haven't value
// use "|" similar or
let add: Function;
add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};

add(1, 2);
