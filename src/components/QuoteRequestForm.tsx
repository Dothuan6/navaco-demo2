import React, { useState, useEffect } from 'react';
import {
  CONTACT_INFO,
  Language,
  QuoteNeedType,
  QuoteSubmission,
} from '../data/navacoData';
import { QuoteFormInput, validateQuoteForm } from '../utils/navacoLogic';
import { CheckCircle2, FileUp, Send, AlertCircle } from 'lucide-react';

interface QuoteRequestFormProps {
  lang: Language;
  defaultNeed?: QuoteNeedType;
  defaultEquipment?: string;
  contextTitle?: string;
  onQuoteSubmitted: (submission: QuoteSubmission) => void;
  submittedQuotesCount: number;
}

const NEED_OPTIONS: { value: QuoteNeedType; vi: string; en: string }[] = [
  { value: 'maintenance', vi: 'Bảo trì trọn gói (FCM)', en: 'Full Maintenance (FCM)' },
  { value: 'spare_parts', vi: 'Phụ tùng chính hãng', en: 'Genuine OEM Spare Parts' },
  { value: 'rental', vi: 'Cho thuê thiết bị', en: 'Equipment Rental' },
  { value: 'manpower', vi: 'Nhân lực vận hành', en: 'Operator Manpower Supply' },
  { value: 'upgrade', vi: 'Nâng cấp / Retrofit / Đại tu', en: 'Retrofit / Overhaul Upgrade' },
  { value: 'relocation', vi: 'Nâng hạ & Di dời cẩu', en: 'Crane Installation & Relocation' },
  { value: 'electrical', vi: 'Điện trung/hạ thế & Điện bờ', en: 'MV/LV & Shore Power' },
  { value: 'other', vi: 'Khác (Đào tạo / Tư vấn kỹ thuật)', en: 'Other (Training / Consulting)' },
];

export const QuoteRequestForm: React.FC<QuoteRequestFormProps> = ({
  lang,
  defaultNeed = 'maintenance',
  defaultEquipment = '',
  contextTitle,
  onQuoteSubmitted,
  submittedQuotesCount,
}) => {
  const [form, setForm] = useState<QuoteFormInput>({
    fullName: '',
    company: '',
    role: '',
    email: '',
    phoneOrZalo: '',
    country: 'VN',
    need: defaultNeed,
    equipmentAndBrand: defaultEquipment,
    message: '',
    honeypot: '',
  });

  const [attachmentName, setAttachmentName] = useState<string>('');
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormInput, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<QuoteSubmission | null>(null);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      need: defaultNeed,
      equipmentAndBrand: defaultEquipment || prev.equipmentAndBrand,
    }));
  }, [defaultNeed, defaultEquipment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateQuoteForm(form, lang);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    const newSubmission: QuoteSubmission = {
      id: `NVQ-${Date.now().toString().slice(-6)}`,
      fullName: form.fullName.trim(),
      company: form.company.trim(),
      role: form.role.trim() || (lang === 'vi' ? 'Kỹ thuật / Mua hàng' : 'Engineering / Procurement'),
      email: form.email.trim(),
      phoneOrZalo: form.phoneOrZalo.trim(),
      country: form.country,
      need: form.need,
      equipmentAndBrand: form.equipmentAndBrand.trim() || (lang === 'vi' ? 'Chưa xác định' : 'Unspecified'),
      message: form.message.trim(),
      attachmentName: attachmentName || undefined,
      createdAt: new Date().toLocaleTimeString(lang === 'vi' ? 'vi-VN' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    onQuoteSubmitted(newSubmission);
    setSubmittedRecord(newSubmission);
  };

  if (submittedRecord) {
    return (
      <div
        className="bg-white border-2 border-[#42454A] p-8"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-[#D6011E] text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#42454A]">
              {lang === 'vi'
                ? `MÃ YÊU CẦU: ${submittedRecord.id} · ĐÃ GỬI TỚI ${CONTACT_INFO.salesEmail}`
                : `REFERENCE ID: ${submittedRecord.id} · ROUTED TO ${CONTACT_INFO.salesEmail}`}
            </p>
            <h3 className="font-display text-2xl font-bold uppercase text-[#1E2022] mt-1">
              {lang === 'vi'
                ? 'Đã tiếp nhận yêu cầu báo giá kỹ thuật'
                : 'Technical Quote Request Received'}
            </h3>
            <p className="text-[#42454A] mt-2">
              {lang === 'vi'
                ? `Cảm ơn ${submittedRecord.fullName} (${submittedRecord.company}). Hệ thống đã tự động gửi email xác nhận tới ${submittedRecord.email} và chuyển hồ sơ trực tiếp về bộ phận Kỹ thuật & Kinh doanh NAVACO (${CONTACT_INFO.salesEmail}).`
                : `Thank you, ${submittedRecord.fullName} (${submittedRecord.company}). An automated confirmation has been sent to ${submittedRecord.email} and routed directly to NAVACO Engineering & Sales (${CONTACT_INFO.salesEmail}).`}
            </p>

            <div className="mt-5 p-4 bg-[#F7F7F5] border border-[#E2E2DC] grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="block text-xs text-[#6B7078]">
                  {lang === 'vi' ? 'Quốc gia / Khu vực' : 'Country / Region'}
                </span>
                <span className="font-semibold text-[#1E2022]">
                  {submittedRecord.country === 'VN'
                    ? 'Việt Nam'
                    : submittedRecord.country === 'KH'
                    ? 'Cambodia'
                    : lang === 'vi'
                    ? 'Quốc gia khác'
                    : 'Other'}
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#6B7078]">
                  {lang === 'vi' ? 'Hạng mục yêu cầu' : 'Service Category'}
                </span>
                <span className="font-semibold text-[#1E2022]">
                  {NEED_OPTIONS.find((n) => n.value === submittedRecord.need)?.[lang]}
                </span>
              </div>
              <div>
                <span className="block text-xs text-[#6B7078]">
                  {lang === 'vi' ? 'Thiết bị / Hãng' : 'Equipment / OEM Brand'}
                </span>
                <span className="font-semibold text-[#1E2022]">
                  {submittedRecord.equipmentAndBrand}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono-tabular text-[#42454A]">
                {lang === 'vi'
                  ? `Tổng yêu cầu đã ghi nhận trong phiên: ${submittedQuotesCount}`
                  : `Total requests logged in session: ${submittedQuotesCount}`}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSubmittedRecord(null);
                  setForm((prev) => ({
                    ...prev,
                    message: '',
                  }));
                }}
                className="px-5 py-2.5 bg-[#42454A] text-white text-sm font-medium hover:bg-[#2C2F33] transition-colors whitespace-nowrap"
              >
                {lang === 'vi' ? 'Gửi thêm yêu cầu khác' : 'Submit Another Request'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white border border-[#D8D8D2] p-6 md:p-8"
      aria-label={lang === 'vi' ? 'Form yêu cầu báo giá kỹ thuật' : 'Technical Quote Request Form'}
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#E6E6E0]">
        <div>
          <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#D6011E] font-semibold">
            {lang === 'vi' ? 'TIẾP NHẬN YÊU CẦU KỸ THUẬT & BÁO GIÁ' : 'TECHNICAL INQUIRY & QUOTATION DESK'}
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-bold uppercase text-[#1E2022] mt-1">
            {contextTitle ||
              (lang === 'vi'
                ? 'Yêu cầu báo giá dịch vụ & phụ tùng'
                : 'Request Service or Spare Parts Quotation')}
          </h3>
        </div>
        <div className="text-sm text-[#42454A]">
          <span>{lang === 'vi' ? 'Gửi trực tiếp về:' : 'Direct routing:'} </span>
          <span className="font-mono-tabular font-semibold text-[#1E2022]">
            {CONTACT_INFO.salesEmail}
          </span>
        </div>
      </div>

      {/* Honeypot anti-spam field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="navaco-website-hp">Website</label>
        <input
          id="navaco-website-hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.honeypot}
          onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label htmlFor="quote-fullname" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}
          </label>
          <input
            id="quote-fullname"
            type="text"
            required
            placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'Full name'}
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs text-[#D6011E] flex items-center gap-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.fullName}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-company" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Cảng / Công ty *' : 'Port / Company *'}
          </label>
          <input
            id="quote-company"
            type="text"
            required
            placeholder={lang === 'vi' ? 'Tên Cảng hoặc Nhà máy' : 'Terminal or Plant Name'}
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
          {errors.company && (
            <p className="mt-1 text-xs text-[#D6011E] flex items-center gap-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.company}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-role" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Chức vụ / Bộ phận' : 'Title / Department'}
          </label>
          <input
            id="quote-role"
            type="text"
            placeholder={lang === 'vi' ? 'TP Kỹ thuật / Mua hàng / Vận hành' : 'Engineering / Procurement'}
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div>
          <label htmlFor="quote-email" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Email công việc *' : 'Work Email *'}
          </label>
          <input
            id="quote-email"
            type="email"
            required
            placeholder="name@port-company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-[#D6011E] flex items-center gap-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Số điện thoại / Zalo *' : 'Phone / Zalo Number *'}
          </label>
          <input
            id="quote-phone"
            type="tel"
            required
            placeholder="090.xxx.xxxx / +855..."
            value={form.phoneOrZalo}
            onChange={(e) => setForm({ ...form, phoneOrZalo: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
          {errors.phoneOrZalo && (
            <p className="mt-1 text-xs text-[#D6011E] flex items-center gap-1" role="alert">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errors.phoneOrZalo}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="quote-country" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Quốc gia *' : 'Country *'}
          </label>
          <select
            id="quote-country"
            value={form.country}
            onChange={(e) =>
              setForm({
                ...form,
                country: e.target.value as 'VN' | 'KH' | 'OTHER',
              })
            }
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          >
            <option value="VN">{lang === 'vi' ? 'Việt Nam' : 'Vietnam'}</option>
            <option value="KH">{lang === 'vi' ? 'Cambodia (Campuchia)' : 'Cambodia'}</option>
            <option value="OTHER">{lang === 'vi' ? 'Khác' : 'Other'}</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
        <div>
          <label htmlFor="quote-need" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi' ? 'Nhu cầu dịch vụ *' : 'Service Requirement *'}
          </label>
          <select
            id="quote-need"
            value={form.need}
            onChange={(e) =>
              setForm({
                ...form,
                need: e.target.value as QuoteNeedType,
              })
            }
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          >
            {NEED_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt[lang]}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="quote-equipment" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
            {lang === 'vi'
              ? 'Loại thiết bị & Hãng (nếu có)'
              : 'Equipment Type & OEM Brand (if applicable)'}
          </label>
          <input
            id="quote-equipment"
            type="text"
            placeholder={
              lang === 'vi'
                ? 'VD: Cẩu RTG Kalmar, Phanh Bubenzer, Cáp Teufelberger, Tủ Siemens...'
                : 'e.g., Kalmar RTG, Bubenzer Brake, Teufelberger Rope, Siemens PLC...'
            }
            value={form.equipmentAndBrand}
            onChange={(e) => setForm({ ...form, equipmentAndBrand: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="quote-message" className="block text-sm font-semibold text-[#1E2022] mb-1.5">
          {lang === 'vi'
            ? 'Nội dung yêu cầu kỹ thuật / Mã phụ tùng *'
            : 'Technical Scope / Part Numbers / Symptoms *'}
        </label>
        <textarea
          id="quote-message"
          rows={3}
          required
          placeholder={
            lang === 'vi'
              ? 'Mô tả tình trạng thiết bị, phạm vi cần bảo trì/nâng cấp, thời gian dự kiến hoặc danh mục mã phụ tùng...'
              : 'Describe equipment condition, maintenance/retrofit scope, target schedule, or part numbers...'
          }
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3.5 py-2.5 bg-[#F7F7F5] border border-[#C8C8C0] text-[#1E2022] focus:outline-none focus:border-[#D6011E]"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-[#D6011E] flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E6E6E0]">
        <div>
          <label
            htmlFor="quote-file"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7F7F5] border border-[#C8C8C0] text-sm text-[#42454A] hover:border-[#42454A] cursor-pointer transition-colors"
          >
            <FileUp className="w-4 h-4 text-[#D6011E]" />
            <span>
              {attachmentName
                ? attachmentName
                : lang === 'vi'
                ? 'Đính kèm ảnh nameplate / bản vẽ / danh mục vật tư'
                : 'Attach nameplate photo / drawing / BOM'}
            </span>
          </label>
          <input
            id="quote-file"
            type="file"
            className="sr-only"
            onChange={(e) => {
              const file = e.target.files?.[0];
              setAttachmentName(file ? file.name : '');
            }}
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D6011E] hover:bg-[#B00018] text-white font-display font-bold uppercase tracking-wider text-base transition-colors cursor-pointer whitespace-nowrap shrink-0"
        >
          <Send className="w-4 h-4" />
          <span>{lang === 'vi' ? 'Gửi yêu cầu báo giá' : 'Submit Quote Request'}</span>
        </button>
      </div>
    </form>
  );
};
