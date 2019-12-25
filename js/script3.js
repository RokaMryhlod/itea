


// 1. Прочитати https://learn.javascript.ru/ розділ 2.12 - done




// 2. В діапазоні від 1 до 50 вивести всі числа кратні 3.(while) - done

// let a = 3;
// while (a < 50) {
// console.log(a);
// 	a += 3;
//  }






// 3. В діапазоні від 0 до 20 додати всі парні числа. тобто код має додати 0+2+4+6+8+10+12+14+16+18 = 90

// let sum = 0;
//     for(var x = 1; x < 20; x++){
//       if(x % 2 === 0){
//       sum += x;
//       }
//     }
// console.log(sum);






// 4. Використовуючи prompt i while напишіть код, який питає в юзера число, якщо число менше 100 ,
// то попросіть знову ввести число. Хай вводить число до тих пір, поки не введе 100 або більше  - done



// let number;
// do {
// 	number = +prompt("enter the number");
// } while (number < 100);





// // 5. Перевірити стрічку "Hello Admin!" на те чи перший символ з великої літери, чи є в реченні 
// пробіл і чи останній символ знак оклику. Якщо всі умови справджуються, то виводимо "hello admin". 
// В іншому випадку виводимо "bye".

// const hello = "Hello Admin!"
// if (hello[0] === "H" && hello.indexOf(" " > -1)){
// 	console.log("hello admin");
// }
// else {
// 	console.log("bye!");
// }





// // 6. Є стрічка “qwerty”. Написати код, який міняє регістр з нижнього на верхній. Тобто результат має
//  бути “QWERTY”  - done

// const str2 = "qwerty"; 
// console.log(str2.toUpperCase());






// // 7. Є стрічка “qWeRtY”. Написати код, який міняє регістр з нижнього на верхній і навпаки. Тобто
//  результат має бути “QwErTy”

//  let str3 = "qWeRtY"; 
// let nameChanged = str3[0].toUpperCase() + str3[1].toLowerCase() + str3[2].toUpperCase() + str3[3].toLowerCase() +  str3[4].toUpperCase() + str3[5].toLowerCase() ;
// console.log(nameChanged); 

//-2nd solution:

// var b = '';
// var a = "qWeRtY";
//             for (i = 0; i < a.length; i++) {
//                 if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
//                     b = b + a.charAt(i).toLowerCase();
//                 }
//                 else
//                     b = b + a.charAt(i).toUpperCase();
//             }
//   console.log(b);


let str ='qWeRtY';
let str2 = '';

for (let i = 0; i < str.length; i++) {
  if (str[i].match(/[A-Z]/)) {
    str2 += str[i].toLowerCase();
  } else if (str[i].match(/[a-z]/)) {
      str2 += str[i].toUpperCase();
  }
  else {str2 += str[i]};
} 
console.log(str2);
