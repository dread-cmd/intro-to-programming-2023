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