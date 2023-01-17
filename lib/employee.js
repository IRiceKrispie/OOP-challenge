//base employee class that takes in 3 parameters and has getter methods

class Employee {
    constructor (name, id, email) {
        //create a variable called name and have the value be from the name parameter that is passed in
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //getter methods for name, id, email and role. getName, getId, and getEmail will be passed on to children
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;