import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { LaptopMinimal, Smartphone, CloudCog, Palette, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
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
];

export default function ServicesPage() {
  return (
    <Container>
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Our Services</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          We offer a comprehensive suite of digital services designed to empower your business and deliver outstanding results.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={service.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <Card className="h-full flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-border hover:border-primary">
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
    </Container>
  );
}
