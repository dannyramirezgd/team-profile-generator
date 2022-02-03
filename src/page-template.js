//generate HTML
//generate cards
const Engineer = require('../lib/Engineer.js')
const Intern = require('../lib/Intern.js')   
const generateEngineers = engineerArr =>{
    if (!engineerArr) {
        return ``
    } else {
    return `
    <section class="my-3" id="portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Engineer</h2>
    <div class="flex-row justify-space-between">
    ${engineerArr.forEach(engineer => new Engineer (engineer.name, engineer.id, engineer.email, engineer.github))}
    </div>
    </section>`
}
}
const generateInterns = internArr => {
    if (!internArr) {
        return ``
    } else {
        return `
    <section class="my-3" id="portfolio">
    <h2 class="text-dark bg-primary p-2 display-inline-block">Intern</h2>
    <div class="flex-row justify-space-between">
    ${internArr.forEach(intern => new Intern (intern))}
    </div>
    </section>` 
    }

}
module.exports = templateData => { 

    const {teamRoles, ...manager} = templateData
    console.log(teamRoles.engineers)
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container flex-row justify-space-between align-center py-3">
<h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
</div>
<section class="container flex-row justify-space-between align-center py-3">
<div class= 'portfolio-item-title text-light'>${manager.name} is located in ${manager.number} with id:${manager.id} and email ${manager.email}</div>
<main>
${generateEngineers(teamRoles.engineers)}
${generateInterns(teamRoles.interns)}
</main>
</section>
    
</body>
</html>
`
}
