function showModal() {
  const btnBurger = document.querySelector(".burger");
  const btnCross = document.querySelector(".cross");

  const menuModal = document.querySelector(".modal");

  btnBurger.addEventListener("click", function (e) {
    menuModal.classList.add("show");
    menuModal.classList.remove("hide");
  });

  btnCross.addEventListener("click", function (e) {
    menuModal.classList.add("hide");
  });

}

// chargement du script après le DOM
document.addEventListener("DOMContentLoaded", function () {
 
  showModal();

});
