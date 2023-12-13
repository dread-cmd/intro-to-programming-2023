let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
let myName = "Roberto";
copyright.innerHTML = myName + " " + thisYear;
footer.appendChild(copyright);

let skills = ['JavaScript', 'CSS', 'HTML', 'GitHub', 'Construction', 'Cook']
let skillsSection = document.getElementById('skills');
let skillList = document.querySelector('ul');
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

});