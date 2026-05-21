const ACTIVITIES = [
    { time: "08:00", name: "Breakfast at local café",      cost: 15 },
    { time: "10:00", name: "Morning sightseeing",          cost: 20 },
    { time: "12:30", name: "Lunch — authentic cuisine",    cost: 25 },
    { time: "14:00", name: "Afternoon exploration",        cost: 10 },
    { time: "16:30", name: "Museum / Gallery visit",       cost: 30 },
    { time: "19:00", name: "Sunset viewpoint",             cost: 0  },
    { time: "20:30", name: "Dinner & evening",             cost: 45 },
  ];
  
  export function generateItinerary(destination, days, tripType) {
    const mult = tripType === 'luxury' ? 2.5 : tripType === 'budget' ? 0.5 : 1;
    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      title: i === 0          ? `Arrival in ${destination}`
           : i === days - 1   ? `Last Day & Departure`
           : `Explore ${destination} — Day ${i + 1}`,
      activities: ACTIVITIES.slice(0, 5 + (i % 2)).map(a => ({
        ...a,
        cost: Math.round(a.cost * mult),
      })),
    }));
  }