export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#191919' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-700" style={{ backgroundColor: 'rgba(25, 25, 25, 0.95)' }}>
        <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <a href="/">
              <img src="/bb-full.svg" alt="BarBold" className="h-8" />
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Features</a>
            <a href="/#download" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Download</a>
            <a href="/#contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Contact</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy for Barbold</h1>
          <p className="text-gray-400 text-lg">Last Updated: 06 August 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-300">
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="mb-4 leading-relaxed">
                Welcome to Barbold, your personal workout tracking companion. This privacy policy explains how we collect, use, store, and protect your information when you use our iOS application and related services.
              </p>
              <p className="leading-relaxed">
                We are committed to protecting your privacy and ensuring that your personal information remains secure. This policy applies to all users of the Barbold app and its related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-bold text-orange-500 mb-3">Personal Information You Provide</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Account Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Email address (for email authentication)</li>
                  <li>Name (optional, via Apple Sign-In or Google Sign-In if provided)</li>
                  <li>Authentication credentials (securely managed through Firebase Authentication)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Profile Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Gender (optional)</li>
                  <li>Age/Date of Birth (optional)</li>
                  <li>Height and weight</li>
                  <li>Fitness level (beginner, intermediate, advanced)</li>
                  <li>Activity level and fitness goals</li>
                  <li>Measurement preferences (metric/imperial)</li>
                  <li>Injury or muscle avoidance preferences (optional)</li>
                  <li>Profile picture (optional, stored locally)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Workout Data:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Exercise routines and workout plans</li>
                  <li>Sets, reps, weights, and other exercise metrics</li>
                  <li>Workout duration and timing</li>
                  <li>Rest periods and timer usage</li>
                  <li>Personal records and achievements</li>
                  <li>Workout notes and customizations</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-orange-500 mb-3 mt-6">Automatically Collected Information</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Device Information:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Device identifier (stored securely in device Keychain)</li>
                  <li>iOS version and device model</li>
                  <li>App version and usage statistics</li>
                  <li>Error logs and crash reports (for debugging purposes)</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-orange-500 mb-3 mt-6">Health and Fitness Data</h3>
              
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">Apple HealthKit Integration (Optional):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Workout data export to Apple Health</li>
                  <li>Activity rings data (move, exercise, stand goals)</li>
                  <li>Heart rate data (if available)</li>
                  <li>Active energy burned</li>
                  <li>Past workout history import (with your permission)</li>
                </ul>
                <p className="mt-3 p-4 rounded-lg border border-orange-500/30 bg-orange-500/10">
                  <strong className="text-orange-500">Important:</strong> HealthKit data is processed locally on your device and shared with Apple Health only with your explicit permission. We do not store your HealthKit data on our servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Core App Functionality</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide workout tracking and fitness features</li>
                  <li>Store and sync your workout data across devices</li>
                  <li>Calculate personal records and fitness achievements</li>
                  <li>Generate workout recommendations and progress insights</li>
                  <li>Backup and restore your workout data</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Account Management</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Create and manage your account</li>
                  <li>Authenticate your identity</li>
                  <li>Enable cloud synchronization of your data</li>
                  <li>Manage subscription status and trial limits</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Storage and Security</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Cloud Storage</h3>
                <p className="mb-3">Your workout data is securely stored using:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Firebase Firestore:</strong> For workout plans, exercises, and user data</li>
                  <li><strong>Firebase Authentication:</strong> For secure account management</li>
                  <li><strong>End-to-end encryption:</strong> During data transmission</li>
                  <li><strong>Server-side security:</strong> Google Cloud Platform security standards</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Security Measures</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All data transmission is encrypted using HTTPS/TLS</li>
                  <li>Firebase security rules protect your data from unauthorized access</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Device-level encryption for stored data</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
              
              <div className="p-4 rounded-lg border border-orange-500/30 bg-orange-500/10 mb-6">
                <p className="text-orange-500 font-bold text-lg">We DO NOT sell your personal information to third parties.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Limited Data Sharing</h3>
                <p className="mb-3">We may share your information only in these specific circumstances:</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Service Providers:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Firebase/Google Cloud (for data storage and authentication)</li>
                    <li>RevenueCat (for subscription management)</li>
                    <li>Apple (for HealthKit integration and App Store purchases)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Privacy Rights</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Data Access and Control</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>View Your Data:</strong> Access all personal data we have about you</li>
                  <li><strong>Export Your Data:</strong> Download your workout data in standard formats</li>
                  <li><strong>Delete Your Account:</strong> Permanently delete your account and all associated data</li>
                  <li><strong>Correct Information:</strong> Update or correct your personal information</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">HealthKit Control</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Enable or disable HealthKit integration at any time</li>
                  <li>Control what health data is shared with Apple Health</li>
                  <li>Manage permissions through iOS Settings</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Account Deletion</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All personal data is permanently deleted within 30 days of account deletion</li>
                  <li>Anonymized usage statistics may be retained for app improvement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="leading-relaxed">
                Barbold is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we discover that we have collected information from a child under 13, we will delete it immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Integrated Services</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Firebase (Google):</strong> Authentication and data storage</li>
                  <li><strong>RevenueCat:</strong> Subscription management</li>
                  <li><strong>Apple HealthKit:</strong> Health data integration (optional)</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-orange-500 mb-3">Privacy Policies</h3>
                <p className="mb-3">Please review the privacy policies of these third-party services:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><a href="https://policies.google.com/privacy" className="text-orange-500 hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
                  <li><a href="https://www.revenuecat.com/privacy" className="text-orange-500 hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">RevenueCat Privacy Policy</a></li>
                  <li><a href="https://www.apple.com/privacy/" className="text-orange-500 hover:text-orange-400 transition-colors" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Your Choices Regarding Analytics</h2>
              <p className="leading-relaxed">
                To help us improve the app, we collect anonymous usage analytics and crash reports. You have full control over this data collection. You can disable analytics and crash reporting at any time from the app&rsquo;s settings menu. If you disable these, no performance or usage data will be sent from your device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Updates to This Privacy Policy</h2>
              <p className="mb-3">We may update this privacy policy from time to time. When we make changes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>We will update the &quot;Last Updated&quot; date</li>
                <li>Significant changes will be communicated through the app</li>
                <li>Continued use of the app after changes indicates acceptance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="mb-4 leading-relaxed">
                If you have questions about this privacy policy or your data:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href="mailto:contact@barbold.app" className="text-orange-500 hover:text-orange-400 transition-colors">contact@barbold.app</a></p>
                <p><strong>Support:</strong> Available through the app&rsquo;s Settings &gt; Help &amp; Support</p>
              </div>
              <p className="mt-4 leading-relaxed">
                <strong>Data Protection Inquiries:</strong> For specific data protection requests (access, deletion, correction), please contact us through the app&rsquo;s support system or via email with &quot;Privacy Request&quot; in the subject line.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Regional Privacy Rights</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">California Residents (CCPA)</h3>
                <p className="mb-3">If you are a California resident, you have additional rights under the California Consumer Privacy Act, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right to know what personal information we collect</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information (we do not sell personal information)</li>
                  <li>Right to non-discrimination for exercising your privacy rights</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-500 mb-3">European Users (GDPR)</h3>
                <p className="mb-3">If you are in the European Economic Area, you have rights under the General Data Protection Regulation, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Right of access to your personal data</li>
                  <li>Right to rectification of inaccurate data</li>
                  <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>
              </div>
            </section>

            <div className="border-t border-gray-600 pt-8 mt-8">
              <p className="text-center text-gray-400 italic">
                This privacy policy is designed to be transparent about our data practices while ensuring your fitness journey remains private and secure.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}