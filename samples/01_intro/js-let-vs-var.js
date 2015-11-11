"use strict";

var a = 1;
let b = 1;

console.log("after global declaration", a, b);

function asdf() {
  var a = 2;
  let b = 2;
  console.log("in method asdf", a, b);
}

console.log("after function declaration", a, b);

asdf();

console.log("after function call", a, b)

if(true) {
  var a = 3;
  let b = 3;
  console.log("in if block", a, b);
}

console.log("after if block", a, b);

console.log("---");

var items = [1,2,3,4]
for (var i = 0; i < items.length; i++) {
  setTimeout(function () {
    console.log("logging item with index %d using var, %s: %s", i, items, items[i]);
  }, 10);
}

// the same sample with let

for (let i = 0; i < items.length; i++) {
  setTimeout(function () {
    console.log("logging item with index %d using let, %s: %s", i, items, items[i]);
  }, 10);
}
