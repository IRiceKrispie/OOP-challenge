const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create object with name, id, and email", () => {
            const employee = new Employee("Joe", 55, "joe@gmail.com");

            expect(employee).toEqual({name:"Joe", id: 55, email: "joe@gmail.com"});
        });
    });
});