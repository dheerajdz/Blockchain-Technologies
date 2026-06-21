import localFont from 'next/font/local'

// NOTE: Using Roobert TRIAL files for dev/preview only.
// Replace with fully licensed files from displaay.net before production deploy.
export const roobert = localFont({
  src: [
    {
      path: '../../public/fonts/roobert/Roobert-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/roobert/Roobert-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/roobert/Roobert-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/roobert/Roobert-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/roobert/Roobert-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-primary',
  display: 'swap',
})

export const activeFont = roobert

/*
-------------------------------------------------------
Geist Fallback (Keep Existing Block Intact)
-------------------------------------------------------
Do not delete.
Retain as a documented fallback option.
*/
