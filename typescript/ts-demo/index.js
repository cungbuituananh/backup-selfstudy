"use strict";
exports.__esModule = true;
function printAll(strs) {
    if (typeof strs === "object") {
        console.log(strs);
        // for (const s of strs) {
        //   //   Object is possibly 'null'.
        //   console.log(s);
        // }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        // do nothing
    }
}
printAll(null);
