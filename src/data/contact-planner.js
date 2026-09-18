const services = [
  ["tours", "Tours & excursions", "Island trips, boats and adventures"],
  ["airport", "Airport transfers", "Airport to hotel, and back"],
  ["stays", "Hotels & hostels", "Find the right place to stay"],
  ["cars", "Car rental", "Explore at your own pace"],
  ["ground", "Intercity transfers", "Travel between destinations"],
  ["air", "Helicopter & air travel", "Plan a route or charter"],
  ["planning", "Help planning my trip", "Put the pieces together"],
  ["booking", "An existing booking", "Questions about a reservation"],
];
// Keep every field in server-rendered HTML so Netlify can register its name.
const groups = [
  {
    services: ["tours"],
    title: "Your excursion",
    fields: [
      [
        "tour-interest",
        "Excursion or experience",
        "text",
        "For example: Saona Island, snorkeling or a private boat",
      ],
      [
        "tour-pickup",
        "Hotel or pickup area",
        "text",
        "Hotel name or area, if known",
      ],
      [
        "tour-style",
        "Experience preference",
        ["Open to suggestions", "Shared excursion", "Private experience"],
      ],
    ],
  },
  {
    services: ["airport", "ground"],
    title: "Your journey",
    fields: [
      [
        "transfer-from",
        "Pickup location",
        "text",
        "Airport, hotel or full address",
      ],
      [
        "transfer-to",
        "Destination",
        "text",
        "Hotel name, city or full address",
      ],
      [
        "transfer-type",
        "Journey type",
        ["One way", "Return trip", "Multiple stops"],
      ],
      [
        "flight-number",
        "Flight number, if applicable",
        "text",
        "For airport pickups",
      ],
      ["transfer-time", "Preferred pickup or flight arrival time", "time"],
      [
        "transfer-luggage",
        "Luggage & vehicle needs",
        "text",
        "Suitcases, child seats or other practical requirements",
      ],
    ],
  },
  {
    services: ["stays"],
    title: "Your accommodation",
    fields: [
      [
        "stay-type",
        "Accommodation preference",
        [
          "Open to suggestions",
          "Hotel",
          "Hostel: private room",
          "Hostel: shared room",
          "Other accommodation",
        ],
      ],
      [
        "stay-area",
        "Preferred area",
        "text",
        "An area or nearby place you want to visit",
      ],
      ["stay-rooms", "Rooms needed", "number"],
      [
        "stay-budget",
        "Approximate accommodation budget (USD)",
        "text",
        "Include whether this is per night or for the whole stay",
      ],
    ],
  },
  {
    services: ["cars"],
    title: "Your rental",
    fields: [
      [
        "car-type",
        "Vehicle preference",
        ["Open to suggestions", "Compact car", "SUV", "Larger vehicle"],
      ],
      ["car-pickup", "Pickup location", "text", "Airport, hotel or area"],
      ["car-return", "Return location", "text", "If different from pickup"],
      ["car-time", "Preferred pickup time", "time"],
    ],
  },
  {
    services: ["air"],
    title: "Your air itinerary",
    fields: [
      [
        "air-type",
        "Service preference",
        [
          "Helicopter transfer",
          "Charter flight",
          "Sightseeing enquiry",
          "Open to suggestions",
        ],
      ],
      ["air-from", "Departure location", "text", "Airport, hotel or area"],
      ["air-to", "Arrival location", "text", "Airport, hotel or area"],
      [
        "air-luggage",
        "Luggage requirements",
        "text",
        "Approximate number and size of bags",
      ],
    ],
  },
  {
    services: ["booking"],
    title: "Your reservation",
    fields: [
      [
        "booking-reference",
        "Booking reference, if available",
        "text",
        "Your confirmation reference",
      ],
      [
        "booking-service",
        "Booked service",
        "text",
        "Tour, transfer, accommodation or other service",
      ],
    ],
  },
];
module.exports = { services, groups };
