class Customer {
    constructor(firstName: string, lastName: string) {
        this.fistName = firstName;
        this.lastName = lastName;
    }

    private fistName: String
    private lastName: String


    public greeter() {
        console.log(`Hello ${this.fistName} ${this.lastName}`);
    }
}

let customer = new Customer('John', 'Smith');
customer.greeter()
