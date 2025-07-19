// JavaScript Code for Selection of each design of watch

const watchBoxes = document.querySelectorAll(".watch-box");

watchBoxes.forEach((box) => {
  const productImg = box.querySelector(".product-img");
  const smallImgs = box.querySelectorAll(".small-img");

  smallImgs.forEach((img) => {
    img.addEventListener("click", () => {
      productImg.src = img.src;
    });
  });
});
