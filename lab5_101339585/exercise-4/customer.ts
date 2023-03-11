export class Customer {
    private fistName: String
    private lastName: String
    private age: Number

    constructor(firstName: string, lastName: string, age: number) {
        this.fistName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    public greeter() {
        console.log(`Hello ${this.fistName} ${this.lastName}`);
    }

    public getAge() {
        console.log(`Your age is ${this.age}`);
    }
}

let customer = new Customer('John', 'Smith', 35);
customer.greeter()
customer.getAge()
