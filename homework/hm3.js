// console.log("--3.1--OK-----");
// const draw = function(n) {
//   let text = "";
//    for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//    for (let i = n - 2; i >= 0; i--) {
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
// }

// draw(2);
// draw(3);
// draw(4);

// console.log("----3.2--OK----");
// const draw = function(n) {
//   let text = "";
//   let num1 = 1;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += num1;
//         num1++;
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//   for (let i = n - 2; i >= 0; i--) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += num1;
//         num1++;
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

// console.log("----3.3--OK---");
// const draw = function(n)  {
//  console.log();
//   let array = [];
//   let text = "";
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (j - 1 >= i) {
//         text += "-";
//       } else if (i % 2 == 2) {
//         text += "";
//       } else {
//         text += "*";
//       }
//     }
//     text += "\n";
//   }
// array.push([text]);
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
//  }
// };
// draw(2);
// draw(3);
// draw(4);

// console.log("----3.4--OK---");
// const draw = function(n) {
//   console.log();
//   let array = [];
//   let text = "";
//    for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
//    for (let i = n - 2; i >= 0; i--) {
//     for (let j = 0; j < n * 2 - 1; j++) {
//       if (j >= n - i - 1 && j <= n + i - 1) {
//         text += "*";
//       } else {
//         text += "-";
//       }
//     }
//     text += "\n";
//   }
// array.push([text]);
// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array[i].length; j++) {
//     console.log(array[i][j]);
//   }
//  }
// };
// draw(2);
// draw(3);
// draw(4);
