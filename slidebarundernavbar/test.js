let data = [
    "https://cdn.statically.io/img/timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCaD-kzuR-dOuUzgxtqez1Rf730C92pHDTDr1BHJD2ynQzibzmvgh1wDaEyIlnOa7FgE&usqp=CAU",
    "https://i.pinimg.com/originals/8f/a4/9d/8fa49d4721ffc513db10b2aa97e98da5.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMSvjgPXzxpUvpVMsAcvy2gT-FZcWbU0I2QzCn3LdPc4klgcKy3eyD6_ELKQ55tF-n0M&usqp=CAU",
  ];
  if (localStorage.getItem("sliderimg") == null) {
    localStorage.setItem("sliderimg", JSON.stringify(data));
  }
  function slider() {
    let div = document.getElementById("slider");
    let img = document.createElement("img");
    img.src = data[0];
    div.append(img);
    var i = 0;
  
    setInterval(function () {
      if (i == data.length) {
        i = 0;
      } else {
        img.src = data[i];
        i++;
      }
    }, 3000);
  
    document.getElementById("right").addEventListener("click", function () {
      img.src = data[i + 1];
    });
  
    document.getElementById("left").addEventListener("click", function () {
      img.src = data[i ];
    });
  }
  slider();
  