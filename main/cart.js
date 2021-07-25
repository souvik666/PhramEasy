function appendpro(obj) {
  let data = JSON.parse(localStorage.getItem("cart"));
  let main_div = document.getElementById("cartcontainer");
  data.forEach(function (el) {
    let div = document.createElement("div");
    //name
    let pname = document.createElement("p");
    pname.innerHTML = `${el.name} 
    <br>
    <small class="brand">${el.name.split(" ")[0]}<small>
    <br>
    <strong>${el.metadata}</strong>
    `;
    pname.setAttribute("class", "productname");
    //pname.style.float="right"

    //image
    let img = document.createElement("img");
    img.src = el.img;

    //brand
    let brand = document.createElement("p");
    brand.innerHTML = `<small>${el.name.split(" ")[0]}<small>`;
    brand.setAttribute("class", "brand");

    //button

    let btn = document.createElement("p");
    btn.innerHTML = "🗑";
    btn.setAttribute("class", "del");
    btn.addEventListener("click", function () {
      removep(obj);
    });

    div.append(img, btn, pname);
    main_div.append(div);
  });
}
appendpro();

//set billing information
let submit = document
  .getElementById("payment")
  .addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let street = document.getElementById("street").value;
    let pin = document.getElementById("pin").value;
    let state = document.getElementById("state").value;
    let data = {
      name,
      street,
      state,
      pin,
    };

    if (localStorage.getItem("userchekout") == null) {
      localStorage.setItem("userchekout", JSON.stringify(data));
    }
    window.location.href = "payment.html";
  });

function cartsum() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += Number(data[i].price);
  }
  document.getElementById("ammount").innerHTML = "Cart Value  : ₹  " + sum;
}
cartsum();

function removep(el) {
  let arr = [];
  let data = JSON.parse(localStorage.getItem("cart"));
  for (var i = 0; i < data.length; i++) {
    if (data[i].name === el.name) {
      data.splice(0, 1);
      appendpro(data);
    }
  }
}
removep();
