import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CalendarDays, Tag, CheckCircle } from 'lucide-react';

// This is a mock function. In a real app, you'd fetch project data based on projectId.
async function getProjectDetails(projectId: string) {
  // Simulate fetching project data
  await new Promise(resolve => setTimeout(resolve, 100)); 
  
  const projectsDb = [
    { id: 'project-alpha', title: 'Enterprise CRM Platform', category: 'Web Application', date: '2023-05-15', client: 'Alpha Corp', imageUrl: 'https://placehold.co/800x500.png', dataAiHint: 'office collaboration', description: 'A detailed case study of the Enterprise CRM Platform, highlighting challenges, solutions, and outcomes. This project involved a complete overhaul of Alpha Corp\'s sales pipeline, integrating custom analytics and third-party services to boost productivity by 30%.', features: ['Custom Dashboard', 'Automated Reporting', 'Sales Funnel Management', 'API Integrations'], technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'] },
    { id: 'project-beta', title: 'E-commerce Mobile App', category: 'Mobile App', date: '2023-08-20', client: 'Beta Fashion', imageUrl: 'https://placehold.co/800x500.png', dataAiHint: 'online shopping app', description: 'Developed a cross-platform mobile application for Beta Fashion, focusing on a seamless user experience and secure payment gateways. The app saw a 50% increase in mobile sales within three months of launch.', features: ['Product Catalog', 'Secure Checkout', 'Push Notifications', 'Order Tracking'], technologies: ['React Native', 'Firebase', 'Stripe SDK'] },
    // Add more project details as needed
  ];

  const project = projectsDb.find(p => p.id === projectId);
  if (!project) {
    // A more robust solution would involve Next.js notFound()
    return { id: projectId, title: 'Project Not Found', description: 'Details for this project are not available.', imageUrl: 'https://placehold.co/800x500.png', dataAiHint: 'error page', category: 'Unknown', date: '', client: '', features: [], technologies: [] };
  }
  return project;
}


export default async function ProjectDetailsPage({ params }: { params: { projectId: string } }) {
  const project = await getProjectDetails(params.projectId);

  if (project.title === 'Project Not Found') {
    return (
      <Container className="text-center">
        <h1 className="font-headline text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg text-foreground/70 mb-8">Sorry, we couldn't find details for the project ID: {params.projectId}.</p>
        <Button asChild variant="outline">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </Container>
    );
  }

  return (
    <Container>
      <div className="mb-8">
        <Button asChild variant="outline" size="sm">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>
        </Button>
      </div>

      <article className="bg-card p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="font-headline text-3xl sm:text-4xl font-extrabold mb-4 text-primary">{project.title}</h1>
        
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center">
            <CalendarDays size={16} className="mr-1.5" /> Published: {new Date(project.date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1.5" /> Category: {project.category}
          </div>
          {project.client && <div className="flex items-center">Client: {project.client}</div>}
        </div>

        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-md overflow-hidden mb-8 shadow-md">
          <Image 
            src={project.imageUrl} 
            alt={project.title} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={project.dataAiHint}
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground/80 mb-8">
          <p>{project.description}</p>
          {/* Add more detailed content here: challenges, solutions, results etc. */}
        </div>

        {project.features && project.features.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {project.features.map(feature => (
                <li key={feature} className="flex items-start">
                  <CheckCircle size={20} className="mr-2 mt-0.5 text-accent flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full">{tech}</span>
              ))}
            </div>
          </section>
        )}
      </article>
    </Container>
  );
}

// Optional: Generate static paths if you have a fixed list of projects
// export async function generateStaticParams() {
//   const projects = [{ id: 'project-alpha' }, { id: 'project-beta' }, /* ... */]; // Replace with actual project IDs
//   return projects.map((project) => ({
//     projectId: project.id,
//   }));
// }
