const Employees = require('./employee');

class Manager extends Employees {
    constructor(id, name, email, officeNum){
        super(id, name, email)
        this.officeNum = officeNum;
    }

    getOfficeNumber(){
        return this.officeNum;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;