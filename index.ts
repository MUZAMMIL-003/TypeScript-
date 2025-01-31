let num : number = 1;
let str : string = "Hello";
let bool : boolean = true;
let obj : object = {first: "obj"};
let arr : number[] = [1, 2, 3];
let arr2 : Array<number> = [1, 2, 3];
let tuple : [string, number] = ["tuple", 1];
let any : any = 1;
let unknown : unknown = 1;
let nul : null = null;
let und : undefined = undefined;
let voidType : void = undefined;
let never : never = (() => {throw new Error("error")})();
let func : Function = () => {};
func();
let func2 : (a: number, b: number) => number = (a, b) => a + b;
func2(1, 2);
let func3 : (a: number, b: number) => number = function(a, b) {return a + b};
func3(1, 2);


interface User {
    name: string;
    age: number;
    phoneNum : string;
    favNums : number[];
    favDishes : string[];
}

const user : User = {
    name: "John",
    age: 20,
    phoneNum: "010-1234-5678",
    favNums: [1, 2, 3],
    favDishes: ["pasta", "pizza"]
}
console.log(user);
