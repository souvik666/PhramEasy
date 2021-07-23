let reviews = [
  {
    name: "Vikram",
    date: "Aprl 21,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",
  },
  {
    name: "Souvik",
    date: "Aprl 29,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!",
  },
  {
    name: "Deevanshu",
    date: "June 14,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "Excellent experience. Pharmeasy has not let it's customers down during lockdown. Thanks team. Great job. The application is also very smooth. And does its job well with an attractive UI and easy to use features. Good job developer.",
  },
  {
    name: "Sumith",
    date: "July 2,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!",
  },
  {
    name: "Ravi Shankar",
    date: "Nov 21,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.",
  },
  {
    name: "Rohini",
    date: "Dec 18,2020",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!",
  },
  {
    name: "Raj",
    date: "Jan 21,2021",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "Best service and app amongst all available. I have been using it for more than 3 years, and even during the pandemic, they have kept their standards high and are delivering the order within 24 hours. Keep up the good work.",
  },
  {
    name: "Abhijith",
    date: "Feb 14,2021",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!",
  },
  {
    name: "Ashok",
    date: "Aprl 16,2021",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "Very helpful and friendly app in terms of usability, customer support & money saving from the point of medical necessity of every person.",
  },
  {
    name: "Shruthi",
    date: "May 15,2021",
    img: "https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg",
    review:
      "I've had a good experience. The consultation with a doctor feature works well too. The prices and discounts are great too. Overall the simplicity of the app is a plus too. I recommend this app. Will always be a customer/user now! Genuinely!",
  },
];

if (localStorage.getItem("reviews") == null) {
  localStorage.setItem("reviews", JSON.stringify(reviews));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("reviews"));
  let mainDiv = document.getElementById("review_products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    p_name.style.fontSize = "16px";
    p_name.style.color = "gray";

    let p_date = document.createElement("p");
    p_date.innerHTML = el.date;

    let p_review = document.createElement("p");
    p_review.innerHTML = el.review;

    let img = document.createElement("img");
    img.src = el.img;
    div.append(p_name, p_date, img, p_review);
    mainDiv.append(div);

    //   img.addEventListener("click", function () {
    //     window.location.href = "producdetail.html";
    //   });
  });
}
appendpro();

// onclikc event for slider
function slider() {
  let sapn = document.getElementById("Review").getElementsByTagName("span");
  let div = document.getElementById("Review").getElementsByTagName("div");
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
