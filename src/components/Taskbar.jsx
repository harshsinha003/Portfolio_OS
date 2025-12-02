import useTaskbarStore from '../store/taskbarStore';
import StartButton from './Taskbar/StartButton';
import TaskbarApps from './Taskbar/TaskbarApps';
import SystemTray from './Taskbar/SystemTray';

/**
 * Taskbar Component - Windows 11 Style
 * Main taskbar container with centered start button and apps, system tray on the right
 * @module components/Taskbar
 * @param {Object} props - Component props
 * @param {Function} props.onStartClick - Callback when start button is clicked
 * @param {boolean} props.startMenuOpen - Whether the start menu is currently open
 */
const Taskbar = ({ onStartClick, startMenuOpen }) => {
  const { closeAllPanels } = useTaskbarStore();

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 h-12 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/5 flex items-center justify-center z-50"
      role="navigation"
      aria-label="Taskbar"
    >
      {/* Centered Taskbar Items */}
      <div className="flex items-center gap-0">
        {/* Start Button */}
        <StartButton isOpen={startMenuOpen} onClick={onStartClick} />
        
        {/* Taskbar Applications and Quick Actions */}
        <TaskbarApps />
      </div>

      {/* System Tray - Right Side */}
      <SystemTray />
    </div>
  );
};

export default Taskbar;
