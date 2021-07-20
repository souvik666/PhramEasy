let data = [
  {
    name: "Sensodyne",
    price: "115",
    img:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAACiCAMAAAATIHpEAAABUFBMVEV7yp3/zdLh8/17ypvk9Pv+z9Hh9Pt3zJuAzaL/19v9z849S1Lh7/NJUFVFR09DY1cyQkqbgo1IR1Q+REpubXLa6e79y9YvPEbG1NuD0aFUd3DS4OZDTFNASU3r+P99yZulsbnt/P+0wMmCyaI7UE1QXGI/RlHlpbNHUFtmk30yQUT0sLL7xMi9qKuBtZppcnZWYGX/1d7dwMU1O0Wsur3Zt7/x0NNKRk3/2tlya3WHvp45UUxYdXBUdmljW2B0sZFQdF7Hrrc6Oka8qak2RUIrQjxYgnCOyqhLQ1Q+RlaLeX58Z2pLfWX3ucd5XWSUhYb9v8k7Oj2Jamzjs76HlJh5iIopMjeZpawqOjprt498rJjysK/axMaplJk4MjTly9CCeoAtMDBYTlaRj5eMh4S8nKOqpazEtLmAcnJdTVf/5Oo8KziKdoTy3Ni9qqZiXmDRjfxbAAAML0lEQVR4nO2d4V/aSBqAoRCTMDKLGQt1OwNSMIep1AYkYK1YKF1dvVub7Z7tdmvdc69n1+tu//9v984kILXYshCOH0yeakWUwDy+M/NOZjJEIiEhISEhISEhISEhISEzTiwWm/ZLmEli4zHtlz81xvQmnThRZi2Xi0S0AA4VkUYhL2guF0hhNa1QkEWb8KaqmrYSBKoqVbxpD3a/ffz48bdj8nh3fZ9HL9TWaZdq8qhqTl35xtphY9LpFBF79t3+ihpTZQg57q2wgxmjJjbwqIhHGgdGandfhSPmpl2qySO8FY0kQ6mxYClEDQNZXJwM8RaLFbg3tHb77phsWYwhan23r8mQ0fW85ePjkb1DKEpiU0RcLjfvdRVyEN/brfGI33FpidUNSnb3JUh/VTXCvTGIt3G9Wej7w/cWdKu7Begc1GmXbLLERL+Ai2N7W7iTQmxJOWIIkb/Pf+fgeTOC8FZF1nH0Hz90EO58x6vqtIs2UQL01kap48bzjSPLOLB2C5D+TrtskyRQb9axrmy8OCIGhV4VxOXmN+oC9cYO9UQDxLEi6ngJcOjtq95um5Q1HceJPn9x5KIiRBx01rF5TeOC85Z9yJhb05WosrHxI4GIe7Ifevs68exqipofnaijcHFW0ajuFjQtN6fqgvMWv40otY4vo0oisfHiR4Kx+wSqam4+R6vB1dN4fDVDqXvk6I6up5//aCFGIOJysbnsHgLzBubym4wliXvcqlUqL2rLDFNo43LzOVlzk7fhToJci7j8psWSzLKqnQ5xWZKayc6TQkyTx1s8vrg4lLiFT8VlfzohuEQRY4xSamJMnz1S5fGWH54+cQs84u5sZixCDMMwGTIYLlkP1Nw8LqL43NtC/u7m2tCsZj+prfGF/O2tn/7J2dzcXGMUvEnSvkHznhl+Huvk7qfe4LtsNp+FSLy3em9TMm8EGic6hDT4pWvevCMs8PPm91a3fG85Obwt3F0DbaWhQC/zn3uDli5+Ky6ft3j2L0zH3BrgTdRY+bwtfJaa3UBcfIbePG+QvN0URAPdhd78Ei/EF0YlzrtULw6l8+bbGx1pvWXHQN54i2fv3BsdPn5YkNFbPP/yJEMyI3Ky6R9IQm8PzVFXDwKvFqX19vKkOjInm1lJvd3iQ8uR2RI5jJTeoEccvTuF4arE3r44QvgK8sbbDSOn0FsfAc5nCeNxads373TI6EjrLR7P8wZ+JOCBkvYLCwvZu5sPRwcGWmKOSz5v+c3MMJMLN5CKy5n3cm+poWZlBkJSko6zwNudh8nhJ1A/Jbm2JWk95bnEyNfOLC7CY+XsF251T/WOlL7xB0vrrZvyj8Y852+fFAS8meNfZ3Sdq/n6OXHG8b1pmhbRIN4YeMsGq83zRsHbSqRQ0DjTLnQA+Ctd+NWOsZyqFSkb+zrK6whvCLyJZ4nMx4WV/lYf/LI9NaZGwNvD/Dgzfzd5o6Ke+k807UIHQSxS0LzaoxUihR0DvIlFIePMAPr43vJb4I3QzGu1+0SR2d+XRYsVCj/v7T148GAPeI0wW7t7J2Bevny5iZD1eq/Lz4WVWV9arqqPii4hlqCDKC3RaiZTrVZHnf7rx5+hIYRgvozO6vFsT7QL0y78qMS4t3VCkVi+bBwYkwbDU2BcN/CTlRmON/7C1ZV1worMbbdTfiyMtwvGF/AObhUthMiTlYC2YpoGXW+ULC/93zg8/GCUZt9bTFsnSfeioeu63UMPFrvvyIn7z1+4Mx5vHIg3GAI9VdLRhNIjEShK1MM78i/3//YKsV1N1WZ60ynhjVzzFjy+t2hiA7xZbJ689YVFNFiujphWNu6DN0Tmw5tV5vE2nIIxFQpvzJwLb5h7U4bxpowbjD1vK3J4u9ZU3WTxq17nyhv9ujfeLQ7hra/3lMDbl+LNc8MzCE+apwX+byh+gy/c+QmH9yuJm9tBqbwJW+KGbffu1v3o6+YYQqKX3EbTsseb4lQqbyqKdwM4q+jdH7wRd1R6gZVo6JV3p6fHp6ctR9cl96b/0G6TtxWwUnlL2q5L3taEEkVvnbTbddd9WxPiINoa5Wa93enw6+nr72v6DR2EHN4UfdukjEDAJWpWiS95IEu60KQfE7OEGavWoqIW22dNlyDEN1OllJK3xw2JvYEe8Ea5N6WWKmHKKG56VVBvMtr1BobSlTpCJYQQIaYJ+oqvDgdXVSm86VF7GfRUhbeM8GbUK6L4Zy4TK268eLOdutj2t9389dflpMVAaLvcGBRwUniD/nPZZDQFjT/Em1mimJba5TS/v/UKYg+qJDiF9MM+SiG20zk8E6eMyuC0xJKOtPF2zRumDxklh7YN938gjDV9b9F0q0oRc8u2nebYFy428L/K+oCAk8cb9r1ZhkF+I8w816Fm2ufQXfzW9ryl7W2Ekxb0GIqX/Tb+fdI+//huUAsnj7duvFmmQf6TpAZ5A94qLkX1C4iyag3q6RmhmNUdkfry8Zh+9q7mXNqDUhGJvKFUBUxBHoLdi2V0YD0FIe8shpoXFgZv0YRSrmKK3utiVCHGp/5AYsBYVUJvBrYuTonBQJD+AWHrtOtNP65Sap3qvTOfnsCBY3wpvT27qFgG7yid35HhXrS63o4gycs85fmvojhXhPEGt8HbQarluCZ9VUm/IdTADlRd7k3R36OSaZVt8JbQl34/9/ndkbo/7XkzDat82TShRtqn0BEsN1qpEmpzb8vCG5+h2GhAnUWUIkRFRxF6E96e6kuQ4DYv35NS+7TBszaeh+iHqe9LEG+8L4BxK3gzqN/Bht5qFsbWU6WSgQTkrM5Q9UIHb0Xh7bRqUHYs6mlj6b8uwIpJVpc7773qF4zqU8WB8Xv9NwZWHL3VRtC+Qb7WapvU3LbT/BFOpXJ29ibJ66ke9gs9b3oTMRiXMrbdUEQ95d6cA4SNasUWp3nT0M4557ye2qG3rreEfdphmJ+TO7WjMF6gwpv9wSodoKaetkXqxr3JHW8Jfh4JWf44i1otXallKA83t6ZHW1VD9KdRuwbpCXWPvQGp4vxxSpKMEnvAVLYk3vQ+byXwpihpLLzxztL3Bo/TD6uMMatZ0y8vL51y002yJK07obduvEGd3EaieYNRVSvjeYM79SZhkLO59Wbz3K1C40YxOXcGHVIKb2AJvKWgLiZqBMan3NtpCryJ0WgrI8ZZYv7vrElKpZLJd8NE8C+J282KLuv5kAT0CxibbegXEhWXjxegBasRxpJVHoKttoHbFW8hk+0cu1VsIqBEEXHPy39IfL43qn+0LOvkDZipva2Sty244dQhr61DzqGUT+BnNW/imZ90W6q73vrx+vuWnR684EESb1FxfkPpnujgjnT42nBsHo3duxQv/dD1Sqv8rtyq6Lrem8iX0Zvvru9Ln1AvU+tfCSLqq20rAx4gn7e/hlzruEJvf52et+HWqX6FdPrmpUhz5k1bZ/TVUyWdDmQ1dOhtMoTeJPYm3rGeX5/16s9rSySV3n/Rz1OKYb//7H6e1HnXL+BdbValRfq8WX+KxVgCXrx0cFwdWBw8sXH/F9/b7IrzvTFaveCXnzU8+NVnDX6dW8O/LK0xwqfe97V7YHE7yuONkvnwhj8u+2xvLwfPdo/l90dH2z8QzHYLs+4N+gVMTQ6BD2JiQuAjUPjB4ZiMMEz4GRNE+Ztp5XKzao57y2nrHX5RPZ8r5peLY3EOLXDEwl9ujJoYviO7+zN9nTjEW+TRk2c7HR+Lgb8gdiToYcE/vjEBn4l+1uF7H3B2HmgzvC+B8KZGCo96vC6aaG3xdrAsbr1c5fsjvfafpFB4VNBmeR8MUU/VfgpFgz6cwD4/wtuequVivFmDj5l+52LvpXf3R+LBt7+Dxf5IwW0qBYfKbnX349Lgr5QTT6XO8luh9r10UWNzakF4G33Ht4Hkt/r3fxN/H3WO3kI24P2i+5jHffOumJi3udxv8IrQ22iE3kYj9DYaobfRCPvTEYG8qrAzmX1oVzcJJdzbtMs4CXrextjq+DPgWHkRb4jHmzaP4nreFgPGGy+QufUWUfeLBktOBIzBW2we27cY97YjlrBNBL5/Lx/XT7ucQRNTNbXwDd+3M2D4hqDQLTx75J0PmXY5gwZat8jK3jcTYx3+LPPojRPTJsi0CxcSEhISEhISEhISEhISEhISEhISDP8DPsGjI7UoEKEAAAAASUVORK5CYII=",
    description:
      "Horlicks Classic Malt Nutrition Drink Jar of 500g is a highly nutritious drink. Drinking the suggested serving of Horlicks regularly is scientifically proven to improve growth in children, increasing both height and weight visibly within 90 days.",
  },
];

if (localStorage.getItem("pro") == null) {
  localStorage.setItem("pro", JSON.stringify(data));
}

function appendpro() {
  let data = JSON.parse(localStorage.getItem("pro"));
  let mainDiv = document.getElementById("products");
  data.forEach(function (el) {
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.innerHTML = el.name;
    let p_Price = document.createElement("p");
    p_Price.innerHTML = el.price;
    let btn = document.createElement("button");
    btn.textContent = "Add to cart";
    btn.addEventListener("click", function () {
      addToCart(el);
    });
    let img = document.createElement("img");
    img.src = el.img;
    div.append(img, p_name, p_Price, btn);
    mainDiv.append(div);
    img.addEventListener("click", function () {
      window.location.href = "producdetail.html";
    });
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
