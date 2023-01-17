const inquirer = require('inquirer');
const fs = require('fs');
const generateEngineer = require('./src/generateEngineer');
const generateIntern = require('./src/generateIntern')
const startHTML = require('./src/startHTML');
const endHTML = require('./src/endHTML');
//start to get info
function firstInfo(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Manager name:'
        },
        {
            type: 'number',
            name: 'id',
            message: 'Input your manager id:'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee?',
            choices:['engineer', 'intern']
        },
    ])
    .then((data) => {
        writeStartHTML(data);
        //console.log(data);
        employeeType(data);
    });
}

//get info based on selection in list
function getInfo(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'exit',
            message: 'exit or new?',
            choices:['exit', 'new'] 
        }
    ])
    .then((data) => {
        if (`${data.exit}` == 'exit'){
            writeEndHTML(data);
        }
        else if (`${data.exit}` == `new`){
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What kind of employee?',
                    choices:['engineer', 'intern']
                },
            ])
            .then((data) => {
                employeeType(data);
            });
        }
    });
}


//writes to our file based on selecting engineer
function writeEngineer(data){
    fs.appendFile('./dist/index.html',generateEngineer(data),function(err){
        if (err) throw err;
        //console.log('HTML made');
    });
}
//writes to our file based on selecting intern
function writeIntern(data){
    fs.appendFile('./dist/index.html',generateIntern(data),function(err){
        if (err) throw err;
        //console.log('HTML made');
    });
}
//controls what data we take in based on what user chose in list
function employeeType(data){
    if(`${data.employeeType}` == 'engineer'){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Engineer Name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter Engineer id'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email adress'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter github user name'
            },
        ])
        .then((data, employeeType) => {
            writeEngineer(data);
            getInfo();
        });
    }

    if(`${data.employeeType}` == 'intern'){
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Intern Name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'Enter Engineer id'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Enter email adress'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter school:'
            },
        ])
        .then((data) => {
            writeIntern(data);
            getInfo();
        });
    }
    
}

//starts to write our html file with manager info
function writeStartHTML(data){
    fs.writeFile('./dist/index.html',startHTML(data),function(err){
        if (err) throw err;
    });
}
//writes the end part to our html
function writeEndHTML(data){
    fs.appendFile('./dist/index.html',endHTML(data),function(err){
        if (err) throw err;
    });
}
//starts app
function init(){
    firstInfo();
}

init();