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