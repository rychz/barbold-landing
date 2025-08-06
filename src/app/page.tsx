export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#191919' }}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-700" style={{ backgroundColor: 'rgba(25, 25, 25, 0.95)' }}>
        <div className="flex justify-between items-center py-4 px-6 max-w-7xl mx-auto">
          <div className="flex items-center">
            <img src="/bb-full.svg" alt="BarBold" className="h-8" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Features</a>
            <a href="#download" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Download</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm">Contact</a>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/30 via-transparent to-gray-800/30"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Turn Your Workouts Into<br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Unstoppable Progress</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Stop guessing. Start progressing. Barbold is the smart workout tracker that remembers every rep, tracks every PR, and ensures you never skip a muscle group again.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Start Training Smarter
            </button>
            <button className="border-2 border-gray-600 text-gray-300 hover:text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:border-gray-500 hover:bg-gray-800 transition-all duration-200">
              View Demo
            </button>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/20 via-transparent to-gray-900/30" style={{ backgroundColor: '#191919' }}></div>
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything you need to
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent"> excel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Built for serious athletes who demand precision, intelligence, and results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Smart Workout Logging */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Smart Workout Logging
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Log every set, rep, and weight — effortlessly
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Never forget what you did last time. Barbold&rsquo;s intelligent logging system captures your performance with precision, so you can focus on lifting while we handle the details.
              </p>
            </div>

            {/* Personal Records Tracking */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Personal Records Tracking
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Track progress and break your personal records
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Celebrate every victory, no matter how small. Our advanced PR detection automatically identifies when you&rsquo;ve hit a new personal best and tracks your progress over time.
              </p>
            </div>

            {/* Muscle Balance Analytics */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Muscle Balance Analytics
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Train smarter by targeting all muscle groups
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Stop repeating the same exercises. Our intelligent muscle tracking ensures balanced development by highlighting neglected muscle groups and suggesting targeted exercises.
              </p>
            </div>

            {/* Achievement System */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Achievement System
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Stay motivated with achievements and history
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Transform your fitness journey into an engaging experience. Unlock achievements, maintain streaks, and visualize your progress with detailed workout history and performance analytics.
              </p>
            </div>

            {/* Apple Health Integration */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Apple Health Integration
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Seamlessly sync with Apple Health and close your fitness rings
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Your workouts automatically count towards your daily goals. Keep all your fitness data in one secure place with complete privacy protection.
              </p>
            </div>

            {/* Rest Timer & Workout Management */}
            <div className="rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600" style={{ backgroundColor: '#2F2F2F' }}>
              <div className="w-14 h-14 rounded-2xl bg-gray-500/20 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Rest Timer & Workout Management
              </h3>
              <p className="text-base font-semibold text-gray-300 mb-3">
                Optimize your training with intelligent rest timing
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Built-in rest timers, workout templates, and exercise recommendations help you maintain perfect training intensity and maximize your time in the gym.
              </p>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-black/60" style={{ backgroundColor: '#191919' }}></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-[3rem] p-16 relative overflow-hidden border border-gray-600">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Transform Your Training?
              </h2>
              <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed text-gray-300 mb-12">
                Join thousands of fitness enthusiasts who have revolutionized their workout experience with Barbold
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="bg-white text-gray-900 font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-lg">
                  Download on App Store
                </button>
                <button className="border-2 border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition-all duration-200">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative py-20 border-t border-gray-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-900/50" style={{ backgroundColor: '#0A0A0A' }}></div>
        <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <img src="/bb-full.svg" alt="BarBold" className="h-10 mx-auto mb-6" />
            <p className="text-gray-400 font-medium max-w-lg mx-auto leading-relaxed">
              Meticulously crafted for those who demand the finest iOS experience.
            </p>
          </div>
          <div className="flex justify-center space-x-8 text-sm mb-12">
            <a href="/privacy" className="text-gray-500 hover:text-orange-500 transition-colors font-medium">Privacy Policy</a>
            <a href="/terms" className="text-gray-500 hover:text-orange-500 transition-colors font-medium">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-medium">Support</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-medium">Contact</a>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-sm font-medium">&copy; 2024 BarBold. All rights reserved.</p>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}