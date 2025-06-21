
import Container from '@/components/ui/container';

export default function CookiePolicyPage() {
  return (
    <Container className="prose prose-lg max-w-4xl mx-auto">
      <h1 className="text-primary">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>

      <h2 className="text-primary">What Are Cookies?</h2>
      <p>
        As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored; however, this may downgrade or 'break' certain elements of the site's functionality.
      </p>

      <h2 className="text-primary">How We Use Cookies</h2>
      <p>
        We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
      </p>
      
      <h3 className="text-primary">Types of Cookies We Use</h3>
      <ul>
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.
        </li>
        <li>
          <strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. For example, we use Google Analytics to understand how visitors engage with our site.
        </li>
        <li>
          <strong>Functionality Cookies:</strong> These cookies are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences (for example, your choice of language or region).
        </li>
      </ul>

      <h2 className="text-primary">Disabling Cookies</h2>
      <p>
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser's Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of this site. Therefore it is recommended that you do not disable cookies.
      </p>
      
      <h2 className="text-primary">More Information</h2>
      <p>
        Hopefully, that has clarified things for you. If you are still looking for more information, then you can contact us through one of our preferred contact methods.
      </p>
      
      <p>
        Email: <a href="mailto:info@wbmcz.com" className="text-primary hover:underline">info@wbmcz.com</a>
      </p>
      
      <p className="mt-8 p-4 border-l-4 border-accent bg-accent/10">
        <strong>Disclaimer:</strong> This is a sample Cookie Policy. You should consult with a legal professional to ensure this policy is compliant with all applicable laws and regulations, such as GDPR and CCPA, for your specific business.
      </p>
    </Container>
  );
}
