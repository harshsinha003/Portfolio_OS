import { useState, useEffect } from 'react';
import useTaskbarStore from '../../store/taskbarStore';

/**
 * SystemTray Component
 * Windows 11 system tray with quick settings, notifications, and clock
 * @module components/Taskbar/SystemTray
 */
const SystemTray = () => {
  const [time, setTime] = useState(new Date());
  const [calendarDate, setCalendarDate] = useState(new Date());
  const { 
    isNotificationsOpen, 
    isSystemTrayOpen,
    isCalendarOpen,
    toggleNotifications, 
    toggleSystemTray,
    toggleCalendar
  } = useTaskbarStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const goToPreviousMonth = () => {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1));
  };
  
  const goToToday = () => {
    setCalendarDate(new Date());
  };

  /**
   * Format time for display
   * @param {Date} date - Date object
   * @returns {string} Formatted time string
   */
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  /**
   * Format date for display
   * @param {Date} date - Date object
   * @returns {string} Formatted date string
   */
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <>
      <div className="absolute right-0 h-full flex items-center">
        {/* Quick Settings Toggle - Shows WiFi, Volume, Battery icons */}
        <button 
          className="h-10 px-2 hover:bg-white/8 transition-all flex items-center justify-center gap-1.5 rounded-lg" 
          title="Quick Settings"
          aria-label="Quick Settings"
          aria-expanded={isSystemTrayOpen}
          onClick={toggleSystemTray}
        >
          {/* WiFi Icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-white/80" aria-hidden="true">
            <path d="M8 13 C8.5 13 9 12.5 9 12 C9 11.5 8.5 11 8 11 C7.5 11 7 11.5 7 12 C7 12.5 7.5 13 8 13Z" fill="currentColor" />
            <path d="M5 9 C6 8 7 7.5 8 7.5 C9 7.5 10 8 11 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M3 7 C4.5 5.5 6 4.5 8 4.5 C10 4.5 11.5 5.5 13 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          
          {/* Volume Icon */}
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-white/80" aria-hidden="true">
            <path d="M2 6 L5 6 L8 3 V13 L5 10 H2 V6Z" fill="currentColor" />
            <path d="M10 5 C10.5 5.5 11 6.5 11 8 C11 9.5 10.5 10.5 10 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          
          {/* Battery Icon */}
          <svg width="20" height="14" viewBox="0 0 20 16" className="text-white/80" aria-hidden="true">
            <rect x="1" y="4" width="15" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2.5" y="5.5" width="10" height="5" fill="currentColor" />
            <rect x="16" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
          </svg>
        </button>
        
        {/* Notifications */}
        <button 
          className="h-10 w-9 hover:bg-white/8 transition-all flex items-center justify-center rounded-lg relative" 
          title="Notifications"
          aria-label="Notification Center"
          aria-expanded={isNotificationsOpen}
          onClick={toggleNotifications}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" className="text-white/80" aria-hidden="true">
            <path d="M8 2 C6.5 2 5 3 5 5 V8 L3 10 V11 H13 V10 L11 8 V5 C11 3 9.5 2 8 2Z" fill="currentColor" />
            <path d="M7 12 C7 12.5 7.5 13 8 13 C8.5 13 9 12.5 9 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full" aria-hidden="true"></div>
        </button>
        
        {/* Date & Time with Calendar */}
        <button 
          className="h-10 px-2.5 hover:bg-white/8 transition-all cursor-pointer flex flex-col items-end justify-center rounded-lg mr-1" 
          title="Calendar"
          aria-label={`Open Calendar - Current time: ${formatTime(time)}, ${formatDate(time)}`}
          onClick={toggleCalendar}
        >
          <div className="text-xs text-white/80 font-normal leading-tight">
            {formatTime(time)}
          </div>
          <div className="text-[10px] text-white/70 leading-tight">
            {formatDate(time)}
          </div>
        </button>
        
        {/* Show Desktop */}
        <button 
          className="h-10 w-1 hover:bg-blue-500/40 border-l border-white/10 transition-all rounded-sm" 
          title="Show Desktop"
          aria-label="Show Desktop"
        />
      </div>

      {/* Notification Center Popup */}
      {isNotificationsOpen && (
        <div className="fixed bottom-14 right-4 w-96 bg-[#2d2d2d]/95 backdrop-blur-xl rounded-xl shadow-2xl z-50 overflow-hidden border border-[#3c3c3c]">
          <div className="p-4 border-b border-[#3c3c3c]">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">Notifications</h3>
              <button 
                onClick={toggleNotifications} 
                className="text-gray-400 hover:text-white"
                aria-label="Close Notifications"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="max-h-96 overflow-auto">
            <div className="p-4 border-b border-[#3c3c3c] hover:bg-[#3c3c3c]">
              <div className="flex gap-3">
                <div className="text-2xl" aria-hidden="true">💼</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">New Project Added</p>
                  <p className="text-xs text-gray-400">Check out my latest work</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-b border-[#3c3c3c] hover:bg-[#3c3c3c]">
              <div className="flex gap-3">
                <div className="text-2xl" aria-hidden="true">📧</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">New Message</p>
                  <p className="text-xs text-gray-400">Someone viewed your profile</p>
                  <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-[#3c3c3c]">
              <div className="flex gap-3">
                <div className="text-2xl" aria-hidden="true">⭐</div>
                <div className="flex-1">
                  <p className="font-medium text-sm text-white">Achievement Unlocked</p>
                  <p className="text-xs text-gray-400">Completed 10 projects!</p>
                  <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* System Tray (Quick Settings) Popup */}
      {isSystemTrayOpen && (
        <div className="fixed bottom-14 right-4 w-96 bg-[#2d2d2d]/95 backdrop-blur-xl rounded-xl shadow-2xl z-50 overflow-hidden border border-[#3c3c3c]">
          <div className="p-6">
            {/* Toggle Buttons Grid - 3 columns */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              <button className="aspect-square bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 16 16" className="mb-2" aria-hidden="true">
                  <path d="M8 13 C8.5 13 9 12.5 9 12 C9 11.5 8.5 11 8 11 C7.5 11 7 11.5 7 12 C7 12.5 7.5 13 8 13Z" fill="currentColor" />
                  <path d="M5 9 C6 8 7 7.5 8 7.5 C9 7.5 10 8 11 9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  <path d="M3 7 C4.5 5.5 6 4.5 8 4.5 C10 4.5 11.5 5.5 13 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
                <div className="text-xs font-medium">Wifi</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 4 C12 4 8 8 8 12 C8 16 12 20 12 20" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                <div className="text-xs font-medium">Bluetooth</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <path d="M3 9 L12 3 L21 9 L12 15 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 15 L12 21" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-xs font-medium">Airplane Mode</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <rect x="6" y="2" width="12" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 6 L18 6 M6 18 L18 18" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-xs font-medium">Battery Saver</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  <path d="M12 1 L12 4 M12 20 L12 23 M23 12 L20 12 M4 12 L1 12 M20 4 L18 6 M6 18 L4 20 M20 20 L18 18 M6 6 L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs font-medium">Night Light</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <rect x="2" y="8" width="20" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M7 8 V6 C7 4 8 2 12 2 C16 2 17 4 17 6 V8" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-xs font-medium">Accessibility</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  <path d="M12 2 L12 6 M12 18 L12 22 M22 12 L18 12 M6 12 L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs font-medium">Location</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6 L12 12 L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <div className="text-xs font-medium">Security</div>
              </button>
              <button className="aspect-square bg-[#3c3c3c] text-white rounded-lg hover:bg-[#4c4c4c] transition-all flex flex-col items-center justify-center p-4">
                <svg width="24" height="24" viewBox="0 0 24 24" className="mb-2" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M4 10 L20 10 M10 4 L10 20" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div className="text-xs font-medium">Sharing</div>
              </button>
            </div>
            
            {/* Sliders */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 16 16" className="text-white/80" aria-hidden="true">
                  <path d="M2 6 L5 6 L8 3 V13 L5 10 H2 V6Z" fill="currentColor" />
                  <path d="M10 5 C10.5 5.5 11 6.5 11 8 C11 9.5 10.5 10.5 10 11" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                </svg>
                <input 
                  type="range" 
                  className="flex-1 h-1 bg-[#4c4c4c] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" 
                  defaultValue="70" 
                  aria-label="Adjust volume"
                />
              </div>
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-white/80" aria-hidden="true">
                  <circle cx="12" cy="12" r="4" fill="currentColor"/>
                  <path d="M12 1 L12 4 M12 20 L12 23 M23 12 L20 12 M4 12 L1 12 M20 4 L18 6 M6 18 L4 20 M20 20 L18 18 M6 6 L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <input 
                  type="range" 
                  className="flex-1 h-1 bg-[#4c4c4c] rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white" 
                  defaultValue="70" 
                  aria-label="Adjust brightness"
                />
              </div>
            </div>
            
            {/* Battery Percentage */}
            <div className="mt-4 flex items-center justify-between text-sm text-white/80">
              <div className="flex items-center gap-2">
                <svg width="18" height="14" viewBox="0 0 20 16" aria-hidden="true">
                  <rect x="1" y="4" width="15" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="2.5" y="5.5" width="10" height="5" fill="currentColor" />
                  <rect x="16" y="6" width="2" height="4" rx="0.5" fill="currentColor" />
                </svg>
                <span>77%</span>
              </div>
              <button className="hover:bg-white/10 p-1 rounded" aria-label="Settings">
                <svg width="18" height="18" viewBox="0 0 20 20" className="text-white/80">
                  <circle cx="10" cy="10" r="2" fill="currentColor" />
                  <path d="M10 1 L10 4 M10 16 L10 19 M19 10 L16 10 M4 10 L1 10 M16.5 3.5 L14.5 5.5 M5.5 14.5 L3.5 16.5 M16.5 16.5 L14.5 14.5 M5.5 5.5 L3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Calendar Panel */}
      {isCalendarOpen && (
        <div className="fixed bottom-16 right-2 w-96 bg-[#2d2d2d]/95 backdrop-blur-xl rounded-xl shadow-2xl z-50 overflow-hidden border border-[#3c3c3c]">
          <div className="p-6">
            {/* Current Date Display */}
            <div className="mb-6">
              <div className="text-3xl font-light text-white mb-1">{formatDate(time)}</div>
              <div className="text-lg text-white/80">{formatTime(time)}</div>
              <div className="text-sm text-gray-400 mt-1">
                {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
            </div>
            
            {/* Calendar Grid */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">
                  {calendarDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex gap-1">
                  <button 
                    className="w-8 h-8 hover:bg-white/10 rounded flex items-center justify-center text-white" 
                    aria-label="Previous month"
                    onClick={goToPreviousMonth}
                  >
                    ‹
                  </button>
                  <button 
                    className="w-8 h-8 hover:bg-white/10 rounded flex items-center justify-center text-white" 
                    aria-label="Next month"
                    onClick={goToNextMonth}
                  >
                    ›
                  </button>
                </div>
              </div>
              
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                  <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                  const firstDay = new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1).getDay();
                  const daysInMonth = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 0).getDate();
                  const day = i - firstDay + 1;
                  const today = new Date();
                  const isToday = day === today.getDate() && 
                                  calendarDate.getMonth() === today.getMonth() && 
                                  calendarDate.getFullYear() === today.getFullYear();
                  const isValidDay = day > 0 && day <= daysInMonth;
                  
                  return (
                    <button
                      key={i}
                      className={`aspect-square text-sm rounded-lg flex items-center justify-center transition-colors ${
                        isToday 
                          ? 'bg-blue-600 text-white font-semibold' 
                          : isValidDay 
                          ? 'text-white hover:bg-white/10' 
                          : 'text-gray-600'
                      }`}
                      disabled={!isValidDay}
                      onClick={() => {
                        if (isValidDay) {
                          setCalendarDate(new Date(calendarDate.getFullYear(), calendarDate.getMonth(), day));
                        }
                      }}
                    >
                      {isValidDay ? day : ''}
                    </button>
                  );
                })}
              </div>
            </div>
            
            {/* Today Button */}
            <button 
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-medium"
              onClick={goToToday}
            >
              Today
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SystemTray;
