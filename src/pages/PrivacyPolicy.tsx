import Navigation from "@/sections/Navigation";
import Footer from "@/sections/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FEFEFB]">
      <Navigation />
      <div className="pt-[72px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-[32px] lg:text-[40px] font-bold text-[#1C2D3A] font-heading mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-[15px] leading-[1.75] text-[#4A5D4A] font-body">
          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Introduction</h2>
            <p>
              BAC Health Services, LLC (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Information We Collect</h2>
            <p className="mb-3">
              We may collect information about you in a variety of ways. The information we may collect via the website includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, phone number, date of birth, and demographic information that you voluntarily give to us when you register with us or when you choose to participate in various activities related to the website.</li>
              <li><strong>Health Information:</strong> Medical history, medication information, insurance details, and other health-related data you provide through our patient forms.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Use of Your Information</h2>
            <p className="mb-3">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account and patient records.</li>
              <li>Provide mental health services, including therapy and medication management.</li>
              <li>Process insurance claims and verify benefits.</li>
              <li>Send you appointment reminders and follow-up communications.</li>
              <li>Email you regarding your account or services.</li>
              <li>Improve our website and services.</li>
              <li>Comply with legal obligations and protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Disclosure of Your Information</h2>
            <p className="mb-3">
              We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
              <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
              <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">HIPAA Compliance</h2>
            <p>
              As a healthcare provider, BAC Health Services, LLC is fully committed to compliance with the Health Insurance Portability and Accountability Act (HIPAA). We implement appropriate administrative, physical, and technical safeguards to protect the privacy and security of your protected health information (PHI). All staff members are trained in HIPAA compliance, and we maintain strict policies and procedures to ensure your health information is handled with the utmost care and confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">SMS Communications</h2>
            <p>
              By providing your phone number and consenting to SMS communications, you agree to receive text messages from BAC Health Services, LLC regarding appointment reminders, follow-up messages, and billing inquiries. Message and data rates may apply. Message frequency may vary. You can reply &ldquo;STOP&rdquo; at any time to opt-out of SMS communications. For assistance, text &ldquo;HELP&rdquo; or contact us at (240) 713-8080.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#1C2D3A] font-heading mb-3">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>BAC Health Services, LLC</strong><br />
              14300 Cherry Lane Court, Suite 108<br />
              Laurel, MD 20707<br />
              Email: info@bachealthservices.com<br />
              Phone: (240) 713-8080
            </p>
          </section>

          <p className="text-[13px] text-[#6B7B6B] pt-4 border-t border-[#E8EDE8]">
            Last updated: July 8, 2026
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
