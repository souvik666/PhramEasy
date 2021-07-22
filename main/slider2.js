let slider2 = [
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Hba1C (Glycolated....",
    price: "115",
    metadata: "Available at 5 certified labs",
    img: "https://assets.pharmeasy.in/web-assets/dist/909edb3f.svg",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];
//puttting the data in local strorage
if (localStorage.getItem("slider2") == null) {
  localStorage.setItem("slider2", JSON.stringify(slider2));
}
// making html structure for cards
function appendpro() {
  let data = JSON.parse(localStorage.getItem("slider2"));
  let mainDiv = document.getElementById("slider2content");
  data.forEach(function (el) {
    //target this
    let div = document.createElement("div");
    div.setAttribute("class", "slider2");

    //product name
    let p_name = document.createElement("p");
    p_name.innerHTML = `<strong>${el.name}</strong> `;
    //price
    let price = document.createElement("p");
    price.innerHTML = `<strong>&#8377; ${el.price}</strong> Onwards`;

    //meta data
    let meta = document.createElement("p");
    meta.innerHTML = el.metadata;
    meta.style.fontWeight = "lighter";

    let img = document.createElement("img");
    img.src = el.img;
    div.append(img, p_name, meta, price);
    mainDiv.append(div);
    img.addEventListener("click", function () {
      window.location.href = "producdetail.html";
    });
  });
}
appendpro();

document.getElementById("recomand").innerHTML = `
  <p>&#10004;	 100+ Certifed Labs</p>
  <p>&#10004;	1000 Happt customer</p>
  <p>&#10004;	 Free Sample Collection</p>
  <p>&#10004;	 Accurate Reports</p>
  `;
function slider() {
  let sapn = document.getElementById("slider2").getElementsByTagName("span");
  let div = document.getElementById("slider2").getElementsByTagName("div");
  let l = 0;
  sapn[0].onclick = () => {
    l++; //for right scroll
    for (var i of div) {
      if (l == 0) {
        i.style.left = "0px";
      }
      if (l == 1) {
        i.style.left = "-740px";
      } /*         if (l == 3) { i.style.left = "-2220px" }
               if (l == 4) { i.style.left = "-2967px" } */
      /*                 if (l == 2) { i.style.left = "-1480px" }
       */ if (l > 3) {
        l = 3;
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
      /*       if (l == 2) { i.style.left = "-1480px" }
                  if (l == 3) { i.style.left = "-2220px" } */

      if (l < 0) {
        l = 0;
      }
    }
  };
}
slider()
