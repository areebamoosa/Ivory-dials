// Code for Main Header Image Slider

const images = ["Img/banner2.webp", "Img/bann.jpeg", "Img/ban111.jpeg"];
let index = 0;
const slideImage = document.getElementById("slideImage");

setInterval(() => {
  index = (index + 1) % images.length;

  slideImage.classList.add("opacity-0");

  setTimeout(() => {
    slideImage.src = images[index];
    slideImage.classList.remove("opacity-0");
  }, 500);
}, 2000);

// Code for Selection of each design of watch

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

// Data Content of each section

const tabs = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');

        contents.forEach(content => {
            if (content.getAttribute('data-content') === target) {
                content.classList.remove('hidden');
            } else {
                content.classList.add('hidden');
            }
        });
    });
});

