const fs = require('fs');

const generateMemberHTML = (team) => {
    return new Promise ((resolve, reject) => {
        const name = team.getName();
        const role = team.getRole();
        const id = team.getId();
        const email = team.getEmail();

        let htmlText = '';
        if (role === 'Engineer') {
            const userName = team.getUsername();
            htmlText = `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Engineer</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">GitHub: ${gitHub}</li>
            </ul>
            </div>
        </div>`;
        } else if (role === 'Intern') {
            const school = team.getSchool();
            `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Intern</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
            </div>
        </div>`;
        } else {
            const office = team.getOffice();
            `<div class="col-6">
            <div class="card mx-auto mb-3" style="width: 18rem">
            <h5 class="card-header">${name}<br /><br />Manager</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email Address: ${email}</li>
                <li class="list-group-item">Office Phone: ${office}</li>
            </ul>
            </div>
        </div>`
        }
        console.log('creating team member HTML')
        fs.appendFile('./dist/index.html', htmlText, (err) => {
            if (err) {
                return reject(err);
            };
            return resolve();
        })
    })
}

module.exports = generateMemberHTML