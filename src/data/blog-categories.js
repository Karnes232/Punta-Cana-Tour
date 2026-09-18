const categories = {
  Tours: {
    slug: "tours",
    title: "Punta Cana Excursion Guides and Travel Tips",
    description:
      "Compare excursion experiences, prepare for hotel pickup and plan activities around your Punta Cana vacation.",
  },
  Transfer: {
    slug: "transfer",
    title: "Punta Cana Airport and Hotel Transfer Guides",
    description:
      "Plan airport arrivals, hotel pickups and transportation between destinations in Punta Cana and the Dominican Republic.",
  },
  Hotel: {
    slug: "hotel",
    title: "Punta Cana Resort and Hotel Travel Guides",
    description:
      "Explore resort areas, compare places to stay and plan transportation and excursions around your Punta Cana hotel.",
  },
  "Car Rental": {
    slug: "carrental",
    title: "Renting a Car in Punta Cana: Travel Guides",
    description:
      "Prepare for renting a car in Punta Cana with practical guides to getting around and planning independent trips.",
  },
  Flights: {
    slug: "flights",
    title: "Flying to Punta Cana: Travel Planning Guides",
    description:
      "Prepare for a flight to Punta Cana with guides to travel documents, booking flights and planning your arrival.",
  },
  Property: {
    slug: "property",
    title: "Punta Cana Property and Longer-Stay Guides",
    description:
      "Explore information about property and longer stays in Punta Cana, including practical considerations for planning your visit.",
  },
  Attractions: {
    slug: "attractions",
    title: "Punta Cana Attractions and Sightseeing Guides",
    description:
      "Discover attractions around Punta Cana and find practical ideas for sightseeing during your Dominican Republic vacation.",
  },
  Restaurants: {
    slug: "restaurants",
    title: "Punta Cana Restaurant and Dining Guides",
    description:
      "Explore restaurants and dining experiences around Punta Cana and plan meals beyond your resort.",
  },
  "Famous Places": {
    slug: "places",
    title: "Dominican Republic Places and Local Travel Guides",
    description:
      "Explore Dominican destinations, local customs and practical travel information for your Punta Cana vacation.",
  },
  "Local Business": {
    slug: "local-business",
    title: "Punta Cana Local Services and Travel Guides",
    description:
      "Find local information and planning guides for services and experiences during your Punta Cana vacation.",
  },
};
const index = {
  slug: "",
  title: "Punta Cana Travel Guides",
  description:
    "Plan your Punta Cana vacation with guides to excursions, airport transportation, resorts, local attractions and practical travel questions.",
};
function categoryFor(category) {
  return categories[category] || index;
}
function categoryBySlug(slug) {
  return Object.values(categories).find((item) => item.slug === slug) || index;
}
function breadcrumbsFor(post) {
  const { blogPath } = require("../utils/editorial");
  const category = categoryFor(post.category);
  return [
    { name: "Home", path: "/" },
    { name: index.title, path: "/blog/" },
    ...(category.slug
      ? [{ name: category.title, path: blogPath(category.slug) }]
      : []),
    { name: post.title, path: blogPath(post.slug) },
  ];
}
module.exports = {
  categories,
  index,
  categoryFor,
  categoryBySlug,
  breadcrumbsFor,
};
