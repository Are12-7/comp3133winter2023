var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.greeter = function () {
        console.log("Hello ".concat(this.fistName, " ").concat(this.lastName));
    };
    return Customer;
}());
var customer = new Customer();
customer.fistName = 'John';
customer.lastName = 'Smith';
customer.greeter();
