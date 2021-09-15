// Class
export {};
type NumberOrString = number | string;

// We can export and use anywhere we want on our project
export class Student {
  // We need to assign private / public or / readonly flag before name of constructor
  // private: can't access outside class
  // public: cant access and edit value outside class
  // readonly: just read and can't edit
  constructor(
    private name: string,
    private id: NumberOrString,
    private male: boolean
  ) {}
  print() {
    return `Hello ${this.name}, you have id is ${this.id}`;
  }
}

let tuananh = new Student("tuananh", 1, true);
let ha2kc = new Student("phamha", 2, true);

let studentList: Student[] = [];

studentList.push(tuananh);
studentList.push(ha2kc);

console.log(studentList);
console.log(tuananh.print());
