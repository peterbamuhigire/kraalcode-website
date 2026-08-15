export type Locale = 'en' | 'fr' | 'sw';

type RouteKey =
  | 'home'
  | 'product'
  | 'capabilities'
  | 'capabilities.accounting'
  | 'capabilities.inventory'
  | 'capabilities.sales'
  | 'capabilities.procurement'
  | 'capabilities.manufacturing'
  | 'capabilities.hrPayroll'
  | 'capabilities.projects'
  | 'capabilities.reporting'
  | 'sectors'
  | 'sectors.manufacturing'
  | 'sectors.trading'
  | 'sectors.nonprofits'
  | 'sectors.consultancy'
  | 'sectors.agriculture'
  | 'sectors.retail'
  | 'sectors.hospitality'
  | 'sectors.education'
  | 'why'
  | 'security'
  | 'security.disclosure'
  | 'blog'
  | 'resources'
  | 'workAnywhere'
  | 'contact'
  | 'legal.privacy'
  | 'legal.cookies'
  | 'legal.terms'
  | 'legal.accessibility';

const routes: Record<RouteKey, Partial<Record<Locale, string>>> = {
  home: { en: '/en/', fr: '/fr/', sw: '/sw/' },
  product: { en: '/en/product/', fr: '/fr/produit/', sw: '/sw/bidhaa/' },
  capabilities: { en: '/en/capabilities/', fr: '/fr/capacites/', sw: '/sw/uwezo/' },
  'capabilities.accounting': { en: '/en/capabilities/accounting/', fr: '/fr/capacites/comptabilite/', sw: '/sw/uwezo/hasibu/' },
  'capabilities.inventory': { en: '/en/capabilities/inventory/', fr: '/fr/capacites/inventaire/', sw: '/sw/uwezo/hifadhi/' },
  'capabilities.sales': { en: '/en/capabilities/sales/', fr: '/fr/capacites/ventes/', sw: '/sw/uwezo/mauzo/' },
  'capabilities.procurement': { en: '/en/capabilities/procurement/', fr: '/fr/capacites/achats/', sw: '/sw/uwezo/ununuzi/' },
  'capabilities.manufacturing': { en: '/en/capabilities/manufacturing/', fr: '/fr/capacites/fabrication/', sw: '/sw/uwezo/uzalishaji/' },
  'capabilities.hrPayroll': { en: '/en/capabilities/hr-payroll/', fr: '/fr/capacites/rh-paie/', sw: '/sw/uwezo/ajira-mishahara/' },
  'capabilities.projects': { en: '/en/capabilities/projects/', fr: '/fr/capacites/projets/', sw: '/sw/uwezo/miradi/' },
  'capabilities.reporting': { en: '/en/capabilities/reporting/', fr: '/fr/capacites/rapports/', sw: '/sw/uwezo/ripoti/' },
  sectors: { en: '/en/sectors/', fr: '/fr/secteurs/', sw: '/sw/sekta/' },
  'sectors.manufacturing': { en: '/en/sectors/manufacturing/', fr: '/fr/secteurs/industrie/', sw: '/sw/sekta/viwanda/' },
  'sectors.trading': { en: '/en/sectors/trading/', fr: '/fr/secteurs/commerce/', sw: '/sw/sekta/biashara/' },
  'sectors.nonprofits': { en: '/en/sectors/nonprofits/', fr: '/fr/secteurs/ong/', sw: '/sw/sekta/zisizo-faida/' },
  'sectors.consultancy': { en: '/en/sectors/consultancy/', fr: '/fr/secteurs/conseil/', sw: '/sw/sekta/ushauri/' },
  'sectors.agriculture': { en: '/en/sectors/agriculture/', fr: '/fr/secteurs/agriculture/', sw: '/sw/sekta/kilimo/' },
  'sectors.retail': { en: '/en/sectors/retail/', fr: '/fr/secteurs/detail/', sw: '/sw/sekta/rejareja/' },
  'sectors.hospitality': { en: '/en/sectors/hospitality/', fr: '/fr/secteurs/hotellerie/', sw: '/sw/sekta/utalii/' },
  'sectors.education': { en: '/en/sectors/education/', fr: '/fr/secteurs/education/', sw: '/sw/sekta/elimu/' },
  why: { en: '/en/why/', fr: '/fr/pourquoi/', sw: '/sw/kwa-nini/' },
  security: { en: '/en/security/', fr: '/fr/securite/', sw: '/sw/usalama/' },
  'security.disclosure': { en: '/en/security/disclosure/', fr: '/fr/securite/divulgation/', sw: '/sw/usalama/' },
  blog: { en: '/en/blog/', fr: '/fr/blogue/', sw: '/sw/blogu/' },
  resources: { en: '/en/resources/', fr: '/fr/ressources/', sw: '/sw/' },
  workAnywhere: { en: '/en/work-from-anywhere/', fr: '/fr/travailler-partout/', sw: '/sw/kazi-popote/' },
  contact: { en: '/en/contact/', fr: '/fr/contact/', sw: '/sw/mawasiliano/' },
  'legal.privacy': { en: '/en/legal/privacy/', fr: '/fr/juridique/confidentialite/', sw: '/sw/' },
  'legal.cookies': { en: '/en/legal/cookies/', fr: '/fr/juridique/temoins/', sw: '/sw/' },
  'legal.terms': { en: '/en/legal/terms/', fr: '/fr/juridique/conditions/', sw: '/sw/' },
  'legal.accessibility': { en: '/en/legal/accessibility/', fr: '/fr/juridique/accessibilite/', sw: '/sw/' },
};

const aliases: Record<string, RouteKey> = {
  '/fr/product/': 'product',
  '/fr/capabilities/': 'capabilities',
  '/fr/sectors/': 'sectors',
  '/fr/why/': 'why',
  '/fr/security/': 'security',
  '/fr/resources/': 'resources',
  '/fr/travailler-de-partout/': 'workAnywhere',
  '/fr/juridique/cookies/': 'legal.cookies',
  '/sw/product/': 'product',
  '/sw/capabilities/': 'capabilities',
  '/sw/sectors/': 'sectors',
  '/sw/why/': 'why',
  '/sw/security/': 'security',
  '/sw/contact/': 'contact',
  '/sw/fanya-kazi-popote/': 'workAnywhere',
  '/sw/uwezo/hisa/': 'capabilities.inventory',
  '/sw/uwezo/hr-mishahara/': 'capabilities.hrPayroll',
  '/sw/uwezo/manunuzi/': 'capabilities.procurement',
};

const routeKeysByPath = new Map<string, RouteKey>();

for (const [key, localizedRoutes] of Object.entries(routes) as Array<[RouteKey, Partial<Record<Locale, string>>]>) {
  for (const path of Object.values(localizedRoutes)) {
    if (path) routeKeysByPath.set(path, key);
  }
}

for (const [path, key] of Object.entries(aliases)) {
  routeKeysByPath.set(path, key);
}

function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/)[0] || '/';
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getRouteKey(path: string): RouteKey {
  return routeKeysByPath.get(normalizePath(path)) ?? 'home';
}

export function getLocalizedPath(currentPath: string, targetLocale: Locale): string {
  const normalized = normalizePath(currentPath);
  const blogTranslations: Record<string, { en: string; fr: string; sw: string }> = {
    'beyond-spreadsheets-cloud-erp': { en: 'beyond-spreadsheets-cloud-erp', fr: 'au-dela-des-feuilles-de-calcul', sw: 'kupita-majarida-ya-hesabu' },
    'choose-east-african-erp': { en: 'choose-east-african-erp', fr: 'choisir-un-erp-est-africain', sw: 'jinsi-ya-kuchagua-erp' },
    'mobile-money-meets-erp': { en: 'mobile-money-meets-erp', fr: 'mobile-money-et-erp', sw: 'pesa-ya-simu-na-erp' },
    'multi-branch-without-chaos': { en: 'multi-branch-without-chaos', fr: 'operations-multi-sites', sw: 'biashara-za-matawi-mengi' },
    'ifrs-for-smes-practice': { en: 'ifrs-for-smes-practice', fr: 'ifrs-pour-pme-pratique', sw: 'ifrs-kwa-sme-vitendo' },
  };
  const blogMatch = normalized.match(/^\/(en|fr|sw)\/(?:blog|blogue|blogu)\/([^/]+)\/$/);
  if (blogMatch) {
    const currentSlug = blogMatch[2];
    const translation = Object.values(blogTranslations).find((slugs) => Object.values(slugs).includes(currentSlug));
    if (translation) {
      const prefix = targetLocale === 'fr' ? '/fr/blogue' : targetLocale === 'sw' ? '/sw/blogu' : '/en/blog';
      return `${prefix}/${translation[targetLocale]}/`;
    }
    return routes.blog[targetLocale] ?? routes.home[targetLocale]!;
  }
  if (/^\/(en|fr|sw)\/(?:blog|blogue|blogu)\/(?:\d+|category)\//.test(normalized)) {
    return routes.blog[targetLocale] ?? routes.home[targetLocale]!;
  }
  const key = getRouteKey(currentPath);
  return routes[key][targetLocale] ?? routes.home[targetLocale]!;
}

export function getNavPath(locale: Locale, key: 'product' | 'capabilities' | 'sectors' | 'why' | 'security' | 'blog' | 'resources' | 'contact'): string {
  return routes[key][locale] ?? routes.home[locale]!;
}

export function getLocalizedAlternates(currentPath: string): Record<Locale, string> {
  return {
    en: getLocalizedPath(currentPath, 'en'),
    fr: getLocalizedPath(currentPath, 'fr'),
    sw: getLocalizedPath(currentPath, 'sw'),
  };
}
