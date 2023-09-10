const containerMenu = document.createElement("div");
containerMenu.classList.add("menu");

export default function createMenu() {
  containerMenu.innerHTML = "";
  const h1El = document.createElement("h1");
  h1El.textContent = "Great Amed Restaurant Menu";
  containerMenu.appendChild(h1El);
  return containerMenu;
}
