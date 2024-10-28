"use strict";

const fruit = ["apple", "banana", "cherry"];

fruit.forEach((f) => console.log(f));

// no variable
[111, 444, 222].forEach((n) => console.log(n));

// for (let i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }

["apple", "banana", "cherry"].forEach((f) => console.log(f));

// EXTRA CREDIT = show diff between current value and previous value
[11, 14, 16, 25].forEach((n, i, a) => (i ? console.log(n - a[i - 1]) : 0));

// difference between current and previous value
[11, 14, 16, 25].forEach((n, i, a) => {
  if (i) {
    const diff = n - a[i - 1];
    console.log(
      `Current value: ${n}, Previous value: ${a[i - 1]}, Difference: ${diff}`
    );
  } else {
    console.log(`Current value: ${n}, Previous value: N/A, Difference: N/A`);
  }
});
