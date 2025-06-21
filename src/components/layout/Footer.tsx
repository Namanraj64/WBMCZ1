import { Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border/40">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Branding Column */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <Link href="/" className="flex items-center space-x-3 mb-4" aria-label="WBMCZ Home">
              <Briefcase className="h-9 w-9 text-primary" />
              <span className="font-headline text-3xl font-bold text-primary">WBMCZ</span>
            </Link>
            <p className="text-secondary-foreground/80 max-w-md">
              Crafting scalable digital solutions for a modern world. We are dedicated to helping businesses thrive through innovative technology.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-headline text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-secondary-foreground/80 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-secondary-foreground/80 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-secondary-foreground/80 hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="text-secondary-foreground/80 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-headline text-foreground">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="/privacy-policy" className="text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-secondary-foreground/80 hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h3 className="text-lg font-semibold mb-5 font-headline text-foreground">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 shrink-0 text-primary" />
                <span className="text-secondary-foreground/80">123 Digital Avenue, Tech City, TX 75001, USA</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="tel:+15551234567" className="hover:text-primary transition-colors text-secondary-foreground/80">(555) 123-4567</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-primary" />
                <a href="mailto:info@wbmcz.com" className="hover:text-primary transition-colors text-secondary-foreground/80">info@wbmcz.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-secondary-foreground/60 pt-8 border-t border-border/40">
          <p>&copy; {currentYear} WBMCZ Digital Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
