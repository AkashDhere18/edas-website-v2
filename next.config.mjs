/** @type {import('next').NextConfig} */
const OLD_PAGES = {
  '/index.html': '/',
  '/about.html': '/about',
  '/advisory.html': '/advisory',
  '/construction.html': '/construction',
  '/the-edas-promise.html': '/the-edas-promise',
  '/careers.html': '/careers',
  '/contact.html': '/contact',
};

const nextConfig = {
  // Old ".html" links (from the static version of the site) keep working.
  async redirects() {
    return Object.entries(OLD_PAGES).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
