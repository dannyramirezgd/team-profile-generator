const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, school) {
        super(name, id);
        this.school = school
    }
    getRole(){
        return `Intern`
    }
};

module.exports = Intern;