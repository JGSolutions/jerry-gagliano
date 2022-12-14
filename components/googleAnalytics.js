import Script from 'next/script';

export default function GoogleAnalytics() {
    const env = process.env.NODE_ENV;
    if (env === "production") {
        return (
            <>    
                <Script
                strategy="afterInteractive"
                id="google-tag-manager"
                src={`https://www.googletagmanager.com/gtag/js?id=G-QHH9Y9MLFZ`}
                />

                <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'UA-12458158-1', {
                        page_path: window.location.pathname,
                    });
                    `,
                }}
                />
            </>
        );
    }

    return null;
}