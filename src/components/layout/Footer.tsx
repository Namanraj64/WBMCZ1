import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className='md:col-span-2'>
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="WBMCZ Home">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">WBMCZ</span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 max-w-md">
              Crafting Scalable Digital Solutions for a modern world. We are dedicated to helping businesses thrive through innovative technology.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-headline">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-secondary-foreground/60 pt-8 border-t border-border/40">
          <p>&copy; {currentYear} WBMCZ Digital Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
