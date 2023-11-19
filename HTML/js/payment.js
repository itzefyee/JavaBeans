window.onload = init;
 
function init() {
 
   document.getElementById('fname').focus();
 
   document.getElementById("delivery").onclick = turnOnDelivery;
   document.getElementById("pickup").onclick = turnOnPickup;
   document.getElementById("creditcard").onclick = turnOnCreditCard;
   document.getElementById("cash").onclick = turnOnCash;
 
   document.forms[0].onsubmit = placeOrder;
}
 
 
 
function turnOnDelivery() {
   document.getElementById("addr").disabled = false;
   document.getElementById("city").disabled = false;
   document.getElementById("state").disabled = false;
   document.getElementById("zip").disabled = false;
}
 
function turnOnPickup() {
   document.getElementById("addr").disabled = true;
   document.getElementById("city").disabled = true;
   document.getElementById("state").disabled = true;
   document.getElementById("zip").disabled = true;
}
 
function turnOnCreditCard() {
   document.getElementById("cname").disabled = false;
   document.getElementById("ccnum").disabled = false;
   document.getElementById("cvv").disabled = false;
   document.getElementById("expmonth").disabled = false;
   document.getElementById("expyear").disabled = false;
}
 
function turnOnCash() {
   document.getElementById("cname").disabled = true;
   document.getElementById("ccnum").disabled = true;
   document.getElementById("cvv").disabled = true;
   document.getElementById("expmonth").disabled = true;
   document.getElementById("expyear").disabled = true;
}
 
function placeOrder() {
   if (this.checkValidity()) {
 
      if (confirm("Confirm Order?") == 1) {
         window.location.href = "order.html";
      } else {
         return false;
      }
   }
}
 
 

