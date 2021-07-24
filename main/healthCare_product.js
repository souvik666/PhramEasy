let healthCareData = [
    {
      name: "A Complete Guide To Vitamins & Its Importance For Human",
      price: "When we discuss ways to improve our health, we mostly talk about lifestyle changes and the need to exercise regularly. While......",
      img:
        "https://cms-contents.pharmeasy.in/banner/131407bc417-Backet_CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "COVID-19 3rd Wave Likely To Hit India In August...",
      price: "Indians seem to be forgetting how miserable their lives had become just a couple of months ago when the second wave of...",
      img:
        "https://cms-contents.pharmeasy.in/banner/0585c320a99-Vicks-CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "Covaxin vs Covishield – A Detailed Comparison...",
      price: "The COVID-19 vaccination drive has already begun in India, and many people are still unaware of how...",
      img:
        "https://cms-contents.pharmeasy.in/banner/1260a40c85b-Sebamed_CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "Why Is It So Crucial To Curb Stress?",
      price: "Stress is a reality that we all have to live with. You may have noticed that the stress levels..",
      img:
        "https://cms-contents.pharmeasy.in/banner/dab376ae200-Cremaffin-Banner_CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "How To Cope With Job Stress And Maintain A Healthy...",
      price: "Our work takes up a significant part of our lives. The COVID-19 pandemic triggered the introduction of work-from-home office setups...",
      img:
        "https://cms-contents.pharmeasy.in/banner/bc2e589dec9-Saridon-CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "How Can Physical Activities Counter The Negative...",
      price: "Sleep is a vital aspect of our health, both physical and mental. Inferior quality of sleep and lack of physical activity have independent negative...",
      img:
        "https://cms-contents.pharmeasy.in/banner/9dfe7d3e1f3-Peesafe-CB-1.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "Know More About Availability, Dosage And Safety...",
      price: "The COVID-19 pandemic finally saw a silver lining amongst the dark clouds when vaccines were rolled out to the public after...",
      img:
        "https://cms-contents.pharmeasy.in/banner/d0e2cf6e145-Bold_care-CB.png",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "Which Is Worse For Your Health – Sugar...",
      price: "There is one question that puzzles us as much as the ‘which came first – the egg or the hen’ question. This one is linked to health...",
      img:
        "https://cms-contents.pharmeasy.in/banner/bf674e7790e-Colagte-CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    {
      name: "The Best Tips To Keep Your Food Fresh And...",
      price: "The monsoon season in India provides respite from the heat of the scorching summer. Monsoons might bring freshness to...",
      img:
        "https://cms-contents.pharmeasy.in/banner/0585c320a99-Vicks-CB.jpg",
      description:
        "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
    },
    
  ];
  
  if (localStorage.getItem("healthCareData") == null) {
    localStorage.setItem("healthCareData", JSON.stringify(healthCareData));
  }
  
  function appendpro() {
    let data = JSON.parse(localStorage.getItem("healthCareData"));
    let mainDiv = document.getElementById("healthCare_products");
    data.forEach(function (el) {
      let div = document.createElement("div");
      let p_name = document.createElement("p");
      p_name.innerHTML = el.name;
      p_name.style.fontSize="16px";
      p_name.style.color="gray";

      let p_Price = document.createElement("p");
      p_Price.innerHTML = el.price;
      let btn = document.createElement("button");
      btn.textContent = "Add to cart";
      btn.addEventListener("click", function () {
        addToCart(el);
      });
      let img = document.createElement("img");
      img.src = el.img;
      div.append(img);
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
    let sapn = document.getElementById("healthCare_page").getElementsByTagName("span");
    let div = document.getElementById("healthCare_page").getElementsByTagName("div");
        let l = 0;
        sapn[1].onclick = () => {
            l++//for right scroll
            for (var i of div) {
                if (l == 0) { i.style.left = "0px" }
                if (l == 1) { i.style.left = "-740px" }
                if (l == 2) { i.style.left = "-1480px" }
                if (l == 3) { i.style.left = "-2220px" }
                if (l == 4) { i.style.left = "-2967px" }
                if (l > 4) { l = 4 }
            }
        }
        sapn[0].onclick = () => {
            l-- //for left scroll
            for (var i of div) {
                if (l == 0) { i.style.left = "0px" }
                if (l == 1) { i.style.left = "-740px" }
                if (l == 2) { i.style.left = "-1480px" }
                if (l == 3) { i.style.left = "-2220px" }

                if (l < 0) { l = 0 }
            }
        }
}
    slider(); 