import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, User, Sprout, Sparkles } from 'lucide-react';
import { ChatMessage, Crop } from '../types/crop';
import { crops } from '../data/crops';
import CropCard from './CropCard';

interface ChatBotProps {
  compact?: boolean;
}

const ChatBot: React.FC<ChatBotProps> = ({ compact = false }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      message: 'Hi there! 👋 I\'m your friendly Andhra Pradesh farming assistant. I can help you with crop information, farming tips, and agricultural guidance. What would you like to know?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const findCropByName = useCallback((query: string) => {
    const lowerQuery = query.toLowerCase();
    return crops.find(crop =>
      crop.name.toLowerCase().includes(lowerQuery) ||
      crop.localName.toLowerCase().includes(lowerQuery)
    );
  }, []);

  const generateResponse = useCallback((userInput: string): { message: string; cropData?: Crop } => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.match(/\b(hi|hello|hey)\b/)) {
      const greetings = [
        "Hello there! 😊 Ready to grow something amazing together?",
        "Hey! Great to see a fellow farming enthusiast! How can I help you today?",
        "Hi! I'm excited to help you with your farming journey. What's growing? 🌱"
      ];
      return {
        message: greetings[Math.floor(Math.random() * greetings.length)]
      };
    }

    if (lowerInput.match(/\b(thank|thanks)\b/)) {
      const responses = [
        "You're so welcome! Happy farming! 🌾",
        "Glad I could help! Your success makes me happy too! 😊",
        "Anytime! I'm always here when you need farming advice! 🌱"
      ];
      return {
        message: responses[Math.floor(Math.random() * responses.length)]
      };
    }

    if (lowerInput.match(/\b(help|what can you do|capabilities)\b/)) {
      return {
        message: "I'm your friendly farming companion! 🌾 Here's how I can help you succeed:\n\n🌱 Find the perfect crops for your land\n💰 Calculate profits like a pro\n📅 Time your planting perfectly\n💧 Save water and money\n🎯 Get the best market prices\n📚 Learn expert growing secrets\n\nThink of me as your farming buddy - just ask anything!"
      };
    }

    if (lowerInput.match(/\b(weather|rain|drought|climate)\b/)) {
      return {
        message: "Weather is crucial for farming! 🌦️ Here are some tips:\n\n• Kharif crops depend on monsoon (June-Sept)\n• Rabi crops need cool, dry weather\n• Use weather apps for planning\n• Consider drought-resistant crops like groundnut\n• Rainwater harvesting helps during dry spells\n\nWhich weather condition are you dealing with?"
      };
    }

    if (lowerInput.match(/\b(fertilizer|manure|nutrients|soil)\b/)) {
      return {
        message: "Soil health is the foundation of good farming! 🌱\n\n• Test your soil pH regularly\n• Use organic compost when possible\n• NPK ratios vary by crop type\n• Micronutrients are equally important\n• Crop rotation helps soil fertility\n\nWhich crop are you planning to fertilize?"
      };
    }

    if (lowerInput.match(/\b(pest|disease|insects|fungus)\b/)) {
      return {
        message: "Pest management is essential! 🐛 Here's what I recommend:\n\n• Regular field monitoring\n• Use integrated pest management (IPM)\n• Neem-based organic pesticides\n• Proper crop spacing for air circulation\n• Remove infected plants immediately\n\nWhich crop are you having pest issues with?"
      };
    }

    if (lowerInput.match(/\b(market|price|sell|buyer)\b/)) {
      return {
        message: "Market knowledge is key to profits! 💰\n\n• Check daily market rates\n• Consider contract farming\n• Direct selling to consumers\n• Value addition increases profits\n• Storage facilities help timing sales\n\nWhich crop are you looking to sell?"
      };
    }

    if (lowerInput.match(/\b(organic|natural|chemical free)\b/)) {
      return {
        message: "Organic farming is growing fast! 🌿\n\n• Higher market prices for organic produce\n• Use compost and green manure\n• Biological pest control methods\n• Certification takes 2-3 years\n• Better soil health long-term\n\nInterested in converting to organic?"
      };
    }

    if (lowerInput.match(/\b(farming|agriculture|cultivation)\b/)) {
      return {
        message: "Farming is both art and science! 🌾\n\n• Start with soil testing\n• Choose crops suited to your climate\n• Plan your crop calendar\n• Keep detailed farm records\n• Learn from experienced farmers\n\nWhat aspect of farming interests you most?"
      };
    }

    if (lowerInput.match(/\b(yield|production|harvest amount)\b/)) {
      return {
        message: "Maximizing yield is every farmer's goal! 🌽\n\n• Use quality seeds and varieties\n• Maintain proper plant spacing\n• Ensure adequate nutrition\n• Manage water efficiently\n• Control pests and diseases\n\nWhich crop's yield are you looking to improve?"
      };
    }

    if (lowerInput.match(/\b(grow|growing|cultivation tips)\b/)) {
      return {
        message: "Growing healthy crops is rewarding! 🌱\n\n• Prepare soil well before planting\n• Follow recommended spacing\n• Water consistently but don't overwater\n• Monitor for pests regularly\n• Harvest at the right time\n\nWhat crop are you planning to grow?"
      };
    }

    if (lowerInput.match(/\b(best crop|which crop|recommend)\b/)) {
      return {
        message: "Great question! The best crop depends on several factors 🤔\n\n• Your local climate and soil\n• Available water resources\n• Market demand in your area\n• Your experience level\n• Investment capacity\n\nTell me about your farming conditions and I'll suggest the perfect crop!"
      };
    }

    if (lowerInput.match(/\b(new farmer|beginner|start farming)\b/)) {
      return {
        message: "Welcome to farming! 🌾 Here's how to start right:\n\n• Start small with easy crops\n• Learn from local farmers\n• Focus on soil health first\n• Keep detailed records\n• Don't invest too much initially\n\nI'd recommend starting with crops like maize or groundnut. Want to know more?"
      };
    }

    if (lowerInput.match(/\b(roi|return on investment|profit percentage)\b/)) {
      const avgROI = Math.round(crops.reduce((sum, crop) => sum + (crop.profit/crop.totalCost)*100, 0) / crops.length);
      const highROI = crops.filter(crop => (crop.profit/crop.totalCost)*100 > 200);
      return {
        message: `ROI is crucial for farming success! 📊\n\nAverage ROI: ${avgROI}%\n\nHigh ROI crops (>200%):\n${highROI.slice(0, 3).map(c => `• ${c.name}: ${Math.round((c.profit/c.totalCost)*100)}%`).join('\n')}\n\nROI = (Profit ÷ Investment) × 100\n\nWhich crop's ROI interests you?`
      };
    }

    const crop = findCropByName(lowerInput);
    if (crop) {
      return {
        message: `Great choice! ${crop.name} is one of my favorites! Let me share the details:`,
        cropData: crop
      };
    }

    if (lowerInput.match(/\b(profitable|profit|money|earn)\b/)) {
      const topProfitable = crops.sort((a, b) => b.profit - a.profit).slice(0, 3);
      return {
        message: `I love your business mindset! 💰 Here are my top profit champions:\n\n🥇 ${topProfitable[0].name} - ₹${topProfitable[0].profit.toLocaleString()}/acre\n🥈 ${topProfitable[1].name} - ₹${topProfitable[1].profit.toLocaleString()}/acre\n🥉 ${topProfitable[2].name} - ₹${topProfitable[2].profit.toLocaleString()}/acre\n\nWhich one catches your eye? I'd love to tell you more!`,
        cropData: topProfitable[0]
      };
    }

    if (lowerInput.match(/\b(water|irrigation)\b/)) {
      const waterEfficient = crops.filter(crop => crop.waterRequirement < 600).sort((a, b) => a.waterRequirement - b.waterRequirement);
      return {
        message: `Water-Efficient Crops:\n\n${waterEfficient.slice(0, 3).map((c, i) => `${i+1}. ${c.name}\nWater: ${c.waterRequirement}L/day\nProfit: ₹${c.profit.toLocaleString()}/acre\nGrowth: ${c.growthPeriod} days`).join('\n\n')}\n\nTips: Use drip irrigation, mulching, and rainwater harvesting for best results.`
      };
    }

    if (lowerInput.match(/\b(season|when|time|plant)\b/)) {
      return {
        message: `Seasonal Planting Guide:\n\nKHARIF (June-Nov):\nRice, Cotton, Chilli, Maize\n\nRABI (Nov-Apr):\nGroundnut, Tomato, Onion, Sunflower\n\nYEAR-ROUND:\nSugarcane, Turmeric, Mango\n\nBest planning time:\nKharif: April-May\nRabi: September-October`
      };
    }

    if (lowerInput.match(/\b(cost|investment|budget)\b/)) {
      const budgetFriendly = crops.filter(crop => crop.totalCost < 50000).sort((a, b) => a.totalCost - b.totalCost);
      return {
        message: `Budget-Friendly Crops:\n\n${budgetFriendly.slice(0, 3).map((c, i) => `${i+1}. ${c.name}\nInvestment: ₹${c.totalCost.toLocaleString()}/acre\nProfit: ₹${c.profit.toLocaleString()}/acre\nROI: ${Math.round((c.profit/c.totalCost)*100)}%`).join('\n\n')}\n\nThese are great for starting farmers or expanding gradually.`
      };
    }

    if (lowerInput.match(/\b(quick|fast|short)\b/)) {
      const quickCrops = crops.filter(crop => crop.growthPeriod < 120).sort((a, b) => a.growthPeriod - b.growthPeriod);
      return {
        message: `Quick-Return Crops:\n\n${quickCrops.map((c, i) => `${i+1}. ${c.name}\nGrowth: ${c.growthPeriod} days\nDaily Profit: ₹${Math.round(c.profit/c.growthPeriod)}/day\nTotal Profit: ₹${c.profit.toLocaleString()}/acre`).join('\n\n')}\n\nBenefits: Faster recovery, multiple crops per year, reduced risk.`
      };
    }

    const suggestions = ['rice farming', 'profitable crops', 'pest control', 'organic farming', 'market prices', 'soil health'];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    return {
      message: `Hey, I'm here to be your farming buddy! 🤔 Let's chat about:\n\n• Which crops will make you money 💰\n• Easy farming tricks that work 🌱\n• When to plant for best results 📅\n• Solving pest problems naturally 🐛\n• Water-saving techniques 💧\n\nHow about we start with: "${randomSuggestion}"? I'm excited to help!"`
    };
  }, [findCropByName]);

  const handleSendMessage = useCallback(async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      message: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    const currentInput = inputMessage;
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    const delay = Math.random() * 500 + 300;
    setTimeout(() => {
      const response = generateResponse(currentInput);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        message: response.message,
        isUser: false,
        timestamp: new Date(),
        cropData: response.cropData
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  }, [inputMessage, generateResponse]);

  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }, [handleSendMessage]);

  return (
    <div className={`flex flex-col h-full ${compact ? 'bg-transparent' : 'bg-white rounded-2xl shadow-2xl border border-gray-100'} overflow-hidden`}>
      {!compact && (
        <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white">
          <div className="relative">
            <Bot className="w-10 h-10 animate-pulse" />
            <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Agriculture Assistant</h3>
            <p className="text-sm text-green-100 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
              Online • Ready to help with crop guidance
            </p>
          </div>
        </div>
      )}

      <div className={`flex-1 overflow-y-auto ${compact ? 'p-3 space-y-3' : 'p-6 space-y-6'} bg-gradient-to-b from-gray-50 to-white custom-scrollbar`} style={{ maxHeight: compact ? 'none' : '500px' }}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
            <div className={`${compact ? 'max-w-[280px] px-3 py-2' : 'max-w-xs lg:max-w-md px-6 py-4'} rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 ${
              message.isUser
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                {message.isUser ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Sprout className="w-5 h-5 text-green-600" />
                )}
                <span className={`text-xs font-medium ${message.isUser ? 'text-green-100' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className={`${compact ? 'text-xs' : 'text-sm'} whitespace-pre-line leading-relaxed`}>{message.message}</p>
              {message.cropData && (
                <div className="mt-3">
                  <CropCard crop={message.cropData} compact />
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 px-6 py-4 rounded-2xl shadow-lg border border-gray-200">
              <div className="flex items-center gap-2">
                <Sprout className="w-5 h-5 text-green-600" />
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length <= 2 && (
        <div className={`${compact ? 'px-3 py-2' : 'px-6 py-3'} border-t border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50`}>
          <p className={`${compact ? 'text-xs' : 'text-sm'} text-gray-600 mb-2 font-medium`}>Quick questions:</p>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Most profitable crops',
              'Water-efficient crops', 
              'Quick growing crops',
              'Seasonal guide',
              'Low investment crops'
            ].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setInputMessage(suggestion)}
                className={`${compact ? 'px-2 py-1 text-[10px]' : 'px-3 py-1.5 text-xs'} bg-white border border-green-200 text-green-700 rounded-full hover:bg-green-50 hover:border-green-300 transition-colors duration-200`}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={`${compact ? 'p-3' : 'p-6'} border-t border-gray-100 bg-gray-50`}>
        <div className={`flex ${compact ? 'gap-2' : 'gap-3'}`}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={compact ? "Ask about crops..." : "Ask about crops, farming tips, or seasonal advice..."}
            className={`flex-1 ${compact ? 'px-3 py-2 text-sm' : 'px-6 py-3'} border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all duration-200`}
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className={`${compact ? 'px-3 py-2' : 'px-6 py-3'} bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg`}
          >
            <Send className={`${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;