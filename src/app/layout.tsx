import type {
    Viewport,
    Metadata
} from 'next'

import { rootUrl } from '@PeachCodeData'

import { Header } from '@components/header'
import { Footer } from '@components/footer'

import { NotoSans } from './fonts'

import './globals.css'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#001920'
}
export const metadata: Metadata = {
    title: 'PeachCode',
    description: 'PeachCode ...',
    metadataBase: new URL(rootUrl),
    openGraph: {
        siteName: 'PeachCode',
        type: 'website',
        locale: 'pt_BR',
    },
    twitter: {
        card: 'summary_large_image',
        creator: '@NyctibiusVII',
        site: '@NyctibiusVII'
    },
    robots: {
        index: false // Default
    },
    applicationName: 'PeachCode',
    appleWebApp: {
        title: 'PeachCode',
        statusBarStyle: 'default',
        capable: true
    },
    /* verification: {
        google: 'OjYiqlxK6******',
        yandex: '94b9dc01e******',
        other: {
            'msvalidate.01': '9AD4802CE3C4******',
            // 'facebook-domain-verification': '__DATA__'
        }
    },*/
    icons: {
        icon: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            },
            {
                url: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            },
            {
                url: '/favicon-96x96.png',
                sizes: '96x96',
                type: 'image/png'
            },
            {
                url: '/favicon-192x192.png',
                sizes: '192x192',
                type: 'image/png'
            }
        ],
        shortcut: [
            {
                url: '/favicon.ico',
                type: 'image/x-icon'
            }
        ],
        apple: [
            {
                url: '/apple-icon-57x57.png',
                sizes: '57x57',
                type: 'image/png'
            },
            {
                url: '/apple-icon-60x60.png',
                sizes: '60x60',
                type: 'image/png'
            },
            {
                url: '/apple-icon-72x72.png',
                sizes: '72x72',
                type: 'image/png'
            },
            {
                url: '/apple-icon-76x76.png',
                sizes: '76x76',
                type: 'image/png'
            },
            {
                url: '/apple-icon-114x114.png',
                sizes: '114x114',
                type: 'image/png'
            },
            {
                url: '/apple-icon-120x120.png',
                sizes: '120x120',
                type: 'image/png'
            },
            {
                url: '/apple-icon-144x144.png',
                sizes: '144x144',
                type: 'image/png'
            },
            {
                url: '/apple-icon-152x152.png',
                sizes: '152x152',
                type: 'image/png'
            },
            {
                url: '/apple-icon-180x180.png',
                sizes: '180x180',
                type: 'image/png'
            }
        ]
    }
}

const ENVIRONMENT = process.env.ENVIRONMENT || 'product'
const suppressHydrationWarning = ENVIRONMENT === 'product' ? false : true

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang='pt-BR'>
            <body className={NotoSans.className} suppressHydrationWarning={suppressHydrationWarning}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
