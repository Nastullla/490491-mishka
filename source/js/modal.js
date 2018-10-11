var popup = document.querySelector(".modal");
var orderBtn = document.querySelector(".promo__button");
var cartBtn = document.querySelector(".product__cart");

if (orderBtn) {
  orderBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal--close");
  });
}

if (cartBtn) {
  cartBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal--close");
  });
}
