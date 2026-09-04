import { Service, HeroSlide, Brand } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'mechanical-repairs',
    slug: 'mechanical-repairs',
    title: 'All Mechanical Repairs',
    shortDescription: 'Comprehensive engine, fuel injection, cooling system, and mechanical diagnostics carried out by certified mechanics.',
    longDescription: 'Our fully equipped workshop handles everything from complex engine overhauls to minor mechanical troubleshooting. Utilizing modern computer diagnostic scan tools and OEM-certified replacement parts, we resolve strange rattles, engine knocking, overheating, and performance issues quickly and safely.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Unusual ticking, knocking, or squeaking noises under the bonnet',
      'Engine overheating or coolant leaks',
      'Loss of power, rough idling, or excessive exhaust smoke',
      'Check Engine Light or warning messages illuminated',
      'Poor fuel economy or sudden loss of acceleration'
    ],
    included: [
      'Full electronic engine scanning & error code diagnosis',
      'Cooling system pressure test & hose inspection',
      'Drive belt, timing belt, and water pump examination',
      'Fuel system flow testing & throttle body clean',
      'Exhaust system & emission compliance check',
      'Road test and technician sign-off report'
    ],
    benefits: [
      'Genuine or OEM-standard replacement parts with 12-month warranty',
      'Prevents catastrophic engine failure and costly roadside breakdowns',
      'Optimizes fuel efficiency and throttle responsiveness',
      'Peace of mind with qualified licensed technicians'
    ],
    whyChooseUs: [
      'Over 25 years of combined mechanical workshop experience',
      'Factory diagnostic equipment for European, Japanese, and American vehicles',
      'Upfront transparent quote before any work starts — no hidden surprises'
    ],
    estimatedTime: '2 - 4 Hours',
    startingPrice: '$189',
    popular: true
  },
  {
    id: 'brakes-and-clutch',
    slug: 'brakes-and-clutch',
    title: 'Brakes & Clutch',
    shortDescription: 'Precision brake pad replacements, disc rotor machining, ABS diagnostics, and clutch assembly repairs for optimal safety.',
    longDescription: 'Your braking and clutch systems are paramount to road safety and driving control. We provide comprehensive brake inspections, rotor resurfacing, high-performance ceramic pad installations, brake fluid flushes, clutch pedal adjustments, and complete dual-mass flywheel replacements.',
    iconName: 'Disc',
    image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Squealing, grinding, or metallic scraping when braking',
      'Spongy or pulsating brake pedal under foot',
      'Vehicle pulling to one side when stopping',
      'Clutch slipping, burning smell on hills, or stiff clutch pedal',
      'Handbrake not holding securely on steep inclines'
    ],
    included: [
      'Brake pad thickness & rotor wear measurement',
      'Brake line, master cylinder & hydraulic fluid condition test',
      'Brake fluid flush with DOT4 high-temp fluid',
      'Disc rotor skimming or OEM replacement',
      'Clutch plate, pressure plate & throwout bearing inspection',
      'Full brake caliper slide pins lubrication and adjustment'
    ],
    benefits: [
      'Shortened stopping distances in wet and dry conditions',
      'Elimination of irritating brake shudder and vibrations',
      'Smooth, effortless gear shifting with refreshed clutch friction material',
      'National lifetime warranty on selected brake pads'
    ],
    whyChooseUs: [
      'Bendix and DBA accredited brake specialist centre',
      'Fast turnaround: same-day brake pad replacements available',
      'Digital brake balance and efficiency testing before vehicle handover'
    ],
    estimatedTime: '1.5 - 3 Hours',
    startingPrice: '$165',
    popular: true
  },
  {
    id: 'logbook-service',
    slug: 'logbook-service',
    title: 'Logbook Service',
    shortDescription: 'Manufacturer-specified logbook servicing that keeps your new car statutory warranty 100% valid and protected.',
    longDescription: 'Under Australian Consumer Law, you are never locked into dealership servicing. Our certified mechanics service your vehicle strictly according to manufacturer scheduled procedures, stamping your official logbook while saving you hundreds over dealership prices.',
    iconName: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Service due reminder light triggered on dashboard',
      'Approaching scheduled kilometer milestone (e.g. 15,000km, 45,000km, 100,000km)',
      'Need to protect statutory manufacturer warranty without paying dealer markups',
      'Preparing vehicle for resale with full official service history'
    ],
    included: [
      'Full factory-specified multi-point mechanical inspection',
      'Premium synthetic oil change matching manufacturer viscosity specs',
      'Genuine OEM oil filter, air filter, and cabin pollen filter replacement',
      'Spark plugs, fuel filter, and drive belts check/renewal as specified',
      'Official logbook validation stamp and digital service register update',
      'Reset of dashboard service interval reminder'
    ],
    benefits: [
      '100% Statutory New Car Warranty protected by Australian Consumer Law',
      'Maintains highest possible vehicle resale value with documented stamps',
      'Up to 30-40% more affordable than authorized franchise dealerships',
      'Detailed digital condition report sent directly to your phone'
    ],
    whyChooseUs: [
      'Licensed logbook technicians certified for all petrol, diesel, and hybrid cars',
      'Strict adherence to factory manuals and torque specifications',
      'Free 6-month roadside assistance package included with major logbook services'
    ],
    estimatedTime: '2 - 3 Hours',
    startingPrice: '$199',
    popular: true
  },
  {
    id: 'suspension-and-steering',
    slug: 'suspension-and-steering',
    title: 'Suspension & Steering',
    shortDescription: 'Shock absorbers, struts, power steering, ball joints, and computerized 4-wheel alignments for a smooth, controlled ride.',
    longDescription: 'Worn suspension compromises your steering response, accelerates tire wear, and lengthens braking distances. We inspect and renew shock absorbers, coil springs, control arm bushes, power steering pumps, and tie rods, followed by precision 3D wheel alignments.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Excessive bouncing or vehicle swaying when taking corners',
      'Clunking or knocking sounds when driving over speed bumps',
      'Steering wheel vibrating, stiff, or pulling off-centre',
      'Uneven scalloped wear patterns along tire edges',
      'Hydraulic power steering fluid leaks on garage floor'
    ],
    included: [
      'Shock absorbers, struts & mount bounce and rebound testing',
      'Ball joints, tie rod ends & sway bar link pin check',
      'Power steering rack, fluid level & pump pressure check',
      'Control arm bushings & subframe mount examination',
      'Computerized 4-wheel laser alignment calibration',
      'Road testing for high-speed tracking and stability'
    ],
    benefits: [
      'Restores crisp steering handling and confidence on winding roads',
      'Eliminates irregular tyre wear, saving thousands in rubber replacement',
      'Enhanced passenger comfort over potholes and Australian rough surfaces',
      'Reduced braking pitch and body roll'
    ],
    whyChooseUs: [
      'State-of-the-art 3D laser alignment bay on site',
      'Stockists of Monroe, Pedders, and Bilstein premium components',
      'Experienced 4WD suspension lift kit and heavy-duty towing specialists'
    ],
    estimatedTime: '2 - 4 Hours',
    startingPrice: '$149',
    popular: false
  },
  {
    id: 'tyres',
    slug: 'tyres',
    title: 'Tyres & Wheel Balancing',
    shortDescription: 'Major brand tyres, puncture repairs, precision computer balancing, and 3D wheel alignment for maximum grip and safety.',
    longDescription: 'Your tyres are the only point of contact between your car and the asphalt. We supply, fit, and electronically balance top brand tyres (Michelin, Bridgestone, Continental, Pirelli, Dunlop, Goodyear) at competitive prices, along with puncture repairs and rotation programs.',
    iconName: 'CircleDot',
    image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1543793645-ecbb87ff8c51?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Tread depth worn below legal 1.6mm indicator blocks',
      'Nail, screw, or road debris causing slow pressure loss',
      'Steering wheel shimmying at 80-100 km/h highway speeds',
      'Cracked or perished tyre sidewalls from UV exposure',
      'Uneven wear on inner or outer shoulders'
    ],
    included: [
      'Tread depth and age code inspection across all 4 tyres + spare',
      'Professional internal patch & mushroom plug puncture repair',
      'High-speed digital dynamic wheel balancing',
      'Valve stem replacement and tyre pressure calibration',
      'Complimentary tyre disposal with eco-certified recyclers',
      'Tyre rotation recommendations'
    ],
    benefits: [
      'Maximum traction in heavy Australian rainstorms and emergency stops',
      'Smoother vibration-free ride on highways',
      'Extended tyre longevity through proper alignment and rotation',
      'Comprehensive road hazard warranty available on premium brands'
    ],
    whyChooseUs: [
      'Huge warehouse stock of leading passenger, SUV, commercial & 4x4 tyres',
      'Price beat guarantee on identical locally stocked tyre brands',
      'Fast 45-minute drive-in fitting and balancing'
    ],
    estimatedTime: '45 - 60 Mins',
    startingPrice: '$89',
    popular: false
  },
  {
    id: 'car-batteries',
    slug: 'car-batteries',
    title: 'Car Batteries & Electrical',
    shortDescription: 'Heavy-duty Australian climate batteries, alternator tests, starter motor diagnosis, and rapid mobile battery replacement.',
    longDescription: 'Extreme Australian heat is the leading cause of premature battery degradation. We test your alternator output, parasitic drain, and starter motor draw before installing high-cranking AGM, EFB, and standard lead-acid batteries with nationwide warranties.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Car cranks slowly or clicks repeatedly when turning key / pressing start',
      'Battery dashboard warning light staying on',
      'Headlights dimming when idling at traffic lights',
      'Battery case swollen or white corrosive powder around terminals',
      'Electrical accessories resetting or start-stop technology failing'
    ],
    included: [
      'Cold Cranking Amps (CCA) digital load test',
      'Alternator charging rate & diode ripple check',
      'Starter motor electrical draw measurement',
      'Terminal post cleaning, corrosion protection & secure tie-down',
      'Stop-Start (ISS) system computer registration & ECU reset',
      'Eco-friendly disposal and recycling of old core'
    ],
    benefits: [
      'Instant starting power in freezing winter mornings and scorching 40°C heat',
      'Up to 3-year full replacement nationwide warranty',
      'Prevents computer system memory loss during installation',
      'Engineered specifically for harsh Australian operating conditions'
    ],
    whyChooseUs: [
      'Century, Exide, and Varta authorized battery partner',
      'Mobile roadside battery replacement service available across the metro',
      'Free in-workshop battery health testing in under 5 minutes'
    ],
    estimatedTime: '30 - 45 Mins',
    startingPrice: '$139',
    popular: false
  },
  {
    id: 'car-air-servicing',
    slug: 'car-air-servicing',
    title: 'Car Air Servicing & Regas',
    shortDescription: 'Complete air conditioning regas, antibacterial cabin sanitisation, condenser checks, and leak detection for ice-cold air.',
    longDescription: 'Stay cool during sweltering summers with our ARC-licensed automotive air conditioning service. We vacuum your system to remove moisture, conduct nitrogen pressure leak testing, recharge with certified R134a or R1234yf refrigerant, and replace stale cabin pollen filters.',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Air coming from vents is lukewarm or takes 15+ minutes to cool',
      'Musty, mildew, or vinegar smell when A/C is first switched on',
      'Hissing noises behind dashboard during operation',
      'A/C compressor clutch not engaging or rattling loudly',
      'Foggy windscreen that will not demist on humid mornings'
    ],
    included: [
      'System evacuation and deep vacuum moisture removal',
      'Nitrogen pressure hold & UV dye ultraviolet leak test',
      'Precise electronic refrigerant recharge (R134a / R1234yf)',
      'A/C compressor PAG oil replenishment for lubricity',
      'Cabin air pollen filter inspection and antimicrobial mist treatment',
      'Vent temperature thermistor output check (targeting 4°C - 7°C)'
    ],
    benefits: [
      'Instant ice-cold cabin temperatures within seconds of starting',
      'Eradicates bacteria, allergens, and mould spores causing respiratory irritations',
      'Reduces fuel consumption by minimizing compressor strain',
      'Fast demisting of foggy glass for safer winter driving'
    ],
    whyChooseUs: [
      'Fully certified and licensed under the Australian Refrigeration Council (ARC)',
      'Modern automated dual-gas recovery and charging stations',
      'Environmentally responsible refrigerant recovery and leak guarantees'
    ],
    estimatedTime: '1 - 2 Hours',
    startingPrice: '$175',
    popular: true
  },
  {
    id: 'all-car-servicing',
    slug: 'all-car-servicing',
    title: 'All Car Servicing (Minor & Major)',
    shortDescription: 'Tailored minor and comprehensive major servicing for all makes and models, keeping your vehicle reliable year-round.',
    longDescription: 'Whether your daily commuter needs a swift 6-month minor service or your family SUV is due for a thorough major checkup, we service all petrol, diesel, turbo, and hybrid vehicles with meticulous care, oil changes, filter renewals, safety inspections, and fluid top-ups.',
    iconName: 'Gauge',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Vehicle has travelled 10,000km since last oil change',
      'Dark, sludgy engine oil on dipstick',
      'Sluggish response or subtle engine vibration',
      'Pending road trip requiring peace-of-mind vehicle health check',
      'Fluids (brake, coolant, transmission, washer) running low'
    ],
    included: [
      'Up to 5 litres of premium synthetic engine oil & genuine filter',
      '68-point comprehensive mechanical & safety audit',
      'Brake pad, rotor, and brake fluid boiling point check',
      'Underbody steering, suspension, and driveline inspection',
      'Coolant, power steering, and windscreen washer top-up',
      'Battery state of health digital report & tyre pressure check'
    ],
    benefits: [
      'Significantly extends overall engine and transmission lifespan',
      'Maintains lower operating temperatures and optimal fuel mileage',
      'Catches minor component wear before it becomes a massive repair bill',
      'Complimentary mini vacuum and windscreen wash'
    ],
    whyChooseUs: [
      'Fixed-price transparency with zero unauthorized work',
      'Same-day service with convenient early bird key drop box',
      'Clean, comfortable customer waiting lounge with Wi-Fi & barista coffee'
    ],
    estimatedTime: '2 - 3 Hours',
    startingPrice: '$159',
    popular: true
  },
  {
    id: 'car-diagnosis',
    slug: 'car-diagnosis',
    title: 'Car Diagnostics & Computer Scan',
    shortDescription: 'Advanced OBD2 computerized diagnostics, sensor troubleshooting, ECU fault code scanning, and live data telemetry analysis.',
    longDescription: 'Modern vehicles rely on dozens of computerized ECUs and sensor networks. When warning lights appear or intermittent electrical gremlins strike, our master diagnostic technicians plug in dealer-grade diagnostic scanners to trace real root causes rather than guessing.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Check Engine, ABS, Airbag (SRS), or Traction control light glowing',
      'Vehicle entering "Limp Home" mode with restricted speed',
      'Intermittent starting faults or mysterious electrical battery drains',
      'Misfiring, hesitation, or erratic tachometer needle',
      'Cruise control, radar, or parking sensor malfunctions'
    ],
    included: [
      'Complete vehicle electronic control module (ECM/TCM/BCM) scan',
      'Live sensor data stream recording and freeze-frame analysis',
      'Oscilloscope waveform analysis for sensors and ignition coils',
      'Wiring harness continuity and ground circuit testing',
      'Printed diagnostic fault report with recommended repair roadmap',
      'Clearance of historic fault codes after verification'
    ],
    benefits: [
      'Pinpoints exact faulty sensors without throwing expensive random parts at it',
      'Saves substantial money and diagnostic time',
      'Identifies hidden safety faults before an unexpected breakdown occurs',
      'Restores factory peak performance and smooth drivability'
    ],
    whyChooseUs: [
      'Equipped with Snap-on, Bosch, Autel, and manufacturer-specific diagnostic tools',
      'Factory trained electrical specialists with continuous training',
      'Detailed plain-English explanations without confusing technical jargon'
    ],
    estimatedTime: '1 - 2 Hours',
    startingPrice: '$120',
    popular: false
  },
  {
    id: 'breakdown-assistance',
    slug: 'breakdown-assistance',
    title: 'Breakdown Assistance (24/7)',
    shortDescription: '24/7 rapid emergency road assistance across the metropolitan area for jump-starts, flat tyres, lockouts, and emergency towing.',
    longDescription: 'Stranded on the highway, driveway, or workplace car park? Our dedicated breakdown assistance fleet operates 24 hours a day, 7 days a week. We dispatch fully outfitted service vans equipped with mobile battery units, tyre changers, diagnostic computers, and fuel delivery.',
    iconName: 'PhoneCall',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Flat battery or vehicle refusing to turn over',
      'Punctured flat tyre with no spare or missing wheel lock nut key',
      'Keys accidentally locked inside the vehicle',
      'Run out of fuel or incorrectly misfuelled petrol into diesel',
      'Sudden engine stall, smoke, or breakdown in heavy traffic'
    ],
    included: [
      'Immediate emergency GPS dispatch with estimated live arrival time',
      'Heavy-duty 12V/24V jump-start or on-the-spot battery replacement',
      'Spare tyre installation or puncture reinflation seal',
      'Emergency roadside fuel delivery (unleaded or diesel)',
      'Damage-free lockout retrieval entry service',
      'Priority flatbed tilt-tray towing to our workshop if non-drivable'
    ],
    benefits: [
      'Average response time under 35 minutes across metropolitan regions',
      'No expensive annual club membership required — pay as you go',
      'Professional friendly roadside technicians prioritizing your safety',
      'Covered 24 hours a day, 365 days a year including public holidays'
    ],
    whyChooseUs: [
      'Direct contact with local dispatchers — no call-centre queues',
      'Fully equipped mobile workshop vans capable of on-site minor repairs',
      'Trusted roadside partner for local Australian families and commercial fleets'
    ],
    estimatedTime: 'Rapid 30-45 Min Arrival',
    startingPrice: '$99',
    popular: true
  },
  {
    id: 'transmission-repairs',
    slug: 'transmission-repairs',
    title: 'Transmission Repairs',
    shortDescription: 'Automatic, manual, CVT, and dual-clutch transmission servicing, fluid flushing, valve body repairs, and complete rebuilds.',
    longDescription: 'The gearbox is one of the most mechanically intricate systems in your vehicle. We specialize in automatic transmissions, DSG/dual-clutch systems, CVTs, and heavy-duty manuals, offering transmission fluid flushes, solenoid replacements, torque converter repairs, and full rebuilds.',
    iconName: 'Cog',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Hard shifting, clunking, or hesitation between gear changes',
      'Vehicle revving high without accelerating (transmission slipping)',
      'Burning oil odour or reddish transmission fluid puddles underneath',
      'Whining, buzzing, or clattering sounds while in gear',
      'Transmission warning indicator or "Gearbox Malfunction" alert'
    ],
    included: [
      'Transmission computer diagnostic scan & TCM calibration',
      'Transmission fluid level, color, and burnt particle evaluation',
      'Full transmission fluid flush using manufacturer-grade synthetic ATF',
      'Sump pan removal, internal magnet cleaning & filter renewal',
      'Solenoid valve and mechatronic unit bench testing',
      'Comprehensive road test through all gears, reverse, and lockup'
    ],
    benefits: [
      'Restores buttery-smooth gear transitions without jarring thuds',
      'Prevents high-temperature overheating and catastrophic gearbox lockup',
      'Protects complex planetary gear sets and hydraulic clutch packs',
      'Extends transmission life by up to 150,000+ extra kilometers'
    ],
    whyChooseUs: [
      'Specialist transmission technicians trained in European & Japanese gearboxes',
      'High-capacity power-flushing machinery that replaces 100% of old fluid',
      'Generous 2-year or 40,000km warranty on all rebuilt gearboxes'
    ],
    estimatedTime: '2 - 5 Hours',
    startingPrice: '$240',
    popular: false
  },
  {
    id: 'body-and-frame-repair',
    slug: 'body-and-frame-repair',
    title: 'Body & Frame Repair Service',
    shortDescription: 'Chassis alignment, structural frame straightening, panel beating, scratch repair, and bumper restoration after collisions.',
    longDescription: 'Restoring vehicle integrity after an accident requires exact laser chassis alignment and expert craftsmanship. Our panel and frame repair team corrects structural twist, replaces damaged crumple zones, repairs dented panels, and matches factory paint for a flawless factory finish.',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Frame or chassis misalignment following a collision',
      'Doors, bonnet, or boot lid not closing or lining up properly',
      'Creased metal panels, crushed bumpers, or deep side scratches',
      'Rust corrosion affecting structural sills and wheel arches',
      'Vehicle tracking sideways (dog-tracking) after an impact'
    ],
    included: [
      '3D laser computerized chassis measuring and alignment report',
      'Heavy-duty hydraulic frame pulling and straightening benchwork',
      'Panel beating and dent removal with paintless dent repair (PDR) options',
      'Anti-corrosion cavity sealing and structural rust treatment',
      'High-grade baked enamel spray painting with spectrophotometer color matching',
      'Full ADAS radar and camera sensor recalibration after body repairs'
    ],
    benefits: [
      'Restores vital crumple zone crash safety to factory ANCAP standards',
      'Seamless cosmetic appearance with undetectable paint blending',
      'Eliminates wind whistling, water leaks, and misaligned door seals',
      'Lifetime warranty on all structural frame repairs and paint adhesion'
    ],
    whyChooseUs: [
      'Approved repairer working with all major Australian insurance companies',
      'Modern downdraft bake ovens and computer-controlled welding equipment',
      'Courtesy replacement cars available during insurance repair periods'
    ],
    estimatedTime: '1 - 3 Days',
    startingPrice: '$290',
    popular: false
  },
  {
    id: 'windscreen-repair',
    slug: 'windscreen-repair',
    title: 'Windscreen Repair & Replacement',
    shortDescription: 'Rapid chip repairs, crack sealing, full windscreen replacements, and optical ADAS safety camera calibration.',
    longDescription: 'A small stone chip can quickly turn into an unrepairable crack with road vibration or temperature swings. We offer rapid resin chip repairs that take just 30 minutes, as well as complete automotive glass replacements with optical ADAS forward camera recalibration.',
    iconName: 'Shield',
    image: 'https://images.unsplash.com/photo-1543793645-ecbb87ff8c51?auto=format&fit=crop&w=1000&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=1600&q=80',
    commonProblems: [
      'Bullseye or star stone chip on windscreen',
      'Spreading crack obstructing driver field of vision (fails roadworthy)',
      'Shattered rear window, quarter glass, or side door window',
      'Scratched glass causing hazardous glare from oncoming headlights',
      'Leaking windscreen seal causing water inside the cabin'
    ],
    included: [
      'Vacuum resin injection for stone chips up to $2 coin size',
      'Full windscreen removal using scratch-free wire cutting methods',
      'Application of high-strength structural polyurethane sealant',
      'OEM or Australian Standards AS/NZS 2080 compliant safety glass',
      'Forward-facing ADAS camera recalibration (lane assist & auto braking)',
      'Clean vacuum of all broken safety glass from vehicle interior'
    ],
    benefits: [
      'Restores 100% structural rigidity to the passenger cabin roof',
      'Crystal-clear distortion-free driving vision day and night',
      'Complies with strict state roadworthy and road safety regulations',
      'Prevents stone chips from spreading into costly replacements'
    ],
    whyChooseUs: [
      'Quick 30-minute chip repair with lifetime non-spreading guarantee',
      'Direct billing with leading car insurers — often $0 excess for glass',
      'Certified ADAS static and dynamic optical calibration targets on site'
    ],
    estimatedTime: '30 Mins - 2 Hours',
    startingPrice: '$95',
    popular: false
  }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'BRAKE & CLUTCH',
    subtitle: 'Safe & Reliable Braking Solutions',
    ctaText: 'Know More',
    ctaLink: '/services/brakes-and-clutch',
    secondaryCtaText: 'Book Service',
    secondaryCtaLink: '/book?service=brakes-and-clutch',
    image: 'https://images.unsplash.com/photo-1600790142055-619df03207e6?auto=format&fit=crop&w=1920&q=85',
    badge: 'Precision Safety'
  },
  {
    id: 2,
    title: 'BREAKDOWN HELP',
    subtitle: '24/7 Emergency Road Assistance',
    ctaText: 'Know More',
    ctaLink: '/services/breakdown-assistance',
    secondaryCtaText: 'Call Emergency: 1300 892 455',
    secondaryCtaLink: 'tel:+611300892455',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1920&q=85',
    badge: 'Rapid 24/7 Response'
  },
  {
    id: 3,
    title: 'CAR SERVICING',
    subtitle: 'Professional Car Servicing You Can Trust',
    ctaText: 'Know More',
    ctaLink: '/services/all-car-servicing',
    secondaryCtaText: 'Book Appointment',
    secondaryCtaLink: '/book?service=all-car-servicing',
    image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=85',
    badge: 'Certified Mechanics'
  },
  {
    id: 4,
    title: 'LOGBOOK SERVICE',
    subtitle: '100% Manufacturer Warranty Protected',
    ctaText: 'Know More',
    ctaLink: '/services/logbook-service',
    secondaryCtaText: 'Save Up to 40%',
    secondaryCtaLink: '/book?service=logbook-service',
    image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1920&q=85',
    badge: 'Dealer Alternative'
  }
];

export const BRANDS: Brand[] = [
  {
    name: 'Volkswagen',
    origin: 'Germany',
    logo: 'VW',
    description: 'Specialised diagnostic coding, DSG fluid service, TSI & TDI mechanical maintenance.'
  },
  {
    name: 'Mercedes-Benz',
    origin: 'Germany',
    logo: 'MB',
    description: 'Star diagnostic scanner capabilities, air suspension service & OEM parts.'
  },
  {
    name: 'BMW',
    origin: 'Germany',
    logo: 'BMW',
    description: 'M-Sport & standard series logbook service, Vanos repairs & cooling system overhauls.'
  },
  {
    name: 'Ford',
    origin: 'Australia / USA',
    logo: 'FORD',
    description: 'Ranger, Everest & Falcon specialist mechanical, suspension & logbook care.'
  },
  {
    name: 'Toyota',
    origin: 'Japan',
    logo: 'TOYOTA',
    description: 'Hilux, LandCruiser, Prado & Hybrid servicing with genuine quality filters and fluids.'
  },
  {
    name: 'Audi',
    origin: 'Germany',
    logo: 'AUDI',
    description: 'TFSI performance tuning, Quattro drivetrain repairs & factory specification logbook servicing.'
  },
  {
    name: 'Hyundai',
    origin: 'South Korea',
    logo: 'HYUNDAI',
    description: 'i30, Tucson, Santa Fe warranty-compliant servicing and electronic diagnostics.'
  },
  {
    name: 'Subaru',
    origin: 'Japan',
    logo: 'SUBARU',
    description: 'Boxer engine maintenance, AWD differential servicing & symmetrical drive repairs.'
  }
];

export const COMPANY_DETAILS = {
  name: 'Apex Auto Care',
  legalName: 'Apex Automotive & Mechanical Services Pty Ltd',
  abn: '88 123 456 789',
  phone: '1300 892 455',
  phoneRaw: '+611300892455',
  mobilePhone: '0412 345 678',
  mobilePhoneRaw: '+61412345678',
  email: 'service@apexautocare.com.au',
  address: '42 Carrington Road, Marrickville NSW 2204, Australia',
  hoursWeekday: 'Monday - Friday: 7:30 AM – 5:30 PM',
  hoursSaturday: 'Saturday: 8:00 AM – 1:00 PM',
  hoursSunday: 'Sunday: Emergency Breakdown Only',
  emergencyAvailability: '24/7 Roadside Assistance Australia-wide',
  whatsappMessage: 'Hello Apex Auto Care, I would like to enquire about booking a car service or getting a mechanical repair quote.'
};
