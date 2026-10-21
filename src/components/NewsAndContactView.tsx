import React, { useState } from 'react';
import {
  CONTACT_INFO,
  Language,
  NEWS_ARTICLES,
  OFFICE_LOCATIONS,
  QuoteSubmission,
} from '../data/navacoData';
import { filterNews } from '../utils/navacoLogic';
import { QuoteRequestForm } from './QuoteRequestForm';
import {
  ArrowRight,
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  UserCheck,
} from 'lucide-react';

interface NewsViewProps {
  lang: Language;
  selectedNewsId: string;
  onSelectNews: (newsId: string) => void;
  onSelectProject: (projectId: string) => void;
  onNavigateHome: () => void;
}

export const NewsView: React.FC<NewsViewProps> = ({
  lang,
  selectedNewsId,
  onSelectNews,
  onSelectProject,
  onNavigateHome,
}) => {
  const [category, setCategory] = useState<'all' | 'project' | 'technical' | 'event'>('all');
  const filteredArticles = filterNews(NEWS_ARTICLES, category);
  const activeArticle =
    NEWS_ARTICLES.find((a) => a.id === selectedNewsId) || NEWS_ARTICLES[0];

  return (
    <div>
      <section className="bg-[#2C2F33] text-white border-b-4 border-[#D6011E] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono-tabular text-[#D8D8D2] mb-4"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white cursor-pointer"
            >
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="text-white font-semibold">
              {lang === 'vi' ? 'Tin tức & Kiến thức Kỹ thuật' : 'News & Technical Insights'}
            </span>
          </nav>

          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            CHUỖI BÀI SIHANOUKVILLE · TIN DỰ ÁN · KIẾN THỨC KỸ THUẬT · SỰ KIỆN
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
            {lang === 'vi'
              ? 'Tin tức Dự án & Chuyên đề Kỹ thuật Cẩu cảng'
              : 'Field Project Logs & Port Engineering Articles'}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Category Filter Tabs (3 chuyên mục: Dự án, Kiến thức kỹ thuật, Sự kiện) */}
        <div className="flex flex-wrap items-center gap-2 bg-white border border-[#D8D8D2] p-4">
          {(
            [
              { id: 'all', vi: 'Tất cả bài viết', en: 'All Articles' },
              { id: 'project', vi: 'Tin dự án (Chuỗi Sihanoukville)', en: 'Project News (Sihanoukville Series)' },
              { id: 'technical', vi: 'Kiến thức kỹ thuật', en: 'Technical Insights' },
              { id: 'event', vi: 'Sự kiện', en: 'Events' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setCategory(tab.id)}
              className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                category === tab.id
                  ? 'bg-[#D6011E] text-white font-semibold'
                  : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
              }`}
            >
              {tab[lang]}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((art) => {
            const isSelected = art.id === activeArticle.id;
            return (
              <button
                key={art.id}
                type="button"
                onClick={() => onSelectNews(art.id)}
                className={`text-left p-6 bg-white border-2 flex flex-col justify-between transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-[#D6011E]'
                    : 'border-[#D8D8D2] hover:border-[#42454A]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#6B7078] mb-2">
                    <span className="font-semibold text-[#D6011E]">
                      {art.categoryLabel[lang]}
                    </span>
                    <span>·</span>
                    <span className="font-mono-tabular">{art.date}</span>
                  </div>
                  {art.seriesBadge && (
                    <span className="block text-xs font-mono-tabular text-[#42454A] mb-1">
                      {art.seriesBadge[lang]}
                    </span>
                  )}
                  <h2 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                    {art.title[lang]}
                  </h2>
                  <p className="text-sm text-[#42454A] mt-3 line-clamp-3 leading-relaxed">
                    {art.excerpt[lang]}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E6E6E0] flex items-center justify-between text-xs font-display font-bold uppercase tracking-wider text-[#D6011E]">
                  <span>{lang === 'vi' ? 'Đọc bài viết bên dưới' : 'Read Article Below'}</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Article Reader */}
        <article className="bg-white border-2 border-[#42454A] p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tabular text-[#6B7078] mb-2">
            <span className="text-[#D6011E] font-bold">
              {activeArticle.categoryLabel[lang].toUpperCase()}
            </span>
            <span>·</span>
            <span>{activeArticle.date}</span>
            {activeArticle.seriesBadge && (
              <>
                <span>·</span>
                <span>{activeArticle.seriesBadge[lang]}</span>
              </>
            )}
          </div>

          <h2 className="font-display text-2xl md:text-4xl font-bold uppercase text-[#1E2022]">
            {activeArticle.title[lang]}
          </h2>

          <div className="mt-6 space-y-4 text-base text-[#1E2022] leading-relaxed max-w-4xl">
            {activeArticle.content.map((para, idx) => (
              <p key={idx}>{para[lang]}</p>
            ))}
          </div>

          {activeArticle.relatedProjectId && (
            <div className="mt-8 pt-6 border-t border-[#E6E6E0] flex items-center justify-between">
              <span className="text-sm font-medium text-[#42454A]">
                {lang === 'vi'
                  ? 'Bài viết này thuộc hồ sơ dự án thực tế của NAVACO:'
                  : 'This article is linked to a verified NAVACO case study:'}
              </span>
              <button
                type="button"
                onClick={() => onSelectProject(activeArticle.relatedProjectId!)}
                className="px-5 py-2.5 bg-[#42454A] hover:bg-[#2C2F33] text-white font-display font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>{lang === 'vi' ? 'Xem Hồ sơ Dự án liên quan' : 'View Related Project'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

interface ContactViewProps {
  lang: Language;
  onNavigateHome: () => void;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
  recentSubmissions: QuoteSubmission[];
}

export const ContactView: React.FC<ContactViewProps> = ({
  lang,
  onNavigateHome,
  onQuoteSubmitted,
  submittedQuotesCount,
  recentSubmissions,
}) => {
  const [selectedLocId, setSelectedLocId] = useState<string>(OFFICE_LOCATIONS[0].id);

  return (
    <div>
      {/* SUBPAGE HERO */}
      <section className="bg-[#2C2F33] text-white border-b-4 border-[#D6011E] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono-tabular text-[#D8D8D2] mb-4"
          >
            <button
              type="button"
              onClick={onNavigateHome}
              className="hover:text-white cursor-pointer"
            >
              {lang === 'vi' ? 'Trang chủ' : 'Home'}
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#D6011E]" />
            <span className="text-white font-semibold">
              {lang === 'vi' ? 'Liên hệ & Yêu cầu Báo giá' : 'Contact & Quote Request'}
            </span>
          </nav>

          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            HOTLINE / ZALO: {CONTACT_INFO.hotline} · EMAIL: {CONTACT_INFO.salesEmail}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
            {lang === 'vi'
              ? 'Liên hệ Kỹ thuật & Yêu cầu Báo giá'
              : 'Contact Engineering & Request a Quotation'}
          </h1>
          <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
            {lang === 'vi'
              ? 'Đội ngũ kỹ sư NAVACO tại TP.HCM, Xưởng Cái Mép, Hải Phòng, Đà Nẵng và Cambodia luôn sẵn sàng khảo sát hiện trường và tư vấn báo giá.'
              : 'Our engineering teams in HCMC, Cái Mép Workshop, Hải Phòng, Đà Nẵng, and Cambodia are ready for site surveys and technical quotations.'}
          </p>
        </div>
      </section>

      {/* BRIEF LAYOUT: Form bên trái, thông tin văn phòng bên phải, bản đồ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): Quote Request Form */}
          <div className="lg:col-span-7 space-y-8">
            <QuoteRequestForm
              lang={lang}
              onQuoteSubmitted={onQuoteSubmitted}
              submittedQuotesCount={submittedQuotesCount}
            />

            {recentSubmissions.length > 0 && (
              <div className="bg-white border border-[#D8D8D2] p-6">
                <h2 className="font-display text-lg font-bold uppercase text-[#1E2022] mb-3">
                  {lang === 'vi'
                    ? `Danh sách yêu cầu báo giá vừa gửi (${recentSubmissions.length})`
                    : `Submitted Quote Requests in Session (${recentSubmissions.length})`}
                </h2>
                <div className="space-y-2">
                  {recentSubmissions.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-[#F7F7F5] border border-[#E6E6E0] flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-mono-tabular font-bold text-[#D6011E] mr-2">
                          {item.id}
                        </span>
                        <strong className="text-[#1E2022]">{item.fullName}</strong> ·{' '}
                        <span>{item.company}</span> ({item.country})
                      </div>
                      <span className="font-mono-tabular text-[#6B7078]">
                        {item.createdAt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Office Info, Direct Contact Point & Interactive Port Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-[#42454A] text-white p-6 border-t-4 border-[#D6011E]">
              <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
                {lang === 'vi' ? 'ĐẦU MỐI LIÊN HỆ TRỰC TIẾP' : 'DIRECT TECHNICAL CONTACT'}
              </span>
              <h2 className="font-display text-2xl font-bold uppercase text-white mt-1">
                NAVACO VIETNAM &amp; CAMBODIA
              </h2>

              <div className="mt-5 space-y-3.5 text-sm">
                <a
                  href={`tel:${CONTACT_INFO.hotlineRaw}`}
                  className="flex items-center gap-3 p-3 bg-[#2C2F33] hover:bg-[#1E2022] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#D6011E] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#D8D8D2]">
                      {lang === 'vi' ? 'Hotline Kỹ thuật & Kinh doanh 24/7' : '24/7 Technical & Sales Hotline'}
                    </span>
                    <span className="font-mono-tabular font-bold text-base text-white">
                      {CONTACT_INFO.hotline}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.salesEmail}`}
                  className="flex items-center gap-3 p-3 bg-[#2C2F33] hover:bg-[#1E2022] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#D6011E] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#D8D8D2]">
                      {lang === 'vi' ? 'Email tiếp nhận báo giá chính thức' : 'Official Quotation Desk'}
                    </span>
                    <span className="font-mono-tabular font-bold text-white">
                      {CONTACT_INFO.salesEmail}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 bg-[#2C2F33]">
                  <UserCheck className="w-5 h-5 text-[#D6011E] shrink-0" />
                  <div>
                    <span className="block text-xs text-[#D8D8D2]">
                      {lang === 'vi' ? 'Phụ trách Phát triển Kinh doanh (Contact Point)' : 'Business Development Contact Point'}
                    </span>
                    <span className="font-semibold text-white">
                      {CONTACT_INFO.contactPerson} — {CONTACT_INFO.contactPersonEmail}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://zalo.me/${CONTACT_INFO.hotlineRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {lang === 'vi'
                      ? `Chat Zalo Kỹ thuật (${CONTACT_INFO.hotline})`
                      : `Message via Zalo (${CONTACT_INFO.hotline})`}
                  </span>
                </a>
              </div>
            </div>

            {/* Office & Workshop Locations + Map */}
            <div className="bg-white border border-[#D8D8D2] p-6">
              <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mb-4">
                {lang === 'vi'
                  ? 'Hệ thống Trụ sở, Xưởng Cái Mép & Chi nhánh'
                  : 'Headquarters, Cái Mép Workshop & Branches'}
              </h3>

              <div className="space-y-3">
                {OFFICE_LOCATIONS.map((loc) => {
                  const isActive = loc.id === selectedLocId;
                  return (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setSelectedLocId(loc.id)}
                      className={`w-full text-left p-3.5 border transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#F7F7F5] border-[#D6011E]'
                          : 'bg-white border-[#E6E6E0] hover:border-[#42454A]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono-tabular">
                        <span className="text-[#D6011E] font-bold">
                          {loc.badge[lang]}
                        </span>
                        <span className="text-[#6B7078]">{loc.coordinates}</span>
                      </div>
                      <div className="font-display font-bold uppercase text-base text-[#1E2022] mt-0.5">
                        {loc.name[lang]}
                      </div>
                      <p className="text-xs text-[#42454A] mt-1 flex items-start gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#D6011E] shrink-0 mt-0.5" />
                        <span>{loc.address[lang]}</span>
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* Interactive SVG Regional Port Corridor Map */}
              <div className="mt-5 bg-[#2C2F33] text-white p-4 border border-[#42454A]">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[#E6E6E0] mb-2">
                  <span>
                    {lang === 'vi'
                      ? 'BẢN ĐỒ MẠNG LƯỚI CẢNG VIỆT NAM – CAMBODIA'
                      : 'VIETNAM – CAMBODIA PORT OPERATION MAP'}
                  </span>
                  <span className="text-[#D6011E] font-bold">LIVE CORRIDOR</span>
                </div>
                <svg viewBox="0 0 400 210" className="w-full h-44 bg-[#1E2022] border border-white/10">
                  <path
                    d="M0 50H400M0 100H400M0 150H400M100 0V210M200 0V210M300 0V210"
                    stroke="#2E343B"
                    strokeWidth="1"
                  />
                  {/* Stylized Mekong & Coastal Corridor Line */}
                  <path
                    d="M235 28 L255 92 L240 155 L262 168 M240 155 L155 135 L120 162"
                    stroke="#D6011E"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="4 2"
                  />
                  {/* Hải Phòng */}
                  <circle cx="235" cy="28" r="6" fill="#D6011E" />
                  <text x="247" y="32" fill="#FFFFFF" fontSize="10" fontFamily="monospace">
                    HẢI PHÒNG
                  </text>
                  {/* Đà Nẵng */}
                  <circle cx="255" cy="92" r="6" fill="#D6011E" />
                  <text x="267" y="96" fill="#FFFFFF" fontSize="10" fontFamily="monospace">
                    ĐÀ NẴNG (TIÊN SA)
                  </text>
                  {/* TP.HCM HQ */}
                  <circle cx="240" cy="155" r="7" fill="#FFFFFF" stroke="#D6011E" strokeWidth="3" />
                  <text x="252" y="152" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    TP.HCM (TRỤ SỞ)
                  </text>
                  {/* Xưởng Cái Mép */}
                  <circle cx="262" cy="172" r="6" fill="#D6011E" />
                  <text x="274" y="176" fill="#9EE6B8" fontSize="10" fontFamily="monospace" fontWeight="bold">
                    XƯỞNG CÁI MÉP
                  </text>
                  {/* Phnom Penh (PPAP / STOLL) */}
                  <circle cx="155" cy="135" r="6" fill="#D6011E" />
                  <text x="58" y="132" fill="#FFFFFF" fontSize="10" fontFamily="monospace">
                    PHNOM PENH (PPAP)
                  </text>
                  {/* Sihanoukville (PAS) */}
                  <circle cx="120" cy="162" r="6" fill="#D6011E" />
                  <text x="22" y="180" fill="#FFFFFF" fontSize="10" fontFamily="monospace">
                    SIHANOUKVILLE (PAS)
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
