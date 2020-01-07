// // **********correct ***
// // Task10
// // Напишіть функці, яка приймає о'бєкт як аргумент і повертає стрінг з даними про місто.
// // Наприклад:
// // cityFacts({
// //     name: "Paris",
// //     population: "2,140,526",
// //     continent: "Europe"
// //   }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
// function cityFacts(arg) {
//     console.log(arg.name + " has a population of " + arg.population + " and is situated in " + arg.continent)

// }
// cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// })




// // Task11 ******* correct 
// // Напишіть функцію, яка приймає значення і об'єкт в якому є 2 ключі(min, max) з відповідними до них
// // значеннями.
// // Функція має повернути true, якщо значення(перший аргумент) лежить в проміжку min-max.
// // Наприклад:
// // isInRange(4, { min: 0, max: 5 }) ➞ true
// // isInRange(4, { min: 4, max: 5 }) ➞ true
// // isInRange(4, { min: 6, max: 10 }) ➞ false
// // isInRange(5, { min: 5, max: 5 }) ➞ true

// function isInRange(num, arg) {
//     console.log(num > arg.min && num < arg.max);
// }

// isInRange(4, {
//     min: 0,
//     max: 5
// });
// isInRange(4, {
//     min: 6,
//     max: 10
// });




// // **********correct *** 
// // // Task12 Напишіть функцію, яка перевірятиме чи об'єкт має певний ключ. Наприклад:
// // hasKey({ a: 44, b: 45, c: 46 }, "d") ➞ false
// // hasKey({ craves: true, midnight: true, snack: true }, "morning") ➞ false
// // hasKey({ pot: 1, tot: 2, not: 3 }, "not") ➞ true

// function hasKey(arg, key1) {
//     console.log(key1 in arg);

// }

// hasKey({
//     pot: 1,
//     tot: 2,
//     not: 3
// }, "not");
// hasKey({
//     craves: true,
//     midnight: true,
//     snack: true
// }, "morning");




// // **********correct *** 
// // Task 13
// // Написати функцію, яка приймає стрінг з довільними бувами.
// // Функція повинна повертати об'єкт, де кожне значення зі стрінга переводиться в ключ і 
// //відповідне значення у верхньому регістрі.
// // Тобто ви маєте вернути об'єкт в якому будуть пари: ключ і значення у верхньому регістрі.
// // Наприклад:
// // mapping("ps") ➞ { "p": "P", "s": "S" }
// // mapping("abc") ➞ { "a": "A", "b": "B", "c": "C" }
// // mapping("avyz") ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }

// function mapping(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         let key1 = str[i];
//         obj[key1] = str[i];

//     }
//     console.log(obj);
// }

// mapping("avyz");




// // **********correct *** 
// // Task 14
// // Написати функцію, яка прийматиме об'єкт, будуватиме з нього привітання і повертатиме стрінг.
// // Наприклад:


// // greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."
// // greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."
// // greeting("Monti") ➞ "Hi! I'm a guest.

// // Якщо переданого імені немає в об'єкті, то виводимо "Hi! I'm a guest."

// const guestList = {
//     Randy: "Germany",
//     Karla: "France",
//     Wendy: "Japan",
//     Norman: "England",
//     Sam: "Argentina"
// }

// function greeting(name) {
//     if (name in guestList) {
//         let key1 = name;
//         console.log("Hi! I'm ," + key1 + " and I'm from " + guestList[key1]);
//     } else {
//         console.log("Hi! I'm a guest.");
//     }

// }
// greeting("Randy");
// greeting("Sam");
// greeting("roka");




// // **********correct *** 
// // Task 15:
// // Написати функцію, яка прийматиме об'єкт і  перевірятиме чи можлива безкоштовна доставка до
// // користувача.
// // Доставка є можливою тільки якщо сума покупки перевищує 50$.
// // Наприклад:
// // freeShipping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }) ➞ false
// // freeShipping({ "Flatscreen TV": 399.99 }) ➞ true
// // freeShipping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }) ➞ true

// function freeShipping(arg) {
//     let sum = 0;
//     for (let key in arg) {
//         sum += arg[key];
//     }
//     console.log(sum > 50);
// }
// freeShipping({
//     "Shampoo": 5.99,
//     "Rubber Ducks": 15.99
// });
// freeShipping({
//     "Monopoly": 11.99,
//     "Secret Hitler": 35.99,
//     "Bananagrams": 13.99
// });




// // **********correct *** 
// // Task 16
// // Написати функцію, яка рахуватиме кількість букв і цифр в стрінгу і 
// //записуватиме ці значення в об'єкт
// // Наприклад:
// // countAll("Hello World") ➞ {"LETTERS":  10, "DIGITS": 0}
// // countAll("H3ll0 Wor1d") ➞ {"LETTERS":  7, "DIGITS": 3}
// // countAll("149990") ➞ {"LETTERS": 0, "DIGITS": 6}

// function countAll(str) {
//     let result = {};
//     let remText = str.replace(/ /g, "");
//     result.DIGITS = remText.match(/\d/g).length;
//     result.LETTERS = remText.length - remText.match(/\d/g).length;
//     console.log(result);
// }

// countAll("Hello World134");
// countAll("H3ll0 Wor1d");


// //**********correct *** 
// // Task 17:
// // Написати функцію, яка приймає об'єкт з іменем і віком. Функція має повернути ім'я найстаршої особи


// function oldest(arg) {
//     let result = 0;
//     for (let key in arg) {
//         if (result < arg[key]) {
//             result = arg[key];
//         }
//     }
//     for (let key in arg) {
//         if (arg[key] === result) {
//             console.log(key);
//         }
//     }

// }

// oldest({
//     Max: 9,
//     Josh: 13,
//     Sam: 48,
//     Anne: 33
// });

// oldest({
//     Emma: 71,
//     Jack: 45,
//     Amy: 15,
//     Ben: 29,
//     mike: 100
// });



// // 1 - 10

// //**********correct *** 
// // Task1
// // Написати функцію, яка виведе список всіх пропертей об'єкту
// // Приклад:

// const student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// function foo() {
//     console.log(Object.keys(student));
// }

// foo();



// //**********correct *** 
// // Task 2
// // Написати функцію, яка приймає об'єкт, створює новий в якого ключем буде значення, а 
// //значенням ключ з попереднього об'єкту
// // Наприклад:

// const student = {
//     name: "David Rayy",
//     sclass: "VI",
//     rollno: 12
// };

// function revercearg(student) {
//     let obj = {};

//     for (let key in student) {
//         obj[key] = student[key];
//         let value = key;
//         let name = student[key];
//         for (let key in obj) {
//             key = name;
//             obj[key] = value;
//         }
//     }

//     for (let key in obj) {
//         if (obj[key] === student[key]) {
//             delete obj[key];
//         }
//     }
//     console.log(obj);
// }

// revercearg(student);


// //**********correct *** 
// // Task3
// // Написати функцію, яка приймає об'єкт із значенням, висоти, ширини і висоти.
// // Функція має повернути об'єм прямокутника
// // Наприклад:
// // calcVolume({ width: 2, length: 5, height: 1 }) ➞ 10

// // calcVolume({ width: 4, length: 2, height: 2 }) ➞ 16

// // calcVolume({ width: 2, length: 3, height: 5 }) ➞ 30

// function calcVolume(arg) {
//     let result = 1;
//     for (let key in arg) {
//         result *= arg[key];
//     }
//     console.log(result);
// }

// calcVolume({
//     width: 2,
//     length: 3,
//     height: 5
// });
// calcVolume({
//     width: 2,
//     length: 5,
//     height: 1
// })


// //**********correct *** 
// // Task 4.
// // написати функцію , яка приймає параметр обєкт
// // і повертає довжину обєкту (кількість ключів)
// // не використовувати метод Object.keys(obj).length

// function func(myObj) {
//     let result = 0;
//     for (let key in myObj) {
//         result++;
//     }
//     return result;
// }

// // вхідні параметри
// const obj = {
//     name: "Aria",
//     surname: "Stark",
//     city: "Winterfell",
//     isMarried: false
// }
// console.log(func(obj)); // повинно повернути 4


// //**********correct *** 
// // Task 5
// // написати функцію, яка приймає обєкт
// // і повертає true, якщо він пустий
// // чи false, якщо не пустий

// // приклад
// const obj1 = {};
// const obj2 = {
//     name: "name"
// };
// const obj3 = {};


// function func(myObj) {
//     let a = Object.keys(myObj).length > 0;
//     return !a;
// }

// console.log(func(obj1));
// console.log(func(obj2));
// console.log(func(obj3));




// //**********correct *** 
// // Task 6
// // написати функцію, яка приймає об'єкт
// // і повертає сумму всіх його значень
// // наприклад

// const salaries = {
//     "ivan": 500,
//     "petya": 600,
//     "serhiy": 2000,
//     "sasha": 2500
// }

// //  // функція повинна повернути 2000 + 2500 + 600 + 500 = 5600

// function func(obj) {
//     sum = 0;
//     for (let key in obj) {
//         sum += obj[key];
//     }
//     return sum;
// }

// console.log(func(salaries));




// //**********correct *** 
// //   Task 7
// // написати функцію, яка приймає обєкт
// let salaries = {
//     "ivan": 500,
//     "petya": 600,
//     "serhiy": 2000,
//     "sasha": 2500
// }

// // і повертає імя з найбільшою зарплатою

// function func(obj) {
//     let result = 0;
//     for (let key in obj) {
//         if (result < obj[key]) {
//             result = obj[key];
//         }
//     }
//     for (let key in obj) {
//         if (obj[key] === result) {
//             // console.log(key);
//             return key;
//         }
//     }
// }
// console.log(func(salaries));


// //**********correct *** 
// // Task 8
// // написати функцію, яка приймає обєкт

// const obj1 = {
//     name: "John",
//     salary: 500,
//     bonus: 50
// }


// //   // і якщо salary менше 600 , то
// //   // потрібно премію (bonus) помножити на 2
// //   // функція повинна повернути модифікований обєкт

// let obj2 = {};

// function func(myObj) {
//     for (let key in obj1) {
//         myObj[key] = obj1[key];

//     }
//     if (myObj.salary < 600) {
//         myObj.bonus = myObj.bonus * 2;
//     }

//     return myObj;
// }

// console.log(obj1);
// console.log(func(obj2))


// //**********correct *** 
// //   Task 9

let obj = {
    user1: {
        name: "sasha",
        surname: "ivanov",
        yearsInCompany: 5,
        salary: 1000
    },
    user2: {
        name: "pasha",
        surname: "stepanov",
        yearsInCompany: 2,
        salary: 600
    },
    user3: {
        name: "vasya",
        surname: "pupkin",
        yearsInCompany: 1,
        salary: 400
    },
    user4: {
        name: "petya",
        surname: "bamper",
        yearsInCompany: 15,
        salary: 3000
    }
}



// потрібно перебрати обєкти і якщо юзер
// працює в компанії більше 4 років
// докинути до ЗП 200
// якщо більше 10 - додати до ЗП 400


// функція повинна повертати модифіковаинй обєкт

function func(obj) {
    if (obj.user1.yearsInCompany > 4) {
        obj.user1.salary = obj.user1.salary + 200;
    }
    else if (obj.user1.yearsInCompany > 10) {
        obj.user1.salary = obj.user1.salary + 400;
    }

    if (obj.user2.yearsInCompany > 4) {
        obj.user2.salary = obj.user2.salary + 200;
    }
    else if (obj.user2.yearsInCompany > 10) {
        obj.user2.salary = obj.user2.salary + 400;
    }

    if (obj.user3.yearsInCompany > 4) {
        obj.user3.salary = obj.user3.salary + 200;
    }
    else if (obj.user3.yearsInCompany > 10) {
        obj.user3.salary = obj.user3.salary + 400;
    }

    if (obj.user4.yearsInCompany > 10) {
        obj.user4.salary = obj.user4.salary + 400;
    }

    else if (obj.user4.yearsInCompany > 4) {
        obj.user4.salary = obj.user4.salary + 200;
    } 


    return obj;

}

console.log(func(obj));