import React, { useState, useEffect, useRef } from 'react';
import { Bot, Send, User, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/gemini';

const AiConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello. I am your clinical assistant. Describe your patient case, and I will help you reason through pharmacotherapy options.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini([...messages, userMsg], input);
      const modelMsg: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I am unable to connect at this moment.",
        isError: true 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] mx-auto max-w-5xl overflow-hidden border border-stone-200">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm p-6 border-b border-stone-100 flex items-center justify-between z-10">
        <div className="flex items-center">
          <div className="bg-[#1A2521] text-[#FAF8F5] p-2 rounded-full mr-4">
            <Sparkles size={18} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="font-normal text-[#1A2521] tracking-tight text-lg">Consultant</h2>
            <p className="text-xs text-stone-400 font-light tracking-wide">Powered by Gemini 3</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAF9]">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`
              max-w-[85%] sm:max-w-[75%] px-6 py-4 text-sm font-light leading-relaxed tracking-wide shadow-sm
              ${msg.role === 'user' 
                ? 'bg-[#1A2521] text-[#FAF8F5] rounded-[2rem] rounded-br-none border border-[#1A2521]' 
                : msg.isError 
                  ? 'bg-stone-200 text-[#1A2521] rounded-[2rem] rounded-bl-none border border-stone-300'
                  : 'bg-white text-stone-700 rounded-[2rem] rounded-bl-none border border-stone-200'}
            `}>
              <div className="markdown-prose whitespace-pre-wrap">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="bg-white rounded-[2rem] rounded-bl-none px-6 py-4 shadow-sm border border-stone-200">
                <div className="flex space-x-1.5">
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-150"></div>
                </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-6 bg-white border-t border-stone-100">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your clinical question..."
            className="w-full pl-6 pr-14 py-4 bg-stone-50 border border-stone-100 rounded-[1.5rem] focus:bg-white focus:shadow-md focus:border-[#1A2521]/20 outline-none resize-none h-16 text-sm font-light text-stone-700 transition-all placeholder:text-stone-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 top-3 p-2.5 bg-[#1A2521] text-white rounded-full hover:bg-stone-800 transition-all disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
          >
            <Send size={16} strokeWidth={2} />
          </button>
        </div>
        <p className="text-center text-[10px] text-stone-300 mt-3 font-light tracking-widest uppercase">
          Verify with clinical guidelines
        </p>
      </div>
    </div>
  );
};

export default AiConsultant;