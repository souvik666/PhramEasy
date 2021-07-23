function appendpro() {
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
    btn.addEventListener("click", function(){
      
    })

    div.append(img, btn,pname,);
    main_div.append(div);
  });
}
appendpro();
