function myDrawer(e) {
  e.classList.toggle("show");
  var elem = document.getElementById("drawerID");
  var Style = window.getComputedStyle(elem);
  var right = Style.getPropertyValue("right");

  if (right == "0px") {
    elem.style.right = "-400px";
  } else {
    elem.style.right = "0px";
  }
}
