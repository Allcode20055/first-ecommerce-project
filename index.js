document.querySelector(".nav__about").addEventListener("click", (e) => {
  document.querySelector(".list__Update").classList.toggle("toggleClass");
  e.preventDefault();
});
document.querySelector(".manu__icon").addEventListener("click", () => {
  document.querySelector(".manu_hidden").classList.toggle("manuVisibel");
});

try {
  document.querySelector(".three__funcion").addEventListener("click", () => {
    document
      .querySelector(".catagory__section ")
      .classList.toggle("catagorySectionTransform");
    document.querySelector(".close__funcion").classList.toggle("closeVisibel");
    document.querySelector(".three__funcion").classList.toggle("threeHidden");
  });
  document.querySelector(".close__funcion").addEventListener("click", () => {
    document
      .querySelector(".catagory__section ")
      .classList.toggle("catagorySectionTransform");
    document.querySelector(".close__funcion").classList.toggle("closeVisibel");
    document.querySelector(".three__funcion").classList.toggle("threeHidden");
  });
} catch (error) {
  console.log("try catch the " + error);
}

transfarimg = (imges, title, price, rating) => {
  console.log(title);
  localStorage.setItem("imgValue", imges);
  localStorage.setItem("title", title);
  localStorage.setItem("price", price);
  localStorage.setItem("rating", rating);
};
try {
  document.querySelector(".product__img").src =
    localStorage.getItem("imgValue");
  document.querySelector(".product-title").innerHTML =
    localStorage.getItem("title");
  document.querySelector(".price").innerHTML = localStorage.getItem("price");
  document.querySelector(".rating").innerHTML = localStorage.getItem("rating");
} catch (error) {
  console.log("i am hendel innerHTML error" + error);
}

const swiper = new Swiper(".swiper", {
  autoplay: {
    autoplay: {
      delay: 2000,
    },
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
