let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// пункт 1

// let i = 0;
// while (i < array.length) {
//   document.write(`${array[i]};`);
//   i++;
// }

// пункт 2

// for (let i = 0; i < array.length; i++) {
//   document.write(`${array[i]};`);
// }

// пункт 3

// let i = 0;
// while (i < array.length) {
//   if (i % 2 !== 0) {
//     document.write(`${array[i]};`);
//   }
//   i++;
// }

// пункт 4

// for (let j = 0; j < array.length; j++) {
//   if (j % 2 !== 0) {
//     document.write(`${array[j]};`);
//   }
// }

// пункт 5

// let i = 0;
// while (i < array.length) {
//   if (array[i] % 2 === 0) {
//     document.write(`${array[i]};`);
//   }
//   i++;
// }

// пункт 6

// for (let j = 0; j < array.length; j++) {
//   if (array[j] % 2 === 0) {
//     document.write(`${array[j]};`);
//   }
// }

// пункт 7

// for (let j = 0; j < array.length; j++) {
//   if (array[j] % 3 === 0) {
//     array[j] = "okten";
//   }
//   document.write(`${array[j]};`);
// }

// пункт 8

// for (let j = array.length - 1; j >= 0; j--) {
//   document.write(`${array[j]};`);
// }

// пункт 9.1
// let i = array.length - 1;
// while (i >= 0) {
//   document.write(`${array[i]};`);
//   i--;
// }

// пункт 9.2
// for (let i = array.length - 1; i >= 0; i--) {
//   document.write(`${array[i]};`);
// }

// пункт 9.3
// let i = array.length - 1;
// while (i >= 0) {
//   if (i % 2 !== 0) {
//     document.write(`${array[i]};`);
//   }
//   i--;
// }

// пункт 9.4
// for (let j = array.length - 1; j >= 0; j--) {
//   if (j % 2 !== 0) {
//     document.write(`${array[j]};`);
//   }
// }

// пункт 9.5
// let i = array.length - 1;
// while (i >= 0) {
//   if (array[i] % 2 === 0) {
//     document.write(`${array[i]};`);
//   }
//   i--;
// }

// пункт 9.6
// for (let j = array.length - 1; j >= 0; j--) {
//   if (array[j] % 2 === 0) {
//     document.write(`${array[j]};`);
//   }
// }

// пункт 9.7
for (let j = array.length - 1; j >= 0; j--) {
  if (array[j] % 3 === 0) {
    array[j] = "okten";
  }
  document.write(`${array[j]};`);
}
