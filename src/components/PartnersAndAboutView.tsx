import React, { useState } from 'react';
import {
  BRAND_VALUES_NAVACO,
  CONTACT_INFO,
  JOB_OPENINGS,
  Language,
  OFFICE_LOCATIONS,
  PARTNERS,
  QuoteSubmission,
  VERIFIED_PILLARS,
} from '../data/navacoData';
import { PartnerBrandMark } from './IndustrialVisuals';
import { NavacoLogo } from './NavacoLogo';
import { QuoteRequestForm } from './QuoteRequestForm';
import {
  CheckCircle2,
  ChevronRight,
  Download,
  FileUp,
  MapPin,
  Send,
  ShieldCheck,
  Wrench,
  AlertCircle,
} from 'lucide-react';

interface PartnersViewProps {
  lang: Language;
  onNavigateHome: () => void;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
}

export const PartnersView: React.FC<PartnersViewProps> = ({
  lang,
  onNavigateHome,
  onQuoteSubmitted,
  submittedQuotesCount,
}) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');

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
              {lang === 'vi' ? 'Đối tác (Port Ecosystem)' : 'OEM Partners (Port Ecosystem)'}
            </span>
          </nav>

          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            PORT ECOSYSTEM · SIEMENS · KALMAR · BROMMA · BUBENZER · IGUS · TEUFELBERGER
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
            {lang === 'vi'
              ? 'Hệ sinh thái Đối tác Công nghệ & Phụ tùng Chính hãng'
              : 'Official Port Ecosystem & OEM Spare Parts Partners'}
          </h1>
          <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
            {lang === 'vi'
              ? 'Chỉ giới thiệu các hãng đã hợp tác chính thức. NAVACO tư vấn tra mã chuẩn xác, cung cấp phụ tùng chính hãng đầy đủ CO/CQ và lắp đặt tại hiện trường.'
              : 'Featuring only verified official partner brands. NAVACO provides part verification, genuine OEM supply with full CO/CQ, and turnkey on-site installation.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-white border border-[#D8D8D2] hover:border-[#42454A] p-6 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-4 pb-4 mb-4 border-b border-[#E6E6E0]">
                  <div className="w-48">
                    <PartnerBrandMark partnerId={partner.id} name={partner.name} />
                  </div>
                  <div className="text-right">
                    <span className="block text-xs font-mono-tabular text-[#D6011E] font-semibold">
                      {partner.country[lang]}
                    </span>
                    <span className="block text-xs text-[#6B7078] mt-0.5">
                      {partner.category[lang]}
                    </span>
                  </div>
                </div>

                <p className="text-sm font-medium text-[#1E2022] leading-relaxed">
                  {partner.whatNavacoProvides[lang]}
                </p>

                <ul className="mt-4 space-y-2">
                  {partner.components.map((comp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#42454A]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                      <span>{comp[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E6E6E0] flex justify-end">
                <a
                  href="#partner-quote-form"
                  onClick={() => setSelectedBrand(partner.name)}
                  className="text-xs font-display font-bold uppercase tracking-wider text-[#D6011E] hover:underline"
                >
                  {lang === 'vi'
                    ? `Yêu cầu báo giá phụ tùng ${partner.name} →`
                    : `Request ${partner.name} Parts Quote →`}
                </a>
              </div>
            </div>
          ))}
        </div>

        <section id="partner-quote-form">
          <QuoteRequestForm
            lang={lang}
            defaultNeed="spare_parts"
            defaultEquipment={selectedBrand}
            contextTitle={
              selectedBrand
                ? lang === 'vi'
                  ? `Yêu cầu báo giá phụ tùng & giải pháp hãng ${selectedBrand}`
                  : `Request Genuine ${selectedBrand} Parts & Engineering Quote`
                : undefined
            }
            onQuoteSubmitted={onQuoteSubmitted}
            submittedQuotesCount={submittedQuotesCount}
          />
        </section>
      </div>
    </div>
  );
};

interface AboutViewProps {
  lang: Language;
  onNavigateHome: () => void;
  onNavigateCareers: () => void;
  onOpenDocsModal: (tab?: 'analysis' | 'brand-pdf' | 'brief-pdf') => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  lang,
  onNavigateHome,
  onNavigateCareers,
  onOpenDocsModal,
}) => {
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
              {lang === 'vi' ? 'Về NAVACO' : 'About NAVACO'}
            </span>
          </nav>

          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            KẾT NỐI NĂNG LỰC - NÂNG TẦM GIÁ TRỊ
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
            {lang === 'vi'
              ? 'Năng lực Kỹ thuật, Xưởng Cái Mép & Bộ Nhận Diện NAVACO'
              : 'Engineering Capabilities, Cái Mép Workshop & Brand Identity'}
          </h1>
          <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
            {lang === 'vi'
              ? 'Tập trung hoàn toàn vào năng lực kỹ thuật thực tế, chứng chỉ hãng, xưởng dịch vụ Cái Mép và mạng lưới vận hành tại Việt Nam – Cambodia.'
              : 'Focused strictly on verifiable technical capabilities, OEM certifications, our Cái Mép workshop facility, and operations across Vietnam and Cambodia.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* SECTION 1: GIỚI THIỆU & NĂNG LỰC KIỂM CHỨNG */}
        <section>
          <div className="mb-8">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              01 · {lang === 'vi' ? 'NĂNG LỰC VÀ CHỨNG CHỈ KIỂM CHỨNG' : 'VERIFIED ENGINEERING CAPABILITIES'}
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Đội ngũ Kỹ sư, Chứng chỉ Hãng & Xưởng Cái Mép'
                : 'Certified Engineers, OEM Credentials & Cái Mép Workshop'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VERIFIED_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white border border-[#D8D8D2] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E6E6E0]">
                    <span className="font-mono-tabular text-xl font-bold text-[#D6011E]">
                      {pillar.number}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-[#42454A]" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                    {pillar.title[lang]}
                  </h3>
                  <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                    {pillar.desc[lang]}
                  </p>
                </div>
                <p className="mt-4 pt-3 border-t border-[#E6E6E0] text-xs font-mono-tabular text-[#1E2022]">
                  ✓ {pillar.evidence[lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: XƯỞNG CÁI MÉP & MẠNG LƯỚI VIỆT NAM - CAMBODIA */}
        <section className="bg-white border border-[#D8D8D2] p-6 md:p-8">
          <div className="mb-8">
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
              02 · {lang === 'vi' ? 'XƯỞNG KỸ THUẬT & VĂN PHÒNG VIỆT NAM – CAMBODIA' : 'WORKSHOP & REGIONAL FOOTPRINT'}
            </span>
            <h2 className="font-display text-3xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Hiện diện tại các cụm cảng trọng điểm'
                : 'Strategically Positioned Across Key Port Corridors'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OFFICE_LOCATIONS.map((loc) => (
              <div
                key={loc.id}
                className="p-6 bg-[#F7F7F5] border border-[#D8D8D2] flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono-tabular uppercase text-[#D6011E] font-semibold">
                    {loc.badge[lang]}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1">
                    {loc.name[lang]}
                  </h3>
                  <p className="text-sm font-medium text-[#1E2022] mt-2 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                    <span>{loc.address[lang]}</span>
                  </p>
                  <p className="text-sm text-[#42454A] mt-2 leading-relaxed">
                    {loc.scope[lang]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E6E6E0] text-xs font-mono-tabular text-[#6B7078]">
                  GPS: {loc.coordinates}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: BỘ NHẬN DIỆN THƯƠNG HIỆU NAVACO V1.0 (04/08/2026) */}
        <section className="bg-white border-2 border-[#42454A] p-6 md:p-10 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 border-b border-[#E6E6E0]">
            <div>
              <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
                03 · BỘ QUY CHUẨN NHẬN DIỆN THƯƠNG HIỆU (01/2026/QT-NAVACO · V1.0)
              </span>
              <h2 className="font-display text-3xl font-bold uppercase text-[#1E2022] mt-1">
                {lang === 'vi'
                  ? 'Tuyên ngôn Thương hiệu & Quy chuẩn Logo NAVACO'
                  : 'NAVACO Brand Manifesto & Visual Identity System'}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenDocsModal('brand-pdf')}
                className="px-4 py-2.5 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>
                  {lang === 'vi'
                    ? 'Xem & Tải PDF Logo Guideline v1.0'
                    : 'View & Download Logo Guideline PDF'}
                </span>
              </button>
            </div>
          </div>

          {/* 6 Core N-A-V-A-C-O Values */}
          <div>
            <h3 className="font-display text-xl font-bold uppercase text-[#1E2022] mb-4">
              {lang === 'vi'
                ? '6 Giá trị cốt lõi cấu thành tên thương hiệu N - A - V - A - C - O'
                : 'The 6 Core Values Behind N - A - V - A - C - O'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {BRAND_VALUES_NAVACO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#F7F7F5] border border-[#D8D8D2] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display text-4xl font-bold text-[#D6011E] block">
                      {item.letter}
                    </span>
                    <span className="font-mono-tabular text-xs font-bold uppercase text-[#42454A] block mt-1">
                      {item.word}
                    </span>
                    <h4 className="font-display text-base font-bold uppercase text-[#1E2022] mt-1">
                      {lang === 'vi' ? item.viTitle : item.enTitle}
                    </h4>
                    <p className="text-xs text-[#42454A] mt-2 leading-relaxed">
                      {item.desc[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Lockups & Color System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 border-t border-[#E6E6E0]">
            <div>
              <h3 className="font-display text-lg font-bold uppercase text-[#1E2022] mb-3">
                {lang === 'vi'
                  ? 'Phiên bản Logo chính (Ngang) & Logo phụ (Dọc)'
                  : 'Primary Horizontal & Secondary Vertical Logo Lockups'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-[#F7F7F5] border border-[#D8D8D2] flex flex-col items-center justify-center gap-3">
                  <NavacoLogo variant="horizontal" theme="standard" size="md" />
                  <span className="text-xs font-mono-tabular text-[#6B7078]">
                    {lang === 'vi' ? 'Logo chính (Header / Website)' : 'Primary Horizontal Logo'}
                  </span>
                </div>
                <div className="p-6 bg-[#42454A] text-white flex flex-col items-center justify-center gap-3">
                  <NavacoLogo variant="vertical" theme="dark-bg" size="md" />
                  <span className="text-xs font-mono-tabular text-[#E6E6E0]">
                    {lang === 'vi' ? 'Logo phụ (Đảo màu trên nền tối)' : 'Secondary Vertical Reversed'}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-bold uppercase text-[#1E2022] mb-3">
                {lang === 'vi'
                  ? 'Hệ màu chuẩn & Tỷ lệ phối màu 70% - 20% - 10%'
                  : 'Official Brand Color System (70% - 20% - 10%)'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="border border-[#D8D8D2] overflow-hidden">
                  <div className="h-20 bg-[#D6011E] p-3 flex items-end">
                    <span className="font-mono-tabular text-xs font-bold text-white">
                      HEX: #D6011E
                    </span>
                  </div>
                  <div className="p-3 bg-white">
                    <div className="font-display font-bold uppercase text-sm text-[#1E2022]">
                      NAVACO Red (~10%)
                    </div>
                    <p className="text-xs text-[#42454A] mt-0.5">
                      {lang === 'vi'
                        ? 'Kết nối, chuyển động, nút hành động'
                        : 'Connection, motion, primary CTAs'}
                    </p>
                  </div>
                </div>

                <div className="border border-[#D8D8D2] overflow-hidden">
                  <div className="h-20 bg-[#42454A] p-3 flex items-end">
                    <span className="font-mono-tabular text-xs font-bold text-white">
                      HEX: #42454A
                    </span>
                  </div>
                  <div className="p-3 bg-white">
                    <div className="font-display font-bold uppercase text-sm text-[#1E2022]">
                      Xám Graphite (~20%)
                    </div>
                    <p className="text-xs text-[#42454A] mt-0.5">
                      {lang === 'vi'
                        ? 'Năng lực kỹ thuật, chính xác, bền vững'
                        : 'Technical strength, precision, durability'}
                    </p>
                  </div>
                </div>

                <div className="border border-[#D8D8D2] overflow-hidden">
                  <div className="h-20 bg-[#F7F7F5] border-b border-[#E6E6E0] p-3 flex items-end">
                    <span className="font-mono-tabular text-xs font-bold text-[#1E2022]">
                      HEX: #F7F7F5
                    </span>
                  </div>
                  <div className="p-3 bg-white">
                    <div className="font-display font-bold uppercase text-sm text-[#1E2022]">
                      Industrial White (~70%)
                    </div>
                    <p className="text-xs text-[#42454A] mt-0.5">
                      {lang === 'vi'
                        ? 'Nền sáng, sạch, tôn bật hình ảnh kỹ thuật'
                        : 'Clean industrial canvas'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAREERS CALLOUT */}
        <section className="bg-[#42454A] text-white p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
              {lang === 'vi' ? 'PHÁT TRIỂN CÙNG ĐỘI NGŨ KỸ SƯ NAVACO' : 'GROW WITH NAVACO ENGINEERING'}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-white mt-1">
              {lang === 'vi'
                ? 'Khám phá cơ hội nghề nghiệp tại Việt Nam & Cambodia'
                : 'Explore Engineering Careers in Vietnam & Cambodia'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onNavigateCareers}
            className="px-6 py-3 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            {lang === 'vi' ? 'Xem trang Tuyển dụng' : 'View Careers Page'}
          </button>
        </section>
      </div>
    </div>
  );
};

interface CareersViewProps {
  lang: Language;
  onNavigateHome: () => void;
}

export const CareersView: React.FC<CareersViewProps> = ({
  lang,
  onNavigateHome,
}) => {
  const [selectedJobId, setSelectedJobId] = useState<string>(JOB_OPENINGS[0].id);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [cvFileName, setCvFileName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submittedJob, setSubmittedJob] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim() || !applicantPhone.trim()) {
      setErrorMsg(
        lang === 'vi'
          ? 'Vui lòng điền đầy đủ Họ tên, Email và Số điện thoại ứng tuyển.'
          : 'Please enter your Full Name, Email, and Phone Number.'
      );
      return;
    }
    setErrorMsg('');
    setSubmittedJob(true);
  };

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
              {lang === 'vi' ? 'Tuyển dụng' : 'Careers'}
            </span>
          </nav>

          <span className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            GIA NHẬP ĐỘI NGŨ KỸ THUẬT NAVACO
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase text-white mt-1">
            {lang === 'vi'
              ? 'Môi trường Kỹ thuật Thực chiến & Vị trí Đang tuyển'
              : 'Field Engineering Culture & Open Positions'}
          </h1>
          <p className="text-base md:text-lg text-[#E6E6E0] max-w-3xl mt-2">
            {lang === 'vi'
              ? 'Làm việc cùng các chuyên gia cẩu cảng hàng đầu, trang bị đồng phục và bảo hộ chuẩn quốc tế, tham gia các dự án lớn tại Cái Mép, Hải Phòng, Đà Nẵng và Cambodia.'
              : 'Work alongside senior port crane specialists in full safety gear across major projects in Cái Mép, Hải Phòng, Đà Nẵng, and Cambodia.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Open Positions List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {JOB_OPENINGS.map((job) => {
            const isSelected = job.id === selectedJobId;
            return (
              <div
                key={job.id}
                className={`bg-white border-2 p-6 flex flex-col justify-between ${
                  isSelected ? 'border-[#D6011E]' : 'border-[#D8D8D2]'
                }`}
              >
                <div>
                  <span className="text-xs font-mono-tabular text-[#D6011E] font-semibold">
                    {job.type[lang]} · {job.location[lang]}
                  </span>
                  <h2 className="font-display text-xl font-bold uppercase text-[#1E2022] mt-1">
                    {job.title[lang]}
                  </h2>
                  <p className="text-sm text-[#42454A] mt-3 leading-relaxed">
                    {job.summary[lang]}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-xs text-[#1E2022] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-0.5" />
                        <span>{req[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E6E0]">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedJobId(job.id);
                      setSubmittedJob(false);
                    }}
                    className={`w-full py-2.5 text-xs font-display font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#D6011E] text-white'
                        : 'bg-[#42454A] text-white hover:bg-[#2C2F33]'
                    }`}
                  >
                    {lang === 'vi' ? 'Chọn ứng tuyển vị trí này' : 'Apply for This Position'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CV Application Form */}
        <div className="bg-white border border-[#D8D8D2] p-6 md:p-8 max-w-3xl">
          <h2 className="font-display text-2xl font-bold uppercase text-[#1E2022]">
            {lang === 'vi' ? 'Form Ứng tuyển & Gửi CV Kỹ thuật' : 'Submit Your Technical CV'}
          </h2>
          <p className="text-sm text-[#42454A] mt-1">
            {lang === 'vi'
              ? 'Hồ sơ ứng tuyển được gửi trực tiếp về bộ phận Nhân sự & Kỹ thuật NAVACO.'
              : 'Applications are routed directly to NAVACO HR & Engineering Management.'}
          </p>

          {submittedJob ? (
            <div className="mt-6 p-6 bg-[#F7F7F5] border-2 border-[#42454A]" role="status">
              <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                {lang === 'vi'
                  ? 'Đã tiếp nhận hồ sơ ứng tuyển của bạn!'
                  : 'Application Successfully Received!'}
              </h3>
              <p className="text-sm text-[#42454A] mt-2">
                {lang === 'vi'
                  ? `Cảm ơn ${applicantName}. Bộ phận Nhân sự NAVACO sẽ liên hệ qua số ${applicantPhone} hoặc email ${applicantEmail}.`
                  : `Thank you, ${applicantName}. NAVACO HR will contact you at ${applicantPhone} or ${applicantEmail}.`}
              </p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="mt-6 space-y-4" noValidate>
              <div>
                <label htmlFor="cv-position" className="block text-sm font-semibold text-[#1E2022] mb-1">
                  {lang === 'vi' ? 'Vị trí ứng tuyển' : 'Position'}
                </label>
                <select
                  id="cv-position"
                  value={selectedJobId}
                  onChange={(e) => setSelectedJobId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022]"
                >
                  {JOB_OPENINGS.map((j) => (
                    <option key={j.id} value={j.id}>
                      {j.title[lang]}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="cv-name" className="block text-sm font-semibold text-[#1E2022] mb-1">
                    {lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}
                  </label>
                  <input
                    id="cv-name"
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0]"
                  />
                </div>
                <div>
                  <label htmlFor="cv-email" className="block text-sm font-semibold text-[#1E2022] mb-1">
                    Email *
                  </label>
                  <input
                    id="cv-email"
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0]"
                  />
                </div>
                <div>
                  <label htmlFor="cv-phone" className="block text-sm font-semibold text-[#1E2022] mb-1">
                    {lang === 'vi' ? 'Số điện thoại / Zalo *' : 'Phone / Zalo *'}
                  </label>
                  <input
                    id="cv-phone"
                    type="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="cv-note" className="block text-sm font-semibold text-[#1E2022] mb-1">
                  {lang === 'vi' ? 'Tóm tắt kinh nghiệm kỹ thuật' : 'Experience Summary'}
                </label>
                <textarea
                  id="cv-note"
                  rows={3}
                  value={applicantNote}
                  onChange={(e) => setApplicantNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0]"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-[#D6011E] flex items-center gap-1" role="alert">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </p>
              )}

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <label
                  htmlFor="cv-upload"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F7F5] border border-[#C8C8C0] text-sm cursor-pointer"
                >
                  <FileUp className="w-4 h-4 text-[#D6011E]" />
                  <span>
                    {cvFileName ||
                      (lang === 'vi' ? 'Đính kèm hồ sơ CV (PDF/DOCX)' : 'Attach CV (PDF/DOCX)')}
                  </span>
                  <input
                    id="cv-upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setCvFileName(e.target.files?.[0]?.name || '')}
                  />
                </label>

                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-sm flex items-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'vi' ? 'Gửi hồ sơ ứng tuyển' : 'Submit Application'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
