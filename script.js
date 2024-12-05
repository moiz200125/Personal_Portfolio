const langData = {
    en: {
        greeting: "Hello, I'm Moiz",
        skills: "Skills",
        projects: "Projects",
        awards: "Awards",
        contact: "Contact"
    },
    ar: {
        greeting: "مرحبا، أنا موئز",
        skills: "المهارات",
        projects: "المشاريع",
        awards: "الجوائز",
        contact: "تواصل"
    },
    ur: {
        greeting: "ہیلو، میں موئز ہوں",
        skills: "ہنر",
        projects: "منصوبے",
        awards: "ایوارڈز",
        contact: "رابطہ"
    },
    fr: {
        greeting: "Bonjour, je suis Moiz",
        skills: "Compétences",
        projects: "Projets",
        awards: "Récompenses",
        contact: "Contact"
    }
};

document.getElementById('language-select').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.getElementById('greeting').innerText = langData[lang].greeting;
    document.getElementById('skills-title').innerText = langData[lang].skills;
    document.getElementById('projects-title').innerText = langData[lang].projects;
    document.getElementById('awards-title').innerText = langData[lang].awards;
    document.getElementById('contact-title').innerText = langData[lang].contact;
});

// 2. Mobile Navigation Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-bar ul').classList.toggle('active');
});

// 3. Data for Dynamic Content Population
const profileData = {
    name: "Moiz",
    skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
    projects: [
        { title: "Portfolio Website", date: "2024-08-01" },
        { title: "E-commerce Platform", date: "2023-07-15" }
    ],
    awards: ["Certified Web Developer - 2023", "Hackathon Winner - 2024"],
    video: "your-video.mp4"
};

// Populate Skills
const skillsList = document.getElementById('skills-list');
profileData.skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
});

// Populate Projects
const projectsList = document.getElementById('projects-list');
profileData.projects.forEach(project => {
    const projectItem = document.createElement('li');
    projectItem.innerHTML = `${project.title} - <time datetime="${project.date}">${project.date}</time>`;
    projectsList.appendChild(projectItem);
});

// Populate Awards
const awardsList = document.getElementById('awards-list');
profileData.awards.forEach(award => {
    const awardItem = document.createElement('li');
    awardItem.innerText = award;
    awardsList.appendChild(awardItem);
});

// 4. Dynamic Video Content
const videoElement = document.getElementById('profile-video');
videoElement.src = profileData.video;

// Ensure video is properly set up with controls (optional)
videoElement.controls = true;
