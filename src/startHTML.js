function startHTML(data){
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
                <p>Manager: ${data.name}</p>
                <p>ID: ${data.id}</p>
                <p>Office Number: ${data.officeNumber}</p>
                <p>Email: ${data.email}</p></div>`
}

module.exports = startHTML;