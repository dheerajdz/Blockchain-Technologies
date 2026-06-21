import localFont from 'next/font/local'

export const roobert = localFont({
  src: [
    { path: '../public/fonts/Roobert-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/Roobert-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Roobert-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Roobert-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-roobert',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})
