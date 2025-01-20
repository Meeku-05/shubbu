const menuToggle = document.getElementById("menuToggle");
const pagesLinks = document.querySelector(".pages_links");
const socialIcons = document.querySelector(".social_icon");
menuToggle.addEventListener("click", () => {
	pagesLinks.classList.toggle("active");
	socialIcons.classList.toggle("active");
});

// Select the button and hidden blog items
const seeMoreBtn = document.querySelector(".see-more-btn");
const hiddenItems = document.querySelectorAll(".blog-item.hidden");

// Add event listener to the button
seeMoreBtn.addEventListener("click", () => {
	// Check if the hidden items are currently displayed
	const isExpanded = seeMoreBtn.textContent === "See Less";

	if (isExpanded) {
		// Hide the hidden items and change the button text
		hiddenItems.forEach((item) => {
			item.style.display = "none";
		});
		seeMoreBtn.textContent = "See More";
	} else {
		// Show the hidden items and change the button text
		hiddenItems.forEach((item) => {
			item.style.display = "block";
		});
		seeMoreBtn.textContent = "See Less";
	}
});

// Initial setup: Ensure hidden items are hidden by default
hiddenItems.forEach((item) => {
	item.style.display = "none";
});
