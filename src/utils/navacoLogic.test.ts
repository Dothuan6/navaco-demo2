import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterNews,
  filterProjects,
  globalSearch,
  validateQuoteForm,
} from './navacoLogic';
import { NEWS_ARTICLES, PROJECTS } from '../data/navacoData';

test('filterProjects filters accurately by country and serviceGroup', () => {
  const cambodiaProjects = filterProjects(PROJECTS, { country: 'KH' });
  assert.ok(cambodiaProjects.length >= 3);
  assert.ok(cambodiaProjects.every((p) => p.country === 'KH'));

  const vnOperations = filterProjects(PROJECTS, {
    country: 'VN',
    serviceGroup: 'operations',
  });
  assert.ok(vnOperations.length >= 1);
  assert.ok(
    vnOperations.every(
      (p) => p.country === 'VN' && p.serviceGroup === 'operations'
    )
  );
});

test('filterNews filters articles by category', () => {
  const all = filterNews(NEWS_ARTICLES, 'all');
  assert.equal(all.length, NEWS_ARTICLES.length);

  const tech = filterNews(NEWS_ARTICLES, 'technical');
  assert.equal(tech.length, 1);
  assert.equal(tech[0].id, 'ehouse-retrofit-technical');
});

test('globalSearch returns matching services, equipment, projects, and partners', () => {
  const kalmarResults = globalSearch('Kalmar', 'vi');
  assert.ok(kalmarResults.length >= 2);
  assert.ok(kalmarResults.some((r) => r.type === 'partner'));
  assert.ok(kalmarResults.some((r) => r.type === 'project'));

  const sihanoukvilleResults = globalSearch('Sihanoukville', 'en');
  assert.ok(sihanoukvilleResults.some((r) => r.id === 'rtg-sihanoukville'));
});

test('validateQuoteForm catches empty fields and accepts valid input', () => {
  const invalidResult = validateQuoteForm(
    {
      fullName: '',
      company: '',
      role: '',
      email: 'bad-email',
      phoneOrZalo: '123',
      country: 'VN',
      need: 'maintenance',
      equipmentAndBrand: '',
      message: 'short',
    },
    'vi'
  );
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.company);
  assert.ok(invalidResult.errors.email);
  assert.ok(invalidResult.errors.phoneOrZalo);
  assert.ok(invalidResult.errors.message);

  const validResult = validateQuoteForm(
    {
      fullName: 'Nguyễn Văn An',
      company: 'Cảng Quốc Tế Cái Mép',
      role: 'Trưởng phòng Kỹ thuật',
      email: 'an.nguyen@port.vn',
      phoneOrZalo: '0901331808',
      country: 'VN',
      need: 'upgrade',
      equipmentAndBrand: 'RTG Kalmar / Siemens PLC',
      message: 'Cần khảo sát và báo giá gói nâng cấp PLC và biến tần cho 04 cẩu RTG.',
    },
    'vi'
  );
  assert.equal(validResult.valid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});
