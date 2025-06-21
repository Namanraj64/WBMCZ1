
import Image from 'next/image';
import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, BarChart3, Briefcase, Award, TrendingUp, Lightbulb, Target as TargetIconLucide, Rocket, Telescope } from 'lucide-react';

// Helper component to represent the target icon, if needed for Our Values
const TargetIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="6"></circle>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

const teamMembers = [
  {
    id: '1',
    name: 'Alice Wonderland',
    role: 'CEO & Founder',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person portrait',
    bio: 'Visionary leader with a passion for innovation and digital transformation.',
  },
  {
    id: '2',
    name: 'Bob The Builder',
    role: 'Lead Developer',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person portrait',
    bio: 'Expert architect of robust and scalable web and mobile applications.',
  },
  {
    id: '3',
    name: 'Carol Designer',
    role: 'Head of UX/UI',
    imageUrl: 'https://placehold.co/200x200.png',
    dataAiHint: 'person portrait',
    bio: 'Creative mind dedicated to crafting intuitive and beautiful user experiences.',
  },
];

const achievements = [
  { year: '2018', title: 'Agency Founded', description: 'WBMCZ was established with a mission to deliver cutting-edge digital solutions.', icon: Briefcase },
  { year: '2020', title: 'First Major Client Acquired', description: 'Landed a landmark project, showcasing our capabilities in complex web development.', icon: Award },
  { year: '2022', title: 'Expanded Service Offerings', description: 'Introduced mobile app development and cloud solutions to meet growing demand.', icon: TrendingUp },
  { year: '2024', title: 'Team Growth to 20+ Experts', description: 'Our team expanded, bringing in diverse talent across all service areas.', icon: Users },
];

const values = [
    {
        title: 'Innovation',
        description: 'We constantly explore new technologies to deliver cutting-edge solutions that drive progress.',
        icon: Lightbulb,
    },
    {
        title: 'Collaboration',
        description: 'We believe in the power of teamwork, working closely with our clients to achieve shared goals and success.',
        icon: Users,
    },
    {
        title: 'Integrity',
        description: 'We operate with transparency and honesty, building trust through every interaction and project.',
        icon: CheckCircle,
    },
     {
        title: 'Excellence',
        description: 'We are committed to delivering the highest quality work, striving for excellence in every detail.',
        icon: Award,
    },
    {
        title: 'Client-Centric',
        description: 'Our clients are at the heart of everything we do. We tailor our solutions to meet their unique needs.',
        icon: TargetIconLucide, // Using the lucide Target icon
    },
    {
        title: 'Results-Driven',
        description: 'Our focus is on delivering measurable results that impact your bottom line and drive growth.',
        icon: BarChart3,
    },
];

export default function AboutPage() {
  const initialDelay = 0.1;
  const missionVisionDelay = 0.2;
  const journeyStartDelay = missionVisionDelay + 0.2;
  const valuesStartDelay = journeyStartDelay + (achievements.length * initialDelay) + 0.2;
  const teamStartDelay = valuesStartDelay + (values.length * initialDelay) + 0.2;

  return (
    <>
      <section className="w-full bg-background">
        <Container className="py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-primary leading-tight">
                Pioneering Digital Excellence
              </h1>
              <p className="text-lg sm:text-xl text-foreground/80 mb-10 max-w-xl">
                We are a passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences that drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 text-left">
                <div className="flex items-center gap-4">
                  <Award className="h-10 w-10 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold text-primary">50+</p>
                    <p className="text-sm text-muted-foreground">Successful Projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-10 w-10 text-accent flex-shrink-0" />
                  <div>
                    <p className="text-3xl font-bold text-primary">20+</p>
                    <p className="text-sm text-muted-foreground">Creative Experts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up hidden md:block" style={{ animationDelay: '0.2s' }}>
              <Image
                src="https://placehold.co/600x500.png"
                alt="A collaborative team working in a modern office"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="team collaboration office"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-secondary/30 animate-fade-in-up" style={{ animationDelay: `${missionVisionDelay}s` }}>
        <Container>
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary">Our Mission & Vision</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="text-center md:text-left p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center md:justify-start items-center mb-4">
                        <Rocket size={32} className="text-accent mr-3" />
                        <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
                    </div>
                    <p className="text-foreground/70">
                        To empower businesses with innovative and scalable digital solutions, fostering growth and driving success through technology and creative expertise.
                    </p>
                </div>
                <div className="text-center md:text-left p-6 rounded-lg border border-border bg-background hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-center md:justify-start items-center mb-4">
                        <Telescope size={32} className="text-accent mr-3" />
                        <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
                    </div>
                    <p className="text-foreground/70">
                        To be a leading digital agency recognized globally for our commitment to excellence, client success, and transformative digital experiences that shape the future.
                    </p>
                </div>
            </div>
        </Container>
      </section>

      <section className="w-full bg-background animate-fade-in-up" style={{ animationDelay: `${journeyStartDelay}s` }}>
        <Container>
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary">Our Journey</h2>
            <div className="relative border-l-2 border-primary/30 ml-6 pl-10 space-y-12">
            {achievements.map((achievement, index) => (
                <div key={achievement.year} className="relative animate-fade-in-up" style={{ animationDelay: `${journeyStartDelay + (index * initialDelay)}s` }}>
                <div className="absolute -left-[3.4rem] top-1 flex items-center justify-center w-12 h-12 bg-primary rounded-full text-primary-foreground font-semibold shadow-md">
                    <achievement.icon size={24} />
                </div>
                <Card className="hover:shadow-xl transition-shadow duration-300 bg-card border border-border hover:border-primary/50">
                    <CardHeader>
                    <CardTitle className="text-xl font-semibold text-primary">{achievement.year} - {achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                    <p className="text-foreground/70">{achievement.description}</p>
                    </CardContent>
                </Card>
                </div>
            ))}
            </div>
        </Container>
      </section>
      
      <section className="w-full bg-secondary/30">
        <Container>
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary animate-fade-in-up" style={{ animationDelay: `${valuesStartDelay}s` }}>Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div key={value.title} className="animate-fade-in-up" style={{ animationDelay: `${valuesStartDelay + (index * initialDelay)}s` }}>
                        <Card className="text-center h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-border bg-background hover:border-accent/50">
                            <CardHeader className="items-center">
                                <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 mb-3">
                                    {value.title === 'Client-Centric' && typeof value.icon === 'function' && value.icon.name === 'TargetIconLucide' ? (
                                        <TargetIconLucide className="h-10 w-10" />
                                    ) : (
                                        value.icon && <value.icon className="h-10 w-10" />
                                    )}
                                </div>
                                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">{value.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-foreground/70">{value.description}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </Container>
      </section>

      <section className="w-full bg-background">
        <Container>
            <h2 className="font-headline text-3xl font-bold mb-10 text-center text-primary animate-fade-in-up" style={{ animationDelay: `${teamStartDelay}s` }}>Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
                <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${teamStartDelay + (index * initialDelay)}s` }}>
                    <Card className="text-center h-full overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out border-border hover:border-primary/50">
                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{objectFit: 'cover'}}
                        className="group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={member.dataAiHint}
                        />
                    </div>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-1 text-primary">{member.name}</h3>
                        <p className="text-accent font-medium mb-2">{member.role}</p>
                        <p className="text-sm text-foreground/70">{member.bio}</p>
                    </CardContent>
                    </Card>
                </div>
            ))}
            </div>
        </Container>
      </section>
    </>
  );
}
