function calcAggregate(data, extr, agg, initial) {
  return data.reduce(function(prev, item) {
    return agg(prev, extr(item))
  }, initial);
  // TODO remove return statement, using reduce
}

function extractItemValue(item) {
  // TODO item.value
  return item.val;
}

function add(a, b) { return a + b }
function multiply(a, b) { return a * b }

//data = [{val:1}, {val:2}, {val:3}, {val:4}];
data = [1,2,3,4].map(function (i) {return {val:i}});

console.log(calcAggregate(data, extractItemValue, add, 0));
console.log(calcAggregate(data, extractItemValue, multiply, 1));
