import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Chatbot UI"></meta>
 <script
            dangerouslySetInnerHTML={{
              __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement('script');
                  hm.src = 'https://hm.baidu.com/hm.js?c25a400806c3079021dab76a2da98c04';
                  var s = document.getElementsByTagName('script')[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              `,
            }}
          />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
