class Employee {
    constructor(name = '', id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName() {
        return `Hi, my name is ${this.name}`
    };
    getEmail() {
        return `My email is ${this.email}`
    };
    getRole() {
        return `I am an employee`
    }

}

const employee = new Employee ('Jim', 7, "jim@jim.com")

//name, id, email, getName(), getId(), getEmail(), getRole(),//returns employee
module.exports = Employee;