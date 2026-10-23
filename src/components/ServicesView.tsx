import React from 'react';
import {
  Language,
  PARTNERS,
  PROJECTS,
  QuoteSubmission,
  SERVICE_GROUPS,
  SERVICES,
  ServiceGroupId,
} from '../data/navacoData';
import { PartnerBrandMark, ProjectFieldVisual } from './IndustrialVisuals';
import { QuoteRequestForm } from './QuoteRequestForm';
import { ArrowRight, CheckCircle2, AlertTriangle, ChevronRight } from 'lucide-react';

interface ServicesViewProps {
  lang: Language;
  selectedServiceId: string;
  selectedGroupId: ServiceGroupId;
  onSelectService: (serviceId: string) => void;
  onSelectGroup: (groupId: ServiceGroupId) => void;
  onSelectProject: (projectId: string) => void;
  onNavigateHome: () => void;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  lang,
  selectedServiceId,
  selectedGroupId,
  onSelectService,
  onSelectGroup,
  onSelectProject,
  onNavigateHome,
  onQuoteSubmitted,
  submittedQuotesCount,
}) => {
  const activeService =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const activeGroup =
    SERVICE_GROUPS.find((g) => g.id === activeService.groupId) ||
    SERVICE_GROUPS[0];

  const relatedProjects = PROJECTS.filter((p) =>
    activeService.relatedProjectIds.includes(p.id)
  );
  const relatedPartners = PARTNERS.filter((p) =>
    activeService.partnerIds.includes(p.id)
  );

  return (
    <div>
      {/* BLOCK 1 OF 7: SUBPAGE HERO + BREADCRUMB */}
      <section className="bg-[#2C2F33] text-white border-b-4 border-[#D6011E] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
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
            <span>
              {lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Solutions & Services'}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span>{activeGroup.title[lang]}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="text-white font-semibold">
              {activeService.title[lang]}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                {activeService.number} · {activeGroup.title[lang].toUpperCase()}
              </span>
              <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
                {activeService.title[lang]}
              </h1>
              <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-3">
                {activeService.shortDesc[lang]}
              </p>
            </div>
            <a
              href="#service-quote-section"
              className="px-6 py-3 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
            >
              {lang === 'vi' ? 'Yêu cầu báo giá dịch vụ này' : 'Request Quote for This Service'}
            </a>
          </div>
        </div>
      </section>

      {/* LIFECYCLE GROUP & 10-SERVICE SELECTOR BAR */}
      <section className="bg-white border-b border-[#D8D8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {SERVICE_GROUPS.map((group) => {
              const isGroupActive = group.id === activeGroup.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => {
                    onSelectGroup(group.id);
                    const firstSrv = SERVICES.find((s) => s.groupId === group.id);
                    if (firstSrv) onSelectService(firstSrv.id);
                  }}
                  className={`relative p-3.5 text-left border transition-all cursor-pointer ${
                    isGroupActive
                      ? 'bg-[#42454A] text-white border-[#42454A] shadow-sm'
                      : 'bg-[#F7F7F5] text-[#1E2022] border-[#D8D8D2] hover:border-[#42454A]'
                  }`}
                >
                  {isGroupActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#D6011E]" />
                  )}
                  <div className="flex items-center justify-between text-xs font-mono-tabular">
                    <span
                      className={
                        isGroupActive
                          ? 'text-[#D6011E] font-bold bg-white px-1.5 py-0.5'
                          : 'text-[#D6011E] font-bold'
                      }
                    >
                      {group.number}
                    </span>
                    <span className={isGroupActive ? 'text-[#E6E6E0]' : 'text-[#6B7078]'}>
                      {group.serviceIds.length}{' '}
                      {lang === 'vi' ? 'dịch vụ con' : 'services'}
                    </span>
                  </div>
                  <div className="font-display text-lg font-bold uppercase mt-1">
                    {group.title[lang]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Sub-services selector pills for the active category only */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#E6E6E0]">
            <span className="text-xs font-mono-tabular uppercase text-[#6B7078] mr-2">
              {lang === 'vi'
                ? `${activeGroup.title.vi} (${SERVICES.filter((s) => s.groupId === activeGroup.id).length}):`
                : `${activeGroup.title.en} (${SERVICES.filter((s) => s.groupId === activeGroup.id).length}):`}
            </span>
            {SERVICES.filter((s) => s.groupId === activeGroup.id).map((srv) => {
              const isSelected = srv.id === activeService.id;
              return (
                <button
                  key={srv.id}
                  type="button"
                  onClick={() => onSelectService(srv.id)}
                  className={`px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-[#D6011E] text-white font-bold shadow-xs'
                      : 'bg-[#F7F7F5] text-[#42454A] border border-[#D8D8D2] hover:bg-[#E6E6E0] hover:text-[#1E2022]'
                  }`}
                >
                  <span className="font-mono-tabular mr-1.5 font-bold">{srv.number}</span>
                  {srv.title[lang]}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* BLOCK 2 & 3 OF 7: VẤN ĐỀ KHÁCH HÀNG GẶP -> NAVACO LÀM GÌ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Block 2: Vấn đề khách hàng gặp */}
          <div className="bg-white border border-[#D8D8D2] p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E6E0]">
              <div>
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#6B7078]">
                  {lang === 'vi' ? 'KHỐI 02 · THÁCH THỨC VẬN HÀNH' : 'BLOCK 02 · OPERATIONAL PAIN POINTS'}
                </span>
                <h2 className="font-display text-2xl font-bold uppercase text-[#1E2022] mt-0.5">
                  {lang === 'vi' ? 'Vấn đề khách hàng thường gặp' : 'Customer Challenges'}
                </h2>
              </div>
              <AlertTriangle className="w-6 h-6 text-[#42454A]" />
            </div>

            <div className="space-y-5">
              {activeService.customerProblems.map((prob, idx) => (
                <div key={idx} className="p-4 bg-[#F7F7F5] border border-[#E6E6E0]">
                  <h3 className="font-display text-lg font-bold uppercase text-[#1E2022]">
                    {prob.title[lang]}
                  </h3>
                  <p className="text-sm text-[#42454A] mt-1.5 leading-relaxed">
                    {prob.detail[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: NAVACO làm gì */}
          <div className="bg-[#42454A] text-white p-6 md:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
              <div>
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
                  {lang === 'vi' ? 'KHỐI 03 · GIẢI PHÁP CỦA NAVACO' : 'BLOCK 03 · WHAT NAVACO DELIVERS'}
                </span>
                <h2 className="font-display text-2xl font-bold uppercase text-white mt-0.5">
                  {lang === 'vi' ? 'NAVACO thực hiện những gì' : 'How NAVACO Solves It'}
                </h2>
              </div>
              <CheckCircle2 className="w-6 h-6 text-[#D6011E]" />
            </div>

            <div className="space-y-5">
              {activeService.whatNavacoDoes.map((sol, idx) => (
                <div key={idx} className="p-4 bg-[#2C2F33] border border-white/10">
                  <h3 className="font-display text-lg font-bold uppercase text-white flex items-center gap-2">
                    <span className="font-mono-tabular text-[#D6011E]">0{idx + 1}.</span>
                    <span>{sol.title[lang]}</span>
                  </h3>
                  <p className="text-sm text-[#E6E6E0] mt-1.5 leading-relaxed">
                    {sol.detail[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BLOCK 4 OF 7: QUY TRÌNH TRIỂN KHAI (4 BƯỚC) */}
        <section className="bg-white border border-[#D8D8D2] p-6 md:p-8">
          <div className="mb-8">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? 'KHỐI 04 · QUY TRÌNH KỸ THUẬT TIÊU CHUẨN'
                : 'BLOCK 04 · STANDARDIZED ENGINEERING WORKFLOW'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Quy trình triển khai & Nghiệm thu'
                : 'Execution & Commissioning Process'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeService.processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-[#F7F7F5] border border-[#D8D8D2] p-5 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-2xl font-bold text-[#D6011E]">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#1E2022] mt-2">
                    {step.title[lang]}
                  </h3>
                  <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                    {step.desc[lang]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCK 5 OF 7: DỰ ÁN LIÊN QUAN */}
        <section>
          <div className="mb-6">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? 'KHỐI 05 · DỰ ÁN THỰC TẾ LIÊN QUAN'
                : 'BLOCK 05 · RELATED FIELD PROJECTS'}
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Dự án kiểm chứng năng lực'
                : 'Proven Reference Projects'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => onSelectProject(proj.id)}
                className="group bg-white border border-[#D8D8D2] hover:border-[#D6011E] flex flex-col justify-between cursor-pointer transition-colors overflow-hidden"
              >
                <div>
                  <div className="relative h-40 bg-[#2C2F33] overflow-hidden">
                    <ProjectFieldVisual projectId={proj.id} />
                    <div
                      className="absolute right-0 top-0 bottom-0 w-20 bg-[#D6011E]/20 pointer-events-none z-10"
                      style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }}
                    />
                    <div className="absolute top-3 left-3 z-20">
                      <span className="bg-[#1E2022]/85 text-[#E6E6E0] px-2 py-0.5 border border-white/20 font-mono-tabular text-xs font-semibold">
                        {proj.countryLabel[lang].toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs font-mono-tabular text-[#6B7078] mb-2">
                      <span className="text-[#D6011E] font-semibold">
                        {proj.countryLabel[lang]}
                      </span>
                      <span>·</span>
                      <span>{proj.client[lang]}</span>
                      <span>·</span>
                      <span>{proj.serviceTag[lang]}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] group-hover:text-[#D6011E] transition-colors">
                      {proj.title[lang]}
                    </h3>
                    <p className="text-sm text-[#42454A] mt-2 leading-relaxed line-clamp-3">
                      {proj.summary[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 bg-[#F7F7F5] border-t border-[#E6E6E0] flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#1E2022] group-hover:text-[#D6011E]">
                  <span>
                    {lang === 'vi'
                      ? 'Xem hồ sơ dự án thực tế'
                      : 'Inspect Project Details'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCK 6 OF 7: HÃNG LIÊN QUAN */}
        <section className="bg-white border border-[#D8D8D2] p-6 md:p-8">
          <div className="mb-6">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? 'KHỐI 06 · HÃNG CÔNG NGHỆ & PHỤ TÙNG LIÊN QUAN'
                : 'BLOCK 06 · ASSOCIATED OEM TECHNOLOGY PARTNERS'}
            </span>
            <h2 className="font-display text-2xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Đối tác chính hãng trong hạng mục này'
                : 'Official OEM Brands in This Scope'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPartners.map((partner) => (
              <div
                key={partner.id}
                className="p-4 bg-[#F7F7F5] border border-[#E6E6E0] flex flex-col justify-between"
              >
                <PartnerBrandMark partnerId={partner.id} name={partner.name} />
                <p className="text-xs text-[#42454A] mt-3 leading-relaxed">
                  {partner.whatNavacoProvides[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BLOCK 7 OF 7: FORM YÊU CẦU BÁO GIÁ */}
        <section id="service-quote-section">
          <QuoteRequestForm
            lang={lang}
            defaultNeed={activeService.defaultNeedType}
            defaultEquipment={activeService.title[lang]}
            contextTitle={
              lang === 'vi'
                ? `Yêu cầu báo giá: ${activeService.title.vi}`
                : `Request Quote: ${activeService.title.en}`
            }
            onQuoteSubmitted={onQuoteSubmitted}
            submittedQuotesCount={submittedQuotesCount}
          />
        </section>
      </div>
    </div>
  );
};
