const offersdata = [
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },

  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },

  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },

  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },

  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
  {
    metadata: "Flat 20% off + up to Rs.1000 cashback",
    code: "SUPR20",
    img:
      "https://cms-contents.pharmeasy.in/offer/6c8c80e851e-SUPR20.jpg?dim=60x0&dpr=1&q=100",
  },
];

//puttting the data in local strorage
if (localStorage.getItem("offers") == null) {
  localStorage.setItem("offers", JSON.stringify(offersdata));
}
// making html structure for cards
function appendpro() {
  const data = JSON.parse(localStorage.getItem("offers"));
  const mainDiv = document.getElementById("products");
  data.forEach(function (el) {
    //target this
    const div = document.createElement("div");
    div.setAttribute("class", "offersbox");
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
    div.append(img, meta, code);
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
