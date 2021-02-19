let img = document.querySelector("img");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener(click, () => {
    img.src="images/h1.png";
})
btn2.addEventListener(click, () => {
    img.src="images/h2.png";
})
btn3.addEventListener(click, () => {
    img.src="images/h3.png";
})