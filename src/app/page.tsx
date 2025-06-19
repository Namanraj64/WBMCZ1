import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight, LaptopMinimal, Smartphone, Palette, Layers, Briefcase } from 'lucide-react';

const featuredServices = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications tailored to your business.',
    icon: LaptopMinimal,
    href: '/services#web-dev',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
    hoverBgColor: 'hover:bg-primary',
    hoverTextColor: 'hover:text-primary-foreground'
  },
  {
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile experiences for iOS and Android.',
    icon: Smartphone,
    href: '/services#mobile-dev',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
    hoverBgColor: 'hover:bg-accent',
    hoverTextColor: 'hover:text-accent-foreground'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that are both beautiful and highly functional.',
    icon: Palette,
    href: '/services#ui-ux',
    bgColor: 'bg-secondary/50', // A different shade for variety
    textColor: 'text-secondary-foreground', // Ensure contrast
    hoverBgColor: 'hover:bg-secondary',
    hoverTextColor: 'hover:text-secondary-foreground/80'
  },
];

const portfolioHighlights = [
  {
    id: 'project-alpha',
    title: 'Enterprise CRM Platform',
    category: 'Web Application',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'dashboard interface',
    description: 'A comprehensive CRM solution improving efficiency.',
  },
  {
    id: 'project-beta',
    title: 'E-commerce Mobile App',
    category: 'Mobile App',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'mobile app shopping',
    description: 'Sleek mobile app boosting sales and brand loyalty.',
  },
];

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

      {/* Featured Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We provide a wide range of digital services to help your business grow and succeed in the modern world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="h-full group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center">
                    <div className={`p-4 rounded-full ${service.bgColor} ${service.textColor} group-hover:bg-opacity-100 ${service.hoverBgColor} ${service.hoverTextColor} transition-colors duration-300 mb-4`}>
                      <service.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    <Button variant="outline" asChild className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors duration-300">
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Work Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <Container>
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Take a look at some of our successful projects that showcase our skills and dedication.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioHighlights.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${(featuredServices.length + index) * 0.15}s` }}>
                 <Link href={`/portfolio/${project.id}`} legacyBehavior>
                    <a className="block h-full">
                        <Card className="h-full group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-border hover:border-primary">
                        <div className="relative w-full h-64 overflow-hidden">
                            <Image
                            src={project.imageUrl}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={project.dataAiHint}
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                            <CardDescription className="text-sm text-muted-foreground">{project.category}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/70 line-clamp-2">{project.description}</p>
                        </CardContent>
                        <CardFooter>
                            <span className="text-sm text-accent font-medium group-hover:underline flex items-center">
                                View Project <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </CardFooter>
                        </Card>
                    </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: `${(featuredServices.length + portfolioHighlights.length) * 0.15}s` }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-md transform hover:scale-105">
              <Link href="/portfolio">
                Explore Full Portfolio
                <Briefcase className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
