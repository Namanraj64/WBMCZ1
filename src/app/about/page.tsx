import Image from 'next/image';
import Container from '@/components/ui/container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, BarChart3 } from 'lucide-react';

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
  { year: '2018', title: 'Agency Founded', description: 'WBMCZ was established with a mission to deliver cutting-edge digital solutions.' },
  { year: '2020', title: 'First Major Client Acquired', description: 'Landed a landmark project, showcasing our capabilities in complex web development.' },
  { year: '2022', title: 'Expanded Service Offerings', description: 'Introduced mobile app development and cloud solutions to meet growing demand.' },
  { year: '2024', title: 'Team Growth to 20+ Experts', description: 'Our team expanded, bringing in diverse talent across all service areas.' },
];

export default function AboutPage() {
  return (
    <Container>
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mb-4 text-primary">About WBMCZ</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          We are a passionate team of designers, developers, and strategists dedicated to crafting exceptional digital experiences that drive growth and innovation for our clients.
        </p>
      </section>

      <section className="mb-16 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
        <h2 className="font-headline text-3xl font-bold mb-8 text-center">Our Journey</h2>
        <div className="relative border-l-2 border-primary/50 ml-6 pl-8 space-y-12">
          {achievements.map((achievement, index) => (
            <div key={achievement.year} className="relative">
              <div className="absolute -left-[3.2rem] top-1 flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground font-semibold shadow-md">
                {achievement.year}
              </div>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{achievement.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
         <h2 className="font-headline text-3xl font-bold mb-8 text-center">Our Values</h2>
         <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <CheckCircle className="mx-auto h-12 w-12 text-accent mb-2" />
                    <CardTitle className="text-xl font-semibold">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">We constantly explore new technologies to deliver cutting-edge solutions.</p>
                </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <Users className="mx-auto h-12 w-12 text-accent mb-2" />
                    <CardTitle className="text-xl font-semibold">Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">We work closely with our clients to achieve shared goals and success.</p>
                </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                    <BarChart3 className="mx-auto h-12 w-12 text-accent mb-2" />
                    <CardTitle className="text-xl font-semibold">Results-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/70">Our focus is on delivering measurable results that impact your bottom line.</p>
                </CardContent>
            </Card>
         </div>
      </section>

      <section className="animate-fade-in-up" style={{animationDelay: '0.6s'}}>
        <h2 className="font-headline text-3xl font-bold mb-10 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="text-center overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
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
          ))}
        </div>
      </section>
    </Container>
  );
}
