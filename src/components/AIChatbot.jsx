import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';

const API_KEY = 'AIzaSyDlz84Q65ezjz3RuMSiiN_vAl_8Wx8CAJ4';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! 🙏 How can I help you with Nepal tours and adventures?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [useAI, setUseAI] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getFallbackResponse = (msg) => {
    const lower = msg.toLowerCase();
    
    // Greetings
    if (lower.match(/^(hi|hello|hey|namaste|hola)$/)) {
      return 'Hello! 👋 Welcome to Nepal Tours & Travels! I can help you with:\n\n🏔️ Trekking (EBC, Annapurna)\n🪂 Paragliding in Pokhara\n🎢 Bungee Jumping\n🚁 Helicopter Tours\n🚴 Mountain Biking\n📅 Best time to visit\n✈️ Visa information\n💰 Package pricing\n\nWhat would you like to know?';
    }
    
    if (lower.includes('paragliding')) return '🪂 Paragliding in Pokhara is amazing!\n\n📍 Location: Sarangkot, Pokhara\n💰 Cost: $80-100\n⏱️ Duration: 30 minutes\n📅 Best time: Oct-Nov & Mar-Apr\n\nContact us for booking: +977-9876543210';
    
    if (lower.includes('trek') || lower.includes('everest')) return '🏔️ Popular Trekking Routes:\n\n1. Everest Base Camp (12-14 days) - $1200-1500\n2. Annapurna Circuit (15-20 days) - $800-1200\n3. Langtang Valley (7-10 days) - $600-800\n\n📅 Best season: Spring (Mar-May) & Autumn (Sep-Nov)\n\nReady to book? Contact us!';
    
    if (lower.includes('bungee')) return '🎢 Bungee Jumping - Ultimate Thrill!\n\n📍 Location: Kushma (228m - World\'s 2nd highest!)\n💰 Cost: $100-120\n👤 Minimum age: 18 years\n⚡ Pure adrenaline rush guaranteed!\n\nBook now: +977-9876543210';
    
    if (lower.includes('price') || lower.includes('cost')) return '💰 Package Pricing:\n\n🏔️ Trekking: $800-2000\n🪂 Adventure sports: $80-150\n🚁 Helicopter tours: $1000-1200\n🏨 Hotel packages: $50-200/night\n\nContact us for detailed quotes and custom packages!';
    
    if (lower.includes('best time') || lower.includes('when')) return '📅 Best Time to Visit Nepal:\n\n🍂 Autumn (Oct-Nov): Clear skies, perfect trekking\n🌸 Spring (Mar-Apr): Blooming rhododendrons, warm weather\n\n❄️ Winter (Dec-Feb): Cold but clear mountain views\n🌧️ Monsoon (Jun-Aug): Rainy, not recommended for trekking';
    
    if (lower.includes('visa')) return '✈️ Nepal Visa Information:\n\n📍 Available on arrival at Kathmandu airport\n💰 15 days: $30\n💰 30 days: $50\n💰 90 days: $125\n\n📝 Requirements: Passport, photo, visa form\nVery easy process!';
    
    if (lower.includes('contact') || lower.includes('book')) return '📞 Contact Us:\n\n☎️ Phone: +977-9876543210\n📧 Email: info@nepaltours.com\n💬 WhatsApp: Available\n🌐 Website: www.nepaltours.com\n\nWe\'re here to help 24/7!';
    
    if (lower.includes('helicopter')) return '🚁 Mountain Helicopter Tours:\n\n📍 Everest Base Camp (4-5 hours)\n💰 Cost: $1000-1200 per person\n👁️ Breathtaking aerial views of Himalayas\n🏔️ Land at Kala Patthar\n\nOnce in a lifetime experience!';
    
    if (lower.includes('bike') || lower.includes('biking')) return '🚴 Mountain Biking Adventures:\n\n📍 Kathmandu Valley Rim\n📍 Upper Mustang\n📍 Annapurna Circuit\n\n💪 Difficulty: Moderate to High\n💰 Bike rental: $20-40/day\n🎒 Guided tours available\n\nPerfect for adventure seekers!';
    
    return '🙏 I can help you with:\n\n🏔️ Trekking & Hiking\n🪂 Paragliding\n🎢 Bungee Jumping\n🚁 Helicopter Tours\n🚴 Mountain Biking\n📦 Tour Packages\n📅 Best time to visit\n✈️ Visa information\n💰 Pricing\n\nJust ask me anything about Nepal tourism!';
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    if (useAI) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{
                parts: [{
                  text: `You are a helpful travel assistant for Nepal Tours and Travels website. Use this information to answer questions:

OUR SERVICES:
- Paragliding in Pokhara/Sarangkot: $80-100, 30 mins, Best: Oct-Nov & Mar-Apr
- Mountain Helicopter Tours: Everest/Annapurna Base Camp, $1000-1200, 4-5 hours
- Bungee Jumping: Kushma/Pokhara, 228m height, $100-120, Min age: 18
- Trekking: Everest Base Camp (12-14 days), Annapurna Circuit (15-20 days), Langtang Valley (7-10 days)
- Hiking: Nagarkot, Shivapuri - Day hikes through forests and villages
- Mountain Biking: Kathmandu Valley Rim, Mustang - Moderate to High difficulty
- Nepal Bike Riding: Upper Mustang, Manang - Epic motorcycle road trips

PRICING:
- Trekking packages: $800-2000
- Adventure sports: $80-150
- Helicopter tours: $1000-1200
- Hotel packages: $50-200/night

BEST TIME TO VISIT:
- Autumn (Oct-Nov): Clear skies, perfect trekking
- Spring (Mar-Apr): Blooming rhododendrons, warm weather

VISA INFO:
- Available on arrival at Kathmandu airport
- 15 days: $30, 30 days: $50, 90 days: $125

CONTACT:
- Phone: +977-9876543210
- Email: info@nepaltours.com
- WhatsApp available

User question: ${userMessage}

Provide helpful, concise answers based on our services. If asked about booking, provide contact details.`
                }]
              }]
            })
          }
        );

        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.candidates && data.candidates[0]) {
          const text = data.candidates[0].content.parts[0].text;
          setMessages(prev => [...prev, { role: 'bot', text }]);
        } else {
          throw new Error('API failed');
        }
      } catch (error) {
        console.error('Full API Error:', error);
        console.log('AI failed, using fallback');
        setUseAI(false);
        const fallbackText = getFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
      }
    } else {
      setTimeout(() => {
        const fallbackText = getFallbackResponse(userMessage);
        setMessages(prev => [...prev, { role: 'bot', text: fallbackText }]);
      }, 500);
    }
    
    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-bold">Nepal Travel Assistant</h3>
                <p className="text-xs opacity-90">Powered by AI</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-orange-500 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm">
                  <Loader2 size={20} className="animate-spin text-orange-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about Nepal tours..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white rounded-full p-2 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
