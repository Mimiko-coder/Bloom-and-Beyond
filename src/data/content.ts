export const WHATSAPP_NUMBER = "905338593314";
export const WHATSAPP_DISPLAY = "+90 533 859 3314";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Bloom & Beyond! I'd love to plan a surprise.")}`;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#quiz", label: "Quiz" },
  { href: "#inspiration", label: "Inspiration" },
  { href: "#request", label: "Request" },
  { href: "#calendar", label: "Calendar" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Birthday Decorations",
    description: "Elegant birthday transformations that feel personal, joyful, and unforgettable.",
    image: "/images/birthday-rose-gold.jpeg",
  },
  {
    title: "Anniversary Setups",
    description: "Intimate anniversary décor designed to celebrate your love story.",
    image: "/images/anniversary-setup.jpeg",
  },
  {
    title: "Proposal Decorations",
    description: "Breathtaking proposal moments crafted for a yes they will never forget.",
    image: "/images/proposal-marry-me.jpeg",
  },
  {
    title: "Graduation Celebrations",
    description: "Stylish celebrations that honor hard work, milestones, and new beginnings.",
    image: "/images/milestone-party.jpeg",
  },
  {
    title: "Baby Showers",
    description: "Soft, refined baby shower styling filled with warmth and anticipation.",
    image: "/images/gender-balloons.jpeg",
  },
  {
    title: "Gender Reveals",
    description: "Beautiful gender reveal moments designed with elegance and excitement.",
    image: "/images/gender-balloons.jpeg",
  },
  {
    title: "Romantic Room Decorations",
    description: "Candlelight, florals, and thoughtful details for deeply romantic evenings.",
    image: "/images/romantic-dinner-neon.jpeg",
  },
  {
    title: "Hotel Room Surprises",
    description: "Luxury hotel transformations ready the moment they open the door.",
    image: "/images/birthday-hotel-blue.jpeg",
  },
  {
    title: "Gift Boxes",
    description: "Curated gift boxes that feel intentional, luxurious, and heartfelt.",
    image: "/images/gift-gal-1.jpeg",
  },
  {
    title: "Custom Hampers",
    description: "Bespoke hampers tailored to their taste, personality, and occasion.",
    image: "/images/birthday-balloon-hamper.jpeg",
  },
  {
    title: "Luxury Picnics",
    description: "Styled picnic experiences for dates, celebrations, and quiet escapes.",
    image: "/images/garden-celebration.jpeg",
  },
  {
    title: "Corporate Gifts",
    description: "Refined corporate gifting that leaves a lasting, elegant impression.",
    image: "/images/male-gift-2.jpeg",
  },
  {
    title: "Apology Packages",
    description: "Thoughtful apology setups that speak when words alone are not enough.",
    image: "/images/im-sorry-female.jpeg",
  },
  {
    title: "Welcome Home Surprises",
    description: "Warm, beautiful welcomes that make homecoming feel extraordinary.",
    image: "/images/i-love-u-1.jpeg",
  },
  {
    title: "Custom Decorations",
    description: "Fully personalized décor designed around your vision and story.",
    image: "/images/date-night-paint.jpeg",
  },
] as const;

export const reasons = [
  {
    title: "Made with Love",
    description: "Every detail is arranged with care, intention, and genuine emotion.",
    icon: "Heart",
  },
  {
    title: "Personalized Experiences",
    description: "No two celebrations are the same—each surprise is designed around you.",
    icon: "Sparkles",
  },
  {
    title: "Stress-Free Planning",
    description: "From concept to setup, we handle everything so you can simply enjoy.",
    icon: "ShieldCheck",
  },
  {
    title: "Beautiful Memories",
    description: "We create moments that linger long after the candles are blown out.",
    icon: "Camera",
  },
] as const;

export const occasions = [
  { title: "Birthday", image: "/images/birthday-navy.jpeg" },
  { title: "Anniversary", image: "/images/anniversary-setup.jpeg" },
  { title: "Proposal", image: "/images/proposal-beach.jpeg" },
  { title: "Graduation", image: "/images/milestone-party.jpeg" },
  { title: "Mother's Day", image: "/images/gift-box-pink-accessories.jpeg" },
  { title: "Father's Day", image: "/images/male-gift-2.jpeg" },
  { title: "Valentine's", image: "/images/romantic-table-roses.jpeg" },
  { title: "Christmas", image: "/images/chocolate-lover-1.jpeg" },
  { title: "Baby Shower", image: "/images/gender-balloons.jpeg" },
  { title: "Gender Reveal", image: "/images/gender-balloons.jpeg" },
  { title: "Welcome Home", image: "/images/i-love-u-1.jpeg" },
  { title: "Apology", image: "/images/im-sorry-female.jpeg" },
  { title: "Just Because", image: "/images/i-love-u-2.jpeg" },
] as const;

export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  tall?: boolean;
  mediaType?: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/proposal-marry-me.jpeg",
    alt: "Marry Me proposal setup with candles and balloons",
    category: "Proposal",
    tall: true,
  },
  {
    src: "/images/anniversary-setup.jpeg",
    alt: "Happy Anniversary room decoration with roses and fairy lights",
    category: "Anniversary",
    tall: false,
  },
  {
    src: "/images/birthday-hotel-blue.jpeg",
    alt: "Luxury blue and black birthday hotel room surprise",
    category: "Birthday",
    tall: true,
  },
  {
    src: "/videos/happy-bday-2.mp4",
    alt: "Happy birthday surprise video",
    category: "Birthday",
    tall: true,
    mediaType: "video",
  },
  {
    src: "/images/romantic-hotel-suite.jpeg",
    alt: "Romantic hotel suite with roses champagne and desserts",
    category: "Romantic",
    tall: false,
  },
  {
    src: "/images/proposal-beach.jpeg",
    alt: "Beach proposal with Will You Marry Me neon sign",
    category: "Proposal",
    tall: true,
  },
  {
    src: "/images/birthday-rose-gold.jpeg",
    alt: "Rose gold Happy Birthday balloon heart setup",
    category: "Birthday",
    tall: true,
  },
  {
    src: "/images/romantic-dinner-neon.jpeg",
    alt: "Romantic candlelit dinner with neon love sign",
    category: "Romantic",
    tall: true,
  },
  {
    src: "/images/proposal-red-heart.jpeg",
    alt: "Red and white Marry Me proposal with petal heart",
    category: "Proposal",
    tall: false,
  },
  {
    src: "/images/blush-romantic-dinner.jpeg",
    alt: "Blush pink romantic dinner table for two",
    category: "Romantic",
    tall: false,
  },
  {
    src: "/images/date-night-paint.jpeg",
    alt: "Paint and sip date night experience setup",
    category: "Experiences",
    tall: true,
  },
  {
    src: "/images/garden-celebration.jpeg",
    alt: "Elegant outdoor garden celebration tables",
    category: "Celebrations",
    tall: false,
  },

  // Gift Boxes — gift gal 1–6, male gifts, chocolate lover
  {
    src: "/images/gift-gal-1.jpeg",
    alt: "Gift box for her — curated pink accessories set",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/gift-gal-2.jpeg",
    alt: "Gift box for her — elegant curated selection",
    category: "Gift Boxes",
    tall: true,
  },
  {
    src: "/images/gift-gal-3.jpeg",
    alt: "Gift box for her — premium styled package",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/gift-gal-4.jpeg",
    alt: "Gift box for her — soft luxury presentation",
    category: "Gift Boxes",
    tall: true,
  },
  {
    src: "/images/gift-gal-5.jpeg",
    alt: "Gift box for her — romantic gift arrangement",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/gift-gal-6.jpeg",
    alt: "Gift box for her — beautiful keepsake box",
    category: "Gift Boxes",
    tall: true,
  },
  {
    src: "/videos/gift-man-1.mp4",
    alt: "Gift for him — video showcase of male gift box",
    category: "Gift Boxes",
    tall: true,
    mediaType: "video",
  },
  {
    src: "/images/male-gift-2.jpeg",
    alt: "Male gift box with grooming and roses",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/male-gift-3.jpeg",
    alt: "Male gift set — refined gift for him",
    category: "Gift Boxes",
    tall: true,
  },
  {
    src: "/images/male-gift-4.jpeg",
    alt: "Male gift box — stylish curated package",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/male-gift-5.jpeg",
    alt: "Male gift box — premium gift for him",
    category: "Gift Boxes",
    tall: true,
  },
  {
    src: "/images/chocolate-lover-1.jpeg",
    alt: "Chocolate lover bouquet with roses",
    category: "Gift Boxes",
    tall: false,
  },
  {
    src: "/images/lady-gift-1.jpeg",
    alt: "Lady jewelry gift box with roses",
    category: "Gift Boxes",
    tall: true,
  },

  // Apology — im sorry female + male 1–4
  {
    src: "/images/im-sorry-female.jpeg",
    alt: "I'm Sorry room surprise for her",
    category: "Apology",
    tall: true,
  },
  {
    src: "/images/im-sorry-male-1.jpeg",
    alt: "I'm Sorry heart gift box for him",
    category: "Apology",
    tall: false,
  },
  {
    src: "/images/im-sorry-male-2.jpeg",
    alt: "I'm Sorry gift package for him",
    category: "Apology",
    tall: true,
  },
  {
    src: "/images/im-sorry-male-3.jpeg",
    alt: "I'm Sorry styled apology gift",
    category: "Apology",
    tall: false,
  },
  {
    src: "/images/im-sorry-male-4.jpeg",
    alt: "I'm Sorry luxury apology package",
    category: "Apology",
    tall: true,
  },

  // Just Because — i love u 1–4
  {
    src: "/images/i-love-u-1.jpeg",
    alt: "I love you bed surprise with floating roses",
    category: "Just Because",
    tall: true,
  },
  {
    src: "/images/i-love-u-2.jpeg",
    alt: "I Love You romantic bed decoration",
    category: "Just Because",
    tall: false,
  },
  {
    src: "/videos/i-love-u-3.mp4",
    alt: "I love you surprise video",
    category: "Just Because",
    tall: true,
    mediaType: "video",
  },
  {
    src: "/images/i-love-u-4.jpeg",
    alt: "I love you kitchen table surprise with roses and gifts",
    category: "Just Because",
    tall: false,
  },
];

export const testimonials = [
  {
    name: "Elena M.",
    occasion: "Anniversary Surprise",
    quote:
      "Bloom & Beyond turned our anniversary into something magical. Every detail felt intentional, elegant, and deeply personal.",
  },
  {
    name: "James K.",
    occasion: "Proposal Setup",
    quote:
      "They created the proposal of my dreams. The setup was breathtaking, and the planning process was completely stress-free.",
  },
  {
    name: "Amira S.",
    occasion: "Birthday Hotel Surprise",
    quote:
      "I walked into the room and cried. It was luxurious, romantic, and more beautiful than I imagined.",
  },
  {
    name: "Daniel R.",
    occasion: "Apology Package",
    quote:
      "When words weren't enough, Bloom & Beyond helped me say I'm sorry in the most elegant way. Truly unforgettable.",
  },
] as const;
