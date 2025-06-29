
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/container';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'project-alpha',
    title: 'Enterprise CRM Platform',
    description: 'A comprehensive CRM solution designed for large-scale sales teams, improving efficiency and customer engagement.',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEhvwrQstQum2yQkqbfNrlWG6afChRuoM_QGyJ2tEljDxOTou2O-qkSHK8D651UBMi1Rh3_wm0XODOqENVJ2XqZ6Qy5AxmwY72JBXQpbx1Z9-3JtL7AUjIZNQAUw7T2MKLOl2NGG1_jSUwMCLrRin5ytL2rQE44v37ocV2qM8cihibIaf-djE_CsF_HN5_SF',
    dataAiHint: 'office collaboration',
    category: 'Web Application',
  },
  {
    id: 'project-beta',
    title: 'E-commerce Mobile App',
    description: 'A sleek and user-friendly mobile app for a fashion retailer, boosting sales and brand loyalty.',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEghDcCYCH3_5VDVRRv9lCB4EIZ_9bkQuZcx-yfrGchrRSt9C4liEVXijYIm4aZxnlWPWEBWaRYMS_8xUed1OI97IC37kXd4OKIgrdzH8K_Qn1Boq2IHApbtJijADWuhVqgPqfJCrRkCdLG78TwbrA12rJrVKscJaUEZ8aw8wTRDq-uPrnRObEac7YOuTJdA',
    dataAiHint: 'mobile app shopping',
    category: 'Mobile App',
  },
  {
    id: 'project-gamma',
    title: 'Cloud Migration for Fintech',
    description: 'Successfully migrated a legacy financial system to a modern cloud infrastructure, enhancing security and scalability.',
    imageUrl: 'https://blogger.googleusercontent.com/img/a/AVvXsEjVzzfUo8-gx_0YFCIn21--kQ8T0rVFmgEj8q_UdQGtBnwUG5sMyd_NepFMT1kav0j6_qm6jO5x3bpWSZPeSbb5W5yOY4p4EYVV5kN6k78v3kiJgZPUy6sCZsPHqmQF-1MoXiVxXXxVEoglqlKdfDJc03VaMGi8rs62xi-gjE0HQledJU4LHAZBkpTjzgV3',
    dataAiHint: 'cloud security',
    category: 'Cloud & DevOps',
  },
  {
    id: 'project-delta',
    title: 'Healthcare UX Overhaul',
    description: 'Redesigned the user experience for a patient portal, making it more accessible and easier to navigate.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical interface',
    category: 'UI/UX Design',
  },
  {
    id: 'project-epsilon',
    title: 'SaaS Analytics Dashboard',
    description: 'Developed a powerful analytics dashboard for a SaaS product, providing valuable insights to users.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'charts graphs',
    category: 'Web Application',
  },
  {
    id: 'project-zeta',
    title: 'IoT Management Platform',
    description: 'Built a platform for managing and monitoring IoT devices across various industries.',
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'iot devices',
    category: 'Cloud & DevOps',
  },
];

export default function PortfolioPage() {
  return (
    <Container>
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Our Portfolio</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          Explore a selection of our finest projects, showcasing our expertise and commitment to delivering excellence.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
            <Link href={`/portfolio/${project.id}`} className="block h-full">
                <Card className="h-full flex flex-col group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-border hover:border-primary">
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{objectFit: 'cover'}}
                      className="group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={project.dataAiHint}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">{project.category}</Badge>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-foreground/70 line-clamp-3">{project.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm text-accent font-medium group-hover:underline flex items-center">
                      View Case Study <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
            </Link>
          </div>
        ))}
      </section>
    </Container>
  );
}
