//header div
let header = document.createElement("div");
header.setAttribute("class", "head");
document.body.append(header);

//image in header
let head = document.querySelector(".head");
// head.innerHTML +=`<img src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/05/makeup-pic-1.jpg" class="header-image">`
head.innerHTML += `<img src="https://getmyshopping.com/wp-content/uploads/2020/02/Makeup-Products.jpg" class="header-image">`

//body div
let content = document.createElement("div");
content.setAttribute("class", "body");
document.body.append(content);

//pagination div
let footerPagination = document.createElement("div");
footerPagination.setAttribute("class", "pagination-div fixed-bottom");
content.appendChild(footerPagination);


let pagination = document.querySelector(".pagination-div");
let paginationlink = document.getElementsByClassName("pagination-link")

//pagination body(page numbers)

pagination.innerHTML += `<ul class="pagination-body">

 <li class="previous " onclick="previousbtnFunction()">&laquo;</li>
 <li class="pagination-link active" value="1" onclick="paginationFunction(event)">1</li>
 <li class="pagination-link" value="2" onclick="paginationFunction(event)">2</li>
 <li class="pagination-link" value="3" onclick="paginationFunction(event)">3</li>
 <li class="pagination-link" value="4" onclick="paginationFunction(event)">4</li>
 <li class="pagination-link" value="5" onclick="paginationFunction(event)">5</li>
 <li class="pagination-link" value="6" onclick="paginationFunction(event)">6</li>
 <li class="pagination-link" value="7" onclick="paginationFunction(event)">7</li>
 <li class="pagination-link" value="8" onclick="paginationFunction(event)">8</li>
 <li class="pagination-link" value="9" onclick="paginationFunction(event)">9</li>
 <li class="pagination-link" value="10" onclick="paginationFunction(event)">10</li>
 <li class="next" onclick="nextbtnFunction()">&raquo;</li>

 </ul>`
currentvalue = 1;
//pagination onclick()
function paginationFunction(event) {
    for (var i = 0; i < paginationlink.length; i++) {
        paginationlink[i].classList.remove("active")
    }
    event.target.classList.add("active")
    currentvalue = event.target.value
    //console.log(currentvalue)
}


//previous button function
function previousbtnFunction() {
    //console.log(currentvalue)
    for (var i = 0; i < paginationlink.length; i++) {
        paginationlink[i].classList.remove("active")
    }
    if (currentvalue === 1) {
        paginationlink[0].classList.add("active")
    }
    else if (currentvalue > 1) {
        currentvalue--;
        //  console.log(currentvalue)
        paginationlink[currentvalue - 1].classList.add("active")
    }
}
//next button
function nextbtnFunction() {
    for (var i = 0; i < paginationlink.length; i++) {
        paginationlink[i].classList.remove("active")
    }
    if (currentvalue === 10) {
        paginationlink[9].classList.add("active")
    }
    else if (currentvalue <= 10) {
        currentvalue++;
        console.log(currentvalue)
        paginationlink[currentvalue - 1].classList.add("active");
    }

}

//fetch data

 async function productCard(start,end){
    try {

            let response = await fetch(" https://makeup-api.herokuapp.com/api/v1/products.json",{
            method:"GET"
        })
    let data = await response.json();
    console.log(data)


//card div

let card = document.createElement("div")
card.setAttribute("class", "main-card");
content.appendChild(card);


let productCards = document.querySelector(".main-card")

for (var i = start; i < end; i++) {
    let brand = data[i].brand;
    let productName = data[i].name;
    let productPrice = data[i].price + ' ' + data[i].price_sign;
    let productLink = data[i].product_link;
    let productImage = data[i].api_featured_image;
    let productDescription = data[i].description;


    //card body
    productCards.innerHTML +=
        `<div class="card" style="">
    <img src="${productImage}" class="card-img-top" alt="...">
    <div class="card-body">
    <div class="ProductName-div">${productName}</div>
    <div class="Brand-div">Brand:${brand}</div>
    <div class="description">Description:</div><div class="card-text">${productDescription}</div>
    <div class="price"><h4>PRICE: ${productPrice}</h4></div>
      <div class="buy"><a href="${productLink}" class="btn btn-primary" target="_blank">CLICK HERE TO BUY</a></div>
    </div>
    </div>
  </div>`
    //console.log(productCards)
}
} 
    catch (error) {
    console.log(error)
}
}
productCard(0, 30);
//  ---------- PAGINATION -CLICK-FUNCTION-----------//

let paginationBody=document.querySelector(".pagination-body");
paginationBody.addEventListener("click",()=>{

if(currentvalue==1){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(0,30);
}
else if(currentvalue==2){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(30,60);
}
else if(currentvalue==3 ){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(60,90);
}
else if(currentvalue==4){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(90,120);
}
else if(currentvalue==5){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(120,150);
}
else if(currentvalue==6){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(150,180);
}
else if(currentvalue==7){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(180,210);
}
else if(currentvalue==8){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(210,240);
}
else if(currentvalue==9){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(240,270);
}
else if(currentvalue==10){
let productCards=document.querySelector(".main-card");
productCards.remove();
productCard(270,300);
}
})