"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, age) {
        this.fistName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fistName, " ").concat(this.lastName));
    };
    Customer.prototype.getAge = function () {
        console.log("Your age is ".concat(this.age));
    };
    return Customer;
}());
exports.Customer = Customer;
var customer = new Customer('John', 'Smith', 35);
customer.greeter();
customer.getAge();
