/*btnAdd.forEach((item) =>
    item.addEventListener("click", function () {
        console.log("cliked forEach")
})
);*/
//************ Add to cart
let productCountEl = document.getElementById("product-count");
console.log(productCountEl);
let btnAdd = document.querySelectorAll(".btn-add");
console.log(btnAdd);

for (let i = 0; i < btnAdd.length; i++) {
    btnAdd[i].addEventListener("click", function () {
       // let prevProductCount = +productCountEl.textContent;
        //productCountEl.textContent = prevProductCount +1;
        productCountEl.textContent = +productCountEl.textContent +1;
    });
}
// *************Change Like status
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((item) =>
item.addEventListener("click", function() {
    //item.style.backgroundColor = "yellow";//
    //if(item.classList.contains("liked")) {
     //   item.classList.remove("liked");
   // } else {
   //     item.classList.add("liked");
   item.classList.toggle("liked")
    })
);
// more details
let moreDetaisBtn = document.querySelectorAll(".btn-more");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal() {
    modal.classList.remove("hide");
    modal.classList.remove("show");
}
moreDetaisBtn.forEach((item) => item.addEventListener("click", openModal));
btnClose.addEventListener("click", closeModal);

$(".slider-block").slick({
    autoplay: true,
    dots:true,
}); 