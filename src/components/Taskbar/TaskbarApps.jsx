import { useState } from 'react';
import useWindowStore from '../../store/windowStore';
import useTaskbarStore from '../../store/taskbarStore';
import { GitHubIcon, VSCodeIcon, FigmaIcon, EdgeIcon } from '../Icons';

/**
 * TaskbarApps Component
 * Displays pinned taskbar applications and quick actions
 * @module components/Taskbar/TaskbarApps
 */
const TaskbarApps = () => {
  const [searchValue, setSearchValue] = useState('');
  const openWindows = useWindowStore((state) => state.openWindows);
  const { restoreWindow, setActiveWindow, openWindow } = useWindowStore();
  const { isSearchOpen, toggleSearch } = useTaskbarStore();

  /**
   * Handle window click - restore if minimized, activate if already open
   * @param {Object} window - Window object
   */
  const handleWindowClick = (window) => {
    if (window.isMinimized) {
      restoreWindow(window.id);
    } else {
      setActiveWindow(window.id);
    }
  };

  return (
    <>
    <div className="flex items-center gap-0">
      {/* Search Button */}
      <button 
        className="h-10 w-10 flex items-center justify-center hover:bg-white/8 transition-all rounded-lg mx-0.5" 
        title="Search"
        aria-label="Search"
        onClick={toggleSearch}
      >
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 16 16" 
          className="text-white/80"
          aria-hidden="true"
        >
          <circle cx="7" cy="7" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M11 11 L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      
      <div className="w-px h-5 bg-white/10 mx-2" aria-hidden="true"></div>
      
      {/* Microsoft Edge */}
      <button 
        className="h-10 w-10 flex items-center justify-center hover:bg-white/8 transition-all rounded-lg mx-0.5" 
        title="Microsoft Edge"
        aria-label="Open Microsoft Edge"
        onClick={() => {
          openWindow('edge', 'Microsoft Edge', () => (
            <div className="h-full flex flex-col bg-[#1e1e1e]">
              <div className="bg-[#2d2d2d] border-b border-[#3c3c3c] p-3 flex items-center gap-2">
                <input 
                  type="text" 
                  defaultValue="https://github.com/harshvardhan" 
                  className="flex-1 px-3 py-1.5 bg-[#3c3c3c] border border-[#555] rounded text-sm text-white focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <h2 className="text-3xl font-semibold mb-4 text-white">Welcome to Edge</h2>
                  <p className="text-gray-400 mb-4">A fast and secure browser</p>
                  <div className="flex gap-4 justify-center">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">GitHub</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          ), '🌐');
        }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/Microsoft_Edge_logo_%282019%29.svg" 
          alt="Microsoft Edge" 
          className="w-7 h-7"
        />
      </button>
      
      {/* Google Chrome */}
      <button 
        className="h-10 w-10 flex items-center justify-center hover:bg-white/8 transition-all rounded-lg mx-0.5" 
        title="Google Chrome"
        aria-label="Open Google Chrome"
        onClick={() => {
          const chromeApp = document.querySelector('[data-app-id="chrome"]');
          if (chromeApp) {
            chromeApp.click();
            setTimeout(() => chromeApp.click(), 50);
          }
        }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg" 
          alt="Google Chrome" 
          className="w-6 h-6"
        />
      </button>
      
      {/* VSCode */}
      <button 
        className="h-10 w-10 flex items-center justify-center hover:bg-white/8 transition-all rounded-lg mx-0.5" 
        title="Visual Studio Code"
        aria-label="Open Visual Studio Code"
        onClick={() => {
          const vscodeApp = document.querySelector('[data-app-id="vscode-desktop"]');
          if (vscodeApp) {
            vscodeApp.click();
            setTimeout(() => vscodeApp.click(), 50);
          }
        }}
      >
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" 
          alt="Visual Studio Code" 
          className="w-6 h-6"
        />
      </button>
      
      {/* File Explorer */}
      <button 
        className="h-10 w-10 flex items-center justify-center hover:bg-white/8 transition-all rounded-lg mx-0.5" 
        title="File Explorer"
        aria-label="Open File Explorer"
      >
        <svg width="24" height="24" viewBox="0 0 20 20" className="text-yellow-500" aria-hidden="true">
          <path d="M2 4 L8 4 L10 6 L18 6 L18 16 L2 16 Z" fill="#FFC83D" stroke="#F59E0B" strokeWidth="1" />
        </svg>
      </button>

      {/* Open Windows */}
      {openWindows.map((window) => (
        <button
          key={window.id}
          onClick={() => handleWindowClick(window)}
          className="h-11 w-11 flex items-center justify-center transition-all relative rounded-lg mx-0.5 hover:bg-white/8"
          title={window.title}
          aria-label={`${window.title} - ${window.isMinimized ? 'Minimized' : 'Active'}`}
        >
          <span className="text-lg" aria-hidden="true">{window.icon || '📁'}</span>
          {!window.isMinimized && (
            <div 
              className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-500 rounded-full" 
              aria-hidden="true"
            />
          )}
        </button>
      ))}
    </div>
    
    {/* Search Panel Popup */}
    {isSearchOpen && (
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-[680px] rounded-2xl shadow-2xl z-50 overflow-hidden border border-white/20"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255,255,255,0.1)',
          background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.92) 0%, rgba(17, 24, 39, 0.95) 100%)',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)'
        }}>
        <div className="p-6">
          {/* Search Input */}
          <div className="relative mb-6">
            <div className="w-full h-12 px-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3 backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-400">
                <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11.5 11.5 L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Type here to search..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
                autoFocus
              />
            </div>
          </div>
          
          {/* Top apps */}
          <div className="mb-4">
            <h3 className="text-[11px] text-white/80 mb-3 font-medium">Top apps</h3>
            <div className="grid grid-cols-5 gap-3">
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-all">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 128 128">
                    <path fill="#0078d4" d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"/>
                  </svg>
                </div>
                <span className="text-[10px] text-white/85">Bash</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-all">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center scale-110">
                  <GitHubIcon />
                </div>
                <span className="text-[10px] text-white/85">GitHub</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-all">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center scale-110">
                  <VSCodeIcon />
                </div>
                <span className="text-[10px] text-white/85">VSCode</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-all">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center scale-110">
                  <FigmaIcon />
                </div>
                <span className="text-[10px] text-white/85">Figma</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg transition-all">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center scale-110">
                  <EdgeIcon />
                </div>
                <span className="text-[10px] text-white/85">Edge</span>
              </button>
            </div>
          </div>
          
          {/* Quick searches */}
          <div>
            <h3 className="text-[11px] text-white/80 mb-3 font-medium">Quick searches</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-all text-left">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-white/80">
                  <circle cx="10" cy="8" r="3" fill="currentColor" />
                  <path d="M10 1 V3 M10 13 V15 M16 8 H18 M2 8 H4 M15 3 L13.5 4.5 M6.5 11.5 L5 13 M15 13 L13.5 11.5 M6.5 4.5 L5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M4 16 C4 16 4 14 6 14 C6 13 7 12 8 12 C9 12 10 13 10 14 C10 13 11 12 12 12 C13 12 14 13 14 14 C16 14 16 16 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-white">Weather</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-all text-left">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-white/80">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6 L10 10 L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <span className="text-sm text-white">Today in history</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-all text-left">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-white/80">
                  <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M10 6 C10 6 14 8 14 10 C14 12 10 14 10 14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                </svg>
                <span className="text-sm text-white">Latest React reads</span>
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-lg transition-all text-left">
                <svg width="20" height="20" viewBox="0 0 20 20" className="text-white/80">
                  <path d="M10 2 L12 8 L18 8 L13 12 L15 18 L10 14 L5 18 L7 12 L2 8 L8 8 Z" fill="currentColor"/>
                </svg>
                <span className="text-sm text-white">Next.js rocks!</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default TaskbarApps;
