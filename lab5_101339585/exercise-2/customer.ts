class Customer {
    fistName: String
    lastName: String


    public greeter() {
        console.log(`Hello ${this.fistName} ${this.lastName}`);
    }
}

let customer = new Customer();
customer.fistName = 'John';
customer.lastName = 'Smith';
customer.greeter()

