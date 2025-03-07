
"use strict";

//all types of variables in typescript by copilot
let num = 1;
let str = "Hello";
let bool = true;
let obj = { first: "obj" };
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
let tuple = ["tuple", 1];
let any = 1;
let unknown = 1;
let nul = null;
let und = undefined;
let voidType = undefined;
let never = (() => { throw new Error("error"); })();
let func = () => { };
func();
let func2 = (a, b) => a + b;
func2(1, 2);
let func3 = function (a, b) { return a + b; };
func3(1, 2);
const user = {
    name: "John",
    age: 20,
    phoneNum: "010-1234-5678",
    favNums: [1, 2, 3],
    favDishes: ["pasta", "pizza"]
};
console.log(user);
const user1 = {
    name: "John",
    age: 20,
    favNums: 123,
};
console.log(user1);
const user2 = {
    name: "John",
    age: 20,
    favNums: [1, 2, 3],
};
console.log(user2);
/// agar hamey ek object me multiple types of data chahiye to hum is tarah se bana sakte hain
const user3 = {
    name: "John",
    age: 20,
    favNums: {
        one: "1",
        two: 2,
        three: true
    },
};
console.log(user3);

// it,s called Enums
var colorStatus;
(function (colorStatus) {
    colorStatus[colorStatus["RED"] = 0] = "RED";
    colorStatus[colorStatus["GREEN"] = 1] = "GREEN";
    colorStatus[colorStatus["BLUE"] = 2] = "BLUE";
    colorStatus[colorStatus["YELLOW"] = 3] = "YELLOW";
})(colorStatus || (colorStatus = {}));
let colors = [
    {
        color: "red",
        colorNum: colorStatus.RED
    },
    {
        color: "green",
        colorNum: colorStatus.GREEN
    },
    {
        color: "blue",
        colorNum: colorStatus.BLUE
    },
    {
        color: "yellow",
        colorNum: colorStatus.YELLOW
    }
];


// function k arguments ko type dena
let sum = (a, b) => {
    return a + b; // agar hum chahtey hen ki return mlney wali value bhi number ho to hum uper parameter k baad number likh saktey hen 
};
let result = sum(10, 10);
let greet = (userName) => {
    return `Welcome ${userName}`;
};



// just like javascript
let abc = "abc";
abc = 123;
abc = true;
abc = [1, 2, 3];