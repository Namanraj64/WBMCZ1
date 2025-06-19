
import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LaptopMinimal, Smartphone, CloudCog, Palette, Zap, TrendingUp, ShieldCheck, Target, FileText, LifeBuoy, Search, Lightbulb, Rocket, Users, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Application Development',
    description: 'Building responsive, high-performance web applications tailored to your business needs.',
    icon: LaptopMinimal,
    details: ["Custom CRM/ERP Systems", "E-commerce Platforms", "SaaS Product Development", "API Integration"]
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Creating intuitive and engaging mobile experiences for iOS and Android platforms.',
    icon: Smartphone,
    details: ["Native iOS & Android Apps", "Cross-Platform Development (React Native, Flutter)", "App Store Deployment", "Mobile UX/UI Design"]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Solutions',
    description: 'Optimizing your infrastructure and development lifecycle with modern cloud and DevOps practices.',
    icon: CloudCog,
    details: ["Cloud Migration (AWS, Azure, GCP)", "CI/CD Pipeline Implementation", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)"]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Crafting user-centric designs that are both visually appealing and highly functional.',
    icon: Palette,
    details: ["User Research & Persona Development", "Wireframing & Prototyping", "Interaction Design", "Usability Testing"]
  },
  {
    id: 'performance-opt',
    title: 'Performance Optimization',
    description: 'Enhancing the speed, scalability, and reliability of your digital assets.',
    icon: Zap,
    details: ["Code Refactoring", "Database Optimization", "Load Balancing", "Caching Strategies"]
  },
  {
    id: 'digital-strategy',
    title: 'Digital Strategy & Consulting',
    description: 'Providing expert guidance to navigate the digital landscape and achieve your business objectives.',
    icon: TrendingUp,
    details: ["Market Analysis", "Technology Roadmapping", "Agile Transformation", "Product Management"]
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    description: 'Boost your online visibility and reach your target audience with our comprehensive SEO and digital marketing strategies.',
    icon: Target,
    details: ["Keyword Research & Strategy", "On-page & Off-page SEO", "PPC Campaign Management", "Social Media Marketing"]
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Strategy',
    description: 'Engage your audience with high-quality, compelling content tailored to your brand\'s voice and objectives.',
    icon: FileText,
    details: ["Blog Writing & Articles", "Copywriting for Web & Ads", "Video Production & Editing", "Infographic Design"]
  },
  {
    id: 'maintenance-support',
    title: 'Ongoing Maintenance & Support',
    description: 'Ensure your digital assets remain secure, up-to-date, and perform optimally with our reliable support services.',
    icon: LifeBuoy,
    details: ["Regular Security Audits", "Software Updates & Patching", "Performance Monitoring", "Dedicated Support Channels"]
  },
];

const approachSteps = [
  {
    title: "Discovery & Planning",
    description: "We start by thoroughly understanding your goals, audience, and project requirements through in-depth consultations and research.",
    icon: Search,
  },
  {
    title: "Design & Prototyping",
    description: "Our team crafts intuitive user experiences and visually stunning designs, creating interactive prototypes for your feedback.",
    icon: Palette,
  },
  {
    title: "Development & Iteration",
    description: "Using agile methodologies, we build your solution with clean, scalable code, providing regular updates and incorporating your feedback.",
    icon: LaptopMinimal,
  },
  {
    title: "Testing & Launch",
    description: "Rigorous testing ensures quality and performance before a smooth deployment. We then monitor and provide post-launch support.",
    icon: Rocket,
  }
];

export default function ServicesPage() {
  const initialAnimationDelay = 0.1;
  return (
    <Container className="py-8 sm:py-12 lg:py-16"> {/* Adjusted top padding */}
      <section className="text-center mb-12 sm:mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Our Services</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          We offer a comprehensive suite of digital services designed to empower your business and deliver outstanding results.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 sm:mb-20">
        {services.map((service, index) => (
          <div key={service.id} className="animate-fade-in-up" style={{animationDelay: `${index * initialAnimationDelay}s`}}>
            <Card id={service.id} className="h-full flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-border hover:border-primary">
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <service.icon size={32} />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <CardDescription className="text-foreground/70 mb-4 flex-grow">{service.description}</CardDescription>
                <ul className="space-y-2 text-sm text-foreground/60">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <ShieldCheck size={16} className="mr-2 text-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in-up" style={{animationDelay: `${services.length * initialAnimationDelay}s`}}>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary mb-4">
                Our Approach
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We follow a structured and collaborative process to ensure your project's success from conception to launch.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
                <div key={step.title} className="animate-fade-in-up" style={{animationDelay: `${(services.length + index) * initialAnimationDelay}s`}}>
                    <Card className="h-full text-center group hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="items-center">
                            <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-3">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-foreground/70">{step.description}</p>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </div>
      </section>

      <section className="bg-primary/10 py-12 sm:py-16 rounded-lg animate-fade-in-up" style={{animationDelay: `${(services.length + approachSteps.length) * initialAnimationDelay}s`}}>
        <Container className="py-0"> {/* Override default Container padding for this specific section */}
          <div className="text-center max-w-3xl mx-auto">
            <Lightbulb className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Have a project in mind or need expert advice on your digital strategy? Our team is ready to help you navigate the complexities of the digital world and achieve your business goals.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105">
              <Link href="/contact">
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

    </Container>
  );
}
