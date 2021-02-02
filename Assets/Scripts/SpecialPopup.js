const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const modalButton1 = document.querySelector(".SeeMoreBtn1");
const modalButton2 = document.querySelector(".SeeMoreBtn2");
const modalButton3 = document.querySelector(".SeeMoreBtn3");
const closeButton = document.querySelector(".CloseBtn");
const scrollDown = document.querySelector(".scroll-down");
let isOpened = false;

const openModal1 = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
    document.getElementById("PopupTitle").innerHTML = "Flat White";
    document.getElementById("PopupInfo").innerHTML = "An espresso classic built from two ristretto shots for a slightly sweeter finish with velvety steamed whole milk";
    document.getElementById("PopupImg").src="/Daily_Brunch/Assets/Images/Coffee3.jpg";
};

const openModal2 = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
    document.getElementById("PopupTitle").innerHTML = "Sunday Fruit Salad";
    document.getElementById("PopupInfo").innerHTML = "The freshest fruits are used in this salad, for this recipe all the fruits come from a small village in the Carribean, which ranges from dragon fruit to goyaba";
    document.getElementById("PopupImg").src="/Daily_Brunch/Assets/Images/Meal3.jpg";
};

const openModal3 = () => {
    modal.classList.add("is-open");
    body.style.overflow = "hidden";
    document.getElementById("PopupTitle").innerHTML = "Strawberry Bellini";
    document.getElementById("PopupInfo").innerHTML = "This strawberry belini is like no other, it is made from locally sourced Wexford strawberries and topped with fresh bottle of Don Perignon";
    document.getElementById("PopupImg").src="/Daily_Brunch/Assets/Images/Cocktail1.jpg";

};
const closeModal = () => {
    modal.classList.remove("is-open");
    body.style.overflow = "initial";
};

modalButton1.addEventListener("click", openModal1);
modalButton2.addEventListener("click", openModal2);
modalButton3.addEventListener("click", openModal3);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
    evt = evt || window.event;
    evt.keyCode === 27 ? closeModal() : false;
};
