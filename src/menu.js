const containerMenu = document.createElement("div");
containerMenu.classList.add("menu");

export default function createMenu() {
  containerMenu.innerHTML = "";
  containerMenu.innerHTML = `<h1> Menu </h1>
  <h3>Appetizers:</h3>

  <p>
    <span>Lentil Soup (Şorba): </span>A hearty and aromatic soup made with red
    lentils, tomatoes, and a blend of traditional Kurdish spices. Served with
    a drizzle of olive oil and fresh lemon.
  </p>

  <p>
    <span>Cıgara Börek: </span>Crispy and golden phyllo pastry rolls stuffed
    with a savory mixture of ground meat, onions, and spices. Served with a
    side of yogurt-based dipping sauce.
  </p>

  <h3>Main Courses:</h3>

  <p>
    <span>Kuzu Tandır:</span> Tender lamb slow-roasted to perfection, seasoned
    with a medley of aromatic spices. Served with a generous portion of
    fragrant rice pilaf and grilled vegetables.
  </p>

  <p>
    <span>Dolma: </span>Grape leaves stuffed with a flavorful mixture of rice,
    ground beef, herbs, and spices. Drizzled with a tangy pomegranate molasses
    sauce and served with a dollop of yogurt.
  </p>

  <h3>Desserts:</h3>

  <p>
    <span>Baklava: </span>Layers of delicate phyllo pastry filled with a sweet
    blend of chopped nuts and honey, baked to a golden brown and drizzled with
    a rosewater-infused syrup.
  </p>

  <p>
    <span>Sütlaç: </span>Creamy rice pudding delicately flavored with vanilla
    and garnished with a sprinkle of cinnamon and toasted almonds.
  </p>`;
  return containerMenu;
}
