all types of variables in typescript by copilot
let num: number = 1;
let str: string = "Hello";
let bool: boolean = true;
let obj: object = { first: "obj" };
let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3];
let tuple: [string, number] = ["tuple", 1];
let any: any = 1;
let unknown: unknown = 1;
let nul: null = null;
let und: undefined = undefined;
let voidType: void = undefined;
let never: never = (() => { throw new Error("error") })();
let func: Function = () => { };
func();
let func2: (a: number, b: number) => number = (a, b) => a + b;
func2(1, 2);
let func3: (a: number, b: number) => number = function (a, b) { return a + b };
func3(1, 2);


interface User {
    name: string;
    age: number | string; /// it can be number or string
    phoneNum?: string; //// optional
    favNums: number[];
    favDishes: string[];
}

const user: User = {
    name: "John",
    age: 20,
    phoneNum: "010-1234-5678",
    favNums: [1, 2, 3],
    favDishes: ["pasta", "pizza"]
}
console.log(user);

// type :any is called dynamic type..









// it,s called generic type
interface User1<Type> {
    name: string;
    age: number;
    phoneNum?: string; //// optional
    favNums: Type;
}

const user1: User1<number> = {
    name: "John",
    age: 20,
    favNums: 123,
}
console.log(user1);

const user2: User1<number[]> = {
    name: "John",
    age: 20,
    favNums: [1, 2, 3],
}
console.log(user2);



/// agar hamey ek object me multiple types of data chahiye to hum is tarah se bana sakte hain
const user3: User1<{ one: string, two: number, three: boolean }> = {
    name: "John",
    age: 20,
    favNums: {
        one: "1",
        two: 2,
        three: true
    },
}
console.log(user3);





// it,s called Enums
enum colorStatus {
    RED, // agar hum chahtey hen ki ye 1 se start ho to hum isko " = 1" kar denge
    GREEN,// agar hum chahtey hen ki iski type string ho to hum islo " = string" kar denge 
    BLUE,
    YELLOW,
}

let colors: { color: string, colorNum: number }[] = [
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
]