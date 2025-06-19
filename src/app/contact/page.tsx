import Image from 'next/image';
import Container from '@/components/ui/container';
import ContactForm from '@/components/forms/ContactForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <Container>
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-4xl sm:text-5xl font-extrabold mb-4 text-primary">Get in Touch</h1>
        <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
          We're here to help and answer any question you might have. We look forward to hearing from you!
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Our Office</h3>
                  <p>123 Digital Avenue, Tech City, TX 75001, USA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Phone</h3>
                  <a href="tel:+15551234567" className="hover:text-primary transition-colors">(555) 123-4567</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <a href="mailto:info@wbmcz.com" className="hover:text-primary transition-colors">info@wbmcz.com</a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
             <CardHeader>
                <CardTitle className="text-2xl font-semibold">Our Location</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="aspect-video w-full rounded-md overflow-hidden border border-border">
                <Image
                    src="https://placehold.co/600x400.png" // Placeholder map image
                    alt="Map showing agency location"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="city map"
                />
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
}
