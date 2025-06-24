let array33: (number | string)[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// пункт 1

// let i = 0;
// while (i < array33.length) {
//   document.write(`${array33[i]};`);
//   i++;
// }

// пункт 2

// for (let i = 0; i < array33.length; i++) {
//   document.write(`${array33[i]};`);
// }

// пункт 3

// let i = 0;
// while (i < array33.length) {
//   if (i % 2 !== 0) {
//     document.write(`${array33[i]};`);
//   }
//   i++;
// }

// пункт 4

// for (let j = 0; j < array33.length; j++) {
//   if (j % 2 !== 0) {
//     document.write(`${array33[j]};`);
//   }
// }

// пункт 5

// let i = 0;
// while (i < array33.length) {
//   if (array33[i] % 2 === 0) {
//     document.write(`${array33[i]};`);
//   }
//   i++;
// }

// пункт 6

// for (let j = 0; j < array33.length; j++) {
//   if (array33[j] % 2 === 0) {
//     document.write(`${array33[j]};`);
//   }
// }

// пункт 7

// for (let j = 0; j < array33.length; j++) {
//   if (typeof array33[j] === "number" && (array33[j] as number) % 3 === 0) {
//     array33[j] = "okten";
//   }
//   document.write(`${array33[j]};`);
// }

// пункт 8

// for (let j = array33.length - 1; j >= 0; j--) {
//   document.write(`${array33[j]};`);
// }

// пункт 9.1
// let i = array33.length - 1;
// while (i >= 0) {
//   document.write(`${array33[i]};`);
//   i--;
// }

// пункт 9.2
// for (let i = array33.length - 1; i >= 0; i--) {
//   document.write(`${array33[i]};`);
// }

// пункт 9.3
// let i = array33.length - 1;
// while (i >= 0) {
//   if (i % 2 !== 0) {
//     document.write(`${array33[i]};`);
//   }
//   i--;
// }

// пункт 9.4
// for (let j = array33.length - 1; j >= 0; j--) {
//   if (j % 2 !== 0) {
//     document.write(`${array33[j]};`);
//   }
// }
33;
// пункт 9.5
// let i = array33.length - 1;
// while (i >= 0) {
//   if (array33[i] % 2 === 0) {
//     document.write(`${array33[i]};`);
//   }
//   i--;
// }

// пункт 9.6
// for (let j = array33.length - 1; j >= 0; j--) {
//   if (array33[j] % 2 === 0) {
//     document.write(`${array33[j]};`);
//   }
// }

// пункт 9.7
for (let j = array33.length - 1; j >= 0; j--) {
  if (typeof array33[j] === "number" && (array33[j] as number) % 3 === 0) {
    array33[j] = "okten";
  }
  document.write(`${array33[j]};`);
}
