
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, Lightbulb, Settings, Users, BarChart3, ArrowRight, Phone, Mail, LaptopMinimal, Smartphone, CloudCog, Palette, Zap, TrendingUp, Target as TargetIconLucide, FileText, LifeBuoy, Code, Layers, Search as SearchIcon, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { LucideIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  mainIcon: LucideIcon;
  heroImage: string;
  heroImageAiHint: string;
  detailedDescription: string[];
  keyBenefits: { title: string; description: string; icon: LucideIcon }[];
  relatedCaseStudies?: { id: string; title: string; imageUrl: string; dataAiHint: string; category: string; description: string; }[];
}

const serviceData: { [key: string]: ServiceDetail } = {
  'web-dev': {
    id: 'web-dev',
    title: 'Web Application Development',
    tagline: 'Building robust, scalable, and high-performance web solutions that drive business growth.',
    mainIcon: LaptopMinimal,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'modern web app',
    detailedDescription: [
      "Our web application development services focus on creating custom solutions that perfectly align with your unique business requirements. We leverage the latest technologies and agile methodologies to deliver web apps that are not only visually appealing but also highly functional, secure, and scalable.",
      "From complex enterprise platforms and e-commerce sites to innovative SaaS products, our team has the expertise to bring your vision to life. We ensure a seamless user experience, responsive design, and robust backend architecture."
    ],
    keyBenefits: [
      { title: 'Custom Solutions', description: 'Tailored web applications designed to meet your specific business challenges and goals.', icon: Settings },
      { title: 'Scalable Architecture', description: 'Built with future growth in mind, ensuring your application can handle increasing loads.', icon: BarChart3 },
      { title: 'User-Centric Design', description: 'Intuitive and engaging interfaces that provide an exceptional user experience.', icon: Users },
      { title: 'Latest Technologies', description: 'Utilizing modern frameworks for optimal performance, security, and maintainability.', icon: Code }
    ],
    relatedCaseStudies: [
      { id: 'project-alpha', title: 'Enterprise CRM Platform', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'dashboard interface', category: 'Web Application', description: 'A comprehensive CRM solution improving efficiency.' },
      { id: 'project-epsilon', title: 'SaaS Analytics Dashboard', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'charts graphs', category: 'Web Application', description: 'Developed a powerful analytics dashboard for a SaaS product.' }
    ]
  },
  'mobile-dev': {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    tagline: 'Creating intuitive and engaging mobile experiences for iOS and Android platforms.',
    mainIcon: Smartphone,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'mobile app interface',
    detailedDescription: [
      "We specialize in developing high-quality mobile applications for both iOS and Android. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, our team delivers.",
      "Our process covers everything from initial concept and UI/UX design to development, testing, and App Store deployment. We focus on creating apps that are not just functional but also provide a delightful user experience."
    ],
    keyBenefits: [
      { title: 'Native & Cross-Platform', description: 'Expertise in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) development.', icon: Layers },
      { title: 'Engaging UX/UI', description: 'Designing beautiful and intuitive interfaces that enhance user engagement and retention.', icon: Palette },
      { title: 'Performance Focused', description: 'Optimized for speed, responsiveness, and efficient resource usage on mobile devices.', icon: Zap },
      { title: 'App Store Submission', description: 'Guidance and support through the entire app store submission and approval process.', icon: CheckCircle }
    ],
    relatedCaseStudies: [
       { id: 'project-beta', title: 'E-commerce Mobile App', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'mobile app shopping', category: 'Mobile App', description: 'Sleek mobile app boosting sales and brand loyalty.' },
    ]
  },
  'cloud-devops': {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Solutions',
    tagline: 'Optimizing your infrastructure and development lifecycle with modern cloud and DevOps practices.',
    mainIcon: CloudCog,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'cloud infrastructure',
    detailedDescription: [
        "Embrace the power of the cloud with our comprehensive Cloud & DevOps solutions. We help businesses migrate, manage, and optimize their cloud infrastructure for enhanced scalability, reliability, and cost-efficiency.",
        "Our DevOps practices streamline your development pipeline through automation, continuous integration/continuous deployment (CI/CD), and infrastructure as code (IaC), leading to faster release cycles and improved software quality."
    ],
    keyBenefits: [
        { title: 'Cloud Migration', description: 'Seamlessly migrate your applications and data to leading cloud platforms like AWS, Azure, or GCP.', icon: CloudCog },
        { title: 'CI/CD Automation', description: 'Implement robust CI/CD pipelines to automate builds, testing, and deployments.', icon: Settings },
        { title: 'Infrastructure as Code', description: 'Manage and provision infrastructure programmatically for consistency and repeatability.', icon: Code },
        { title: 'Scalability & Reliability', description: 'Design resilient and scalable cloud architectures that adapt to your business needs.', icon: TrendingUp }
    ],
    relatedCaseStudies: [
        { id: 'project-gamma', title: 'Cloud Migration for Fintech', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'cloud security', category: 'Cloud & DevOps', description: 'Successfully migrated a legacy financial system to a modern cloud infrastructure.'},
        { id: 'project-zeta', title: 'IoT Management Platform', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'iot devices', category: 'Cloud & DevOps', description: 'Built a platform for managing and monitoring IoT devices.'}
    ]
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tagline: 'Crafting user-centric designs that are both visually appealing and highly functional.',
    mainIcon: Palette,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'design process',
    detailedDescription: [
        "Good design is at the heart of every successful digital product. Our UI/UX design services focus on creating interfaces that are not only aesthetically pleasing but also intuitive, accessible, and enjoyable to use.",
        "We follow a user-centered design process, starting with thorough research and user personas, moving through wireframing and prototyping, and culminating in high-fidelity designs and usability testing."
    ],
    keyBenefits: [
        { title: 'User Research', description: 'Deep understanding of your target audience through personas, journey mapping, and user interviews.', icon: SearchIcon },
        { title: 'Intuitive Interfaces', description: 'Designing easy-to-navigate and visually appealing user interfaces that drive engagement.', icon: Lightbulb },
        { title: 'Prototyping & Testing', description: 'Creating interactive prototypes to validate design concepts and gather user feedback early.', icon: Users },
        { title: 'Accessibility Focus', description: 'Ensuring your digital products are usable by people of all abilities (WCAG compliance).', icon: CheckCircle }
    ],
     relatedCaseStudies: [
        { id: 'project-delta', title: 'Healthcare UX Overhaul', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'medical interface', category: 'UI/UX Design', description: 'Redesigned the user experience for a patient portal.'},
    ]
  },
   'performance-opt': {
    id: 'performance-opt',
    title: 'Performance Optimization',
    tagline: 'Enhancing the speed, scalability, and reliability of your digital assets for a superior user experience.',
    mainIcon: Zap,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'fast loading speed',
    detailedDescription: [
      "In today's fast-paced digital world, performance is paramount. Our performance optimization services ensure your websites and applications are fast, responsive, and can handle traffic spikes, leading to improved user satisfaction, better conversion rates, and higher search engine rankings.",
      "We conduct thorough audits to identify bottlenecks, optimize code, fine-tune databases, implement effective caching strategies, and configure load balancing for maximum efficiency and reliability."
    ],
    keyBenefits: [
      { title: 'Faster Load Times', description: 'Significantly improve page load speeds for better user experience and SEO.', icon: Zap },
      { title: 'Improved Scalability', description: 'Ensure your applications can handle growth and peak loads without performance degradation.', icon: BarChart3 },
      { title: 'Enhanced Reliability', description: 'Increase uptime and stability through optimized architecture and resource management.', icon: ShieldCheck },
      { title: 'Code & Database Tuning', description: 'Refactor inefficient code and optimize database queries for peak performance.', icon: Code }
    ]
  },
  'digital-strategy': {
    id: 'digital-strategy',
    title: 'Digital Strategy & Consulting',
    tagline: 'Providing expert guidance to navigate the digital landscape and achieve your business objectives.',
    mainIcon: TrendingUp,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'business strategy meeting',
    detailedDescription: [
      "Navigate the complexities of the digital world with a clear roadmap. Our digital strategy and consulting services help you define your objectives, understand your market, and leverage technology to gain a competitive edge.",
      "We work closely with you to develop comprehensive digital strategies that encompass market analysis, technology roadmapping, agile transformation, and product management, ensuring your investments deliver measurable results."
    ],
    keyBenefits: [
      { title: 'Strategic Roadmapping', description: 'Developing clear, actionable digital transformation plans aligned with your business goals.', icon: Lightbulb },
      { title: 'Market & Competitive Analysis', description: 'Gaining insights into market trends and your competitive landscape to inform strategy.', icon: SearchIcon },
      { title: 'Technology Consultation', description: 'Advising on the optimal technology stack and architectural choices for your projects.', icon: Settings },
      { title: 'Agile Transformation', description: 'Guiding your organization in adopting agile methodologies for increased efficiency and adaptability.', icon: Users }
    ]
  },
  'seo-marketing': {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    tagline: 'Boost your online visibility, attract your target audience, and drive conversions with our data-driven strategies.',
    mainIcon: TargetIconLucide,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'digital marketing analytics',
    detailedDescription: [
      "Maximize your online presence and connect with your ideal customers through our comprehensive SEO and digital marketing services. We craft tailored strategies to improve search engine rankings, increase organic traffic, and enhance your brand's digital footprint.",
      "Our expertise spans keyword research, on-page and off-page SEO, technical SEO, content marketing, PPC campaign management, and social media marketing, all designed to deliver measurable ROI."
    ],
    keyBenefits: [
      { title: 'Increased Organic Traffic', description: 'Improve search engine rankings for relevant keywords to attract more qualified visitors.', icon: TrendingUp },
      { title: 'Targeted Audience Reach', description: 'Precisely target your desired customer segments through strategic campaigns.', icon: Users },
      { title: 'Data-Driven Campaigns', description: 'Utilize analytics and data to optimize campaigns for maximum effectiveness and ROI.', icon: BarChart3 },
      { title: 'Comprehensive SEO', description: 'Covering all aspects of SEO from technical audits to content optimization and link building.', icon: SearchIcon }
    ]
  },
  'content-creation': {
    id: 'content-creation',
    title: 'Content Creation & Strategy',
    tagline: 'Engage your audience and build brand authority with high-quality, compelling, and strategic content.',
    mainIcon: FileText,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'writing content creation',
    detailedDescription: [
      "Content is king in the digital realm. Our content creation and strategy services help you craft compelling narratives that resonate with your target audience, establish your brand as a thought leader, and drive engagement.",
      "We develop comprehensive content strategies and produce a variety of high-quality content, including blog posts, articles, website copy, ad copy, video scripts, and infographics, all aligned with your brand voice and marketing objectives."
    ],
    keyBenefits: [
      { title: 'Strategic Content Planning', description: 'Developing content calendars and strategies aligned with your marketing funnels.', icon: Lightbulb },
      { title: 'High-Quality Writing', description: 'Producing well-researched, engaging, and SEO-friendly written content for various platforms.', icon: FileText },
      { title: 'Brand Voice Consistency', description: 'Ensuring all content aligns with your unique brand identity and messaging.', icon: Users },
      { title: 'Multimedia Content', description: 'Creating engaging visuals, infographics, and video content to diversify your reach.', icon: Palette }
    ]
  },
  'maintenance-support': {
    id: 'maintenance-support',
    title: 'Ongoing Maintenance & Support',
    tagline: 'Ensure your digital assets remain secure, up-to-date, and perform optimally with our reliable support services.',
    mainIcon: LifeBuoy,
    heroImage: 'https://placehold.co/1200x500.png',
    heroImageAiHint: 'technical support team',
    detailedDescription: [
      "Your digital products require ongoing attention to ensure they remain secure, performant, and aligned with evolving business needs. Our maintenance and support services provide peace of mind, keeping your applications and websites running smoothly.",
      "We offer flexible support plans that include regular security audits, software updates and patching, performance monitoring, bug fixes, and dedicated support channels for timely assistance."
    ],
    keyBenefits: [
      { title: 'Proactive Security', description: 'Regular security audits, patching, and monitoring to protect against threats.', icon: ShieldCheck },
      { title: 'Optimal Performance', description: 'Continuous monitoring and optimization to ensure your assets run efficiently.', icon: Zap },
      { title: 'Timely Updates', description: 'Keeping your software, plugins, and platforms up-to-date with the latest versions.', icon: Settings },
      { title: 'Reliable Support', description: 'Access to our expert team for troubleshooting, bug fixes, and technical assistance.', icon: Phone }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((serviceId) => ({
    serviceId,
  }));
}

export default async function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service = serviceData[params.serviceId];

  if (!service) {
    notFound();
  }

  const ServiceMainIcon = service.mainIcon;

  return (
    <div className="animate-fade-in-up">
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="absolute inset-0 opacity-5">
          {/* Optional background pattern */}
        </div>
        <Container className="relative z-10 text-center py-0">
          <div className="mb-6 inline-flex items-center justify-center p-4 bg-primary/20 text-primary rounded-full ring-4 ring-primary/10">
            <ServiceMainIcon size={40} strokeWidth={1.5} />
          </div>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-primary">{service.title}</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
            {service.tagline}
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg shadow-lg transform hover:scale-105">
            <Link href={`/contact?service=${service.id}&title=${encodeURIComponent(service.title)}`}>
              Get a Quote for {service.title} <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </Container>
      </section>

      <Container>
        <div className="my-8">
            <Button asChild variant="outline" size="sm">
            <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Services
            </Link>
            </Button>
        </div>
        
        <section className="mb-12 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg lg:prose-xl max-w-none text-foreground/80 space-y-6 text-left">
              {service.detailedDescription.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {service.keyBenefits && service.keyBenefits.length > 0 && (
          <section className="mb-12 lg:mb-20">
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary">Key Benefits of Our {service.title}</h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {service.keyBenefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <Card key={index} className="group flex flex-col hover:shadow-xl transition-shadow duration-300 border-border hover:border-accent/50 p-1">
                    <CardHeader className="flex flex-row items-start gap-4 pb-3">
                      <div className="flex-shrink-0 p-3 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mt-1">
                        <BenefitIcon size={24} />
                      </div>
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors mt-1">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pt-0">
                      <p className="text-foreground/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>
        )}

        {service.relatedCaseStudies && service.relatedCaseStudies.length > 0 && (
          <section className="mb-12 lg:mb-20">
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary">Related Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.relatedCaseStudies.map(project => (
                <Link key={project.id} href={`/portfolio/${project.id}`} className="block h-full">
                    <Card className="h-full group overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border-border hover:border-primary">
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill={true}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{objectFit: 'cover'}}
                          className="group-hover:scale-105 transition-transform duration-300"
                          data-ai-hint={project.dataAiHint}
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                        <CardContent className="p-0 pt-2">
                           <p className="text-sm text-accent font-medium group-hover:underline flex items-center">
                                View Case Study <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                            </p>
                        </CardContent>
                      </CardHeader>
                    </Card>
                  </Link>
              ))}
            </div>
            <div className="text-center mt-12">
                <Button asChild size="lg" variant="outline">
                    <Link href="/portfolio">Explore All Projects <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
          </section>
        )}

        <section className="bg-primary/5 dark:bg-primary/10 py-16 sm:py-20 rounded-lg">
          <Container className="py-0 text-center max-w-3xl mx-auto">
            <div className="mb-6 inline-flex items-center justify-center p-4 bg-accent/20 text-accent rounded-full ring-4 ring-accent/10">
                <Lightbulb size={32} strokeWidth={1.5}/>
            </div>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Ready to Elevate Your Business with Our {service.title}?
            </h2>
            <p className="text-lg text-foreground/80 mb-10">
              Let's discuss how our {service.title.toLowerCase()} expertise can help you achieve your digital goals. Contact us today for a free consultation and let's build something remarkable together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 py-6 text-lg shadow-lg transform hover:scale-105">
                <Link href={`/contact?service=${service.id}&title=${encodeURIComponent(service.title)}`}>
                    Request Consultation <Mail className="ml-2 h-5 w-5" />
                </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg border-primary/50 hover:bg-primary/5 hover:text-primary">
                <Link href="/contact">
                    General Inquiry <Phone className="ml-2 h-5 w-5" />
                </Link>
                </Button>
            </div>
          </Container>
        </section>
      </Container>
    </div>
  );
}
