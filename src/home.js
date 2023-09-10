const containerHome = document.createElement("div");
containerHome.classList.add("home");

export default function createHome() {
  containerHome.innerHTML = "";
  const h1El = document.createElement("h1");
  h1El.textContent = "Great Amed Restaurant";
  const pEl = document.createElement("p");
  pEl.textContent = ` Welcome to our Diyarbakır gem, where culinary artistry meets the rich tapestry of local Kurdish cuisine. Nestled in the heart of the city, our restaurant is a haven for those seeking an authentic taste of the region's culinary heritage.

  At our establishment, we take pride in offering a tantalizing journey through the diverse and vibrant flavors of Kurdish cuisine. Our chefs, steeped in tradition, craft each dish with care, using locally sourced ingredients to capture the essence of the Kurdish culinary experience.
  
  Savor the warmth of our aromatic soups, like the hearty lentil soup or the flavorful stuffed pastries, delicately spiced and fried to perfection. Explore the symphony of flavors in our Kebabs, where tender, marinated meats are grilled to succulent perfection, or indulge in the comforting embrace of Dolma, a medley of vegetables stuffed with seasoned rice.
  
  Our menu reflects the unique blend of Kurdish tradition and innovation, offering a wide range of dishes to cater to every palate. Whether you're a fan of the rich, earthy flavors of traditional lamb dishes or prefer the zesty kick of marinated chicken, you'll find something to delight your taste buds.
  
  Our restaurant is more than just a dining experience; it's a celebration of culture, community, and the joy of sharing a meal with loved ones. Join us in savoring the authentic tastes of Diyarbakır's Kurdish heritage, where every dish tells a story, and every bite is a journey through tradition.
  
  Come, dine with us, and let our establishment be your gateway to the soulful flavors of Kurdish cuisine in the heart of Diyarbakır.`;
  containerHome.appendChild(h1El);
  containerHome.appendChild(pEl);

  return containerHome;
}
