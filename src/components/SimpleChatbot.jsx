import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const SimpleChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! 🙏 How can I help you with Nepal tours?' }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getResponse = (msg) => {
    const lower = msg.toLowerCase();
    
    if (lower.includes('paragliding')) return 'Paragliding in Pokhara is amazing! Best time: Oct-Nov & Mar-Apr. Cost: $80-100. Duration: 30 mins. Contact us for booking!';
    if (lower.includes('trek') || lower.includes('everest')) return 'Popular treks: Everest Base Camp (12-14 days), Annapurna Circuit (15-20 days), Langtang Valley (7-10 days). Best season: Spring & Autumn!';
    if (lower.includes('bungee')) return 'Bungee jumping at Kushma (228m) - World\'s 2nd highest! Cost: $100-120. Minimum age: 18. Pure adrenaline rush!';
    if (lower.includes('price') || lower.includes('cost')) return 'Prices vary by package. Trekking: $800-2000, Adventure sports: $80-150. Contact us for detailed quotes!';
    if (lower.includes('best time') || lower.includes('when')) return 'Best time to visit Nepal: Oct-Nov (Autumn) & Mar-Apr (Spring). Clear skies, perfect weather!';
    if (lower.includes('visa')) return 'Tourist visa available on arrival at Kathmandu airport. 15 days: $30, 30 days: $50. Easy process!';
    if (lower.includes('contact') || lower.includes('book')) return 'Contact us: +977-9876543210 | Email: info@nepaltours.com | WhatsApp available!';
    
    return 'I can help with: Trekking, Paragliding, Bungee Jumping, Tour Packages, Best time to visit, Visa info. What would you like to know?';
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: getResponse(userMsg) }]);
    }, 500);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 shadow-lg z-50 transition-all hover:scale-110"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-bold">Nepal Travel Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1">
              <X size={20} />
            </button>
          </div>

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
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t bg-white rounded-b-2xl">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about Nepal tours..."
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={sendMessage}
                disabled={!input.trim()}
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

export default SimpleChatbot;
