function appenddetails(el) {
  let mainDiv = document.getElementById("productsdealts");
  let div = document.createElement("div");
  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;
  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;
  let p_img = document.createElement("img");
  p_img.src = el.img;
  let description = document.createElement("p");
  description.innerHTML = el.description;
  div.append(p_img, p_name, p_price, description);
  mainDiv.append(div);
}

function showprodetail() {
  let data = JSON.parse(localStorage.getItem("pro"));
  data.forEach(function (el) {
    appenddetails(el);
  });
}
showprodetail();
