import "./style.css";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";
const containerEl = document.querySelector("#content");
const btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
containerEl.appendChild(btnDiv);
createBtn("home");
createBtn("menu");
createBtn("contact");
const contentEl = document.createElement("div");
contentEl.classList.add("content2");
const newEl3 = createHome();
contentEl.appendChild(newEl3);
containerEl.appendChild(contentEl);

function createBtn(btn) {
  const newBtn = document.createElement("button");
  newBtn.textContent = btn;
  btnDiv.appendChild(newBtn);

  newBtn.addEventListener("click", () => {
    contentEl.innerHTML = ""; // Clear existing content
    const newEl =
      btn === "home"
        ? createHome()
        : btn === "menu"
        ? createMenu()
        : btn === "contact"
        ? createContact()
        : null;
    contentEl.appendChild(newEl); // Append new content
  });
}
