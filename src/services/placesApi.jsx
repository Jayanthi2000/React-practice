const MOCK_PLACES = {
    Paris: [
      { name: "Eiffel Tower",  type: "Landmark", icon: "🗼", rating: 4.8, cost: 25, duration: "2h", tags: ["iconic","views","history"] },
      { name: "Louvre Museum", type: "Museum",   icon: "🏛️", rating: 4.7, cost: 22, duration: "4h", tags: ["art","culture"] },
      { name: "Montmartre",    type: "District", icon: "🎨", rating: 4.6, cost: 0,  duration: "3h", tags: ["art","free","walking"] },
      { name: "Seine River",   type: "Nature",   icon: "🚣", rating: 4.5, cost: 15, duration: "2h", tags: ["romantic","views"] },
    ],
    Tokyo: [
      { name: "Senso-ji Temple",  type: "Temple",   icon: "⛩️", rating: 4.8, cost: 0,  duration: "2h", tags: ["spiritual","free"] },
      { name: "Shibuya Crossing", type: "Landmark", icon: "🚦", rating: 4.7, cost: 0,  duration: "1h", tags: ["iconic","free"] },
      { name: "TeamLab Planets",  type: "Museum",   icon: "🌟", rating: 4.9, cost: 35, duration: "3h", tags: ["art","digital"] },
      { name: "Tsukiji Market",   type: "Market",   icon: "🍣", rating: 4.6, cost: 20, duration: "2h", tags: ["food","local"] },
    ],
    "New York": [
      { name: "Central Park",    type: "Park",     icon: "🌳", rating: 4.8, cost: 0,  duration: "3h", tags: ["nature","free"] },
      { name: "Statue of Liberty", type: "Landmark", icon: "🗽", rating: 4.7, cost: 24, duration: "4h", tags: ["iconic","history"] },
      { name: "Times Square",    type: "District", icon: "🎭", rating: 4.5, cost: 0,  duration: "2h", tags: ["iconic","free"] },
      { name: "MoMA",            type: "Museum",   icon: "🎨", rating: 4.7, cost: 25, duration: "3h", tags: ["art","culture"] },
    ],
    Bali: [
      { name: "Tanah Lot",         type: "Temple",  icon: "🏛️", rating: 4.7, cost: 5,  duration: "2h", tags: ["spiritual","sunset"] },
      { name: "Ubud Monkey Forest",type: "Nature",  icon: "🐒", rating: 4.5, cost: 5,  duration: "2h", tags: ["wildlife","nature"] },
      { name: "Seminyak Beach",    type: "Beach",   icon: "🏖️", rating: 4.6, cost: 0,  duration: "3h", tags: ["beach","sunset","free"] },
      { name: "Rice Terraces",     type: "Nature",  icon: "🌿", rating: 4.6, cost: 3,  duration: "2h", tags: ["nature","photography"] },
    ],
  };
  
  export async function fetchPlaces(city) {
    // Real API call: Replace with axios + Google Places API
    await new Promise(r => setTimeout(r, 300)); // simulate network
    return MOCK_PLACES[city] || [
      { name: `${city} Old Town`, type: "District", icon: "🏙️", rating: 4.4, cost: 0, duration: "3h", tags: ["walking","free"] },
    ];
  }