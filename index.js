//Generate a webpage that displays my team's basic info
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')   
const Manager = require('./lib/Manager.js')
const startingHTML = require('./src/main-page-template.js')
const inquirer = require('inquirer');
const generateMemberHTML = require('./src/role-page-template.js');

const team = [];
const initProgram = () => {
    promptUser();
    startingHTML();
}
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter team member name',
            name: 'name'
        },
        {
            type: 'list',
            message: 'Select team member role',
            choices: ['Engineer', 'Intern', 'Manager'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'Enter team member id',
            name: 'id',
        },
        {
            type:'input',
            message:'Enter team member email address',
            name: 'email'
        }])
        .then(function({name, role, id, email}){
            let uniqueTrait = '';
            if (role === 'Engineer'){
                uniqueTrait = 'Username'
            } else if (role === 'Intern'){
                uniqueTrait = 'School'
            } else {
                uniqueTrait = 'Office'
            }
        return inquirer.prompt ([
            {
                type:'input',
                message: `Enter team member's ${uniqueTrait}`,
                name: 'uniqueTrait'
            },
            {
                type:'confirm',
                message: 'Would you like to add more team members',
                name: 'addTeam'
            }])
            .then(function({uniqueTrait, addTeam}){
                let addMember; 
                if(role === 'Engineer') {
                    addMember = new Engineer(name, id, email, uniqueTrait);
                } else if (role === 'Intern') {
                    addMember = new Intern (name, id, email, uniqueTrait);
                } else {
                    addMember = new Manager (name, id, email, uniqueTrait)
                }
                team.push(addMember);
                generateMemberHTML(addMember)
                .then(function(addTeam){
                    if(addTeam) {
                        return promptUser()
                    } else {
                        console.log(team)
                        return 
                         
                    }
                })
                    
                })
            })
        }

initProgram();
