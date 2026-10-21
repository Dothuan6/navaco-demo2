import React, { useState } from 'react';
import { Language } from '../data/navacoData';
import { globalSearch, SearchResultItem } from '../utils/navacoLogic';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectResult: (result: SearchResultItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = globalSearch(query, lang);
  const quickSuggestions = [
    'RTG Sihanoukville',
    'Kalmar',
    'Siemens',
    'E-House',
    'FCM',
    'Bubenzer',
    'Reach Stacker',
  ];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center pt-16 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'vi' ? 'Tìm kiếm trên NAVACO' : 'Search NAVACO'}
    >
      <div className="bg-white border-2 border-[#42454A] w-full max-w-2xl overflow-hidden shadow-xl">
        <div className="p-4 border-b border-[#D8D8D2] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#D6011E] shrink-0" />
          <input
            type="search"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'vi'
                ? 'Tìm dịch vụ, dòng thiết bị (STS, RTG), dự án (Sihanoukville, PPAP), hãng đối tác...'
                : 'Search services, equipment (STS, RTG), projects (Sihanoukville, PPAP), partners...'
            }
            className="w-full text-base text-[#1E2022] focus:outline-none"
            aria-label={lang === 'vi' ? 'Từ khóa tìm kiếm' : 'Search query'}
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === 'vi' ? 'Đóng tìm kiếm' : 'Close search'}
            className="p-1.5 text-[#42454A] hover:text-[#1E2022] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 bg-[#F7F7F5] border-b border-[#E6E6E0] flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[#6B7078] font-medium">
            {lang === 'vi' ? 'Gợi ý nhanh:' : 'Quick keywords:'}
          </span>
          {quickSuggestions.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setQuery(kw)}
              className="px-2.5 py-1 bg-white border border-[#D8D8D2] hover:border-[#D6011E] text-[#1E2022] transition-colors cursor-pointer"
            >
              {kw}
            </button>
          ))}
        </div>

        <div className="max-h-96 overflow-y-auto divide-y divide-[#E6E6E0]">
          {query.trim() === '' ? (
            <div className="p-8 text-center text-sm text-[#6B7078]">
              {lang === 'vi'
                ? 'Nhập tên thiết bị, dịch vụ bảo trì/retrofit, tên cảng hoặc mã hãng phụ tùng để tra cứu nhanh.'
                : 'Enter an equipment model, retrofit service, port name, or OEM brand to search.'}
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-sm text-[#6B7078]">
              {lang === 'vi'
                ? `Không tìm thấy kết quả phù hợp cho "${query}".`
                : `No matching results found for "${query}".`}
            </div>
          ) : (
            results.map((item) => (
              <button
                key={`${item.type}-${item.id}`}
                type="button"
                onClick={() => {
                  onSelectResult(item);
                  onClose();
                }}
                className="w-full text-left p-4 hover:bg-[#F7F7F5] flex items-center justify-between gap-4 transition-colors cursor-pointer"
              >
                <div>
                  <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                    {item.typeLabel}
                  </span>
                  <h4 className="font-display text-lg font-bold text-[#1E2022]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#42454A] line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#42454A] shrink-0" />
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
