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
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://cdn.jsdelivr.net" />
          <link rel="preconnect" href="https://s.googleapis.com" />
          <link rel="preconnect" href="https://s.gstatic.com" crossOrigin="" />
          <link href="https://s.googleapis.com/css2?family=Snowburst+One&display=swap" rel="stylesheet" />
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