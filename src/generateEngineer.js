const Engineer = require('../lib/engineer') //import engineer class
function generateEngineer(data){
   const engineer = new Engineer(data.name,data.id,data.email,data.github); //get data using inquierer from index

   //return html based on intern object created
   return `<div class="member">
           <h2>${engineer.getRole()}</h2>
           <p>Engineer Name: ${engineer.getName()}</p>
           <p>ID: ${engineer.getId()}</p>
           <p>Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
           <p>Github: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></p></div>`
    
}




module.exports = generateEngineer;