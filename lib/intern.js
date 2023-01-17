const Employee = require('./employee'); //import employee to inherit from
//intern class that inherits traits from the employee class
class Intern extends Employee {
    constructor (name, id, email, school){ //constructor takes in 4 parameters
        //we can use super to declare these variables
        super(name, id, email);
        this.school = school;
    }
    //getter methods in addition to the ones we inherit from the employee class
    getSchool(){
        return this.school;
    }
    //overrides getRole method from empolyee class
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;