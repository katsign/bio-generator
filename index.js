const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>My New Bio</title>
</head>
<body>
<div class="container">
  <div class="jumbotron bg-dark text-white rounded m-5 p-5" align="center">
  <div class="container">
    <h1 class="display-4">Hi! I'm ${answers.name}!</h1>
    <hr class="border-white">
    <p class="lead">I am from ${answers.location}.</p>
    <p>My main hobby right now is ${answers.hobby}.</p>
    <p>My absolute favorite food is ${answers.food}!</p>
    <hr class="border-white">
    <h3><span class="badge badge-secondary text-white p-3">Contact Me:</span></h3>
    <ul class="list-group">
      <li class="list-group-item text-dark mt-2 p-3">My GitHub username is <span style="font-weight: bold">${answers.github}<span></li>
      <li class="list-group-item text-dark p3">LinkedIn: <span style="font-weight: bold">${answers.linkedin}<span></li>
    </ul>
  </div>
</div>
</div>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    {
      type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
