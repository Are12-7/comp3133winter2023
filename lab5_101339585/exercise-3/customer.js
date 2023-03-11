var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.fistName = firstName;
        this.lastName = lastName;
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fistName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer('John', 'Smith');
customer.greeter();
