$(document).ready(function() {
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

let cardsContainer = document.getElementById("cards");
let bestSellerItem = document.getElementById("bestSellerItem");
let carouselBody = document.getElementById('carouselBody');
var slideIndex = 0;
let carouselIndex = 0;
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

let bestSellers = [
  {
    img:"BestSellers/best6.png" ,
    description: "FIRST WRINKLES / THE “RIDES” KILLER",
    price: 885
  },
  {
    img:"BestSellers/best4.jpg",
    description: "Cream Emulsion Hyaluronic Acid 1% + Betaine 1% ",
    price: 1100
  },
  {
    img:"BestSellers/best5.jpg" ,
    description: "Cream Suspension Azelaic Acid 11.1%",
    price: 1000
  },
  {
    img:"BestSellers/best1.jpg" ,
    description: "Dr. Jart Cicapair Cream",
    price: 500
  },
  {
    img:"BestSellers/best2.jpg" ,
    description: "Dr.Jart+ Cicapair Sleepair Ampoule-In Mask",
    price: 299
  },
  {
    img:"BestSellers/best3.jpg" ,
    description: "PURITO From Green Cleansing Oil",
    price: 780
  },
  {
    img:"BestSellers/best7.jpg" ,
    description: "Magnesium mist / Soothing spray for sensitive skin",
    price: 299
  },
  {
    img:"BestSellers/best8.jpg" ,
    description: "Radiance Lifting Eye Contour",
    price: 780
  },
]
// getBestSellers();
function getBestSellers() {
let itemArray = [];
for (let i = 1; i <= bestSellers.length; i++) {
  const element = bestSellers[i];
  // stringot sho go sodrzhi htmlot
  let cardString = `<div class="card col-md-3" style="width: 18rem; display: flex; align-items: center; border:none">
  <img class="card-img-top" src="${element.img}" style="width: 250px; height: 250px;">
  <div class="card-body" style="display: flex; flex-direction: column; justify-content: space-between;">
    <h5 class="card-title" style="text-align: center;">${element.description}</h5>
   <p class="card-text"style="text-align: center";>${element.price}</p>
     </div>
    <button class="btn btn-basic" style="border-radius:50px; border-color:black;" onclick="addToCart(${element.id})">Add to cart</button></div>
  </div>`;
  // dodavam vo html-ot na buttonot onclick="addToCart(${element.id})" za da ja povikuvam funkcijata dinamichki za sekoj element.
  // go isprakjam id-to od elementot bidejki nemam pristap nadvor od axios povikot.

  cardString = itemArray.push(htmlToElement(cardString));
  if(i % 4 === 0) {
    let itemEl = htmlToElement(`<div class="carousel-item active"></div>`)
    itemArray.forEach(item => itemEl.append(item));
    itemArray = [];
  }
  // bestSellerItem.append(cardEl);
  carouselBody.append(itemEl);
}
}

