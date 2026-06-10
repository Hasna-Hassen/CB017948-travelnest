// Hero auto-rotating travel highlights

const heroSlides = [
  {
    quote: "“Adventure awaits in every corner of the world.”",
    place: "Bali, Indonesia",
    image: "images/bali.jpg",
    alt: "Beach destination in Bali"
  },
  {
    quote: "“Walk through history, culture, and unforgettable streets.”",
    place: "Kyoto, Japan",
    image: "images/kyoto.jpg",
    alt: "Traditional street in Kyoto"
  },
  {
    quote: "“Breathe fresh mountain air and chase beautiful views.”",
    place: "Swiss Alps, Switzerland",
    image: "images/swiss-alps.jpg",
    alt: "Mountain view in the Swiss Alps"
  },
  {
    quote: "“Find art, food, lights, and memories in one city.”",
    place: "Paris, France",
    image: "images/paris.jpg",
    alt: "View of Paris with the Eiffel Tower"
  }
];

let currentHeroSlide = 0;

function showHeroSlide(slideIndex, animate) {
  const hero = document.getElementById("hero");
  const highlight = document.getElementById("heroHighlight");
  const place = document.getElementById("heroPlace");
  const image = document.getElementById("heroImage");

  if (!hero || !highlight || !place || !image) {
    return;
  }

  const slide = heroSlides[slideIndex];

  if (!animate) {
    highlight.textContent = slide.quote;
    place.textContent = slide.place;
    image.src = slide.image;
    image.alt = slide.alt;

    hero.style.setProperty("--hero-bg", `url('${slide.image}')`);
    hero.style.setProperty("--next-hero-bg", `url('${slide.image}')`);
    return;
  }

  hero.style.setProperty("--next-hero-bg", `url('${slide.image}')`);

  hero.classList.add("hero-bg-changing");
  image.classList.add("hero-img-changing");

  setTimeout(function () {
    highlight.textContent = slide.quote;
    place.textContent = slide.place;
    image.src = slide.image;
    image.alt = slide.alt;

    hero.style.setProperty("--hero-bg", `url('${slide.image}')`);

    image.classList.remove("hero-img-changing");
  }, 450);

  setTimeout(function () {
    hero.classList.remove("hero-bg-changing");
  }, 850);
}

showHeroSlide(currentHeroSlide, false);

setInterval(function () {
  currentHeroSlide++;

  if (currentHeroSlide >= heroSlides.length) {
    currentHeroSlide = 0;
  }

  showHeroSlide(currentHeroSlide, true);
}, 4000);

// Destination of the Day - date-based logic

const destinationsOfTheDay = [
  {
    name: "Bali, Indonesia",
    image: "images/bali.jpg",
    alt: "Beach view in Bali, Indonesia",
    description:
      "Bali is a relaxing island destination known for its beaches, temples, rice terraces, and peaceful tropical atmosphere. It is a great choice for travellers who want a mix of nature, culture, and relaxation."
  },
  {
    name: "Kyoto, Japan",
    image: "images/kyoto.jpg",
    alt: "Traditional street in Kyoto, Japan",
    description:
      "Kyoto is a cultural destination filled with historic temples, traditional streets, gardens, and tea houses. It is perfect for travellers who enjoy history, calm scenery, and meaningful cultural experiences."
  },
  {
    name: "Swiss Alps, Switzerland",
    image: "images/swiss-alps.jpg",
    alt: "Mountain view in the Swiss Alps",
    description:
      "The Swiss Alps are ideal for travellers who love mountain views, fresh air, scenic train rides, and outdoor adventures. It is a beautiful destination for hiking, photography, and peaceful nature escapes."
  },
  {
    name: "Paris, France",
    image: "images/paris.jpg",
    alt: "View of Paris with the Eiffel Tower",
    description:
      "Paris is a popular city destination known for art, food, fashion, museums, and romantic streets. It is a great place for travellers who enjoy city walks, architecture, and cultural landmarks."
  }
];

function getDayOfYear() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const difference = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(difference / oneDay);
}

function showDestinationOfTheDay() {
  const nameElement = document.getElementById("dotd-name");
  const descriptionElement = document.getElementById("dotd-description");
  const imageElement = document.getElementById("dotd-img");

  if (!nameElement || !descriptionElement || !imageElement) {
    return;
  }

  const dayNumber = getDayOfYear();
  const destinationIndex = dayNumber % destinationsOfTheDay.length;
  const todayDestination = destinationsOfTheDay[destinationIndex];

  nameElement.textContent = todayDestination.name;
  descriptionElement.textContent = todayDestination.description;
  imageElement.src = todayDestination.image;
  imageElement.alt = todayDestination.alt;
}

showDestinationOfTheDay();