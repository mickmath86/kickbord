import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="scroll-smooth">
      <Head />
      <body>
         {/* GTM Body Tag */}
      <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PRB6G2C"
        height="0" width="0" style="display:none;visibility:hidden"/>`,
        }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}