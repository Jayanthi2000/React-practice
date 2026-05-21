import { BUDGET_BASE } from '../data/destinations';

const CITY_MULT = {
  Paris: 1.4, Tokyo: 1.2, "New York": 1.6, Bali: 0.6,
  Barcelona: 1.1, Sydney: 1.3, Dubai: 1.5, Santorini: 1.3,
};

export function estimateBudget(city, days, travelers, tripType) {
  const m = CITY_MULT[city] || 1.0;
  const b = BUDGET_BASE[tripType] || BUDGET_BASE.standard;
  return {
    accommodation: Math.round(b.hotel      * days * travelers * m),
    food:          Math.round(b.food       * days * travelers * m),
    transport:     Math.round(b.transport  * days * travelers * m),
    activities:    Math.round(b.activities * days * travelers * m),
    misc:          Math.round(b.misc       * days * travelers * m),
  };
}

export function getTotal(budget) {
  return Object.values(budget).reduce((s, v) => s + v, 0);
}