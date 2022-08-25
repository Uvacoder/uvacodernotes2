export default {
  github: 'https://github.com/uvacoder',
  docsRepositoryBase: 'https://github.com/uvacoder/abc-notesndocs/blob/master',
  titleSuffix: ' - abc-notesndocs',
  logo: (
    <>
      <span className="hidden mr-2 font-extrabold md:inline">DOCS</span>
      <span className="hidden font-normal text-gray-600 md:inline">
        uvacoder Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="uvacoder's documentation about practices on development"
      />
      <meta
        name="og:description"
        content="Theodorus Clarence’s documentation about practices on development"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.thcl.dev/og.jpg" />
      <meta name="twitter:site:domain" content="docs.thcl.dev" />
      <meta name="twitter:url" content="https://docs.thcl.dev/" />
      <meta name="og:title" content="Docs - theodorusclarence" />
      <meta name="og:image" content="https://docs.thcl.dev/og.jpg" />
      <meta
        name="apple-mobile-web-app-title"
        content="Docs - theodorusclarence"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <script
        async
        defer
        data-website-id="a1ad7cb6-4189-4930-aa8e-34a0fef859a8"
        src="https://umami.thcl.dev/umami.js"
        data-domains="docs.thcl.dev"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: (
    <>
      © {new Date().getFullYear()}{' '}
      <a
        href="https://github.com/uvacoder/abc-notendocs?ref=docs"
        target="_blank"
        rel="noopener"
      >
        uvacoder
      </a>
      .
    </>
  ),
  unstable_faviconGlyph: '👋',
}
