import '../styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'
import * as fbq from '../lib/fbpixel'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({Component, pageProps}) {
    const router = useRouter()

    useEffect(() => {
        fbq.pageview()

        const handleRouteChange = (url) => {
            fbq.pageview()
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <>
        <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', ${fbq.FB_PIXEL_ID});
                `
            }}
        />
        <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
        <Script
            strategy="lazyOnload"
            id={'ga'}
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `
            }}
        />
        <Head>
            <title>Casa Campestre Arrayanes</title>
            <meta name="facebook-domain-verification" content="rmob2k0z5aobo45dat0cydf12zxfnj" />
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
