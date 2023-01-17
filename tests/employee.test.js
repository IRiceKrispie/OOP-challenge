const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create employee object with name, id, and email", () => {
            const employee = new Employee("Joe", 55, "joe@gmail.com");

            expect(employee).toEqual({name:"Joe", id: 55, email: "joe@gmail.com"});
        });
    });
});


describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create engineer object with name, id, email, and github username", () => {
            const engineer = new Engineer("Joe", 55, "joe@gmail.com", "zeebigbadkitty");

            expect(engineer).toEqual({name:"Joe", id: 55, email: "joe@gmail.com", gitHub: "zeebigbadkitty"});
        });
    });

    describe("getRole", () => {
        it("Engineer Class should return 'Engineer'", () => {
            const engineer = new Engineer("Joe", 55, "joe@gmail.com", "zeebigbadkitty");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
});