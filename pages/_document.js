import { Html, Head, Main, NextScript } from 'next/document'

function MyDocument() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>
                <meta name="theme-color" content="#121111" />
            </Head>
            <body>
                <Main />
                <NextScript />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    `,
                    }}
                    />
            </body>
        </Html>
    )
}

export default MyDocument