// console.log('---2.1-OK--');
// const draw2= function(n){
//   let text = "";
//   for (let i = 0; i < n ; i++) {
//     for (let j = 0; j < n ; j++) {
//       if (j <= i ) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//   console.log(text);
// }

// draw2(2);
// draw2(3);
// draw2(4);

// console.log('---2.2-OK--');
// const draw = function(n) {
//     let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n ; j++) {
//       if (j < n - i ) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//     console.log(text);
//   };

//   draw(2);
//   draw(3);
//   draw(4);

// console.log('---2.3-OK--');
// const draw= function(n){
//   let text = "";
//   for (let i = 0; i < n -1 ; i++) {
//     for (let j = 0; j < n ; j++) {
//       if (j <= i ) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//   for (let i = 0; i < n ; i++) {
//         for (let j = 0; j < n ; j++) {
//           if (j < n - i  ) {
//             text += "*";
//           } else {
//             text += "-";
//           }
//         }
//         text += "\n";
//       }
//         console.log(text);
//       };
// draw(2);
// draw(3);
// draw(4);

// console.log("----2.4-OK---");
// const draw = function (n) {
//     // debugger;
//   let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j <= i ) {
//         text += 1 + i;
//       } else {
//         text += "-";
//       }
//      }
//        text += "\n";
//     }
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 0 ; j < n ; j++) {
//       if (n - i - 1 > j ) {
//         text += n - i -1 ;
//        } else if (j <= n - 1 ) {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//   console.log(text);
// };
// draw(2);
// draw(3);
// draw(4);

// console.log('---2.5-OK---');
// const draw = function (n) {
//     let text = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (j >= (n - i) - 1) {
//           text += "*";
//         } else {
//           text += "-";
//         }
//       }
//       text += "\n";
//     }
//     console.log(text);
//   };

//   draw(2);
//   draw(3);
//   draw(4);

// console.log('------2.6-OK-------')
// const draw = function (n) {
//     let text = "";
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < n; j++) {
//         if (j >= i) {
//           text += "*";
//         } else {
//           text += "-";
//         }
//       }
//       text += "\n";
//     }
//     console.log(text);
//   };

//   draw(2);
//   draw(3);
//   draw(4);

// console.log("----2.7-OK----");
// const draw = function (n){
//   let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j >= n - i - 1) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//       }
//   for (let i = 0; i < n -1; i++) {
//     for (let j = 0; j < n ; j++) {
//       if (j >= i + 1) {
//         text += "*";
//       } else {
//         text += "-   ";
//       }
//     }
//     text += "\n";
//   }
//   console.log(text);
// }
// draw7(2);
// draw7(3);
// draw7(4);

// console.log("----2.8--OK--");
// const draw = function(n) {
//   let text = "";
//   let num1 = 1;
//   // First half
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       text += "-";
//     }
//     for (let j = 0; j < i + 1; j++) {
//       text += num1;
//       num1++;
//     }
//     text += "\n";
//   }
//   // Second half
//   let num2 = (n * (n + 1)) / 2 + 1;
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = 0; j < n - i - 1; j++) {
//       text += "-";
//     }
//     for (let j = 0; j < i + 1; j++) {
//       text += num2;
//       num2++;
//     }
//     text += "\n";
//   }
//   console.log(text);
// }
// draw(2);
// draw(3);
// draw(4);

// console.log("----2.9-OK----");
// const draw = function (n){
//   let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }

//   console.log(text);
// };
// draw(2);
// draw(3);
// draw(4);

// console.log('-----2.10--OK---')
// const draw = function (n) {
//     let text = "";
//     for (let i = n; i >= 1; i--) {
//       for (let j = 1; j <= n - 1 + i; j++) {
//         if (j <= i - n ) {
//           text += "";
//         } else if (j >= n - i + 1 ) {
//           text += "*" ;
//         } else {
//           text += "-";
//          }
//          }
//     for (let j = 0; j < n - i; j++) {
//         if (n + i < j) {
//           text += "-" ;
//         } else {
//           text += "-" ;
//         }
//         }
//         text += "\n";
//         }
//         console.log(text);
//   };
//   draw2(2);
//   draw2(3);
//   draw2(4);
