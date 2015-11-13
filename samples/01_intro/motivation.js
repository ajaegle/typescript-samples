// this code intentionally has some bugs!

Object.defineProperty(window, "myProp", {"value": "booyah", readOnly: true});

function distance() {
  var distance = parseInt(document.getElementById("distance"));
  if (distance > 100) {
    document.getElementById("longDistanceWarn").setAttribute("hidden", false);
  }
  return distance;
}

function updateCosts() {
  costs = (distance * 0.01) + 10;
  document.querySelectorAll(".costs").textContent = costs;
}

document.getElementById("calcButton").addEventListener(updateCosts, "click");
