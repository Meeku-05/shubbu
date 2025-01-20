const menuToggle = document.getElementById("menuToggle");
const pagesLinks = document.querySelector(".pages_links");
const socialIcons = document.querySelector(".social_icon");
menuToggle.addEventListener("click", () => {
	pagesLinks.classList.toggle("active");
	socialIcons.classList.toggle("active");
});
let serviceCards = document.querySelectorAll(".service_card");
let serviceHeadings = document.querySelectorAll(".service-type");

serviceCards.forEach((card, index) => {
	card.addEventListener("mouseover", function () {
		serviceHeadings[index].style.color = "white"; // Change color on hover
		console.log("hover");
	});
	card.addEventListener("mouseout", function () {
		serviceHeadings[index].style.color = ""; // Reset color when not hovering
	});
});

let formSubmit = document.querySelector(".btn-submit");
formSubmit.addEventListener("click", () => {
	alert("Your form has been submitted.");
});
