function cartItem() {
  let data = JSON.parse(localStorage.getItem("cart"));
  let maindiv = document.getElementById("cartItem");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    let p_price = document.createElement("p");
    p_price.innerHTML = el.price;
    let p_img = document.createElement("img");
    p_img.src = el.img;
    div.append(p_img, p_name, p_price);
    maindiv.append(div);
  });
}
cartItem();
