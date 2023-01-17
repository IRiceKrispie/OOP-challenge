const Employee = require('./employee');//import employee to inherit from
//engineer class that inherits traits from the employee class
class Engineer extends Employee {
    constructor(name, id, email, gitHub){ //constructor takes in 4 parameters
        //we can use super to declare these variables
        super(name, id, email);
        this.gitHub = gitHub;
    }
    //getter methods in addition to the ones we inherit from the employee class
    getGitHub(){
        return this.gitHub;
    }
    //overrides getRole method from empolyee class
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;