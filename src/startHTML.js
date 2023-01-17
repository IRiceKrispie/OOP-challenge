const Manager = require('../lib/manager.js'); //import manager class
function startHTML(data){ //get our data from inquirer
    const manager = new Manager(data.name, data.id,data.email,data.officeNumber); //create manager object
    //return html using the manager information
    return `<!DOCTYPE html>
    <html lang="en-US">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team</title>
            <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
            <h1>My team</h1>
            <div class="team-members">
                <div class="member">
                <h3>${manager.getRole()}: ${manager.getName()}</h3>
                <p>ID: ${manager.getId()}</p>
                <p>Office Number: ${manager.getOfficeNumber()}</p>
                <p>Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p></div>`
}

module.exports = startHTML;