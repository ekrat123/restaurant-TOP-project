const containerContact = document.createElement("div");
containerContact.classList.add("Contact");

export default function createContact() {
  containerContact.innerHTML = "";
  const h1El = document.createElement("h1");
  h1El.textContent = "Great Amed Restaurant Contact";
  containerContact.appendChild(h1El);
  return containerContact;
}
