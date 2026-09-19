'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import MobileMenu from '../../components/MobileMenu'
import Footer from '../../components/Footer'
import WhatsAppFloat from '../../components/WhatsAppFloat'
import SearchableSelect from '../../components/SearchableSelect'

const metalOptions = [
  '24K Gold (Pure / 999)', '22K Gold (916)', '18K Gold (750)', '14K Gold (585)', '10K Gold (417)',
  'Rose Gold 18K', 'Rose Gold 14K', 'White Gold 18K', 'White Gold 14K',
  '999 Pure Silver', '925 Sterling Silver', '900 Coin Silver',
  'German Silver / Nickel Silver', 'Oxidised Silver',
  'Platinum 950', 'Platinum 900', 'Palladium',
  'Brass (Gold Plated)', 'Copper (Oxidised)',
  'Titanium', 'Tungsten', 'Stainless Steel',
  'Mixed / Two Metals', 'Not Sure — Need Guidance'
]

const occasionOptions = [
  'Wedding (Shaadi)', 'Engagement / Ring Ceremony', 'Bridal (Dulhan)',
  'Birthday', 'Anniversary', 'Valentine\'s Day', 'Karva Chauth',
  'Diwali', 'Dussehra', 'Navratri / Garba', 'Eid', 'Christmas', 'Pongal', 'Onam', 'Baisakhi', 'Raksha Bandhan', 'Karwa Chauth',
  'Muhurat / Griha Pravesh', 'Baby Shower / Godh Bharai',
  'Graduation', 'Retirement', 'House Warming',
  'Daily Wear', 'Office / Work Wear',
  'Gift for Someone', 'Self Purchase',
  'Religious / Puja', 'Temple Visit',
  'Party / Cocktail / Reception',
  'Other'
]

const designStyleOptions = [
  'Traditional Indian', 'Kundan', 'Polki', 'Meenakari (Enamel Work)',
  'Temple Jewellery', 'Jadau', 'Thewa', 'Filigree',
  'Modern / Contemporary', 'Minimalist', 'Geometric',
  'Vintage / Antique', 'Heritage / Royal',
  'Indo-Western Fusion', 'Bohemian',
  'Bridal / Heavy', 'Celebrity Inspired',
  'Victorian', 'Art Deco', 'Floral', 'Nature Inspired',
  'Personalised / Name / Initial',
  'Religious / Spiritual (Om, Ganesh, Cross, etc.)',
  'Bengali', 'Rajasthani', 'South Indian', 'Punjabi', 'Gujarati',
  'Custom / Unique Design'
]

const finishOptions = [
  'High Polish (Mirror Finish)', 'Mirror + Sandblast Combination',
  'Matte Finish', 'Satin / Brushed', 'Brushed + Polished Edge',
  'Hammered', 'Textured / Stippled', 'Sandblast',
  'Rose Gold Plated', 'Rhodium Plated', 'Gold Plated on Silver',
  'Two-Tone (Gold + Silver)', 'Three-Tone', 'Black Rhodium',
  'Oxidised / Blackened', 'Antiqued / Distressed',
  'Diamond Cut Pattern', 'Milgrain Edge', 'Pave Setting Finish',
  'Vermeil (Gold over Sterling)', 'Gold Vermeil Heavy',
  'Enamel Coating (Meenakari)', 'Colored Lac Inlay',
  'Not Sure — Need Guidance'
]

const stoneOptions = [
  'No Stones (Plain Gold/Silver)',
  'Diamond — Round Brilliant', 'Diamond — Princess Cut', 'Diamond — Oval Cut',
  'Diamond — Emerald Cut', 'Diamond — Pear Cut', 'Diamond — Marquise',
  'Diamond — Cushion Cut', 'Diamond — Heart Shape', 'Diamond — Baguette',
  'Certified Diamond (IGI)', 'Certified Diamond (GIA)',
  'Ruby — Natural', 'Certified Ruby', 'Star Ruby', 'Burmese Ruby',
  'Emerald — Natural', 'Certified Emerald', 'Colombian Emerald',
  'Sapphire — Blue', 'Sapphire — Pink', 'Sapphire — Yellow', 'Sapphire — White', 'Certified Sapphire',
  'Pearl — South Sea', 'Pearl — Freshwater', 'Pearl — Akoya', 'Pearl — Keshi', 'Pearl — Basra',
  'Polki (Uncut Diamond)', 'Kundan Stone',
  'Cubic Zirconia (CZ)', 'American Diamond', 'Swarovski Crystal',
  'Moissanite', 'Lab-Grown Diamond',
  'Meenakari (Enamel Work)', 'Resin / Colored',
  'Amethyst', 'Alexandrite', 'Aquamarine', 'Garnet', 'Peridot',
  'Citrine', 'Topaz — Blue', 'Topaz — Imperial', 'Topaz — White',
  'Tanzanite', 'Opal — Ethiopian', 'Opal — Australian', 'Fire Opal',
  'Moonstone', 'Labradorite', 'Lapis Lazuli', 'Turquoise',
  'Coral — Red', 'Coral — Pink', 'Onyx — Black', 'Onyx — White',
  'Cat\'s Eye', 'Bloodstone', 'Jade — Green', 'Jade — Lavender',
  'Granite / Semi-Precious Mix',
  'Artificial / Imitation Stones', 'Plastic / Acrylic Beads',
  'Combination (Mixed Stones)', 'Colored Stones (Specify Below)',
  'Not Sure — Need Guidance'
]

const weightOptions = [
  'Very Light (under 1g)', 'Light (1–3g)',
  'Medium-Light (3–7g)', 'Medium (7–15g)',
  'Medium-Heavy (15–25g)', 'Heavy (25–40g)',
  'Very Heavy (40–60g)', 'Bridal Heavy (60–100g)',
  'Extra Heavy Bridal (100g+)', 'Bridal Showpiece (200g+)',
  'I\'ll Specify Exact Weight Below', 'Not Sure — Need Guidance'
]

const occasionForOptions = [
  'Bride', 'Groom',
  'Bridesmaid', 'Groomsmen',
  'Mother of Bride', 'Mother of Groom',
  'Father of Bride', 'Father of Groom',
  'Sister of Bride/Groom', 'Brother of Bride/Groom',
  'Grandmother', 'Grandfather',
  'Daughter', 'Son', 'Niece', 'Nephew',
  'Friend', 'Colleague',
  'Myself (Self)', 'Couple / Pair Set',
  'Child / Kids',
  'Other'
]

const deadlineOptions = [
  'Urgent — within 2–3 days', 'Quick — within 1 week',
  '1–2 Weeks', '2–4 Weeks',
  '1–2 Months', '2–3 Months',
  'Before a specific date (mention below)',
  'No Rush (whenever ready)'
]

const stoneColourOptions = [
  'Red (Ruby)', 'Deep Red (Blood Ruby)', 'Pink (Pink Ruby / Tourmaline)',
  'Green (Emerald)', 'Light Green (Peridot)', 'Dark Green (Tsavorite)',
  'Blue (Sapphire)', 'Light Blue (Aquamarine)', 'Royal Blue (Tanzanite)',
  'White (Diamond / Pearl)', 'Ivory / Cream',
  'Yellow (Citrine / Topaz)', 'Orange (Coral / Fire Opal)',
  'Purple (Amethyst)', 'Lavender', 'Lilac',
  'Black (Onyx)', 'Grey (Labradorite)',
  'Multi-colour (Rainbow)', 'Gradient / Ombré',
  'No Stones — Plain Metal', 'Not Sure — Surprise Me'
]

const motifOptions = [
  'Peacock', 'Lotus / Kamal', 'Mango / Paisley', 'Floral (Generic)',
  'Leaf / Vine / Creeper', 'Tree of Life', 'Sun / Star / Moon',
  'Om', 'Ganesh / Lord Ganesha', 'Krishna / Radha', 'Shiva / Nataraj',
  'Allah / Islamic Calligraphy', 'Cross / Crucifix', 'Khanda (Sikh)',
  'Buddha', 'Sai Baba', 'Durga / Lakshmi / Saraswati',
  'Swastik', 'Trishul', 'Hanuman',
  'Elephant', 'Horse', 'Butterfly', 'Bird / Swan / Parrot',
  'Heart', 'Infinity', 'Name / Initial Letter',
  'Geometric — Circle', 'Geometric — Triangle', 'Geometric — Hexagon',
  'Jaali / Lattice / Net', 'Checkered / Grid',
  'Temple Architecture', 'Dome / Mughal Arch',
  'Bridal Couple', 'Doli / Baraat Scene',
  'Custom Pattern (Describe Below)', 'No Specific Motif'
]

const categoryConfig = {
  ring: {
    title: 'Ring',
    extraFields: [
      { name: 'ringSize', label: 'Ring Size (India / US / UK)', options: [
        'India 6 / US 2 / UK F', 'India 7 / US 2.75 / UK H', 'India 8 / US 3.5 / UK J.5',
        'India 9 / US 4 / UK K.5', 'India 10 / US 5 / UK L.5', 'India 11 / US 5.5 / UK M',
        'India 12 / US 6 / UK N', 'India 13 / US 6.5 / UK O', 'India 14 / US 7 / UK P',
        'India 15 / US 7.5 / UK Q', 'India 16 / US 8 / UK R', 'India 17 / US 8.5 / UK S',
        'India 18 / US 9 / UK T', 'India 19 / US 9.5 / UK U', 'India 20 / US 10 / UK V',
        'Adjustable / Free Size', 'Not Sure — will measure later'
      ]},
      { name: 'ringStyle', label: 'Ring Type / Style', options: [
        'Solitaire (Single Stone)', 'Halo (Stone Surround)',
        'Three Stone / Trinity', 'Five Stone / Eternity Band',
        'Band (Plain Gold)', 'Stackable Ring',
        'Cocktail / Statement', 'Signet / Thumb Ring',
        'Promise Ring', 'Engagement Ring', 'Wedding Band',
        'Couple Ring / Pair', 'Adjustable Ring',
        'Vintage / Heirloom Style', 'Antique',
        'Mood Ring', 'Twisted / Braided',
        'Birthstone Ring', 'Name Ring / Personalised',
        'Religious (Om, Cross, Khanda, Ganesh)',
        'Men\'s Band', 'Unisex Design',
        'Other'
      ]},
    ],
  },
  necklace: {
    title: 'Necklace',
    extraFields: [
      { name: 'length', label: 'Necklace Length', options: [
        'Collar (12–13")', 'Choker (14–16")', 'Princess (17–19")',
        'Matinee (20–24")', 'Opera (24–30")', 'Rope / Lariat (30–36")',
        'Sautoir (36"+)', 'Bib / Statement', 'Lakshmi Haar (Multi-layer)',
        'Adjustable Length', 'Not Sure'
      ]},
      { name: 'neckStyle', label: 'Necklace Type / Style', options: [
        'Chain (Plain)', 'Pendant Chain', 'Layered / Rani Haar',
        'Choker', 'Collar Necklace', 'Bib Necklace',
        'Temple Necklace', 'Bridal Set Necklace',
        'Kundan Necklace', 'Polki Necklace', 'Jadau Necklace',
        'Mala / Beaded (Rudraksha, Tulsi, Crystal)',
        'Pearl Mala', 'Gold Ball Chain',
        'Mangalsutra Necklace', 'Black Bead Necklace',
        'Name / Initial Pendant Chain',
        'Religious (Om, Ganesh, Cross, Krishna)',
        'Mango Mala / Paisley', 'Coin Necklace (Kasumala)',
        'Haar / Long Necklace', 'Satlada (7-layer)',
        'Choker + Haar Set', 'Bridal Choker Set',
        'Men\'s Chain / Pendant', 'Unisex',
        'Other'
      ]},
      { name: 'numStrands', label: 'Number of Strands / Layers', options: [
        'Single Strand', 'Double Strand', 'Triple Strand',
        'Five Strand (Panchlada)', 'Seven Strand (Satlada)',
        'Multi-Layer (7+)', 'Not Applicable', 'Not Sure'
      ]},
    ],
  },
  earring: {
    title: 'Earrings',
    extraFields: [
      { name: 'earringType', label: 'Earring Type / Style', options: [
        'Studs (Small)', 'Studs (Large / Cocktail)',
        'Drops / Danglers', 'Jhumkas (Bell-Shaped)',
        'Jhumka with Chain (Sahara)',
        'Hoops (Small)', 'Hoops (Large)', 'Huggies',
        'Chandbalis (Moon-Shaped)', 'Kanchain (Ear Chain)',
        'Clusters', 'Thread / Tassel',
        'Chandelier', 'Ear Cuff',
        'Lehariya / Linear Drop', 'Mesh / Jaali',
        'Antique / Temple', 'Kundan', 'Polki',
        'Meenakari (Enamel)', 'Filigree',
        'Diamond Stud', 'Pearl Drop',
        'Traditional South Indian', 'Bengali Jhumko',
        'Oxidised / Silver', 'Boho / Bohemian',
        'Clip-On (No Piercing)', 'Magnetic',
        'Wedding / Bridal Heavy', 'Daily Wear Simple',
        'Men\'s Earrings', 'Unisex',
        'Other'
      ]},
      { name: 'closure', label: 'Closure / Fitting Type', options: [
        'Push Back (Butterfly)', 'Screw Back',
        'Fish Hook', 'Lever Back', 'Latch Back',
        'Clip On (Spring)', 'Magnetic Clip',
        'Kidney Wire', 'Continuous Wire',
        'Post & Butterfly', 'Not Sure'
      ]},
      { name: 'pairOrSingle', label: 'Pair or Single', options: [
        'Pair (Both Ears)', 'Single (Left)', 'Single (Right)',
        'Pair + Extra Backs', 'Not Applicable'
      ]},
    ],
  },
  bangle: {
    title: 'Bangle',
    extraFields: [
      { name: 'bangleSize', label: 'Bangle Size', options: [
        '2.4 (52mm / Small)', '2.6 (56mm / Medium)', '2.8 (60mm / Standard)',
        '2.10 (64mm / Large)', '2.12 (68mm / Extra Large)',
        'Adjustable / Openable', 'Will measure and tell', 'Not Sure'
      ]},
      { name: 'bangleStyle', label: 'Bangle Type / Design', options: [
        'Plain Gold (Smooth)', 'Gold with Engraving',
        'Filigree / Jaali Work', 'Kundan Bangle',
        'Polki Bangle', 'Jadau Bangle',
        'Stone Studded', 'Diamond Studded',
        'Meenakari (Enamel)', 'Thewa Work',
        'Antique / Vintage', 'Temple Design',
        'Churra Set (Thin Bangles Set)', 'Kara (Thick Single)',
        'Twisted / Braided', 'Textured / Hammered',
        'Oxidised Silver', 'Glass Bangles (Traditional)',
        'Lac Bangles', 'Plastic / Fashion',
        'Bridal Set (Matching Pair)', 'Pair of Two',
        'Men\'s Kada', 'Unisex',
        'Other'
      ]},
      { name: 'quantity', label: 'Quantity', options: [
        '1 Piece (Single)', 'Set of 2', 'Set of 4',
        'Set of 6', 'Set of 8', 'Set of 12 (Churra)',
        'Set of 21 / 24 / 51 (Bridal Churra)',
        'Custom Number (Mention Below)', 'Not Sure'
      ]},
    ],
  },
  chain: {
    title: 'Chain',
    extraFields: [
      { name: 'chainLength', label: 'Chain Length', options: [
        '14 inch (Choker)', '16 inch (Choker/Princess)',
        '18 inch (Princess)', '20 inch (Matinee)',
        '22 inch (Matinee)', '24 inch (Opera)',
        '26 inch', '30 inch (Rope)', '36 inch (Sautoir)',
        'Adjustable (Slider Chain)', 'Not Sure'
      ]},
      { name: 'chainStyle', label: 'Chain Type / Pattern', options: [
        'Cable / Link', 'Box Chain', 'Rope Chain',
        'Figaro Chain', 'Singapore Chain', 'Curb Chain',
        'Franco Chain', 'Wheat / Spiga Chain',
        'Serpentine / Snake Chain', 'Ball Chain',
        'Prince of Wales', 'Anchor / Marine',
        'Herringbone', 'Cartier / Cuban Link',
        'Mangalsutra Chain', 'Thor\'s Hammer',
        'Multi-Strand Chain', 'Beaded Chain',
        'Diamond Cut Chain', 'Twisted Rope',
        'Cross Chain', 'Heart Link',
        'Men\'s Chain (Heavy)', 'Women\'s Chain (Delicate)',
        'Other'
      ]},
      { name: 'thickness', label: 'Thickness / Width', options: [
        'Extra Thin / Fine (under 1mm)', 'Thin / Delicate (1–2mm)',
        'Medium (2–4mm)', 'Thick (4–6mm)',
        'Heavy / Bold (6mm+)', 'Custom Width', 'Not Sure'
      ]},
    ],
  },
  pendant: {
    title: 'Pendant',
    extraFields: [
      { name: 'size', label: 'Pendant Size', options: [
        'Tiny / Micro (<0.5cm)', 'Small (0.5–1cm)',
        'Medium-Small (1–2cm)', 'Medium (2–3cm)',
        'Large (3–5cm)', 'Oversized (5–7cm)',
        'Statement Piece (7cm+)', 'Not Sure'
      ]},
      { name: 'pendantStyle', label: 'Pendant Type / Design', options: [
        'Religious — Om', 'Religious — Ganesh', 'Religious — Krishna', 'Religious — Sai Baba', 'Religious — Jesus Cross', 'Religious — Islamic', 'Religious — Khanda (Sikh)', 'Religious — Buddha',
        'Heart Shape', 'Infinity Symbol',
        'Floral / Flower', 'Leaf / Nature',
        'Geometric — Circle', 'Geometric — Square', 'Geometric — Triangle',
        'Star / Moon / Sun',
        'Name / Initial Letter', 'Custom Text / Word',
        'Photo Pendant (Custom)', 'Silhouette Pendant',
        'Locket (Opens)', 'Key Pendant',
        'Vintage / Antique', 'Filigree',
        'Kundan', 'Polki', 'Meenakari',
        'Diamond Solitaire', 'Pearl Drop',
        'Crystal / Gemstone', 'Birthstone',
        'Animal / Bird', 'Butterfly', 'Feather',
        'Cross / Crucifix', 'Evil Eye',
        'Modern / Abstract', 'Abstract Art',
        'Enamel Colored', 'Carved / Sculpted',
        'Men\'s Pendant', 'Unisex',
        'Other'
      ]},
      { name: 'withChain', label: 'Include Chain with Pendant?', options: [
        'Yes, with matching chain', 'Yes, with separate chain',
        'Pendant only (No chain)', 'I have a chain already',
        'Not Sure'
      ]},
    ],
  },
  kada: {
    title: 'Kada / Bracelet',
    extraFields: [
      { name: 'wristSize', label: 'Wrist Size / Circumference', options: [
        'Small (5.5" / 14cm)', 'Medium (6.5" / 16.5cm)',
        'Standard (7" / 18cm)', 'Large (7.5" / 19cm)',
        'Extra Large (8" / 20.5cm)', 'XXL (8.5"+ / 21.5cm+)',
        'Adjustable / Openable', 'Will Measure & Tell', 'Not Sure'
      ]},
      { name: 'kadaStyle', label: 'Type / Design', options: [
        'Plain Gold Kada', 'Plain Silver Kada',
        'Punjabi Sikh Kada', 'Traditional Rajasthani',
        'Kundan Kada', 'Polki Kada', 'Filigree Kada',
        'Temple Design Kada', 'Meenakari Kada',
        'Charm Bracelet', 'Link Bracelet',
        'Tennis Bracelet (Diamond)', 'Bangle-Style Bracelet',
        'Chain Bracelet', 'Cuff (Open)', 'Bangle (Closed)',
        'Twisted / Braided', 'Hammered',
        'Oxidised / Antique Silver', 'German Silver',
        'Thread / Rakhi Style', 'Friendship Bracelet',
        'Pearl Bracelet', 'Beaded Bracelet',
        'ID / Name Engraved', 'Religious (Om, Cross)',
        'Men\'s Heavy Kada', 'Women\'s Delicate',
        'Adjustable / Sliding', 'Other'
      ]},
      { name: 'openOrClosed', label: 'Open or Closed Style', options: [
        'Openable (Hinged)', 'Open Cuff (Flexible)',
        'Fixed / Closed (Solid Bangle)', 'Adjustable / Expandable',
        'Sliding Knot / Pull', 'Magnetic Clasp',
        'Not Sure'
      ]},
    ],
  },
  'maang-tikka': {
    title: 'Maang Tikka',
    extraFields: [
      { name: 'tikkaStyle', label: 'Style / Type', options: [
        'Simple Single Tikka', 'Bridal Heavy Tikka',
        'Matha Patti (With Side Chains)', 'Double Matha Patti',
        'Borla (Rajasthani Round)', 'Pasa (Side Tikka)',
        'Chain Tikka (Multiple Chains)', 'Oxidised Tikka',
        'Kundan Tikka', 'Polki Tikka', 'Diamond Tikka',
        'Pearl Tikka', 'Meenakari Tikka',
        'Daily Wear / Light', 'Festive / Party',
        'South Indian Style', 'Bengali Style',
        'Ottani / Small Tikka', 'Adjustable',
        'Unisex', 'Other'
      ]},
      { name: 'pendantShape', label: 'Pendant / Center Piece Shape', options: [
        'Round (Borla)', 'Oval', 'Teardrop / Pear Drop',
        'Floral / Flower', 'Sun / Star', 'Moon / Crescent',
        'Diamond / Square', 'Triangular',
        'Leaf / Paisley', 'Peacock', 'Lotus',
        'Heart', 'Cross / Religious',
        'Antique Coin', 'Kundan Setting',
        'Custom Shape (Describe Below)', 'Not Sure'
      ]},
      { name: 'withChains', label: 'Side Chains / Matha Patti?', options: [
        'No, single tikka only', 'Yes, with 1 matha patti (each side)',
        'Yes, with double matha patti', 'Yes, with 3+ chains',
        'Bridal full matha patti set', 'Not Sure'
      ]},
    ],
  },
  'nose-pin': {
    title: 'Nose Pin',
    extraFields: [
      { name: 'noseType', label: 'Type / Fitting', options: [
        'Push-Back Stud', 'Screw Type (Traditional)',
        'L-Shape', 'U-Shape',
        'Ring / Nath (Bridal)', 'Big Nath (Bengali/Marathi)',
        'Clip-On (No Piercing)', 'Magnetic',
        'Septum Ring', 'Septum Clicker',
        'Hoop Nose Ring', 'Twisted Wire',
        'Daily Wear Stud', 'Diamond Nose Pin',
        'Pearl Nose Pin', 'Kundan / Polki',
        'Oxidised Nose Pin', 'Gold Wire',
        'Other'
      ]},
      { name: 'size', label: 'Size / Diameter', options: [
        'Micro / Tiny (<1.5mm)', 'Extra Small (1.5–2mm)',
        'Small (2–3mm)', 'Medium (3–4mm)',
        'Medium-Large (4–5mm)', 'Large (5–7mm)',
        'Extra Large (7–10mm)',
        'Bridal Nath (10mm+)', 'Adjustable',
        'Not Sure'
      ]},
      { name: 'noseSide', label: 'Nose Side', options: [
        'Left Nostril', 'Right Nostril',
        'Left Septum', 'Right Septum',
        'Both Septum', 'Not Sure'
      ]},
    ],
  },
  anklet: {
    title: 'Anklet',
    extraFields: [
      { name: 'ankleSize', label: 'Ankle Size / Circumference', options: [
        'Small (8.5" / 21.5cm)', 'Medium (9.5" / 24cm)',
        'Standard (10" / 25.5cm)', 'Large (11" / 28cm)',
        'Extra Large (12" / 30.5cm)', 'Adjustable / Extendable',
        'Will Measure & Tell', 'Not Sure'
      ]},
      { name: 'ankletStyle', label: 'Type / Design', options: [
        'Plain Chain (Simple)', 'With Bells (Ghungroo)',
        'With Charms / Drops', 'With Pearls',
        'Beaded Anklet', 'Thread / Cotton',
        'Braided / Woven',
        'Traditional Silver (Indian)', 'Oxidised Silver',
        'Gold Plated', 'Rose Gold',
        'Crystal Anklet', 'Pearl Anklet',
        'Evil Eye Anklet', 'Name / Initial',
        'Kundan Anklet', 'Meenakari',
        'Pair Set (Matching)', 'Daily Wear (Light)',
        'Bridal Anklet (Heavy)', 'Festive / Wedding',
        'Men\'s Anklet', 'Unisex',
        'Other'
      ]},
      { name: 'pairOrSingle', label: 'Pair or Single', options: [
        'Pair (Both Legs)', 'Single (One Leg)',
        'Set of 2 + Extra', 'Not Sure'
      ]},
    ],
  },
  mangalsutra: {
    title: 'Mangalsutra',
    extraFields: [
      { name: 'mangalStyle', label: 'Style / Design', options: [
        'Daily Wear (Light / Minimal)', 'Modern Minimal',
        'Traditional Maharashtrian (Vati)', 'South Indian (Long)',
        'North Indian (Short)', 'Bengali (Shakha Pola)',
        'Gujarati Style', 'Punjabi Style',
        'Diamond Studded', 'Gold & Pearl',
        'Gold Only (No Black Beads)', 'Bridal Heavy',
        'Double Layered', 'Multi Strand',
        'Kundan / Polki', 'Temple Design',
        'Western Style Mangalsutra', 'Name / Personalised',
        'Couple Set (His + Hers)', 'Locket Style',
        'Coin / Gold Ball', 'Heart Design',
        'Other'
      ]},
      { name: 'length', label: 'Length', options: [
        'Very Short (<12") — Choker Style', 'Short (12–18")',
        'Medium (18–24")', 'Long (24–30")',
        'Extra Long (30–36")', 'Lariat / Y-Chain',
        'Adjustable (Slider)', 'Not Sure'
      ]},
      { name: 'blackBeads', label: 'Black Beads / Vati Design', options: [
        'Traditional Black Beads (All Around)', 'Minimal Black Beads (Center Only)',
        'No Black Beads (Pure Gold)', 'Black Beads + Gold Balls',
        'Black Beads + Diamond', 'Black Beads + Pearl',
        'Double Row Black Beads', 'White + Black Beads',
        'Colored Beads', 'Not Applicable', 'Not Sure'
      ]},
    ],
  },
  'bridal-set': {
    title: 'Bridal Set',
    extraFields: [
      { name: 'pieces', label: 'Set Pieces / Combo', options: [
        'Necklace + Earrings', 'Necklace + Earrings + Tikka',
        'Necklace + Earrings + Tikka + Bangles',
        'Necklace + Earrings + Tikka + Bangles + Ring',
        '5-Piece Bridal Set', '7-Piece Bridal Set',
        '9-Piece Bridal Set', 'Full Bridal Set (10–12 Pieces)',
        'Complete Solah Shringar Set (16 Pieces)',
        'Choker + Rani Haar Set + Earrings + Tikka',
        'Custom Selection (Mention Pieces Below)', 'Not Sure'
      ]},
      { name: 'bridalStyle', label: 'Bridal Style / Craft', options: [
        'Kundan', 'Polki', 'Jadau', 'Meenakari',
        'Temple (South Indian)', 'Diamond',
        'Gold & Pearl', 'Antique Gold',
        'Victorian', 'Rose Gold',
        'Oxidised / Boho Bridal',
        'Bengali Traditional', 'Rajasthani', 'Punjabi',
        'Mughal / Royal', 'Modern Minimalist Bridal',
        'Indo-Western Fusion', 'Celebrity Inspired',
        'Custom Design (Describe Below)', 'Other'
      ]},
      { name: 'region', label: 'Regional / Cultural Preference', options: [
        'North Indian (Delhi/Punjab/UP)', 'South Indian (Tamil/Telugu/Kannada/Malayalam)',
        'Bengali (East India)', 'Marathi (Maharashtra)',
        'Rajasthani (Rajasthan)', 'Gujarati (Gujarat)',
        'Odia (Odisha)', 'Assamese (Northeast)',
        'Sindhi', 'Sikh / Punjabi',
        'Muslim / Islamic Style', 'Christian / Western Bridal',
        'Inter-fusion (Mixed Cultures)', 'No Specific Preference'
      ]},
    ],
  },
}

export default function OrderFormClient({ category }) {
  const config = categoryConfig[category]

  const [menuOpen, setMenuOpen] = useState(false)
  const [metal, setMetal] = useState('')
  const [desc, setDesc] = useState('')
  const [occasion, setOccasion] = useState('')
  const [occasionFor, setOccasionFor] = useState('')
  const [designStyle, setDesignStyle] = useState('')
  const [finish, setFinish] = useState('')
  const [stone, setStone] = useState('')
  const [weight, setWeight] = useState('')
  const [deadline, setDeadline] = useState('')
  const [stoneColour, setStoneColour] = useState('')
  const [motif, setMotif] = useState('')
  const [extraValues, setExtraValues] = useState({})
  const [refImages, setRefImages] = useState([])
  const fileInputRef = useRef(null)

  useEffect(() => {
    return () => refImages.forEach(img => URL.revokeObjectURL(img.preview))
  }, [])

  if (!config) {
    return (
      <>
        <Navbar menuOpen={menuOpen} toggleMenu={() => setMenuOpen(p => !p)} />
        <MobileMenu menuOpen={menuOpen} closeMenu={() => setMenuOpen(false)} />
        <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '32px', color: 'var(--ink)' }}>Category not found</h2>
          <Link href="/#categories" className="btn-primary" style={{ textDecoration: 'none' }}>Back to Design</Link>
        </section>
        <Footer />
      </>
    )
  }

  const toggleMenu = () => {
    setMenuOpen(p => !p)
    document.body.style.overflow = menuOpen ? '' : 'hidden'
  }

  const handleDesc = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z0-9\s.,!?;:'\-()₹/\n]/g, '').slice(0, 500)
    setDesc(val)
  }

  const handleExtra = (fieldName, value) => {
    setExtraValues(p => ({ ...p, [fieldName]: value }))
  }

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files || [])
    addImages(files)
    e.target.value = ''
  }

  const addImages = (files) => {
    const newImages = files.slice(0, 5 - refImages.length).map(file => ({
      file,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      preview: URL.createObjectURL(file),
    }))
    setRefImages(prev => [...prev, ...newImages])
  }

  const removeImage = (id) => {
    setRefImages(prev => {
      const img = prev.find(i => i.id === id)
      if (img) URL.revokeObjectURL(img.preview)
      return prev.filter(i => i.id !== id)
    })
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'))
    addImages(files)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const generateDesign = () => {
    let prompt = `Create a detailed, photorealistic jewellery design for a ${config.title}.`
    if (metal) prompt += ` Metal: ${metal}.`
    if (stone && stone !== 'No Stones (Plain Gold/Silver)') prompt += ` Stones: ${stone}.`
    if (stoneColour && stoneColour !== 'No Stones — Plain Metal') prompt += ` Stone colour: ${stoneColour}.`
    if (finish) prompt += ` Surface finish: ${finish}.`
    if (motif && motif !== 'No Specific Motif') prompt += ` Design motif/pattern: ${motif}.`
    const extras = Object.entries(extraValues).filter(([, v]) => v)
    if (extras.length) {
      prompt += ' ' + extras.map(([k, v]) => {
        const label = k.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())
        return `${label}: ${v}`
      }).join('. ') + '.'
    }
    if (occasion) prompt += ` Occasion: ${occasion}.`
    if (occasionFor) prompt += ` For: ${occasionFor}.`
    if (designStyle) prompt += ` Design style: ${designStyle}.`
    if (weight) prompt += ` Weight preference: ${weight}.`
    if (deadline) prompt += ` Delivery: ${deadline}.`
    if (desc.trim()) prompt += ` Additional details: ${desc.trim()}.`
    prompt += ' Generate a photorealistic image of this jewellery piece on a clean white background with soft studio lighting, suitable as a design reference for a goldsmith to handcraft it. Show the piece from a front angle with fine detail visible.'
    window.open(`https://chatgpt.com/?q=${encodeURIComponent(prompt)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <MobileMenu menuOpen={menuOpen} closeMenu={() => { setMenuOpen(false); document.body.style.overflow = '' }} />

      <section style={{ paddingTop: '120px', paddingBottom: '2rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 2rem' }}>
          <span className="section-label">Custom Order</span>
          <div className="order-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '0.5rem', position: 'relative' }}>
            <Link href="/#categories" className="order-back-btn" style={{
              position: 'absolute', left: '-120px',
              display: 'inline-flex', alignItems: 'center', gap: '6px', flexShrink: 0,
              fontSize: '14px', color: 'var(--gold)', textDecoration: 'none',
              fontWeight: 500, transition: 'opacity 0.2s',
              padding: '1px 3px 3px 0px', margin: '12px 0px 11px 0px',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
            <h1 className="section-title" style={{ fontSize: 'clamp(36px, 5vw, 56px)', marginBottom: 0 }}>
              Design your <em>{config.title.toLowerCase()}</em>
            </h1>
          </div>
          <p className="section-desc" style={{ maxWidth: '100%', lineHeight: 1.7, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Fill in as many details as you can below. The more we know, the better the AI-generated design and the closer it'll match your vision.
          </p>
        </div>
      </section>

      <section style={{ paddingTop: 0, paddingBottom: '4rem', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 2rem' }}>
          <div className="form-wrap" style={{ padding: '2.5rem' }}>

            {/* SECTION: Material */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                Material & Stones
              </div>
              <div className="form-row">
                <SearchableSelect label="Metal Type *" value={metal} onChange={setMetal} options={metalOptions} placeholder="Select metal" />
                <SearchableSelect label="Stones / Gemstones" value={stone} onChange={setStone} options={stoneOptions} placeholder="Select stone" />
              </div>
              <div className="form-row">
                <SearchableSelect label="Stone Colour" value={stoneColour} onChange={setStoneColour} options={stoneColourOptions} placeholder="Select colour" />
                <SearchableSelect label="Surface Finish" value={finish} onChange={setFinish} options={finishOptions} placeholder="Select finish" />
              </div>
              <div className="form-row">
                <SearchableSelect label="Weight Preference" value={weight} onChange={setWeight} options={weightOptions} placeholder="Select weight" />
                <SearchableSelect label="Design Motif / Pattern" value={motif} onChange={setMotif} options={motifOptions} placeholder="Select motif" />
              </div>
            </div>

            {/* SECTION: Category-specific fields */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                {config.title} Specific Details
              </div>
              {config.extraFields.length === 3 ? (
                <>
                  <div className="form-row">
                    <SearchableSelect
                      label={config.extraFields[0].label}
                      value={extraValues[config.extraFields[0].name] || ''}
                      onChange={v => handleExtra(config.extraFields[0].name, v)}
                      options={config.extraFields[0].options}
                      placeholder="Select"
                    />
                    <SearchableSelect
                      label={config.extraFields[1].label}
                      value={extraValues[config.extraFields[1].name] || ''}
                      onChange={v => handleExtra(config.extraFields[1].name, v)}
                      options={config.extraFields[1].options}
                      placeholder="Select"
                    />
                  </div>
                  <SearchableSelect
                    label={config.extraFields[2].label}
                    value={extraValues[config.extraFields[2].name] || ''}
                    onChange={v => handleExtra(config.extraFields[2].name, v)}
                    options={config.extraFields[2].options}
                    placeholder="Select"
                  />
                </>
              ) : (
                <div className="form-row">
                  {config.extraFields.map(field => (
                    <SearchableSelect
                      key={field.name}
                      label={field.label}
                      value={extraValues[field.name] || ''}
                      onChange={v => handleExtra(field.name, v)}
                      options={field.options}
                      placeholder="Select"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* SECTION: Occasion & Style */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                Occasion & Design Vision
              </div>
              <div className="form-row">
                <SearchableSelect label="Occasion / Purpose" value={occasion} onChange={setOccasion} options={occasionOptions} placeholder="Select occasion" />
                <SearchableSelect label="Who is it for?" value={occasionFor} onChange={setOccasionFor} options={occasionForOptions} placeholder="Select" />
              </div>
              <div className="form-row">
                <SearchableSelect label="Design Style" value={designStyle} onChange={setDesignStyle} options={designStyleOptions} placeholder="Select style" />
                <SearchableSelect label="Delivery Timeline" value={deadline} onChange={setDeadline} options={deadlineOptions} placeholder="Select deadline" />
              </div>
            </div>

            {/* SECTION: Inspiration & Details */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border)' }}>
                Inspiration & Details
              </div>
              <div className="form-group">
                <label>Attach Reference Images (up to 5)</label>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  style={{
                    border: '2px dashed var(--border-strong)',
                    borderRadius: '4px',
                    padding: refImages.length ? '12px' : '28px 16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: 'var(--cream)',
                    transition: 'border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-strong)'; e.currentTarget.style.background = 'var(--cream)' }}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                  {refImages.length === 0 ? (
                    <>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 8px' }}>
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                      <div style={{ fontSize: '13px', color: 'var(--ink)', fontWeight: 500, marginBottom: '4px' }}>
                        Click or drag images here
                      </div>
                      <div style={{ fontSize: '11px', color: 'var(--stone)' }}>
                        JPG, PNG, WEBP — max 5 images
                      </div>
                    </>
                  ) : (
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {refImages.map(img => (
                        <div key={img.id} style={{ position: 'relative', width: '80px', height: '80px', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                          <img src={img.preview} alt="Reference" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); removeImage(img.id) }}
                            style={{
                              position: 'absolute', top: '2px', right: '2px',
                              width: '20px', height: '20px', borderRadius: '50%',
                              background: 'rgba(0,0,0,0.6)', color: '#fff',
                              border: 'none', cursor: 'pointer', fontSize: '12px',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              lineHeight: 1,
                            }}
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      {refImages.length < 5 && (
                        <div
                          onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click() }}
                          style={{
                            width: '80px', height: '80px', borderRadius: '4px',
                            border: '2px dashed var(--border-strong)', display: 'flex',
                            alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                            fontSize: '24px', color: 'var(--stone)',
                          }}
                        >
                          +
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--stone)', marginTop: '4px' }}>
                  Upload designs you like — these images will be shown alongside the prompt
                </div>
              </div>
              <div className="form-group">
                <label>Description / Special Requirements</label>
                <textarea
                  placeholder={`Describe your dream ${config.title.toLowerCase()} in detail — patterns, motifs, engravings, cultural elements, or anything else you have in mind...`}
                  value={desc}
                  onChange={handleDesc}
                  maxLength={500}
                  style={{ minHeight: '140px' }}
                ></textarea>
                <div style={{ fontSize: '10px', color: 'var(--stone)', marginTop: '2px', textAlign: 'right' }}>{desc.length}/500</div>
              </div>
            </div>

            <button type="button" className="generate-btn" onClick={generateDesign} style={{ fontSize: '13px', padding: '18px', marginTop: '0.5rem' }}>
              Generate Design
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  )
}
