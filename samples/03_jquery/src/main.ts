
function addContent() {
  var elem = $("div.content");
  console.log(elem);

  setTimeout( () => {
    elem.text("new text");
  }, 1000);
};

$(addContent);
