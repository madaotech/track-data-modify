export function getSiteURL(): string {
  let url =
    import.meta.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    import.meta.env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`;
  // Make sure to include a trailing `/`.
  url = url.endsWith('/') ? url : `${url}/`;
  return url;
}