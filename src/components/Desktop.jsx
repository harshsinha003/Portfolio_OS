import React from 'react';
import DesktopIcon from './DesktopIcon';
import AboutApp from '../apps/AboutApp';
import ProjectsApp from '../apps/ProjectsApp';
import SkillsApp from '../apps/SkillsApp';
import ContactApp from '../apps/ContactApp';
import ResumeApp from '../apps/ResumeApp';
import { 
  ChromeIcon, 
  VSCodeIcon, 
  VLCIcon, 
  SteamIcon, 
  WordIcon, 
  FolderIcon,
  AboutIcon,
  ProjectsIcon,
  SkillsIcon,
  ContactIcon,
  ResumeIcon,
  ThisPCIcon,
  RecycleIcon,
  WhatsAppIcon,
  TelegramIcon,
  Windows11Icon,
  GitHubIcon,
  DockerIcon,
  UnityIcon,
  PhotoshopIcon,
  SpotifyIcon
} from './Icons';

const Desktop = ({ onStartClick }) => {
  const desktopApps = [
    { id: 'about', title: 'About Me', icon: <AboutIcon />, component: AboutApp },
    { id: 'projects', title: 'My Projects', icon: <ProjectsIcon />, component: ProjectsApp },
    { id: 'skills', title: 'Skills', icon: <SkillsIcon />, component: SkillsApp },
    { id: 'contact', title: 'Contact Me', icon: <ContactIcon />, component: ContactApp },
    { id: 'resume', title: 'Resume', icon: <ResumeIcon />, component: ResumeApp },
    { 
      id: 'chrome', 
      title: 'Google Chrome', 
      icon: <ChromeIcon />,
      component: () => {
        const [searchQuery, setSearchQuery] = React.useState('');
        const [searchResults, setSearchResults] = React.useState([]);
        const [isSearching, setIsSearching] = React.useState(false);

        const handleSearch = (e) => {
          e.preventDefault();
          if (searchQuery.trim()) {
            setIsSearching(true);
            // Simulate search results
            const mockResults = [
              { title: 'React Documentation', url: 'https://react.dev', description: 'Learn React - The library for web and native user interfaces' },
              { title: 'MDN Web Docs', url: 'https://developer.mozilla.org', description: 'Resources for developers, by developers' },
              { title: 'GitHub', url: 'https://github.com', description: 'Where the world builds software' },
              { title: 'Stack Overflow', url: 'https://stackoverflow.com', description: 'Where Developers Learn, Share, & Build Careers' },
              { title: `${searchQuery} - Wikipedia`, url: `https://en.wikipedia.org/wiki/${searchQuery}`, description: 'Wikipedia article about ' + searchQuery },
            ];
            setTimeout(() => setSearchResults(mockResults), 300);
          }
        };

        return (
          <div className="h-full flex flex-col bg-[#202124]">
            {/* Tab Bar */}
            <div className="bg-[#35363a] flex items-end px-2 pt-2">
              <div className="bg-[#202124] rounded-t-lg px-4 py-2 flex items-center gap-3 min-w-[200px]">
                <ChromeIcon className="w-4 h-4" />
                <span className="text-gray-300 text-sm flex-1">{isSearching ? 'Search Results' : 'New Tab'}</span>
                <button className="text-gray-400 hover:text-gray-200 text-lg leading-none">×</button>
              </div>
              <button className="ml-2 w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400 mb-1">+</button>
              <div className="flex-1"></div>
            </div>
            {/* Address Bar */}
            <div className="bg-[#202124] px-3 py-2 border-b border-[#3c4043] flex items-center gap-2">
              <button className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400">←</button>
              <button className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400">→</button>
              <button className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400">↻</button>
              <form onSubmit={handleSearch} className="flex-1">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#303134] rounded-full hover:bg-[#3c4043]">
                  <span className="text-gray-400 text-sm">🔒</span>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Google or type a URL"
                    className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
                  />
                  <span className="text-gray-400">⭐</span>
                </div>
              </form>
              <button className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400">👤</button>
              <button className="w-8 h-8 hover:bg-white/10 rounded-full flex items-center justify-center text-gray-400">⋮</button>
            </div>
            {/* Bookmarks Bar */}
            <div className="bg-[#202124] px-3 py-2 border-b border-[#3c4043] flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-white/10 rounded cursor-pointer">
                <span className="text-xs">📁</span>
                <span className="text-gray-300">Bookmarks</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-white/10 rounded cursor-pointer">
                <span className="text-xs">💻</span>
                <span className="text-gray-300">GitHub</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-white/10 rounded cursor-pointer">
                <span className="text-xs">💼</span>
                <span className="text-gray-300">LinkedIn</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 hover:bg-white/10 rounded cursor-pointer">
                <span className="text-xs">📧</span>
                <span className="text-gray-300">Gmail</span>
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 bg-[#202124] overflow-auto">
              {isSearching && searchResults.length > 0 ? (
                /* Search Results Page */
                <div className="max-w-3xl mx-auto pt-8 px-6">
                  {/* Search Stats */}
                  <div className="text-sm text-gray-500 mb-6">About {searchResults.length} results (0.45 seconds)</div>
                  {/* Results */}
                  <div className="space-y-8">
                    {searchResults.map((result, idx) => (
                      <div key={idx} className="group cursor-pointer">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-xs">🌐</div>
                          <div className="text-sm">
                            <div className="text-gray-400">{result.url}</div>
                          </div>
                        </div>
                        <h3 className="text-xl text-[#8ab4f8] group-hover:underline mb-1">{result.title}</h3>
                        <p className="text-sm text-gray-400">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* New Tab Page */
                <div className="max-w-4xl mx-auto pt-20 px-6">
                  {/* Google Search */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 mb-8">
                      <ChromeIcon className="w-16 h-16" />
                      <h1 className="text-7xl font-light text-gray-200">Google</h1>
                    </div>
                    <div className="max-w-2xl mx-auto">
                      <form onSubmit={handleSearch}>
                        <div className="flex items-center gap-3 px-6 py-3 bg-[#303134] rounded-full hover:bg-[#3c4043] transition-colors border border-[#5f6368]">
                          <span className="text-gray-400">🔍</span>
                          <input 
                            type="text" 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search Google or type a URL"
                            className="flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500"
                          />
                          <span className="text-gray-400">🎤</span>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Shortcuts */}
                  <div className="grid grid-cols-5 gap-6">
                    <div className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-[#303134] rounded-lg flex items-center justify-center text-2xl">📧</div>
                      <span className="text-gray-300 text-xs">Gmail</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-[#303134] rounded-lg flex items-center justify-center text-2xl">📺</div>
                      <span className="text-gray-300 text-xs">YouTube</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-[#303134] rounded-lg flex items-center justify-center text-2xl">🗺️</div>
                      <span className="text-gray-300 text-xs">Maps</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-[#303134] rounded-lg flex items-center justify-center text-2xl">▶️</div>
                      <span className="text-gray-300 text-xs">Play</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-3 hover:bg-white/10 rounded-lg cursor-pointer">
                      <div className="w-12 h-12 bg-[#303134] rounded-lg flex items-center justify-center text-2xl">📰</div>
                      <span className="text-gray-300 text-xs">News</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      }
    },
    { 
      id: 'vscode-desktop', 
      title: 'VS Code', 
      icon: <VSCodeIcon />,
      component: () => {
        const [activeFile, setActiveFile] = React.useState('Desktop.jsx');
        
        const fileContent = {
          'Desktop.jsx': `import React from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import { ChromeIcon, VSCodeIcon } from './Icons';

const Desktop = ({ onStartClick }) => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-blue-500 to-purple-600 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-16 py-8">
          <h2 className="text-2xl mb-2">Hi, I'm Harsh</h2>
          <h1 className="text-6xl font-bold mb-4">Welcome to</h1>
          <h1 className="text-6xl font-bold">My Portfolio</h1>
        </div>
      </div>
      
      {/* Desktop Icons Grid */}
      <div className="absolute top-4 left-4 grid gap-2">
        <DesktopIcon id="thispc" title="This PC" />
        <DesktopIcon id="chrome" title="Chrome" />
        <DesktopIcon id="vscode" title="VS Code" />
      </div>
    </div>
  );
};

export default Desktop;`,
          'App.jsx': `import React from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import './index.css';

function App() {
  const [isStartMenuOpen, setIsStartMenuOpen] = React.useState(false);
  
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Desktop onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)} />
      <Taskbar onStartClick={() => setIsStartMenuOpen(!isStartMenuOpen)} />
    </div>
  );
}

export default App;`,
          'Window.jsx': `import React from 'react';
import { useWindowStore } from '../store/windowStore';

const Window = ({ id, title, icon, children }) => {
  const { windows, minimizeWindow, closeWindow, setActiveWindow } = useWindowStore();
  const window = windows.find(w => w.id === id);
  
  if (!window?.isOpen || window.isMinimized) return null;
  
  return (
    <div className="absolute bg-white rounded-lg shadow-2xl overflow-hidden"
         style={{ 
           left: window.position.x, 
           top: window.position.y,
           width: window.size.width,
           height: window.size.height,
           zIndex: window.zIndex
         }}>
      {/* Title Bar */}
      <div className="bg-gray-100 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-sm">{title}</span>
        </div>
        <div className="flex gap-2">
          <button onClick={() => minimizeWindow(id)}>−</button>
          <button>□</button>
          <button onClick={() => closeWindow(id)}>×</button>
        </div>
      </div>
      {/* Content */}
      <div className="h-[calc(100%-40px)]">{children}</div>
    </div>
  );
};

export default Window;`,
          'Taskbar.jsx': `import React from 'react';
import { useWindowStore } from '../store/windowStore';

const Taskbar = ({ onStartClick }) => {
  const { windows, toggleWindow } = useWindowStore();
  const openWindows = windows.filter(w => w.isOpen);
  
  return (
    <div className="absolute bottom-0 w-full h-12 bg-white/10 backdrop-blur-md border-t border-white/20">
      <div className="h-full flex items-center px-2 gap-2">
        <button 
          onClick={onStartClick}
          className="w-10 h-10 bg-blue-600 rounded hover:bg-blue-700">
          ⊞
        </button>
        {openWindows.map(win => (
          <button 
            key={win.id}
            onClick={() => toggleWindow(win.id)}
            className="px-4 py-2 bg-white/20 rounded hover:bg-white/30">
            {win.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Taskbar;`,
          'index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #1e1e1e;
}

::-webkit-scrollbar-thumb {
  background: #424242;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4e4e4e;
}`
        };
        
        return (
          <div className="h-full flex bg-[#1e1e1e] text-gray-300">
            {/* Activity Bar */}
            <div className="w-12 bg-[#333333] border-r border-[#2d2d2d] flex flex-col items-center py-3 gap-4">
              <svg width="24" height="24" viewBox="0 0 16 16" className="opacity-80 hover:opacity-100 cursor-pointer">
                <path fill="currentColor" d="M14.5 1h-13l-.5.5v13l.5.5h13l.5-.5v-13l-.5-.5zM14 14H2V2h12v12z"/>
                <path fill="currentColor" d="M11 3H9v10h2V3zM8 3H6v10h2V3zM5 3H3v10h2V3z"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 16 16" className="opacity-60 hover:opacity-100 cursor-pointer">
                <path fill="currentColor" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 16 16" className="opacity-60 hover:opacity-100 cursor-pointer">
                <path fill="currentColor" d="M14.68 12.93l-1.53 1.53c-.32.32-.85.32-1.17 0l-3.98-3.98-3.98 3.98c-.32.32-.85.32-1.17 0l-1.53-1.53a.827.827 0 0 1 0-1.17L5.3 8l-3.98-3.98a.827.827 0 0 1 0-1.17l1.53-1.53c.32-.32.85-.32 1.17 0L8 5.3l3.98-3.98c.32-.32.85-.32 1.17 0l1.53 1.53c.32.32.32.85 0 1.17L10.7 8l3.98 3.98c.32.32.32.85 0 1.17v-.05z"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 16 16" className="opacity-60 hover:opacity-100 cursor-pointer">
                <path fill="currentColor" d="M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 16 16" className="opacity-60 hover:opacity-100 cursor-pointer">
                <path fill="currentColor" d="M2 2v12h12V2H2zm10.9 10.9H3.1V3.1h9.8v9.8z"/>
                <path fill="currentColor" d="M6 6v4h4V6H6z"/>
              </svg>
            </div>

            {/* Sidebar */}
            <div className="w-64 bg-[#252526] border-r border-[#2d2d2d] flex flex-col">
              <div className="p-2 text-xs text-gray-400 uppercase font-semibold border-b border-[#2d2d2d]">
                Explorer
              </div>
              <div className="flex-1 overflow-auto p-2">
                <div className="text-xs text-white mb-2">WEBSITE_PORTFOLIO</div>
                <div className="space-y-0.5 text-sm">
                  {/* src folder */}
                  <div className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                    <span className="text-xs">▼</span>
                    <span className="text-yellow-400">📁</span>
                    <span>src</span>
                  </div>
                  <div className="ml-4 space-y-0.5">
                    <div className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                      <span className="text-xs">▼</span>
                      <span className="text-yellow-400">📁</span>
                      <span>components</span>
                    </div>
                    <div className="ml-4 space-y-0.5">
                      <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5 bg-[#37373d]" onClick={() => setActiveFile('Desktop.jsx')}>
                        <span className="text-blue-400">⚛</span>
                        <span>Desktop.jsx</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5" onClick={() => setActiveFile('Window.jsx')}>
                        <span className="text-blue-400">⚛</span>
                        <span>Window.jsx</span>
                      </div>
                      <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5" onClick={() => setActiveFile('Taskbar.jsx')}>
                        <span className="text-blue-400">⚛</span>
                        <span>Taskbar.jsx</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5" onClick={() => setActiveFile('App.jsx')}>
                      <span className="text-blue-400">⚛</span>
                      <span>App.jsx</span>
                    </div>
                    <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5" onClick={() => setActiveFile('index.css')}>
                      <span className="text-blue-500">🎨</span>
                      <span>index.css</span>
                    </div>
                  </div>
                  {/* public folder */}
                  <div className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                    <span className="text-xs">▶</span>
                    <span className="text-yellow-400">📁</span>
                    <span>public</span>
                  </div>
                  {/* config files */}
                  <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                    <span className="text-green-400">📄</span>
                    <span>package.json</span>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                    <span className="text-orange-400">📄</span>
                    <span>vite.config.js</span>
                  </div>
                  <div className="flex items-center gap-2 hover:bg-white/5 cursor-pointer px-1 py-0.5">
                    <span className="text-blue-400">📄</span>
                    <span>tailwind.config.js</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="flex-1 flex flex-col">
              {/* Tab Bar */}
              <div className="bg-[#252526] border-b border-[#2d2d2d] flex items-center">
                <div className="px-4 py-2 bg-[#1e1e1e] border-r border-[#2d2d2d] text-sm flex items-center gap-2">
                  <span className="text-blue-400">⚛</span>
                  <span>{activeFile}</span>
                  <button className="ml-2 opacity-60 hover:opacity-100">×</button>
                </div>
              </div>
              
              {/* Code Editor */}
              <div className="flex-1 overflow-auto bg-[#1e1e1e] font-mono text-sm">
                <div className="flex">
                  <div className="text-gray-600 text-right pr-4 pl-4 select-none bg-[#1e1e1e] sticky left-0">
                    {fileContent[activeFile]?.split('\n').map((_, i) => (
                      <div key={i} className="leading-6">{i + 1}</div>
                    ))}
                  </div>
                  <div className="flex-1 px-4 py-2">
                    {fileContent[activeFile]?.split('\n').map((line, i) => (
                      <div key={i} className="leading-6 whitespace-pre">
                        {line.split(/(import|export|default|from|const|let|var|function|return|className|onClick)/g).map((part, j) => {
                          if (['import', 'export', 'default', 'from', 'const', 'let', 'var', 'function', 'return'].includes(part)) {
                            return <span key={j} className="text-[#C586C0]">{part}</span>;
                          }
                          if (part.includes('className') || part.includes('onClick')) {
                            return <span key={j} className="text-[#9CDCFE]">{part}</span>;
                          }
                          if (part.includes("'") || part.includes('"')) {
                            return <span key={j} className="text-[#CE9178]">{part}</span>;
                          }
                          return <span key={j}>{part}</span>;
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Bar */}
              <div className="bg-[#007acc] px-4 py-1 flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-4">
                  <span>⚡ LN 1, COL 1</span>
                  <span>Spaces: 2</span>
                  <span>UTF-8</span>
                  <span>JavaScript JSX</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>⚠ 0</span>
                  <span>🔔</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
    },
    { 
      id: 'vlc', 
      title: 'VLC Media Player', 
      icon: <VLCIcon />,
      component: () => (
        <div className="h-full flex flex-col bg-gray-900">
          <div className="bg-gray-800 p-2 flex items-center gap-2 border-b border-gray-700">
            <div className="flex gap-1">
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Media</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Playback</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Audio</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Video</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Subtitle</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Tools</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">View</button>
              <button className="px-3 py-1 hover:bg-gray-700 rounded text-white text-xs">Help</button>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-black">
            <div className="text-center">
              <div className="text-9xl mb-4">🎥</div>
              <p className="text-white text-xl mb-4">VLC Media Player</p>
              <p className="text-gray-400 text-sm mb-6">Drop media files here</p>
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">Open Media</button>
            </div>
          </div>
          <div className="bg-gray-800 p-3 flex items-center justify-center gap-4 border-t border-gray-700">
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">⏮</button>
            <button className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white text-xl">▶️</button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">⏭</button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">⏹</button>
            <div className="flex-1 mx-4">
              <input type="range" className="w-full" defaultValue="0" />
            </div>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">🔊</button>
            <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white">⛶</button>
          </div>
        </div>
      )
    },
    { 
      id: 'steam', 
      title: 'Steam', 
      icon: <SteamIcon />,
      component: () => (
        <div className="h-full flex flex-col bg-[#1b2838]">
          {/* Header */}
          <div className="bg-[#171a21] px-4 py-2 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <SteamIcon className="w-6 h-6" />
                <span className="font-semibold text-white">STEAM</span>
              </div>
              <button className="hover:text-white px-2 py-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded">STORE</button>
              <button className="hover:text-white">COMMUNITY</button>
              <button className="hover:text-white">LIBRARY</button>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="text" 
                placeholder="search"
                className="px-3 py-1 bg-[#2a475e] text-white text-sm rounded outline-none"
              />
              <span className="text-gray-400 text-sm">Harshvardhan</span>
              <button className="px-3 py-1 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm rounded font-medium">₹ 0.00</button>
            </div>
          </div>
          {/* Submenu */}
          <div className="bg-[#1b2838] px-4 py-2 flex items-center gap-4 text-sm text-gray-400 border-b border-gray-700">
            <button className="hover:text-white">Home</button>
            <button className="hover:text-white">Discovery Queue</button>
            <button className="hover:text-white">Wishlist</button>
            <button className="hover:text-white">Points Shop</button>
            <button className="hover:text-white">News</button>
            <button className="hover:text-white">Stats</button>
          </div>
          {/* Content */}
          <div className="flex-1 overflow-auto">
            <div className="p-6 space-y-6">
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">Featured & Recommended</h2>
                <div className="grid grid-cols-2 gap-4">
                  {/* Hitman Blood Money */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="relative h-52 bg-gradient-to-br from-red-900 to-black flex items-center justify-center overflow-hidden">
                      <div className="text-8xl">🎯</div>
                      <div className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">SPECIAL PROMOTION</div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">Hitman: Blood Money</h3>
                      <p className="text-gray-400 text-sm mb-3">Stealth action game with strategic assassination missions</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-blue-900 text-blue-300 text-xs rounded">Action</span>
                          <span className="px-2 py-0.5 bg-purple-900 text-purple-300 text-xs rounded">Stealth</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 line-through text-sm">₹ 499</span>
                          <span className="text-green-400 font-bold">₹ 149</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Counter-Strike 2 */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="h-52 bg-gradient-to-br from-orange-600 to-yellow-700 flex items-center justify-center">
                      <span className="text-8xl">🔫</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">Counter-Strike 2</h3>
                      <p className="text-gray-400 text-sm mb-3">Competitive 5v5 tactical shooter</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-orange-900 text-orange-300 text-xs rounded">FPS</span>
                          <span className="px-2 py-0.5 bg-red-900 text-red-300 text-xs rounded">Multiplayer</span>
                        </div>
                        <div className="text-green-400 font-bold">Free to Play</div>
                      </div>
                    </div>
                  </div>
                  {/* GTA V */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="h-52 bg-gradient-to-br from-green-800 to-black flex items-center justify-center">
                      <span className="text-8xl">🚗</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">Grand Theft Auto V</h3>
                      <p className="text-gray-400 text-sm mb-3">Open world action-adventure game</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-green-900 text-green-300 text-xs rounded">Action</span>
                          <span className="px-2 py-0.5 bg-yellow-900 text-yellow-300 text-xs rounded">Adventure</span>
                        </div>
                        <div className="text-white font-bold">₹ 1,999</div>
                      </div>
                    </div>
                  </div>
                  {/* Elden Ring */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="h-52 bg-gradient-to-br from-amber-700 to-gray-900 flex items-center justify-center">
                      <span className="text-8xl">⚔️</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">ELDEN RING</h3>
                      <p className="text-gray-400 text-sm mb-3">Epic action RPG adventure</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-amber-900 text-amber-300 text-xs rounded">RPG</span>
                          <span className="px-2 py-0.5 bg-red-900 text-red-300 text-xs rounded">Dark Fantasy</span>
                        </div>
                        <div className="text-white font-bold">₹ 2,999</div>
                      </div>
                    </div>
                  </div>
                  {/* Cyberpunk 2077 */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="h-52 bg-gradient-to-br from-cyan-500 to-pink-600 flex items-center justify-center">
                      <span className="text-8xl">🌃</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">Cyberpunk 2077</h3>
                      <p className="text-gray-400 text-sm mb-3">Futuristic open-world RPG</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-cyan-900 text-cyan-300 text-xs rounded">RPG</span>
                          <span className="px-2 py-0.5 bg-pink-900 text-pink-300 text-xs rounded">Sci-Fi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 line-through text-sm">₹ 2,999</span>
                          <span className="text-green-400 font-bold">₹ 1,499</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Portfolio Quest */}
                  <div className="bg-[#000000] rounded hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="h-52 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                      <span className="text-8xl">🎮</span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-blue-400">Portfolio Quest</h3>
                      <p className="text-gray-400 text-sm mb-3">Interactive journey through code and creativity</p>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-blue-900 text-blue-300 text-xs rounded">Indie</span>
                          <span className="px-2 py-0.5 bg-purple-900 text-purple-300 text-xs rounded">Adventure</span>
                        </div>
                        <div className="text-green-400 font-bold">Free to Play</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'word', 
      title: 'Microsoft Word', 
      icon: <WordIcon />,
      component: () => (
        <div className="h-full flex flex-col bg-white">
          {/* Title Bar */}
          <div className="bg-[#2B579A] text-white px-4 py-2 flex items-center gap-3">
            <WordIcon className="w-5 h-5" />
            <span className="text-sm font-semibold">Document1 - Word</span>
            <div className="flex-1"></div>
            <div className="flex gap-4 text-xs">
              <button className="hover:bg-white/10 px-2 py-1 rounded">Comments</button>
              <button className="hover:bg-white/10 px-2 py-1 rounded">Share</button>
            </div>
          </div>
          {/* Menu Ribbon */}
          <div className="bg-white border-b flex items-center px-3 text-sm">
            <button className="px-3 py-2 hover:bg-gray-100 rounded">File</button>
            <button className="px-3 py-2 bg-blue-50 border-b-2 border-blue-600 text-blue-600 font-medium">Home</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Insert</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Draw</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Design</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Layout</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">References</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Mailings</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Review</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">View</button>
            <button className="px-3 py-2 hover:bg-gray-100 rounded">Help</button>
          </div>
          {/* Formatting Toolbar */}
          <div className="bg-[#f3f3f3] border-b px-3 py-2 flex items-center gap-2">
            <div className="flex items-center gap-2">
              <select className="px-2 py-1 border bg-white rounded text-sm"><option>Calibri (Body)</option></select>
              <select className="px-2 py-1 border bg-white rounded text-sm w-16"><option>11</option></select>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <div className="flex gap-1">
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center text-xs font-bold">B</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center text-xs italic">I</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center text-xs underline">U</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center text-xs">abc</button>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <div className="flex gap-1">
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">🎨</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">✏️</button>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <div className="flex gap-1">
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">☰</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">☰</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">☰</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">☰</button>
            </div>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <div className="flex gap-1">
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">•</button>
              <button className="w-7 h-7 hover:bg-gray-200 rounded flex items-center justify-center">123</button>
            </div>
          </div>
          {/* Ruler */}
          <div className="bg-white border-b px-3 py-1 flex items-center text-xs text-gray-500">
            <div className="flex-1 flex">
              {[0,1,2,3,4,5,6,7].map(i => (
                <div key={i} className="flex-1 border-l border-gray-300 pl-1">{i}</div>
              ))}
            </div>
          </div>
          {/* Document Area */}
          <div className="flex-1 bg-[#f3f3f3] overflow-auto p-8">
            <div className="max-w-[8.5in] mx-auto bg-white shadow-md" style={{minHeight: '11in', padding: '1in'}}>
              {/* Blank document with blinking cursor */}
              <div className="relative">
                <span className="inline-block w-0.5 h-5 bg-black animate-pulse"></span>
              </div>
            </div>
          </div>
          {/* Status Bar */}
          <div className="bg-[#2B579A] text-white px-4 py-1 flex items-center text-xs">
            <span>Page 1 of 1</span>
            <div className="flex-1"></div>
            <span>Words: 0</span>
            <div className="w-px h-4 bg-white/30 mx-3"></div>
            <button className="hover:bg-white/10 px-2 py-0.5 rounded">100%</button>
          </div>
        </div>
      )
    },
    { 
      id: 'spotify', 
      title: 'Spotify', 
      icon: <SpotifyIcon />,
      component: () => {
        const [isPlaying, setIsPlaying] = React.useState(false);
        const [currentTime, setCurrentTime] = React.useState(45);
        const [volume, setVolume] = React.useState(70);
        const [currentSong, setCurrentSong] = React.useState(0);

        const playlist = [
          { id: 1, title: 'Blinding Lights', artist: 'The Weeknd', album: 'After Hours', duration: '3:20', coverColor: 'from-red-600 to-red-800' },
          { id: 2, title: 'Levitating', artist: 'Dua Lipa', album: 'Future Nostalgia', duration: '3:23', coverColor: 'from-pink-600 to-purple-800' },
          { id: 3, title: 'good 4 u', artist: 'Olivia Rodrigo', album: 'SOUR', duration: '2:58', coverColor: 'from-purple-600 to-blue-800' },
          { id: 4, title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', album: 'Stay', duration: '2:21', coverColor: 'from-yellow-600 to-orange-800' },
          { id: 5, title: 'Heat Waves', artist: 'Glass Animals', album: 'Dreamland', duration: '3:58', coverColor: 'from-orange-600 to-red-800' },
        ];

        const togglePlay = () => setIsPlaying(!isPlaying);

        return (
          <div className="h-full flex flex-col bg-[#121212]">
            <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-60 bg-black p-6 flex flex-col">
                <div className="mb-6">
                  <div className="w-32">
                    <SpotifyIcon />
                  </div>
                </div>
                
                <nav className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <a href="#" className="flex items-center gap-4 text-white hover:text-white transition-colors group">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33z"/>
                      </svg>
                      <span className="font-bold">Home</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 101.414-1.414l-4.344-4.344a9.157 9.157 0 002.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
                      </svg>
                      <span className="font-bold">Search</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-2a1 1 0 00-1 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6.464a1 1 0 01.5-.866l6-3.464a1 1 0 011 0z"/>
                      </svg>
                      <span className="font-bold">Your Library</span>
                    </a>
                  </div>

                  <div className="space-y-2 pt-4">
                    <a href="#" className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-blue-400 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"/>
                          <path d="M11.75 8a.75.75 0 01-.75.75H8.75V11a.75.75 0 01-1.5 0V8.75H5a.75.75 0 010-1.5h2.25V5a.75.75 0 011.5 0v2.25H11a.75.75 0 01.75.75z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">Create Playlist</span>
                    </a>
                    <a href="#" className="flex items-center gap-4 text-[#b3b3b3] hover:text-white transition-colors">
                      <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-sm flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">Liked Songs</span>
                    </a>
                  </div>
                </nav>

                <div className="mt-auto pt-4 border-t border-[#282828]">
                  <a href="#" className="flex items-center gap-2 text-[#b3b3b3] hover:text-white text-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 12.93A5.93 5.93 0 012.07 8 5.93 5.93 0 018 2.07 5.93 5.93 0 0113.93 8 5.93 5.93 0 018 13.93z"/>
                      <path d="M9.043 8.002c0 .23-.093.448-.259.614a.867.867 0 11-.002-1.229.867.867 0 01.26.615z"/>
                    </svg>
                    Install App
                  </a>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
                {/* Top Bar */}
                <div className="bg-[#121212]/90 backdrop-blur-md px-8 py-4 flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"/>
                      </svg>
                    </button>
                    <button className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-black">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-transform">
                      Upgrade
                    </button>
                    <button className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 12.93A5.93 5.93 0 012.07 8 5.93 5.93 0 018 2.07 5.93 5.93 0 0113.93 8 5.93 5.93 0 018 13.93z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-auto px-8 py-6">
                  <h1 className="text-white text-4xl font-bold mb-6">Good evening</h1>
                  
                  {/* Quick Play Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {playlist.slice(0, 6).map((song, idx) => (
                      <div key={song.id} className="bg-[#ffffff0a] hover:bg-[#ffffff14] rounded flex items-center gap-4 overflow-hidden cursor-pointer group transition-colors">
                        <div className={`w-20 h-20 bg-gradient-to-br ${song.coverColor} flex items-center justify-center text-white font-bold text-2xl flex-shrink-0`}>
                          {song.title[0]}
                        </div>
                        <span className="text-white font-semibold pr-4">{song.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Made for You Section */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-white text-2xl font-bold">Made For You</h2>
                      <a href="#" className="text-[#b3b3b3] hover:text-white text-sm font-bold">Show all</a>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {playlist.map((song) => (
                        <div key={song.id} className="bg-[#181818] hover:bg-[#282828] rounded-lg p-4 cursor-pointer transition-colors group">
                          <div className="relative mb-4">
                            <div className={`w-full aspect-square bg-gradient-to-br ${song.coverColor} rounded-md shadow-lg flex items-center justify-center text-white font-bold text-4xl`}>
                              {song.title[0]}
                            </div>
                            <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105">
                              <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"/>
                              </svg>
                            </button>
                          </div>
                          <h3 className="text-white font-semibold mb-1 truncate">{song.title}</h3>
                          <p className="text-[#b3b3b3] text-sm truncate">{song.artist}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Player */}
            <div className="bg-[#181818] border-t border-black px-4 py-3">
              <div className="flex items-center justify-between">
                {/* Now Playing */}
                <div className="flex items-center gap-4 w-80">
                  <div className={`w-14 h-14 bg-gradient-to-br ${playlist[currentSong].coverColor} rounded flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {playlist[currentSong].title[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">{playlist[currentSong].title}</div>
                    <div className="text-[#b3b3b3] text-xs truncate hover:text-white hover:underline cursor-pointer">{playlist[currentSong].artist}</div>
                  </div>
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                  </button>
                </div>

                {/* Controls */}
                <div className="flex-1 max-w-2xl">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <button className="text-[#b3b3b3] hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 003.83 15.5h1.948a.75.75 0 100-1.5H3.83a.75.75 0 01-.574-.265L9.43 6.379a2.25 2.25 0 011.718-.804h1.96l-1.018 1.018a.75.75 0 001.06 1.06L15.98 4.82a.75.75 0 000-1.06l-2.83-2.83z"/>
                      </svg>
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white" onClick={() => setCurrentSong(Math.max(0, currentSong - 1))}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"/>
                      </svg>
                    </button>
                    <button 
                      onClick={togglePlay}
                      className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      <svg className="w-4 h-4 text-black ml-0.5" fill="currentColor" viewBox="0 0 16 16">
                        {isPlaying ? (
                          <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"/>
                        ) : (
                          <path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"/>
                        )}
                      </svg>
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white" onClick={() => setCurrentSong(Math.min(playlist.length - 1, currentSong + 1))}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"/>
                      </svg>
                    </button>
                    <button className="text-[#b3b3b3] hover:text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5a2.25 2.25 0 00-2.25 2.25v5a2.25 2.25 0 002.25 2.25H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"/>
                      </svg>
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#b3b3b3] text-xs w-10 text-right">
                      {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
                    </span>
                    <div className="flex-1 group">
                      <input 
                        type="range" 
                        min="0" 
                        max="200" 
                        value={currentTime}
                        onChange={(e) => setCurrentTime(Number(e.target.value))}
                        className="w-full h-1 bg-[#4d4d4d] rounded-full appearance-none cursor-pointer hover:accent-[#1DB954]"
                        style={{
                          background: `linear-gradient(to right, #1DB954 0%, #1DB954 ${(currentTime / 200) * 100}%, #4d4d4d ${(currentTime / 200) * 100}%, #4d4d4d 100%)`
                        }}
                      />
                    </div>
                    <span className="text-[#b3b3b3] text-xs w-10">3:20</span>
                  </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-3 w-80 justify-end">
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.044-2.676 3.58-3.141zM7.12 13.12A.999.999 0 006 12.12V9.12h3a1 1 0 11-1.88 3.88z"/>
                    </svg>
                  </button>
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"/>
                    </svg>
                  </button>
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25H4v1.5H1.75A1.75 1.75 0 010 13.25V2.75C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15a2 2 0 01-2-2v-2h1.5v2a.5.5 0 00.5.5h1.5V15H4z"/>
                    </svg>
                  </button>
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/>
                      <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"/>
                    </svg>
                  </button>
                  <div className="flex items-center gap-2 w-32">
                    <input 
                      type="range" 
                      min="0" 
                      max="100" 
                      value={volume}
                      onChange={(e) => setVolume(Number(e.target.value))}
                      className="flex-1 h-1 bg-[#4d4d4d] rounded-full appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #ffffff 0%, #ffffff ${volume}%, #4d4d4d ${volume}%, #4d4d4d 100%)`
                      }}
                    />
                  </div>
                  <button className="text-[#b3b3b3] hover:text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },

    { 
      id: 'college', 
      title: 'College', 
      icon: <FolderIcon />,
      component: () => (
        <div className="h-full flex flex-col bg-[#202020]">
          {/* Toolbar */}
          <div className="border-b border-[#32323285] bg-[#202020] flex items-center h-[3.2rem]">
            <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
              <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1">
                <span>New</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
            <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">✂️</button>
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">📋</button>
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">📄</button>
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">✏️</button>
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">🔗</button>
              <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">🗑️</button>
            </div>
            <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
              <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1">
                <span>Sort</span>
                <span className="text-xs">▼</span>
              </button>
              <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1">
                <span>View</span>
                <span className="text-xs">▼</span>
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="border-b border-[#32323285] bg-[#202020] flex items-center px-2 h-[30px]">
            <div className="flex items-center gap-0.5 w-28">
              <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs">←</button>
              <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs opacity-50">→</button>
              <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs">↑</button>
            </div>
            <div className="flex-1 flex items-center gap-2 mx-2 px-2 py-1 bg-[#1a1a1a] border border-[#85858585] rounded text-xs">
              <span>📁</span>
              <span className="text-gray-300">Documents</span>
              <span className="text-gray-500">›</span>
              <span className="text-white">College</span>
            </div>
            <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs">↻</button>
            <div className="flex items-center gap-2 ml-2 w-80 px-2 py-1 bg-[#1a1a1a] border border-[#85858585] rounded text-xs">
              <span className="text-gray-500">🔍</span>
              <input type="text" placeholder="Search College" className="flex-1 bg-transparent text-white outline-none" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-52 bg-[#1a1a1a] border-r border-[#32323285] flex flex-col text-xs">
              <div className="p-1">
                <div className="flex gap-1 items-center mx-0.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                  <span className="text-gray-400 text-lg">▼</span>
                  <div className="flex gap-2 items-center w-full h-full py-1.5">
                    <span className="text-yellow-400 text-sm">⭐</span>
                    <span className="text-xs text-gray-300">Quick access</span>
                  </div>
                </div>
                <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                    <rect x="2" y="5" width="12" height="9" rx="1" fill="currentColor"/>
                    <rect x="4" y="7" width="8" height="1" fill="#1a1a1a"/>
                  </svg>
                  <span className="text-xs text-gray-300">Desktop</span>
                </div>
                <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                    <path d="M8 2L12 6H9V12H7V6H4L8 2Z" fill="currentColor"/>
                    <rect x="3" y="13" width="10" height="1" fill="currentColor"/>
                  </svg>
                  <span className="text-xs text-gray-300">Downloads</span>
                </div>
                <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded bg-[#2e2e2e] cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-300">
                    <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                    <rect x="5" y="4" width="6" height="1" fill="#1a1a1a"/>
                    <rect x="5" y="6" width="6" height="1" fill="#1a1a1a"/>
                    <rect x="5" y="8" width="4" height="1" fill="#1a1a1a"/>
                  </svg>
                  <span className="text-xs text-white">Documents</span>
                </div>
                <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="text-green-400">
                    <rect x="2" y="2" width="12" height="12" rx="1" fill="currentColor"/>
                    <path d="M5 9L7 11L11 6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                  </svg>
                  <span className="text-xs text-gray-300">Pictures</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full flex flex-col">
              {/* Table Header */}
              <div className="flex w-full px-2 border-r border-[#32323285]">
                <div className="w-[40%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                  <p className="text-xs text-gray-300">Name</p>
                </div>
                <div className="w-[25%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                  <p className="text-xs text-gray-300">Date modified</p>
                </div>
                <div className="w-[25%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                  <p className="text-xs text-gray-300">Type</p>
                </div>
                <div className="w-[10%] p-1 pl-2 hover:bg-[#2e2e2e]">
                  <p className="text-xs text-gray-300">Size</p>
                </div>
              </div>
              {/* File List */}
              <div className="overflow-auto mx-2">
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Semester 1</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">15/09/2024</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Semester 2</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">20/01/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Semester 3</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">10/08/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Semester 4</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">05/11/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Assignments</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">22/11/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Projects</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">18/10/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Notes</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">25/11/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
                <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                  <div className="w-[40%] flex items-center gap-2">
                    <span className="text-lg">📁</span>
                    <span className="text-sm text-white">Resources</span>
                  </div>
                  <div className="w-[25%] text-sm text-gray-400">12/09/2025</div>
                  <div className="w-[25%] text-sm text-gray-400">Folder</div>
                  <div className="w-[10%] text-sm text-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'whatsapp', 
      title: 'WhatsApp', 
      icon: <WhatsAppIcon />,
      component: () => (
        <div className="h-full flex bg-white">
          <div className="w-96 bg-white border-r border-gray-200">
            <div className="p-4 bg-[#f0f2f5] border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-gray-800 text-xl font-semibold">Chats</h2>
              <div className="flex gap-4">
                <button className="text-gray-600 hover:text-gray-800">📷</button>
                <button className="text-gray-600 hover:text-gray-800">➕</button>
                <button className="text-gray-600 hover:text-gray-800">⋮</button>
              </div>
            </div>
            <div className="p-3">
              <input 
                type="text" 
                placeholder="Search or start new chat"
                className="w-full px-4 py-2 bg-[#f0f2f5] border border-gray-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:border-[#00A884]"
              />
            </div>
            <div className="overflow-auto">
              <div className="px-4 py-3 hover:bg-[#f5f6f6] cursor-pointer border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-2xl">👤</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">Portfolio Visitor</h3>
                    <p className="text-gray-600 text-sm">Interested in your work!</p>
                  </div>
                  <span className="text-xs text-gray-500">10:30 AM</span>
                </div>
              </div>
              <div className="px-4 py-3 hover:bg-[#f5f6f6] cursor-pointer border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl">💼</div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 font-medium">Recruiter</h3>
                    <p className="text-gray-600 text-sm">Let's schedule an interview</p>
                  </div>
                  <span className="text-xs text-gray-500">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-[#f8f9fa]">
            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h3 className="text-gray-800 text-xl mb-2 font-semibold">WhatsApp Web</h3>
              <p className="text-gray-600">Send and receive messages</p>
            </div>
          </div>
        </div>
      )
    },
    { 
      id: 'telegram', 
      title: 'Telegram', 
      icon: <TelegramIcon />,
      component: () => (
        <div className="h-full flex bg-white">
          <div className="w-80 bg-white border-r border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <button className="text-2xl">☰</button>
                <input 
                  type="text" 
                  placeholder="Search"
                  className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
                />
              </div>
            </div>
            <div className="overflow-auto">
              <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">H</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Harshvardhan</h3>
                    <p className="text-gray-500 text-sm">Saved Messages</p>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl">🚀</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Dev Community</h3>
                    <p className="text-gray-500 text-sm">New updates available</p>
                  </div>
                  <span className="text-xs text-gray-400">2:15 PM</span>
                </div>
              </div>
              <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl">💻</div>
                  <div className="flex-1">
                    <h3 className="font-medium">Tech News</h3>
                    <p className="text-gray-500 text-sm">Latest in technology</p>
                  </div>
                  <span className="text-xs text-gray-400">1:45 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center">
              <div className="text-8xl mb-4">✈️</div>
              <h3 className="text-2xl font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">Select a chat to start messaging</p>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div 
      className="w-full h-[calc(100%-48px)] relative flex items-center justify-center"
      style={{
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0f0c29',
      }}
    >
      {/* Portfolio Title Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center backdrop-blur-md bg-white/20 px-16 py-8 rounded-3xl border border-white/30 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-white/30 pointer-events-auto group">
          <p className="text-2xl text-white drop-shadow-lg mb-2 transition-all duration-300 group-hover:text-3xl group-hover:text-white" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
            Hii, I'm Harsh Welcome to my
          </p>
          <h1 className="text-6xl font-bold text-white drop-shadow-2xl transition-all duration-300 group-hover:text-7xl group-hover:tracking-wider" style={{ fontFamily: 'Brush Script MT, cursive' }}>
            Portfolio OS
          </h1>
        </div>
      </div>
      {/* Desktop Icons Grid - Ordered */}
      <div className="absolute top-4 left-4 bottom-4 grid grid-rows-[repeat(auto-fill,minmax(65px,1fr))] grid-flow-col gap-0.5 auto-cols-[65px]">
        {/* 1. This PC */}
        <DesktopIcon
          id="thispc"
          title="This PC"
          icon={<ThisPCIcon />}
          component={() => (
            <div className="h-full flex flex-col bg-[#202020]">
              {/* Top Toolbar */}
              <div className="border-b border-[#8585851c] bg-[#202020]">
                <div className="flex gap-1 items-center h-[3.2rem] pb-1 pl-2 text-white">
                  {/* New */}
                  <div className="flex gap-1 items-center pr-2 border-r border-[#32323285]">
                    <div className="flex gap-1 items-center justify-center px-2 py-2 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <span className="text-sm">➕</span>
                      <span className="text-xs">New</span>
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="flex gap-1 mx-2 opacity-50">
                    <div className="p-2 rounded">✂️</div>
                    <div className="p-2 rounded">📋</div>
                    <div className="p-2 rounded">📄</div>
                    <div className="p-2 rounded">✏️</div>
                    <div className="p-2 rounded">↗️</div>
                    <div className="p-2 rounded">🗑️</div>
                  </div>
                  {/* Sort */}
                  <div className="flex gap-1 items-center px-2 pl-2 border-l border-[#32323285]">
                    <div className="flex gap-1 items-center justify-center px-2 py-2 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <span className="text-sm">⇅</span>
                      <span className="text-xs">Sort</span>
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                  {/* View */}
                  <div className="flex gap-1 items-center pr-2 border-r border-[#32323285]">
                    <div className="flex gap-1 items-center justify-center px-2 py-2 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <span className="text-sm">☰</span>
                      <span className="text-xs">View</span>
                      <span className="text-xs">▼</span>
                    </div>
                  </div>
                  {/* More */}
                  <div className="ml-2">
                    <div className="p-2 rounded hover:bg-[#2e2e2e] cursor-pointer">⋯</div>
                  </div>
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="flex justify-between h-[30px] my-2 px-2">
                <div className="flex items-center justify-between w-28 text-gray-400">
                  <span className="cursor-pointer hover:text-white">←</span>
                  <span className="cursor-pointer hover:text-white">→</span>
                  <span className="cursor-pointer">▼</span>
                  <span className="cursor-pointer hover:text-white">↑</span>
                </div>
                <div className="flex items-center justify-between flex-1 mx-2 h-full border border-[#85858585] text-white">
                  <div className="flex items-center pl-1">
                    <span className="text-xs mr-1">📁</span>
                    <span className="text-xs mr-1">▶</span>
                    <input className="bg-transparent border-none outline-none text-xs text-white w-full" value="This PC" readOnly />
                  </div>
                  <div className="flex h-full">
                    <div className="flex items-center px-2 text-gray-400">▼</div>
                    <div className="flex items-center px-2 hover:bg-[#2e2e2e] cursor-pointer">↻</div>
                  </div>
                </div>
                <div className="flex gap-2 items-center justify-start w-80 h-full px-2 border border-[#85858585] text-white">
                  <span className="text-gray-400 text-xs">🔍</span>
                  <input placeholder="Search: This PC" className="bg-transparent border-none outline-none text-xs text-gray-400 w-full" />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex h-[calc(100%-5.2rem-46px)]">
                {/* Sidebar */}
                <div className="flex flex-col gap-0.5 w-52 h-full border-r-2 border-[#32323285] bg-[#1a1a1a]">
                  {/* Quick access */}
                  <div className="flex gap-1 items-center mx-0.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <span className="text-gray-400 text-lg">▼</span>
                    <div className="flex gap-1 items-center w-full h-full py-1.5">
                      <span className="text-yellow-400 text-sm">⭐</span>
                      <span className="text-xs text-white">Quick access</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                      <rect x="2" y="5" width="12" height="9" rx="1" fill="currentColor"/>
                      <rect x="4" y="7" width="8" height="1" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">Desktop</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                      <path d="M8 2L12 6H9V12H7V6H4L8 2Z" fill="currentColor"/>
                      <rect x="3" y="13" width="10" height="1" fill="currentColor"/>
                    </svg>
                    <span className="text-xs text-gray-300">Downloads</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-300">
                      <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                      <rect x="5" y="4" width="6" height="1" fill="#1a1a1a"/>
                      <rect x="5" y="6" width="6" height="1" fill="#1a1a1a"/>
                      <rect x="5" y="8" width="4" height="1" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">Documents</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-green-400">
                      <rect x="2" y="2" width="12" height="12" rx="1" fill="currentColor"/>
                      <path d="M5 9L7 11L11 6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="text-xs text-gray-300">Pictures</span>
                  </div>

                  {/* This PC */}
                  <div className="flex gap-1 items-center mx-0.5 rounded bg-[#2e2e2e] cursor-pointer mt-1">
                    <span className="text-gray-400 text-lg">▼</span>
                    <div className="flex gap-1 items-center w-full h-full py-1.5">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                        <rect x="2" y="4" width="12" height="8" rx="1" fill="currentColor"/>
                        <rect x="6" y="12" width="4" height="2" fill="currentColor"/>
                        <rect x="4" y="14" width="8" height="1" fill="currentColor"/>
                      </svg>
                      <span className="text-xs text-white">This PC</span>
                    </div>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                      <rect x="2" y="5" width="12" height="9" rx="1" fill="currentColor"/>
                      <rect x="4" y="7" width="8" height="1" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">Desktop</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                      <path d="M8 2L12 6H9V12H7V6H4L8 2Z" fill="currentColor"/>
                      <rect x="3" y="13" width="10" height="1" fill="currentColor"/>
                    </svg>
                    <span className="text-xs text-gray-300">Downloads</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-300">
                      <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                      <rect x="5" y="4" width="6" height="1" fill="#1a1a1a"/>
                      <rect x="5" y="6" width="6" height="1" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">Documents</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-green-400">
                      <rect x="2" y="2" width="12" height="12" rx="1" fill="currentColor"/>
                    </svg>
                    <span className="text-xs text-gray-300">Pictures</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-purple-400">
                      <circle cx="8" cy="8" r="6" fill="currentColor"/>
                      <circle cx="8" cy="8" r="2" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">Spotify</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-orange-400">
                      <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                      <circle cx="8" cy="8" r="3" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">250GB SSD</span>
                  </div>
                  <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="text-orange-400">
                      <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                      <circle cx="8" cy="8" r="3" fill="#1a1a1a"/>
                    </svg>
                    <span className="text-xs text-gray-300">1TB SSD</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="w-full flex flex-col">
                  {/* Table Header */}
                  <div className="flex w-full px-2 border-r border-[#32323285]">
                    <div className="w-[40%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                      <p className="text-xs text-gray-300">Name</p>
                    </div>
                    <div className="w-[25%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                      <p className="text-xs text-gray-300">Date modified</p>
                    </div>
                    <div className="w-[25%] p-1 pl-2 border-r border-[#32323285] hover:bg-[#2e2e2e]">
                      <p className="text-xs text-gray-300">Type</p>
                    </div>
                    <div className="w-[10%] p-1 pl-2 hover:bg-[#2e2e2e]">
                      <p className="text-xs text-gray-300">Size</p>
                    </div>
                  </div>
                  {/* File List */}
                  <div className="overflow-auto mx-2">
                    {/* Devices and drives section */}
                    <div className="mt-4 mb-2">
                      <button className="flex items-center gap-1 text-xs text-white hover:bg-white/10 px-1 py-1 rounded">
                        <span>▼</span>
                        <span>Devices and drives</span>
                      </button>
                    </div>
                    {/* Drives in same row */}
                    <div className="flex gap-4 py-3 px-2">
                      <div className="flex items-center hover:bg-white/10 rounded cursor-pointer p-2 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <svg width="48" height="48" viewBox="0 0 48 48" className="text-blue-500">
                              <rect x="8" y="16" width="32" height="20" rx="2" fill="currentColor"/>
                              <rect x="10" y="18" width="28" height="16" fill="#333"/>
                              <circle cx="38" cy="26" r="2" fill="#666"/>
                              <rect x="12" y="20" width="24" height="12" fill="#1a1a1a"/>
                            </svg>
                            <div className="absolute bottom-1 right-1 bg-white rounded-sm p-0.5">
                              <svg width="12" height="12" viewBox="0 0 16 16" fill="#666">
                                <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-white font-medium">OS (C:)</span>
                            <div className="w-48 h-2 bg-[#3d3d3d] rounded-full mt-1 overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-red-600 to-red-500" style={{width: '29%'}}></div>
                            </div>
                            <span className="text-xs text-gray-400 mt-0.5">326 GB free of 459 GB</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center hover:bg-white/10 rounded cursor-pointer p-2 flex-1">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <svg width="48" height="48" viewBox="0 0 48 48" className="text-blue-500">
                              <rect x="8" y="16" width="32" height="20" rx="2" fill="currentColor"/>
                              <rect x="10" y="18" width="28" height="16" fill="#333"/>
                              <circle cx="38" cy="26" r="2" fill="#666"/>
                              <rect x="12" y="20" width="24" height="12" fill="#1a1a1a"/>
                            </svg>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm text-white font-medium">Data (D:)</span>
                            <div className="w-48 h-2 bg-[#3d3d3d] rounded-full mt-1 overflow-hidden">
                              <div className="h-full bg-blue-500" style={{width: '65%'}}></div>
                            </div>
                            <span className="text-xs text-gray-400 mt-0.5">176 GB free of 500 GB</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                      <div className="w-[40%] flex items-center gap-2">
                        <span className="text-lg">📁</span>
                        <span className="text-sm text-white">Desktop</span>
                      </div>
                      <div className="w-[25%] text-sm text-gray-400">28/11/2025 10:15</div>
                      <div className="w-[25%] text-sm text-gray-400">Folder</div>
                      <div className="w-[10%] text-sm text-gray-400"></div>
                    </div>
                    <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                      <div className="w-[40%] flex items-center gap-2">
                        <span className="text-lg">📄</span>
                        <span className="text-sm text-white">Documents</span>
                      </div>
                      <div className="w-[25%] text-sm text-gray-400">27/11/2025 16:45</div>
                      <div className="w-[25%] text-sm text-gray-400">Folder</div>
                      <div className="w-[10%] text-sm text-gray-400"></div>
                    </div>
                    <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                      <div className="w-[40%] flex items-center gap-2">
                        <span className="text-lg">⬇️</span>
                        <span className="text-sm text-white">Downloads</span>
                      </div>
                      <div className="w-[25%] text-sm text-gray-400">28/11/2025 09:20</div>
                      <div className="w-[25%] text-sm text-gray-400">Folder</div>
                      <div className="w-[10%] text-sm text-gray-400"></div>
                    </div>
                    <div className="flex items-center py-2 px-2 hover:bg-white/10 rounded cursor-pointer">
                      <div className="w-[40%] flex items-center gap-2">
                        <span className="text-lg">🖼️</span>
                        <span className="text-sm text-white">Pictures</span>
                      </div>
                      <div className="w-[25%] text-sm text-gray-400">26/11/2025 18:30</div>
                      <div className="w-[25%] text-sm text-gray-400">Folder</div>
                      <div className="w-[10%] text-sm text-gray-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        
        {/* 2. Recycle Bin */}
        <DesktopIcon
          id="recycle"
          title="Recycle Bin"
          icon={<RecycleIcon />}
          component={() => (
            <div className="h-full flex flex-col bg-[#202020]">
              {/* Toolbar */}
              <div className="border-b border-[#32323285] bg-[#202020] flex items-center h-[3.2rem]">
                <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
                  <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1 opacity-50">
                    <span>New</span>
                    <span className="text-xs">▼</span>
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">✂️</button>
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">📋</button>
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">📄</button>
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">✏️</button>
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white opacity-50">🔗</button>
                  <button className="w-8 h-8 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white">🗑️</button>
                </div>
                <div className="flex items-center gap-1 px-2 h-full border-r border-[#32323285]">
                  <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1">
                    <span>Sort</span>
                    <span className="text-xs">▼</span>
                  </button>
                  <button className="px-3 py-1.5 hover:bg-[#2e2e2e] rounded text-sm text-white flex items-center gap-1">
                    <span>View</span>
                    <span className="text-xs">▼</span>
                  </button>
                </div>
                <div className="flex items-center gap-1 px-2 h-full">
                  <button className="px-3 py-1.5 bg-[#2e2e2e] hover:bg-[#3e3e3e] rounded text-sm text-white flex items-center gap-1">
                    <span>🗑️</span>
                    <span>Empty Recycle Bin</span>
                  </button>
                </div>
              </div>

              {/* Navigation Bar */}
              <div className="border-b border-[#32323285] bg-[#202020] flex items-center px-2 h-[30px]">
                <div className="flex items-center gap-0.5 w-28">
                  <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs">←</button>
                  <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs opacity-50">→</button>
                  <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs opacity-50">↑</button>
                </div>
                <div className="flex-1 flex items-center gap-2 mx-2 px-2 py-1 bg-[#1a1a1a] border border-[#85858585] rounded text-xs">
                  <span>🗑️</span>
                  <span className="text-white">Recycle Bin</span>
                </div>
                <button className="w-7 h-7 hover:bg-[#2e2e2e] rounded flex items-center justify-center text-white text-xs">↻</button>
                <div className="flex items-center gap-2 ml-2 w-80 px-2 py-1 bg-[#1a1a1a] border border-[#85858585] rounded text-xs">
                  <span className="text-gray-500">🔍</span>
                  <input type="text" placeholder="Search Recycle Bin" className="flex-1 bg-transparent text-white outline-none" />
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-52 bg-[#1a1a1a] border-r border-[#32323285] flex flex-col text-xs">
                  <div className="p-1">
                    <div className="flex gap-1 items-center mx-0.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <span className="text-gray-400 text-lg">▼</span>
                      <div className="flex gap-2 items-center w-full h-full py-1.5">
                        <span className="text-yellow-400 text-sm">⭐</span>
                        <span className="text-xs text-gray-300">Quick access</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                        <rect x="2" y="5" width="12" height="9" rx="1" fill="currentColor"/>
                        <rect x="4" y="7" width="8" height="1" fill="#1a1a1a"/>
                      </svg>
                      <span className="text-xs text-gray-300">Desktop</span>
                    </div>
                    <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                        <path d="M8 2L12 6H9V12H7V6H4L8 2Z" fill="currentColor"/>
                        <rect x="3" y="13" width="10" height="1" fill="currentColor"/>
                      </svg>
                      <span className="text-xs text-gray-300">Downloads</span>
                    </div>
                    <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-300">
                        <rect x="3" y="2" width="10" height="12" rx="1" fill="currentColor"/>
                        <rect x="5" y="4" width="6" height="1" fill="#1a1a1a"/>
                        <rect x="5" y="6" width="6" height="1" fill="#1a1a1a"/>
                        <rect x="5" y="8" width="4" height="1" fill="#1a1a1a"/>
                      </svg>
                      <span className="text-xs text-gray-300">Documents</span>
                    </div>
                    <div className="flex gap-2 items-center mx-0.5 pl-8 py-1.5 rounded hover:bg-[#2e2e2e] cursor-pointer">
                      <svg width="16" height="16" viewBox="0 0 16 16" className="text-green-400">
                        <rect x="2" y="2" width="12" height="12" rx="1" fill="currentColor"/>
                        <path d="M5 9L7 11L11 6" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
                      </svg>
                      <span className="text-xs text-gray-300">Pictures</span>
                    </div>
                    <div className="flex gap-1 items-center mx-0.5 rounded hover:bg-[#2e2e2e] cursor-pointer mt-1">
                      <span className="text-gray-400 text-lg">▼</span>
                      <div className="flex gap-2 items-center w-full h-full py-1.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-blue-400">
                          <rect x="2" y="4" width="12" height="8" rx="1" fill="currentColor"/>
                          <rect x="6" y="12" width="4" height="2" fill="currentColor"/>
                          <rect x="4" y="14" width="8" height="1" fill="currentColor"/>
                        </svg>
                        <span className="text-xs text-gray-300">This PC</span>
                      </div>
                    </div>
                    <div className="flex gap-1 items-center mx-0.5 rounded bg-[#2e2e2e] cursor-pointer">
                      <span className="text-gray-400 text-lg">▼</span>
                      <div className="flex gap-2 items-center w-full h-full py-1.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" className="text-gray-400">
                          <rect x="3" y="3" width="10" height="11" rx="1" fill="currentColor"/>
                          <rect x="5" y="2" width="6" height="2" fill="currentColor"/>
                        </svg>
                        <span className="text-xs text-white">Recycle Bin</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="w-full flex flex-col">
                  {/* Empty State */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                    <div className="text-9xl mb-6 opacity-20">🗑️</div>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-2">Recycle Bin is empty</h2>
                    <p className="text-gray-500 text-sm max-w-md">Items moved to the Recycle Bin will be stored here until you empty it.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        />
        
        {/* 3-7. Portfolio Apps */}
        {desktopApps.map((app) => (
          <DesktopIcon
            key={app.id}
            id={app.id}
            title={app.title}
            icon={app.icon}
            component={app.component}
          />
        ))}
      </div>
    </div>
  );
};

export default Desktop;
