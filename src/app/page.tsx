import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-primary/10 via-background to-background p-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          {/* Subtle background pattern or elements if desired */}
        </div>
        <div className="relative z-10 animate-fade-in-up">
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block">WBMCZ</span>
            <span className="block text-primary">Digital Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Crafting Scalable Digital Solutions
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
         {/* Decorative shapes */}
         <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full opacity-50 animate-pulse blur-2xl"></div>
         <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full opacity-50 animate-pulse blur-2xl animation-delay-2000"></div>
      </section>

      {/* Placeholder for other sections like featured services or portfolio highlights */}
      {/* Example:
      <section className="py-16 bg-secondary">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Services</h2>
          { ... }
        </Container>
      </section>
      */}
    </>
  );
}

// Add animation delay utility if needed or manage through inline styles/JS
// For Tailwind CSS JIT, custom animation delays can be added in tailwind.config.js
// e.g., animationDelay: { '2000': '2000ms', ... }
// Or simply apply via style attribute for simplicity here:
// style={{ animationDelay: '2s' }}
