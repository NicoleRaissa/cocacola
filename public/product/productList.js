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

// document.getElementById("myOtherBtn").addEventListener("click", createCardX);
// const cardContainer = document.getElementById("wrapper");

// function createCard(title) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const cardTitle = document.createElement("h5");
//   cardTitle.textContent = title;
//   card.appendChild(cardTitle);

//   return card;
// }

// function createCardX() {
//   for (var i = 0; i < myProduct.length; i += 1) {
//     var elImage = document.createElement("img");
//     var cardBody = document.createElement("p.card-text");
//     // cardBody.textContent = "Mauris eu neque risus. Sed eu tempus ex. Nullam a consequat libero. Duis congue ipsum sed posuere imperdiet.";

//     elImage.src = myProduct[i].image;
//     const card1 = createCard(myProduct[i].productName);
//     card1.appendChild(elImage);
//     card1.appendChild(cardBody);
//     cardContainer.appendChild(card1);
//   }
// }

const cardContainer = document.getElementById("row");

document.getElementById("build").addEventListener("click", loadData);

async function loadData() {

  cardContainer.innerHTML = null;

  await fetch("productFile.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const keys = Object.keys(data);
      const arrayofObjects = keys.map(key => data[key]);
      console.log(arrayofObjects);
      buildCards(arrayofObjects);
    })
    .catch((error) => {
      console.error("Error fetching file:", error);
    });
}

function buildCards(dataArray) {

  cardContainer.classList.add("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3");
  cardContainer.classList.remove("align-item-md-stretch");

  dataArray.forEach(obj => {
    console.log("Key:", obj.product_id);
    console.log(obj);
    buildCard(obj);
  })  
}

function buildCard(obj) {
  let divCol = document.createElement("div");
  divCol.classList.add("col-sm-12", "col-md-6", "col-lg-4");

  let card = document.createElement("div");
  card.classList.add(
    "card",
    "card-body",
    "shadow-lg",
    "p-3",
    "mb-5",
    "border",
    "border-light"
  );

  let imgEl = document.createElement("img");
  imgEl.src = obj.image;

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  // cardBody.innerHTML =
  //   "<h5>" +
  //   obj.productName +
  //   ": " +
  //   obj.price +
  //   "</h5> <p> Some quick example text to build on the card title and make up the bulk of the card's content.</p>";

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center"
    
  );

  let buttonOtherDiv = document.createElement("div");
  buttonOtherDiv.classList.add("btn-group");

  let cardButton = document.createElement("BUTTON");
  cardButton.textContent = "Show more";
  cardButton.classList.add("btn", "btn-sm", "btn-outline-secondary");
  cardButton.onclick = function () {
    // alert(obj.product_id, obj);
    productPage(obj);
  };

  buttonOtherDiv.appendChild(cardButton);
  buttonDiv.appendChild(buttonOtherDiv);
  cardBody.appendChild(buttonDiv);
  card.append(imgEl,cardBody);
  divCol.appendChild(card);
  cardContainer.appendChild(divCol);
}


function productPage(obj) {

  cardContainer.classList.remove("row-cols-1", "row-cols-sm-2", "row-cols-md-3", "g-3");
  cardContainer.classList.add("align-item-md-stretch");

  cardContainer.innerHTML = null;

    
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("col-md-6");

    let textDiv = document.createElement("div");
    containerDiv.classList.add("h-100", "p-5", "bg-transparent", "rounded");

    let productImage = document.createElement("img");
    productImage.classList.add("img-fluid");
    productImage.src = obj.productImage;

    let secondcontainerDiv = document.createElement("div");
    secondcontainerDiv.classList.add("col-md-6");
    
    let secondtextDiv = document.createElement("div");
    secondtextDiv.classList.add("h-100", "p-5", "bg-body-tertiary", "border", "border-0", "rounded-3")
    
    let title = document.createElement("h2");
    title.innerHTML = obj.title;

    let descr = document.createElement("p");
    descr.innerHTML = obj.description;

    textDiv.appendChild(productImage);
    containerDiv.appendChild(textDiv);
    secondtextDiv.append(title, descr);
    secondcontainerDiv.appendChild(secondtextDiv);
    cardContainer.append(containerDiv, secondcontainerDiv);
  }


//THE FIRST WAY

// for (var i = 0; i < myProduct.length; i++) {
//   var divCol = document.createElement("div");
//   divCol.classList.add("col-6", "col-md-4", "col-lg-4");
//   var card = document.createElement("div");
//   card.classList.add("card");
//   var imgEl = document.createElement("img");
//   imgEl.classList.add("card-img-top");
//   imgEl.src = myProduct[i].image;
//   var cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   cardBody.innerHTML =
//     "<h5>" +
//     myProduct[i].productName +
//     ": " +
//     myProduct[i].price +
//     "</h5> <p> Some quick example text to build on the card title and make up the bulk of the card's content.</p>";
//   card.append(imgEl, cardBody);
//   divCol.appendChild(card);
//   cardContainer.appendChild(divCol);
// }

// ------------



