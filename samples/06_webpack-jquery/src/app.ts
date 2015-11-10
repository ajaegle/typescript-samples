import greeter = require("./greeter");
import $ = require("jquery");


var styleChanger = (selector:JQuery) => {
  selector.css("font-size", 20);
};

$(() => {
  $("div.appframe").html(greeter("World"));

  setTimeout(() => styleChanger($("div.some")), 1000);
});
