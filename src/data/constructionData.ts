export interface Project {
  id: string;
  title: string;
  category: '1bhk' | '2bhk' | 'active' | 'duplex';
  categoryLabel: string;
  location: string;
  year: string;
  client: string;
  budget: string;
  duration: string;
  area: string;
  image: string;
  description: string;
  scope: string[];
  keyFeatures: string[];
  specs: {
    cementBags?: string;
    steelTonnage?: string;
    bricksCount?: string;
    rooms?: string;
    handoverTime?: string;
  };
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  badge: string;
  capabilities: string[];
  machinery: string[];
  keyBenefit: string;
  rateEstimate: string;
}

export interface Testimonial {
  id: string;
  name: string;
  village: string;
  district: string;
  houseType: string;
  cost: string;
  rating: number;
  content: string;
  avatar: string;
}

export const COMPANY_STATS = [
  { label: 'Village Homes Built', value: '65+', sub: 'Independent & Rural Houses' },
  { label: 'Transparent Rate', value: '₹1,350/sft', sub: 'With Complete Material (A to Z)' },
  { label: 'On-Time Handover', value: '75-90 Days', sub: 'Quick Slab & House Warming' },
  { label: 'Labor Contract Rate', value: '₹280/sft', sub: 'Skilled Masons & Centering Team' },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sai-nivas-1bhk',
    title: 'Standard 1BHK Village Home (Sai Nivas)',
    category: '1bhk',
    categoryLabel: 'Budget 1BHK Home',
    location: 'Khammam District (Rural Village)',
    year: '2025',
    client: 'Rameshwar Rao & Family',
    budget: '₹5,80,000 (₹5.8 Lakhs)',
    duration: '70 Days',
    area: '480 sq.ft (Hall, Bed, Kitchen, Bath)',
    image: '/images/indiramma_hero.jpg',
    description: 'A strong, attractive single-floor village house built for an affordable family budget. Features an inviting front verandah, boundary compound wall, RCC roof slab with terrace staircase, and vibrant weather-coat paint.',
    scope: [
      'Pillar and plinth beam foundation suitable for village soil',
      'High-strength red clay brick wall construction',
      'RCC flat roof slab with water tank platform and staircase',
      'Full electrical wiring, concealed plumbing & septic tank'
    ],
    keyFeatures: [
      'Cost-effective layout maximizing carpet area',
      'Terracotta front chajja / verandah design',
      'Sturdy steel entrance gate & neat compound wall'
    ],
    specs: {
      cementBags: '240 Bags (53 Grade)',
      steelTonnage: '1.8 Tonnes (Fe 550 TMT)',
      bricksCount: '16,000 Red Bricks',
      rooms: '1 Hall, 1 Bedroom, Kitchen, Attached Bath',
      handoverTime: '70 Days from Bhoomi Pooja'
    },
    featured: true
  },
  {
    id: 'sri-lakshmi-2bhk',
    title: 'Comfort 2BHK Independent Village House',
    category: '2bhk',
    categoryLabel: '2BHK Village Home',
    location: 'Nalgonda District (Village Panchayat)',
    year: '2025',
    client: 'Venkat Reddy',
    budget: '₹9,40,000 (₹9.4 Lakhs)',
    duration: '85 Days',
    area: '720 sq.ft (2BHK + Sitout)',
    image: '/images/village_house_model_2.jpg',
    description: 'An affordable and airy 2BHK village home with a wide front sit-out verandah, tiled portico, vitrified tiles flooring, and branded bathroom fittings. Perfect for growing village families.',
    scope: [
      'Sturdy 9-pillar framed structure with plinth beam',
      'Solid brickwork with smooth cement plastering',
      'Vitrified 2x2 floor tiles and modern bathroom tiling',
      'Teak-wood entrance main door and UPVC sliding windows'
    ],
    keyFeatures: [
      'Wide front sit-out for evening family gatherings',
      'Pooja room provision and Vastu-compliant layout',
      'Rainwater drainage and overhead 1000L water tank'
    ],
    specs: {
      cementBags: '380 Bags (Maha / Ultratech)',
      steelTonnage: '2.8 Tonnes (Jindal / Tata TMT)',
      bricksCount: '24,000 Red Clay Bricks',
      rooms: 'Hall, 2 Bedrooms, Kitchen, Pooja Room, 2 Baths',
      handoverTime: '85 Days Handover'
    },
    featured: true
  },
  {
    id: 'active-slab-village',
    title: 'RCC Roof Slab & Red Brickwork in Progress',
    category: 'active',
    categoryLabel: 'Live Village Construction',
    location: 'Warangal Rural Mandal',
    year: '2026',
    client: 'Suresh & Brothers',
    budget: '₹7,20,000 (With Material Contract)',
    duration: 'Current Stage: Day 35',
    area: '620 sq.ft Built-up',
    image: '/images/village_construction_active.jpg',
    description: 'Real-time active construction showcasing our high-quality red brick masonry, reinforced concrete column pillars, and centering shuttering ready for RCC roof slab casting with electric concrete mixer.',
    scope: [
      'Rigorous foundation cure testing and column casting',
      'Standard 9-inch outer walls and 4.5-inch inner partition walls',
      'Iron prop centering and waterproof shuttering sheet work',
      'Heavy machine-vibrated concrete mix for zero slab leaks'
    ],
    keyFeatures: [
      'Zero leakage guarantee on roof slab',
      'Daily site supervision by our experienced civil team',
      'Transparent material delivery bills shared with owner'
    ],
    specs: {
      cementBags: '310 Bags Estimated',
      steelTonnage: '2.3 Tonnes Fe550',
      bricksCount: '19,500 Bricks',
      rooms: 'Hall, Bed, Kitchen, Store & Bath',
      handoverTime: 'Target Handover: 45 Days Remaining'
    },
    featured: true
  },
  {
    id: 'village-duplex-g1',
    title: 'Modern G+1 Independent Village Duplex',
    category: 'duplex',
    categoryLabel: 'G+1 Two-Floor House',
    location: 'Karimnagar Outskirts Village',
    year: '2025',
    client: 'Anand Kumar',
    budget: '₹16,80,000 (₹16.8 Lakhs)',
    duration: '115 Days',
    area: '1,280 sq.ft (Ground + 1st Floor)',
    image: '/images/duplex_village_home.jpg',
    description: 'An aspirational yet affordable two-floor village home. Ground floor has parking sitout, hall, kitchen, and master bedroom. First floor features a second bedroom, open terrace, and stainless-steel balcony.',
    scope: [
      'Heavy foundation for G+1 vertical load capacity',
      'Exterior texture elevation paint and wooden finish tiles',
      'Internal staircase with safety handrails',
      'Solar water heater piping and dual water tank setup'
    ],
    keyFeatures: [
      'Modern front elevation that stands out in the village',
      'Spacious first-floor terrace for cool evening breezes',
      'Compound wall with decorative pillars and front garden'
    ],
    specs: {
      cementBags: '620 Bags',
      steelTonnage: '4.8 Tonnes',
      bricksCount: '42,000 Bricks',
      rooms: '2 Halls, 3 Bedrooms, 2 Kitchens, 3 Baths',
      handoverTime: '115 Days Handover'
    },
    featured: true
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'budget-turnkey',
    title: 'Affordable Budget Home Construction (1BHK / 2BHK)',
    shortDesc: 'Affordable, solid RCC homes built from foundation to roof within 60 to 75 days.',
    fullDesc: 'We specialize in building budget-friendly, highly durable homes for rural families. We manage the entire build step-by-step so that you get a solid, long-lasting brick and concrete house within your savings.',
    iconName: 'Home',
    badge: 'Budget Specialist',
    capabilities: [
      'Standard 400 to 650 sq.ft Vastu-compliant layouts',
      'Sturdy red brick walls and RCC roof slab with parapet',
      'Regular photo updates and transparent milestone tracking',
      'Septic tank, bathroom plumbing, and electrical lines included'
    ],
    machinery: ['Concrete Mixer Machines', 'Centering Props & Sheets', 'Needle Concrete Vibrators'],
    keyBenefit: 'Completed within 60 to 75 days, fitting right inside family savings.',
    rateEstimate: 'From ₹5.0 Lakhs Total'
  },
  {
    id: 'with-material-contract',
    title: 'With-Material Complete Contract (A to Z)',
    shortDesc: 'You relax while we procure top-quality cement, steel, bricks, sand, tiles, doors, and paint under one fixed rate.',
    fullDesc: 'No need to run around hardware shops or struggle with transport. We supply certified 53-grade cement (Maha/Ultratech), TMT Fe550 steel, kiln-burned red bricks, river/M-sand, vitrified tiles, wiring, and Asian Paints at a transparent square-foot rate.',
    iconName: 'Building2',
    badge: 'Hassle-Free Build',
    capabilities: [
      'Zero hidden material escalation costs',
      'Direct factory cement & steel procurement',
      'Branded plumbing (Sudhakar/Ashirvad) & wiring (Finolex/Polycab)',
      'Move-in ready turnkey handover'
    ],
    machinery: ['Transport Tipper Trucks', 'Laser Level Equipment', 'Automated Bar Benders'],
    keyBenefit: 'Fixed price contract in written agreement — zero stress of rising material rates.',
    rateEstimate: '₹1,350 to ₹1,650 / sq.ft'
  },
  {
    id: 'labor-contract',
    title: 'Labor Only Contract (Workmanship Only)',
    shortDesc: 'You purchase the materials, our experienced village masons and centering teams execute the construction.',
    fullDesc: 'If you already have cement, sand, or family brick kilns, hire our expert labor team. We provide skilled village masons, centering shuttering sheets, steel bar benders, daily curing staff, and site supervision.',
    iconName: 'HardHat',
    badge: 'Affordable Labor',
    capabilities: [
      'Foundation excavation, stone masonry & plinth beam',
      'Red brick wall construction with accurate plumb line',
      'Centering, iron shuttering, and slab casting team',
      'Internal & external smooth sponge plastering'
    ],
    machinery: ['Full Set Centering Sheets', 'Heavy Iron Jack Props', 'Concrete Vibrator'],
    keyBenefit: 'Save on material markups while enjoying professional mason supervision.',
    rateEstimate: '₹280 to ₹350 / sq.ft'
  },
  {
    id: 'rcc-slab-centering',
    title: 'Centering, Shuttering & Roof Slab Casting',
    shortDesc: 'Leak-proof RCC slab casting with iron sheets, accurate steel binding, machine mix, and chemical water-proofing.',
    fullDesc: 'The roof slab is the crown of your home. We use heavy-gauge iron shuttering plates, double-mat TMT rebar binding, high-power electric vibrator compaction, and Dr. Fixit waterproofing to ensure your village house never leaks for 50+ years.',
    iconName: 'Layers',
    badge: 'Zero-Leakage Slab',
    capabilities: [
      'Level check with water-tube & laser instruments',
      'Concealed fan box & electrical PVC conduit piping',
      'Rich 1:1.5:3 concrete mix proportioning',
      '21-day pond water curing guidance'
    ],
    machinery: ['Concrete Mixer Drums', 'Diesel Concrete Lifts', 'Pin Vibrators'],
    keyBenefit: 'Durable, smooth-finish ceiling that requires minimal plaster work.',
    rateEstimate: '₹45 to ₹55 / sq.ft (Centering only)'
  },
  {
    id: 'elevation-compound',
    title: 'Simple Modern Front Elevation & Compound Wall',
    shortDesc: 'Make your village house look attractive with cost-effective front elevation, sit-out pillars, and safety gate.',
    fullDesc: 'Give your home an impressive look without spending lakhs on elevation. We create simple plaster grooves, tile cladding, ornamental pillars for the verandah, sturdy compound walls, and heavy steel entrance gates.',
    iconName: 'Sparkles',
    badge: 'Beautiful Look',
    capabilities: [
      'Front sitout stone or granite seating',
      'Weather-proof Asian Apex exterior paint combinations',
      '5-foot tall safety brick compound wall with coping',
      'Custom steel gates and safety window grills'
    ],
    machinery: ['Tile Cutters', 'Welding Inverter Units', 'Paint Sprayers'],
    keyBenefit: 'Elevates your house value and prestige in the village at minimal cost.',
    rateEstimate: 'From ₹45,000 Package'
  },
  {
    id: 'plumbing-septic',
    title: 'Water Sump, Septic Tank & Sanitation',
    shortDesc: 'Durable 3-chamber village septic tanks, underground water sumps, and complete washroom setups.',
    fullDesc: 'Proper sanitation is critical for health. We construct leak-proof brick/concrete septic tanks suitable for rural soil, underground water storage sumps (5,000L), and install western/Indian toilets with concealed PVC pipelines.',
    iconName: 'ShieldCheck',
    badge: 'Sanitation First',
    capabilities: [
      'Precast or brickwork 3-chamber septic tank design',
      'Underground water storage sump with water-proofing',
      'Direct borewell and municipal water tap connection',
      'Overhead tank pipeline with motor connection'
    ],
    machinery: ['Earth Augers', 'Waterproofing Compound Applicators'],
    keyBenefit: 'No foul smell or groundwater contamination; built to last 30+ years.',
    rateEstimate: 'From ₹35,000 Package'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'G. Rameshwar Rao',
    village: 'Peddapalli Village',
    district: 'Khammam Dist',
    houseType: '1BHK Model House',
    cost: '₹5.8 Lakhs',
    rating: 5,
    content: 'V-Constructions built our single-floor village house in just 70 days. They used real red bricks and genuine Tata steel. The budget was clear from day one and stayed within our savings. Great startup team!',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'B. Venkat Reddy',
    village: 'Choutuppal Rural',
    district: 'Yadadri / Nalgonda',
    houseType: '2BHK Independent Village House',
    cost: '₹9.4 Lakhs',
    rating: 5,
    content: 'We gave them the With-Material contract so we did not have to leave our farming work to buy cement or sand. They provided weekly photos and finished the house warming right on our target date.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'M. Laxman Goud',
    village: 'Hanamkonda Rural',
    district: 'Warangal Dist',
    houseType: 'Labor Contract',
    cost: '₹290 / sq.ft Labor Rate',
    rating: 5,
    content: 'I had my own sand and bricks. V-Constructions supplied the masons and centering equipment. Their slab casting was 100% level without any water stagnation. Highly recommended for village homes.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Plot Visit & Vastu Planning',
    desc: 'Free visit to your village plot. We measure the site, check soil condition, and draw a simple Vastu-compliant 1BHK or 2BHK plan within your budget.',
    metric: '100% Free Site Visit'
  },
  {
    step: '02',
    title: 'Foundation & Basement Level',
    desc: 'Bhoomi Pooja, pillar excavation, stone masonry, plinth beam casting, and gravel filling up to 3 feet height to prevent rainwater entry.',
    metric: 'Stage 1 Completed'
  },
  {
    step: '03',
    title: 'Red Brickwork & Centering',
    desc: 'Strong red clay brick walls with lintel beams over doors and windows. Iron sheet centering and steel rebar binding setup.',
    metric: 'Stage 2 Completed'
  },
  {
    step: '04',
    title: 'RCC Roof Slab Casting',
    desc: 'Machine-mixed concrete with vibrator compaction, electrical conduit piping, and 21-day continuous pond water curing for lifetime strength.',
    metric: 'Roof Slab Cast'
  },
  {
    step: '05',
    title: 'Plastering, Tiles & Handover',
    desc: 'Internal sponge plastering, floor tiles, bathroom fittings, Asian paint coloring, and ready for your family house warming.',
    metric: 'Keys Handed Over!'
  }
];

export const TRUST_HIGHLIGHTS = [
  'NO HIDDEN COSTS (TRANSPARENT QUOTES)',
  '53-GRADE CEMENT & FE550 TMT STEEL',
  'GENUINE RED CLAY BRICKS ONLY',
  'FREE VILLAGE SITE INSPECTION',
  'STEP-BY-STEP STAGE PAYMENTS',
  'WRITTEN CONTRACT AGREEMENT'
];

export const FAQS = [
  {
    q: 'Can you build a simple house within a budget of ₹5 to ₹6 Lakhs?',
    a: 'Yes! Our Budget 1BHK Package (400 - 500 sq.ft) is specifically engineered around ₹5.0 to ₹6.5 Lakhs. We construct a durable 1BHK or compact home with RCC slab roof, brick walls, and toilet that fits inside your family savings.'
  },
  {
    q: 'What is the difference between "With Material" and "Labor Only" contract?',
    a: 'In a "With Material" contract (₹1,350 to ₹1,650/sq.ft), V-Constructions buys and transports all cement, steel, sand, bricks, tiles, paint, and fittings. In "Labor Only" (₹280 to ₹350/sq.ft), you purchase the materials and we provide skilled masons, centering shuttering, bar-benders, and curing staff.'
  },
  {
    q: 'Do you visit our village for free to inspect the plot and give a quote?',
    a: 'Yes, 100%! We provide free village and mandal site visits. We measure your plot, check the approach road and water source, and give you a written estimate on the spot without any obligation.'
  },
  {
    q: 'How many days will it take from Bhoomi Pooja to house warming?',
    a: 'For a 1BHK or 2BHK single floor home, construction takes between 65 to 90 days. We plan slab casting within the first 35-40 days so there is plenty of time for proper water curing, plastering, and finishing.'
  }
];
