/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// Next.js App Router emits inline bootstrap scripts and inline style
// attributes, so 'unsafe-inline' is required unless a nonce-based CSP is
// wired up through middleware. Dev additionally needs 'unsafe-eval' (HMR)
// and websocket connections; production does not.
const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  isProd
    ? "script-src 'self' 'unsafe-inline'"
    : "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  isProd ? "connect-src 'self'" : "connect-src 'self' ws: wss:",
  "manifest-src 'self'",
  ...(isProd ? ["upgrade-insecure-requests"] : []),
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'X-DNS-Prefetch-Control', value: 'off' },
  // Ignored by browsers over plain HTTP, so it is harmless on localhost.
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not advertise the framework version in every response.
  poweredByHeader: false,
  // This app never uses next/image, so the /_next/image optimizer endpoint is
  // pure unused attack surface. Remove it (set to false if next/image is
  // adopted later).
  images: { unoptimized: true },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
