const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school){
        super(id, name, email, school);
        this.school = school;
    }

    getschool(){
        return this.school;
    }

    getRole(){
        return ('Intern');
    }
}

module.exports = Intern;