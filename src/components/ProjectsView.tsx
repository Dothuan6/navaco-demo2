import React, { useState } from 'react';
import {
  Language,
  PROJECTS,
  QuoteSubmission,
  SERVICE_GROUPS,
  ServiceGroupId,
} from '../data/navacoData';
import { filterProjects } from '../utils/navacoLogic';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { QuoteRequestForm } from './QuoteRequestForm';
import { ProjectFieldVisual } from './IndustrialVisuals';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  MapPin,
  Wrench,
  Calendar,
  Building2,
} from 'lucide-react';

interface ProjectsViewProps {
  lang: Language;
  selectedProjectId: string;
  onSelectProject: (projectId: string) => void;
  onNavigateHome: () => void;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  lang,
  selectedProjectId,
  onSelectProject,
  onNavigateHome,
  onQuoteSubmitted,
  submittedQuotesCount,
}) => {
  const [countryFilter, setCountryFilter] = useState<'ALL' | 'VN' | 'KH'>('ALL');
  const [serviceFilter, setServiceFilter] = useState<'ALL' | ServiceGroupId>('ALL');

  const filteredProjects = filterProjects(
    PROJECTS,
    { country: countryFilter, serviceGroup: serviceFilter },
    lang
  );

  const activeProject =
    PROJECTS.find((p) => p.id === selectedProjectId) || PROJECTS[0];

  const otherProjects = PROJECTS.filter((p) => p.id !== activeProject.id).slice(
    0,
    3
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
            <span>{lang === 'vi' ? 'Dự án' : 'Projects'}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="text-white font-semibold">
              {activeProject.client[lang]}
            </span>
          </nav>

          <div>
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? 'HỒ SƠ NĂNG LỰC THỰC THI · VIỆT NAM & CAMBODIA'
                : 'VERIFIED CASE STUDIES · VIETNAM & CAMBODIA'}
            </span>
            <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
              {lang === 'vi'
                ? 'Dự án Kỹ thuật Cảng biển & Công nghiệp'
                : 'Port & Industrial Engineering Case Studies'}
            </h1>
            <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
              {lang === 'vi'
                ? 'Mỗi dự án ghi nhận rõ khách hàng, phạm vi kỹ thuật, kết quả thực tế và đối chiếu Trước / Sau khi triển khai.'
                : 'Every case study documents client context, engineering scope, verifiable outcomes, and interactive Before/After comparisons.'}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* PROJECT CATALOG + FILTER BAR BY COUNTRY & SERVICE */}
        <section>
          <div className="bg-white border border-[#D8D8D2] p-5 mb-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Country Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tabular uppercase text-[#6B7078] mr-1">
                {lang === 'vi' ? 'Quốc gia:' : 'Country:'}
              </span>
              {(
                [
                  { id: 'ALL', vi: 'Tất cả (6)', en: 'All Countries (6)' },
                  { id: 'VN', vi: 'Việt Nam', en: 'Vietnam' },
                  { id: 'KH', vi: 'Cambodia', en: 'Cambodia' },
                ] as const
              ).map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCountryFilter(c.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    countryFilter === c.id
                      ? 'bg-[#D6011E] text-white'
                      : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
                  }`}
                >
                  {c[lang]}
                </button>
              ))}
            </div>

            {/* Service Group Filter */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono-tabular uppercase text-[#6B7078] mr-1">
                {lang === 'vi' ? 'Nhóm dịch vụ:' : 'Service Group:'}
              </span>
              <button
                type="button"
                onClick={() => setServiceFilter('ALL')}
                className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                  serviceFilter === 'ALL'
                    ? 'bg-[#42454A] text-white'
                    : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
                }`}
              >
                {lang === 'vi' ? 'Tất cả dịch vụ' : 'All Services'}
              </button>
              {SERVICE_GROUPS.map((grp) => (
                <button
                  key={grp.id}
                  type="button"
                  onClick={() => setServiceFilter(grp.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
                    serviceFilter === grp.id
                      ? 'bg-[#42454A] text-white'
                      : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
                  }`}
                >
                  {grp.title[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Filtered Project Cards Grid */}
          {filteredProjects.length === 0 ? (
            <div className="bg-white border border-[#D8D8D2] p-8 text-center text-sm text-[#42454A]">
              {lang === 'vi'
                ? 'Không có dự án nào khớp bộ lọc hiện tại.'
                : 'No projects match the current filter.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((proj) => {
                const isSelected = proj.id === activeProject.id;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => onSelectProject(proj.id)}
                    className={`group text-left flex flex-col justify-between transition-colors cursor-pointer border-2 overflow-hidden ${
                      isSelected
                        ? 'bg-white border-[#D6011E]'
                        : 'bg-white border-[#D8D8D2] hover:border-[#42454A]'
                    }`}
                  >
                    {/* Project Image Header */}
                    <div className="relative w-full h-48 overflow-hidden bg-[#2C2F33]">
                      <ProjectFieldVisual projectId={proj.id} />
                      <div className="absolute top-3 left-3 bg-[#1E2022]/90 text-white text-[11px] font-mono-tabular px-2.5 py-1 border-l-2 border-[#D6011E]">
                        <span className="text-[#D6011E] font-bold mr-1.5">{proj.countryLabel[lang]}</span>
                        <span className="text-[#D8D8D2]">· {proj.serviceTag[lang]}</span>
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-mono-tabular text-[#6B7078] mb-1.5">
                          {proj.client[lang]} · {proj.equipmentUsed[lang]}
                        </div>

                        <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] group-hover:text-[#D6011E] transition-colors leading-snug">
                          {proj.title[lang]}
                        </h3>

                        <p className="text-sm text-[#42454A] mt-3 line-clamp-3 leading-relaxed">
                          {proj.summary[lang]}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`w-full px-6 py-3 border-t text-xs font-display font-bold uppercase tracking-wider flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#D6011E] text-white border-[#D6011E]'
                          : 'bg-[#F7F7F5] text-[#1E2022] border-[#E6E6E0] group-hover:bg-[#42454A] group-hover:text-white'
                      }`}
                    >
                      <span>
                        {isSelected
                          ? lang === 'vi'
                            ? 'Đang xem chi tiết bên dưới'
                            : 'Active Case Study Below'
                          : lang === 'vi'
                          ? 'Xem chi tiết & Trước / Sau'
                          : 'Inspect Case Study'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        {/* PROJECT DETAIL CASE STUDY: Quick Info -> Challenge -> Solution -> Before/After Slider -> Gallery -> Other Projects */}
        <section className="bg-white border-2 border-[#42454A] p-6 md:p-10 space-y-10">
          {/* Header & Quick Info Strip (Thông tin nhanh: khách hàng, quốc gia, dịch vụ, thiết bị, thời gian - không đưa giá) */}
          <div className="pb-8 border-b border-[#E6E6E0]">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi' ? 'CHI TIẾT HỒ SƠ DỰ ÁN (CASE STUDY)' : 'ENGINEERING CASE STUDY DETAIL'}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022] mt-1">
              {activeProject.title[lang]}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="p-4 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2 text-xs text-[#6B7078]">
                  <Building2 className="w-4 h-4 text-[#D6011E]" />
                  <span>{lang === 'vi' ? 'Khách hàng / Địa điểm' : 'Client / Terminal'}</span>
                </div>
                <p className="font-semibold text-sm text-[#1E2022] mt-1">
                  {activeProject.client[lang]}
                </p>
              </div>

              <div className="p-4 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2 text-xs text-[#6B7078]">
                  <MapPin className="w-4 h-4 text-[#D6011E]" />
                  <span>{lang === 'vi' ? 'Quốc gia & Khu vực' : 'Country & Location'}</span>
                </div>
                <p className="font-semibold text-sm text-[#1E2022] mt-1">
                  {activeProject.location[lang]}
                </p>
              </div>

              <div className="p-4 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2 text-xs text-[#6B7078]">
                  <Wrench className="w-4 h-4 text-[#D6011E]" />
                  <span>{lang === 'vi' ? 'Dịch vụ & Thiết bị' : 'Service & Equipment'}</span>
                </div>
                <p className="font-semibold text-sm text-[#1E2022] mt-1">
                  {activeProject.serviceTag[lang]} · {activeProject.equipmentUsed[lang]}
                </p>
              </div>

              <div className="p-4 bg-[#F7F7F5] border border-[#D8D8D2]">
                <div className="flex items-center gap-2 text-xs text-[#6B7078]">
                  <Calendar className="w-4 h-4 text-[#D6011E]" />
                  <span>{lang === 'vi' ? 'Thời gian thực hiện' : 'Execution Period'}</span>
                </div>
                <p className="font-mono-tabular font-semibold text-sm text-[#1E2022] mt-1">
                  {activeProject.timeframe}
                </p>
              </div>
            </div>
          </div>

          {/* Challenge -> Solution -> Outcomes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2]">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#6B7078]">
                  01 · {lang === 'vi' ? 'THÁCH THỨC KỸ THUẬT' : 'ENGINEERING CHALLENGE'}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1">
                  {lang === 'vi' ? 'Hiện trạng & Bài toán đặt ra' : 'Initial Condition & Scope Challenge'}
                </h3>
                <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                  {activeProject.challenge[lang]}
                </p>
              </div>

              <div className="p-6 bg-[#42454A] text-white">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
                  02 · {lang === 'vi' ? 'GIẢI PHÁP CỦA NAVACO' : 'NAVACO TECHNICAL SOLUTION'}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-white mt-1">
                  {lang === 'vi' ? 'Phương án triển khai thực tế' : 'Turnkey Engineering Execution'}
                </h3>
                <p className="text-sm text-[#E6E6E0] mt-2 leading-relaxed">
                  {activeProject.solution[lang]}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#F7F7F5] border border-[#D8D8D2] p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                  03 · {lang === 'vi' ? 'KẾT QUẢ NGHIỆM THU & BÀN GIAO' : 'VERIFIED PROJECT OUTCOMES'}
                </span>
                <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1 mb-4">
                  {lang === 'vi'
                    ? 'Giá trị mang lại cho khách hàng'
                    : 'Operational Impact Delivered'}
                </h3>
                <ul className="space-y-3">
                  {activeProject.outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="p-3.5 bg-white border border-[#E6E6E0] flex items-start gap-3 text-sm text-[#1E2022]"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#D6011E] shrink-0 mt-0.5" />
                      <span>{outcome[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#D8D8D2]">
                <p className="text-xs font-mono-tabular uppercase text-[#6B7078] mb-2">
                  {lang === 'vi' ? 'Nhật ký hình ảnh hiện trường:' : 'Field Documentation Log:'}
                </p>
                <div className="space-y-2">
                  {activeProject.galleryCaptions.map((cap, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-[#42454A] flex items-center gap-2"
                    >
                      <span className="font-mono-tabular font-bold text-[#D6011E]">
                        [0{idx + 1}]
                      </span>
                      <span>{cap[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Before / After Comparison Slider */}
          <BeforeAfterSlider project={activeProject} lang={lang} />

          {/* Other Projects */}
          <div className="pt-6 border-t border-[#E6E6E0]">
            <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mb-4">
              {lang === 'vi' ? 'Các dự án liên quan khác' : 'Other Reference Projects'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherProjects.map((op) => (
                <button
                  key={op.id}
                  type="button"
                  onClick={() => onSelectProject(op.id)}
                  className="p-4 bg-[#F7F7F5] border border-[#D8D8D2] hover:border-[#D6011E] text-left transition-colors cursor-pointer"
                >
                  <span className="text-xs font-mono-tabular text-[#D6011E] font-semibold">
                    {op.countryLabel[lang]} · {op.client[lang]}
                  </span>
                  <h4 className="font-display text-base font-bold uppercase text-[#1E2022] mt-1 line-clamp-2">
                    {op.title[lang]}
                  </h4>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section>
          <QuoteRequestForm
            lang={lang}
            defaultNeed="upgrade"
            defaultEquipment={activeProject.equipmentUsed[lang]}
            contextTitle={
              lang === 'vi'
                ? 'Yêu cầu tư vấn giải pháp tương tự dự án này'
                : 'Request Consultation for a Similar Project'
            }
            onQuoteSubmitted={onQuoteSubmitted}
            submittedQuotesCount={submittedQuotesCount}
          />
        </section>
      </div>
    </div>
  );
};
