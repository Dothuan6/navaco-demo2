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
