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

/* =========================
   Destination Explorer Data
========================= */

const destinations = [
  {
    name: "Kyoto",
    country: "Japan",
    continent: "Asia",
    image: "images/kyoto.jpg",
    description: "Kyoto is a peaceful cultural destination known for ancient temples, traditional tea houses, bamboo forests, and beautiful seasonal scenery.",
    attractions: ["Fushimi Inari Shrine", "Arashiyama Bamboo Grove", "Kinkaku-ji Temple", "Gion District"],
    costs: {
      low: "$45 - $70",
      medium: "$90 - $160",
      luxury: "$250+"
    }
  },
  {
    name: "Bali",
    country: "Indonesia",
    continent: "Asia",
    image: "images/bali.jpg",
    description: "Bali is a tropical island famous for beaches, rice terraces, temples, waterfalls, and relaxing resorts.",
    attractions: ["Ubud Rice Terraces", "Uluwatu Temple", "Kuta Beach", "Mount Batur"],
    costs: {
      low: "$35 - $60",
      medium: "$80 - $140",
      luxury: "$220+"
    }
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    continent: "Asia",
    image: "images/dubai.jpg",
    description: "Dubai is a modern luxury destination with skyscrapers, shopping malls, desert adventures, and futuristic attractions.",
    attractions: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
    costs: {
      low: "$70 - $110",
      medium: "$150 - $250",
      luxury: "$400+"
    }
  },
  {
    name: "Bangkok",
    country: "Thailand",
    continent: "Asia",
    image: "images/bangkok.jpg",
    description: "Bangkok is a lively city filled with street food, temples, markets, river views, and vibrant nightlife.",
    attractions: ["Grand Palace", "Wat Arun", "Chatuchak Market", "Chao Phraya River"],
    costs: {
      low: "$30 - $55",
      medium: "$75 - $130",
      luxury: "$200+"
    }
  },
  {
    name: "Maldives",
    country: "Maldives",
    continent: "Asia",
    image: "images/maldives.jpg",
    description: "The Maldives is a relaxing island destination known for crystal-clear water, coral reefs, beaches, and overwater villas.",
    attractions: ["Male City", "Banana Reef", "Maafushi Island", "Resort Lagoons"],
    costs: {
      low: "$80 - $130",
      medium: "$180 - $300",
      luxury: "$500+"
    }
  },

  {
    name: "Paris",
    country: "France",
    continent: "Europe",
    image: "images/paris.jpg",
    description: "Paris is a romantic cultural city known for art, fashion, architecture, cafés, and world-famous landmarks.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Montmartre"],
    costs: {
      low: "$80 - $120",
      medium: "$160 - $260",
      luxury: "$450+"
    }
  },
  {
    name: "Santorini",
    country: "Greece",
    continent: "Europe",
    image: "images/santorini.jpg",
    description: "Santorini is a beautiful island destination known for white buildings, blue domes, sunsets, and sea views.",
    attractions: ["Oia Village", "Fira", "Red Beach", "Ancient Thera"],
    costs: {
      low: "$70 - $110",
      medium: "$150 - $240",
      luxury: "$400+"
    }
  },
  {
    name: "Rome",
    country: "Italy",
    continent: "Europe",
    image: "images/rome.jpg",
    description: "Rome is a historical city filled with ancient ruins, churches, fountains, museums, and Italian food culture.",
    attractions: ["Colosseum", "Roman Forum", "Trevi Fountain", "Vatican City"],
    costs: {
      low: "$70 - $110",
      medium: "$140 - $230",
      luxury: "$380+"
    }
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    continent: "Europe",
    image: "images/swiss-alps.jpg",
    description: "The Swiss Alps are perfect for nature lovers, offering mountains, lakes, hiking, skiing, and scenic train journeys.",
    attractions: ["Zermatt", "Matterhorn", "Jungfraujoch", "Lake Lucerne"],
    costs: {
      low: "$100 - $150",
      medium: "$200 - $320",
      luxury: "$500+"
    }
  },
  {
    name: "Barcelona",
    country: "Spain",
    continent: "Europe",
    image: "images/barcelona.jpg",
    description: "Barcelona is a colourful city known for beaches, football culture, unique architecture, food, and lively streets.",
    attractions: ["Sagrada Família", "Park Güell", "La Rambla", "Barceloneta Beach"],
    costs: {
      low: "$65 - $100",
      medium: "$130 - $220",
      luxury: "$350+"
    }
  },

  {
    name: "Cape Town",
    country: "South Africa",
    continent: "Africa",
    image: "images/cape-town.jpg",
    description: "Cape Town is a scenic coastal city with mountains, beaches, wildlife, history, and beautiful viewpoints.",
    attractions: ["Table Mountain", "Robben Island", "Cape Point", "Boulders Beach"],
    costs: {
      low: "$45 - $75",
      medium: "$100 - $170",
      luxury: "$280+"
    }
  },
  {
    name: "Marrakech",
    country: "Morocco",
    continent: "Africa",
    image: "images/marrakech.jpg",
    description: "Marrakech is a colourful cultural destination with markets, palaces, gardens, traditional food, and desert-style charm.",
    attractions: ["Jemaa el-Fnaa", "Majorelle Garden", "Bahia Palace", "Medina Souks"],
    costs: {
      low: "$35 - $60",
      medium: "$80 - $140",
      luxury: "$230+"
    }
  },
  {
    name: "Serengeti",
    country: "Tanzania",
    continent: "Africa",
    image: "images/serengeti.jpg",
    description: "The Serengeti is a famous wildlife destination known for safaris, open plains, lions, elephants, and the Great Migration.",
    attractions: ["Serengeti National Park", "Great Migration", "Ngorongoro Crater", "Safari Camps"],
    costs: {
      low: "$120 - $180",
      medium: "$250 - $420",
      luxury: "$700+"
    }
  },
  {
    name: "Cairo",
    country: "Egypt",
    continent: "Africa",
    image: "images/cairo.jpg",
    description: "Cairo is a historic city known for ancient Egyptian monuments, museums, markets, and the River Nile.",
    attractions: ["Pyramids of Giza", "Egyptian Museum", "Khan el-Khalili", "Nile River"],
    costs: {
      low: "$35 - $60",
      medium: "$80 - $140",
      luxury: "$240+"
    }
  },
  {
    name: "Victoria Falls",
    country: "Zambia/Zimbabwe",
    continent: "Africa",
    image: "images/victoria-falls.jpg",
    description: "Victoria Falls is a dramatic nature destination with waterfalls, river activities, viewpoints, and adventure experiences.",
    attractions: ["Victoria Falls Bridge", "Devil’s Pool", "Zambezi River", "Rainforest Walk"],
    costs: {
      low: "$60 - $100",
      medium: "$140 - $230",
      luxury: "$350+"
    }
  },

  {
    name: "New York City",
    country: "United States",
    continent: "North America",
    image: "images/new-york.jpg",
    description: "New York City is a busy urban destination known for skyscrapers, museums, theatre, shopping, and iconic landmarks.",
    attractions: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building"],
    costs: {
      low: "$100 - $150",
      medium: "$220 - $350",
      luxury: "$550+"
    }
  },
  {
    name: "Banff",
    country: "Canada",
    continent: "North America",
    image: "images/banff.jpg",
    description: "Banff is a mountain destination famous for turquoise lakes, hiking trails, wildlife, and snowy landscapes.",
    attractions: ["Lake Louise", "Moraine Lake", "Banff Gondola", "Johnston Canyon"],
    costs: {
      low: "$80 - $130",
      medium: "$170 - $280",
      luxury: "$450+"
    }
  },
  {
    name: "Cancun",
    country: "Mexico",
    continent: "North America",
    image: "images/cancun.jpg",
    description: "Cancun is a beach destination known for resorts, turquoise water, nightlife, Mayan ruins, and island trips.",
    attractions: ["Hotel Zone", "Isla Mujeres", "Chichen Itza", "Playa Delfines"],
    costs: {
      low: "$55 - $90",
      medium: "$130 - $220",
      luxury: "$350+"
    }
  },
  {
    name: "Grand Canyon",
    country: "United States",
    continent: "North America",
    image: "images/grand-canyon.jpg",
    description: "The Grand Canyon is a natural wonder offering hiking, viewpoints, photography, river trips, and desert scenery.",
    attractions: ["South Rim", "Bright Angel Trail", "Mather Point", "Colorado River"],
    costs: {
      low: "$65 - $100",
      medium: "$140 - $220",
      luxury: "$350+"
    }
  },
  {
    name: "Havana",
    country: "Cuba",
    continent: "North America",
    image: "images/havana.jpg",
    description: "Havana is a cultural city known for colourful streets, classic cars, music, historic buildings, and coastal views.",
    attractions: ["Old Havana", "Malecón", "El Capitolio", "Plaza Vieja"],
    costs: {
      low: "$40 - $70",
      medium: "$90 - $150",
      luxury: "$250+"
    }
  },

  {
    name: "Machu Picchu",
    country: "Peru",
    continent: "South America",
    image: "images/machu-picchu.jpg",
    description: "Machu Picchu is an ancient mountain destination famous for Inca history, hiking routes, and breathtaking views.",
    attractions: ["Machu Picchu Ruins", "Inca Trail", "Huayna Picchu", "Sacred Valley"],
    costs: {
      low: "$55 - $90",
      medium: "$130 - $220",
      luxury: "$350+"
    }
  },
  {
    name: "Rio de Janeiro",
    country: "Brazil",
    continent: "South America",
    image: "images/rio.jpg",
    description: "Rio de Janeiro is a vibrant city known for beaches, mountains, music, festivals, and famous viewpoints.",
    attractions: ["Christ the Redeemer", "Copacabana Beach", "Sugarloaf Mountain", "Ipanema Beach"],
    costs: {
      low: "$50 - $80",
      medium: "$110 - $190",
      luxury: "$320+"
    }
  },
  {
    name: "Patagonia",
    country: "Argentina/Chile",
    continent: "South America",
    image: "images/patagonia.jpg",
    description: "Patagonia is a remote adventure destination with glaciers, mountains, lakes, trekking routes, and wild landscapes.",
    attractions: ["Torres del Paine", "Perito Moreno Glacier", "El Chaltén", "Fitz Roy"],
    costs: {
      low: "$70 - $110",
      medium: "$160 - $260",
      luxury: "$420+"
    }
  },
  {
    name: "Cartagena",
    country: "Colombia",
    continent: "South America",
    image: "images/cartagena.jpg",
    description: "Cartagena is a colourful coastal city with colonial streets, Caribbean beaches, historic walls, and lively culture.",
    attractions: ["Walled City", "Castillo San Felipe", "Rosario Islands", "Getsemaní"],
    costs: {
      low: "$40 - $70",
      medium: "$90 - $160",
      luxury: "$260+"
    }
  },
  {
    name: "Galápagos Islands",
    country: "Ecuador",
    continent: "South America",
    image: "images/galapagos.jpg",
    description: "The Galápagos Islands are a unique nature destination known for wildlife, volcanic islands, beaches, and marine life.",
    attractions: ["Santa Cruz Island", "Tortuga Bay", "Isabela Island", "Charles Darwin Research Station"],
    costs: {
      low: "$120 - $180",
      medium: "$250 - $400",
      luxury: "$650+"
    }
  },

  {
    name: "Sydney",
    country: "Australia",
    continent: "Oceania",
    image: "images/sydney.jpg",
    description: "Sydney is a lively coastal city known for its harbour, beaches, food, modern skyline, and outdoor lifestyle.",
    attractions: ["Sydney Opera House", "Bondi Beach", "Harbour Bridge", "Darling Harbour"],
    costs: {
      low: "$85 - $130",
      medium: "$180 - $300",
      luxury: "$500+"
    }
  },
  {
    name: "Queenstown",
    country: "New Zealand",
    continent: "Oceania",
    image: "images/queenstown.jpg",
    description: "Queenstown is an adventure destination famous for mountains, lakes, bungee jumping, skiing, and scenic drives.",
    attractions: ["Lake Wakatipu", "Skyline Queenstown", "Milford Sound", "The Remarkables"],
    costs: {
      low: "$80 - $120",
      medium: "$170 - $280",
      luxury: "$450+"
    }
  },
  {
    name: "Fiji",
    country: "Fiji",
    continent: "Oceania",
    image: "images/fiji.jpg",
    description: "Fiji is a tropical island destination known for beaches, coral reefs, friendly culture, and peaceful resorts.",
    attractions: ["Mamanuca Islands", "Coral Coast", "Cloud 9", "Garden of the Sleeping Giant"],
    costs: {
      low: "$65 - $100",
      medium: "$150 - $250",
      luxury: "$450+"
    }
  },
  {
    name: "Bora Bora",
    country: "French Polynesia",
    continent: "Oceania",
    image: "images/bora-bora.jpg",
    description: "Bora Bora is a luxury island destination with turquoise lagoons, overwater bungalows, coral reefs, and romantic scenery.",
    attractions: ["Matira Beach", "Mount Otemanu", "Lagoon Tours", "Coral Gardens"],
    costs: {
      low: "$150 - $220",
      medium: "$350 - $550",
      luxury: "$900+"
    }
  },
  {
    name: "Great Barrier Reef",
    country: "Australia",
    continent: "Oceania",
    image: "images/great-barrier-reef.jpg",
    description: "The Great Barrier Reef is a world-famous marine destination known for diving, snorkelling, coral reefs, and ocean wildlife.",
    attractions: ["Cairns", "Whitsunday Islands", "Green Island", "Heart Reef"],
    costs: {
      low: "$90 - $140",
      medium: "$200 - $320",
      luxury: "$500+"
    }
  }
];

/* =========================
   DOM Elements
========================= */

const destinationCards = document.getElementById("destinationCards");
const continentFilter = document.getElementById("continentFilter");
const destinationSearch = document.getElementById("destinationSearch");
const noResultsMessage = document.getElementById("noResultsMessage");

const modal = document.getElementById("destinationModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalAttractions = document.getElementById("modalAttractions");
const modalCostTable = document.getElementById("modalCostTable");

/* =========================
   Display Cards
========================= */

function displayDestinations(destinationList) {
  destinationCards.innerHTML = "";

  if (destinationList.length === 0) {
    noResultsMessage.style.display = "block";
    return;
  }

  noResultsMessage.style.display = "none";

  destinationList.forEach(function(destination) {
    const card = document.createElement("article");
    card.className = "destination-card";

    card.innerHTML = `
      <img src="${destination.image}" alt="${destination.name}, ${destination.country}">
      <div class="destination-card-content">
        <h2>${destination.name}</h2>
        <p>${destination.country} / ${destination.continent}</p>
      </div>
    `;

    card.addEventListener("click", function() {
      openModal(destination);
    });

    destinationCards.appendChild(card);
  });
}

/* =========================
   Filter Function
========================= */

function filterDestinations() {
  const selectedContinent = continentFilter.value;
  const searchText = destinationSearch.value.toLowerCase().trim();

  const filteredDestinations = destinations.filter(function(destination) {
    const matchesContinent =
      selectedContinent === "all" || destination.continent === selectedContinent;

    const matchesSearch =
      destination.name.toLowerCase().includes(searchText);

    return matchesContinent && matchesSearch;
  });

  displayDestinations(filteredDestinations);
}

/* =========================
   Modal Function
========================= */

function openModal(destination) {
  modalImage.src = destination.image;
  modalImage.alt = destination.name;

  modalTitle.textContent = destination.name;
  modalDescription.textContent = destination.description;

  modalAttractions.innerHTML = "";
  destination.attractions.forEach(function(attraction) {
    const li = document.createElement("li");
    li.textContent = attraction;
    modalAttractions.appendChild(li);
  });

  modalCostTable.innerHTML = `
    <tr>
      <td>Low</td>
      <td>${destination.costs.low}</td>
      <td>Hostels, public transport, simple meals</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>${destination.costs.medium}</td>
      <td>Comfort hotels, selected tours, restaurants</td>
    </tr>
    <tr>
      <td>Luxury</td>
      <td>${destination.costs.luxury}</td>
      <td>Premium hotels, private tours, fine dining</td>
    </tr>
  `;

  modal.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeDestinationModal() {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
}

if (
  destinationCards &&
  continentFilter &&
  destinationSearch &&
  noResultsMessage &&
  modal &&
  closeModal
) {
  continentFilter.addEventListener("change", filterDestinations);
  destinationSearch.addEventListener("input", filterDestinations);
  closeModal.addEventListener("click", closeDestinationModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeDestinationModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeDestinationModal();
    }
  });

  displayDestinations(destinations);
}

/* ============================= */
/* Trip Budget Planner */
/* ============================= */

const budgetForm = document.getElementById("budgetForm");
const destinationInput = document.getElementById("destination");
const daysInput = document.getElementById("days");
const dailyBudgetInput = document.getElementById("dailyBudget");
const currencyInput = document.getElementById("currency");

const destinationError = document.getElementById("destinationError");
const daysError = document.getElementById("daysError");
const budgetError = document.getElementById("budgetError");

const currencyOutput = document.getElementById("currencyOutput");
const totalCostOutput = document.getElementById("totalCost");
const statusText = document.getElementById("statusText");
const progressFill = document.getElementById("progressFill");
const saveBudgetBtn = document.getElementById("saveBudgetBtn");

const statusLow = document.getElementById("statusLow");
const statusModerate = document.getElementById("statusModerate");
const statusLuxury = document.getElementById("statusLuxury");

const savedBudgetsList = document.getElementById("savedBudgetsList");

let latestBudget = null;

function clearBudgetErrors() {
  destinationError.textContent = "";
  daysError.textContent = "";
  budgetError.textContent = "";
}

function validateBudgetForm(destination, days, dailyBudget) {
  let isValid = true;

  clearBudgetErrors();

  if (destination === "") {
    destinationError.textContent = "Please enter a destination.";
    isValid = false;
  }

  if (days <= 0 || Number.isNaN(days)) {
    daysError.textContent = "Please enter a valid number of days.";
    isValid = false;
  }

  if (dailyBudget <= 0 || Number.isNaN(dailyBudget)) {
    budgetError.textContent = "Please enter a valid daily budget.";
    isValid = false;
  }

  return isValid;
}

function getBudgetStatus(dailyBudget, currency) {
  let lowLimit;
  let moderateLimit;

  if (currency === "LKR") {
    lowLimit = 15000;
    moderateLimit = 45000;
  } else {
    lowLimit = 50;
    moderateLimit = 150;
  }

  if (dailyBudget <= lowLimit) {
    return {
      label: "Low",
      message: "This is a low budget trip. Great for simple stays, public transport, and affordable meals.",
      progress: 33
    };
  }

  if (dailyBudget <= moderateLimit) {
    return {
      label: "Moderate",
      message: "This is a moderate budget trip. You can balance comfort, activities, and good food.",
      progress: 66
    };
  }

  return {
    label: "Luxury",
    message: "This is a luxury budget trip. You can plan premium stays, private transport, and special experiences.",
    progress: 100
  };
}

function updateActiveStatus(status) {
  statusLow.classList.remove("active-status");
  statusModerate.classList.remove("active-status");
  statusLuxury.classList.remove("active-status");

  if (status === "Low") {
    statusLow.classList.add("active-status");
  } else if (status === "Moderate") {
    statusModerate.classList.add("active-status");
  } else {
    statusLuxury.classList.add("active-status");
  }
}

function animateCounter(element, endValue) {
  let startValue = 0;
  const duration = 900;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const currentValue = startValue + (endValue - startValue) * progress;
    element.textContent = currentValue.toFixed(2);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

function displaySavedBudgets() {
  if (!savedBudgetsList) return;

  const savedBudgets = JSON.parse(localStorage.getItem("travelNestBudgets")) || [];

  if (savedBudgets.length === 0) {
    savedBudgetsList.innerHTML = `<p class="empty-message">No saved budgets yet.</p>`;
    return;
  }

  savedBudgetsList.innerHTML = "";

  savedBudgets.forEach(function (budget) {
    const budgetItem = document.createElement("article");
    budgetItem.className = "saved-budget-item";

    budgetItem.innerHTML = `
      <h3>${budget.destination}</h3>
      <p><strong>Days:</strong> ${budget.days}</p>
      <p><strong>Daily Budget:</strong> ${budget.currency} ${budget.dailyBudget.toFixed(2)}</p>
      <p><strong>Total Cost:</strong> ${budget.currency} ${budget.totalCost.toFixed(2)}</p>
      <p><strong>Status:</strong> ${budget.status}</p>
    `;

    savedBudgetsList.appendChild(budgetItem);
  });
}

if (budgetForm) {
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const destination = destinationInput.value.trim();
    const days = Number(daysInput.value);
    const dailyBudget = Number(dailyBudgetInput.value);
    const currency = currencyInput.value;

    const isValid = validateBudgetForm(destination, days, dailyBudget);

    if (!isValid) return;

    const totalCost = days * dailyBudget;
    const budgetStatus = getBudgetStatus(dailyBudget, currency);

    currencyOutput.textContent = currency;
    animateCounter(totalCostOutput, totalCost);

    statusText.textContent = budgetStatus.message;
    progressFill.style.width = budgetStatus.progress + "%";
    updateActiveStatus(budgetStatus.label);

    latestBudget = {
      destination: destination,
      days: days,
      dailyBudget: dailyBudget,
      currency: currency,
      totalCost: totalCost,
      status: budgetStatus.label
    };
  });
}

if (saveBudgetBtn) {
  saveBudgetBtn.addEventListener("click", function () {
    if (!latestBudget) {
      statusText.textContent = "Please calculate a budget before saving.";
      return;
    }

    const savedBudgets = JSON.parse(localStorage.getItem("travelNestBudgets")) || [];

    savedBudgets.push(latestBudget);

    localStorage.setItem("travelNestBudgets", JSON.stringify(savedBudgets));

    displaySavedBudgets();

    statusText.textContent = "Budget saved successfully.";
  });
}

/* ============================= */
/* Reveal on scroll animation */
/* ============================= */

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(function (element) {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ============================= */
/* Mobile navbar */
/* Keep this only if you do not already have navbar JS */
/* ============================= */

const hamburgerBtn = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

if (hamburgerBtn && navLinks) {
  hamburgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-nav");
  });
}

/* Load saved budgets when page opens */
displaySavedBudgets();

/* ============================= */
/* Reusable localStorage helpers */
/* ============================= */

function getStoredItems(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function saveStoredItems(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
}

/* ============================= */
/* Random Trip Generator Tags */
/* Reuses the existing destinations array */
/* ============================= */

const destinationTripTags = {
  Kyoto: { type: "cultural", budget: "high" },
  Bali: { type: "relaxation", budget: "medium" },
  Dubai: { type: "relaxation", budget: "high" },
  Bangkok: { type: "cultural", budget: "low" },
  Maldives: { type: "relaxation", budget: "high" },

  Paris: { type: "cultural", budget: "high" },
  Santorini: { type: "relaxation", budget: "high" },
  Rome: { type: "cultural", budget: "medium" },
  "Swiss Alps": { type: "nature", budget: "high" },
  Barcelona: { type: "cultural", budget: "medium" },

  "Cape Town": { type: "nature", budget: "medium" },
  Marrakech: { type: "cultural", budget: "low" },
  Serengeti: { type: "nature", budget: "high" },
  Cairo: { type: "cultural", budget: "low" },
  "Victoria Falls": { type: "adventure", budget: "medium" },

  "New York City": { type: "cultural", budget: "high" },
  Banff: { type: "nature", budget: "high" },
  Cancun: { type: "relaxation", budget: "medium" },
  "Grand Canyon": { type: "adventure", budget: "medium" },
  Havana: { type: "cultural", budget: "low" },

  "Machu Picchu": { type: "adventure", budget: "medium" },
  "Rio de Janeiro": { type: "relaxation", budget: "medium" },
  Patagonia: { type: "adventure", budget: "high" },
  Cartagena: { type: "cultural", budget: "low" },
  "Galápagos Islands": { type: "nature", budget: "high" },

  Sydney: { type: "cultural", budget: "high" },
  Queenstown: { type: "adventure", budget: "high" },
  Fiji: { type: "relaxation", budget: "medium" },
  "Bora Bora": { type: "relaxation", budget: "high" },
  "Great Barrier Reef": { type: "nature", budget: "high" }
};

function getTaggedDestinations() {
  return destinations.map(function (destination) {
    const tag = destinationTripTags[destination.name];

    return {
      ...destination,
      type: tag ? tag.type : "nature",
      budget: tag ? tag.budget : "medium"
    };
  });
}

function resetRandomTripGenerator() {
  travelTypeSelect.value = "";
  budgetRangeSelect.value = "";

  randomResultBox.classList.add("hidden");

  randomImage.src = "";
  randomImage.alt = "";

  randomName.textContent = "(name)!";
  randomLocation.textContent = "";
  randomDescription.textContent = "";
  randomType.textContent = "";
  randomBudget.textContent = "";

  wishlistMessage.textContent = "";
  currentRandomDestination = null;

  randomResultBox.classList.remove("random-pop");
}

/* ============================= */
/* Random Trip Generator */
/* ============================= */

const randomTripForm = document.getElementById("randomTripForm");
const travelTypeSelect = document.getElementById("travelType");
const budgetRangeSelect = document.getElementById("budgetRange");

const randomResultBox = document.getElementById("randomResultBox");
const randomImage = document.getElementById("randomImage");
const randomName = document.getElementById("randomName");
const randomLocation = document.getElementById("randomLocation");
const randomDescription = document.getElementById("randomDescription");
const randomType = document.getElementById("randomType");
const randomBudget = document.getElementById("randomBudget");

const surpriseAgainBtn = document.getElementById("surpriseAgainBtn");
const saveWishlistBtn = document.getElementById("saveWishlistBtn");
const wishlistMessage = document.getElementById("wishlistMessage");
const wishlistList = document.getElementById("wishlistList");

let currentRandomDestination = null;

function generateRandomDestination() {
  const selectedType = travelTypeSelect.value;
  const selectedBudget = budgetRangeSelect.value;

  if (selectedType === "" || selectedBudget === "") {
    alert("Please choose a travel type and budget range.");
    return;
  }

  const taggedDestinations = getTaggedDestinations();

  const matchingDestinations = taggedDestinations.filter(function (destination) {
    return destination.type === selectedType && destination.budget === selectedBudget;
  });

  if (matchingDestinations.length === 0) {
    randomResultBox.classList.remove("hidden");

    randomImage.src = "";
    randomImage.alt = "";
    randomName.textContent = "No exact match found";
    randomLocation.textContent = "";
    randomDescription.textContent = "Try changing the travel type or budget range.";
    randomType.textContent = "";
    randomBudget.textContent = "";

    currentRandomDestination = null;
    return;
  }

  const randomIndex = Math.floor(Math.random() * matchingDestinations.length);
  currentRandomDestination = matchingDestinations[randomIndex];

  randomResultBox.classList.remove("hidden");

  randomImage.src = currentRandomDestination.image;
  randomImage.alt = currentRandomDestination.name;
  randomName.textContent = currentRandomDestination.name + "!";
  randomLocation.textContent =
    currentRandomDestination.country + " / " + currentRandomDestination.continent;
  randomDescription.textContent = currentRandomDestination.description;
  randomType.textContent = "Type: " + currentRandomDestination.type;
  randomBudget.textContent = "Budget: " + currentRandomDestination.budget;

  randomResultBox.classList.remove("random-pop");

  setTimeout(function () {
    randomResultBox.classList.add("random-pop");
  }, 10);

  wishlistMessage.textContent = "";
}

function displayWishlist() {
  if (!wishlistList) return;

  const wishlist = getStoredItems("travelNestWishlist");
  wishlistList.innerHTML = "";

  if (wishlist.length === 0) {
    wishlistList.innerHTML = "<li>No saved destinations yet.</li>";
    return;
  }

  wishlist.forEach(function (destination) {
    const item = document.createElement("li");
    item.textContent =
      destination.name + " - " + destination.country + " (" + destination.budget + ")";
    wishlistList.appendChild(item);
  });
}

if (randomTripForm) {
  randomTripForm.addEventListener("submit", function (event) {
    event.preventDefault();
    generateRandomDestination();
  });
}

if (surpriseAgainBtn) {
  surpriseAgainBtn.addEventListener("click", function () {
    resetRandomTripGenerator();
    surpriseAgainBtn.classList.remove("reset-shake");

    setTimeout(function () {
      surpriseAgainBtn.classList.add("reset-shake");
    }, 10);
  });
}

if (saveWishlistBtn) {
  saveWishlistBtn.addEventListener("click", function () {
    if (!currentRandomDestination) {
      alert("Please generate a destination first.");
      return;
    }

    const wishlist = getStoredItems("travelNestWishlist");

    const alreadySaved = wishlist.some(function (destination) {
      return destination.name === currentRandomDestination.name;
    });

    if (alreadySaved) {
      wishlistMessage.textContent = "This destination is already saved.";
      return;
    }

    wishlist.push(currentRandomDestination);
    saveStoredItems("travelNestWishlist", wishlist);

    wishlistMessage.textContent = "Destination saved to your wishlist!";
    displayWishlist();
  });
}

displayWishlist();