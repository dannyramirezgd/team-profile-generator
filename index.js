//TO DO: THE TEMPLATE LITERAL FOR CONSTRUCTING NEW INTERNS AND ENGINEER ISN'T WORKING

//Generate a webpage that displays my team's basic info
const { writeFile, copyFile } = require('./utils/generate-site.js');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
const mockData = {
    name: 'man ',
    id: 'man id',
    email: 'man email',
    number: 'man office',
    role: 'Manager',
    teamRoles: { 
        engineers: [ 
            {
            name: 'eng',
            id: 'eng id',
            email: 'eng email',
            github: 'eng user',
            role: 'Engineer'
            } 
        ], 
        interns: [   
            {
            name: 'int',
            id: 'int id',
            email: 'int email',
            school: 'int school',
            role: 'Intern'
            } 
        ] 
        }
  }
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'number',
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
const promptTeamRoles = (teamData) => {
    if(!teamData.teamRoles) {
        teamData.teamRoles = {};
        return inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: "Which type of team member would you like to add?",
            choices: ['Engineer', 'Intern'],
        },
    ]).then(response => {
        if(response.roles ==='Engineer'){
            return promptEngineer(teamData)
        } else if (response.roles === 'Intern') {
            return promptIntern(teamData)
        } 
    }) 
} else {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'roles',
                message: "Which type of team member would you like to add?",
                choices: ['Engineer', 'Intern', "I don't want to add another team member"],
            },
        ]).then(response => {
            if(response.roles ==='Engineer'){
                return promptEngineer(teamData)
            } else if (response.roles === 'Intern') {
                return promptIntern(teamData)
            } else {
                return teamData
            }
        })
    }
        
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
        roleData.role = 'Engineer'
        if(!teamData.teamRoles.engineers){
            teamData.teamRoles.engineers = [];
        }
        teamData.teamRoles.engineers.push(roleData)
        return(promptTeamRoles(teamData))
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
        roleData.role = 'Intern'
        if(!teamData.teamRoles.interns){
            teamData.teamRoles.interns = [];
        }
        teamData.teamRoles.interns.push(roleData)
        return(promptTeamRoles(teamData))
    })
}

promptUser()
.then(teamData => {
    teamData.role = 'Manager'
    return promptTeamRoles(teamData)
})
.then( teamData => {
    return generatePage(teamData)
})
.then(pageHTML => {
    writeFile(pageHTML)
})
.then(response => {
    console.log(response);
    return copyFile()
})
.then(teamData => {
    return generatePage(teamData)
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
