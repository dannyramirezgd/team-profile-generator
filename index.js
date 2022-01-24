//Generate a webpage that displays my team's basic info

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
