const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const startHTML = require('./src/startHTML');
//start to get info
function getInfo(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee name:'
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'What kind of employee?',
            choices:['engineer', 'intern']
        },
    ])
    .then((data) => {
        writeStartHTML();
        console.log(data);
        //employeeType(data);
    });
}

function writeToFile(data){
    fs.appendFile('./dist/index.html',generateHTML(data),function(err){
        if (err) throw err;
        console.log('HTML made');
    });
}

function employeeType(data){
    if(`${data.employeeType}` == 'engineer'){
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Engineer Name?'
            },
        ])
        .then((data) => {
            writeToFile(data);
        });
    }

    if(`${data.employeeType}` == 'intern'){
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Intern Name?'
            },
        ])
        .then((data) => {
            writeToFile(data);
        });
    }
    
}

function writeStartHTML(data){
    fs.writeFile('./dist/index.html',startHTML(data),function(err){
        if (err) throw err;
        console.log('HTML made');
    });
}



function init(){
    getInfo();
}

init();