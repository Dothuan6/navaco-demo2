import React, { useRef, useState } from 'react';
import { Language, ProjectItem } from '../data/navacoData';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  project: ProjectItem;
  lang: Language;
}

/**
 * Interactive Before/After Same-Angle Comparison Slider per Brief Section 4d:
 * "Trước / Sau dùng thanh kéo so sánh 2 ảnh cùng góc"
 *
 * Symmetrical visibility logic:
 * - When in "Xem Trước" mode (sliderPos <= 35), the After info box is hidden.
 * - When in "Xem Sau" mode (sliderPos >= 65), the Before info box is hidden.
 * - When in 50/50 mode, both info boxes stay on their respective halves.
 */
export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  project,
  lang,
}) => {
  // sliderPos represents the percentage of the AFTER view (0 = 100% Before, 100 = 100% After)
  const [sliderPos, setSliderPos] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPointerDown, setIsPointerDown] = useState<boolean>(false);

  // Before view width percentage
  const beforePercent = Math.max(0, Math.min(100, 100 - sliderPos));
  const afterPercent = Math.max(0, Math.min(100, sliderPos));

  // Symmetrical info box visibility:
  // When mostly/fully viewing Before (sliderPos < 40), hide the After info box.
  // When mostly/fully viewing After (sliderPos > 60), hide the Before info box.
  const showBeforeInfo = sliderPos <= 60;
  const showAfterInfo = sliderPos >= 40;

  const handlePointerMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const rawRatio = Math.max(0, Math.min(1, x / rect.width));
    // Since x goes from left (0) to right (1), at x=0 beforePercent=0 -> sliderPos=100.
    // At x=1 beforePercent=100 -> sliderPos=0.
    const newAfterPercent = Math.round((1 - rawRatio) * 100);
    setSliderPos(newAfterPercent);
  };

  return (
    <div className="bg-white border border-[#D8D8D2] p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            {lang === 'vi'
              ? 'SO SÁNH TRƯỚC & SAU KHI TRIỂN KHAI (CÙNG GÓC ĐỐI CHIẾU)'
              : 'SAME-ANGLE BEFORE & AFTER ENGINEERING COMPARISON'}
          </p>
          <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
            {lang === 'vi'
              ? 'Kéo thanh trượt để đối chiếu kết quả kỹ thuật'
              : 'Drag Slider to Compare Pre- and Post-Project State'}
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#42454A]">
          <span className={beforePercent > 50 ? 'font-bold text-[#1E2022]' : ''}>
            {lang === 'vi' ? 'Trước:' : 'Before:'} {beforePercent}%
          </span>
          <span>·</span>
          <span className={afterPercent > 50 ? 'font-bold text-[#D6011E]' : ''}>
            {lang === 'vi' ? 'Sau:' : 'After:'} {afterPercent}%
          </span>
        </div>
      </div>

      {/* Same-angle interactive viewport with direct click & drag support */}
      <div
        ref={containerRef}
        onPointerDown={(e) => {
          setIsPointerDown(true);
          handlePointerMove(e.clientX);
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        }}
        onPointerMove={(e) => {
          if (isPointerDown) {
            handlePointerMove(e.clientX);
          }
        }}
        onPointerUp={(e) => {
          setIsPointerDown(false);
          try {
            (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
          } catch {
            // ignore
          }
        }}
        className="relative w-full h-80 md:h-96 overflow-hidden border border-[#42454A] select-none bg-[#2C2F33] cursor-ew-resize"
      >
        {/* AFTER LAYER (Clipped to the right portion: from beforePercent to 100%) */}
        <div
          className="absolute inset-0 bg-[#1E242B] text-white p-6 flex flex-col justify-between overflow-hidden"
          style={{
            clipPath: `polygon(${beforePercent}% 0, 100% 0, 100% 100%, ${beforePercent}% 100%)`,
          }}
        >
          {/* Technical SVG diagram representing the modernized AFTER state */}
          <svg
            viewBox="0 0 800 320"
            className="absolute inset-0 w-full h-full opacity-90 pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="320" fill="#1E252D" />
            {/* Clean grid lines */}
            <path
              d="M0 80H800M0 160H800M0 240H800M160 0V320M320 0V320M480 0V320M640 0V320"
              stroke="#2E3844"
              strokeWidth="1"
            />
            {/* Modernized Crane / E-House / Switchgear Schematic */}
            <rect x="110" y="55" width="580" height="24" fill="#D6011E" />
            <rect x="145" y="79" width="22" height="190" fill="#E6E6E0" />
            <rect x="633" y="79" width="22" height="190" fill="#E6E6E0" />
            {/* Pre-fabricated E-House & Modern Cabin */}
            <rect x="210" y="95" width="165" height="95" fill="#42454A" stroke="#D6011E" strokeWidth="3" />
            <text x="292" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="bold">
              SIEMENS PLC / SINAMICS
            </text>
            <text x="292" y="152" textAnchor="middle" fill="#9EE6B8" fontSize="12" fontFamily="monospace">
              CMS DIAGNOSTICS: ACTIVE
            </text>
            <rect x="430" y="95" width="160" height="95" fill="#42454A" stroke="#FFFFFF" strokeWidth="2" />
            <text x="510" y="130" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontFamily="monospace" fontWeight="bold">
              NEW CABIN &amp; COATING
            </text>
            <text x="510" y="152" textAnchor="middle" fill="#E6E6E0" fontSize="12" fontFamily="monospace">
              MARINE GRADE SA 2.5
            </text>
            {/* Spreader & Load */}
            <rect x="330" y="212" width="140" height="44" fill="#D6011E" />
            <text x="400" y="239" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontFamily="monospace" fontWeight="bold">
              100% SWL CERTIFIED
            </text>
          </svg>

          {/* Top Label */}
          <div
            className={`relative z-10 flex justify-end transition-opacity duration-200 ${
              sliderPos >= 15 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="px-3 py-1 bg-[#D6011E] text-white text-xs font-mono-tabular uppercase font-semibold">
              {project.afterState.label[lang]}
            </span>
          </div>

          {/* AFTER INFO BOX: Hidden when viewing Before */}
          {showAfterInfo && (
            <div className="relative z-10 bg-[#1E2022]/95 border border-white/20 p-4 max-w-sm sm:max-w-md ml-auto shadow-lg animate-fadeIn">
              <p className="text-xs font-mono-tabular text-[#E6E6E0] mb-2 font-medium">
                {project.afterState.visualNote[lang]}
              </p>
              <ul className="space-y-1 text-xs text-white">
                {project.afterState.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#D6011E] shrink-0" />
                    <span>{m[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* BEFORE LAYER (Clipped to the left portion: from 0% to beforePercent) */}
        <div
          className="absolute inset-0 bg-[#3A3835] text-white p-6 flex flex-col justify-between overflow-hidden"
          style={{
            clipPath: `polygon(0 0, ${beforePercent}% 0, ${beforePercent}% 100%, 0 100%)`,
          }}
        >
          <svg
            viewBox="0 0 800 320"
            className="absolute inset-0 w-full h-full opacity-90 pointer-events-none"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="320" fill="#353330" />
            <path
              d="M0 80H800M0 160H800M0 240H800M160 0V320M320 0V320M480 0V320M640 0V320"
              stroke="#4A4640"
              strokeWidth="1"
            />
            {/* Same-angle Legacy/Weathered Crane State */}
            <rect x="110" y="55" width="580" height="24" fill="#6E5A4F" />
            <rect x="145" y="79" width="22" height="190" fill="#78726A" />
            <rect x="633" y="79" width="22" height="190" fill="#78726A" />
            <rect x="210" y="95" width="165" height="95" fill="#4A4540" stroke="#9E8B7E" strokeWidth="2" strokeDasharray="6 4" />
            <text x="292" y="130" textAnchor="middle" fill="#E5D5C5" fontSize="14" fontFamily="monospace" fontWeight="bold">
              LEGACY RELAY / OLD PLC
            </text>
            <text x="292" y="152" textAnchor="middle" fill="#F5B895" fontSize="12" fontFamily="monospace">
              OBSOLETE SPARES · FAULTS
            </text>
            <rect x="430" y="95" width="160" height="95" fill="#4A4540" stroke="#9E8B7E" strokeWidth="2" strokeDasharray="6 4" />
            <text x="510" y="130" textAnchor="middle" fill="#E5D5C5" fontSize="14" fontFamily="monospace" fontWeight="bold">
              WEATHERED STRUCTURE
            </text>
            <text x="510" y="152" textAnchor="middle" fill="#E5D5C5" fontSize="12" fontFamily="monospace">
              COATING &amp; CABIN WEAR
            </text>
            <rect x="330" y="212" width="140" height="44" fill="#5C554E" />
            <text x="400" y="239" textAnchor="middle" fill="#E5D5C5" fontSize="13" fontFamily="monospace" fontWeight="bold">
              PRE-OVERHAUL STATE
            </text>
          </svg>

          {/* Top Label */}
          <div
            className={`relative z-10 flex justify-start transition-opacity duration-200 ${
              sliderPos <= 85 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span className="px-3 py-1 bg-[#42454A] text-white text-xs font-mono-tabular uppercase font-semibold border border-white/30">
              {project.beforeState.label[lang]}
            </span>
          </div>

          {/* BEFORE INFO BOX: Hidden when viewing After */}
          {showBeforeInfo && (
            <div className="relative z-10 bg-[#2C2F33]/95 border border-white/20 p-4 max-w-sm sm:max-w-md shadow-lg animate-fadeIn">
              <p className="text-xs font-mono-tabular text-[#D8D8D2] mb-2 font-medium">
                {project.beforeState.visualNote[lang]}
              </p>
              <ul className="space-y-1 text-xs text-[#E6E6E0]">
                {project.beforeState.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#9EA3AA] shrink-0" />
                    <span>{m[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Vertical Divider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D6011E] pointer-events-none z-20"
          style={{ left: `${beforePercent}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-[#D6011E] text-white flex items-center justify-center shadow-lg border-2 border-white">
            <MoveHorizontal className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Accessible Range Input Control & Preset Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-1">
          <label
            htmlFor={`before-after-range-${project.id}`}
            className="text-xs font-mono-tabular uppercase text-[#42454A] shrink-0 font-semibold"
          >
            {lang === 'vi' ? 'Thanh kéo:' : 'Slider:'}
          </label>
          <input
            id={`before-after-range-${project.id}`}
            type="range"
            min={0}
            max={100}
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="w-full accent-[#D6011E] cursor-pointer"
            aria-label={
              lang === 'vi'
                ? 'Thanh kéo so sánh trước và sau dự án'
                : 'Before and after project comparison slider'
            }
          />
        </div>

        <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => setSliderPos(0)}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
              sliderPos <= 20
                ? 'bg-[#42454A] text-white border-[#42454A] font-bold shadow-xs'
                : 'bg-white border-[#C8C8C0] hover:border-[#42454A] text-[#42454A]'
            }`}
          >
            {lang === 'vi' ? 'Xem Trước' : 'View Before'}
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(50)}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
              sliderPos > 20 && sliderPos < 80
                ? 'bg-[#F7F7F5] border-[#D6011E] text-[#D6011E] font-bold shadow-xs'
                : 'bg-white border-[#C8C8C0] hover:border-[#42454A] text-[#42454A]'
            }`}
          >
            {lang === 'vi' ? 'So sánh 50/50' : '50 / 50'}
          </button>
          <button
            type="button"
            onClick={() => setSliderPos(100)}
            className={`px-3 py-1.5 text-xs font-medium border transition-colors cursor-pointer ${
              sliderPos >= 80
                ? 'bg-[#D6011E] text-white border-[#D6011E] font-bold shadow-xs'
                : 'bg-white border-[#C8C8C0] hover:border-[#D6011E] text-[#D6011E]'
            }`}
          >
            {lang === 'vi' ? 'Xem Sau' : 'View After'}
          </button>
        </div>
      </div>
    </div>
  );
};
