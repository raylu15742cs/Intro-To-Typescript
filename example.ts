// Type Annotations

// let myName: string = "CJ";
// let isCool: boolean = true;
// let favNumber: number = 42;

// function add(a: number,b: number) {
//     return a + b;
// }

// console.log(add(40, 2));

// Inferred Types

// let myName = "CJ";
// let isCool = true;
// let favNumber = 42;

// function add(a: number,b: number) {
//     return a + b;
// }

// let result = add(40, 2) 

// console.log(result);

// const numbers = [4, 7, 13, 42];

// // numbers.push("wow");

// // Union Types
// const numbersAndStrings: (string | number)[] = ["Panzer", 4, "CJ", 7, 13, 42];

// let theAnswer: string | number = 42;
// theAnswer = "42";

// console.log(numbersAndStrings)

// Objects and Interfaces

// interface Person {
//     name: string;
//     favNumber: number;
// }

// function greet(person: Person) {
//     return `Hello ${person.name}`
// }

// console.log(greet({
//     name: "CJ",
//     favNumber: 42
// }));

// Optional Properties
// type StreamerType = "affiliate" | "partner";


// interface Person {
//     name: string;
//     favNumber: number;
//     dogName? : string;
//     streamerType: StreamerType;
//     currentTime?() : Date;
// }

// type Person = {
//     name: string;
//     favNumber: number;
//     dogName?: string;
// }

// function greet(person: Person) {
//     if(person.currentTime) {
//         return `Hello ${person.name} it is ${person.currentTime()}`
//     }
//     return `Hello ${person.name}`;
// }

// console.log(greet({
//     name: "CJ",
//     favNumber: 42,
//     streamerType: "partner",
//     currentTime() {
//         return new Date();
//     }
// }));

// function greetPersonAndDog(person: Person) {
//     if (person.dogName) {
//         return `Hello ${person.name} and there dog ${person.dogName}`
//     }
//     return greet(person)
// }

// console.log(greetPersonAndDog({
//     name: "Chris",
//     favNumber: 13,
//     dogName: "Blu",
//     streamerType: "partner",
//     currentTime() {
//         return new Date();
//     }
// }))

// type


// Classes

// class Person {
//     name: string;
//     dogName: string;
//     favNumber: number;

//     constructor(name: string, dogName: string, favNumber: number) {
//         this.name = name;
//         this.dogName = dogName;
//         this.favNumber = favNumber;
//     }
// }

class Person {
    static species = "Homosapean"
    constructor(
        public name: string,
        public dogName: string,
        public favNumber: number,
        protected internalSecret : string,
        private privateSecret: string,
    ) {}
}
const cj = new Person ("CJ" , "Panzer" , 42, "supersecret" , "supersupersecret");

console.log(cj)

function greet(person: Person) {
    return `Hello ${person.name}`;
}

// Generics

function sortItems<T>(
    items: T[],
    compareFN: (a: T, b: T)=> number
    ): T[] {
    return items.sort(compareFN)
}

const numbers = [42, 3 , 77 , 13 , 104, 82];

const sortedNumber = sortItems<number>(
    numbers,
    (a,b) => a-b
)

console.log(sortedNumber)

const names = ["CJ" , "AJ" , "BE" , "tommy"]

const sortedNames = sortItems<string>(
    names,
    (a , b ) => a.localeCompare(b),
)

console.log(sortedNames)
// any, unknown, never

// Type Assertions

// const x = "hello" as unknown as number ;

// @ts-ignore / @ts-nocheck
