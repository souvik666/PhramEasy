//product data set add products here
let dealTimer = [
  {
    name: "Liveasy Wellness Vitamin C (990mg) With Zinc (10mg)",
    price: "115",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/E85132/liveasy-wellness-vitamin-c-990mg-with-zinc-10mg-powerful-immunity-booster-60-veg-tablets-2-1605157039.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Seacod 110 Cod Liver Oil Capsules Bottle Of 110",
    price: "115",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I01462/seacod-110-cod-liver-oil-capsules-bottle-of-110-1-1626360890.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Horlicks Classic Malt Nutrition Drink Refill Of 500 G",
    price: "210",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I04912/horlicks-classic-malt-nutrition-drink-refill-of-500-g-2-1615967508.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Celevida Chocolate Diabetes Care Powder Tin Of 400 G",
    price: "690",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/O06028/celevida-chocolate-diabetes-care-powder-tin-of-400-g-2-1613490471.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Zandu Satavarex Health Food Bottle Of 210 G",
    price: "265",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I09865/zandu-satavarex-health-food-bottle-of-210-g-2-1613117937.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Sebamed Baby Cleansing Bar - 150g",
    price: "380",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/348123/sebamed-baby-soap-wrap-of-150-g-1-1595490348.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Livinguard Kids Street Mask - Ago Rabbit Print: Blue",
    price: "750",
    metadata: "25 gm spray bottle",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/Y06897/livinguard-kids-street-mask-ago-rabbit-print-blue-anti-microbial-washable-reusable-xs-2-1625053130.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Liveasy Essentials Men's Diabetic & Orthopedic Velcro",
    metadata: "25 gm spray bottle",
    price: "899",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/J94150/liveasy-essentials-mens-diabetic-orthopedic-velcro-slippers-black-size-uk-7-2-1621344199.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Pee Safe Organic Cotton Tampon (regular) - 16 N",
    metadata: "25 gm spray bottle",
    price: "269",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/I48610/pee-safe-organic-cotton-tampon-regular-16-n-2-1626331808.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Saridon Headache Relief Tablet- Strip Of 10 Tablets",
    metadata: "25 gm spray bottle",
    price: "38",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/156565/saridon-headache-relief-tablet-strip-of-10-tablets-2-1626360890.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Sugar Free Natura 100 Sachet Sweetener Sachets Box Of 100 's",
    metadata: "25 gm spray bottle",
    price: "150",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/164717/sugar-free-natura-100-sachet-sweetener-sachets-box-of-100-s-1-1611292784.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Soulflower Essential Oil Eucalyptus, 15ml",
    metadata: "25 gm spray bottle",
    price: "450",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/C52789/soulflower-essential-oil-eucalyptus-15ml-2-1625208873.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Everherb Karela Jamun Juice - Helps Maintains Healthy",
    metadata: "25 gm spray bottle",
    price: "399",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1000ml-bottle-2-1600336123.jpg?dim=224x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Sensodyne",
    metadata: "25 gm spray bottle",
    price: "105",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/M58504/digene-stick-pack-on-the-go-10ml-pack-of-5-mint-2-1625668167.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Digene Stick Pack On The Go 10ml (pack Of 5) - Mint",
    metadata: "25 gm spray bottle",
    price: "31",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/M58504/digene-stick-pack-on-the-go-10ml-pack-of-5-mint-2-1625668167.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Liveasy Essentials Copper Bottle-ayurvedic Health",
    metadata: "25 gm spray bottle",
    price: "1199",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/D65636/liveasy-essentials-copper-bottle-ayurvedic-health-benefits-leak-proof-cap-1000ml-2-1625047848.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Savlon Antiseptic Disinfectant Liquid 1000 Ml",
    metadata: "25 gm spray bottle",
    price: "291",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/156765/savlon-antiseptic-disinfectant-liquid-1000-ml-2-1599227907.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Himalaya Liv.52 Ds Tablets - 60's",
    metadata: "25 gm spray bottle",
    price: "155",
    img:
      "https://cdn01.pharmeasy.in/dam/products/105900/himalaya-liv52-ds-tablets-60s-front-2-1600168507.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
  {
    name: "Volini Pain Relief Gel Tube Of 75 G",
    metadata: "25 gm spray bottle",
    price: "245",
    img:
      "https://cdn01.pharmeasy.in/dam/products_otc/183157/volini-pain-relief-gel-tube-of-75-g-1-1626360920.jpg?dim=240x0&dpr=1&q=100",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];
//puttting the data in local strorage
if (localStorage.getItem("dealTimer") == null) {
  localStorage.setItem("dealTimer", JSON.stringify(dealTimer));
}

// making html structure for cards
function appendpro() {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  let mainDiv = document.getElementById("DealTimer");
  data.forEach(function (el) {
    //target this
    let div = document.createElement("div");
    div.setAttribute("id", "timer_classname");
    div.addEventListener("click", function () {
      showdetail(el);
    });

    //product name
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;

    //product price
    let p_Price = document.createElement("p");
    p_Price.innerHTML = ` ${
      100 - (p_Price.innerHTML % Math.floor(Math.random() * 10))
    } `;
    //console.log(p_Price.innerHTML/2)

    //discount data
    //disdata = p_Price.innerHTML % Math.floor(Math.random() * 10);

    let discount = document.createElement("p");
    discount.innerHTML = `MRP &nbsp;&nbsp &#8377 <del>${el.price}</del>`;

    //meta data
    let meta = document.createElement("p");
    meta.innerHTML = el.metadata;
    meta.style.fontWeight = "lighter";
    meta.style.marginTop = "15px";

    //button
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    let img = document.createElement("img");
    img.src = el.img;
    img.style.height = "180px";
    img.style.width = "180px";
    //   img.style.border="1px solid red";

    div.append(img, p_name, discount, p_Price);
    mainDiv.append(div);
    img.addEventListener("click", function () {
      window.location.href = "producdetail.html";
    });
  });
}

appendpro(); //calling appendpro function

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
  let sapn = document.getElementById("dealTimer").getElementsByTagName("span");
  let div = document.getElementById("dealTimer").getElementsByTagName("div");
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
//count down timer
var countDownDate = new Date("Jul 29, 2021 15:37:25").getTime();
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="box"
  document.getElementById("timer_box").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s " + "left";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer_box").innerHTML = "EXPIRED";
  }
}, 1000);

function showdetail(el) {
  localStorage.setItem("prodetaails", JSON.stringify(el));
  // refere this code -->https://github.com/souvik666/PhramEasy/blob/structure/productdetails/productDetails.js
  //window.location.href = "show.html";
}
