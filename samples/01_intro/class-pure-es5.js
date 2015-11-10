var Greeter = (function () {
    function Greeter(greeting) {
        if (!greeting) { greeting = "Hello, "; }
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function (name) {
        console.log(this.greeting + name);
    };
    return Greeter;
})();
new Greeter().greet("Karlsruhe");
new Greeter("Hallo, ").greet("Karlsruhe");
