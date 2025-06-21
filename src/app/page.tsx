
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { ArrowRight, LaptopMinimal, Smartphone, Palette, Briefcase, Quote, Lightbulb, Users, BarChart3, Code, Cloud, Database, Wind, Terminal, GitBranch, Cpu } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';


const featuredServices = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, high-performance web applications tailored to your business.',
    icon: LaptopMinimal,
    href: '/services/web-dev',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
    hoverBgColor: 'hover:bg-primary',
    hoverTextColor: 'hover:text-primary-foreground'
  },
  {
    title: 'Mobile App Development',
    description: 'Building intuitive and engaging mobile experiences for iOS and Android.',
    icon: Smartphone,
    href: '/services/mobile-dev',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
    hoverBgColor: 'hover:bg-accent',
    hoverTextColor: 'hover:text-accent-foreground'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user-centric interfaces that are both beautiful and highly functional.',
    icon: Palette,
    href: '/services/ui-ux',
    bgColor: 'bg-secondary/50',
    textColor: 'text-secondary-foreground',
    hoverBgColor: 'hover:bg-secondary',
    hoverTextColor: 'hover:text-secondary-foreground/80'
  },
];

const portfolioHighlights = [
  {
    id: 'project-alpha',
    title: 'Enterprise CRM Platform',
    category: 'Web Application',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhvwrQstQum2yQkqbfNrlWG6afChRuoM_QGyJ2tEljDxOTou2O-qkSHK8D651UBMi1Rh3_wm0XODOqENVJ2XqZ6Qy5AxmwY72JBXQpbx1Z9-3JtL7AUjIZNQAUw7T2MKLOl2NGG1_jSUwMCLrRin5ytL2rQE44v37ocV2qM8cihibIaf-djE_CsF_HN5_SF',
    dataAiHint: 'office collaboration',
    description: 'A comprehensive CRM solution improving customer relationship management and sales pipeline efficiency for a major enterprise client.',
  },
  {
    id: 'project-beta',
    title: 'E-commerce Mobile App',
    category: 'Mobile App',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEghDcCYCH3_5VDVRRv9lCB4EIZ_9bkQuZcx-yfrGchrRSt9C4liEVXijYIm4aZxnlWPWEBWaRYMS_8xUed1OI97IC37kXd4OKIgrdzH8K_Qn1Boq2IHApbtJijADWuhVqgPqfJCrRkCdLG78TwbrA12rJrVKscJaUEZ8aw8wTRDq-uPrnRObEac7YOuTJdA',
    dataAiHint: 'mobile app shopping',
    description: 'A sleek, high-performance mobile app that boosted sales by 40% and significantly enhanced brand loyalty for a popular fashion retailer.',
  },
  {
    id: 'project-gamma',
    title: 'Cloud Infrastructure Overhaul',
    category: 'Cloud & DevOps',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEjVzzfUo8-gx_0YFCIn21--kQ8T0rVFmgEj8q_UdQGtBnwUG5sMyd_NepFMT1kav0j6_qm6jO5x3bpWSZPeSbb5W5yOY4p4EYVV5kN6k78v3kiJgZPUy6sCZsPHqmQF-1MoXiVxXXxVEoglqlKdfDJc03VaMGi8rs62xi-gjE0HQledJU4LHAZBkpTjzgV3',
    dataAiHint: 'cloud security',
    description: 'Migrated legacy systems to a scalable, secure cloud architecture, resulting in 99.9% uptime and reduced operational costs.',
  },
];

const whyChooseUsItems = [
  {
    title: 'Innovative Solutions',
    description: 'We go beyond the conventional, leveraging the latest technologies to deliver cutting-edge and future-proof digital products that give you a competitive edge.',
    icon: Lightbulb,
  },
  {
    title: 'Client-Centric Approach',
    description: 'Your success is our priority. We function as an extension of your team, collaborating closely to understand your unique needs and exceed your goals.',
    icon: Users,
  },
  {
    title: 'Results-Driven',
    description: 'We are laser-focused on delivering measurable outcomes. We track key metrics to ensure our work drives growth and provides tangible business value.',
    icon: BarChart3,
  },
];

const technologies = [
  { name: 'React', icon: Code, description: 'Modern UI libraries' },
  { name: 'Next.js', icon: Code, description: 'Full-stack framework' },
  { name: 'Node.js', icon: Code, description: 'Backend runtime' },
  { name: 'TypeScript', icon: Code, description: 'Static typing' },
  { name: 'PostgreSQL', icon: Database, description: 'Relational databases' },
  { name: 'AWS/GCP', icon: Cloud, description: 'Cloud providers' },
  { name: 'Docker', icon: Code, description: 'Containerization' },
  { name: 'Tailwind CSS', icon: Wind, description: 'Utility-first CSS' },
];

const testimonials = [
  {
    id: 't1',
    quote: "WBMCZ transformed our online presence. Their team is professional, creative, and incredibly effective. The results speak for themselves. Highly recommended!",
    name: 'Sarah Miller',
    title: 'CEO, Tech Solutions Inc.',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'person avatar',
  },
  {
    id: 't2',
    quote: "Working with WBMCZ was a game-changer for our marketing efforts. The new website they built is not only beautiful but also incredibly fast and user-friendly, exceeding all our expectations.",
    name: 'John Davis',
    title: 'Marketing Director, Style Co.',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'person avatar',
  },
  {
    id: 't3',
    quote: "The mobile app developed by WBMCZ is fantastic. It's intuitive, fast, and has significantly boosted our user engagement. Their attention to detail is second to none.",
    name: 'Lisa Chen',
    title: 'Product Manager, Innovate App',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'person avatar',
  },
  {
    id: 't4',
    quote: "From strategy to execution, the WBMCZ team was a true partner. Their insights helped us navigate a complex cloud migration with ease. Exceptional service and expertise.",
    name: 'David Wilson',
    title: 'CTO, Fintech Innovations',
    avatarUrl: 'https://placehold.co/100x100.png',
    dataAiHint: 'person avatar',
  },
];

const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer: "Project timelines vary depending on the scope and complexity. A typical small to medium project takes 4-8 weeks, while larger projects can take 3-6 months. We provide a detailed timeline after our initial discovery phase."
  },
  {
    question: "How do you handle project communication and updates?",
    answer: "We believe in transparent and frequent communication. We use tools like Slack for daily check-ins, and provide weekly progress reports. You'll have a dedicated project manager as your main point of contact."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, we offer various ongoing maintenance and support packages to ensure your digital assets remain secure, up-to-date, and perform optimally. We can tailor a plan to fit your specific needs."
  },
  {
    question: "How much does a typical project cost?",
    answer: "Project costs depend on the specific requirements, features, and timeline. We provide a detailed, itemized quote after an initial consultation and discovery session to understand your needs."
  }
];

export default function Home() {
  const initialAnimationDelay = 0.1;
  const heroDelay = 0;
  const servicesStartDelay = heroDelay + 0.2;
  const portfolioStartDelay = servicesStartDelay + (featuredServices.length * initialAnimationDelay);
  const whyChooseUsStartDelay = portfolioStartDelay + (portfolioHighlights.length * initialAnimationDelay);
  const techStartDelay = whyChooseUsStartDelay + (whyChooseUsItems.length * initialAnimationDelay);
  const testimonialsStartDelay = techStartDelay + (technologies.length * initialAnimationDelay);
  const faqStartDelay = testimonialsStartDelay + (testimonials.length * initialAnimationDelay);
  const ctaStartDelay = faqStartDelay + 0.2;

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center bg-gradient-to-br from-primary/10 via-background to-background p-8 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <Code className="absolute top-[20%] left-[10%] h-16 w-16 text-primary animate-float" style={{ animationDuration: '8s' }} />
            <Database className="absolute top-[60%] left-[20%] h-20 w-20 text-accent animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}/>
            <Cloud className="absolute top-[30%] left-[50%] h-24 w-24 text-primary animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }} />
            <Terminal className="absolute top-[15%] right-[15%] h-12 w-12 text-accent animate-float" style={{ animationDuration: '7s', animationDelay: '3s' }} />
            <GitBranch className="absolute bottom-[20%] right-[10%] h-16 w-16 text-primary animate-float" style={{ animationDuration: '9s', animationDelay: '0.5s' }} />
            <Cpu className="absolute bottom-[10%] left-[45%] h-14 w-14 text-accent animate-float" style={{ animationDuration: '11s', animationDelay: '1.5s' }} />
        </div>

        <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: `${heroDelay}s` }}>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="block">WBMCZ</span>
            <span className="block text-primary">Digital Agency</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
            Crafting Scalable, High-Performance Digital Solutions to Elevate Your Brand.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105">
            <Link href="/contact">
              Request a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="bg-background">
        <Container className="py-0">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${servicesStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From complex web applications to stunning mobile experiences, we provide a wide range of digital services to help your business thrive in the modern world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={service.title} className="animate-fade-in-up" style={{ animationDelay: `${servicesStartDelay + (index * initialAnimationDelay)}s` }}>
                <Card className="h-full flex flex-col group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <CardHeader className="items-center text-center">
                    <div className={`p-4 rounded-full ${service.bgColor} ${service.textColor} group-hover:bg-opacity-100 ${service.hoverBgColor} ${service.hoverTextColor} transition-colors duration-300 mb-4`}>
                      <service.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-grow">
                    <p className="text-foreground/70">{service.description}</p>
                  </CardContent>
                  <CardFooter className="justify-center pt-4">
                    <Button variant="outline" asChild className="group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors duration-300">
                      <Link href={service.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Work Section */}
      <section className="bg-secondary/30">
        <Container className="py-0">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${portfolioStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Take a look at some of our successful projects that showcase our skills and dedication to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioHighlights.map((project, index) => (
              <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${portfolioStartDelay + (index * initialAnimationDelay)}s` }}>
                 <Link href={`/portfolio/${project.id}`} className="block h-full group">
                    <Card className="h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-border hover:border-primary">
                    <div className="relative w-full h-64 overflow-hidden">
                        <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={project.dataAiHint}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center">
                            View Project <ArrowRight size={20} className="ml-2" />
                          </span>
                        </div>
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-foreground/70 line-clamp-3">{project.description}</p>
                    </CardContent>
                    </Card>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: `${portfolioStartDelay + (portfolioHighlights.length * initialAnimationDelay)}s` }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-md transform hover:scale-105">
              <Link href="/portfolio">
                Explore Full Portfolio
                <Briefcase className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Partner With WBMCZ? Section */}
      <section className="bg-background">
        <Container className="py-0">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${whyChooseUsStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Why Partner With WBMCZ?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're more than just a digital agency; we're your dedicated partner in innovation and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUsItems.map((item, index) => (
              <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${whyChooseUsStartDelay + (index * initialAnimationDelay)}s` }}>
                <Card className="h-full group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-transparent hover:border-accent/30">
                  <CardContent className="p-6 flex flex-col sm:flex-row items-start text-left gap-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                        <item.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

       {/* Our Technologies Section */}
       <section className="bg-secondary/30">
        <Container className="py-0">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${techStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Technologies We Master
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We use a modern, robust, and scalable tech stack to build world-class digital products.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div key={tech.name} className="animate-fade-in-up" style={{ animationDelay: `${techStartDelay + (index * initialAnimationDelay)}s` }}>
                <Card className="text-center h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <tech.icon className="h-10 w-10 mb-3 text-accent" />
                    <h3 className="font-semibold text-lg mb-1 text-card-foreground">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonials Section */}
      <section className="relative bg-background overflow-hidden">
        <Container className="py-0 relative">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${testimonialsStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We pride ourselves on building strong relationships and delivering impactful results that our clients love.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${testimonialsStartDelay + (index * initialAnimationDelay)}s` }}>
                <Card className="h-full flex flex-col bg-card shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="flex-row items-center gap-4 pb-2">
                     <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        fill
                        sizes="64px"
                        style={{objectFit: 'cover'}}
                        data-ai-hint={testimonial.dataAiHint}
                        />
                    </div>
                    <div>
                        <CardTitle className="text-lg font-semibold">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">{testimonial.title}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-4">
                    <Quote className="w-8 h-8 text-primary/30 mb-2" />
                    <p className="text-foreground/80 italic leading-relaxed">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary/30">
        <Container className="py-0">
          <div className="text-center mb-12 animate-fade-in-up" style={{ animationDelay: `${faqStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions? We've got answers. Here are some of the most common inquiries we receive.
            </p>
          </div>
          <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: `${faqStartDelay + initialAnimationDelay}s` }}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index + 1}`} key={index} className="bg-card border-b px-6 rounded-lg mb-2 shadow-sm hover:shadow-md transition-shadow">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:text-primary hover:no-underline py-5">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-foreground/80 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary/10">
        <Container className="py-0">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: `${ctaStartDelay}s` }}>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Let's discuss how WBMCZ can help you achieve your digital goals. Whether it's a new website, a mobile app, or a comprehensive digital strategy, we're here to bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-lg transform hover:scale-105">
              <Link href="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
