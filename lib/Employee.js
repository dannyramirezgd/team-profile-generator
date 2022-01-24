class Employee {
    constructor(name = '', id, email) {
        this.name = name,
        this.id = id,
        this.email = email
    }
    getName() {
        return `${this.name}`
    };
    getEmail() {
        return `${this.email}`
    };
    getRole() {
        return `employee`
    }

}

const employee = new Employee ('Jim', 7, "jim@jim.com")

module.exports = Employee;