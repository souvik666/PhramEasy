let show = document.getElementById("show");
let data = JSON.parse(localStorage.getItem("prodetaails"));

function appenditem(d) {
  //image of the product
  let imgebox = document.getElementById("productimgeBox");
  let img = document.createElement("img");
  img.setAttribute("class", "productImg");
  img.src = d.img;
  imgebox.append(img);

  //product details
  let div = document.createElement("div");
  let detailsBox = document.getElementById("productDetailsBox");
  let h1 = document.createElement("h3");
  h1.innerHTML = d.name;
  h1.setAttribute("class", "prodcutname");

  //visiting link
  let vistingLink = document.createElement("p");
  vistingLink.innerHTML = `<a href="#">Visit ${d.name.split(" ")[0]} store</a>`;
  vistingLink.setAttribute("class", "visitingLink");

  //rating
  let rating = document.createElement("div");
  rating.innerHTML = `<p>(342 ratings)</p>
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star checked"></span> 
  <span class="fa fa-star checked"></span>
  <span class="fa fa-star"></span>
  <span class="fa fa-star"></span>
  `;
  rating.setAttribute("class", "prorating");

  //price
  let price = document.createElement("p");
  price.innerHTML = `<strong>&#x20B9;${d.price} </strong>  MRP <del>${
    d.price - 10
  }</del>
  <p>Inclusive of all taxes</p>
  `;
  price.setAttribute("class", "productprice");
  price.style.fontWeight = "lighter";

  //button

  let btn = document.createElement("button");
  btn.textContent = "Add To Cart";
  btn.addEventListener("click", function () {
    addToCart(d);
  });
  btn.setAttribute("class", "addtocartButton");

  //small box imges
  let smalimg = document.createElement("img");
  smalimg.src = d.img;
  let smallbox = document.getElementById("smallimgbox");
  smallbox.append(smalimg);
  smallbox.setAttribute("class", "smallboximges");

  div.append(h1, vistingLink, rating, btn, price);
  detailsBox.append(div);
}
appenditem(data);

function addToCart(d) {
  // console.log(d);
  let cart = [];
  cart = localStorage.getItem("Productcart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("Productcart"));
  }
  cart.push(d);
  localStorage.setItem("Productcart", JSON.stringify(cart));
}
