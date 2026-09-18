const services = {
  tours: {
    path: '/tours/', title: 'Punta Cana Tours & Excursions',
    description: 'Explore Punta Cana tours and excursions. Compare activities, inclusions, pickup details and itineraries before choosing a trip for your travel dates.',
    intro: 'Choose an excursion around the experience you want and the time you have. Compare boat trips, outdoor adventures and cultural visits, then read the individual itinerary before booking.',
    question: 'How should I compare Punta Cana excursions?',
    answer: 'Check the total time away from your accommodation, hotel pickup coverage, group size, activity restrictions and what the price includes. A short activity can still require a longer day when transport and other pickups are included. Confirm weather and cancellation terms for your chosen departure.',
    guide: '/blog/punta-cana-seaweed-season/', guideLabel: 'Plan around beach and sargassum conditions',
  },
  hotels: {
    path: '/hotels/', title: 'Punta Cana Hotels & Hostels',
    description: 'Explore hotels and hostels in Punta Cana. Compare location, room types and amenities, and plan airport transfers and excursions around your accommodation.',
    intro: 'Find accommodation that fits the way you travel. Compare hotels and hostels by neighborhood, room type and amenities, then check how you will reach the beach, restaurants and your tour pickup point.',
    question: 'What should I check before booking a hostel or hotel?',
    answer: 'Confirm whether the room is private or shared, the bathroom arrangement, air conditioning, check-in hours and the final price. Ask about luggage storage for an early arrival or late flight. Check the actual address and beach access; a Punta Cana address alone does not tell you how close a property is to the places you want to visit.',
    guide: '/transfers/punta-cana/', guideLabel: 'Arrange transport to your accommodation',
  },
  cars: {
    path: '/carrental/', title: 'Punta Cana Car Rental',
    description: 'Request a Punta Cana car rental for your travel dates. Compare vehicle options and confirm insurance, deposits, pickup, luggage space and rental conditions.',
    intro: 'A rental car can suit a trip with several independent stops. Choose a vehicle for your passenger and luggage needs, and request the full rental conditions before committing.',
    question: 'Should I rent a car or book transfers?',
    answer: 'Compare the full rental cost, including insurance, deposit, fuel and parking, with the transfers you would actually need. Transfers may be simpler for an airport journey and a few planned outings. A rental may offer more flexibility for frequent independent trips. Confirm driver eligibility, accepted documents and payment requirements with the rental provider.',
    guide: '/transfers/punta-cana/', guideLabel: 'Compare airport transfer options',
  },
  airport: {
    path: '/transfers/punta-cana/', title: 'Punta Cana Airport Transfers to Hotels',
    description: 'Plan a Punta Cana airport transfer to your hotel or accommodation. Request transport for your flight, destination, passengers and luggage requirements.',
    intro: 'Arrange your journey between Punta Cana International Airport (PUJ) and your accommodation. Provide the exact property address and flight details so the pickup and vehicle can be confirmed.',
    question: 'What information is needed for an airport transfer?',
    answer: 'Provide your flight number, arrival date, accommodation name and address, passenger count and luggage requirements. Mention child seats or accessibility needs before booking. Confirm the meeting point, waiting policy, delay procedure, whether the service is private or shared, and whether the quote covers one way or a return journey.',
    guide: '/blog/dominicanrepubliceticket/', guideLabel: 'Read the Dominican Republic E-Ticket guide',
  },
  country: {
    path: '/transfers/dominican-republic/', title: 'Dominican Republic Transfers',
    description: 'Request transfers between Dominican Republic destinations. Plan your route, pickup address, travel date, passengers and luggage before confirming transport.',
    intro: 'Plan ground transport between destinations in the Dominican Republic. Share both addresses and your schedule to request a route-specific quote rather than assuming every destination has the same journey time or fare.',
    question: 'What should I confirm for an intercity transfer?',
    answer: 'Confirm the route, vehicle capacity, luggage allowance, planned stops and the total price. Allow time for traffic and any onward flight or check-in deadline. Ask whether tolls, waiting time and extra stops are included, and agree on the pickup details before traveling.',
    guide: '/transfers/punta-cana/', guideLabel: 'Looking for a Punta Cana airport pickup?',
  },
  flights: {
    path: '/transfers/flights/', title: 'Punta Cana Helicopter Transfers & Charter Flights',
    description: 'Request helicopter transfers or charter flights in Punta Cana and the Dominican Republic. Confirm route availability, landing access, luggage and weather terms.',
    intro: 'Request an air transfer for your itinerary. A helicopter transfer connects departure and arrival points; a sightseeing flight is a different experience. Describe the journey you need so the aircraft, route and landing arrangements can be checked.',
    question: 'Can a helicopter take me directly to my hotel?',
    answer: 'Do not assume that every hotel has an approved landing location. Ask for confirmation of both landing points, any ground transfers, passenger and baggage limits, and the full quote. Flight availability depends on operational approval and conditions. Confirm weather-related changes, cancellation terms and a ground transport alternative before booking.',
    guide: '/transfers/dominican-republic/', guideLabel: 'Explore ground transport alternatives',
  },
};

const home = {
  title: 'Punta Cana Tours & Excursions',
  description: 'Explore Punta Cana tours, Saona Island trips and boat excursions. Compare itineraries, arrange airport transfers and plan your stay with practical travel guides.',
};

const homeFaqs = {
  question1: 'How do I choose a suitable Punta Cana excursion?',
  answer1: { answer1: 'Read the itinerary, transport arrangements and activity restrictions. Ask about age limits, swimming requirements, accessibility and the equipment provided when they matter to your group. Choose an experience that matches your needs and follow the operator\'s instructions.' },
  question2: 'Should I book excursions before arriving?',
  answer2: { answer2: 'Booking ahead can help you organize preferred dates and pickup arrangements, especially when your schedule is limited. Compare the full price and cancellation terms first. Booking online does not automatically mean the lowest price, and availability needs to be confirmed for your selected date.' },
  question3: 'How do I arrange activities and transport?',
  answer3: { answer3: 'Open the tour or transport page, review the details and follow its booking or enquiry steps. Provide your dates, accommodation and passenger information. Keep the confirmation and check the meeting point or pickup instructions before the service.' },
};

module.exports = { services, home, homeFaqs };
