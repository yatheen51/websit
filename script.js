// Show Buyer login form
function showBuyerLogin() {
    document.getElementById("buyer-login").style.display = "block";
    document.getElementById("seller-login").style.display = "none";
}

// Show Seller login form
function showSellerLogin() {
    document.getElementById("buyer-login").style.display = "none";
    document.getElementById("seller-login").style.display = "block";
}