const containerContact = document.createElement("div");
containerContact.classList.add("contact");

export default function createContact() {
  containerContact.innerHTML = "";
  containerContact.innerHTML = `<h1>Contact</h1>
  <h3>Address:</h3>

 <p>123 Sur Flavors Street Diyarbakır, Turkey</p>

 <h3>Phone:</h3>
 <p>+90 (123) 456-7890</p>

 <h3>Email:</h3>
 <p>info@amedcityrestaurant.com</p>

 <h3>Website:</h3>
 <p><a href="http://127.0.0.1:5500/dist/index.html">www.amedcityrestaurant.com</a></p>

 <p>
   Please note that this contact information is entirely fictional, as the
   restaurant itself is a product of your imagination. You can replace the
   details with any information you prefer for your imaginary restaurant.
 </p>`;
  return containerContact;
}
