import type { CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export const categoryLabels: Record<string, string> = {
  'product-updates': 'Product updates',
  'industry-insights': 'Industry insights',
  'how-to-guides': 'How-to guides',
  'security-compliance': 'Security & compliance',
  'customer-stories': 'Customer stories',
};

export function blogSlug(entry: BlogEntry): string {
  return entry.id.replace(/^(en|fr|sw)\//, '').replace(/\.md$/, '');
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function articlePath(entry: BlogEntry, locale: 'en' | 'fr' | 'sw' = entry.data.locale): string {
  const prefix = locale === 'fr' ? '/fr/blogue' : locale === 'sw' ? '/sw/blogu' : '/en/blog';
  return `${prefix}/${blogSlug(entry)}/`;
}

const translatedSlugs: Record<string, Partial<Record<'fr' | 'sw', string>>> = {
  'beyond-spreadsheets-cloud-erp': { fr: 'au-dela-des-feuilles-de-calcul', sw: 'kupita-majarida-ya-hesabu' },
  'choose-east-african-erp': { fr: 'choisir-un-erp-est-africain', sw: 'jinsi-ya-kuchagua-erp' },
  'mobile-money-meets-erp': { fr: 'mobile-money-et-erp', sw: 'pesa-ya-simu-na-erp' },
  'multi-branch-without-chaos': { fr: 'operations-multi-sites', sw: 'biashara-za-matawi-mengi' },
  'ifrs-for-smes-practice': { fr: 'ifrs-pour-pme-pratique', sw: 'ifrs-kwa-sme-vitendo' },
};

export function blogAlternateUrls(entry: BlogEntry): Record<'en' | 'fr' | 'sw', string> {
  const slug = blogSlug(entry);
  const canonicalSlug = Object.entries(translatedSlugs).find(([, translations]) => Object.values(translations).includes(slug))?.[0] ?? slug;
  return {
    en: `/en/blog/${canonicalSlug}/`,
    fr: `/fr/blogue/${translatedSlugs[canonicalSlug]?.fr ?? canonicalSlug}/`,
    sw: `/sw/blogu/${translatedSlugs[canonicalSlug]?.sw ?? canonicalSlug}/`,
  };
}

export function sortPosts(entries: BlogEntry[]): BlogEntry[] {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
