export const BRANCHES = [
  { id: 1, name: "Bristol City Centre", city: "Bristol" },
  { id: 2, name: "Central London Elite", city: "London" },
  { id: 3, name: "Deansgate Premium", city: "Manchester" },
];

export const BARBERS = {
  1: [
    { id: 101, name: "James Hart", experience: "5 years experience" },
    { id: 102, name: "Omar Khalid", experience: "2 years experience" },
  ],
  2: [
    { id: 201, name: "Usman", experience: "3 years experience" },
    { id: 202, name: "Lucas Coleman", experience: "8 years experience" },
  ],
  3: [
    { id: 301, name: "Ryan Blake", experience: "6 years experience" },
    { id: 302, name: "Daniel Cross", experience: "4 years experience" },
  ],
};

export const MALE_SERVICES = [
  { id: "s1", name: "Beard Trim", price: 20, duration: 20 },
  { id: "s2", name: "Facial & Grooming", price: 30, duration: 40 },
  { id: "s3", name: "Hair Color", price: 45, duration: 45 },
  { id: "s4", name: "Hair Color (Men)", price: 40, duration: 45 },
  { id: "s5", name: "Head Massage", price: 12, duration: 15 },
  { id: "s6", name: "Men's Haircut", price: 25, duration: 30 },
  { id: "s7", name: "Slop Bread Trim", price: 25, duration: 40 },
  { id: "s8", name: "Wolf hair Cut", price: 35, duration: 40 },
];

export const FEMALE_SERVICES = [
  { id: "f1", name: "Blow Dry", price: 35, duration: 30 },
  { id: "f2", name: "Hair Color (Women)", price: 65, duration: 90 },
  { id: "f3", name: "Hair Treatment", price: 50, duration: 60 },
  { id: "f4", name: "Ladies Haircut", price: 40, duration: 45 },
  { id: "f5", name: "Head Massage", price: 12, duration: 15 },
  { id: "f6", name: "Highlights", price: 80, duration: 120 },
];

export const SHIFT_START = 9 * 60;
export const SHIFT_END = 19 * 60;

export function generateSlots(durationMinutes) {
  const slots = [];
  let current = SHIFT_START;
  while (current + durationMinutes <= SHIFT_END) {
    const h = Math.floor(current / 60).toString().padStart(2, "0");
    const m = (current % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
    current += durationMinutes;
  }
  return slots;
}