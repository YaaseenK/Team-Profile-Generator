const genTeam = (team) => {

    const html = [];

    const generateManager = manager => {
        
        let managerHTML = 
            `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../Assets/image.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Manager</p>
              <h5 class="card-title" id="card-title">${manager.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: ${manager.email}</li>
              <li class="list-group-item">Office Number: ${manager.officeNum}</li>
            </ul>
            <div class="card-body">
              <a href="${manager.email}" class="card-link">Email</a>
            </div>
          </div>
    `
    html.push(managerHTML);
    };

    const genEngineer = engineer => {
        let engineerHTML =  `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../Assets/image.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Engineer</p>
              <h5 class="card-title" id="card-title">${engineer.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: ${engineer.email}</li>
              <li class="list-group-item">Git Hub: ${engineer.githubUserName}</li>
            </ul>
            <div class="card-body">
              <a href="${engineer.email}" class="card-link">Email</a>
              <a href="www.github.com/${engineer.githubUserName}" class="card-link">GitHub</a>
            </div>
          </div>
    `
    html.push(engineerHTML);
    };

    const genIntern = intern => {
        let internHTML = `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../Assets/image.png" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">Intern</p>
              <h5 class="card-title" id="card-title">${intern.name}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.id}</li>
              <li class="list-group-item">Email: ${intern.email}</li>
              <li class="list-group-item">School: ${intern.school}</li>
            </ul>
            <div class="card-body">
              <a href="${intern.email}" class="card-link">Email</a>
            </div>
          </div>
    `
    html.push(internHTML);
    }


        // create a loop for all of the employees
        for (let i = 0; i < team.length; i++) {
            if (team[i].getRole() === "Manager") {
                generateManager(team[i]);
            }
            if (team[i].getRole() === "Engineer") {
                genEngineer(team[i]);
            }
            if (team[i].getRole() === "Intern") {
                genIntern(team[i]);
            }
        }
    
    // join the HTML blocks
    return html.join('');
};



module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./style.css">
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <title>Team Generate</title>
    </head>
    <body>
        <div class="containter">
          <h1>MY TEAM</h1>
        </div>
        <div class="card-container"> 
         ${genTeam(team)}
         </div>
          <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
    </html>
      `;
  };
 