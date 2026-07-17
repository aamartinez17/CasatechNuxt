// assets/data/services.js

export const websiteTypes = [
  {
    id: 'service-based',
    label: 'Service-Based Business',
    subtitle: 'Barbershops, Salons, Medspas, & Tattoo Studios',
    icon: 'fa-solid fa-calendar-check',
    gradient: 'from-blue-600 via-indigo-600 to-violet-600',
    description: 'Built to turn website visitors into booked appointments. We simplify your booking process, show off your team\'s talent, and create a modern look that sets you apart from local competitors.',
    mission: 'Make booking easy, showcase your team, and win more local customers.',
    features: [
      { title: 'Easy Booking Integration', desc: 'Embed your calendar system directly so clients never have to leave your site.' },
      { title: 'Team Showcase', desc: 'Display beautiful team profiles, bios, and galleries of their work.' },
      { title: 'Simple Intake Forms', desc: 'Create fast, clean forms to collect client details before they arrive.' }
    ],
    bgIcons: ['fa-solid fa-scissors', 'fa-solid fa-clock', 'fa-solid fa-wand-magic-sparkles', 'fa-solid fa-star'],
    exampleUrl: 'https://omarsbarbershop.com/',
    exampleLabel: "View Omar's Barbershop Live"
  },
  {
    id: 'restaurant',
    label: 'Restaurants & Hospitality',
    subtitle: 'Bistros, Cafes, Bars, & Fine Dining',
    icon: 'fa-solid fa-utensils',
    gradient: 'from-orange-500 via-amber-500 to-red-500',
    description: 'An interactive menu that makes visitors hungry. We design stunning, image-focused layouts that bring your dining experience online and make it easy to order.',
    mission: 'Create a beautiful food showcase, drive online orders, and boost table reservations.',
    features: [
      { title: 'Interactive Menu', desc: 'Clean, easy-to-read menus that load instantly and replace clunky PDF files.' },
      { title: 'Reservation Systems', desc: 'Connect seamlessly with booking tools like OpenTable, Resy, or custom forms.' },
      { title: 'Polished Animations', desc: 'Add smooth visual effects to make your food photography stand out.' }
    ],
    bgIcons: ['fa-solid fa-pizza-slice', 'fa-solid fa-wine-glass', 'fa-solid fa-mug-hot', 'fa-solid fa-plate-wheat'],
    exampleUrl: null,
    exampleLabel: null
  },
  {
    id: 'b2b-corporate',
    label: 'B2B & Corporate',
    subtitle: 'Consultancies, Firms, & Service Agencies',
    icon: 'fa-solid fa-network-wired',
    gradient: 'from-slate-800 via-slate-900 to-indigo-950',
    description: 'Built for speed, clarity, and professionalism. We organize your content so potential clients can find answers and reach your sales team in 3 clicks or less.',
    mission: 'Build professional trust, answer buyer questions, and generate high-quality sales leads.',
    features: [
      { title: '3-Click Navigation', desc: 'Clean layouts engineered so users find exactly what they need instantly.' },
      { title: 'Resource Hub', desc: 'A dedicated, organized space for articles, updates, and business insights.' },
      { title: 'Professional Lead Forms', desc: 'Smart, secure contact forms designed to screen and qualify serious inquiries.' }
    ],
    bgIcons: ['fa-solid fa-shield-halved', 'fa-solid fa-chart-pie', 'fa-solid fa-server', 'fa-solid fa-sitemap'],
    exampleUrl: 'https://elevatedconstructionva.com/',
    exampleLabel: 'View Elevated Construction Live'
  },
  {
    id: 'portfolio',
    label: 'Professional Portfolios',
    subtitle: 'Lawyers, Realtors, Authors, & Coaches',
    icon: 'fa-solid fa-user-tie',
    gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
    description: 'Your central digital hub. We build modern sites that showcase your expertise, highlight your key achievements, and make booking a free consultation completely effortless.',
    mission: 'Show you are the expert, highlight your success, and make booking a chat easy.',
    features: [
      { title: 'Case Studies & Successes', desc: 'Tell the stories of how you helped past clients achieve their goals.' },
      { title: 'Video & Media Integration', desc: 'Add video introductions, podcast links, or articles directly onto your page.' },
      { title: 'Testimonial Showcases', desc: 'Place real, high-impact client reviews right next to your call-to-action buttons.' }
    ],
    bgIcons: ['fa-solid fa-gavel', 'fa-solid fa-house-chimney', 'fa-solid fa-heart-pulse', 'fa-solid fa-certificate'],
    exampleUrl: 'https://fit2protraining.com/',
    exampleLabel: 'View Fit2Pro Live'
  },
  {
    id: 'e-commerce',
    label: 'E-Commerce & Retail',
    subtitle: 'Boutiques, Merchandise, & Digital Products',
    icon: 'fa-solid fa-bag-shopping',
    gradient: 'from-pink-600 via-rose-500 to-orange-500',
    description: 'Fast, secure online stores. We create smooth, reliable shopping experiences that display your items beautifully and make buying quick and easy.',
    mission: 'Reduce shopping cart abandonment, simplify product discovery, and win repeat customers.',
    features: [
      { title: 'Ultra-Fast Checkout', desc: 'Incorporate secure checkouts like Stripe, Apple Pay, and Google Pay.' },
      { title: 'Smart Search & Filters', desc: 'Help shoppers find the exact size, color, or style they want instantly.' },
      { title: 'Buying Triggers', desc: 'Add subtle cues like low-stock alerts and easy cart updates to increase sales.' }
    ],
    bgIcons: ['fa-solid fa-cart-shopping', 'fa-solid fa-credit-card', 'fa-solid fa-tags', 'fa-solid fa-truck-fast'],
    exampleUrl: null,
    exampleLabel: null
  }
];