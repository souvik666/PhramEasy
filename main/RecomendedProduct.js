let RecomendedProduct = [
  {
    name: "Horlicks Classic Malt Nutrition Drink Of 500 G",
    price: "115",
    metadata: "500 Powder in jar",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I04915/horlicks-classic-malt-nutrition-drink-jar-of-500-g-2-1601563018.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Sensodyne Fresh Mint Toothpaste Tube Of 75 G",
    metadata: "75 gm past in tube",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I37008/sensodyne-fresh-mint-toothpaste-tube-of-75-g-1-1601563877.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Volini Maxx Pain Relief Spray - 25 Gm",
    metadata: "25 gm spray bottle",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I35532/volini-maxx-pain-relief-spray-25-gm-2-1614077241.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Zandu Pain Relief Balm Bottle Of 50 Ml",
    metadata: "50ml Balm in Bottel",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/F31145/zandu-pain-relief-balm-bottle-of-50-ml-2-1613391775.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Moov Pain Relief Spray Bottle Of 50 G",
    metadata: "50 gm spray bottle",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I08068/moov-pain-relief-spray-bottle-of-50-g-2-1610440319.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Digene Gel Acidity & Gas Relief - 200ml Mixed Fruit Flavour",
    metadata: "200ml liquid in bottel",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I35832/digene-gel-acidity-gas-relief-200ml-mixed-fruit-flavour-2-1600002861.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Cadbury Bournvita Lil Champs Nutrition Drink Jar Of 500 G",
    metadata: "500 gm powder in jar",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I35832/digene-gel-acidity-gas-relief-200ml-mixed-fruit-flavour-2-1600002861.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Kesh King Anti Hairfall Shampoo Bottle Of 200 Ml",
    metadata: "200 ml shampoo in bottel",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I07455/cadbury-bournvita-lil-champs-nutrition-drink-jar-of-500-g-2-1613111508.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Wildcraft Hypashield Reusable Outdoor W95 Mask",
    metadata: "1 face mask",
    price: "115",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/L84830/kesh-king-anti-hairfall-shampoo-bottle-of-200-ml-2-1613110248.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];
//puttting the data in local strorage
if (localStorage.getItem("RecomendedProduct") == null) {
  localStorage.setItem("RecomendedProduct", JSON.stringify(RecomendedProduct));
  data;
}
// making html structure for cards
function appendpro() {
  let data = JSON.parse(localStorage.getItem("RecomendedProduct"));
  let mainDiv = document.getElementById("productsrecomended");
  data.forEach(function (el) {
    //target this
    let div = document.createElement("div");
    div.setAttribute("class", "RecomendedProduct");
    div.style.cursor = "pointer";
    //product name
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.color = "rgb(29, 28, 28)";

    //product price
    let p_Price = document.createElement("p");
    p_Price.innerHTML = ` ${
      100 - (p_Price.innerHTML % Math.floor(Math.random() * 10))
    } `;
    p_Price.style.marginTop = "-8px";

    //console.log(p_Price.innerHTML/2)

    let discount = document.createElement("p");
    discount.innerHTML = `&#8377 <del>${el.price}</del>`;
    discount.style.marginTop = "-8px";

    //meta data
    let meta = document.createElement("p");
    meta.innerHTML = el.metadata;
    meta.style.fontWeight = "lighter";
    meta.style.color = "gray";
    meta.style.marginTop = "-8px";
    // meta.style.marginTop="15px";

    //button
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    let img = document.createElement("img");
    img.src = el.img;
    div.append(img, p_name, meta, discount, p_Price);
    mainDiv.append(div);
    div.addEventListener("click", function () {
      window.open("showProductdetails.html");
      showdetail(el);
    });
  });
}
appendpro();
//add to cart method
function addToCart(obj) {
  let cart = [];
  cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(obj);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// onclikc event for slider
function slider() {
  let sapn = document
    .getElementById("RecomendedProduct")
    .getElementsByTagName("span");
  let div = document
    .getElementById("RecomendedProduct")
    .getElementsByTagName("div");
  let l = 0;
  sapn[1].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      if (l == 3) {
        i.style.left = "-2220px";
      }
      if (l == 4) {
        i.style.left = "-2967px";
      }
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[0].onclick = () => {
    l--; //for left scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      }
      if (l == 2) {
        i.style.left = "-1480px";
      }
      if (l == 3) {
        i.style.left = "-2220px";
      }

      if (l < 0) {
        l = 0;
      }
    }
  };
}
slider();

function showdetail(el) {
  //localStorage.setItem("prodetaails", JSON.stringify(el));
  // refere this code -->https://github.com/souvik666/PhramEasy/blob/structure/productdetails/productDetails.js
}
