let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
let myName = "Roberto";
copyright.innerHTML = myName + " " + thisYear;
footer.appendChild(copyright);

let skills = ['JavaScript', 'CSS', 'HTML', 'GitHub', 'Construction', 'Cook']
let skillsSection = document.getElementById('skills');
let skillList = document.getElementById('skills_ul');
for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    let currentSkill = skills[i];
    skill.innerHTML = currentSkill;
    skillList.appendChild(skill);
}



let messageForm = document.querySelector("form");
messageForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let usersName = event.target.usersName.value;
    let usersEmail = event.target.usersEmail.value;
    let usersMessage = event.target.usersMessage.value;
    console.log(usersName, usersEmail, usersMessage);
    event.preventDefault();
    this.reset();




    let messageList = document.getElementById("message_list");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = `
 <a href= "mailto:${usersEmail}">${usersName}</a>
 <span>${usersMessage}</span>
 `
    let removeButton = document.createElement("button");
    removeButton.innerText = "remove"
    removeButton.type = "button"
    removeButton.addEventListener("click", (event) => {
        let entry = removeButton.parentNode
        entry.remove()
    })
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});

function renderProjectsWithXHR() {
    const githubRequest = new XMLHttpRequest()

    githubRequest.open('GET', 'https://api.github.com/users/dread-cmd/repos')

    githubRequest.addEventListener('load', function () {
        const data = JSON.parse(this.response)

        // filter out irrelevant repositories
        const filteredData = data.filter((repo) =>
            repo.name.includes('intro-to-programming')
        )

        const projectSection = document.querySelector('#projects')
        const projectList = projectSection.querySelector('ul')

        for (let repository of filteredData) {
            const project = document.createElement('li')
            project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
            projectList.appendChild(project)
        }
    })

    githubRequest.send()
}

function renderProjectsWithFetch() {
    fetch('https://api.github.com/users/dread-cmd/repos')
        .then((res) => res.json())
        .then((data) => {
            // filter out irrelevant repositories
            const filteredData = data.filter((repo) =>
                repo.name.includes('intro-to-programming')
            )

            const projectSection = document.querySelector('#projects')
            const projectList = projectSection.querySelector('ul')

            for (let repository of filteredData) {
                const project = document.createElement('li')
                project.innerHTML = `<a class="link link--no-decor" href="${repository.html_url}">${repository.name}</a>`
                projectList.appendChild(project)
            }
        })
}

document.addEventListener('DOMContentLoaded', () => {

    // renderProjectsWithXHR()
    renderProjectsWithFetch()
})
//})()