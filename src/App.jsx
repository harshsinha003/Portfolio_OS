import { useState, useEffect } from 'react';
import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';
import Window from './components/Window';
import useWindowStore from './store/windowStore';
import useTaskbarStore from './store/taskbarStore';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Main Application Component
 * Manages boot screen, desktop, windows, start menu, and taskbar
 * @module App
 */
function App() {
  const [isBooting, setIsBooting] = useState(true);
  const openWindows = useWindowStore((state) => state.openWindows);
  const { 
    isStartMenuOpen, 
    isSearchOpen, 
    isSystemTrayOpen, 
    isNotificationsOpen,
    isCalendarOpen,
    toggleStartMenu, 
    setStartMenuOpen, 
    closeAllPanels 
  } = useTaskbarStore();

  useEffect(() => {
    // Boot screen simulation
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isBooting) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
            <h1 className="text-white text-4xl font-light mb-2">Portfolio OS</h1>
            <p className="text-white/70 text-sm">Loading your experience...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative overflow-hidden">
      <Desktop onStartClick={toggleStartMenu} />
      
      {/* Windows Layer */}
      <AnimatePresence>
        {openWindows.map((window) => (
          <Window key={window.id} window={window} />
        ))}
      </AnimatePresence>

      {/* Start Menu */}
      <AnimatePresence>
        {isStartMenuOpen && (
          <StartMenu onClose={() => setStartMenuOpen(false)} />
        )}
      </AnimatePresence>

      {/* Taskbar */}
      <Taskbar 
        onStartClick={toggleStartMenu} 
        startMenuOpen={isStartMenuOpen}
      />

      {/* Click outside to close all taskbar panels */}
      {(isStartMenuOpen || isSearchOpen || isSystemTrayOpen || isNotificationsOpen || isCalendarOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={closeAllPanels}
        />
      )}
    </div>
  );
}

export default App;
