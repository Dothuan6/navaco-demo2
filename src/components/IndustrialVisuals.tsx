import React from 'react';

/**
 * Cutout Technical Illustrations for the 6 Port Equipment Lines (7 equipment variants including 2 MHC types)
 * Styled on clean studio off-white backgrounds per Magirus card reference in the NAVACO Brief.
 */
export const EquipmentCutoutIllustration: React.FC<{
  equipmentId: string;
  className?: string;
}> = ({ equipmentId, className = '' }) => {
  switch (equipmentId) {
    case 'sts':
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="STS Ship-to-Shore Crane">
          {/* Subtle technical grid shadow */}
          <ellipse cx="185" cy="198" rx="135" ry="8" fill="#E2E2DC" />
          {/* Portal legs */}
          <path d="M110 195L128 78H142L126 195H110Z" fill="#42454A" />
          <path d="M202 195L186 78H172L186 195H202Z" fill="#42454A" />
          {/* Cross braces */}
          <path d="M120 155H194M124 118H190M128 84L188 150M184 84L122 150" stroke="#42454A" strokeWidth="4" />
          {/* Upper A-frame tower */}
          <path d="M142 78L157 18L172 78H142Z" stroke="#42454A" strokeWidth="6" strokeLinejoin="round" />
          {/* Forestay and Backstay cables */}
          <line x1="157" y1="20" x2="328" y2="74" stroke="#42454A" strokeWidth="2.5" strokeDasharray="2 0" />
          <line x1="157" y1="20" x2="275" y2="74" stroke="#42454A" strokeWidth="2" />
          <line x1="157" y1="20" x2="45" y2="74" stroke="#42454A" strokeWidth="2.5" />
          {/* Main Boom & Backreach Girder */}
          <rect x="38" y="72" width="302" height="10" fill="#D6011E" />
          {/* E-House Room on Girder */}
          <rect x="75" y="54" width="48" height="18" fill="#2C2F33" stroke="#F7F7F5" strokeWidth="1.5" />
          <text x="99" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">E-HOUSE</text>
          {/* Trolley & Operator Cabin */}
          <rect x="242" y="82" width="30" height="12" fill="#2C2F33" />
          {/* Hoist Ropes */}
          <line x1="250" y1="94" x2="250" y2="142" stroke="#42454A" strokeWidth="2" />
          <line x1="264" y1="94" x2="264" y2="142" stroke="#42454A" strokeWidth="2" />
          {/* Bromma Spreader */}
          <rect x="234" y="140" width="46" height="6" fill="#D6011E" />
          {/* Suspended Container */}
          <rect x="230" y="146" width="54" height="26" fill="#42454A" stroke="#2C2F33" strokeWidth="1.5" />
          <line x1="242" y1="146" x2="242" y2="172" stroke="#6B7078" strokeWidth="1.5" />
          <line x1="257" y1="146" x2="257" y2="172" stroke="#6B7078" strokeWidth="1.5" />
          <line x1="272" y1="146" x2="272" y2="172" stroke="#6B7078" strokeWidth="1.5" />
          {/* Rail bogies */}
          <rect x="102" y="192" width="30" height="6" fill="#2C2F33" />
          <rect x="180" y="192" width="30" height="6" fill="#2C2F33" />
        </svg>
      );

    case 'rtg':
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="RTG Rubber-Tired Gantry Crane">
          <ellipse cx="180" cy="198" rx="130" ry="8" fill="#E2E2DC" />
          {/* Gantry Columns */}
          <path d="M78 186L90 42H106L94 186H78Z" fill="#42454A" />
          <path d="M282 186L270 42H254L266 186H282Z" fill="#42454A" />
          {/* Upper Cross Girder */}
          <rect x="74" y="32" width="212" height="16" fill="#D6011E" />
          <rect x="82" y="24" width="196" height="8" fill="#42454A" />
          {/* Trolley & Cabin */}
          <rect x="158" y="48" width="44" height="14" fill="#2C2F33" />
          {/* Hoist Ropes */}
          <line x1="168" y1="62" x2="168" y2="108" stroke="#42454A" strokeWidth="2.2" />
          <line x1="192" y1="62" x2="192" y2="108" stroke="#42454A" strokeWidth="2.2" />
          {/* Spreader + Container */}
          <rect x="145" y="108" width="70" height="6" fill="#D6011E" />
          <rect x="142" y="114" width="76" height="32" fill="#42454A" />
          <text x="180" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">NAVACO RTG</text>
          {/* Stacked Containers Below */}
          <rect x="115" y="158" width="62" height="28" fill="#D4D4CE" stroke="#42454A" strokeWidth="1.5" />
          <rect x="183" y="158" width="62" height="28" fill="#E6E6E0" stroke="#42454A" strokeWidth="1.5" />
          {/* Genset & E-House on Side Sill Beam */}
          <rect x="64" y="160" width="38" height="20" fill="#2C2F33" />
          <rect x="258" y="160" width="38" height="20" fill="#D6011E" />
          {/* Rubber Tires (Bogies) */}
          <circle cx="74" cy="190" r="9" fill="#1E2022" stroke="#6B7078" strokeWidth="2" />
          <circle cx="95" cy="190" r="9" fill="#1E2022" stroke="#6B7078" strokeWidth="2" />
          <circle cx="265" cy="190" r="9" fill="#1E2022" stroke="#6B7078" strokeWidth="2" />
          <circle cx="286" cy="190" r="9" fill="#1E2022" stroke="#6B7078" strokeWidth="2" />
        </svg>
      );

    case 'reach-stacker':
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="Reach Stacker">
          <ellipse cx="180" cy="196" rx="130" ry="8" fill="#E2E2DC" />
          {/* Telescopic Boom */}
          <path d="M92 142L242 44L250 56L102 156L92 142Z" fill="#D6011E" />
          <path d="M180 84L268 28L274 37L186 93L180 84Z" fill="#42454A" />
          {/* Hydraulic Lift Cylinders */}
          <line x1="128" y1="158" x2="176" y2="96" stroke="#2C2F33" strokeWidth="7" />
          <line x1="132" y1="154" x2="176" y2="96" stroke="#9EA3AA" strokeWidth="3" />
          {/* Rotator & Spreader + Container */}
          <rect x="255" y="36" width="16" height="18" fill="#2C2F33" />
          <rect x="225" y="54" width="76" height="7" fill="#D6011E" />
          <rect x="220" y="61" width="86" height="38" fill="#42454A" stroke="#2C2F33" strokeWidth="1.5" />
          <text x="263" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">45T STACKER</text>
          {/* Chassis & Counterweight */}
          <path d="M52 152H186L194 176H46L52 152Z" fill="#42454A" />
          <path d="M44 140H84L90 162H44V140Z" fill="#2C2F33" />
          {/* Panoramic Operator Cabin */}
          <path d="M118 114H156L164 152H114L118 114Z" fill="#2C2F33" />
          <path d="M123 119H152L158 146H120L123 119Z" fill="#D8E2EB" />
          {/* Heavy Industrial Tires */}
          <circle cx="72" cy="178" r="18" fill="#1E2022" />
          <circle cx="72" cy="178" r="8" fill="#6B7078" />
          <circle cx="168" cy="176" r="22" fill="#1E2022" />
          <circle cx="168" cy="176" r="10" fill="#D6011E" />
        </svg>
      );

    case 'empty-handler':
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="Empty Container Handler">
          <ellipse cx="180" cy="196" rx="125" ry="8" fill="#E2E2DC" />
          {/* High Vertical Mast */}
          <rect x="196" y="18" width="10" height="166" fill="#42454A" />
          <rect x="210" y="26" width="8" height="158" fill="#2C2F33" />
          {/* Tilt Cylinders */}
          <line x1="164" y1="146" x2="196" y2="124" stroke="#42454A" strokeWidth="5" />
          {/* Side-Lift Spreader & Empty Container */}
          <rect x="218" y="42" width="12" height="32" fill="#D6011E" />
          <rect x="230" y="34" width="84" height="44" fill="#42454A" stroke="#2C2F33" strokeWidth="1.5" />
          <text x="272" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">8-HIGH ECH</text>
          {/* Machine Body & Elevated Cabin */}
          <path d="M74 146H196V178H68L74 146Z" fill="#D6011E" />
          <rect x="70" y="132" width="44" height="22" fill="#2C2F33" />
          <path d="M132 98H172L176 146H128L132 98Z" fill="#2C2F33" />
          <rect x="136" y="104" width="32" height="28" fill="#D8E2EB" />
          {/* Wheels */}
          <circle cx="94" cy="178" r="17" fill="#1E2022" />
          <circle cx="94" cy="178" r="7" fill="#6B7078" />
          <circle cx="176" cy="176" r="20" fill="#1E2022" />
          <circle cx="176" cy="176" r="9" fill="#D6011E" />
        </svg>
      );

    case 'terminal-tractor':
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="Terminal Tractor">
          <ellipse cx="180" cy="196" rx="135" ry="8" fill="#E2E2DC" />
          {/* Container Bomb-Cart Chassis & Container */}
          <rect x="150" y="72" width="166" height="68" fill="#42454A" />
          <line x1="185" y1="72" x2="185" y2="140" stroke="#6B7078" strokeWidth="2" />
          <line x1="225" y1="72" x2="225" y2="140" stroke="#6B7078" strokeWidth="2" />
          <line x1="265" y1="72" x2="265" y2="140" stroke="#6B7078" strokeWidth="2" />
          <rect x="140" y="140" width="182" height="10" fill="#D6011E" />
          {/* Fifth-Wheel Hydraulic Boom */}
          <line x1="126" y1="162" x2="156" y2="144" stroke="#2C2F33" strokeWidth="8" />
          {/* Terminal Tractor Cab & Chassis */}
          <rect x="46" y="156" width="118" height="18" fill="#2C2F33" />
          <path d="M48 96H96L104 156H48V96Z" fill="#D6011E" />
          <path d="M54 104H90L95 134H54V104Z" fill="#D8E2EB" />
          {/* Wheels */}
          <circle cx="72" cy="178" r="17" fill="#1E2022" />
          <circle cx="72" cy="178" r="7" fill="#9EA3AA" />
          <circle cx="138" cy="178" r="17" fill="#1E2022" />
          <circle cx="138" cy="178" r="7" fill="#D6011E" />
          <circle cx="272" cy="178" r="17" fill="#1E2022" />
          <circle cx="272" cy="178" r="7" fill="#9EA3AA" />
          <circle cx="304" cy="178" r="17" fill="#1E2022" />
          <circle cx="304" cy="178" r="7" fill="#9EA3AA" />
        </svg>
      );

    case 'mhc':
    default:
      return (
        <svg viewBox="0 0 360 220" className={`w-full h-full ${className}`} fill="none" role="img" aria-label="Mobile Harbor Crane and Material Handler">
          <ellipse cx="180" cy="196" rx="135" ry="8" fill="#E2E2DC" />
          {/* Outriggers & Multi-Axle Carrier */}
          <rect x="68" y="168" width="112" height="16" fill="#2C2F33" />
          <rect x="54" y="176" width="140" height="8" fill="#42454A" />
          {/* Slewing Upperworks & Tower */}
          <path d="M100 168L108 134H152L158 168H100Z" fill="#D6011E" />
          <rect x="120" y="48" width="16" height="90" fill="#42454A" />
          {/* Elevated Harbor Tower Cabin */}
          <rect x="136" y="76" width="22" height="18" fill="#2C2F33" />
          <rect x="140" y="79" width="15" height="11" fill="#D8E2EB" />
          {/* Lattice Boom */}
          <path d="M132 58L286 24L290 34L136 72Z" fill="#D6011E" />
          {/* Boom Suspension Pendant Ropes */}
          <line x1="128" y1="48" x2="286" y2="24" stroke="#42454A" strokeWidth="2" />
          {/* Hoist Rope & Spreader/Grab */}
          <line x1="284" y1="32" x2="284" y2="118" stroke="#42454A" strokeWidth="2.2" />
          <path d="M266 118H302L294 142H274L266 118Z" fill="#42454A" />
          <rect x="272" y="112" width="24" height="6" fill="#D6011E" />
          {/* Multi-axle Wheels */}
          <circle cx="82" cy="186" r="10" fill="#1E2022" />
          <circle cx="106" cy="186" r="10" fill="#1E2022" />
          <circle cx="138" cy="186" r="10" fill="#1E2022" />
          <circle cx="162" cy="186" r="10" fill="#1E2022" />
        </svg>
      );
  }
};

/**
 * Monochrome-to-Color Partner Brand Lockup per Brief:
 * "Logo hãng màu xám, hiện màu khi rê chuột; chỉ đưa hãng đã hợp tác chính thức"
 */
export const PartnerBrandMark: React.FC<{
  partnerId: string;
  name: string;
}> = ({ partnerId, name }) => {
  const accentColors: Record<string, string> = {
    siemens: '#009999',
    kalmar: '#D6011E',
    bromma: '#C8102E',
    bubenzer: '#004B87',
    igus: '#F39200',
    teufelberger: '#00549F',
    sennebogen: '#008D36',
    alimak: '#E30613',
  };

  const brandColor = accentColors[partnerId] || '#D6011E';

  return (
    <div className="group flex items-center justify-center h-16 px-5 bg-white border border-[#E2E2DC] hover:border-[#42454A] transition-colors">
      <div className="flex items-center gap-2.5 grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-150">
        <span
          className="w-2.5 h-6 shrink-0"
          style={{
            backgroundColor: brandColor,
            clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)',
          }}
        />
        <span className="font-display font-bold uppercase tracking-wider text-lg text-[#2C2F33]">
          {name}
        </span>
      </div>
    </div>
  );
};

/**
 * High-fidelity Industrial Field Project Visuals for Project Cards
 * Illustrates authentic port field operations, quays, cranes, Siemens E-House, and NAVACO engineers in PPE.
 */
export const ProjectFieldVisual: React.FC<{
  projectId: string;
  className?: string;
}> = ({ projectId, className = 'w-full h-full' }) => {
  switch (projectId) {
    case 'rtg-sihanoukville':
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="RTG Crane Modernization at Sihanoukville Port"
        >
          <defs>
            <linearGradient id="skySihanouk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1C232B" />
              <stop offset="60%" stopColor="#2A3440" />
              <stop offset="100%" stopColor="#3F4D5E" />
            </linearGradient>
            <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#36393E" />
              <stop offset="100%" stopColor="#1E2023" />
            </linearGradient>
            <linearGradient id="seaGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E3A4D" />
              <stop offset="100%" stopColor="#25516B" />
            </linearGradient>
          </defs>
          {/* Background Sky & Sea */}
          <rect width="480" height="260" fill="url(#skySihanouk)" />
          <path d="M0 135 Q120 130 240 136 T480 132 L480 160 L0 160 Z" fill="url(#seaGrad)" opacity="0.6" />
          {/* Distant Berth Crane Silhouettes */}
          <path d="M40 135 L48 85 L56 135 M52 92 L95 80" stroke="#4F5D6B" strokeWidth="1.5" />
          <path d="M120 135 L126 95 L132 135 M129 100 L160 90" stroke="#4F5D6B" strokeWidth="1.2" />
          {/* Terminal Concrete Yard Ground */}
          <rect y="155" width="480" height="105" fill="url(#groundGrad)" />
          <path d="M0 195 L480 195" stroke="#F5A623" strokeWidth="2" strokeDasharray="14 10" opacity="0.4" />
          <path d="M0 240 L480 240" stroke="#D6011E" strokeWidth="1.5" opacity="0.3" />
          {/* Container Stacks in Yard */}
          <rect x="20" y="145" width="90" height="35" fill="#3D4A59" stroke="#252D37" strokeWidth="1" />
          <rect x="20" y="112" width="90" height="33" fill="#D6011E" stroke="#8E0013" strokeWidth="1" />
          <rect x="25" y="116" width="80" height="25" stroke="#FFA3AE" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
          <rect x="360" y="145" width="105" height="40" fill="#2E4A62" stroke="#1B2F40" strokeWidth="1" />
          <rect x="375" y="108" width="90" height="37" fill="#42454A" stroke="#25292D" strokeWidth="1" />
          {/* RTG Crane Portal Structure (In Focus) */}
          <g transform="translate(130, 20)">
            {/* Massive Gantry Legs in NAVACO Red & Charcoal */}
            <path d="M25 195 L42 22 H62 L45 195 Z" fill="#34383D" />
            <path d="M225 195 L208 22 H188 L205 195 Z" fill="#34383D" />
            {/* Upper Main Box Girder */}
            <rect x="18" y="12" width="214" height="22" fill="#D6011E" />
            <rect x="24" y="5" width="202" height="7" fill="#2C2F33" />
            {/* Trolley and Modernized Operator Cabin */}
            <rect x="95" y="34" width="60" height="16" fill="#2C2F33" />
            <rect x="145" y="42" width="22" height="20" fill="#E2E7ED" stroke="#42454A" strokeWidth="1.5" />
            <line x1="147" y1="52" x2="165" y2="52" stroke="#6B7078" strokeWidth="1" />
            {/* Hoist Wire Ropes (Teufelberger) */}
            <line x1="108" y1="50" x2="108" y2="100" stroke="#E6E6E0" strokeWidth="1.5" />
            <line x1="142" y1="50" x2="142" y2="100" stroke="#E6E6E0" strokeWidth="1.5" />
            {/* Bromma Spreader & Container */}
            <rect x="88" y="98" width="74" height="7" fill="#D6011E" />
            <rect x="84" y="105" width="82" height="38" fill="#2A3D52" stroke="#1D2B3A" strokeWidth="1.5" />
            <text x="125" y="128" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">PAS 40FT · LOADED</text>
            {/* Retrofit E-House & Siemens Cabinets on Lower Beam */}
            <rect x="12" y="160" width="46" height="28" fill="#202326" stroke="#D6011E" strokeWidth="1.5" />
            <rect x="16" y="165" width="38" height="8" fill="#009999" opacity="0.8" />
            <text x="35" y="171" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontFamily="monospace" fontWeight="bold">SIEMENS PLC</text>
            {/* Rubber Tyres */}
            <circle cx="28" cy="198" r="11" fill="#151719" stroke="#42454A" strokeWidth="2" />
            <circle cx="50" cy="198" r="11" fill="#151719" stroke="#42454A" strokeWidth="2" />
            <circle cx="200" cy="198" r="11" fill="#151719" stroke="#42454A" strokeWidth="2" />
            <circle cx="222" cy="198" r="11" fill="#151719" stroke="#42454A" strokeWidth="2" />
            {/* Engineers on Site (NAVACO Field Crew in PPE) */}
            <g transform="translate(68, 172)">
              {/* Engineer 1 */}
              <circle cx="6" cy="5" r="3" fill="#FFE0B2" />
              <path d="M3 2 H9 V5 H3 Z" fill="#F5A623" /> {/* Safety Helmet */}
              <rect x="4" y="8" width="5" height="12" fill="#D6011E" /> {/* Vest */}
              <rect x="4" y="20" width="5" height="8" fill="#1E2022" />
            </g>
            <g transform="translate(80, 172)">
              {/* Engineer 2 */}
              <circle cx="6" cy="5" r="3" fill="#FFE0B2" />
              <path d="M3 2 H9 V5 H3 Z" fill="#FFFFFF" /> {/* White Helmet */}
              <rect x="4" y="8" width="5" height="12" fill="#F5A623" />
              <rect x="4" y="20" width="5" height="8" fill="#1E2022" />
            </g>
          </g>
          {/* Signature NAVACO Diagonal N-slash Tag */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">PAS</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">RTG OVERHAUL</text>
        </svg>
      );

    case 'kalmar-ppap':
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="Kalmar Equipment Erection at Phnom Penh Port"
        >
          <defs>
            <linearGradient id="skyPPAP" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#222B35" />
              <stop offset="70%" stopColor="#3A4856" />
              <stop offset="100%" stopColor="#4E6173" />
            </linearGradient>
            <linearGradient id="riverGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A4B5E" />
              <stop offset="100%" stopColor="#1E3442" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#skyPPAP)" />
          {/* Mekong River Water & Distant Shore */}
          <rect y="125" width="480" height="45" fill="url(#riverGrad)" />
          {/* PPAP River Quay Berth */}
          <polygon points="0,165 480,158 480,260 0,260" fill="#2E3338" />
          <path d="M0 166 L480 159" stroke="#E2E2DC" strokeWidth="4" />
          {/* Transport Barge alongside Quay */}
          <rect x="40" y="142" width="220" height="22" fill="#4A3B32" stroke="#2A221C" strokeWidth="1.5" />
          {/* Heavy Lifting Mobile Crane (Assembly Phase) */}
          <g transform="translate(240, 45)">
            {/* Telescopic Lattice Boom */}
            <path d="M60 145 L-90 15 L-80 8 L68 140 Z" fill="#F5A623" />
            <line x1="64" y1="142" x2="-85" y2="12" stroke="#D48806" strokeWidth="2" />
            {/* Hoist Wire and Heavy Rigging Spreader Bar */}
            <line x1="-85" y1="12" x2="-85" y2="60" stroke="#E6E6E0" strokeWidth="2" />
            <rect x="-105" y="60" width="40" height="6" fill="#D6011E" />
            <line x1="-100" y1="66" x2="-100" y2="85" stroke="#E6E6E0" strokeWidth="1.5" />
            <line x1="-70" y1="66" x2="-70" y2="85" stroke="#E6E6E0" strokeWidth="1.5" />
            {/* Kalmar Module Suspended */}
            <rect x="-115" y="85" width="60" height="24" fill="#D6011E" stroke="#FFFFFF" strokeWidth="1" />
            <text x="-85" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">KALMAR RTG</text>
            {/* Crane Carrier & Outriggers on Quay */}
            <rect x="45" y="132" width="95" height="25" fill="#F5A623" />
            <rect x="52" y="118" width="35" height="15" fill="#2C2F33" />
            <circle cx="65" cy="158" r="9" fill="#151719" />
            <circle cx="85" cy="158" r="9" fill="#151719" />
            <circle cx="105" cy="158" r="9" fill="#151719" />
            <circle cx="125" cy="158" r="9" fill="#151719" />
          </g>
          {/* Kalmar Reach Stacker Assembled in Foreground */}
          <g transform="translate(30, 145)">
            <path d="M40 50 L115 12 L120 18 L46 56 Z" fill="#D6011E" />
            <rect x="110" y="18" width="12" height="10" fill="#2C2F33" />
            <rect x="95" y="28" width="42" height="5" fill="#D6011E" />
            <rect x="92" y="33" width="48" height="22" fill="#3D4A59" />
            <path d="M15 55 H85 L90 70 H12 Z" fill="#42454A" />
            <circle cx="28" cy="72" r="11" fill="#151719" stroke="#D6011E" strokeWidth="1.5" />
            <circle cx="78" cy="72" r="13" fill="#151719" stroke="#D6011E" strokeWidth="1.5" />
          </g>
          {/* Technical Engineers Group with Blueprints */}
          <g transform="translate(180, 182)">
            <circle cx="8" cy="6" r="3" fill="#FFE0B2" />
            <path d="M5 3 H11 V6 H5 Z" fill="#FFFFFF" />
            <rect x="5" y="9" width="6" height="13" fill="#D6011E" />
            <rect x="5" y="22" width="6" height="12" fill="#1E2022" />
            <circle cx="22" cy="6" r="3" fill="#FFE0B2" />
            <path d="M19 3 H25 V6 H19 Z" fill="#F5A623" />
            <rect x="19" y="9" width="6" height="13" fill="#343A40" />
            <rect x="19" y="22" width="6" height="12" fill="#1E2022" />
            <rect x="10" y="14" width="10" height="7" fill="#E6E6E0" stroke="#42454A" strokeWidth="0.8" />
          </g>
          {/* Corner Badge */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">PPAP</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">KALMAR</text>
        </svg>
      );

    case 'cmit-cai-mep':
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="CMIT Cái Mép Deepwater Terminal FCM Maintenance"
        >
          <defs>
            <linearGradient id="skyCMIT" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#192026" />
              <stop offset="60%" stopColor="#283542" />
              <stop offset="100%" stopColor="#435569" />
            </linearGradient>
            <linearGradient id="seaCMIT" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1B3B4E" />
              <stop offset="100%" stopColor="#24516B" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#skyCMIT)" />
          {/* Deepwater River Channel & Container Ship */}
          <rect y="120" width="480" height="42" fill="url(#seaCMIT)" />
          {/* Mega Container Vessel Silhouette at Berth */}
          <g transform="translate(180, 85)">
            <path d="M40 38 L280 34 L295 48 L20 48 Z" fill="#9E2A2B" />
            <rect x="50" y="8" width="210" height="28" fill="#2E4A62" />
            <rect x="60" y="-12" width="180" height="20" fill="#3D5A73" />
            <rect x="230" y="-22" width="25" height="30" fill="#E2E7ED" />
          </g>
          {/* Deepwater Concrete Quay */}
          <polygon points="0,160 480,154 480,260 0,260" fill="#2A2E33" />
          <path d="M0 161 L480 155" stroke="#F5A623" strokeWidth="4" />
          {/* Massive STS Quay Crane at Berth */}
          <g transform="translate(20, 15)">
            {/* Legs and Boom */}
            <path d="M40 185 L55 35 H72 L55 185 Z" fill="#3D4249" />
            <path d="M125 185 L110 35 H95 L110 185 Z" fill="#3D4249" />
            <path d="M68 35 L82 5 L96 35 Z" stroke="#3D4249" strokeWidth="4" />
            <rect x="15" y="32" width="210" height="12" fill="#D6011E" />
            <line x1="82" y1="6" x2="220" y2="34" stroke="#42454A" strokeWidth="1.8" />
            {/* Pre-fabricated E-House Unit Being Installed */}
            <rect x="35" y="20" width="38" height="15" fill="#202428" stroke="#FFFFFF" strokeWidth="1" />
            <text x="54" y="30" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontFamily="monospace" fontWeight="bold">E-HOUSE</text>
            <rect x="145" y="44" width="24" height="10" fill="#2C2F33" />
            <line x1="152" y1="54" x2="152" y2="85" stroke="#FFFFFF" strokeWidth="1.5" />
            <line x1="162" y1="54" x2="162" y2="85" stroke="#FFFFFF" strokeWidth="1.5" />
            <rect x="142" y="85" width="30" height="15" fill="#D6011E" />
          </g>
          {/* NAVACO FCM Field Technical Service Van on Quay */}
          <g transform="translate(240, 168)">
            <rect x="15" y="15" width="85" height="34" fill="#FFFFFF" stroke="#42454A" strokeWidth="1" />
            <path d="M100 24 L120 28 L120 49 H100 Z" fill="#FFFFFF" stroke="#42454A" strokeWidth="1" />
            <path d="M102 27 L116 30 L116 38 H102 Z" fill="#B0C4DE" />
            <rect x="25" y="22" width="55" height="14" fill="#D6011E" />
            <text x="52" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">NAVACO FCM</text>
            <circle cx="35" cy="50" r="9" fill="#151719" />
            <circle cx="95" cy="50" r="9" fill="#151719" />
          </g>
          {/* Engineering Crew with CMMS Tablet */}
          <g transform="translate(370, 178)">
            <circle cx="8" cy="6" r="3.5" fill="#FFE0B2" />
            <path d="M4 3 H12 V6 H4 Z" fill="#D6011E" />
            <rect x="4" y="9" width="8" height="16" fill="#D6011E" />
            <rect x="4" y="25" width="8" height="15" fill="#1E2022" />
            {/* Tablet */}
            <rect x="12" y="14" width="8" height="10" fill="#009999" stroke="#FFFFFF" strokeWidth="0.8" />
          </g>
          {/* Corner Badge */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">CMIT</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">CÁI MÉP</text>
        </svg>
      );

    case 'stoll-phnom-penh':
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="STOLL Plant MV LV Substation and Busbar Trunking"
        >
          <defs>
            <linearGradient id="factoryWall" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E242B" />
              <stop offset="100%" stopColor="#2E3742" />
            </linearGradient>
            <linearGradient id="epoxyFloor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3C4854" />
              <stop offset="100%" stopColor="#1E2328" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#factoryWall)" />
          {/* High-tech Factory Ceiling Trusses */}
          <path d="M0 25 L480 25 M0 50 L480 50" stroke="#485666" strokeWidth="2" />
          <path d="M30 0 L50 50 M70 0 L50 50 M110 0 L130 50 M150 0 L130 50 M190 0 L210 50 M230 0 L210 50 M270 0 L290 50 M310 0 L290 50 M350 0 L370 50 M390 0 L370 50 M430 0 L450 50 M470 0 L450 50" stroke="#3A4654" strokeWidth="1.5" />
          {/* Overhead High-Capacity Busbar Trunking Line */}
          <rect y="45" width="480" height="12" fill="#D6011E" />
          <rect y="50" width="480" height="4" fill="#FFA3AE" opacity="0.6" />
          <rect x="80" y="57" width="20" height="22" fill="#42454A" stroke="#E2E2DC" strokeWidth="1" />
          <line x1="90" y1="79" x2="90" y2="135" stroke="#9EA3AA" strokeWidth="2.5" />
          <rect x="220" y="57" width="20" height="22" fill="#42454A" stroke="#E2E2DC" strokeWidth="1" />
          <line x1="230" y1="79" x2="230" y2="135" stroke="#9EA3AA" strokeWidth="2.5" />
          <rect x="360" y="57" width="20" height="22" fill="#42454A" stroke="#E2E2DC" strokeWidth="1" />
          <line x1="370" y1="79" x2="370" y2="135" stroke="#9EA3AA" strokeWidth="2.5" />
          {/* Epoxy Floor */}
          <polygon points="0,150 480,150 480,260 0,260" fill="url(#epoxyFloor)" />
          <path d="M0 190 L480 190" stroke="#F5A623" strokeWidth="1.5" strokeDasharray="10 8" opacity="0.4" />
          {/* Siemens MV / LV Switchgear Lineup */}
          <g transform="translate(60, 105)">
            <rect x="0" y="0" width="260" height="85" fill="#3D454E" stroke="#1D2228" strokeWidth="2" />
            <line x1="65" y1="0" x2="65" y2="85" stroke="#252A30" strokeWidth="2" />
            <line x1="130" y1="0" x2="130" y2="85" stroke="#252A30" strokeWidth="2" />
            <line x1="195" y1="0" x2="195" y2="85" stroke="#252A30" strokeWidth="2" />
            {/* Digital Protection Relays & Indicator LEDs */}
            <rect x="15" y="15" width="35" height="20" fill="#151719" />
            <rect x="20" y="20" width="10" height="4" fill="#00FF66" />
            <rect x="80" y="15" width="35" height="20" fill="#151719" />
            <rect x="85" y="20" width="10" height="4" fill="#00FF66" />
            <rect x="145" y="15" width="35" height="20" fill="#151719" />
            <rect x="150" y="20" width="10" height="4" fill="#00FF66" />
            <rect x="210" y="15" width="35" height="20" fill="#151719" />
            <rect x="215" y="20" width="10" height="4" fill="#00FF66" />
            <text x="130" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">SIEMENS IEC 61439-2</text>
          </g>
          {/* Commissioning Electrical Engineers */}
          <g transform="translate(340, 140)">
            <circle cx="8" cy="6" r="3.5" fill="#FFE0B2" />
            <path d="M4 3 H12 V6 H4 Z" fill="#FFFFFF" />
            <rect x="4" y="9" width="8" height="18" fill="#D6011E" />
            <rect x="4" y="27" width="8" height="18" fill="#1E2022" />
            <line x1="12" y1="18" x2="30" y2="18" stroke="#00FF66" strokeWidth="1.5" />
            {/* Hi-Pot Tester Instrument */}
            <rect x="30" y="22" width="24" height="24" fill="#42454A" stroke="#E2E2DC" strokeWidth="1" />
            <circle cx="42" cy="34" r="5" fill="#009999" />
          </g>
          {/* Corner Badge */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">STOLL</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">POWER</text>
        </svg>
      );

    case 'tan-thuan-relocation':
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="Tân Thuận Port Quay Crane Dismantling and Barge Transport"
        >
          <defs>
            <linearGradient id="skyTanThuan" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E242B" />
              <stop offset="70%" stopColor="#303B47" />
              <stop offset="100%" stopColor="#4A5969" />
            </linearGradient>
            <linearGradient id="riverSaigon" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F4C5E" />
              <stop offset="100%" stopColor="#1C303D" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#skyTanThuan)" />
          {/* Saigon River Body */}
          <rect y="125" width="480" height="45" fill="url(#riverSaigon)" />
          {/* Tân Thuận Berth Quay */}
          <polygon points="0,165 480,160 480,260 0,260" fill="#2E3339" />
          <path d="M0 166 L480 161" stroke="#E2E2DC" strokeWidth="4" />
          {/* Transport Barge Moored with Crane Upper Structure */}
          <g transform="translate(60, 138)">
            <rect x="0" y="0" width="220" height="25" fill="#3D2E24" stroke="#251D17" strokeWidth="1.5" />
            <path d="M220 0 L235 15 L220 25 Z" fill="#3D2E24" stroke="#251D17" strokeWidth="1.5" />
            {/* Quay Crane Section Secured with Rigging Wire Ropes */}
            <path d="M50 0 L65 -65 L115 -65 L130 0 Z" fill="#D6011E" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="55" y1="-60" x2="20" y2="0" stroke="#E6E6E0" strokeWidth="2" />
            <line x1="125" y1="-60" x2="160" y2="0" stroke="#E6E6E0" strokeWidth="2" />
            <text x="90" y="-30" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="monospace" fontWeight="bold">QUAY CRANE T-01</text>
          </g>
          {/* Heavy 300T Mobile Crane Dismantling Rig */}
          <g transform="translate(290, 40)">
            <path d="M30 140 L-60 10 L-50 5 L40 135 Z" fill="#F5A623" />
            <line x1="-55" y1="8" x2="-55" y2="45" stroke="#E6E6E0" strokeWidth="2" />
            <rect x="-70" y="45" width="30" height="6" fill="#D6011E" />
            <rect x="15" y="130" width="85" height="25" fill="#F5A623" />
            <circle cx="35" cy="155" r="9" fill="#151719" />
            <circle cx="55" cy="155" r="9" fill="#151719" />
            <circle cx="75" cy="155" r="9" fill="#151719" />
          </g>
          {/* Rigging Specialists on Quay */}
          <g transform="translate(230, 180)">
            <circle cx="8" cy="6" r="3.5" fill="#FFE0B2" />
            <path d="M4 3 H12 V6 H4 Z" fill="#FFFFFF" />
            <rect x="4" y="9" width="8" height="15" fill="#D6011E" />
            <rect x="4" y="24" width="8" height="15" fill="#1E2022" />
          </g>
          {/* Corner Badge */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">TÂN</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">THUẬN</text>
        </svg>
      );

    case 'tien-sa-rental':
    default:
      return (
        <svg
          viewBox="0 0 480 260"
          className={`w-full h-full object-cover ${className}`}
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          role="img"
          aria-label="Tiên Sa Port Đà Nẵng Reach Stacker Rental Fleet"
        >
          <defs>
            <linearGradient id="skyTienSa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1B2631" />
              <stop offset="60%" stopColor="#2E3F4F" />
              <stop offset="100%" stopColor="#4A6278" />
            </linearGradient>
            <linearGradient id="groundTienSa" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3A3D42" />
              <stop offset="100%" stopColor="#1F2124" />
            </linearGradient>
          </defs>
          <rect width="480" height="260" fill="url(#skyTienSa)" />
          {/* Sơn Trà / Marble Mountain Ridge in Distance */}
          <path d="M0 135 Q100 110 200 128 T400 115 T480 128 L480 155 L0 155 Z" fill="#243442" opacity="0.5" />
          {/* Container Terminal Yard */}
          <rect y="150" width="480" height="110" fill="url(#groundTienSa)" />
          <path d="M0 190 L480 190" stroke="#F5A623" strokeWidth="2" strokeDasharray="14 10" opacity="0.3" />
          {/* Stacks of Containers at Tiên Sa Port */}
          <rect x="25" y="125" width="85" height="35" fill="#2E4A62" />
          <rect x="25" y="90" width="85" height="35" fill="#8B2635" />
          <rect x="360" y="115" width="95" height="40" fill="#3D4A59" />
          <rect x="360" y="75" width="95" height="40" fill="#D6011E" />
          {/* 45-Ton Reach Stacker in Center (NAVACO Rental Fleet) */}
          <g transform="translate(135, 75)">
            {/* Telescopic Boom Elevating 40ft Container */}
            <path d="M45 110 L145 25 L155 35 L55 120 Z" fill="#D6011E" />
            <path d="M100 65 L165 10 L172 18 L107 73 Z" fill="#42454A" />
            {/* Heavy Hydraulic Lift Cylinders */}
            <line x1="68" y1="125" x2="110" y2="70" stroke="#2C2F33" strokeWidth="7" />
            <line x1="72" y1="121" x2="110" y2="70" stroke="#9EA3AA" strokeWidth="3" />
            {/* Rotator & Spreader */}
            <rect x="155" y="18" width="16" height="18" fill="#2C2F33" />
            <rect x="125" y="36" width="76" height="7" fill="#D6011E" />
            {/* Lifted Shipping Container */}
            <rect x="115" y="43" width="96" height="42" fill="#223A4D" stroke="#E2E2DC" strokeWidth="1.5" />
            <text x="163" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontFamily="monospace" fontWeight="bold">TIÊN SA · 45T</text>
            {/* Machine Chassis & Cabin */}
            <path d="M10 115 H120 L128 138 H6 Z" fill="#42454A" />
            <rect x="65" y="85" width="35" height="28" fill="#2C2F33" />
            <rect x="68" y="88" width="28" height="20" fill="#B0C4DE" />
            <circle cx="28" cy="140" r="17" fill="#151719" stroke="#D6011E" strokeWidth="2" />
            <circle cx="108" cy="140" r="19" fill="#151719" stroke="#D6011E" strokeWidth="2" />
          </g>
          {/* Terminal Tractor with Chassis */}
          <g transform="translate(20, 175)">
            <rect x="10" y="8" width="40" height="22" fill="#D6011E" />
            <rect x="14" y="12" width="22" height="10" fill="#B0C4DE" />
            <circle cx="20" cy="30" r="7" fill="#151719" />
            <circle cx="42" cy="30" r="7" fill="#151719" />
          </g>
          {/* Corner Badge */}
          <polygon points="410,0 480,0 480,65 440,65" fill="#D6011E" opacity="0.85" />
          <text x="445" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">TIÊN SA</text>
          <text x="445" y="44" textAnchor="middle" fill="#E6E6E0" fontSize="7" fontFamily="monospace">RENTAL</text>
        </svg>
      );
  }
};
