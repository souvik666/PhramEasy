let rightDiv = document.getElementById("checkout-details");
// Details of the right side block... as address, amount, delivery charge, offers, etc.
function addElementRightDiv() {
  let add_div = document.createElement("div");
  add_div.className = "address-div";
  let topAddDiv = document.createElement("div");
  let botAddDiv = document.createElement("div");
  botAddDiv.className = "address-bot";
  let address = document.createElement("h4");
  address.innerHTML = "Deliver to Home (302015)";
  let address_text = document.createElement("p");
  address_text.innerHTML = "123 Main Street, Anytown, CA 90210";
  let add_change = document.createElement("a");
  add_change.innerHTML = "Change";
  let newDiv = document.createElement("div");
  newDiv.className = "address-change";
  newDiv.append(address, add_change);
  topAddDiv.append(newDiv, address_text);
  let text = document.createElement("p");
  text.innerHTML = "PRIORITY DELIVERY";
  let time = document.createElement("h4");
  time.innerHTML = "By Today, before 9 PM";

  botAddDiv.append(text, time);
  add_div.append(topAddDiv, botAddDiv);
  rightDiv.append(add_div);
}
addElementRightDiv();

// Buttons at the right side block
function addButtons() {
  let btn_div = document.createElement("div");
  let coupon_btn = document.createElement("button");
  coupon_btn.className = "apply-btn";
  coupon_btn.innerHTML = "Apply Coupon";
  let buy_btn = document.createElement("button");
  buy_btn.className = "buy-btn";
  buy_btn.innerHTML = "Buy Now";
  btn_div.append(coupon_btn, buy_btn);
  rightDiv.append(btn_div);
}
addButtons();

//order value, total amount to be paid, cart value
function orderSummary() {
  let summary = document.createElement("div");
  summary.className = "summary";
  let head = document.createElement("h4");
  head.className = "order-head";
  head.innerHTML = "Order Summary";
  let cart = document.createElement("div");
  let cartText = document.createElement("p");
  cartText.innerHTML = "Cart Value";
  cartText.className = "order-text";
  let cartValue = document.createElement("p");
  cartValue.innerHTML = "Rs 201.15";
  cartValue.className = "order-value";
  cart.append(cartText, cartValue);
  let delivery = document.createElement("div");
  let deliveryText = document.createElement("p");
  deliveryText.innerHTML = "Delivery Charge";
  deliveryText.className = "order-text";
  let deliveryCharge = document.createElement("p");
  deliveryCharge.innerHTML = "Rs 29";
  deliveryCharge.className = "order-value";
  delivery.append(deliveryText, deliveryCharge);
  let total = document.createElement("div");
  let totalText = document.createElement("h5");
  totalText.innerHTML = "Amount to be paid";
  totalText.className = "order-text";
  let amountPaid = document.createElement("h5");
  amountPaid.innerHTML = "230.15";
  amountPaid.className = "order-value";
  total.append(totalText, amountPaid);
  summary.append(head, cart, delivery, total);
  rightDiv.append(summary);
}
orderSummary();
// cart items, importing from localStorage
function cartItems() {
  let data = JSON.parse(localStorage.getItem("Productcart"));
  data.forEach(function (item) {
    let div = document.getElementById("cart");
    let cart = document.createElement("div");
    cart.className = "cart-items";
    let cart_items = document.createElement("ul");
    cart_items.className = "cart-items-list";
    let cart_item = document.createElement("li");
    cart_item.className = "cart-item";
    let cart_box = document.createElement("div");
    cart_item.appendChild(cart_box);
    let cart_img = document.createElement("img");
    cart_img.src = item.img;
    cart_img.className = "cart-img";
    let cart_name = document.createElement("h4");
    cart_name.innerHTML = item.name;
    let cart_price = document.createElement("p");
    cart_price.innerHTML = "Rs " + item.price;
    let cart_qty = document.createElement("p");
    cart_qty.innerHTML = "x " + item.qty;
    cart_box.append(cart_img, cart_name, cart_price, cart_qty);
    cart.append(cart_item);
    div.append(cart);
  });
}
cartItems();
