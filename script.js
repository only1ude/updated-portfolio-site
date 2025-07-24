 



const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("dots");
const title = document.getElementById("movie-title");
const year = document.getElementById("movie-year");

const cards = carousel.querySelectorAll(".movie-card");

// Create dots
cards.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

// Sync dots and movie info on scroll
carousel.addEventListener("scroll", () => {
  const scrollLeft = carousel.scrollLeft;
  const cardWidth = cards[0].offsetWidth + 20;
  const index = Math.round(scrollLeft / cardWidth);

  if (cards[index]) {
    title.textContent = cards[index].dataset.title;
    year.textContent = cards[index].dataset.year;

    dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }
});

// Button actions
function showInfo() {
  alert("Showing info about: " + title.textContent);
}

function showPreview() {
  alert("Preview for: " + title.textContent);
}

function downloadMovie() {
  alert("Starting download for: " + title.textContent);
}

