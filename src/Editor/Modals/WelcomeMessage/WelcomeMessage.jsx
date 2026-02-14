import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Code2, 
  Target, 
  Bug, 
  Heart, 
  X, 
  ExternalLink,
  ChevronRight,
  Play,
  Layers,
  Palette
} from 'lucide-react';

/**
 * Animated Welcome Modal with Cartoon Styles
 * - Features a dynamic "Cartoon Type" selector on the left.
 * - Visualizes different animation styles: Classic, Modern, Anime, and Pixel.
 */

const WelcomeModal = ({ isOpen, toggle, editorVersion = "2.5.1" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStyle, setActiveStyle] = useState('Classic');

  const forumLink = "https://forms.gle/LzTbuEQWHv4SEAec6";
  const changelogLink = "https://docs.google.com/document/d/1kOgftjvsVwC5XY1Dbu9r68iRkK7rytusX1zWFzE-1yA/edit?usp=sharing";
  
  const updates = [
    { title: "New Asset Library", icon: <Layers size={16} /> },
    { title: "Cartoon Rigging Tools", icon: <Palette size={16} /> },
    { title: "Performance Upgrade", icon: <Sparkles size={16} /> },
  ];

  const cartoonTypes = [
    { name: 'Classic', color: 'bg-amber-400', border: 'border-black', radius: 'rounded-full' },
    { name: 'Modern', color: 'bg-cyan-400', border: 'border-white', radius: 'rounded-2xl' },
    { name: 'Anime', color: 'bg-rose-400', border: 'border-rose-200', radius: 'rounded-tr-3xl rounded-bl-3xl' },
    { name: 'Pixel', color: 'bg-emerald-500', border: 'border-emerald-900', radius: 'rounded-none' }
  ];

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') toggle(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [toggle]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 10);
      // Auto-rotate styles for the demo
      const interval = setInterval(() => {
        setActiveStyle(prev => {
          const idx = cartoonTypes.findIndex(t => t.name === prev);
          return cartoonTypes[(idx + 1) % cartoonTypes.length].name;
        });
      }, 2000);
      return () => clearInterval(interval);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentType = cartoonTypes.find(t => t.name === activeStyle);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 font-sans">
      <style>{`
        @keyframes playhead {
          0% { left: 10%; }
          100% { left: 90%; }
        }
        @keyframes character-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .grid-bg {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
        }
      `}</style>

      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggle}
      />

      {/* Modal Container */}
      <div className={`relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        
        {/* Close Button */}
        <button onClick={toggle} className="absolute top-3 right-3 z-30 p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
          <X size={18} className="text-slate-400" />
        </button>

        {/* Left Side: Animation & Style Simulator */}
        <div className="w-full md:w-2/5 bg-slate-900 p-6 flex flex-col justify-between text-white relative overflow-hidden border-r border-white/5">
          <div className="absolute inset-0 grid-bg opacity-40" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4">
              <h1 className="text-xl font-black tracking-tight mb-1 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                2D Scene
              </h1>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Cartoon Engine</p>
            </div>

            {/* Style Selector Preview */}
            <div className="flex gap-1.5 mb-4 p-1.5 bg-white/5 rounded-lg border border-white/10">
              {cartoonTypes.map((t) => (
                <button 
                  key={t.name}
                  onClick={() => setActiveStyle(t.name)}
                  className={`flex-1 py-1 text-[9px] font-bold rounded transition-all ${activeStyle === t.name ? 'bg-indigo-500 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
                >
                  {t.name}
                </button>
              ))}
            </div>

            {/* Visual Workspace Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
              <div className="absolute top-2 left-2 text-[9px] font-mono text-indigo-400 opacity-50">PREVIEW_MODE: {activeStyle.toUpperCase()}</div>
              
              {/* Dynamic Animated Character */}
              <div 
                className={`w-16 h-16 ${currentType.color} ${currentType.radius} border-4 ${currentType.border} shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-500 flex items-center justify-center`}
                style={{ animation: 'character-bounce 2s ease-in-out infinite' }}
              >
                {/* Character Face based on style */}
                <div className="flex flex-col gap-1 w-full px-2">
                   <div className="flex justify-around">
                      <div className={`w-2 h-2 ${activeStyle === 'Anime' ? 'h-3 w-1 bg-white' : 'bg-slate-900'} rounded-full`} />
                      <div className={`w-2 h-2 ${activeStyle === 'Anime' ? 'h-3 w-1 bg-white' : 'bg-slate-900'} rounded-full`} />
                   </div>
                   <div className={`mx-auto h-1 w-4 ${activeStyle === 'Classic' ? 'rounded-full' : ''} bg-slate-900/40`} />
                </div>
              </div>
              
              {/* Floor Shadow */}
              <div className="w-12 h-2 bg-black/40 rounded-[100%] blur-sm mt-4 animate-pulse" />
            </div>

            {/* Mini Timeline UI */}
            <div className="mt-4 bg-slate-800/80 rounded-lg p-2 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2">
                <Play size={10} className="fill-emerald-400 text-emerald-400" />
                <div className="h-1 flex-1 bg-slate-700 rounded-full relative overflow-hidden">
                  <div 
                    className="absolute top-0 bottom-0 w-1 bg-indigo-400 z-10 shadow-[0_0_5px_cyan]"
                    style={{ animation: 'playhead 3s linear infinite' }}
                  />
                </div>
              </div>
              <div className="flex justify-between text-[8px] text-slate-500 font-mono">
                <span>STYLE_TRANSITION</span>
                <span>SYNC: OK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-3/5 p-8 flex flex-col bg-white dark:bg-slate-900">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2 leading-tight">
              Ready to animate?
              <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 font-mono font-medium border border-indigo-100 dark:border-indigo-800">
                v{editorVersion}
              </span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">Unleash your creativity with professional cartoon tools.</p>
          </div>

          {/* Updates List */}
          <div className="space-y-3 mb-8">
            {updates.map((update, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all cursor-default group">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                  {update.icon}
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">{update.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Supporters Section */}
          <div className="mb-8 border-t border-slate-100 dark:border-slate-800 pt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-bold uppercase tracking-tighter text-slate-400 flex items-center gap-1.5">
                <Heart size={12} className="text-rose-500 fill-rose-500" /> Community Built
              </span>
              <a href="#" className="text-[10px] text-indigo-600 font-bold hover:underline">Support on Patreon</a>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              Empowering creators with 100% free and open-source animation technology.
            </p>
          </div>

          {/* Footer Actions */}
          <div className="mt-auto flex items-center justify-between">
            <a href={forumLink} target="_blank" rel="noreferrer" className="text-xs text-slate-400 hover:text-slate-600 font-medium flex items-center gap-2 transition-colors">
              <Bug size={14} /> Report Bug
            </a>
            
            <button 
              onClick={toggle}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              Start Drawing <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)} 
          className="px-6 py-3 bg-white shadow-lg rounded-xl font-bold hover:bg-slate-50 transition-all"
        >
          Open Welcome Screen
        </button>
      )}
      <WelcomeModal isOpen={isOpen} toggle={() => setIsOpen(false)} editorVersion="2.5.1" />
    </div>
  );
}