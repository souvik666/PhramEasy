function s() {
  const obj = {
    slidbar: function (span, div) {
      let sapn = document.getElementById(span);
      let div = document.getElementsByTagName(div);
      let l = 0;
      sapn[0].onclick = () => {
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
          /* if (l == 4) { i.style.left = "-2967px" } */
          if (l > 4) {
            l = 4;
          }
        }
      };
      sapn[1].onclick = () => {
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
    },
  };
}
