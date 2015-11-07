import greeter = require("./greeter");
import $ = require("jquery");

$(() => {
  $("div.appframe").html(greeter("World"));
});
