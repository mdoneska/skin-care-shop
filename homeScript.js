//let cardsContainer = document.getElementById("cards");
//let bestSellerItem = document.getElementById("bestSellerItem");
//let carouselBody = document.getElementById('carouselBody');
let bestSeller = document.getElementById("bestSeller");
var slideIndex = 0;
let carouselIndex = 0;



let bestSellerProducts =[
 
  {
    id: 4,
    category:"Serum",
    range: "Vitamin-C",
    img: "Novexpert/4.png",
    name: "Booster with Vitamin C",
    description: "",
    price: 49,
    size: "30ml",
},
{
  id: 77,
  category:"Colour Correcting",
  range: "BB Cream",
  img: "DrJart/1.jpg",
  name: "CICAPAIR™ TIGER GRASS COLOUR CORRECTING TREATMENT",
  description: "",
  price: 80,
  size: "50ml",

},
  {
      id: 96,
      category:"Serum",
      range: "Cantella Asiatica",
      img: "DrJart/20.jpg",
      name: "CICAPAIR™ TIGER GRASS RE.PAIR SERUM",
      description: "",
      price: 126,
      size: "100ml",

  },
  {
    id: 46,
    category:"Face Care",
    range: "Hydratation",
    img: "PulpeDeVie/18.jpg",
    name: "Face Moisturizer Cream HYDRATATION",
    description: "",
    price: 11,
    size: "40ml",
},
{
  id: 79,
  category:"Cream",
  range: "Hyaluronic Acid",
  img: "DrJart/3.jpg",
  name: "VITAL HYDRA SOLUTION™ BIOME WATER CREAM",
  description: "",
  price: 60,
  size: "100ml",

},
{
  id: 92,
  category:"Mask",
  range: "Hyaluronic Acid",
  img: "DrJart/16.jpg",
  name: "CRYO RUBBER WITH MOISTURISING HYALURONIC ACID",
  description: "",
  price: 22,
  size: "100gr",

},
{
  id: 58,
  category:"Sets",
  range: " Vitamin-C, Niacinamide",
  img: "TruAlchemy/6.jpg",
  name: "A daily trio for smooth, glowing skin: Celestial Cleanser + Glow Serum + Quench Crème",
  description: "",
  price: 97,
  size: "150ml",
},

  
]
//Home page posters
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds

}

//Best Sellers
$(document).ready(function() {
  $('.autoplay').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});


getBestSellers();
function getBestSellers() {
for (let i = 0; i < bestSellerProducts.length; i++) {
  const element = bestSellerProducts[i];
  // stringot sho go sodrzhi htmlot
  let cardString = `<div class="card col-md-3" style="width: 18rem; display: flex; align-items: center; border:none">
  <img class="card-img-top" src="${element.img}" style="width: 300px; height: 300px;">
  <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
    <h5 class="card-title" style="text-align: center;">${element.name}</h5>
   <p class="card-text"style="text-align: center";>${element.price}</p>
     </div>
    <button class="btn btn-basic" style="border-radius:50px; border-color:black;" onclick="addToCart(${element.id})">Add to cart</button></div>
  </div>`;
  // dodavam vo html-ot na buttonot onclick="addToCart(${element.id})" za da ja povikuvam funkcijata dinamichki za sekoj element.
  // go isprakjam id-to od elementot bidejki nemam pristap nadvor od axios povikot.

  let cardEl = htmlToElement(cardString);
 bestSeller.append(cardEl);
   //bestSellerItem.append(cardEl);
 // carouselBody.append(itemEl);

}
}

