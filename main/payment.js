function paymentDone() {

     window.location.href = "paymentdone.html";

}

// let data = JSON.parse(localStorage.getItem("userchekout"));
//  //  

 

// ad.innerHTML = data;
    
// function appendadress(el) {
//     let data_div = document.getElementById("DeliveryAdress");
//     var div = document.createElement("div");
//     let p_name = document.getElementById("p");
//     p_name.innerHTML = el.p_name;


//     data_div.append(div)

// }

function cartsum() {
let data = JSON.parse(localStorage.getItem("userchekout"));

   let add =  document.getElementById("DeliveryAdress")
   add.innerHTML = `Delivery To: ${data.name}
  <br>
  <br>
  state: ${data.state}
  <br>
  <br>
  street:${data.street}
  <br>
  <br>
  Pin:${data.pin}
   `

let odersumery = document.getElementById("ordersumery")
let cartData = JSON.parse(localStorage.getItem("cart"))
let arr = []
for(let i =0; i<cartData.length; i++){
    arr.push(cartData[i].name)
}
let uniq = [...new Set(arr)]
odersumery.innerHTML=`Order Summary: ${(uniq.join(" ").split(" ").splice(0, 4).join(" "))}`
let sum = 0
for(var k =0; k<cartData.length; k++){
    sum+=(Number(cartData[k].price))
}
document.getElementById("cartvalue").innerHTML = `Cart Value : ${sum}`
}
cartsum();

document.getElementById("3pm").addEventListener("click", function(){
    document.getElementById("DeliveryChr").innerHTML=`Delivery Charges :300`
    document.getElementById("TAmount").innerHTML = `Amount to be paid ${xnum+300}`

})

document.getElementById("10PM").addEventListener("click", function(){
    document.getElementById("DeliveryChr").innerHTML=`Delivery Charges :100`
    document.getElementById("TAmount").innerHTML = `Amount to be paid ${xnum+100}`

})

document.getElementById("totalsaving").innerHTML=`Total saving : 99`

let x = document.getElementById("cartvalue").innerHTML
xnum = Number(x.split(" ")[3])
document.getElementById("TAmount").innerHTML = `Amount to be paid ${xnum}`


 var checker = document.getElementById("checkme");
 var sendbtn = document.getElementById("sendNewSms");

 checker.onchange = function () {
   if (this.checked) {
     sendbtn.disabled = false;
   } else {
     sendbtn.disabled = true;
   }
 };