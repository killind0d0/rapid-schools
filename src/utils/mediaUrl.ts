/**
 * Resolves media asset URLs dynamically across environments:
 * - GitHub Pages subpath (/rapid-schools/)
 * - Vite local development server (/)
 * - External absolute URLs (https://)
 */
export function getMediaUrl(url: string | undefined): string {
  if (!url) return '';
  if (
    url.startsWith('http://') ||
    url.startsWith('https://') ||
    url.startsWith('data:') ||
    url.startsWith('blob:')
  ) {
    return url;
  }

  // Strip leading '/rapid-schools/' or '/'
  const cleanPath = url.replace(/^\/?(rapid-schools\/)?/, '');
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base : `${base}/`;
  return `${prefix}${cleanPath}`;
}
