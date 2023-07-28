// console.log("------1.6 OK------");
// function draw(num) {
//   let text = "";
//   for (let i = 1; i <= num ** 2 ; i++) {
//     if (i % num == 0) {
//         text += i + "\n";
//     } else {
//         text += i;
//     }
//   }
//     console.log(text);
// };
// draw(2);
// draw(3);
// draw(4);

// console.log("-----1.7-OK----");
// function draw(num) {
//   let text = "";
//   for (let i = num ** 2; i >= 1; i--) {
//     if (i % num === 1) {
//       text += i + "\n";
//     } else {
//       text += i;
//     }
//   }
//   console.log(text);
// }

// draw(2);
// draw(3);
// draw(4);

// console.log("--1.8--");
// function draw(num) {
//   let text = "";
//   for (let i = 0; i <= (num * 2)-2 ; i += 2) {
//     text += i + "\n";
//   }
//   console.log(text);
// }

// draw(2);
// draw(3);
// draw(4);

// console.log('---1.9-Ok---')
// function draw(num) {
//     let text = "";
//     for (let i = 2 ; i <= num * 2; i+= 2) {
//         for (let j = num ** 2; j <= 2; j++) {
//          text += "\n";
//          }
//          text += i + "\n" ;
//         }
//         console.log(text);
//   };
//   draw(2);
//   draw(3);
//   draw(4);

// console.log('--1.10--OK--')
// function draw(num) {
//     let text = "";
//     for (let i = 1; i <= num; i++) {
//       for (let j = 1; j <= num; j++) {
//         text += i * j;
//       }
//       text += "\n";
//     }
//     console.log(text);
//   }

//   draw(2);
//   draw(3);
//   draw(4);

// console.log('--1.11 OK---');
// const draw11 = function(n){
//   let text = "";
//   for (let i = 0; i < n ; i++) {
//     for (let j = 0; j < n ; j++) {
//       if (i === j ) {
//         text += "-";
//       } else {
//         text += "*";
//       }
//     }
//     text += "\n";
//   }
//   console.log(text);
// }

// draw11(2);
// draw11(3);
// draw11(4);

// console.log("--1.12-OK--");
// const draw12 = function (n) {
//   let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j === n - i - 1) {
//         text += "-";
//       } else {
//         text += "*";
//       }
//     }
//     text += "\n";
//   }
//   console.log(text);
// };
// draw12(2);
// draw12(3);
// draw12(4);
