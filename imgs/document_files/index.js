//document.getElementById("myBtn").addEventListener("click", printTenTimes);

// const myProducts = [
//     {
//         "productName": "coca-cola",
//         "price": 3.12,
//         "ml": 33,
//         "imgLink": "/img/cocacola.jpg"
//     },
//     {
//         "productName": "fanta",
//         "price": 3.12,
//         "ml": 33,
//         "imgLink": "/img/fanta.jpg"
//     }
// ];

// write a javascript array of products

// function printTenTimes() {
//     console.log(myProduct)
//     let par = document.getElementById("wrapper");
//     myProduct.forEach(product => {
//         let myParagraph = document.createElement("div.card");
//         let myTitle = document.createElement("h1")
//         myTitle.innerHTML = product.productName;
//         myParagraph.appendChild(myTitle);

//         // myParagraph.innerHTML =  product.productName + ": " + product.price;
//         par.appendChild(myParagraph);
//     })

//console.log(myProductsObj);

//const myProductsObj = JSON.parse(myProducts);

//const myProductsObj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

/*myProductsObj.forEach(product => {
        let myParagraph = document.createElement("p");
        myParagraph.innerHTML =  product.productName;
        par.appendChild(myParagraph);
        
    });*/

/*for (let i = 0; i < 10; i++) {
        let myParagraph = document.createElement("p");
        myParagraph.innerHTML = "pippo " + i;
        par.appendChild(myParagraph);

    }*/

let myProduct = [
  {
    productName: "coca-cola",
    price: "3$",
    image: "/coca-cola/imgs/Coca-Cola.svg",
  },
  {
    productName: "fanta",
    price: "3$",
    image: "/coca-cola/imgs/Fanta.svg",
  },
  {
    productName: "sprite",
    price: "3$",
    image: "/coca-cola/imgs/logo.png",
  },
];

document.getElementById("myOtherBtn").addEventListener("click", createCardX);
const cardContainer = document.getElementById("wrapper");

function createCard(title) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = title;
  card.appendChild(cardTitle);

  return card;
}

function createCardX() {
  for (var i = 0; i < myProduct.length; i += 1) {
    var elImage = document.createElement("img");
    elImage.src = myProduct[i].image;
    const card1 = createCard(myProduct[i].productName);
    card1.appendChild(elImage);
    cardContainer.appendChild(card1);
  }
}


// ------------
/*
MY COMPONENTE "CARD"

<div class="card" style="width: 18rem;">
  <img src="XXX_IMG_link_XXX" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/