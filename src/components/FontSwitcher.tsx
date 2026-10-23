import React, { useState } from 'react';
import { Language } from '../data/navacoData';
import { Type, Check, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export type DemoFontId =
  | 'be-vietnam-pro'
  | 'helvetica-neue'
  | 'stabil-grotesk'
  | 'barlow-semi-condensed'
  | 'jetbrains-mono';

export interface FontOption {
  id: DemoFontId;
  label: string;
  cssFamily: string;
  badge: { vi: string; en: string };
  description: { vi: string; en: string };
  previewSample: string;
}

export const DEMO_FONTS: FontOption[] = [
  {
    id: 'be-vietnam-pro',
    label: 'Be Vietnam Pro',
    cssFamily: "'Be Vietnam Pro', system-ui, sans-serif",
    badge: { vi: 'Chuẩn Việt hóa', en: 'Vietnamese Standard' },
    description: {
      vi: 'Dấu thanh cân đối, tối ưu đọc trên màn hình điện tử hiện đại.',
      en: 'Balanced Vietnamese diacritics, optimized for digital readability.',
    },
    previewSample: 'Cẩu RTG Sihanoukville · 40FT · FCM',
  },
  {
    id: 'helvetica-neue',
    label: 'Helvetica Neue',
    cssFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    badge: { vi: 'Chuẩn Brand NAVACO', en: 'Brand Guideline' },
    description: {
      vi: 'Font nhận diện thương hiệu Navaco chính thức, thanh lịch & chuẩn mực.',
      en: 'Official NAVACO brand guideline font, timeless & professional.',
    },
    previewSample: 'Dịch Vụ Cảng Biển & Công Nghiệp 2026',
  },
  {
    id: 'stabil-grotesk',
    label: 'Stabil Grotesk',
    cssFamily: "'Stabil Grotesk', 'Space Grotesk', 'Schibsted Grotesk', system-ui, sans-serif",
    badge: { vi: 'Grotesk Đương đại', en: 'Modern Grotesk' },
    description: {
      vi: 'Phong cách Neo-Grotesque tinh gọn, cấu trúc hình học cân bằng & tối giản.',
      en: 'Contemporary Neo-Grotesque, rational geometric balance & Swiss clarity.',
    },
    previewSample: 'NAVACO ENGINEERING & PORT RETROFIT 2026',
  },
  {
    id: 'barlow-semi-condensed',
    label: 'Barlow Semi Condensed',
    cssFamily: "'Barlow Semi Condensed', sans-serif",
    badge: { vi: 'Cơ điện & Công nghiệp', en: 'Heavy Industry' },
    description: {
      vi: 'Khung chữ hẹp, đậm chất công nghiệp nặng, cảng biển & cơ khí chế tạo.',
      en: 'Condensed geometric style, strong port engineering & heavy mechanical look.',
    },
    previewSample: 'ĐẠI TU CẨU BỜ · SIEMENS PLC RETROFIT',
  },
  {
    id: 'jetbrains-mono',
    label: 'JetBrains Mono',
    cssFamily: "'JetBrains Mono', monospace",
    badge: { vi: 'Thông số Monospace', en: 'Technical Monospace' },
    description: {
      vi: 'Font đơn khoảng cách, sắc sảo cho mã thiết bị & số liệu kiểm định.',
      en: 'Monospaced clarity for technical logs, PLC codes & diagnostics.',
    },
    previewSample: 'STATUS: OK · 450V · 50Hz · SA 2.5',
  },
];

interface FontSwitcherProps {
  activeFont: DemoFontId;
  onSelectFont: (fontId: DemoFontId) => void;
  lang: Language;
}

export const FontSwitcher: React.FC<FontSwitcherProps> = ({
  activeFont,
  onSelectFont,
  lang,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const activeFontObj =
    DEMO_FONTS.find((f) => f.id === activeFont) || DEMO_FONTS[0];

  return (
    <aside
      aria-label="Demo Typography Switcher"
      className="fixed bottom-4 left-4 z-40 max-w-sm w-[calc(100vw-2rem)] sm:w-96 bg-[#1E2022] text-white border-2 border-[#D6011E] shadow-2xl transition-all duration-200"
    >
      {/* Header Bar */}
      <div className="px-3.5 py-2.5 bg-[#151719] border-b border-white/10 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#D6011E] text-white flex items-center justify-center shrink-0">
            <Type className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#E6E6E0] flex items-center gap-1.5">
              <span>{lang === 'vi' ? 'Demo Font Chữ' : 'Font Typography Demo'}</span>
              <span className="px-1.5 py-0.2 bg-[#D6011E]/30 text-[#D6011E] border border-[#D6011E]/50 text-[9px] font-semibold">
                {lang === 'vi' ? 'Đồng bộ 1 font' : '1 Font Unified'}
              </span>
            </div>
            <p className="text-[10px] text-[#A0A4AB]">
              {lang === 'vi' ? 'Đang dùng:' : 'Active:'}{' '}
              <span className="text-white font-bold">{activeFontObj.label}</span>
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 text-[#A0A4AB] hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          title={isExpanded ? 'Thu nhỏ bảng font' : 'Mở rộng bảng chọn font'}
          aria-label={isExpanded ? 'Thu nhỏ' : 'Mở rộng'}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Expanded Panel Body */}
      {isExpanded ? (
        <div className="p-3 space-y-2">
          <div className="grid grid-cols-1 gap-1.5">
            {DEMO_FONTS.map((font) => {
              const isSelected = font.id === activeFont;
              return (
                <button
                  key={font.id}
                  type="button"
                  onClick={() => onSelectFont(font.id)}
                  style={{ fontFamily: font.cssFamily }}
                  className={`w-full p-2.5 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#D6011E] text-white border-[#D6011E] shadow-md'
                      : 'bg-[#2A2E33] hover:bg-[#343940] text-[#E6E6E0] border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-bold tracking-tight">
                      {font.label}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`text-[9px] uppercase px-1.5 py-0.5 font-sans font-medium ${
                          isSelected
                            ? 'bg-black/30 text-white'
                            : 'bg-[#1E2022] text-[#A0A4AB]'
                        }`}
                      >
                        {font.badge[lang]}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0" />}
                    </div>
                  </div>

                  <p
                    className={`text-[11px] mt-1 leading-snug line-clamp-1 opacity-90 ${
                      isSelected ? 'text-white' : 'text-[#A0A4AB]'
                    }`}
                  >
                    {font.previewSample}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#A0A4AB]">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D6011E]" />
              {lang === 'vi'
                ? 'Toàn bộ tiêu đề & nội dung đổi tức thì'
                : 'All headings & body switch instantly'}
            </span>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="text-xs text-[#E6E6E0] hover:text-white underline cursor-pointer"
            >
              {lang === 'vi' ? 'Thu gọn' : 'Minimize'}
            </button>
          </div>
        </div>
      ) : (
        <div className="px-3 py-1.5 bg-[#25282C] flex items-center justify-between text-[11px]">
          <span className="text-[#A0A4AB]">
            {lang === 'vi' ? 'Bấm để đổi font xem trước' : 'Click to preview fonts'}
          </span>
          <button
            type="button"
            onClick={() => setIsExpanded(true)}
            className="text-[#D6011E] hover:underline font-bold cursor-pointer"
          >
            {lang === 'vi' ? 'Đổi font' : 'Switch'}
          </button>
        </div>
      )}
    </aside>
  );
};

export const FontQuickSelectorTop: React.FC<{
  activeFont: DemoFontId;
  onSelectFont: (fontId: DemoFontId) => void;
  lang: Language;
}> = ({ activeFont, onSelectFont, lang }) => {
  return (
    <div className="inline-flex items-center gap-1.5 font-mono-tabular shrink-0 text-xs">
      <Type className="w-3.5 h-3.5 text-[#D6011E] shrink-0" />
      <span className="text-[#A0A4AB] hidden md:inline">
        {lang === 'vi' ? 'Font:' : 'Font:'}
      </span>
      <select
        value={activeFont}
        onChange={(e) => onSelectFont(e.target.value as DemoFontId)}
        aria-label="Chọn font chữ demo"
        className="bg-[#2A2E33] text-white text-xs px-2 py-0.5 border border-white/20 hover:border-[#D6011E] focus:outline-none focus:border-[#D6011E] cursor-pointer"
      >
        {DEMO_FONTS.map((f) => (
          <option key={f.id} value={f.id} className="bg-[#1E2022] text-white">
            {f.label} ({f.badge[lang]})
          </option>
        ))}
      </select>
    </div>
  );
};
