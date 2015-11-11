namespace basics {
  var age: number;
  var name: string;
  var vip: boolean;
  var emails: string[];
}

namespace basics_inferred {
  var age = 52;
  var name = "John Doe";
  var vip = false;
  var emails = ["john@doe.com"];

  var unsure: any = 1337;
  unsure = "i'm a string";
}
