import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import ChatBot from './components/ChatBot';
import CropSelector from './components/CropSelector';
import Analytics from './components/Analytics';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <LandingPage setActiveTab={setActiveTab} />;
      case 'chat':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                Agriculture Chat Assistant
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Get comprehensive information about crops, growth periods, costs, and revenue potential
              </p>
            </div>
            <div className="h-[700px] bg-white rounded-2xl shadow-lg">
              <ChatBot />
            </div>
          </div>
        );
      case 'crops':
        return <CropSelector />;
      case 'analytics':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                Agriculture Analytics
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Analyze crop performance, profitability, and growth patterns
              </p>
            </div>
            <Analytics />
          </div>
        );
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className={activeTab === 'home' ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}>
        {renderContent()}
      </main>

      {/* Quick Access Tooltip */}
      {activeTab !== 'chat' && !isChatOpen && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 bg-white rounded-lg shadow-lg p-2 z-40 animate-bounce max-w-[200px]">
          <p className="text-xs text-gray-600 text-center">Ask me about crops! 🌱</p>
        </div>
      )}

      {/* Floating Chatbot */}
      {activeTab !== 'chat' && (
        <>
          <button
            onClick={() => setIsChatOpen(true)}
            aria-label="Open agriculture chat assistant"
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group animate-pulse-slow"
          >
            <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-bounce" />
            <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-500 rounded-full animate-pulse flex items-center justify-center">
              <span className="text-[10px] sm:text-xs font-bold text-white">!</span>
            </div>
          </button>

          {/* Floating Chat Window */}
          {isChatOpen && (
            <>
              {/* Backdrop for mobile */}
              <div 
                className="fixed inset-0 bg-black/20 z-40 sm:hidden"
                onClick={() => setIsChatOpen(false)}
              />
              
              <div className="fixed inset-x-4 bottom-20 top-20 sm:bottom-20 sm:right-4 sm:top-auto sm:left-auto sm:w-96 sm:h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden animate-slideInUp">
                <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                  <h3 className="font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                    Agriculture Assistant
                  </h3>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    aria-label="Close chat assistant"
                    className="p-1 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/30"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                <div className="h-[calc(100%-48px)] sm:h-[calc(100%-56px)]">
                  <ChatBot compact />
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;