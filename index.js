//require the classes from lib
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')   
const Manager = require('./lib/Manager.js')
//import functions from src for templates
const startingHTML = require('./src/main-page-template.js')
const generateMemberHTML = require('./src/role-page-template.js');
//require inquirer for prompt responses
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt ([
        //ask universal questions and which role
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
        //depending on which role, each has a unique trait that needs to be determined
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
            //prompt user about that uniqueTrait
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
            //create a new instance of each role
            .then(function({uniqueTrait, addTeam}){
                let addMember; 
                if(role === 'Engineer') {
                    addMember = new Engineer(name, id, email, uniqueTrait);
                } else if (role === 'Intern') {
                    addMember = new Intern (name, id, email, uniqueTrait);
                } else {
                    addMember = new Manager (name, id, email, uniqueTrait)
                }
                //create html based on that unique role and append to the main html file
                generateMemberHTML(addMember)
                .then(function(){
                    if(addTeam) {
                        promptUser()
                    } else {
                        return 
                         
                    }
                })
                    
                })
            })
        }

promptUser();
//creates initial basic html i.e. html:5, header, body.
startingHTML();
