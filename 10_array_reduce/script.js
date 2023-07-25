// array.reduce takes two paramters which are previousValue and currentValue and also you can pass another argument as initialValue

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  // initial Value is not required but you can set it to 0 end of the function
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);
// when you change initial value you will be start from 10 and result will be 65 instead of 55

console.log(sum);
console.log(sum2);
