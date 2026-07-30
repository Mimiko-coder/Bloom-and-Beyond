export type BudgetTier = "Under €50" | "€50–100" | "€100–250" | "€250+" | "Luxury";

export const quizOccasions = [
  "Birthday",
  "Anniversary",
  "Proposal",
  "Graduation",
  "Baby Shower",
  "Gender Reveal",
  "Mother's Day",
  "Father's Day",
  "Valentine's Day",
  "Welcome Home",
  "Apology",
  "Just Because",
] as const;

export const quizRecipients = [
  "Girlfriend",
  "Boyfriend",
  "Wife",
  "Husband",
  "Mother",
  "Father",
  "Friend",
  "Best Friend",
  "Child",
  "Colleague",
  "Family Member",
] as const;

export const quizBudgets = [
  "Under €50",
  "€50–100",
  "€100–250",
  "€250+",
] as const;

export const quizStyles = [
  "Romantic",
  "Luxury",
  "Elegant",
  "Minimal",
  "Cute",
  "Colorful",
  "Surprise Me",
] as const;

export type QuizAnswers = {
  occasion: (typeof quizOccasions)[number] | "";
  recipient: (typeof quizRecipients)[number] | "";
  budget: (typeof quizBudgets)[number] | "";
  style: (typeof quizStyles)[number] | "";
};

export type PackageRecommendation = {
  title: string;
  includes: string[];
  priceRange: string;
  image: string;
  summary: string;
};

export function getRecommendation(answers: QuizAnswers): PackageRecommendation {
  const { occasion, budget, style, recipient } = answers;

  const luxury =
    budget === "€250+" || style === "Luxury" || style === "Elegant";
  const romantic =
    style === "Romantic" ||
    occasion === "Anniversary" ||
    occasion === "Proposal" ||
    occasion === "Valentine's Day";
  const apology = occasion === "Apology";
  const baby =
    occasion === "Baby Shower" || occasion === "Gender Reveal";
  const modest = budget === "Under €50" || budget === "€50–100";

  if (apology) {
    return {
      title: "Heartfelt Apology Experience",
      summary: `A thoughtful apology package designed for your ${recipient.toLowerCase()}, with warmth and sincerity.`,
      includes: [
        "Personalized apology setup",
        "Rose petals pathway",
        "Heart balloons",
        "LED candles",
        "Chocolate selection",
        "Handwritten-style message card",
      ],
      priceRange: budget || "€100–250",
      image: "/images/im-sorry-female.jpeg",
    };
  }

  if (occasion === "Proposal" || (romantic && luxury)) {
    return {
      title: "Luxury Romantic Room Setup",
      summary: `An unforgettable ${occasion.toLowerCase()} moment styled for your ${recipient.toLowerCase()}.`,
      includes: [
        "Rose petals",
        "Premium balloons",
        "LED candles",
        "Personalized gift",
        "Chocolate",
        "Fresh flowers",
      ],
      priceRange: budget === "€250+" ? "€250+" : budget || "€100–250",
      image:
        occasion === "Proposal"
          ? "/images/proposal-marry-me.jpeg"
          : "/images/romantic-dinner-neon.jpeg",
    };
  }

  if (baby) {
    return {
      title: "Soft Celebration Décor Package",
      summary: "Elegant pastel styling for a gentle, joyful celebration.",
      includes: [
        "Designer balloon styling",
        "Soft floral accents",
        "Table décor",
        "Photo-ready backdrop",
        "Custom keepsake gift",
        "Welcome signage",
      ],
      priceRange: budget || "€100–250",
      image: "/images/gender-balloons.jpeg",
    };
  }

  if (occasion === "Birthday" && luxury) {
    return {
      title: "Signature Birthday Hotel Surprise",
      summary: `A luxurious birthday transformation for your ${recipient.toLowerCase()}.`,
      includes: [
        "Custom balloon installation",
        "Neon / letter styling",
        "Gift display",
        "Floral arrangement",
        "Cake-ready table styling",
        "Ambient lighting",
      ],
      priceRange: budget || "€250+",
      image: "/images/birthday-rose-gold.jpeg",
    };
  }

  if (modest || style === "Minimal" || style === "Cute") {
    return {
      title: "Curated Keepsake Gift Box",
      summary: `A beautifully considered gift experience for your ${recipient.toLowerCase()}.`,
      includes: [
        "Curated gift selection",
        "Elegant wrapping",
        "Chocolate accents",
        "Fresh or preserved florals",
        "Personal note",
        "Optional mini décor touch",
      ],
      priceRange: budget || "€50–100",
      image: "/images/gift-gal-1.jpeg",
    };
  }

  return {
    title: "Elegant Celebration Experience",
    summary: `A refined ${occasion.toLowerCase()} package with Bloom & Beyond’s signature touch.`,
    includes: [
      "Styled décor setup",
      "Balloons",
      "Floral accents",
      "LED candles",
      "Personalized gift",
      "Chocolate",
    ],
    priceRange: budget || "€100–250",
    image: "/images/anniversary-setup.jpeg",
  };
}

export type InspirationItem = {
  id: string;
  title: string;
  description: string;
  occasion: string;
  budget: BudgetTier;
  priceLabel: string;
  image: string;
};

export const inspirationItems: InspirationItem[] = [
  {
    id: "1",
    title: "Rose Petal Proposal Aisle",
    description: "A candlelit path and glowing letters for an unforgettable yes.",
    occasion: "Proposal",
    budget: "Luxury",
    priceLabel: "From €250",
    image: "/images/proposal-marry-me.jpeg",
  },
  {
    id: "2",
    title: "Anniversary Fairy Light Suite",
    description: "Warm lights, roses, and a sweet cake moment for two.",
    occasion: "Anniversary",
    budget: "€100–250",
    priceLabel: "€100–250",
    image: "/images/anniversary-setup.jpeg",
  },
  {
    id: "3",
    title: "Rose Gold Birthday Reveal",
    description: "A glamorous hotel-room birthday with metallic balloon artistry.",
    occasion: "Birthday",
    budget: "Luxury",
    priceLabel: "From €250",
    image: "/images/birthday-rose-gold.jpeg",
  },
  {
    id: "4",
    title: "Heartfelt Apology Setup",
    description: "A sincere, luxurious room surprise when words alone aren’t enough.",
    occasion: "Apology",
    budget: "€100–250",
    priceLabel: "€100–250",
    image: "/images/im-sorry-female.jpeg",
  },
  {
    id: "5",
    title: "Blush Gift Box for Her",
    description: "A soft pink curated box with elegant accessories and florals.",
    occasion: "Valentine's",
    budget: "€50–100",
    priceLabel: "€50–100",
    image: "/images/gift-gal-1.jpeg",
  },
  {
    id: "6",
    title: "Gentleman’s Keepsake Box",
    description: "A refined masculine gift set with a romantic floral accent.",
    occasion: "Anniversary",
    budget: "€50–100",
    priceLabel: "€50–100",
    image: "/images/male-gift-2.jpeg",
  },
  {
    id: "7",
    title: "Chocolate Lover Bouquet",
    description: "An indulgent chocolate arrangement wrapped like luxury florals.",
    occasion: "Birthday",
    budget: "Under €50",
    priceLabel: "Under €50",
    image: "/images/chocolate-lover-1.jpeg",
  },
  {
    id: "13",
    title: "I'm Sorry Gift for Him",
    description: "A thoughtful apology package styled with care and intention.",
    occasion: "Apology",
    budget: "€50–100",
    priceLabel: "€50–100",
    image: "/images/im-sorry-male-1.jpeg",
  },
  {
    id: "14",
    title: "Just Because Love Note",
    description: "An I love you surprise for the days that need no special reason.",
    occasion: "Valentine's",
    budget: "€100–250",
    priceLabel: "€100–250",
    image: "/images/i-love-u-2.jpeg",
  },
  {
    id: "15",
    title: "Her Favorite Gift Box",
    description: "A beautifully curated gift box from our gift gal collection.",
    occasion: "Birthday",
    budget: "€50–100",
    priceLabel: "€50–100",
    image: "/images/gift-gal-3.jpeg",
  },
  {
    id: "8",
    title: "Beachfront Proposal Glow",
    description: "Neon vows, candlelight, and roses under the evening sky.",
    occasion: "Proposal",
    budget: "Luxury",
    priceLabel: "From €250",
    image: "/images/proposal-beach.jpeg",
  },
  {
    id: "9",
    title: "Paint & Sip Date Night",
    description: "A creative romantic evening styled with candles and cocktails.",
    occasion: "Anniversary",
    budget: "€100–250",
    priceLabel: "€100–250",
    image: "/images/date-night-paint.jpeg",
  },
  {
    id: "10",
    title: "Soft Balloon Celebration",
    description: "Navy and blush balloon styling perfect for baby milestones.",
    occasion: "Baby Shower",
    budget: "€50–100",
    priceLabel: "€50–100",
    image: "/images/gender-balloons.jpeg",
  },
  {
    id: "11",
    title: "Graduation Milestone Table",
    description: "Elegant metallic accents and a refined dining celebration look.",
    occasion: "Graduation",
    budget: "€100–250",
    priceLabel: "€100–250",
    image: "/images/milestone-party.jpeg",
  },
  {
    id: "12",
    title: "Jewelry Gift Moment",
    description: "A petite luxury box with roses—perfect for an intimate surprise.",
    occasion: "Valentine's",
    budget: "Under €50",
    priceLabel: "Under €50",
    image: "/images/gift-gal-1.jpeg",
  },
];

export const inspirationOccasions = [
  "All",
  "Birthday",
  "Anniversary",
  "Proposal",
  "Graduation",
  "Baby Shower",
  "Apology",
  "Valentine's",
] as const;

export const inspirationBudgets = [
  "All",
  "Under €50",
  "€50–100",
  "€100–250",
  "Luxury",
] as const;

export const requestOccasions = [
  "Birthday",
  "Anniversary",
  "Proposal",
  "Graduation",
  "Baby Shower",
  "Gender Reveal",
  "Valentine's",
  "Welcome Home",
  "Apology",
  "Just Because",
  "Other",
] as const;

export const calendarOccasions = [
  "Birthday",
  "Anniversary",
  "Proposal Anniversary",
  "Graduation",
  "Other",
] as const;

export const reminderOptions = [
  "1 Week Before",
  "3 Days Before",
  "1 Day Before",
] as const;

export type LoveReminder = {
  id: string;
  personName: string;
  occasion: (typeof calendarOccasions)[number];
  date: string;
  reminder: (typeof reminderOptions)[number];
  createdAt: string;
};
