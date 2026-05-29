// ── Dummy Book Data ──────────────────────────────────────────────────────────

export const CATEGORIES = [
  { label: 'Fiction',     emoji: '📖', bg: 'bg-indigo-100',  text: 'text-indigo-700',  border: 'border-indigo-200' },
  { label: 'Non-Fiction', emoji: '📰', bg: 'bg-cyan-100',    text: 'text-cyan-700',    border: 'border-cyan-200'   },
  { label: 'Sci-Fi',      emoji: '🚀', bg: 'bg-violet-100',  text: 'text-violet-700',  border: 'border-violet-200' },
  { label: 'Mystery',     emoji: '🔍', bg: 'bg-amber-100',   text: 'text-amber-700',   border: 'border-amber-200'  },
  { label: 'Biography',   emoji: '👤', bg: 'bg-teal-100',    text: 'text-teal-700',    border: 'border-teal-200'   },
  { label: 'Fantasy',     emoji: '🧙', bg: 'bg-pink-100',    text: 'text-pink-700',    border: 'border-pink-200'   },
];

export const BOOKS = [
  // ── Fiction ────────────────────────────────────────────────────────────────
  {
    id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald',
    category: 'Fiction',
    description: 'Set in the Roaring Twenties, this classic novel follows the mysterious millionaire Jay Gatsby and his obsessive love for the beautiful Daisy Buchanan. A timeless exploration of wealth, class, and the American Dream, told through the eyes of Nick Carraway. The story unfolds against a backdrop of decadence and excess, ultimately revealing the hollowness of materialism and the impossibility of recapturing the past.',
    rating: 4.5, pages: 180, year: 1925, coverBg: 'from-indigo-600 to-indigo-800', popular: true,
  },
  {
    id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee',
    category: 'Fiction',
    description: 'Narrated by the young Scout Finch, this Pulitzer Prize-winning novel follows her father Atticus Finch, a lawyer who defends a Black man falsely accused of a crime in Depression-era Alabama. A profound exploration of racial injustice, moral growth, and compassion that remains one of the most beloved novels in American literature.',
    rating: 4.8, pages: 281, year: 1960, coverBg: 'from-emerald-600 to-emerald-800', popular: true,
  },
  {
    id: 3, title: '1984', author: 'George Orwell',
    category: 'Fiction',
    description: "A dystopian novel set in a totalitarian society ruled by Big Brother. Winston Smith works at the Ministry of Truth, where he rewrites history to match the Party's ever-changing version of events. A harrowing vision of surveillance, psychological manipulation, and the destruction of individual thought.",
    rating: 4.7, pages: 328, year: 1949, coverBg: 'from-red-700 to-red-900', popular: true,
  },
  {
    id: 4, title: 'Pride and Prejudice', author: 'Jane Austen',
    category: 'Fiction',
    description: "One of the most beloved novels in the English language, following the romantic and moral development of Elizabeth Bennet. A sparkling story of love, manners, and social expectations in Regency-era England. Austen's sharp wit and insight into human nature make this a perennial masterpiece.",
    rating: 4.6, pages: 432, year: 1813, coverBg: 'from-pink-500 to-rose-700', popular: false,
  },
  // ── Non-Fiction ────────────────────────────────────────────────────────────
  {
    id: 5, title: 'Sapiens', author: 'Yuval Noah Harari',
    category: 'Non-Fiction',
    description: "A sweeping narrative of humanity's creation and evolution — from the Stone Age to the modern era. Harari explores how Homo sapiens came to dominate the world through cognitive, agricultural, and scientific revolutions. Packed with provocative ideas about how money, empires, and religion have shaped human civilization.",
    rating: 4.7, pages: 443, year: 2011, coverBg: 'from-cyan-600 to-cyan-800', popular: true,
  },
  {
    id: 6, title: 'Atomic Habits', author: 'James Clear',
    category: 'Non-Fiction',
    description: 'An easy and proven way to build good habits and break bad ones. James Clear presents a framework for improving by 1% every day. Drawing on research from biology, psychology, and neuroscience, this practical guide shows you how small changes in behaviour can lead to remarkable results.',
    rating: 4.8, pages: 320, year: 2018, coverBg: 'from-amber-500 to-orange-700', popular: true,
  },
  {
    id: 7, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman',
    category: 'Non-Fiction',
    description: 'Nobel laureate Daniel Kahneman takes us on a journey into the mind and explains the two systems that drive the way we think. System 1 is fast, intuitive, and emotional; System 2 is slower, more deliberative, and logical. Kahneman exposes the extraordinary capabilities and the faults of fast thinking.',
    rating: 4.5, pages: 499, year: 2011, coverBg: 'from-teal-600 to-teal-800', popular: false,
  },
  // ── Sci-Fi ─────────────────────────────────────────────────────────────────
  {
    id: 8, title: 'Dune', author: 'Frank Herbert',
    category: 'Sci-Fi',
    description: "Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides, whose family accepts stewardship of the desert planet Arrakis — the only source of the most valuable substance in the universe. A masterpiece of world-building, politics, and ecological vision.",
    rating: 4.8, pages: 688, year: 1965, coverBg: 'from-amber-700 to-yellow-900', popular: true,
  },
  {
    id: 9, title: "The Hitchhiker's Guide to the Galaxy", author: 'Douglas Adams',
    category: 'Sci-Fi',
    description: "Seconds before Earth is demolished to make way for a hyperspace bypass, Arthur Dent is whisked off the planet by his friend Ford Prefect. Together they travel across the universe, discovering that the answer to the ultimate question of life, the universe, and everything is 42.",
    rating: 4.7, pages: 224, year: 1979, coverBg: 'from-violet-600 to-purple-800', popular: true,
  },
  {
    id: 10, title: 'Neuromancer', author: 'William Gibson',
    category: 'Sci-Fi',
    description: "Case was the sharpest data-thief in the matrix, until he crossed the wrong people. Now he's being given one last chance at redemption. This seminal cyberpunk novel coined the term 'cyberspace' and predicted the internet age with uncanny accuracy.",
    rating: 4.3, pages: 271, year: 1984, coverBg: 'from-blue-700 to-blue-900', popular: false,
  },
  // ── Mystery ────────────────────────────────────────────────────────────────
  {
    id: 11, title: 'And Then There Were None', author: 'Agatha Christie',
    category: 'Mystery',
    description: "Ten strangers are lured to an isolated island mansion, and one by one they are murdered. The island has no communication with the mainland and no escape. The world's best-selling mystery novel of all time — a brilliantly crafted puzzle that keeps you guessing until the very last page.",
    rating: 4.7, pages: 264, year: 1939, coverBg: 'from-stone-600 to-stone-800', popular: true,
  },
  {
    id: 12, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson',
    category: 'Mystery',
    description: 'A journalist and a hacker investigate a 40-year-old murder in a wealthy Swedish family. A dark, complex thriller that weaves together corporate corruption, family secrets, and brutal violence. Lisbeth Salander is one of the most memorable protagonists in modern crime fiction.',
    rating: 4.5, pages: 672, year: 2005, coverBg: 'from-gray-700 to-gray-900', popular: false,
  },
  // ── Biography ──────────────────────────────────────────────────────────────
  {
    id: 13, title: 'Steve Jobs', author: 'Walter Isaacson',
    category: 'Biography',
    description: "Based on more than forty interviews with Steve Jobs, Walter Isaacson has written a riveting story of the creative entrepreneur whose passion for perfection and ferocious drive revolutionized six industries: personal computers, animated movies, music, phones, tablet computing, and digital publishing.",
    rating: 4.6, pages: 630, year: 2011, coverBg: 'from-teal-500 to-teal-700', popular: true,
  },
  {
    id: 14, title: 'The Diary of a Young Girl', author: 'Anne Frank',
    category: 'Biography',
    description: "Discovered in the attic in which she spent the last years of her life, Anne Frank's remarkable diary has become a lasting document of the Holocaust. Written between 1942 and 1944 while hiding from the Nazis, this is the story of a young girl coming of age in terrifying circumstances.",
    rating: 4.8, pages: 283, year: 1947, coverBg: 'from-violet-500 to-violet-700', popular: false,
  },
  // ── Fantasy ────────────────────────────────────────────────────────────────
  {
    id: 15, title: 'The Hobbit', author: 'J.R.R. Tolkien',
    category: 'Fantasy',
    description: "Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive to whisk him away on a journey. A timeless adventure of courage, friendship, and magic that launched one of literature's greatest worlds.",
    rating: 4.7, pages: 310, year: 1937, coverBg: 'from-pink-600 to-rose-800', popular: true,
  },
  {
    id: 16, title: "Harry Potter and the Philosopher's Stone", author: 'J.K. Rowling',
    category: 'Fantasy',
    description: "Harry Potter has never been the star of a Quidditch team or worn a cloak of invisibility. All he knows is a miserable life with the Dursleys. But on his 11th birthday, a letter arrives and everything changes — an invitation to Hogwarts School of Witchcraft and Wizardry.",
    rating: 4.9, pages: 223, year: 1997, coverBg: 'from-purple-600 to-purple-900', popular: true,
  },
];

// star display
export function getStars(rating) {
  return '⭐'.repeat(Math.round(rating));
}

// Get category object by label
export function getCategory(label) {
  return CATEGORIES.find(c => c.label === label) || { emoji: '📚', bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
}