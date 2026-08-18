import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head />
      <body className="bg-[#06080D] font-sans text-slate-300 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}