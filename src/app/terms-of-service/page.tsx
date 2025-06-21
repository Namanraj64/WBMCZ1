
import Container from '@/components/ui/container';

export default function TermsOfServicePage() {
  return (
    <Container className="prose prose-lg max-w-4xl mx-auto">
      <h1 className="text-primary">Terms of Service</h1>
      <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

      <h2 className="text-primary">1. Agreement to Terms</h2>
      <p>
        By using our website and the services offered by WBMCZ Digital Agency ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Site or our services.
      </p>

      <h2 className="text-primary">2. Use of the Site</h2>
      <p>
        You agree to use the Site for lawful purposes only. You are prohibited from using the Site to post or transmit any material that is infringing, threatening, false, misleading, abusive, libelous, defamatory, obscene, scandalous, inflammatory, pornographic, or profane.
      </p>
      
      <h2 className="text-primary">3. Intellectual Property</h2>
      <p>
        All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of WBMCZ Digital Agency or its content suppliers and is protected by international copyright and trademark laws. You may not reproduce, distribute, or create derivative works from any of the content on the Site without our express written permission.
      </p>

      <h2 className="text-primary">4. Limitation of Liability</h2>
      <p>
        We will not be liable for any damages of any kind arising from the use of this Site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. We do not warrant that the Site will operate error-free or that the Site and its server are free of computer viruses or other harmful mechanisms.
      </p>
      
      <h2 className="text-primary">5. Disclaimer of Warranties</h2>
      <p>
        The services and information on this Site are provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-primary">6. Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without giving effect to any principles of conflicts of law.
      </p>
      
      <h2 className="text-primary">7. Changes to Terms</h2>
      <p>
        We reserve the right to make changes to these Terms of Service at any time. Your continued use of the Site following the posting of changes will mean you accept those changes.
      </p>

      <h2 className="text-primary">Contact Us</h2>
      <p>
        If you have any questions about these Terms of Service, please contact us at:
        <br />
        WBMCZ Digital Agency
        <br />
        123 Digital Avenue, Tech City, TX 75001, USA
        <br />
        <a href="mailto:info@wbmcz.com" className="text-primary hover:underline">info@wbmcz.com</a>
      </p>
      
      <p className="mt-8 p-4 border-l-4 border-accent bg-accent/10">
        <strong>Disclaimer:</strong> This is a sample Terms of Service agreement. You should consult with a legal professional to ensure this agreement is suitable for your specific business needs and compliant with applicable laws.
      </p>
    </Container>
  );
}
