const Employee = require('./employee');//import employee to inherit from
//manager class that inherits traits from the employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber){ //constructor takes in 4 parameters
        //we can use super to declare these variables
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    //overrides getRole method from empolyee class
    getRole(){
        return "Manager";
    }
    //getter method for the officeNumber
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;