import React from 'react';
import {
  EQUIPMENT_LIST,
  Language,
  PARTNERS,
  PROJECTS,
  QuoteSubmission,
} from '../data/navacoData';
import {
  EquipmentCutoutIllustration,
  PartnerBrandMark,
} from './IndustrialVisuals';
import { QuoteRequestForm } from './QuoteRequestForm';
import { ArrowRight, ChevronRight, Settings, ShieldCheck, Wrench, Truck } from 'lucide-react';

interface EquipmentViewProps {
  lang: Language;
  selectedEquipmentId: string;
  onSelectEquipment: (id: string) => void;
  onSelectProject: (projectId: string) => void;
  onNavigateHome: () => void;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
}

export const EquipmentView: React.FC<EquipmentViewProps> = ({
  lang,
  selectedEquipmentId,
  onSelectEquipment,
  onSelectProject,
  onNavigateHome,
  onQuoteSubmitted,
  submittedQuotesCount,
}) => {
  const activeEq =
    EQUIPMENT_LIST.find((e) => e.id === selectedEquipmentId) || EQUIPMENT_LIST[0];

  const relatedProjects = PROJECTS.filter((p) =>
    activeEq.relatedProjectIds.includes(p.id)
  );
  const relatedPartners = PARTNERS.filter((p) =>
    activeEq.partnerIds.includes(p.id)
  );

  return (
    <div>
      {/* SUBPAGE HERO + BREADCRUMB */}
      <section className="bg-[#2C2F33] text-white border-b-4 border-[#D6011E] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#D8D8D2] mb-4"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white cursor-pointer"
            >
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span>{lang === 'vi' ? 'Thiết bị phục vụ' : 'Equipment Lines'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="text-white font-semibold">
              {activeEq.name[lang]}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                {lang === 'vi'
                  ? 'NĂNG LỰC KỸ THUẬT THEO DÒNG THIẾT BỊ (KHÔNG BÁN LẺ THIẾT BỊ)'
                  : 'ENGINEERING SCOPE BY EQUIPMENT LINE'}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
                {lang === 'vi'
                  ? 'Các dòng Thiết bị Cảng biển NAVACO phục vụ'
                  : 'Port Equipment Lines Serviced by NAVACO'}
              </h1>
              <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
                {lang === 'vi'
                  ? 'Chọn dòng thiết bị bên dưới để xem chi tiết phạm vi Bảo trì trọn gói, Phụ tùng chính hãng, Nâng cấp Retrofit và Cho thuê của NAVACO.'
                  : 'Select an equipment line below to inspect NAVACO’s maintenance, OEM spare parts, retrofit, and rental capabilities.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* MAGIRUS-STYLE 6 EQUIPMENT CATALOG GRID */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
              {lang === 'vi'
                ? 'Danh mục 6 dòng thiết bị chủ lực (Kiểu Magirus)'
                : '6 Core Port Equipment Categories'}
            </h2>
            <span className="text-xs font-mono-tabular text-[#6B7078]">
              {lang === 'vi' ? 'Nhấn vào thẻ để xem chi tiết kỹ thuật' : 'Click any card to inspect'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_LIST.map((eq, idx) => {
              const isSelected = eq.id === activeEq.id;
              return (
                <button
                  key={eq.id}
                  type="button"
                  onClick={() => onSelectEquipment(eq.id)}
                  className={`text-left transition-all cursor-pointer flex flex-col justify-between border-2 ${
                    isSelected
                      ? 'bg-white border-[#D6011E]'
                      : 'bg-white border-[#D8D8D2] hover:border-[#42454A]'
                  }`}
                >
                  <div className="w-full">
                    <div className="relative h-44 p-4 bg-[#F7F7F5] border-b border-[#E6E6E0] flex items-center justify-center">
                      <span
                        className={`absolute top-3 left-3 px-2 py-0.5 text-xs font-mono-tabular font-bold ${
                          isSelected
                            ? 'bg-[#D6011E] text-white'
                            : 'bg-[#42454A] text-white'
                        }`}
                      >
                        0{idx + 1} · {eq.code}
                      </span>
                      <EquipmentCutoutIllustration equipmentId={eq.id} />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-mono-tabular text-[#6B7078]">
                        {eq.categoryLabel[lang]}
                      </p>
                      <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1">
                        {eq.name[lang]}
                      </h3>
                      <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                        {eq.oneLiner[lang]}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-full px-5 py-3 border-t text-xs font-display font-bold uppercase tracking-wider flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#D6011E] text-white border-[#D6011E]'
                        : 'bg-[#F7F7F5] text-[#1E2022] border-[#E6E6E0]'
                    }`}
                  >
                    <span>
                      {isSelected
                        ? lang === 'vi'
                          ? 'Đang xem chi tiết bên dưới'
                          : 'Viewing Details Below'
                        : lang === 'vi'
                        ? 'Xem năng lực cho thiết bị này'
                        : 'Inspect Equipment Capabilities'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* SELECTED EQUIPMENT DETAIL SECTION: Hero -> What NAVACO Does -> Projects -> Brands -> Form */}
        <section className="bg-white border-2 border-[#42454A] p-6 md:p-10 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-[#E6E6E0]">
            <div className="lg:col-span-5 bg-[#F7F7F5] border border-[#D8D8D2] p-6 h-64 flex items-center justify-center">
              <EquipmentCutoutIllustration equipmentId={activeEq.id} />
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                <span>{activeEq.code} SERIES</span>
                <span>·</span>
                <span>{activeEq.categoryLabel[lang]}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022]">
                {lang === 'vi'
                  ? `NAVACO làm được gì cho ${activeEq.name.vi}`
                  : `What NAVACO Delivers for ${activeEq.name.en}`}
              </h2>
              <p className="text-base text-[#42454A] leading-relaxed">
                {activeEq.oneLiner[lang]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {activeEq.specs.map((spec, i) => (
                  <div key={i} className="p-3 bg-[#F7F7F5] border border-[#E6E6E0]">
                    <span className="block text-xs text-[#6B7078]">
                      {spec.label[lang]}
                    </span>
                    <span className="text-xs font-semibold text-[#1E2022] mt-0.5 block">
                      {spec.value[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Capability Pillars for this Equipment */}
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022] mb-6">
              {lang === 'vi'
                ? '4 Hạng mục Kỹ thuật Chuyên sâu'
                : '4 Core Engineering Scopes for This Machine'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2.5 text-[#D6011E] font-display font-bold uppercase text-lg">
                  <ShieldCheck className="w-5 h-5" />
                  <span>
                    {lang === 'vi'
                      ? '01. Bảo trì định kỳ & Trọn gói (FCM)'
                      : '01. Preventive & Full Maintenance (FCM)'}
                  </span>
                </div>
                <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                  {activeEq.capabilities.maintenance[lang]}
                </p>
              </div>

              <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2.5 text-[#D6011E] font-display font-bold uppercase text-lg">
                  <Settings className="w-5 h-5" />
                  <span>
                    {lang === 'vi'
                      ? '02. Cung cấp & Lắp đặt Phụ tùng chính hãng'
                      : '02. Genuine OEM Spare Parts & Installation'}
                  </span>
                </div>
                <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                  {activeEq.capabilities.spareParts[lang]}
                </p>
              </div>

              <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2.5 text-[#D6011E] font-display font-bold uppercase text-lg">
                  <Wrench className="w-5 h-5" />
                  <span>
                    {lang === 'vi'
                      ? '03. Nâng cấp Retrofit, Đại tu & Di dời'
                      : '03. Electrical Retrofit, Overhaul & Relocation'}
                  </span>
                </div>
                <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                  {activeEq.capabilities.upgrade[lang]}
                </p>
              </div>

              <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2.5 text-[#D6011E] font-display font-bold uppercase text-lg">
                  <Truck className="w-5 h-5" />
                  <span>
                    {lang === 'vi'
                      ? '04. Cho thuê Thiết bị & Cung ứng Nhân sự'
                      : '04. Equipment Rental & Operator Manpower'}
                  </span>
                </div>
                <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                  {activeEq.capabilities.rental[lang]}
                </p>
              </div>
            </div>
          </div>

          {/* Related Projects & Partners for this Equipment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 border-t border-[#E6E6E0]">
            <div className="lg:col-span-7">
              <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mb-4">
                {lang === 'vi'
                  ? `Dự án thực tế trên dòng ${activeEq.code}`
                  : `Reference Projects Involving ${activeEq.code}`}
              </h3>
              <div className="space-y-3">
                {relatedProjects.map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => onSelectProject(proj.id)}
                    className="p-4 bg-[#F7F7F5] border border-[#D8D8D2] hover:border-[#D6011E] flex items-center justify-between gap-4 cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="text-xs font-mono-tabular text-[#D6011E] font-semibold">
                        {proj.countryLabel[lang]} · {proj.client[lang]}
                      </span>
                      <h4 className="font-display text-lg font-bold uppercase text-[#1E2022]">
                        {proj.title[lang]}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#42454A] shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mb-4">
                {lang === 'vi'
                  ? 'Hãng phụ tùng & công nghệ liên quan'
                  : 'Associated OEM Brands'}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {relatedPartners.map((partner) => (
                  <PartnerBrandMark
                    key={partner.id}
                    partnerId={partner.id}
                    name={partner.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUOTE REQUEST FORM FOR EQUIPMENT */}
        <section>
          <QuoteRequestForm
            lang={lang}
            defaultNeed="maintenance"
            defaultEquipment={activeEq.name[lang]}
            contextTitle={
              lang === 'vi'
                ? `Yêu cầu báo giá kỹ thuật cho: ${activeEq.name.vi}`
                : `Request Engineering Quote for: ${activeEq.name.en}`
            }
            onQuoteSubmitted={onQuoteSubmitted}
            submittedQuotesCount={submittedQuotesCount}
          />
        </section>
      </div>
    </div>
  );
};
