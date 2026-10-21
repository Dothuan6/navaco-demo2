import {
  EQUIPMENT_LIST,
  Language,
  NEWS_ARTICLES,
  NewsItem,
  PARTNERS,
  PROJECTS,
  ProjectItem,
  QuoteNeedType,
   SERVICES,
  ServiceGroupId,
} from '../data/navacoData';

export interface ProjectFilterInput {
  country?: 'ALL' | 'VN' | 'KH';
  serviceGroup?: 'ALL' | ServiceGroupId;
  query?: string;
}

export function filterProjects(
  projects: ProjectItem[],
  filter: ProjectFilterInput,
  lang: Language = 'vi'
): ProjectItem[] {
  const { country = 'ALL', serviceGroup = 'ALL', query = '' } = filter;
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    if (country !== 'ALL' && project.country !== country) {
      return false;
    }
    if (serviceGroup !== 'ALL' && project.serviceGroup !== serviceGroup) {
      return false;
    }
    if (normalizedQuery) {
      const haystack = [
        project.title[lang],
        project.client[lang],
        project.location[lang],
        project.serviceTag[lang],
        project.equipmentUsed[lang],
        project.summary[lang],
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    }
    return true;
  });
}

export function filterNews(
  articles: NewsItem[],
  category: 'all' | 'project' | 'technical' | 'event'
): NewsItem[] {
  if (category === 'all') return articles;
  return articles.filter((a) => a.category === category);
}

export interface SearchResultItem {
  id: string;
  type: 'service' | 'equipment' | 'project' | 'partner' | 'news';
  typeLabel: string;
  title: string;
  subtitle: string;
}

export function globalSearch(query: string, lang: Language): SearchResultItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results: SearchResultItem[] = [];

  for (const s of SERVICES) {
    const text = `${s.title.vi} ${s.title.en} ${s.shortDesc.vi} ${s.shortDesc.en}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        id: s.id,
        type: 'service',
        typeLabel: lang === 'vi' ? 'Giải pháp & Dịch vụ' : 'Service',
        title: s.title[lang],
        subtitle: s.shortDesc[lang],
      });
    }
  }

  for (const e of EQUIPMENT_LIST) {
    const text = `${e.code} ${e.name.vi} ${e.name.en} ${e.oneLiner.vi} ${e.oneLiner.en}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        id: e.id,
        type: 'equipment',
        typeLabel: lang === 'vi' ? 'Thiết bị' : 'Equipment',
        title: e.name[lang],
        subtitle: e.oneLiner[lang],
      });
    }
  }

  for (const p of PROJECTS) {
    const text = `${p.title.vi} ${p.title.en} ${p.client.vi} ${p.client.en} ${p.location.vi} ${p.summary.vi}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        id: p.id,
        type: 'project',
        typeLabel: lang === 'vi' ? 'Dự án' : 'Project',
        title: p.title[lang],
        subtitle: `${p.client[lang]} · ${p.countryLabel[lang]}`,
      });
    }
  }

  for (const partner of PARTNERS) {
    const text = `${partner.name} ${partner.category.vi} ${partner.category.en} ${partner.whatNavacoProvides.vi} ${partner.whatNavacoProvides.en}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        id: partner.id,
        type: 'partner',
        typeLabel: lang === 'vi' ? 'Đối tác' : 'Partner',
        title: partner.name,
        subtitle: partner.whatNavacoProvides[lang],
      });
    }
  }

  for (const article of NEWS_ARTICLES) {
    const text = `${article.title.vi} ${article.title.en} ${article.excerpt.vi} ${article.excerpt.en}`.toLowerCase();
    if (text.includes(q)) {
      results.push({
        id: article.id,
        type: 'news',
        typeLabel: lang === 'vi' ? 'Tin tức' : 'News',
        title: article.title[lang],
        subtitle: article.excerpt[lang],
      });
    }
  }

  return results;
}

export interface QuoteFormInput {
  fullName: string;
  company: string;
  role: string;
  email: string;
  phoneOrZalo: string;
  country: 'VN' | 'KH' | 'OTHER';
  need: QuoteNeedType;
  equipmentAndBrand: string;
  message: string;
  honeypot?: string;
}

export interface QuoteValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof QuoteFormInput, string>>;
}

export function validateQuoteForm(
  input: QuoteFormInput,
  lang: Language = 'vi'
): QuoteValidationResult {
  const errors: Partial<Record<keyof QuoteFormInput, string>> = {};

  if (input.honeypot && input.honeypot.trim().length > 0) {
    errors.honeypot = lang === 'vi' ? 'Phát hiện spam.' : 'Spam detected.';
  }

  if (!input.fullName || input.fullName.trim().length < 2) {
    errors.fullName =
      lang === 'vi'
        ? 'Vui lòng nhập họ tên người liên hệ.'
        : 'Please enter your full name.';
  }

  if (!input.company || input.company.trim().length < 2) {
    errors.company =
      lang === 'vi'
        ? 'Vui lòng nhập tên cảng hoặc công ty.'
        : 'Please enter your port or company name.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!input.email || !emailRegex.test(input.email.trim())) {
    errors.email =
      lang === 'vi'
        ? 'Vui lòng nhập địa chỉ email hợp lệ.'
        : 'Please enter a valid work email address.';
  }

  const phoneClean = (input.phoneOrZalo || '').replace(/[\s.\-()]/g, '');
  if (!phoneClean || !/^\+?[0-9]{8,15}$/.test(phoneClean)) {
    errors.phoneOrZalo =
      lang === 'vi'
        ? 'Vui lòng nhập số điện thoại hoặc Zalo hợp lệ (8–15 chữ số).'
        : 'Please enter a valid phone or Zalo number (8–15 digits).';
  }

  if (!input.message || input.message.trim().length < 10) {
    errors.message =
      lang === 'vi'
        ? 'Vui lòng mô tả tóm tắt yêu cầu kỹ thuật hoặc mã phụ tùng (tối thiểu 10 ký tự).'
        : 'Please describe your technical requirement or part number (at least 10 characters).';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
