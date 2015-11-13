namespace destructuringsample {

  interface Drinkable {
    alcoholic: boolean;
    age: number;
  }

  var water = {
    alcoholic: false,
    age: 0
  };

  var {age} = water;
  console.log(age);

  var [x, , ...remaining] = [1, 2, 3, 4];
  console.log(x, remaining); // 1, [3,4]

  var newarray = [...remaining, x];
  console.log(newarray);

  function sumAllDoublingFirst(first, ...remainder: number[]) {
    return first * 2 + remainder.reduce((a, b) => a + b, 0);
  }

  console.log(sumAllDoublingFirst(10)); // 20
  console.log(sumAllDoublingFirst(10, 2, 3)); // 20 + 2 + 3

  // console.log(sumAllDoublingFirst(10, [2, 3])); // number[] not assignable to number
  console.log(sumAllDoublingFirst(10, ...[2, 3]));
}
