var elem = document.getElementById("drawerID");
elem.style.right = "-450px";
function myDrawer(e) {
  e.classList.toggle("show");
  var Style = window.getComputedStyle(elem);
  var right = Style.getPropertyValue("right");

  if (right == "0px") {
    elem.style.right = "-450px";
  }
}
function openDrawer() {
  var Style = window.getComputedStyle(elem);
  var right = Style.getPropertyValue("right");
  if (right != "0px") {
    elem.style.right = "0px";
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
          <li><input type="text" id="registerName" class="drawer-link" placeholder="Enter your name" /></li>
          <li><input type="number" id="registerNumber"  class="drawer-link" placeholder="Enter your contact no." /></li>
          <li><input type="email" id="registerEmail"  class="drawer-link" placeholder="Enter your email" /></li>
          <li><input type="password" id="registerPassword"  class="drawer-link" placeholder="Enter your password" /></li>
        </ul>
        
      </div>
      <button type="button" id="continue-btn" onclick="registerUser()">Register</button>
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
          <li><input type="email" id="login-email"  class="drawer-link" placeholder="Enter your email" /></li>
          <li><input type="password" id="login-password"   class="drawer-link" placeholder="Enter your password" /></li>
        </ul>
        
      </div>
      <button type="button" id="continue-btn" onclick="loginUser()">Login</button>
      <h6>
        By clicking continue, you agree with our
        <a href="#">Privacy Policy</a> <br>
      </h6>
      <h5>Don't have an account?</h5>
      <button type="button" id="continue-btn" onclick="registerHere()">Register Here</button>`;
}

function registerUser() {
  let name = document.getElementById("registerName").value;
  let number = document.getElementById("registerNumber").value;
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;

  let userData = {
    name: name,
    number: number,
    email: email,
    password: password,
  };
  let array = JSON.parse(localStorage.getItem("users"));
  if (array == null) {
    array = [];
  } else {
    array.push(userData);
  }
  localStorage.setItem("users", JSON.stringify(array));
}

function loginUser() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;
  let array = JSON.parse(localStorage.getItem("users"));
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let e = array[i].email;
    let p = array[i].password;

    if (e === email && p === password) {
      window.location.href = "homePage.html";
      count++;
      break;
    }
  }
  if (count === 0) {
    alert("Invalid email or password");
  }
}
