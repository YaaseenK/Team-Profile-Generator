// employee super class
class Employee {
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
    // gets id
   getId(){
    return this.id
   }
    
   // gets name 
   getName(){
     return this.name;
    }

    // gets email 
    getEmail(){
     return this.email;
    }
    
    // gets roll
    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;