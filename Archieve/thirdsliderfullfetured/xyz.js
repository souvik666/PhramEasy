let features = [
  {
    name: "Horlicks Classic Malt Nutrition Drink Of 500 G",
    price: "115",
    metadata: "500 Powder in jar",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/f57fee62551-Accuchek.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Sensodyne Fresh Mint Toothpaste Tube Of 75 G",
    metadata: "75 gm past in tube",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/9f6f46c3ff1-wow_web.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Volini Maxx Pain Relief Spray - 25 Gm",
    metadata: "25 gm spray bottle",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/eb425772ccf-Featured-banner_Horlicks.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Zandu Pain Relief Balm Bottle Of 50 Ml",
    metadata: "50ml Balm in Bottel",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/c572570b5ce-Liveasy.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Moov Pain Relief Spray Bottle Of 50 G",
    metadata: "50 gm spray bottle",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/1e2bdf15962-Featured-Web_Sensodyne.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Digene Gel Acidity & Gas Relief - 200ml Mixed Fruit Flavour",
    metadata: "200ml liquid in bottel",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/7c19dbe3433-Web_featured-brand_colgate.png?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Cadbury Bournvita Lil Champs Nutrition Drink Jar Of 500 G",
    metadata: "500 gm powder in jar",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/15970af32f6-Featured-Baidyanath.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Kesh King Anti Hairfall Shampoo Bottle Of 200 Ml",
    metadata: "200 ml shampoo in bottel",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/eadaf5e76c8-3.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Wildcraft Hypashield Reusable Outdoor W95 Mask",
    metadata: "1 face mask",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/d5f9240e29a-SUGARFREE.png?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Kesh King Anti Hairfall Shampoo Bottle Of 200 Ml",
    metadata: "200 ml shampoo in bottel",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/eadaf5e76c8-3.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Cadbury Bournvita Lil Champs Nutrition Drink Jar Of 500 G",
    metadata: "500 gm powder in jar",
    price: "115",
    img:
      "https://cms-contents.pharmeasy.in/carousel_item/15970af32f6-Featured-Baidyanath.jpg?dim=146x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];
//puttting the data in local strorage
if (localStorage.getItem("features") == null) {
  localStorage.setItem("features", JSON.stringify(features));
}
// making html structure for cards
function appendpro() {
  const data = JSON.parse(localStorage.getItem("features"));
  const mainDiv = document.getElementById("features");
  data.forEach(function (el) {
    //target this
    const div = document.createElement("div");
    div.setAttribute("class", "featuresbox");
    //code
    const code = document.createElement("p");
    code.innerHTML = `CODE: <strong>${el.code}</strong>`;
    code.setAttribute("class", "codetext");

    //meta data
    const meta = document.createElement("p");
    meta.innerHTML = el.metadata;
    meta.style.fontWeight = "lighter";

    //button
    const btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    const img = document.createElement("img");
    img.src = el.img;
    div.append(img);
    mainDiv.append(div);
    img.addEventListener("click", function () {
      window.location.href = "producdetail.html";
    });
  });
}
appendpro();
//add to cart method
function addToCart(obj) {
  const cart = [];
  cart = localStorage.getItem("cart");
  if (cart == null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  cart.push(obj);
  localStorage.setItem("cart", JSON.stringify(cart));
}

// function slider() {
//   const sapn = document.getElementsByTagName("span");
//   const div = document.getElementsByTagName("div");
//   const l = 0;
//   sapn[0].onclick = () => {
//     l++; //for right scroll
//     for (var i of div) {
//       if (l == 0) {
//         i.style.left = "0px";
//       }
//       if (l == 1) {
//         i.style.left = "-740px";
//       }
//       if (l == 2) {
//         i.style.left = "-1480px";
//       }
//       /* if (l == 3) { i.style.left = "-2220px" } */
//       /* if (l == 4) { i.style.left = "-2967px" } */
//       if (l > 4) {
//         l = 4;
//       }
//     }
//   };
//   sapn[1].onclick = () => {
//     l--; //for left scroll
//     for (var i of div) {
//       if (l == 0) {
//         i.style.left = "0px";
//       }
//       if (l == 1) {
//         i.style.left = "-740px";
//       }
//       if (l == 2) {
//         i.style.left = "-1480px";
//       }
//       /*                 if (l == 3) { i.style.left = "-2220px" }
//        */
//       if (l < 0) {
//         l = 0;
//       }
//     }
//   };
// }
// // mouse over function for both arrows
// const sapn = document.getElementById("arrow1");
// sapn.addEventListener("mouseover", function () {
//   sapn.style.background = "#f4f4f4";
// });
// sapn.addEventListener("mouseout", function () {
//   sapn.style.background = "";
// });
