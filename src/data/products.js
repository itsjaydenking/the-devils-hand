const ph = (label) =>
  `data:image/svg+xml;utf8,` +
  encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0b0b0f"/>
        <stop offset="1" stop-color="#151524"/>
      </linearGradient>
      <filter id="n">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
        <feColorMatrix type="matrix" values="
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 0 0
          0 0 0 .25 0"/>
        <feComposite operator="in" in2="SourceGraphic"/>
      </filter>
    </defs>
    <rect width="1200" height="800" fill="url(#g)"/>
    <rect x="70" y="70" width="1060" height="660" rx="36" fill="none" stroke="#D9D2C2" stroke-width="3" opacity="0.6"/>
    <text x="90" y="150" fill="#D9D2C2" font-family="Inter, Arial" font-size="44" opacity="0.9">THE DEVIL’S HAND</text>
    <text x="90" y="210" fill="#88FF3B" font-family="Roboto Condensed, Arial" font-size="54" opacity="0.95">${label}</text>
    <g opacity="0.55" filter="url(#n)">
      <circle cx="920" cy="210" r="90" fill="#8A1010"/>
      <path d="M880 520c120-40 220-10 280 70" stroke="#88FF3B" stroke-width="10" fill="none" opacity="0.55"/>
      <path d="M160 560c120-140 260-160 390-80" stroke="#D9D2C2" stroke-width="8" fill="none" opacity="0.35"/>
    </g>
    <text x="90" y="690" fill="#D9D2C2" font-family="Inter, Arial" font-size="22" opacity="0.75">Lefty-friendly gear — demo visuals</text>
  </svg>
`);

export const CATEGORIES = [
  "Writing",
  "Kitchen",
  "Gaming",
  "Music",
  "Office",
  "Misc",
];

export const products = [
  {
    id: "lefty-blade-scissors",
    name: "Lefty Blade Scissors",
    price: 14.99,
    category: "Office",
    description: "Cut like a curse, clean like a ritual.",
    features: [
      "True left-hand blades",
      "Soft-grip handles",
      "Stays sharp on paper + fabric",
    ],
    leftyBenefit:
      "Blades align for left-hand pressure—no folding paper, no fighting physics.",
    image: ph("Lefty Blade Scissors"),
  },
  {
    id: "southpaw-fountain-pen",
    name: "Southpaw Fountain Pen",
    price: 29.0,
    category: "Writing",
    description:
      "Ink that doesn’t smear when you drag your destiny across the page.",
    features: [
      "Fast-dry ink converter",
      "Grip tuned for lefties",
      "Matte-black barrel",
    ],
    leftyBenefit:
      "Fast-dry flow helps reduce smudging for overwriters/sidewriters.",
    image: ph("Southpaw Fountain Pen"),
  },
  {
    id: "sigil-gel-pen-set",
    name: "Sigil Gel Pen Set (6)",
    price: 12.5,
    category: "Writing",
    description: "Mark your margins like a zine priest.",
    features: ["Quick-dry gel", "Comfort grip", "High-contrast ink"],
    leftyBenefit: "Reduced smear time + angled grip for left-hand comfort.",
    image: ph("Sigil Gel Pen Set"),
  },
  {
    id: "rebel-notebook-left-bind",
    name: "Rebel Notebook (Left Bind)",
    price: 11.99,
    category: "Writing",
    description: "No spiral bite. No knuckle tattoos. Just pages.",
    features: ["Binding on the right edge", "Lay-flat paper", "Dot-grid"],
    leftyBenefit:
      "Right-side binding keeps your left hand off rings while writing.",
    image: ph("Rebel Notebook"),
  },
  {
    id: "devils-hand-mouse",
    name: "Devil’s Hand Mouse (Ambi)",
    price: 24.99,
    category: "Gaming",
    description: "Clicks like a switchblade. Smooth like a spell.",
    features: [
      "Ambidextrous shape",
      "Side buttons both sides",
      "Grippy matte shell",
    ],
    leftyBenefit:
      "Side buttons accessible to left-hand grip without remapping gymnastics.",
    image: ph("Devil’s Hand Mouse"),
  },
  {
    id: "lefty-gaming-keypad",
    name: "Hex-Ward Gaming Keypad",
    price: 39.99,
    category: "Gaming",
    description: "A rune-board for raids and late-night chaos.",
    features: ["Programmable keys", "Tactile switches", "Compact footprint"],
    leftyBenefit:
      "Places key clusters where your left hand lives—no awkward reach.",
    image: ph("Hex-Ward Gaming Keypad"),
  },
  {
    id: "mirror-cooking-spatula",
    name: "Mirror-Edge Spatula",
    price: 9.99,
    category: "Kitchen",
    description: "Flip pancakes. Flip the script.",
    features: ["Left-friendly bevel", "Heat safe", "Non-scratch edge"],
    leftyBenefit:
      "Bevel works with left-hand angles for cleaner lifts + flips.",
    image: ph("Mirror-Edge Spatula"),
  },
  {
    id: "southpaw-peeler",
    name: "Southpaw Peeler",
    price: 8.5,
    category: "Kitchen",
    description: "Peel like you mean it. No shredded knuckles.",
    features: [
      "Left-hand blade orientation",
      "Ergonomic handle",
      "Stainless steel",
    ],
    leftyBenefit:
      "Blade faces the correct direction for left-hand pull strokes.",
    image: ph("Southpaw Peeler"),
  },
  {
    id: "lefty-chef-knife",
    name: 'Lefty Chef Knife (8")',
    price: 54.0,
    category: "Kitchen",
    description: "A kitchen talisman with a sharp opinion.",
    features: ["Asymmetric grind", "Balanced weight", "Easy hone edge"],
    leftyBenefit:
      "Grind + bevel tuned so cuts track straight with left-hand pressure.",
    image: ph("Lefty Chef Knife"),
  },
  {
    id: "reverse-measuring-cups",
    name: "Reverse-Measuring Cups",
    price: 16.0,
    category: "Kitchen",
    description: "Read the marks without doing yoga over the sink.",
    features: ["Left-facing markings", "Nesting set", "Dishwasher safe"],
    leftyBenefit:
      "Measurement text faces your viewpoint when held in left hand.",
    image: ph("Reverse-Measuring Cups"),
  },
  {
    id: "lefty-guitar-picks",
    name: "Lefty Guitar Picks (13)",
    price: 7.77,
    category: "Music",
    description: "Strum like a séance. Loud, clean, undeniable.",
    features: ["Textured grip", "Mixed thickness", "Pocket tin"],
    leftyBenefit: "Grip texture optimized for left-hand orientation and angle.",
    image: ph("Lefty Guitar Picks"),
  },
  {
    id: "southpaw-ukulele-strap",
    name: "Southpaw Strap (Uke/Guitar)",
    price: 18.0,
    category: "Music",
    description: "Hold your instrument like you own the room.",
    features: [
      "Adjustable",
      "Soft woven",
      "Lefty-friendly strap button alignment",
    ],
    leftyBenefit: "Hardware layout supports common lefty instrument setups.",
    image: ph("Southpaw Strap"),
  },
  {
    id: "lefty-wrist-guard",
    name: "Ink-Ward Wrist Guard",
    price: 10.99,
    category: "Writing",
    description: "A tiny armor plate for smudge-prone prophets.",
    features: ["Breathable fabric", "Low-friction surface", "One-size stretch"],
    leftyBenefit:
      "Reduces drag and smudging when your hand moves across fresh ink.",
    image: ph("Ink-Ward Wrist Guard"),
  },
  {
    id: "right-side-clipboard",
    name: "Right-Side Clipboard",
    price: 13.25,
    category: "Office",
    description:
      "Clip on the right. Write with the left. Simple, savage, correct.",
    features: ["Right-edge clip", "Strong spring", "Lightweight board"],
    leftyBenefit: "No clip-bump while writing with your left hand.",
    image: ph("Right-Side Clipboard"),
  },
  {
    id: "lefty-tape-measure",
    name: "Backwards Tape Measure",
    price: 15.0,
    category: "Misc",
    description: "Numbers that face you. Reality that obeys you.",
    features: ["Reverse-reading scale", "Lock button", "Belt clip"],
    leftyBenefit: "Read measurements while holding + pulling with left hand.",
    image: ph("Backwards Tape Measure"),
  },
  {
    id: "sigil-stamp-set",
    name: "Sigil Stamp Set",
    price: 21.0,
    category: "Misc",
    description: "Stamp the mundane. Consecrate the receipts.",
    features: ["4 stamps + ink pad", "Gritty imprint", "Reusable tin"],
    leftyBenefit: "Grip and layout keep impressions steady in left hand.",
    image: ph("Sigil Stamp Set"),
  },
  {
    id: "lefty-desk-mat",
    name: "Occult Desk Mat (Left Layout)",
    price: 22.0,
    category: "Office",
    description: "A work surface like a ritual circle: contained chaos.",
    features: ["Left-zone guide marks", "Water resistant", "Non-slip base"],
    leftyBenefit: "Zones placed for left-handed workflows (mouse/notes/tools).",
    image: ph("Occult Desk Mat"),
  },
  {
    id: "devils-hand-tote",
    name: "Devil’s Hand Tote",
    price: 17.0,
    category: "Misc",
    description: "Carry your contraband stationery like a hymn.",
    features: ["Heavy canvas", "Screen-print style graphic", "Wide straps"],
    leftyBenefit:
      "Strap drop and pocket placement feel natural on left shoulder/carry.",
    image: ph("Devil’s Hand Tote"),
  },
];
