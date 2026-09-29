// Import global styles
import "./style.css";

// Import custom dynamic data from our second module
//import { welcomeMessage, courseGoals, skillsData } from "./portfolioData.js";




const skillsContainer = document.querySelector("#skills-container");
skillsData.forEach((skill) => {
  const skillCard = document.createElement("div");
  skillCard.className = "skill-badge";
  skillCard.innerHTML = `
    <span class="skill-icon">${skill.icon}</span>
    <h3>${skill.name}</h3>
    <span class="status-tag">${skill.status}</span>
  `;
  skillsContainer.appendChild(skillCard);
});


document.querySelector("#current-year").textContent = new Date().getFullYear();

const themeButton = document.querySelector("#theme-btn");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});