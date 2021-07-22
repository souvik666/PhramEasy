let offer = [
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
  localStorage.setItem("offers", JSON.stringify(offer));
}
// making html structure for cards
function appendpro() {
  let data = JSON.parse(localStorage.getItem("offers"));
  let mainDiv = document.getElementById("products");
  data.forEach(function (el) {
    //target this
    let div = document.createElement("div");
    div.setAttribute("class", "offersbox");

    /*    //product name
      let p_name = document.createElement("p");
      p_name.innerHTML = el.name; */

    /*     //product price
      let p_Price = document.createElement("p");
      p_Price.innerHTML = ` ${
        100 - (p_Price.innerHTML % Math.floor(Math.random() * 10))
      } `;
      //console.log(p_Price.innerHTML/2)
  
      //discount data
      disdata = p_Price.innerHTML % Math.floor(Math.random() * 10);
  
      let discount = document.createElement("p");
      discount.innerHTML = `<del>${el.price}</del>`; */

    //code
    let code = document.createElement("p");
    code.innerHTML = `CODE: <strong>${el.code}</strong>`;
    code.setAttribute("class", "codetext");

    //meta data
    let meta = document.createElement("p");
    meta.innerHTML = el.metadata;
    meta.style.fontWeight = "lighter";

    //button
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    let img = document.createElement("img");
    img.src = el.img;
    div.append(img, meta, code);
    mainDiv.append(div);
    img.addEventListener("click", function () {
      window.location.href = "producdetail.html";
    });
  });
}
appendpro();

function slider() {
  let sapn = document.getElementById("offers").getElementsByTagName("span");
  let div = document.getElementById("offers").getElementsByTagName("div");
  let l = 0;
  sapn[0].onclick = () => {
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
      /* if (l == 3) { i.style.left = "-2220px" } */
      /* if (l == 4) { i.style.left = "-2967px" } */
      if (l > 4) {
        l = 4;
      }
    }
  };
  sapn[1].onclick = () => {
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
      /*                 if (l == 3) { i.style.left = "-2220px" }
       */
      if (l < 0) {
        l = 0;
      }
    }
  };
}
// mouse over function for both arrows
let sapn = document.getElementById("arrow1");
sapn.addEventListener("mouseover", function () {
  sapn.style.background = "#f4f4f4";
});
sapn.addEventListener("mouseout", function () {
  sapn.style.background = "";
});
slider();
