//Generate a webpage that displays my team's basic info
const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "What is your team manager's name?",
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log('Please provide valid answer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer') 
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer') 
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office-number',
            message: "What is the team manager's office number?",
            validate: officeInput => {
                if(officeInput) {
                    return true;
                } else {
                    console.log('Please provide a valid answer') 
                    return false;
                }
            }
        }
    ])
}
const promptTeamRoles = teamData => {
    if(!teamData.teamRoles) {
        teamData.teamRoles = [];
    }
    return inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern'],
        },
    ]).then(inqRes => {
        teamData.teamRoles = inqRes
        if(inqRes.roles ==='Engineer'){
            return promptEngineer(teamData)
        } else if (inqRes.roles === 'Intern') {
            return promptIntern(teamData)
        } else {
            return teamData
        }
    })
}
const promptEngineer = teamData => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: "What is your engineer's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid name') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'id',
            message: "What is your engineer's id?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please provide a valid ID') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'email',
            message: "What is your engineer's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide a valid email') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'github',
            message: "What is your engineer's github username?",
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid username') 
                    return false;
                    }
                }
        },

    ])
    .then(roleData => {
        teamData.roles = roleData;
        return(promptTeamRoles(roleData))
    })
}
const promptIntern = teamData => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: "What is your intern's name?",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please provide a valid name') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'id',
            message: "What is your intern's id?",
            validate: idInput => {
                if(idInput) {
                    return true;
                } else {
                    console.log('Please provide a valid ID') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'email',
            message: "What is your intern's email?",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please provide a valid email') 
                    return false;
                    }
                }
        },
        {
            type:'input',
            name:'school',
            message: "What is your intern's school?",
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                } else {
                    console.log('Please provide a valid school') 
                    return false;
                    }
                }
        },
        
    ])    
    .then(roleData => {
        teamData.roles = roleData;
        return(promptTeamRoles(roleData))
    })
}

promptUser()
.then(promptTeamRoles)
.then(teamData => {
    console.log(teamData)
})
//create a prompt that asks the user several questions
//first questions: team manager's name, employee ID, email address, office number
//ask user if they want to add engineer or intern or finish building
//for Engineer: name, ID, email, github username, then back to menu
//for Intern: name, ID, email, school, take back to menu
//capture info into html page

//application should use jest and inquirer

//application must have these classes
//Employee Manager Engineer Intern

//Employee class must have following properties
//name, id, email, getName(), getId(), getEmail(), getRole(),//returns employee

//manager will have officeNumber, getRole()//overridden to return Manager

//Engineer will have github//github username, getGitHub(), getRole()//Overidden to return Engineer

//Intern will have school, getSchool(), getRole()//overridden to return 'intern'

const Generate = require('./lib/Employee.js')
