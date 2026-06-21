import { Geist } from 'next/font/google'

// NOTE: Roobert is a commercial font by Displaay Type Foundry.
// To use Roobert, purchase and place the font files in public/fonts/:
// - Roobert-Regular.woff2
// - Roobert-Medium.woff2
// - Roobert-SemiBold.woff2
// - Roobert-Bold.woff2
//
// Until then, we use Geist as the primary font (closest free alternative).

export const roobert = Geist({
  variable: '--font-roobert',
  subsets: ['latin'],
  display: 'swap',
})
