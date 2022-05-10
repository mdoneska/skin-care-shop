let truAlchemy = document.getElementById("cards");



getTruAlchemyProducts();
function getTruAlchemyProducts() {
    for (let i = 0; i < truAlchemyProducts.length; i++) {
      const element = truAlchemyProducts[i];
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
      truAlchemy.append(cardEl);
       //bestSellerItem.append(cardEl);
     // carouselBody.append(itemEl);
    
    }
    }