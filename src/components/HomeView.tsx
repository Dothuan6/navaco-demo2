import React from 'react';
import {
  EQUIPMENT_LIST,
  Language,
  NEWS_ARTICLES,
  PARTNERS,
  PROJECTS,
  SERVICE_GROUPS,
  SERVICES,
  VERIFIED_PILLARS,
} from '../data/navacoData';
import {
  EquipmentCutoutIllustration,
  PartnerBrandMark,
} from './IndustrialVisuals';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  FileCheck2,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';

interface HomeViewProps {
  lang: Language;
  onNavigatePage: (page: string) => void;
  onSelectService: (serviceId: string) => void;
  onSelectEquipment: (equipmentId: string) => void;
  onSelectProject: (projectId: string) => void;
  onSelectNews: (newsId: string) => void;
  onOpenDocsModal: (tab?: 'analysis' | 'brand-pdf' | 'brief-pdf') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  lang,
  onNavigatePage,
  onSelectService,
  onSelectEquipment,
  onSelectProject,
  onSelectNews,
  onOpenDocsModal,
}) => {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div>
      {/* BLOCK 1: HERO SECTION (Full-bleed industrial port visual + diagonal N-slash motif) */}
      <section className="relative bg-[#2C2F33] text-white overflow-hidden border-b-4 border-[#D6011E]">
        {/* Architectural SVG Field Scene Background (RTG Sihanoukville & PPAP Port Operations) */}
        <div className="absolute inset-0 pointer-events-none opacity-35">
          <svg
            viewBox="0 0 1440 680"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1E2022" />
                <stop offset="60%" stopColor="#2C2F33" />
                <stop offset="100%" stopColor="#42454A" />
              </linearGradient>
            </defs>
            <rect width="1440" height="680" fill="url(#heroGrad)" />
            {/* Technical Coordinate Grid */}
            <path
              d="M0 140H1440M0 280H1440M0 420H1440M0 560H1440M240 0V680M480 0V680M720 0V680M960 0V680M1200 0V680"
              stroke="#52565E"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            {/* Giant N-slash Diagonal Accent in Background */}
            <polygon points="880,0 1040,0 760,680 600,680" fill="#D6011E" fillOpacity="0.22" />
            <polygon points="1060,0 1140,0 860,680 780,680" fill="#FFFFFF" fillOpacity="0.06" />
            {/* Silhouette of Port RTG & STS Cranes on Right */}
            <g transform="translate(760, 85)">
              {/* RTG Frame */}
              <path d="M90 460L125 60H160L125 460H90Z" fill="#5A5F66" />
              <path d="M510 460L475 60H440L475 460H510Z" fill="#5A5F66" />
              <rect x="80" y="36" width="440" height="32" fill="#D6011E" />
              <rect x="100" y="18" width="400" height="18" fill="#7B8088" />
              {/* Trolley & Hoist */}
              <rect x="255" y="68" width="90" height="26" fill="#E6E6E0" />
              <line x1="275" y1="94" x2="275" y2="230" stroke="#E6E6E0" strokeWidth="3" />
              <line x1="325" y1="94" x2="325" y2="230" stroke="#E6E6E0" strokeWidth="3" />
              <rect x="215" y="230" width="170" height="14" fill="#D6011E" />
              <rect x="205" y="244" width="190" height="78" fill="#3B4046" stroke="#E6E6E0" strokeWidth="2" />
              {/* Container Yard Stack */}
              <rect x="145" y="360" width="150" height="65" fill="#32363B" stroke="#6B7078" strokeWidth="2" />
              <rect x="305" y="360" width="150" height="65" fill="#32363B" stroke="#6B7078" strokeWidth="2" />
            </g>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block text-xs font-mono-tabular uppercase tracking-widest text-[#E6E6E0] border-b border-[#D6011E] pb-1.5">
                VIỆT NAM (TP.HCM · CÁI MÉP · HẢI PHÒNG · ĐÀ NẴNG) · CAMBODIA (PPAP · SIHANOUKVILLE)
              </div>

              <h1
                className="font-display font-bold uppercase tracking-tight text-white leading-[1.08]"
                style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)', textWrap: 'balance' }}
              >
                {lang === 'vi'
                  ? 'Dịch vụ kỹ thuật cho cảng biển và công nghiệp'
                  : 'Technical services for ports and industry'}
              </h1>

              <div className="inline-flex items-center gap-3">
                <span className="w-3 h-6 bg-[#D6011E] shrink-0" style={{ clipPath: 'polygon(25% 0, 100% 0, 75% 100%, 0 100%)' }} />
                <p className="font-display text-xl md:text-2xl uppercase tracking-wider text-white font-bold">
                  {lang === 'vi'
                    ? 'KẾT NỐI NĂNG LỰC - NÂNG TẦM GIÁ TRỊ'
                    : 'CONNECTING CAPABILITIES - ELEVATING VALUE'}
                </p>
              </div>

              <p className="text-base md:text-lg text-[#E6E6E0] max-w-2xl leading-relaxed">
                {lang === 'vi'
                  ? 'Đối tác kỹ thuật chuyên sâu về bảo trì trọn gói (FCM), nâng cấp retrofit điện - tự động hóa PLC/biến tần/E-House, đại tu cẩu STS/RTG, phụ tùng chính hãng và giải pháp năng lượng cảng biển.'
                  : 'Specialized engineering partner for Full Maintenance Contracts (FCM), PLC/drive/E-House retrofits, STS/RTG crane overhauls, genuine OEM spare parts, and port power infrastructure.'}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigatePage('contact')}
                  className="px-7 py-3.5 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-base transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <span>{lang === 'vi' ? 'Yêu cầu báo giá' : 'Request a Quote'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigatePage('services')}
                  className="px-7 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/50 font-display font-bold uppercase tracking-wider text-base transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {lang === 'vi' ? 'Xem giải pháp' : 'Explore Solutions'}
                </button>
                <button
                  type="button"
                  onClick={() => onOpenDocsModal('analysis')}
                  className="px-5 py-3.5 bg-[#42454A] hover:bg-[#52565E] text-white text-sm font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-2"
                >
                  <FileCheck2 className="w-4 h-4 text-white shrink-0" />
                  <span>
                    {lang === 'vi'
                      ? 'Xem Phân tích Tài liệu & Brief'
                      : 'View Brief & Brand Analysis'}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Technical Field Showcase Card with N-slash geometry */}
            <div className="lg:col-span-5">
              <div className="bg-[#1E2022]/95 border border-white/20 p-6 navaco-card-corner">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E6E6E0] pb-4 mb-4 border-b border-white/15">
                  <span>
                    {lang === 'vi'
                      ? 'HIỆN TRƯỜNG DỰ ÁN TIÊU BIỂU'
                      : 'VERIFIED FIELD OPERATIONS'}
                  </span>
                  <span className="bg-[#D6011E] text-white px-2 py-0.5 font-semibold">
                    2025 – 2026
                  </span>
                </div>

                <div className="space-y-4">
                  <div
                    onClick={() => onSelectProject('rtg-sihanoukville')}
                    className="p-4 bg-[#2C2F33] hover:bg-[#383C42] border border-white/15 transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-mono-tabular text-[#E6E6E0] font-semibold">
                      CAMBODIA · SIHANOUKVILLE (PAS)
                    </div>
                    <h2 className="font-display font-bold uppercase text-lg text-white mt-0.5">
                      {lang === 'vi'
                        ? 'Đại tu, Retrofit Điện & Đào tạo Hệ thống Cẩu RTG'
                        : 'RTG Crane Overhaul, Electrical Retrofit & Training'}
                    </h2>
                    <p className="text-xs text-[#D8D8D2] mt-1">
                      {lang === 'vi'
                        ? 'Thay mới PLC/biến tần Siemens, đại tu genset, lắp cabin mới & sơn chống ăn mòn biển.'
                        : 'Siemens PLC/drives upgrade, genset overhaul, new cabin & marine coating.'}
                    </p>
                  </div>

                  <div
                    onClick={() => onSelectProject('kalmar-ppap')}
                    className="p-4 bg-[#2C2F33] hover:bg-[#383C42] border border-white/15 transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-mono-tabular text-[#E6E6E0] font-semibold">
                      CAMBODIA · PHNOM PENH (PPAP)
                    </div>
                    <h2 className="font-display font-bold uppercase text-lg text-white mt-0.5">
                      {lang === 'vi'
                        ? 'Tiếp nhận, Lắp dựng & Bàn giao Thiết bị Kalmar'
                        : 'Kalmar Equipment Assembly & Commissioning at PPAP'}
                    </h2>
                    <p className="text-xs text-[#D8D8D2] mt-1">
                      {lang === 'vi'
                        ? 'Lắp dựng hoàn chỉnh cơ - điện - thủy lực và thử tải bàn giao tại cảng PPAP.'
                        : 'Full mechanical-hydraulic-electrical erection and load testing at PPAP.'}
                    </p>
                  </div>

                  <div
                    onClick={() => onSelectProject('cmit-cai-mep')}
                    className="p-4 bg-[#2C2F33] hover:bg-[#383C42] border border-white/15 transition-colors cursor-pointer"
                  >
                    <div className="text-xs font-mono-tabular text-[#E6E6E0] font-semibold">
                      VIỆT NAM · CÁI MÉP – THỊ VẢI (CMIT)
                    </div>
                    <h2 className="font-display font-bold uppercase text-lg text-white mt-0.5">
                      {lang === 'vi'
                        ? 'Bảo trì Trọn gói (FCM) & Phòng điện E-House chế tạo sẵn'
                        : 'Full Maintenance (FCM) & Pre-Fabricated E-House'}
                    </h2>
                    <p className="text-xs text-[#D8D8D2] mt-1">
                      {lang === 'vi'
                        ? 'Đội kỹ thuật thường trực tại cảng kết hợp lợi thế xưởng dịch vụ Cái Mép.'
                        : 'On-site FCM crew backed by our Cái Mép technical workshop.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 2: 3 NHÓM DỊCH VỤ (Lifecycle-grouped per Kalmar reference) */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? '01 · GIẢI PHÁP THEO VÒNG ĐỜI VẬN HÀNH THIẾT BỊ'
                : '01 · LIFECYCLE-ORIENTED TECHNICAL SOLUTIONS'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? '3 Nhóm Giải pháp & Dịch vụ Chủ lực'
                : '3 Core Service Lifecycle Pillars'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigatePage('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6011E] hover:underline cursor-pointer whitespace-nowrap"
          >
            <span>
              {lang === 'vi'
                ? 'Xem toàn bộ 10 dịch vụ chi tiết'
                : 'View all 10 specialized services'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICE_GROUPS.map((group) => {
            const groupServices = SERVICES.filter((s) => s.groupId === group.id);
            return (
              <div
                key={group.id}
                className="bg-white border border-[#D8D8D2] flex flex-col justify-between p-6 md:p-8 hover:border-[#42454A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E6E6E0]">
                    <span className="font-mono-tabular text-2xl font-bold text-[#D6011E] shrink-0">
                      {group.number}
                    </span>
                    <span className="text-xs font-mono-tabular text-[#42454A] text-right">
                      {group.lifecycleStage[lang]}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
                    {group.title[lang]}
                  </h3>
                  <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                    {group.summary[lang]}
                  </p>

                  <div className="mt-6 pt-4 border-t border-[#E6E6E0]">
                    <p className="text-xs font-mono-tabular uppercase text-[#6B7078] mb-3">
                      {lang === 'vi' ? 'Danh mục dịch vụ con:' : 'Included Services:'}
                    </p>
                    <ul className="space-y-2.5">
                      {groupServices.map((srv) => (
                        <li key={srv.id}>
                          <button
                            type="button"
                            onClick={() => onSelectService(srv.id)}
                            className="w-full text-left group flex items-center justify-between gap-2 py-1.5 px-2.5 bg-[#F7F7F5] hover:bg-[#42454A] hover:text-white transition-colors cursor-pointer"
                          >
                            <span className="text-sm font-medium">
                              <strong className="font-mono-tabular text-[#D6011E] group-hover:text-white mr-2">
                                {srv.number}
                              </strong>
                              {srv.title[lang]}
                            </span>
                            <ArrowRight className="w-4 h-4 shrink-0 text-[#42454A] group-hover:text-white" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E6E0]">
                  <button
                    type="button"
                    onClick={() => onSelectService(groupServices[0].id)}
                    className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-[#D6011E] hover:text-[#B00018] cursor-pointer"
                  >
                    <span>{lang === 'vi' ? 'Xem thêm nhóm này' : 'Explore Group'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BLOCK 3: THIẾT BỊ ("Chúng tôi phục vụ thiết bị nào" - 6 cutout cards strip) */}
      <section className="py-16 bg-white border-y border-[#D8D8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                {lang === 'vi'
                  ? '02 · NĂNG LỰC THEO TỪNG DÒNG THIẾT BỊ CẢNG BIỂN'
                  : '02 · CAPABILITIES BY PORT EQUIPMENT LINE'}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022] mt-1">
                {lang === 'vi'
                  ? 'Chúng tôi phục vụ thiết bị nào'
                  : 'Equipment Lines We Service'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigatePage('equipment')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6011E] hover:underline cursor-pointer whitespace-nowrap"
            >
              <span>
                {lang === 'vi' ? 'Xem danh mục Thiết bị' : 'View Full Equipment Catalog'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EQUIPMENT_LIST.map((eq, index) => (
              <div
                key={eq.id}
                onClick={() => onSelectEquipment(eq.id)}
                className="group bg-[#F7F7F5] border border-[#D8D8D2] hover:border-[#D6011E] transition-colors flex flex-col justify-between cursor-pointer"
              >
                {/* Cutout illustration box on clean off-white canvas */}
                <div className="relative h-48 p-4 bg-white border-b border-[#E6E6E0] flex items-center justify-center overflow-hidden">
                  <span className="absolute top-3 left-3 font-mono-tabular text-xs font-bold text-[#42454A]">
                    0{index + 1} · {eq.code}
                  </span>
                  <div className="w-full h-full group-hover:scale-105 transition-transform duration-150">
                    <EquipmentCutoutIllustration equipmentId={eq.id} />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-mono-tabular text-[#6B7078]">
                      {eq.categoryLabel[lang]}
                    </p>
                    <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1 group-hover:text-[#D6011E] transition-colors">
                      {eq.name[lang]}
                    </h3>
                    <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                      {eq.oneLiner[lang]}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E6E6E0] flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#1E2022] group-hover:text-[#D6011E]">
                    <span>
                      {lang === 'vi'
                        ? 'Xem phạm vi NAVACO thực hiện'
                        : 'See What NAVACO Delivers'}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 4: DỰ ÁN NỔI BẬT (3 thẻ: RTG Sihanoukville, Kalmar tại PPAP, CMIT) */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? '03 · HỒ SƠ DỰ ÁN THỰC TẾ TẠI VIỆT NAM & CAMBODIA'
                : '03 · VERIFIED CASE STUDIES IN VIETNAM & CAMBODIA'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi' ? 'Dự án tiêu biểu' : 'Featured Engineering Projects'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigatePage('projects')}
            className="px-5 py-2.5 bg-[#42454A] hover:bg-[#2C2F33] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
          >
            <span>{lang === 'vi' ? 'Xem tất cả dự án' : 'View All Projects'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="group bg-white border border-[#D8D8D2] hover:border-[#42454A] flex flex-col justify-between cursor-pointer transition-colors"
            >
              <div>
                {/* Project Visual Header with N-slash diagonal accent */}
                <div className="relative h-48 bg-[#2C2F33] text-white p-5 flex flex-col justify-between overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 w-24 bg-[#D6011E]/25 pointer-events-none"
                    style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 0 100%)' }}
                  />
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono-tabular">
                    <span className="text-[#E6E6E0]">
                      0{idx + 1} · {project.countryLabel[lang].toUpperCase()}
                    </span>
                    <span className="text-[#D6011E] bg-white px-2 py-0.5 font-bold">
                      {project.timeframe}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <p className="text-xs font-mono-tabular text-[#D8D8D2]">
                      {project.client[lang]} · {project.serviceTag[lang]}
                    </p>
                    <p className="font-display text-lg font-bold uppercase text-white mt-1 line-clamp-2">
                      {project.equipmentUsed[lang]}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#6B7078] mb-2">
                    <span>{project.serviceTag[lang]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.countryLabel[lang]}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] group-hover:text-[#D6011E] transition-colors">
                    {project.title[lang]}
                  </h3>

                  <p className="text-sm text-[#42454A] mt-3 line-clamp-3 leading-relaxed">
                    {project.summary[lang]}
                  </p>
                </div>
              </div>

              <div className="px-6 py-4 bg-[#F7F7F5] border-t border-[#E6E6E0] flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#1E2022] group-hover:text-[#D6011E]">
                <span>
                  {lang === 'vi'
                    ? 'Xem chi tiết & So sánh Trước / Sau'
                    : 'View Case Study & Before / After'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BLOCK 5: VÌ SAO NAVACO (4 ý kiểm chứng được - không dùng số liệu chưa xác minh) */}
      <section className="py-16 md:py-20 bg-[#42454A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
              {lang === 'vi'
                ? '04 · NĂNG LỰC THỰC TẾ ĐƯỢC KIỂM CHỨNG'
                : '04 · VERIFIABLE ENGINEERING CAPABILITIES'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mt-1">
              {lang === 'vi'
                ? 'Vì sao các cảng biển & nhà máy chọn NAVACO'
                : 'Why Ports & Industrial Plants Trust NAVACO'}
            </h2>
            <p className="text-sm md:text-base text-[#E6E6E0] mt-2">
              {lang === 'vi'
                ? 'Năng lực của NAVACO được chứng minh bằng đội ngũ kỹ sư có chứng chỉ hãng, cơ sở vật chất tại Cái Mép và kết quả bàn giao tại Việt Nam & Cambodia.'
                : 'Backed by OEM-certified engineers, our permanent Cái Mép workshop, genuine spare parts ecosystem, and field-proven operations across Vietnam and Cambodia.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VERIFIED_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-[#2C2F33] border border-white/15 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/15">
                    <span className="font-mono-tabular text-2xl font-bold text-[#D6011E]">
                      {pillar.number}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#E6E6E0]" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-white">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-sm text-[#D8D8D2] mt-3 leading-relaxed">
                    {pillar.desc[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 text-xs text-[#E6E6E0] flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                  <span>{pillar.evidence[lang]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 6: ĐỐI TÁC (Dải logo xám -> hiện màu khi rê chuột; chỉ đưa hãng hợp tác chính thức) */}
      <section className="py-16 bg-white border-b border-[#D8D8D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                {lang === 'vi'
                  ? '05 · HỆ SINH THÁI ĐỐI TÁC KỸ THUẬT & PHỤ TÙNG (PORT ECOSYSTEM)'
                  : '05 · OFFICIAL PORT ECOSYSTEM & OEM PARTNERS'}
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#1E2022] mt-1">
                {lang === 'vi'
                  ? 'Đối tác công nghệ & Phụ tùng chính hãng'
                  : 'Technology & Genuine Spare Parts Partners'}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigatePage('partners')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6011E] hover:underline cursor-pointer whitespace-nowrap"
            >
              <span>
                {lang === 'vi'
                  ? 'Xem chi tiết NAVACO cung cấp gì của từng hãng'
                  : 'See what NAVACO supplies from each partner'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div
            onClick={() => onNavigatePage('partners')}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 cursor-pointer"
          >
            {PARTNERS.map((partner) => (
              <PartnerBrandMark
                key={partner.id}
                partnerId={partner.id}
                name={partner.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 7: TIN TỨC (3 bài mới nhất, chuỗi bài Sihanoukville & kỹ thuật) */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              {lang === 'vi'
                ? '06 · TIN DỰ ÁN, SỰ KIỆN & KIẾN THỨC KỸ THUẬT'
                : '06 · PROJECT LOGS, EVENTS & ENGINEERING INSIGHTS'}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Tin tức & Nhật ký hiện trường'
                : 'Latest Field News & Technical Articles'}
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigatePage('news')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#D6011E] hover:underline cursor-pointer whitespace-nowrap"
          >
            <span>{lang === 'vi' ? 'Xem tất cả bài viết' : 'View All Articles'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectNews(article.id)}
              className="group bg-white border border-[#D8D8D2] hover:border-[#42454A] p-6 flex flex-col justify-between cursor-pointer transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-[#6B7078] mb-3">
                  <span className="font-semibold text-[#D6011E]">
                    {article.categoryLabel[lang]}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono-tabular">{article.date}</span>
                </div>

                {article.seriesBadge && (
                  <p className="text-xs font-mono-tabular text-[#42454A] mb-1.5">
                    {article.seriesBadge[lang]}
                  </p>
                )}

                <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] group-hover:text-[#D6011E] transition-colors">
                  {article.title[lang]}
                </h3>

                <p className="text-sm text-[#42454A] mt-3 line-clamp-3 leading-relaxed">
                  {article.excerpt[lang]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E6E0] flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#1E2022] group-hover:text-[#D6011E]">
                <span>{lang === 'vi' ? 'Đọc chi tiết bài viết' : 'Read Full Article'}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BLOCK 8: HỒ SƠ NĂNG LỰC + TUYỂN DỤNG (2 khối nhỏ cạnh nhau) */}
      <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Tải hồ sơ năng lực (Profile v1.2 PDF & Brand Guideline) */}
          <div className="bg-white border border-[#D8D8D2] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                  COMPANY PROFILE V1.2 &amp; BRAND GUIDELINE V1.0
                </span>
                <Download className="w-5 h-5 text-[#42454A]" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
                {lang === 'vi'
                  ? 'Tải Hồ sơ năng lực & Bộ nhận diện NAVACO'
                  : 'Download NAVACO Capability Profile & Brand Docs'}
              </h3>
              <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                {lang === 'vi'
                  ? 'Tài liệu tổng hợp năng lực kỹ thuật, danh mục dự án cảng biển Việt Nam – Cambodia, xưởng Cái Mép và quy chuẩn nhận diện thương hiệu NAVACO (PDF).'
                  : 'Complete overview of NAVACO’s engineering capabilities, Vietnam–Cambodia project credentials, Cái Mép workshop, and brand standards (PDF).'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6E6E0] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenDocsModal('analysis')}
                className="px-5 py-2.5 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>
                  {lang === 'vi' ? 'Tải hồ sơ năng lực (PDF)' : 'Download Company Profile (PDF)'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => onOpenDocsModal('brand-pdf')}
                className="px-4 py-2.5 bg-[#F7F7F5] hover:bg-[#E6E6E0] text-[#1E2022] border border-[#C8C8C0] text-sm font-medium transition-colors cursor-pointer"
              >
                {lang === 'vi' ? 'Xem Logo Guideline v1.0' : 'View Logo Guideline v1.0'}
              </button>
            </div>
          </div>

          {/* Card 2: Gia nhập đội ngũ NAVACO (Tuyển dụng) */}
          <div className="bg-white border border-[#D8D8D2] p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                  {lang === 'vi' ? 'TUYỂN DỤNG KỸ SƯ & KỸ THUẬT VIÊN' : 'ENGINEERING CAREERS AT NAVACO'}
                </span>
                <Users className="w-5 h-5 text-[#42454A]" />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
                {lang === 'vi'
                  ? 'Gia nhập đội ngũ kỹ thuật NAVACO'
                  : 'Join the NAVACO Field Engineering Team'}
              </h3>
              <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                {lang === 'vi'
                  ? 'Môi trường làm việc chuyên nghiệp, trang bị đầy đủ đồng phục & bảo hộ chuẩn quốc tế, cơ hội làm chủ công nghệ cẩu cảng Siemens/Kalmar tại Việt Nam và Cambodia.'
                  : 'Work directly on STS/RTG crane retrofits, Siemens automation, and Kalmar machinery across major terminals in Vietnam and Cambodia.'}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6E6E0] flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigatePage('careers')}
                className="px-5 py-2.5 bg-[#42454A] hover:bg-[#2C2F33] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer flex items-center gap-2"
              >
                <Wrench className="w-4 h-4" />
                <span>
                  {lang === 'vi'
                    ? 'Xem vị trí đang tuyển & Ứng tuyển'
                    : 'View Open Roles & Apply'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BLOCK 9: KÊU GỌI CUỐI TRANG (Nền Graphite, 1 câu + nút Yêu cầu báo giá + nút Tải hồ sơ năng lực) */}
      <section className="bg-[#42454A] text-white border-t-4 border-[#D6011E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
              NAVACO TECHNICAL SUPPORT · VIETNAM &amp; CAMBODIA
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase text-white mt-1">
              {lang === 'vi'
                ? 'Cần hỗ trợ kỹ thuật cho thiết bị của bạn?'
                : 'Need engineering support for your port equipment?'}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => onNavigatePage('contact')}
              className="px-7 py-3.5 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-base transition-colors cursor-pointer whitespace-nowrap"
            >
              {lang === 'vi' ? 'Yêu cầu báo giá' : 'Request a Quote'}
            </button>
            <button
              type="button"
              onClick={() => onOpenDocsModal('analysis')}
              className="px-6 py-3.5 bg-transparent hover:bg-white/10 text-white border border-white/60 font-display font-bold uppercase tracking-wider text-base transition-colors cursor-pointer whitespace-nowrap flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'vi' ? 'Tải hồ sơ năng lực' : 'Download Profile'}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
