import "./style.css";
import createHome from "./home";
const containerEl = document.querySelector("#content");
const btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
containerEl.appendChild(btnDiv);
createBtn("home");
createBtn("menu");
const newEl = createHome();
containerEl.appendChild(newEl);

function createBtn(btn) {
  const newBtn = document.createElement("button");
  newBtn.textContent = btn;
  btnDiv.appendChild(newBtn);

  if (btn === "home") {
    newBtn.addEventListener("click", () => {
      const newEl = createHome();
      containerEl.appendChild(newEl);
    });
  }
}
