export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#191919' }}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <div className="flex items-center">
          <img src="/bb-full.svg" alt="BarBold" className="h-8" />
        </div>
        <div className="hidden md:flex space-x-10">
          <a href="#features" className="text-gray-400 hover:text-orange-500 transition-all duration-300 font-light text-sm tracking-wide">Features</a>
          <a href="#download" className="text-gray-400 hover:text-orange-500 transition-all duration-300 font-light text-sm tracking-wide">Download</a>
          <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-all duration-300 font-light text-sm tracking-wide">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mb-8">
          <img src="/bb-sygnet.svg" alt="BarBold" className="h-20 mx-auto mb-6" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold italic text-white mb-6 tracking-tight leading-tight">
          <span style={{ color: '#FF6B3E' }}>T</span>urn Your Workouts Into <br className="hidden md:block" />Unstoppable Progress
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Stop guessing. Start progressing. Barbold is the smart workout tracker that remembers every rep, tracks every PR, and ensures you never skip a muscle group again.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
          <button 
            className="bg-white text-black font-medium italic text-lg px-8 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            style={{ height: '48px', borderRadius: '12px' }}
          >
            Start Training Smarter
          </button>
          <button 
            className="border-2 text-white font-medium italic text-lg px-8 hover:bg-orange-500/10 transition-all duration-300"
            style={{ height: '48px', borderRadius: '12px', borderColor: '#FF6B3E', color: '#FF6B3E' }}
          >
            View Your Progress
          </button>
        </div>

        {/* Phone Mockup */}
        <div className="relative mx-auto w-72 h-[36rem] bg-gradient-to-b from-gray-800 to-black rounded-[3.5rem] p-3 shadow-2xl">
          <div 
            className="w-full h-full rounded-[3rem] flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: '#0A0A0A' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-transparent"></div>
            <div className="text-white text-center z-10">
              <div className="w-20 h-20 rounded-3xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 107, 62, 0.1)' }}>
                <img src="/bb-sygnet.svg" alt="BarBold" className="h-12" />
              </div>
              <h3 className="text-2xl font-light mb-2 tracking-wide">BarBold</h3>
              <p className="text-sm text-gray-400 font-light">Premium iOS Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24" style={{ backgroundColor: '#191919' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6" style={{ gap: '16px' }}>
            
            {/* Smart Workout Logging */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#4CAF50' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012-2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#4CAF50' }}>S</span>mart Workout Logging
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Log every set, rep, and weight — effortlessly
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Never forget what you did last time. Barbold's intelligent logging system captures your performance with precision, so you can focus on lifting while we handle the details.
              </p>
            </div>

            {/* Personal Records Tracking */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#FF6B3E' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#FF6B3E' }}>P</span>ersonal Records Tracking
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Track progress and break your personal records
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Celebrate every victory, no matter how small. Our advanced PR detection automatically identifies when you've hit a new personal best and tracks your progress over time.
              </p>
            </div>

            {/* Muscle Balance Analytics */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#9C27B0' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#9C27B0' }}>M</span>uscle Balance Analytics
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Train smarter by targeting all muscle groups
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Stop repeating the same exercises. Our intelligent muscle tracking ensures balanced development by highlighting neglected muscle groups and suggesting targeted exercises.
              </p>
            </div>

            {/* Achievement System */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2196F3' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#2196F3' }}>A</span>chievement System
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Stay motivated with achievements and history
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Transform your fitness journey into an engaging experience. Unlock achievements, maintain streaks, and visualize your progress with detailed workout history and performance analytics.
              </p>
            </div>

            {/* Apple Health Integration */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#00FF00' }}>
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#00FF00' }}>A</span>pple Health Integration
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Seamlessly sync with Apple Health and close your fitness rings
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Your workouts automatically count towards your daily goals. Keep all your fitness data in one secure place with complete privacy protection.
              </p>
            </div>

            {/* Rest Timer & Workout Management */}
            <div className="feature-card">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#2A2A2A' }}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold italic text-white mb-3">
                <span style={{ color: '#FFFFFF' }}>R</span>est Timer & Workout Management
              </h3>
              <p className="text-base font-medium italic mb-3" style={{ color: '#999999' }}>
                Optimize your training with intelligent rest timing
              </p>
              <p className="text-sm leading-relaxed" style={{ color: '#999999' }}>
                Built-in rest timers, workout templates, and exercise recommendations help you maintain perfect training intensity and maximize your time in the gym.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24" style={{ backgroundColor: '#191919' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold italic text-white mb-6 tracking-tight">
              <span style={{ color: '#FF6B3E' }}>R</span>eady to Transform Your Training?
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto leading-relaxed" style={{ color: '#999999' }}>
              Join thousands of fitness enthusiasts who have revolutionized their workout experience with Barbold
            </p>
          </div>
          <div className="flex justify-center">
            <button 
              className="btn-primary px-12 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Download on App Store
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 border-t" style={{ backgroundColor: '#0A0A0A', borderColor: '#1F1F1F' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <img src="/bb-full.svg" alt="BarBold" className="h-8 mx-auto mb-6" />
            <p className="text-gray-400 font-light max-w-lg mx-auto leading-relaxed">
              Meticulously crafted for those who demand the finest iOS experience.
            </p>
          </div>
          <div className="flex justify-center space-x-12 text-sm mb-12">
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-light">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors font-light">Support</a>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 text-sm font-light">&copy; 2024 BarBold. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
