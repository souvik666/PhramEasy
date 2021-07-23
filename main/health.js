let healthData = [
  {
    name: "A Complete Guide To Vitamins & Its Importance For Human",
    price:
      "When we discuss ways to improve our health, we mostly talk about lifestyle changes and the need to exercise regularly. While......",
    img:
      "https://blog-images.pharmeasy.in/2021/07/21104052/BLOG-7-2.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "COVID-19 3rd Wave Likely To Hit India In August...",
    price:
      "Indians seem to be forgetting how miserable their lives had become just a couple of months ago when the second wave of...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/20133315/LUPIN-03.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Covaxin vs Covishield – A Detailed Comparison...",
    price:
      "The COVID-19 vaccination drive has already begun in India, and many people are still unaware of how...",
    img:
      "https://blog-images.pharmeasy.in/2021/04/28125038/Covid-28april.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Why Is It So Crucial To Curb Stress?",
    price:
      "Stress is a reality that we all have to live with. You may have noticed that the stress levels..",
    img:
      "https://blog-images.pharmeasy.in/2021/07/17203006/BLOG-7-1.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "How To Cope With Job Stress And Maintain A Healthy...",
    price:
      "Our work takes up a significant part of our lives. The COVID-19 pandemic triggered the introduction of work-from-home office setups...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/16220210/BLOG-7.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "How Can Physical Activities Counter The Negative...",
    price:
      "Sleep is a vital aspect of our health, both physical and mental. Inferior quality of sleep and lack of physical activity have independent negative...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/16201842/BLOG-9-1.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Know More About Availability, Dosage And Safety...",
    price:
      "The COVID-19 pandemic finally saw a silver lining amongst the dark clouds when vaccines were rolled out to the public after...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/16194008/BLOG-8-1.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Which Is Worse For Your Health – Sugar...",
    price:
      "There is one question that puzzles us as much as the ‘which came first – the egg or the hen’ question. This one is linked to health...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/15225136/BLOG-9.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "The Best Tips To Keep Your Food Fresh And...",
    price:
      "The monsoon season in India provides respite from the heat of the scorching summer. Monsoons might bring freshness to...",
    img:
      "https://blog-images.pharmeasy.in/2021/07/15222515/BLOG-8.jpg?dim=0x230&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];

if (localStorage.getItem("healthData ") == null) {
  localStorage.setItem("healthData ", JSON.stringify(healthData));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("healthData "));
  let mainDiv = document.getElementById("health_products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontSize = "16px";
    p_name.style.color = "gray";

    let p_Price = document.createElement("p");
    p_Price.innerHTML = el.price;
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    let img = document.createElement("img");
    img.src = el.img;
    div.append(img, p_name, p_Price);
    mainDiv.append(div);

    //   img.addEventListener("click", function () {
    //     window.location.href = "producdetail.html";
    //   });
  });
}
appendpro();

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
    .getElementById("health_page")
    .getElementsByTagName("span");
  let div = document.getElementById("health_page").getElementsByTagName("div");
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
