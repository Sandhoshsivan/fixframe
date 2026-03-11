// ══════════════════════════════════════════
// data.js — Shared data for FixFrame
// India's Premier Visual Production Crew
// Rooted in Tamil Nadu · Celebrating All of India
// ══════════════════════════════════════════

const WORKS = [
  {
    id: 1,
    category: "Weddings",
    title: "Sacred Threads",
    client: "The Raghavan Family",
    description: "A grand Chettinad wedding — three days of ancestral rituals, silk, and celebration captured in cinematic detail across the family's heritage mansion.",
    location: "Karaikudi, Tamil Nadu",
    year: "2025",
    aspect: "tall",
    grad: "linear-gradient(145deg,#1a1a1a 0%,#1a1a2e 100%)",
    img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 2,
    category: "Motion",
    title: "Temple of Light",
    client: "Tamil Nadu Tourism",
    description: "A cinematic documentary exploring the ancient Dravidian temple architecture of Thanjavur and Madurai — stone, faith, and eternal light.",
    location: "Thanjavur, Tamil Nadu",
    year: "2025",
    aspect: "wide",
    grad: "linear-gradient(145deg,#0d1117 0%,#1a2e1a 100%)",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 3,
    category: "Editorial",
    title: "Silk & Soul",
    client: "Sundari Silks",
    description: "An editorial celebrating the artistry of Kanchipuram silk weaving — from loom to legacy, every thread tells a story.",
    location: "Kanchipuram, Tamil Nadu",
    year: "2025",
    aspect: "tall",
    grad: "linear-gradient(145deg,#111118 0%,#2e1a1a 100%)",
    img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 4,
    category: "Brand",
    title: "Spice Route",
    client: "Amala Organics",
    description: "Brand storytelling through the spice markets and tea estates of the Nilgiris — color, aroma, and heritage in every frame.",
    location: "Ooty, Tamil Nadu",
    year: "2024",
    aspect: "wide",
    grad: "linear-gradient(145deg,#0f0f0f 0%,#1a2e2e 100%)",
    img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 5,
    category: "Weddings",
    title: "Golden Vows",
    client: "The Mehta Family",
    description: "A royal Rajasthani wedding — vibrant pheras, palace courtyards, and the golden light of Udaipur at dusk.",
    location: "Udaipur, Rajasthan",
    year: "2024",
    aspect: "tall",
    grad: "linear-gradient(145deg,#13130f 0%,#2e2e1a 100%)",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 6,
    category: "Editorial",
    title: "Monsoon Diaries",
    client: "Conde Nast Traveller India",
    description: "Kerala's backwaters come alive during monsoon — a visual poem of rain, green, and the quiet rhythm of life on water.",
    location: "Alleppey, Kerala",
    year: "2024",
    aspect: "wide",
    grad: "linear-gradient(145deg,#0a0a14 0%,#1a0a14 100%)",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 7,
    category: "Brand",
    title: "Filter Coffee Stories",
    client: "Kumbakonam Degree Coffee Co.",
    description: "The morning ritual of South India — brass tumblers, fresh-ground beans, and the art of the perfect decoction.",
    location: "Chennai, Tamil Nadu",
    year: "2025",
    aspect: "tall",
    grad: "linear-gradient(145deg,#1a1511 0%,#1a1a2e 100%)",
    img: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 8,
    category: "Motion",
    title: "Bharatanatyam Rising",
    client: "Kalakshetra Foundation",
    description: "A cinematic tribute to the classical dance form born in Tamil Nadu — discipline, devotion, and divine movement.",
    location: "Chennai, Tamil Nadu",
    year: "2024",
    aspect: "wide",
    grad: "linear-gradient(145deg,#0d0d1a 0%,#1a150d 100%)",
    img: "https://plus.unsplash.com/premium_photo-1682096116534-7dc8d83b6d72?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 9,
    category: "Weddings",
    title: "Eternal Bond",
    client: "The Krishnamurthy Family",
    description: "An intimate Tamil Brahmin wedding — the fragrance of jasmine, sacred fire, and generations of tradition in every ritual.",
    location: "Madurai, Tamil Nadu",
    year: "2025",
    aspect: "tall",
    grad: "linear-gradient(145deg,#1a1512 0%,#2e1a2e 100%)",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 10,
    category: "Editorial",
    title: "City of Temples",
    client: "National Geographic India",
    description: "The spiritual heartbeat of Varanasi — ancient ghats, morning aarti, and the eternal flow of the Ganges at dawn.",
    location: "Varanasi, Uttar Pradesh",
    year: "2024",
    aspect: "wide",
    grad: "linear-gradient(145deg,#0d0d14 0%,#1a1a0d 100%)",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 11,
    category: "Pre-Wedding",
    title: "Before Forever",
    client: "Nithya & Sanjay",
    description: "A dreamy pre-wedding shoot across the tea plantations of Munnar — golden hour, misty hills, and two souls about to begin their journey.",
    location: "Munnar, Kerala",
    year: "2025",
    aspect: "tall",
    grad: "linear-gradient(145deg,#1a1a11 0%,#1a2e1a 100%)",
    img: "https://images.unsplash.com/photo-1696224809463-7b520db9e758?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 12,
    category: "Digital Invites",
    title: "Royal Elegance",
    client: "The Iyer–Sharma Family",
    description: "A bespoke digital wedding invitation with animated floral motifs, custom Tamil & Hindi typography, RSVP integration, and a cinematic save-the-date video.",
    location: "Chennai, Tamil Nadu",
    year: "2025",
    aspect: "wide",
    grad: "linear-gradient(145deg,#1a110d 0%,#2e1a1a 100%)",
    img: "https://plus.unsplash.com/premium_photo-1661599866396-16ee71927e67?w=920&h=600&fit=crop&q=80"
  },
  {
    id: 13,
    category: "Events",
    title: "Grand Gala",
    client: "TiE Chennai",
    description: "Full event coverage for the annual TiE Global Summit — keynote photography, candid moments, stage lighting, and a same-day highlight reel.",
    location: "Chennai, Tamil Nadu",
    year: "2024",
    aspect: "tall",
    grad: "linear-gradient(145deg,#0d0d1a 0%,#1a1a2e 100%)",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=840&fit=crop&q=80"
  },
  {
    id: 14,
    category: "Digital Invites",
    title: "Kolam & Code",
    client: "The Balasubramanian Family",
    description: "A digital invitation suite blending traditional kolam patterns with modern motion design — animated RSVP cards, WhatsApp invites, and a video save-the-date.",
    location: "Coimbatore, Tamil Nadu",
    year: "2025",
    aspect: "wide",
    grad: "linear-gradient(145deg,#111118 0%,#1a2e2e 100%)",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=920&h=600&fit=crop&q=80"
  },
];

const SERVICES = [
  {
    tier: "The Session",
    tagline: "Foundation",
    featured: false,
    price: "From \u20B925,000",
    desc: "A refined visual identity session for emerging brands and families. Half-day collaboration with our crew, curated edit of 30 selects, and private gallery delivery.",
    includes: ["4-Hour Session", "2-Person Crew", "30 Curated Selects", "Private Gallery Delivery"],
  },
  {
    tier: "The Signature",
    tagline: "Most Requested",
    featured: true,
    price: "From \u20B975,000",
    desc: "Our most requested offering. Full-day shoot with our core crew — stills, cinematic reels, drone coverage, art direction, and a digital invitation suite.",
    includes: ["Full-Day Session", "4-Person Crew", "60 Selects + 2 Reels", "Cinematic Grade", "Drone Coverage", "Digital Invitation Suite", "Art Direction"],
  },
  {
    tier: "The Production",
    tagline: "The Masterwork",
    featured: false,
    price: "Custom",
    desc: "An immersive, multi-day production with our full crew. Reserved for destination weddings, brand campaigns, and stories that demand the extraordinary.",
    includes: ["Multi-Day Production", "Full Crew (6-8 Members)", "Unlimited Selects", "Feature Edit", "Dedicated Director", "Motion Graphics", "Custom Digital Invites"],
  },
  {
    tier: "Digital Invites",
    tagline: "The Card Studio",
    featured: false,
    price: "From \u20B95,000",
    desc: "Bespoke digital wedding cards, save-the-date videos, and invitation suites designed with your cultural identity — WhatsApp-ready, animated, and completely personalized.",
    includes: ["Custom Digital Wedding Card", "Animated Save-the-Date Video", "WhatsApp & Social Formats", "RSVP Integration", "Multilingual Typography"],
  },
];

const PROJECT_TYPES = [
  "Wedding Photography",
  "Wedding Cinematic Film",
  "Pre-Wedding Shoot",
  "Event Photography",
  "Brand Photography",
  "Corporate Film",
  "Editorial",
  "Documentary",
  "Digital Wedding Card",
  "Digital Invitation Card",
  "Save-the-Date Video",
  "Other",
];

const TESTIMONIALS = [
  {
    quote: "FixFrame's crew captured our wedding like a Mani Ratnam film. Every ritual, every tear, every laugh — preserved in frames that still make us cry happy tears.",
    author: "Kavitha & Arvind",
    role: "Wedding Couple, Chennai",
  },
  {
    quote: "We've worked with many studios, but FixFrame's team brings a different energy. They understand our culture, our aesthetics — they made our brand look world-class.",
    author: "Rajesh Venkataraman",
    role: "Founder, Amala Organics",
  },
  {
    quote: "From the pre-production call to the final delivery, their crew was professional, passionate, and deeply respectful of our traditions. Truly exceptional.",
    author: "Dr. Priya Natarajan",
    role: "Head of Brand, Sundari Silks",
  },
  {
    quote: "They flew their entire crew to Rajasthan for our destination wedding. The result? A cinematic masterpiece that our families will treasure for generations.",
    author: "Ananya & Vikram Mehta",
    role: "Wedding Couple, Udaipur",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery & Vision Alignment",
    desc: "Our creative director connects with you to understand your vision — cultural nuances, family traditions, brand identity, and the emotional story you want told.",
  },
  {
    num: "02",
    title: "Crew Assembly & Pre-Production",
    desc: "We hand-pick the right crew for your project — from cinematographers and drone operators to stylists and lighting technicians. Every detail is planned.",
  },
  {
    num: "03",
    title: "The Capture",
    desc: "On set, our crew works in sync — multiple angles, cinematic movement, and an intuitive understanding of light and moment. No detail escapes us.",
  },
  {
    num: "04",
    title: "Master-Grade Post-Production",
    desc: "Our editors and colorists craft your final gallery with cinematic grading, premium retouching, and a private, curated viewing experience.",
  },
];

const CREW_MEMBERS = [
  {
    name: "Arun Prakash",
    role: "Founder & Creative Director",
    bio: "15 years behind the lens. Former lead photographer at a top Chennai studio before founding FixFrame with a vision to bring cinematic storytelling to every Indian celebration.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=600&fit=crop&q=80",
  },
  {
    name: "Meera Sundaram",
    role: "Lead Cinematographer",
    bio: "Trained at FTII Pune. Meera brings a filmmaker's eye to every project — her wedding films have been featured at international film festivals.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=480&h=600&fit=crop&q=80",
  },
  {
    name: "Karthik Rajan",
    role: "Senior Photographer",
    bio: "Specializes in portraits and editorial. Karthik's ability to capture authentic emotion in the chaos of Indian weddings is unmatched.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=600&fit=crop&q=80",
  },
  {
    name: "Divya Lakshmi",
    role: "Art Director & Stylist",
    bio: "From silk saree draping to set design, Divya ensures every visual element honors tradition while feeling contemporary and fresh.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=480&h=600&fit=crop&q=80",
  },
  {
    name: "Surya Narayanan",
    role: "Drone & Aerial Specialist",
    bio: "Licensed commercial drone pilot with 500+ hours of aerial cinematography. Captures breathtaking overhead perspectives of venues and landscapes.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=480&h=600&fit=crop&q=80",
  },
  {
    name: "Preethi Mohan",
    role: "Post-Production Lead",
    bio: "Color science expert and master editor. Preethi's cinematic grading transforms raw footage into visual poetry with a signature warm, filmic tone.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=480&h=600&fit=crop&q=80",
  },
];

const GEAR_LIST = ["ARRI ALEXA Mini LF", "RED V-RAPTOR", "Sony FX6", "Canon R5 Mark II", "DJI Inspire 3", "Cooke Anamorphic", "Hasselblad X2D", "Ronin 4D"];

const AWARDS = ["WPAI Gold 2025", "Cannes Corporate Media Award", "Better Photography Wedding Award", "ISPWP Top 100", "Vimeo Staff Pick"];

const BUDGET_RANGES = ["\u20B915,000 – \u20B950,000", "\u20B950,000 – \u20B91,50,000", "\u20B91,50,000 – \u20B93,00,000", "\u20B93,00,000+", "Let's Discuss"];

const HERO_WORDS = ["Weddings", "Pre-Wedding", "Cinematic", "Events", "Digital Invites", "Editorial"];

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&h=1100&fit=crop&q=80",
  "https://images.unsplash.com/photo-1587271407850-8d438ca9fdf2?w=800&h=1100&fit=crop&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1100&fit=crop&q=80",
  "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=1100&fit=crop&q=80",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=1100&fit=crop&q=80",
];
