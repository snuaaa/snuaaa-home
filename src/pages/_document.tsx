// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Seoul National University Amateur Astronomy Association Homepage" />
          <meta name="theme-color" content="#142e50" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link href="https://fonts.googleapis.com/css2?family=Snowburst+One&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://s.googleapis.com" />
          <link rel="preconnect" href="https://s.gstatic.com" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;