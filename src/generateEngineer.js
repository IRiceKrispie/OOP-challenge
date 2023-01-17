function generateEngineer(data){
   return `<div class="member">
           <p>Engineer Name: ${data.name}</p>
           <p>ID: ${data.id}</p>
           <p>Email: ${data.email}</p>
           <p>Github: ${data.github}</p></div>`
    
}




module.exports = generateEngineer;