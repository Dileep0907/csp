import React from 'react';
import { Sprout, MessageCircle, Database, BarChart3, ArrowRight, Users, Award, Globe } from 'lucide-react';

interface LandingPageProps {
  setActiveTab: (tab: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setActiveTab }) => {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Chat Assistant',
      description: 'Get instant answers about crop cultivation, costs, and revenue projections',
      action: () => setActiveTab('chat')
    },
    {
      icon: Database,
      title: 'Crop Database',
      description: 'Browse comprehensive information about various crops',
      action: () => setActiveTab('crops')
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Analyze crop performance, profitability, and market trends',
      action: () => setActiveTab('analytics')
    }
  ];

  const stats = [
    { number: '8+', label: 'Crop Varieties', icon: Sprout },
    { number: '24/7', label: 'AI Support', icon: MessageCircle },
    { number: '100%', label: 'Accurate Data', icon: Award },
    { number: '1M+', label: 'Farmers Helped', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/landing-banner.png')] bg-cover bg-center opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/40 to-emerald-600/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Sprout className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-yellow-800" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-700 to-teal-700 bg-clip-text text-transparent mb-6 tracking-wide">
               AgriWay
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your intelligent agriculture companion for smart farming. Get expert guidance on crop selection, 
              growth periods, costs, and revenue projections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => setActiveTab('chat')}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Start Chatting
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setActiveTab('crops')}
                className="px-8 py-4 bg-white text-green-600 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg border-2 border-green-200 flex items-center gap-3"
              >
                <Database className="w-6 h-6" />
                Browse Crops
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Choose Your Agricultural Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our comprehensive tools to get the agricultural insights you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                onClick={feature.action}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl mb-6 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-green-600 font-semibold group-hover:gap-3 transition-all duration-300">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of farmers who trust AgriWay for their agricultural decisions
          </p>
          <button
            onClick={() => setActiveTab('chat')}
            className="px-10 py-4 bg-white text-green-600 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">About AgriWay</h3>
              <p className="text-gray-600 mb-4">
                AgriWay is an intelligent agriculture platform designed for modern farmers. 
                We provide data-driven insights to help you make informed farming decisions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Real-time crop guidance</li>
                <li>• Cost-benefit analysis</li>
                <li>• Weather-based recommendations</li>
                <li>• Market price insights</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h3>
              <div className="text-gray-600 space-y-3">
                <p>📧 support@agriway.com</p>
                <p>📞 1800-XXX-XXXX (Toll Free)</p>
                <p>📍 Agriculture Department<br />India</p>
                <p>🕒 24/7 AI Support Available</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Access</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveTab('chat')}
                  className="block w-full text-left text-green-600 hover:text-green-700 font-medium"
                >
                  → Chat Assistant
                </button>
                <button 
                  onClick={() => setActiveTab('crops')}
                  className="block w-full text-left text-green-600 hover:text-green-700 font-medium"
                >
                  → Crop Database
                </button>
                <button 
                  onClick={() => setActiveTab('analytics')}
                  className="block w-full text-left text-green-600 hover:text-green-700 font-medium"
                >
                  → Analytics Dashboard
                </button>
                <p className="text-gray-600 text-sm mt-4">
                  Available in Telugu, Hindi & English
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Sprout className="w-8 h-8 text-green-400" />
              <span className="text-xl font-bold tracking-wide">AgriWay</span>
            </div>
            <div className="text-center md:text-right text-gray-400">
              <p>© 2024 AgriWay - Agriculture Department</p>
              <p className="text-sm mt-1">Empowering farmers with intelligent agriculture solutions</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;