import React, { useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  EQUIPMENT_LIST,
  Language,
  QuoteSubmission,
  SERVICE_GROUPS,
  SERVICES,
  ServiceGroupId,
} from './data/navacoData';
import { NavacoLogo } from './components/NavacoLogo';
import { EquipmentCutoutIllustration } from './components/IndustrialVisuals';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { EquipmentView } from './components/EquipmentView';
import { ProjectsView } from './components/ProjectsView';
import {
  AboutView,
  CareersView,
  PartnersView,
} from './components/PartnersAndAboutView';
import { ContactView, NewsView } from './components/NewsAndContactView';
import { DocumentAnalysisModal } from './components/DocumentAnalysisModal';
import { SearchModal } from './components/SearchModal';
import {
  FontSwitcher,
  FontQuickSelectorTop,
  DemoFontId,
} from './components/FontSwitcher';
import { SearchResultItem } from './utils/navacoLogic';
import {
  ChevronDown,
  Download,
  Globe,
  Menu,
  MessageSquare,
  Phone,
  Search,
  X,
  ArrowRight,
  FileText,
} from 'lucide-react';

export type PageId =
  | 'home'
  | 'services'
  | 'equipment'
  | 'projects'
  | 'partners'
  | 'about'
  | 'careers'
  | 'news'
  | 'contact';

export default function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('fcm');
  const [selectedGroupId, setSelectedGroupId] =
    useState<ServiceGroupId>('operations');
  const [selectedEquipmentId, setSelectedEquipmentId] = useState<string>('sts');
  const [selectedProjectId, setSelectedProjectId] =
    useState<string>('rtg-sihanoukville');
  const [selectedNewsId, setSelectedNewsId] = useState<string>(
    'sihanoukville-ep10-handover'
  );

  // Mega menu state ('services' | 'equipment' | null)
  const [openMegaMenu, setOpenMegaMenu] = useState<
    'services' | 'equipment' | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Modals
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [docsModalOpen, setDocsModalOpen] = useState<boolean>(false);
  const [docsModalTab, setDocsModalTab] = useState<
    'analysis' | 'brand-pdf' | 'brief-pdf'
  >('analysis');

  // Submitted quotes log
  const [submittedQuotes, setSubmittedQuotes] = useState<QuoteSubmission[]>([]);

  // Demo typography state (1 font unified across the entire site)
  const [activeFont, setActiveFont] = useState<DemoFontId>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('navaco_demo_font') as DemoFontId;
      if (
        saved &&
        [
          'be-vietnam-pro',
          'helvetica-neue',
          'stabil-grotesk',
          'barlow-semi-condensed',
          'jetbrains-mono',
        ].includes(saved)
      ) {
        return saved;
      }
    }
    return 'be-vietnam-pro';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-font', activeFont);
    try {
      localStorage.setItem('navaco_demo_font', activeFont);
    } catch {
      // ignore
    }
  }, [activeFont]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage, selectedServiceId, selectedEquipmentId, selectedProjectId]);

  const handleNavigatePage = (page: string) => {
    setActivePage(page as PageId);
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSelectService = (serviceId: string) => {
    const srv = SERVICES.find((s) => s.id === serviceId);
    if (srv) {
      setSelectedGroupId(srv.groupId);
    }
    setSelectedServiceId(serviceId);
    setActivePage('services');
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSelectEquipment = (equipmentId: string) => {
    setSelectedEquipmentId(equipmentId);
    setActivePage('equipment');
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setActivePage('projects');
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSelectNews = (newsId: string) => {
    setSelectedNewsId(newsId);
    setActivePage('news');
    setOpenMegaMenu(null);
    setMobileMenuOpen(false);
  };

  const handleSearchResultSelect = (result: SearchResultItem) => {
    if (result.type === 'service') {
      handleSelectService(result.id);
    } else if (result.type === 'equipment') {
      handleSelectEquipment(result.id);
    } else if (result.type === 'project') {
      handleSelectProject(result.id);
    } else if (result.type === 'partner') {
      handleNavigatePage('partners');
    } else if (result.type === 'news') {
      handleSelectNews(result.id);
    }
  };

  const handleOpenDocsModal = (
    tab: 'analysis' | 'brand-pdf' | 'brief-pdf' = 'analysis'
  ) => {
    setDocsModalTab(tab);
    setDocsModalOpen(true);
  };

  const handleQuoteSubmitted = (submission: QuoteSubmission) => {
    setSubmittedQuotes((prev) => [submission, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#1E2022]">
      {/* TOP UTILITY STRIP (Graphite #42454A per 20% color budget: Header phụ, VI/EN, Tìm kiếm, Hồ sơ năng lực) */}
      <div className="bg-[#42454A] text-white text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="hidden sm:flex items-center gap-3 font-mono-tabular text-[#E6E6E0] truncate">
            <span>NAVACO PORT &amp; INDUSTRIAL SERVICES</span>
            <span aria-hidden="true">·</span>
            <span>HOTLINE: {CONTACT_INFO.hotline}</span>
            <span aria-hidden="true">·</span>
            <span>{CONTACT_INFO.salesEmail}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              type="button"
              onClick={() => handleOpenDocsModal('analysis')}
              className="inline-flex items-center gap-1.5 text-[#E6E6E0] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-white shrink-0" />
              <span className="sm:hidden font-medium">
                {lang === 'vi' ? 'Hồ sơ & Brief' : 'Profile & Brief'}
              </span>
              <span className="hidden sm:inline">
                {lang === 'vi'
                  ? 'Hồ sơ năng lực & Phân tích Brief'
                  : 'Company Profile & Brief Analysis'}
              </span>
            </button>

            <span aria-hidden="true" className="text-white/30">
              |
            </span>

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label={lang === 'vi' ? 'Tìm kiếm' : 'Search'}
              className="inline-flex items-center gap-1 text-[#E6E6E0] hover:text-white transition-colors cursor-pointer whitespace-nowrap"
            >
              <Search className="w-3.5 h-3.5 shrink-0" />
              <span>{lang === 'vi' ? 'Tìm kiếm' : 'Search'}</span>
            </button>

            <span aria-hidden="true" className="text-white/30">
              |
            </span>

            {/* Language Switcher VI / EN */}
            <div
              className="inline-flex items-center gap-1 font-mono-tabular shrink-0"
              role="group"
              aria-label="Language switcher"
            >
              <Globe className="w-3.5 h-3.5 text-white hidden sm:inline mr-0.5" />
              <button
                type="button"
                onClick={() => setLang('vi')}
                aria-label="Tiếng Việt"
                className={`px-1.5 py-0.5 cursor-pointer transition-colors ${
                  lang === 'vi'
                    ? 'bg-[#D6011E] text-white font-bold'
                    : 'text-[#E6E6E0] hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-label="English"
                className={`px-1.5 py-0.5 cursor-pointer transition-colors ${
                  lang === 'en'
                    ? 'bg-[#D6011E] text-white font-bold'
                    : 'text-[#E6E6E0] hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            <span aria-hidden="true" className="text-white/30 hidden md:inline">
              |
            </span>

            {/* Font Demo Quick Selector */}
            <div className="hidden sm:inline-flex">
              <FontQuickSelectorTop
                activeFont={activeFont}
                onSelectFont={setActiveFont}
                lang={lang}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN STICKY HEADER (64px height, 3-Zone Top Bar Contract: Logo left, Nav links center, Primary CTA right) */}
      <header className="sticky top-0 z-40 bg-white border-b border-[#D8D8D2] h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
          {/* Zone 1: Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavigatePage('home')}
            className="cursor-pointer focus:outline-none shrink-0"
            aria-label="NAVACO Trang chủ"
          >
            <NavacoLogo variant="horizontal" theme="standard" size="sm" />
          </button>

          {/* Zone 2: Primary Navigation Links + Magirus-style Mega Menu Triggers */}
          <nav
            aria-label={lang === 'vi' ? 'Menu chính' : 'Main Navigation'}
            className="hidden lg:flex items-center gap-5 text-sm font-medium text-[#1E2022]"
          >
            <button
              type="button"
              onClick={() => handleNavigatePage('home')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'home'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>

            {/* Mega Menu 1: Giải pháp & Dịch vụ */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMegaMenu === 'services'}
                onClick={() =>
                  setOpenMegaMenu(
                    openMegaMenu === 'services' ? null : 'services'
                  )
                }
                className={`inline-flex items-center gap-1 py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activePage === 'services' || openMegaMenu === 'services'
                    ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                    : 'border-transparent hover:text-[#D6011E]'
                }`}
              >
                <span>
                  {lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Solutions & Services'}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Mega Menu 2: Thiết bị */}
            <div className="relative">
              <button
                type="button"
                aria-expanded={openMegaMenu === 'equipment'}
                onClick={() =>
                  setOpenMegaMenu(
                    openMegaMenu === 'equipment' ? null : 'equipment'
                  )
                }
                className={`inline-flex items-center gap-1 py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activePage === 'equipment' || openMegaMenu === 'equipment'
                    ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                    : 'border-transparent hover:text-[#D6011E]'
                }`}
              >
                <span>{lang === 'vi' ? 'Thiết bị' : 'Equipment'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => handleNavigatePage('projects')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'projects'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Dự án' : 'Projects'}
            </button>

            <button
              type="button"
              onClick={() => handleNavigatePage('partners')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'partners'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Đối tác' : 'Partners'}
            </button>

            <button
              type="button"
              onClick={() => handleNavigatePage('about')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'about' || activePage === 'careers'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Về NAVACO' : 'About Us'}
            </button>

            <button
              type="button"
              onClick={() => handleNavigatePage('news')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'news'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Tin tức' : 'News'}
            </button>

            <button
              type="button"
              onClick={() => handleNavigatePage('contact')}
              className={`py-1 border-b-2 transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                activePage === 'contact'
                  ? 'border-[#D6011E] text-[#D6011E] font-semibold'
                  : 'border-transparent hover:text-[#D6011E]'
              }`}
            >
              {lang === 'vi' ? 'Liên hệ' : 'Contact'}
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action Button ("Yêu cầu báo giá") + Mobile Menu Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavigatePage('contact')}
              className="px-4 py-2 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {lang === 'vi' ? 'Yêu cầu báo giá' : 'Request a Quote'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={lang === 'vi' ? 'Mở menu di động' : 'Toggle Mobile Menu'}
              className="lg:hidden p-2 text-[#1E2022] hover:bg-[#F7F7F5] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MAGIRUS-STYLE MEGA MENU: GIẢI PHÁP & DỊCH VỤ */}
        {openMegaMenu === 'services' && (
          <div className="hidden lg:block absolute left-0 right-0 top-16 bg-white border-b-4 border-[#D6011E] shadow-xl z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E6E0]">
                <div>
                  <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                    {lang === 'vi'
                      ? 'PHÂN NHÓM DỊCH VỤ THEO VÒNG ĐỜI VẬN HÀNH (THAM CHIẾU KALMAR & MAGIRUS)'
                      : 'SERVICES BY OPERATIONAL LIFECYCLE'}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                    {lang === 'vi'
                      ? 'Giải pháp & Dịch vụ Kỹ thuật NAVACO'
                      : 'NAVACO Technical Solutions & Services'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigatePage('services')}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#D6011E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>
                    {lang === 'vi'
                      ? 'Xem tổng quan tất cả dịch vụ'
                      : 'View All Services Overview'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8">
                {SERVICE_GROUPS.map((group) => {
                  const groupServices = SERVICES.filter(
                    (s) => s.groupId === group.id
                  );
                  return (
                    <div key={group.id} className="space-y-3">
                      <div className="p-3 bg-[#42454A] text-white">
                        <span className="font-mono-tabular text-xs text-[#D6011E] bg-white px-1.5 py-0.5 font-bold mr-2">
                          {group.number}
                        </span>
                        <span className="font-display font-bold uppercase text-base">
                          {group.title[lang]}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {groupServices.map((srv) => (
                          <button
                            key={srv.id}
                            type="button"
                            onClick={() => handleSelectService(srv.id)}
                            className="w-full text-left p-3 bg-[#F7F7F5] hover:bg-white border border-transparent hover:border-[#D6011E] transition-colors cursor-pointer"
                          >
                            <div className="font-display font-bold uppercase text-sm text-[#1E2022] flex items-center justify-between">
                              <span>
                                <span className="font-mono-tabular text-[#D6011E] mr-1.5">
                                  {srv.number}
                                </span>
                                {srv.title[lang]}
                              </span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#42454A]" />
                            </div>
                            <p className="text-xs text-[#42454A] mt-1 line-clamp-1">
                              {srv.shortDesc[lang]}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* MAGIRUS-STYLE MEGA MENU: THIẾT BỊ (Bảng có hình nhỏ + 1 dòng mô tả) */}
        {openMegaMenu === 'equipment' && (
          <div className="hidden lg:block absolute left-0 right-0 top-16 bg-white border-b-4 border-[#D6011E] shadow-xl z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E6E0]">
                <div>
                  <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                    {lang === 'vi'
                      ? 'MEGA MENU KIỂU MAGIRUS · HÌNH TÁCH NỀN + MÔ TẢ TỪNG DÒNG'
                      : 'PORT EQUIPMENT LINES WE SERVICE'}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                    {lang === 'vi'
                      ? 'Chúng tôi phục vụ thiết bị nào'
                      : 'Equipment Lines Covered by NAVACO'}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => handleNavigatePage('equipment')}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#D6011E] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>
                    {lang === 'vi'
                      ? 'Mở trang Danh mục Thiết bị'
                      : 'Open Full Equipment Catalog'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {EQUIPMENT_LIST.map((eq) => (
                  <button
                    key={eq.id}
                    type="button"
                    onClick={() => handleSelectEquipment(eq.id)}
                    className="group text-left p-3 bg-[#F7F7F5] hover:bg-white border border-[#E6E6E0] hover:border-[#D6011E] flex items-center gap-4 transition-colors cursor-pointer"
                  >
                    <div className="w-24 h-16 bg-white border border-[#E6E6E0] p-1 shrink-0 flex items-center justify-center">
                      <EquipmentCutoutIllustration equipmentId={eq.id} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold uppercase text-base text-[#1E2022] group-hover:text-[#D6011E] truncate">
                        {eq.name[lang]}
                      </div>
                      <p className="text-xs text-[#42454A] line-clamp-2 mt-0.5">
                        {eq.oneLiner[lang]}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-16 bg-white border-b-4 border-[#D6011E] shadow-xl p-4 space-y-2 z-50 max-h-[80vh] overflow-y-auto">
            {(
              [
                { id: 'home', vi: 'Trang chủ', en: 'Home' },
                { id: 'services', vi: 'Giải pháp & Dịch vụ (10)', en: 'Solutions & Services (10)' },
                { id: 'equipment', vi: 'Thiết bị phục vụ (6)', en: 'Equipment Lines (6)' },
                { id: 'projects', vi: 'Dự án Việt Nam & Cambodia', en: 'Projects (VN & Cambodia)' },
                { id: 'partners', vi: 'Đối tác (Port Ecosystem)', en: 'Partners (Port Ecosystem)' },
                { id: 'about', vi: 'Về NAVACO & Bộ nhận diện', en: 'About NAVACO & Brand' },
                { id: 'careers', vi: 'Tuyển dụng Kỹ thuật', en: 'Engineering Careers' },
                { id: 'news', vi: 'Tin tức & Kiến thức kỹ thuật', en: 'News & Technical Insights' },
                { id: 'contact', vi: 'Liên hệ & Yêu cầu báo giá', en: 'Contact & Quote Request' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigatePage(item.id)}
                className={`w-full text-left px-4 py-2.5 font-display font-bold uppercase text-base ${
                  activePage === item.id
                    ? 'bg-[#D6011E] text-white'
                    : 'bg-[#F7F7F5] text-[#1E2022]'
                }`}
              >
                {item[lang]}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Close Mega Menu Backdrop */}
      {openMegaMenu && (
        <div
          className="fixed inset-0 z-30 bg-black/20 hidden lg:block"
          onClick={() => setOpenMegaMenu(null)}
        />
      )}

      {/* MAIN PAGE CONTENT */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeView
            lang={lang}
            onNavigatePage={handleNavigatePage}
            onSelectService={handleSelectService}
            onSelectEquipment={handleSelectEquipment}
            onSelectProject={handleSelectProject}
            onSelectNews={handleSelectNews}
            onOpenDocsModal={handleOpenDocsModal}
          />
        )}

        {activePage === 'services' && (
          <ServicesView
            lang={lang}
            selectedServiceId={selectedServiceId}
            selectedGroupId={selectedGroupId}
            onSelectService={handleSelectService}
            onSelectGroup={setSelectedGroupId}
            onSelectProject={handleSelectProject}
            onNavigateHome={() => handleNavigatePage('home')}
            onQuoteSubmitted={handleQuoteSubmitted}
            submittedQuotesCount={submittedQuotes.length}
          />
        )}

        {activePage === 'equipment' && (
          <EquipmentView
            lang={lang}
            selectedEquipmentId={selectedEquipmentId}
            onSelectEquipment={handleSelectEquipment}
            onSelectProject={handleSelectProject}
            onNavigateHome={() => handleNavigatePage('home')}
            onQuoteSubmitted={handleQuoteSubmitted}
            submittedQuotesCount={submittedQuotes.length}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsView
            lang={lang}
            selectedProjectId={selectedProjectId}
            onSelectProject={handleSelectProject}
            onNavigateHome={() => handleNavigatePage('home')}
            onQuoteSubmitted={handleQuoteSubmitted}
            submittedQuotesCount={submittedQuotes.length}
          />
        )}

        {activePage === 'partners' && (
          <PartnersView
            lang={lang}
            onNavigateHome={() => handleNavigatePage('home')}
            onQuoteSubmitted={handleQuoteSubmitted}
            submittedQuotesCount={submittedQuotes.length}
          />
        )}

        {activePage === 'about' && (
          <AboutView
            lang={lang}
            onNavigateHome={() => handleNavigatePage('home')}
            onNavigateCareers={() => handleNavigatePage('careers')}
            onOpenDocsModal={handleOpenDocsModal}
          />
        )}

        {activePage === 'careers' && (
          <CareersView
            lang={lang}
            onNavigateHome={() => handleNavigatePage('home')}
          />
        )}

        {activePage === 'news' && (
          <NewsView
            lang={lang}
            selectedNewsId={selectedNewsId}
            onSelectNews={handleSelectNews}
            onSelectProject={handleSelectProject}
            onNavigateHome={() => handleNavigatePage('home')}
          />
        )}

        {activePage === 'contact' && (
          <ContactView
            lang={lang}
            onNavigateHome={() => handleNavigatePage('home')}
            onQuoteSubmitted={handleQuoteSubmitted}
            submittedQuotesCount={submittedQuotes.length}
            recentSubmissions={submittedQuotes}
          />
        )}
      </main>

      {/* GRAPHITE FOOTER (Nền Graphite #42454A: logo, slogan, liên kết nhanh, địa chỉ văn phòng & xưởng, hotline, email, mạng xã hội) */}
      <footer className="bg-[#2C2F33] text-white border-t-4 border-[#42454A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-white/15">
            {/* Col 1: Brand, Slogan & Profile Download */}
            <div className="lg:col-span-4 space-y-4">
              <NavacoLogo variant="horizontal" theme="dark-bg" size="md" />
              <p className="font-display font-bold uppercase tracking-wider text-base text-[#D6011E]">
                {lang === 'vi'
                  ? 'KẾT NỐI NĂNG LỰC - NÂNG TẦM GIÁ TRỊ'
                  : 'CONNECTING CAPABILITIES - ELEVATING VALUE'}
              </p>
              <p className="text-sm text-[#D8D8D2] leading-relaxed">
                {lang === 'vi'
                  ? 'NAVACO là sự kết tinh của khát vọng, trách nhiệm và cam kết tạo nên giá trị bền vững cho thiết bị cảng biển và công nghiệp tại Việt Nam & Cambodia.'
                  : 'NAVACO combines engineering ambition, accountability, and commitment to deliver sustainable value for ports and industrial plants in Vietnam & Cambodia.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleOpenDocsModal('analysis')}
                  className="px-4 py-2 bg-[#42454A] hover:bg-[#D6011E] text-white text-xs font-display font-bold uppercase tracking-wider transition-colors cursor-pointer inline-flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'vi'
                      ? 'Hồ sơ năng lực & Brief (PDF)'
                      : 'Profile & Brief Analysis (PDF)'}
                  </span>
                </button>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wider">
                {lang === 'vi' ? 'Giải pháp & Thiết bị' : 'Solutions & Fleet'}
              </h3>
              <ul className="space-y-2 text-sm text-[#D8D8D2]">
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectService('fcm')}
                    className="hover:text-white cursor-pointer"
                  >
                    {lang === 'vi'
                      ? 'Bảo trì trọn gói (FCM)'
                      : 'Full Maintenance Contract (FCM)'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectService('retrofit')}
                    className="hover:text-white cursor-pointer"
                  >
                    {lang === 'vi'
                      ? 'Retrofit điện & Phòng điện E-House'
                      : 'PLC/Drive & E-House Retrofit'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectService('overhaul')}
                    className="hover:text-white cursor-pointer"
                  >
                    {lang === 'vi'
                      ? 'Đại tu & Phục hồi cẩu RTG/STS'
                      : 'RTG/STS Crane Overhaul'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectService('spare-parts')}
                    className="hover:text-white cursor-pointer"
                  >
                    {lang === 'vi'
                      ? 'Phụ tùng chính hãng (Port Ecosystem)'
                      : 'Genuine OEM Spare Parts'}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleSelectService('shore-power')}
                    className="hover:text-white cursor-pointer"
                  >
                    {lang === 'vi'
                      ? 'Điện trung/hạ thế & Giải pháp Điện bờ'
                      : 'MV/LV & Shore Power Solutions'}
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Offices & Cái Mép Workshop */}
            <div className="lg:col-span-5 space-y-3">
              <h3 className="font-display text-lg font-bold uppercase text-white tracking-wider">
                {lang === 'vi'
                  ? 'Văn phòng, Xưởng Cái Mép & Liên hệ'
                  : 'Offices, Cái Mép Workshop & Contact'}
              </h3>
              <div className="space-y-2.5 text-xs text-[#D8D8D2]">
                <p>
                  <strong className="text-white uppercase">
                    {lang === 'vi' ? 'Trụ sở TP.HCM:' : 'HCMC Headquarters:'}
                  </strong>{' '}
                  {CONTACT_INFO.hqAddress}
                </p>
                <p>
                  <strong className="text-white uppercase">
                    {lang === 'vi' ? 'Xưởng kỹ thuật Cái Mép:' : 'Cái Mép Workshop:'}
                  </strong>{' '}
                  {lang === 'vi'
                    ? 'Khu vực Cụm Cảng Cái Mép – Thị Vải, TX. Phú Mỹ, Bà Rịa – Vũng Tàu'
                    : 'Cái Mép – Thị Vải Deepwater Port Corridor, Bà Rịa – Vũng Tàu'}
                </p>
                <p>
                  <strong className="text-white uppercase">
                    {lang === 'vi' ? 'Chi nhánh & Dự án:' : 'Regional Branches:'}
                  </strong>{' '}
                  {lang === 'vi'
                    ? 'Hải Phòng · Đà Nẵng (Tiên Sa) · Phnom Penh (PPAP) · Sihanoukville (PAS)'
                    : 'Hải Phòng · Đà Nẵng · Phnom Penh (PPAP) · Sihanoukville (PAS)'}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4 font-mono-tabular text-sm text-white">
                  <span>Hotline/Zalo: {CONTACT_INFO.hotline}</span>
                  <span>·</span>
                  <span>Email: {CONTACT_INFO.salesEmail}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9EA3AA]">
            <p>
              © 2026 NAVACO.{' '}
              {lang === 'vi'
                ? 'Bản quyền bộ nhận diện thương hiệu v1.0 (01/2026/QT-NAVACO).'
                : 'All rights reserved. Brand Identity Standard v1.0.'}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Facebook Fanpage
              </a>
              <span>·</span>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <span>·</span>
              <button
                type="button"
                onClick={() => handleNavigatePage('careers')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {lang === 'vi' ? 'Tuyển dụng' : 'Careers'}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING ZALO & HOTLINE BUTTONS (Góc dưới phải per Brief: "Nút nổi: Zalo và gọi điện, góc dưới phải") */}
      <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-2">
        <a
          href={`https://zalo.me/${CONTACT_INFO.hotlineRaw}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat Zalo NAVACO"
          className="px-3.5 py-2.5 bg-[#42454A] hover:bg-[#2C2F33] text-white border border-white/20 shadow-lg flex items-center gap-2 text-xs font-mono-tabular font-bold transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-[#D6011E]" />
          <span>Zalo</span>
        </a>
        <a
          href={`tel:${CONTACT_INFO.hotlineRaw}`}
          aria-label={`Gọi Hotline ${CONTACT_INFO.hotline}`}
          className="px-3.5 py-2.5 bg-[#D6011E] hover:bg-[#B00018] text-white shadow-lg flex items-center gap-2 text-xs font-mono-tabular font-bold transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{CONTACT_INFO.hotline}</span>
        </a>
      </div>

      {/* GLOBAL SEARCH MODAL */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lang={lang}
        onSelectResult={handleSearchResultSelect}
      />

      {/* DOCUMENT ANALYSIS & PDF VIEWER MODAL */}
      <DocumentAnalysisModal
        isOpen={docsModalOpen}
        onClose={() => setDocsModalOpen(false)}
        lang={lang}
        initialTab={docsModalTab}
      />

      {/* FLOATING DEMO FONT SWITCHER (Interactive 4-Font Typography Preview) */}
      <FontSwitcher
        activeFont={activeFont}
        onSelectFont={setActiveFont}
        lang={lang}
      />
    </div>
  );
};
