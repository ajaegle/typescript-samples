namespace ns1 {
  "use strict";
  export var half = 21;
  export function double(a) {
    return a * 2;
  }
}

namespace ns2 {
  "use strict";
  function calculateSolution() {
    let x = ns1.half;
    let solution = ns1.double(x);
    return solution;
  }
  console.log(calculateSolution());
}
