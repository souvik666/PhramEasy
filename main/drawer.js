var elem = document.getElementById("drawerID");
elem.style.right = "-450px";
function myDrawer(e) {
  e.classList.toggle("show");
  var style = window.getComputedStyle(elem);
  var right = style.getPropertyValue("right");

  if (right == "0px") {
    elem.style.right = "-450px";
    // } else {
    //   elem.style.right = "0px";
  }
}
function openDrawer() {
  // var elem = document.getElementById("drawerID");
  var Style = window.getComputedStyle(elem);
  var right = Style.getPropertyValue("right");

  if (right != "0px") {
    elem.style.right = "0px";
    // } else {
    //   elem.style.right = "";
  }
}
function registerHere() {
  let data = document.getElementById("drawerID");
  data.innerHTML = null;
  data.innerHTML = `<button type="button" onclick="myDrawer(this)" class="toggle-collapse" id="toggle-button">
        <span class="toggle-icon"><br />X</span>
      </button>
      <div class="site-div">
        <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" />
      </div>
      <h3 class="drawer-link">Register here</h3>
      <div class="drawer-item">
        <ul>
          <li><input type="text"  class="drawer-link" placeholder="Enter your name" /></li>
          <li><input type="number"  class="drawer-link" placeholder="Enter your contact no." /></li>
          <li><input type="email"  class="drawer-link" placeholder="Enter your email" /></li>
          <li><input type="password"  class="drawer-link" placeholder="Enter your password" /></li>
        </ul>
        
      </div>
      <button type="button" id="continue-btn">Register</button>
      <h6>
        By clicking continue, you agree with our
        <a href="#">Privacy Policy</a> <br>
      </h6>
      <h5>Already have an account?</h5>
      <button type="button" id="continue-btn" onclick="goBack()">Login Here</button>`;
}
function goBack() {
  let data = document.getElementById("drawerID");
  data.innerHTML = null;
  data.innerHTML = `<button type="button" onclick="myDrawer(this)" class="toggle-collapse" id="toggle-button">
        <span class="toggle-icon"><br />X</span>
      </button>
      <div class="site-div">
        <img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" />
      </div>
      <h3 class="drawer-link">Quick Login</h3>
      <div class="drawer-item">
        <ul>
          <li><input type="email"  class="drawer-link" placeholder="Enter your email" /></li>
          <li><input type="password"  class="drawer-link" placeholder="Enter your password" /></li>
        </ul>
        
      </div>
      <button type="button" id="continue-btn">Login</button>
      <h6>
        By clicking continue, you agree with our
        <a href="#">Privacy Policy</a> <br>
      </h6>
      <h5>Don't have an account?</h5>
      <button type="button" id="continue-btn" onclick="registerHere()">Register Here</button>`;
}
