function appendpro(d) {
  let data = d;
  let main_div = document.getElementById("productgrid");
  main_div.innerHTML = null;
  data.forEach(function (d) {
    let div = document.createElement("div");
    let Pname = document.createElement("p");
    Pname.innerHTML = d.name;
    let p_Price = document.createElement("p");
    p_Price.innerHTML = d.price;

    let img = document.createElement("img");
    img.src = d.img;

    let meta = document.createElement("p");
    meta.innerHTML = d.metadata;
    div.append(img, Pname, meta, p_Price);
    main_div.append(div);
    div.addEventListener("click", function () {
      window.open("showProductdetails.html");
      showdetail(d);
    });
  });
}
appendpro(JSON.parse(localStorage.getItem("dealTimer")));

//price low to high
function lowTohigh() {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  appendpro(data);
}

function searchBybrand(el) {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  let arr = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].name.split(" ")[0] === el) {
      arr.push(data[i]);
    }
  }
  appendpro(arr);
}

let Himalaya = document.getElementById("Himalaya");
Himalaya.addEventListener("click", function () {
  searchBybrand("Himalaya");
});

let Savlon = document.getElementById("Savlon");
Savlon.addEventListener("click", function () {
  searchBybrand("Savlon");
});

let Liveasy = document.getElementById("Liveasy");
Liveasy.addEventListener("click", function () {
  searchBybrand("Liveasy");
});

let Saridon = document.getElementById("Saridon");
Saridon.addEventListener("click", function () {
  searchBybrand("Saridon");
});

let searchbar = document.getElementById("searchbar");
let submit = document.getElementById("sumitbtn");
submit.addEventListener("click", function () {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  let arr = [];
  let valeofuser = searchbar.value;
  for (var i = 0; i < data.length; i++) {
    if (data[i].name.split(" ")[0] === valeofuser) {
      arr.push(data[i]);
    }
  }
  appendpro(arr);
});

let first = document.getElementById("26-105");
first.addEventListener("click", function () {
  pricehunt(first.value);
});

let second = document.getElementById("105-222");
second.addEventListener("click", function () {
  pricehunt(second.value);
});
let third = document.getElementById("222-311");
third.addEventListener("click", function () {
  pricehunt(third.value);
});
let forth = document.getElementById("311-463");
forth.addEventListener("click", function () {
  pricehunt(forth.value);
});
let fifth = document.getElementById("463-1728");
fifth.addEventListener("click", function () {
  pricehunt(fifth.value);
});

//sort by price
function pricehunt(el) {
  let newel = el.split("-").map(Number);
  let low = newel[0];
  let high = newel[1];
  let arr = [];
  let data = JSON.parse(localStorage.getItem("dealTimer"));

  for (var i = 0; i < data.length; i++) {
    if (Number(data[i].price) < high || data.price > low) {
      arr.push(data[i]);
    }
  }
  appendpro(arr);
}

function lowtohigt() {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  appendpro(data);
}
function lowtohigt() {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  appendpro(data);
}

document.getElementById("lowtohigt").addEventListener("click", function () {
  lowtohigt();
});

function highttolow() {
  let data = JSON.parse(localStorage.getItem("dealTimer"));
  data = data.sort(function (a, b) {
    return b.price - a.price;
  });
  appendpro(data);
}

document.getElementById("highttolow").addEventListener("click", function () {
  highttolow();
});
