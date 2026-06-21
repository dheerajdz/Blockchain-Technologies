'use client';

import Link from 'next/link';

const footerLinks = {
  company: [
    { label: 'About', href: '#about' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ],
  services: [
    { label: 'Smart Contracts', href: '#services' },
    { label: 'DApp Development', href: '#services' },
    { label: 'Web3 Solutions', href: '#services' },
    { label: 'Consulting', href: '#services' },
  ],
  products: [
    { label: 'XDCScan', href: '#' },
    { label: 'OpenScan AI', href: '#' },
    { label: 'GCX Platform', href: '#' },
    { label: 'XDCGram', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/[0.06]"
    >
      <div className="container py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-[#2DD4BF] flex items-center justify-center"
              >
                <span className="text-[#0A0A0A] font-bold text-sm"
                >B</span>
              </div>
              <span className="font-heading font-semibold text-white text-lg"
              >
                BlocksScan
              </span>
            </Link>
            <p className="text-[#71717A] text-sm leading-relaxed max-w-sm mb-6"
            >
              Building immersive blockchain experiences that transform how the world
              interacts with decentralized technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-3"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-[#2DD4BF] hover:border-[#2DD4BF]/30 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4"
            >Company</h4>
            <ul className="space-y-3"
            >
              {footerLinks.company.map((link) => (
                <li key={link.label}
                >
                  <a href={link.href} className="text-[#71717A] text-sm hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4"
            >Services</h4>
            <ul className="space-y-3"
            >
              {footerLinks.services.map((link) => (
                <li key={link.label}
                >
                  <a href={link.href} className="text-[#71717A] text-sm hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4"
            >Products</h4>
            <ul className="space-y-3"
            >
              {footerLinks.products.map((link) => (
                <li key={link.label}
                >
                  <a href={link.href} className="text-[#71717A] text-sm hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-[#71717A] text-sm"
          >
            © {new Date().getFullYear()} BlocksScan Technologies. All rights reserved.
          </p>
          <div className="flex gap-6"
          >
            <a href="#" className="text-[#71717A] text-sm hover:text-[#2DD4BF] transition-colors"
            >
              Privacy Policy
            </a>
            <a href="#" className="text-[#71717A] text-sm hover:text-[#2DD4BF] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
