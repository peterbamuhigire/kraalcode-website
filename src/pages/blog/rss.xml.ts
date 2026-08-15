import { getCollection } from 'astro:content';
import { articlePath, sortPosts } from '../../utils/blog';

function escapeXml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export async function GET() {
  const entries = sortPosts(await getCollection('blog', ({ data }) => data.locale === 'en' && data.published));
  const items = entries.map((entry) => {
    const url = `https://kraalcode.com${articlePath(entry)}`;
    return `<item><title>${escapeXml(entry.data.title)}</title><link>${url}</link><guid>${url}</guid><description>${escapeXml(entry.data.excerpt)}</description><pubDate>${entry.data.date.toUTCString()}</pubDate><dc:creator>${escapeXml(entry.data.author)}</dc:creator></item>`;
  }).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/"><channel><title>Kraal Code Blog</title><link>https://kraalcode.com/en/blog/</link><description>Research-backed guidance for growing African organisations.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
