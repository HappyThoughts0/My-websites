const btn = document.querySelector(".btn");
const colorBlock = document.querySelector(".colorBlock");

cnt = 0;

colorBlock.innerHTML = "Blue";

btn.addEventListener("click", () => {
  cnt++;
  colorBlock.innerHTML = "Red";
  //   colorBlock.textContent = "Red";
  //   colorBlock.classList.remove("blue");
  colorBlock.classList.add("red");

  if (cnt > 1) {
    cnt = 0;
    colorBlock.innerHTML = "Blue";
    colorBlock.classList.remove("red");
    colorBlock.classList.add("blue");
  }
});
