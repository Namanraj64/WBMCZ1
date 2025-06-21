
import Container from '@/components/ui/container';

export default function PrivacyPolicyPage() {
  return (
    <Container className="prose prose-lg max-w-4xl mx-auto">
      <h1 className="text-primary">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

      <p>
        WBMCZ Digital Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, including any other media form, media channel, mobile website, or mobile application related or connected thereto (collectively, the "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
      </p>

      <h2 className="text-primary">Collection of Your Information</h2>
      <p>
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </p>
      <h3>Personal Data</h3>
      <p>
        Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out a contact form or otherwise contact us.
      </p>
      <h3>Derivative Data</h3>
      <p>
        Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </p>

      <h2 className="text-primary">Use of Your Information</h2>
      <p>
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </p>
      <ul>
        <li>Respond to your product and customer service requests.</li>
        <li>Email you regarding your account or order.</li>
        <li>Compile anonymous statistical data and analysis for use internally.</li>
        <li>Increase the efficiency and operation of the Site.</li>
      </ul>

      <h2 className="text-primary">Disclosure of Your Information</h2>
      <p>
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <h3>By Law or to Protect Rights</h3>
      <p>
        If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
      </p>

      <h2 className="text-primary">Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>
      
      <h2 className="text-primary">Policy for Children</h2>
      <p>
        We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
      </p>
      
      <h2 className="text-primary">Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us at:
        <br />
        WBMCZ Digital Agency
        <br />
        123 Digital Avenue, Tech City, TX 75001, USA
        <br />
        <a href="mailto:info@wbmcz.com" className="text-primary hover:underline">info@wbmcz.com</a>
      </p>
      
      <p className="mt-8 p-4 border-l-4 border-accent bg-accent/10">
        <strong>Disclaimer:</strong> This is a sample Privacy Policy. You should consult with a legal professional to ensure this policy is complete and compliant with all applicable laws and regulations for your specific business and jurisdiction.
      </p>
    </Container>
  );
}
