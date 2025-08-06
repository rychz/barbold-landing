import Link from 'next/link';

export default function Terms() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#191919' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-700" style={{ backgroundColor: 'rgba(25, 25, 25, 0.95)' }}>
        <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <Link href="/">
              <img src="/bb-full.svg" alt="BarBold" className="h-8" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Features</Link>
            <Link href="/#download" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Download</Link>
            <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Contact</Link>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Barbold Terms of Service</h1>
          <p className="text-gray-400 text-lg">Last updated: 6 Aug 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-300">
            
            <section>
              <p className="mb-4 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Barbold mobile application (&quot;Service&quot;) operated by Pawel Jankowiak IT Services (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By downloading, accessing, or using Barbold, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4 leading-relaxed">
                By creating an account or using Barbold, you confirm that you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Are at least 13 years old (or the minimum age in your jurisdiction)</li>
                <li>Have the legal capacity to enter into these Terms</li>
                <li>Agree to comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4 leading-relaxed">
                Barbold is a workout tracking application that allows users to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Plan and track workouts</li>
                <li>Log exercises and sets</li>
                <li>Monitor fitness progress</li>
                <li>Access workout analytics and insights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Account Creation</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must provide accurate, current, and complete information</li>
                  <li>You are responsible for maintaining account security</li>
                  <li>You must promptly notify us of any unauthorized use</li>
                  <li>You may not use offensive, inappropriate, or trademarked usernames</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Account Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You are solely responsible for all activities under your account</li>
                  <li>You must not share your account credentials</li>
                  <li>You must keep your contact information updated</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. User Content and Data</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Your Content</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You retain ownership of content you create or upload</li>
                  <li>You grant us a worldwide, non-exclusive license to use, store, and process your content to provide the Service</li>
                  <li>You represent that you have all necessary rights to your content</li>
                  <li>You are responsible for backing up your data</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Prohibited Content</h3>
                <p className="mb-4 leading-relaxed">You may not post, upload, or share content that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violates any laws or regulations</li>
                  <li>Infringes on intellectual property rights</li>
                  <li>Contains harmful, offensive, or inappropriate material</li>
                  <li>Promotes dangerous or illegal activities</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Health and Safety Disclaimer</h2>
              <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/10 mb-6">
                <p className="text-orange-500 font-bold text-lg mb-2">IMPORTANT: USE AT YOUR OWN RISK</p>
                <p className="text-gray-300">
                  Barbold is for informational purposes only and does not provide medical advice
                </p>
              </div>
              <ul className="list-disc pl-6 space-y-2">
                <li>All exercise activities carry inherent risks of injury</li>
                <li>You assume all risks associated with your use of the Service</li>
                <li>Consult a physician before beginning any exercise program, especially if you have:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Pre-existing medical conditions</li>
                    <li>History of heart problems</li>
                    <li>High blood pressure</li>
                    <li>Any other health concerns</li>
                  </ul>
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We strongly recommend consulting with healthcare professionals before making significant changes to your fitness routine.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Our Rights</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Service and all original content are owned by us and protected by copyright, trademark, and other laws</li>
                  <li>Our trademarks and trade names may not be used without our written permission</li>
                  <li>All rights not expressly granted are reserved</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Third-Party Content</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Some content may be provided by third parties</li>
                  <li>We do not endorse or assume responsibility for third-party content</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Subscription and Payments</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Barbold Premium</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Premium features may be available through subscription</li>
                  <li>Subscriptions automatically renew unless cancelled</li>
                  <li>Pricing and billing terms are displayed at purchase</li>
                  <li>Refunds are subject to our refund policy and applicable laws</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Payment Processing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Payments are processed through third-party providers (Apple App Store, Google Play Store)</li>
                  <li>Payment terms are subject to the respective platform&rsquo;s policies</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Privacy and Data</h2>
              <p className="leading-relaxed">
                Your privacy is important to us. Our{' '}
                <a href="/privacy" className="text-orange-500 hover:text-orange-400 transition-colors">
                  Privacy Policy
                </a>
                {' '}explains how we collect, use, and protect your information. By using Barbold, you consent to our data practices as described in our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">9. Prohibited Uses</h2>
              <p className="mb-4 leading-relaxed">You may not use Barbold to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any laws or regulations</li>
                <li>Impersonate others or provide false information</li>
                <li>Distribute malware or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Use automated tools to access the Service</li>
                <li>Interfere with other users&rsquo; enjoyment of the Service</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">10. Service Availability</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Availability</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We provide the Service on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis</li>
                  <li>We do not guarantee uninterrupted or error-free service</li>
                  <li>We may modify, suspend, or discontinue features at any time</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Maintenance</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may perform maintenance that temporarily affects Service availability</li>
                  <li>We will attempt to provide reasonable notice when possible</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">11. Limitation of Liability</h2>
              <p className="mb-4 leading-relaxed font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED</li>
                <li>WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE CLAIM</li>
                <li>SOME JURISDICTIONS DO NOT ALLOW LIMITATION OF IMPLIED WARRANTIES OR LIABILITY, SO THESE LIMITATIONS MAY NOT APPLY TO YOU</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">12. Indemnification</h2>
              <p className="mb-4 leading-relaxed">You agree to indemnify and hold us harmless from any claims, damages, or expenses arising from:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your content or conduct</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">13. Termination</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">By You</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You may stop using the Service at any time</li>
                  <li>You may delete your account through the app settings</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">By Us</h3>
                <p className="mb-4 leading-relaxed">We may suspend or terminate your account immediately if you:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate these Terms</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Pose a security risk to the Service or other users</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Effect of Termination</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your access to the Service will cease</li>
                  <li>We may delete your account and data</li>
                  <li>Certain provisions of these Terms will survive termination</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We may update these Terms from time to time</li>
                <li>We will notify you of material changes through the app or email</li>
                <li>Continued use after changes constitutes acceptance of new Terms</li>
                <li>If you disagree with changes, you must stop using the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law and Disputes</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Governing Law</h3>
                <p className="leading-relaxed">
                  These Terms are governed by the laws of the Republic of Poland, without regard to conflict of law principles.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Dispute Resolution</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We encourage resolving disputes through direct communication first</li>
                  <li>Any legal disputes will be resolved in the courts of Szczecin, Republic of Poland</li>
                  <li>You agree to individual resolution of disputes (no class actions unless prohibited by law)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">16. General Provisions</h2>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Severability</h3>
                <p className="leading-relaxed">
                  If any provision is found unenforceable, the remainder of these Terms will remain in effect.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Entire Agreement</h3>
                <p className="leading-relaxed">
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and us.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Assignment</h3>
                <p className="leading-relaxed">
                  We may assign these Terms without notice. You may not assign your rights under these Terms.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">No Waiver</h3>
                <p className="leading-relaxed">
                  Our failure to enforce any provision does not constitute a waiver of that provision.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Force Majeure</h3>
                <p className="leading-relaxed">
                  We are not liable for delays or failures due to circumstances beyond our reasonable control.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">17. Contact Information</h2>
              <p className="mb-4 leading-relaxed">
                If you have questions about these Terms, please contact us at:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:contact@barbold.app" className="text-orange-500 hover:text-orange-400 transition-colors">contact@barbold.app</a></p>
                <p><strong>Address:</strong> Pustulki 2, 71-779 Szczecin</p>
              </div>
            </section>

            <div className="border-t border-gray-600 pt-8 mt-8">
              <p className="text-center text-gray-400 italic">
                By using Barbold, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}