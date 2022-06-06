const cardGen = function (answers) {
  let managerTemp = "",
    engTemp = "",
    intTemp = "";
  answers.forEach((employee) => {
    if (employee.getRole() == "Manager") {
      managerTemp += `
    <div class="card bg-light>
      <div class="card-body bg-succes">
        <h3 class="card-title text-light">${employee.name}</h3>
        <h5 class="text-light"> ${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email
        }</a></li>
        <li class="list-group-item">Office Number: ${employee.officeNumber}</li>
      </ul>
    </div>
  `;
    } else if (employee.getRole() == "Engineer") {
      engTemp += `
    <div class="card bg-light">
      <div class="card-body">
        <h3 class="card-title text-light">${employee.name}</h3>
        <h5 class="text-light"> ${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email:<a href="mailto:${employee.email}">${employee.email
        }</a></li>
        <li class="list-group-item">GitHub:<a href="http://github.com/${employee.github
        }" target="_blank">${employee.github}</a></li>
      </ul>
    </div>
  `;
    } else {
      intTemp += `
    <div class="card bg-light">
      <div class="card-body bg-success">
        <h3 class="card-title text-light">${employee.name}</h3>
        <h5 class="text-light"> ${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush >
        <li class="list-group-item">ID: ${employee.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email
        }</a></li>
        <li class="list-group-item">School: ${employee.school}</li>
      </ul>
    </div>
  `;
    }
  });
  return managerTemp + engTemp + intTemp;
};

const htmlTemplate = function (employees) {
  console.log(employees);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-gen</title>
      
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  
      <style>
      *
      img {size: 20%}
      </style>
  </head>
   
  <body>
      <header class="bg-secondary bg-gradient">
          <div class="p-5 d-flex justify-content-center">
              <h1 class="p-3 display-1 text-white">Team-gen</h1>
          </div>
      </header>
    <div class="container">
      <div class="row m-2 row-cols-1 row-cols-md-2 g-4 d-flex justify-content-center">
  ${cardGen(employees)}
      </div>
    </div>
  </body>
  </html>
  `;
};

module.exports = htmlTemplate;