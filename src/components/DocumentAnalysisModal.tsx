import React, { useState } from 'react';
import { CONTACT_INFO, Language } from '../data/navacoData';
import { NavacoLogo } from './NavacoLogo';
import { X, FileText, Download, CheckCircle2, ExternalLink } from 'lucide-react';

interface DocumentAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialTab?: 'analysis' | 'brand-pdf' | 'brief-pdf';
}

export const DocumentAnalysisModal: React.FC<DocumentAnalysisModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialTab = 'analysis',
}) => {
  const [activeTab, setActiveTab] = useState<'analysis' | 'brand-pdf' | 'brief-pdf'>(initialTab);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={
        lang === 'vi'
          ? 'Phân tích Tài liệu Brief & Bộ nhận diện NAVACO'
          : 'NAVACO Brief & Brand Guideline Analysis'
      }
    >
      <div className="bg-[#F7F7F5] border-2 border-[#42454A] w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#42454A] text-white px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <NavacoLogo variant="symbol" theme="dark-bg" size="sm" />
            <div>
              <p className="text-xs font-mono-tabular uppercase tracking-wider text-[#E6E6E0]">
                {lang === 'vi'
                  ? 'TỔNG HỢP PHÂN TÍCH TÀI LIỆU & HỒ SƠ NĂNG LỰC (08/2026 – 10/2026)'
                  : 'DOCUMENT ANALYSIS & COMPANY PROFILE (08/2026 – 10/2026)'}
              </p>
              <h2 className="font-display text-xl md:text-2xl font-bold uppercase">
                {lang === 'vi'
                  ? 'Đối chiếu Brief Website & Bộ Nhận Diện Thương Hiệu NAVACO v1.0'
                  : 'NAVACO Website Brief & Brand Guideline v1.0 Compliance Matrix'}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === 'vi' ? 'Đóng cửa sổ' : 'Close modal'}
            className="p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sub-navigation Tabs */}
        <div className="bg-white border-b border-[#D8D8D2] px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('analysis')}
              className={`px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'analysis'
                  ? 'bg-[#D6011E] text-white'
                  : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
              }`}
            >
              {lang === 'vi' ? '1. Bản Phân Tích & Đối Chiếu Thiết Kế' : '1. Analysis & Design Matrix'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('brand-pdf')}
              className={`px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'brand-pdf'
                  ? 'bg-[#D6011E] text-white'
                  : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
              }`}
            >
              {lang === 'vi' ? '2. Xem PDF Bộ Nhận Diện v1.0' : '2. Brand Guideline PDF v1.0'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('brief-pdf')}
              className={`px-4 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                activeTab === 'brief-pdf'
                  ? 'bg-[#D6011E] text-white'
                  : 'bg-[#F7F7F5] text-[#42454A] hover:text-[#1E2022]'
              }`}
            >
              {lang === 'vi' ? '3. Xem PDF Brief Website' : '3. Website Brief PDF'}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT_INFO.brandGuidelinePdfUrl}
              download="KD_QT_Navaco-Bo-nhan-dien-thuong-hieu_1.0.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#42454A] text-white hover:bg-[#2C2F33] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Tải Brand Guideline' : 'Download Brand PDF'}</span>
            </a>
            <a
              href={CONTACT_INFO.websiteBriefPdfUrl}
              download="NAVACO_Brief_thiet_ke_website_NAVACO.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-[#D6011E] text-white hover:bg-[#B00018] transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Tải Brief / Hồ sơ' : 'Download Brief PDF'}</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'analysis' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Document 1 Analysis: Brand Guideline */}
                <div className="bg-white border border-[#D8D8D2] p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E6E6E0]">
                    <div>
                      <span className="text-xs font-mono-tabular text-[#D6011E] font-semibold">
                        01/2026/QT-NAVACO · 04/08/2026
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                        {lang === 'vi'
                          ? 'Phân tích Bộ Nhận Diện Thương Hiệu v1.0'
                          : 'Brand Identity Guideline v1.0 Analysis'}
                      </h3>
                    </div>
                    <FileText className="w-6 h-6 text-[#42454A]" />
                  </div>

                  <ul className="space-y-3 text-sm text-[#1E2022]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Cấu trúc Logo:</strong> Gồm Biểu tượng chữ <strong>"N" cách điệu</strong> (hai đường nét chéo kết nối liền mạch, hướng lên và vươn xa) kết hợp Wordmark <strong>NAVACO</strong>. Bản ngang dùng cho Header/Footer; bản dọc dùng cho không gian vuông.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Hệ màu & Tỷ lệ 70-20-10:</strong> Nền sáng <code>#F7F7F5</code> (~70%), Xám Graphite <code>#42454A</code> (~20% cho năng lực kỹ thuật, sự chính xác, độ bền vững), Đỏ NAVACO <code>#D6011E</code> (~10% cho nút CTA, đường nhấn, số thứ tự).
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Tuyên ngôn N-A-V-A-C-O & Slogan:</strong> Navigation · Ambition · Value · Accountability · Commitment · Optimization. Slogan: <em>"KẾT NỐI NĂNG LỰC - NÂNG TẦM GIÁ TRỊ"</em>.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Phạm vi áp dụng:</strong> Toàn công ty tại TP.HCM — Hải Phòng — Đà Nẵng — Cái Mép và các dự án tại Cambodia.
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Document 2 Analysis: Website Design Brief */}
                <div className="bg-white border border-[#D8D8D2] p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E6E6E0]">
                    <div>
                      <span className="text-xs font-mono-tabular text-[#D6011E] font-semibold">
                        OCT 20, 2026 · @DANNY · APPROVED VERSION
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase text-[#1E2022]">
                        {lang === 'vi'
                          ? 'Phân tích Brief Thiết Kế Website NAVACO.VN'
                          : 'NAVACO.VN Website Design Brief Analysis'}
                      </h3>
                    </div>
                    <FileText className="w-6 h-6 text-[#42454A]" />
                  </div>

                  <ul className="space-y-3 text-sm text-[#1E2022]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Mục tiêu B2B:</strong> Giới thiệu năng lực kỹ thuật cho cảng biển & nhà máy tại Việt Nam và Cambodia, thu yêu cầu báo giá về <code>sales@navaco.vn</code>. Loại bỏ hoàn toàn giỏ hàng, đăng nhập và giá bán lẻ.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Tham chiếu Kalmar × Magirus:</strong> Phân nhóm dịch vụ theo vòng đời vận hành (Vận hành, Nâng cấp, Hạ tầng & Năng lượng) theo Kalmar; Mega Menu có hình minh họa + thẻ thiết bị tách nền + nét cắt chéo theo Magirus.
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Trang chủ 9 khối & Trang dịch vụ 7 khối:</strong> Đầy đủ 9 khối trang chủ từ Hero tới CTA cuối trang; mỗi dịch vụ tuân thủ khuôn 7 khối (Hero → Vấn đề → NAVACO làm gì → Quy trình → Dự án → Hãng → Form báo giá).
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D6011E] shrink-0 mt-1" />
                      <div>
                        <strong>Tính năng đặc thù đã hiện thực:</strong> Song ngữ Việt - Anh, Bộ lọc dự án theo Dịch vụ & Quốc gia, Thanh kéo so sánh Trước / Sau trên trang chi tiết dự án, Tìm kiếm nhanh và Nút nổi Zalo/Hotline <code>090.1331.808</code>.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Architecture Mapping Table */}
              <div className="bg-white border border-[#D8D8D2] p-6">
                <h3 className="font-display text-lg font-bold uppercase text-[#1E2022] mb-3">
                  {lang === 'vi'
                    ? 'Bảng kiểm đối chiếu 8 mục Menu & Thành phần kỹ thuật trong bản Demo'
                    : '8-Section Sitemap & Feature Verification Matrix'}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#42454A] text-white font-display uppercase tracking-wider">
                        <th className="py-2.5 px-3">Hạng mục Brief</th>
                        <th className="py-2.5 px-3">Yêu cầu chi tiết từ tài liệu</th>
                        <th className="py-2.5 px-3">Trạng thái trên Website Demo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E6E0]">
                      <tr>
                        <td className="py-2.5 px-3 font-semibold">1. Trang chủ (9 khối)</td>
                        <td className="py-2.5 px-3">Hero + 3 nhóm dịch vụ + Dải 6 thiết bị cuộn ngang + 3 Dự án nổi bật + 4 lý do chọn NAVACO + Đối tác + Tin tức + Hồ sơ/Tuyển dụng + CTA</td>
                        <td className="py-2.5 px-3 text-[#D6011E] font-mono-tabular font-semibold">Đầy đủ 9/9 khối</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold">2. Giải pháp & Dịch vụ</td>
                        <td className="py-2.5 px-3">3 nhóm vòng đời (Vận hành, Nâng cấp, Hạ tầng & Năng lượng) + 10 trang dịch vụ con theo khuôn 7 khối</td>
                        <td className="py-2.5 px-3 text-[#D6011E] font-mono-tabular font-semibold">10/10 dịch vụ · 7 khối</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold">3. Thiết bị</td>
                        <td className="py-2.5 px-3">STS, RTG, Reach Stacker, Xe nâng rỗng, Xe đầu kéo, Cẩu bờ di động (2 loại) — thẻ kiểu Magirus + trang chi tiết từng dòng</td>
                        <td className="py-2.5 px-3 text-[#D6011E] font-mono-tabular font-semibold">6 dòng + Chi tiết</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold">4. Dự án (Trước / Sau)</td>
                        <td className="py-2.5 px-3">RTG Sihanoukville, Kalmar PPAP, CMIT, STOLL, Tân Thuận, Tiên Sa — Lọc theo dịch vụ/quốc gia + Thanh kéo Trước/Sau</td>
                        <td className="py-2.5 px-3 text-[#D6011E] font-mono-tabular font-semibold">Bộ lọc + Thanh kéo</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-semibold">5. Đối tác & Về NAVACO</td>
                        <td className="py-2.5 px-3">Port Ecosystem (Siemens, Kalmar, Bromma, Bubenzer, igus, Teufelberger...) + Năng lực kiểm chứng + Xưởng Cái Mép + Tuyển dụng</td>
                        <td className="py-2.5 px-3 text-[#D6011E] font-mono-tabular font-semibold">Đã tích hợp</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {activeTab === 'brand-pdf' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 border border-[#D8D8D2]">
                <span className="text-sm font-medium text-[#1E2022]">
                  KD_QT_Navaco-Bo-nhan-dien-thuong-hieu_1.0.pdf (04/08/2026)
                </span>
                <a
                  href={CONTACT_INFO.brandGuidelinePdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D6011E] hover:underline"
                >
                  <span>{lang === 'vi' ? 'Mở tab mới' : 'Open in new tab'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <iframe
                src={CONTACT_INFO.brandGuidelinePdfUrl}
                title="NAVACO Brand Guideline PDF"
                className="w-full h-[62vh] border border-[#42454A] bg-white"
              />
            </div>
          )}

          {activeTab === 'brief-pdf' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 border border-[#D8D8D2]">
                <span className="text-sm font-medium text-[#1E2022]">
                  NAVACO_Brief_thiet_ke_website_NAVACO.pdf (Oct 20, 2026 · @Danny)
                </span>
                <a
                  href={CONTACT_INFO.websiteBriefPdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#D6011E] hover:underline"
                >
                  <span>{lang === 'vi' ? 'Mở tab mới' : 'Open in new tab'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <iframe
                src={CONTACT_INFO.websiteBriefPdfUrl}
                title="NAVACO Website Design Brief PDF"
                className="w-full h-[62vh] border border-[#42454A] bg-white"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
