var num = 1;
var str = "Hello";
var bool = true;
var obj = { first: "obj" };
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var tuple = ["tuple", 1];
var any = 1;
var unknown = 1;
var nul = null;
var und = undefined;
var voidType = undefined;
var never = (function () { throw new Error("error"); })();
var func = function () { };
func();
var func2 = function (a, b) { return a + b; };
func2(1, 2);
var func3 = function (a, b) { return a + b; };
func3(1, 2);
var user = {
    name: "John",
    age: 20,
    phoneNum: "010-1234-5678",
    favNums: [1, 2, 3],
    favDishes: ["pasta", "pizza"]
};
console.log(user);
