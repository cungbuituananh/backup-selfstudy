"use strict";
exports.__esModule = true;
exports.Student = void 0;
// We can export and use anywhere we want on our project
var Student = /** @class */ (function () {
    // We need to assign private / public or / readonly flag before name of constructor
    // private: can't access outside class
    // public: cant access and edit value outside class
    // readonly: just read and can't edit
    function Student(name, id, male) {
        this.name = name;
        this.id = id;
        this.male = male;
    }
    Student.prototype.print = function () {
        return "Hello " + this.name + ", you have id is " + this.id;
    };
    return Student;
}());
exports.Student = Student;
var tuananh = new Student("tuananh", 1, true);
var ha2kc = new Student("phamha", 2, true);
var studentList = [];
studentList.push(tuananh);
studentList.push(ha2kc);
console.log(studentList);
console.log(tuananh.print());
