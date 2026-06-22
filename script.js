window.onload = () => {
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);
};

function scratchCoupon(button){

const card = button.parentElement;

const result =
card.querySelector(".final-price");

result.innerHTML =
"🎉 Coupon Applied! Final Price: ₹650";

button.disabled = true;

alert("Congratulations! ₹50 OFF unlocked.");
}