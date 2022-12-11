// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const genHTML = require('./src/template.js');

// lib modules
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

// Array for answers to questions
const StaffMembers = [];
const prompMenu = () => {
    return inquirer.prompt([
       {
            type: 'list',
            name: 'menu',
            message: 'Please select the number option you would like to continue with:',
            choices: ['1) add a manager' , '2) add an engineer', '3) add an intern', '4) finish building my team']
       }])
       .then(userChoice => {
        switch (userChoice.menu) {
            case '1) add a manager':
                managerInputQuestions();
            break;
            case '2) add an engineer':
                inputEngineer();
            break;
            case '3) add an intern':
                inputIntern();
            break;
            case '4) finish building my team':
                console.log(StaffMembers);
                buildTeam();
            break;
            default:
            console.log('please choose an option between 1-4')
        }
    });
}
prompMenu()

const managerInputQuestions = () => { 
    return inquirer.prompt([
        {
            type:'input',
            name: 'id',
            message: 'Manager ID: ',
            validate: idInput => {
            if (idInput){
                return true;
            }else {
                console.log('Please enter manager ID: ')
                return false;
                }
            }
        },

        {
            type:'input',
            name: 'name',
            message: 'Manager Name: ',
            validate: namInput => {
                if (namInput){
                    return true;
                }else {
                    console.log('Please enter manager name: ')
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'email',
            message: 'Manager Email: ',
            validate: emailInput => {
                if (emailInput){
                    return true;
                }else {
                    console.log('Please enter manager email: ')
                    return false;
                }
        }
     },
            
     {
            type:'input',
            name: 'officeNum',
            message: 'Manager Office Number: ',
            validate: officeNumInput =>{
                if (officeNumInput){
                    return true;
                }else {
                    console.log('Please enter manager office number: ')
                    return false;
             }
        }
     }
    ]).then(ans => {
        console.log(ans);
        StaffMembers.push(new Manager(ans.id, ans.name, ans.email, ans.officeNum));
        prompMenu();
    })
    .catch((error) => {
        if (error.isTtyError) {
          console.log('err')
        } else {
          // Something else went wrong
        }
      });
}

const inputEngineer = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'id',
            message: 'Engineer ID: ',
            validate: idInput => {
                if (idInput){
                    return true;
                }else {
                    console.log('Please enter Engineer ID: ')
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'engineer_name',
            message: 'Engineer Name: ',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else {
                    console.log('Please enter engineer name: ')
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'engineer_email',
            message: 'Engineer Email: ',
            validate: emailInput => {
                if (emailInput){
                    return true;
                }else {
                    console.log('Please enter engineer email: ')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name:'githubUserName',
            message: 'Enter Github Username: ',
            validate: githubUsernameInput => {
                if (githubUsernameInput) { 
                    return true;
                }else{
                    console.log('Please eneter Github Username: ')
                    return false;
                }
            }
        }
    ]).then((ans) =>{
        console.log(ans)
        const engineer = new Engineer(ans.id, ans.engineer_name, ans.engineer_email, ans.githubUserName);
        StaffMembers.push(engineer);
        prompMenu();
    });
};

const inputIntern = () => {
    return inquirer.prompt([
        {
            type:'input',
            name: 'id',
            message: 'Intern ID: ',
            validate: idInput => {
                if (idInput){
                    return true;
                }else {
                    console.log('Please enter Intern ID: ')
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'intern_name',
            message: 'Intern Name: ',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else {
                    console.log('Please enter Intern name: ')
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'intern_email',
            message: 'Intern Email: ',
            validate: emailInput => {
                if (emailInput){
                    return true;
                }else {
                    console.log('Please enter Intern email: ')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name:'intern_school',
            message: 'Enter school name: ',
            validate: school => {
                if (school) { 
                    return true;
                }else{
                    console.log('Please eneter Github Username: ')
                    return false;
                }
            }
        }
    ]).then((ans) =>{
        console.log(ans)
        const intern = new Intern(ans.id, ans.intern_name, ans.intern_email, ans.intern_school);
        StaffMembers.push(intern);
        prompMenu();
    });
};


function buildTeam () {
    fs.writeFileSync('./dist/index.html' , genHTML(StaffMembers), "utf-8")
  }