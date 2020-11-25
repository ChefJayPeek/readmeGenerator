// Load inquirer
const inquirer = require('inquirer');
const fs = require('fs');

// Generate the sections of the Readme.md for : Title of Project, Description, Table of Contents, Installation, Usagfe, licensing, Contributors, Tests and Questions

var questions = [
    // Get Title of Project 
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
    },
    // Get Description of Project
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please enter a description for your project.',
    },
    // Get Installation Instructions
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please enter the installation instructions.',
    },
    // Get Usage Information
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please enter the usage information for you project.',
    },
    // Get Tests
    {
        type: 'input',
        name: 'test',
        message: 'Please enter testing information.',
    },
    // Get License infromation from a list of options
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['BSD', 'IBM', 'MIT', 'WTFPL' ],
        filter: function (val) {
            return val.toLowerCase();
        },
    },
    // Get GitHub username
    {
        type: 'input',
        name: 'userName',
        message: 'Please enter your GitHub user name:',
    },
    // Get email address
    {
        type: 'input',
        name: 'userEmail',
        message: 'Please enter your email address:',
    },
// Get contribution guideline
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines.',
    },
];

// Sanity check to ensure proper object naming.
// // inquirer.prompt(questions).then((answers) => {
// //     console.log(JSON.stringify(answers, null, ' '));
// });
// Ask questions and return answers
inquirer.prompt(questions).then((answers) => {
    // Get title and Write the README.MD with the title.
    // Write badge logo and table of contents.
    // Get license information and set badge
    const title = `${answers.projectTitle}`;
    const license = `${answers.license}`;
    const description = `${answers.projectDescription}`;
    const installation = `${answers.projectInstallation}`;
    const usage = `${answers.projectUsage}`;
    const tests = `${answers.test}`;
    const contributing = `${answers.contribution}`;
    const email = `${answers.userEmail}`;
    const github = `${answers.userName}`;

    const badge = setBadge(license);
    // console.log(title);
    fs.writeFile('README.MD', `### Title: ${title}
    ${badge}
    ### Table of contents
    ### Description
    ### Installation
    ### Usage
    ### License
    ### Contributing
    ### Tests
    ### Questions
    
    ## Description
    ${description}

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}

    ## Questions
    Email address: ${email}
    GitHub link: ${github}

    README.MD Generated using Readme Generator:
    https://github.com/ChefJayPeek/readmeGenerator
    `, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
});

// Function to set badge graphic
function setBadge(license) {
    if (license === 'bsd') {
        return "![[License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
    } else if (license === 'ibm') {
        return "![[License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]";
        } else if (license === 'mit') {
            return "![[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
        } else {
            (license === 'wtfpl')
            return "![[License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]";
            };
        };
