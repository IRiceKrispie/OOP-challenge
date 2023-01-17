const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
//test to make sure employee starts correctly
describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create employee object with name, id, and email", () => {
            const employee = new Employee("Joe", 55, "joe@gmail.com");

            expect(employee).toEqual({name:"Joe", id: 55, email: "joe@gmail.com"});
        });
    });
});

//run tests to make sure engineer gets initialized correctly and the specific methods for that class are working
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

    describe("getGitHub", () => {
        it("GetGitHub should return github user name", () => {
            const engineer = new Engineer("Joe", 55, "joe@gmail.com", "zeebigbadkitty");

            expect(engineer.getGitHub()).toEqual("zeebigbadkitty");
        });
    });
});

//run tests to make sure intern class initializes correctly and the getRole and getSchool methods are working
describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create intern object with name, id, email, and school", () => {
            const intern = new Intern("Joe", 55, "joe@gmail.com", "UH");

            expect(intern).toEqual({name:"Joe", id: 55, email: "joe@gmail.com", school: "UH"});
        });

        it("Should throw an error if not provided with a school", () => {
            const intern = new Intern("Joe", 55, "joe@gmail.com");
            expect(intern).toEqual({"email": "joe@gmail.com", "id": 55, "name": "Joe", "school": undefined});
        });
    });

    describe("getRole", () => {
        it("Intern Class should return 'Intern'", () => {
            const intern = new Intern("Joe", 55, "joe@gmail.com", "UH");

            expect(intern.getRole()).toEqual("Intern");
        });
    });

    describe("getSchool", () => {
        it("getSchool should return 'UH'", () => {
            const intern = new Intern("Joe", 55, "joe@gmail.com", "UH");

            expect(intern.getSchool()).toEqual("UH");
        });
    });
});
