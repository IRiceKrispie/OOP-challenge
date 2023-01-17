const Intern = require('../lib/intern');
function generateIntern(data){
   const intern = new Intern(data.name,data.id,data.email,data.school);
   return `<div class="member">
           <h2>${intern.getRole()}</h2>
           <p>Intern Name: ${intern.getName()}</p>
           <p>ID: ${intern.getId()}</p>
           <p>Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
           <p>School: ${intern.getSchool()}</p></div>`
           
    
}




module.exports = generateIntern;