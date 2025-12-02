import { create } from 'zustand';

/**
 * Taskbar Store - Manages taskbar UI state
 * Handles start menu, notifications, system tray, and widgets visibility
 * @module taskbarStore
 */
const useTaskbarStore = create((set) => ({
  // State
  /** @type {boolean} Start menu visibility */
  isStartMenuOpen: false,
  
  /** @type {boolean} Notifications panel visibility */
  isNotificationsOpen: false,
  
  /** @type {boolean} System tray (quick settings) visibility */
  isSystemTrayOpen: false,
  
  /** @type {boolean} Widgets panel visibility */
  isWidgetsOpen: false,
  
  /** @type {boolean} Search panel visibility */
  isSearchOpen: false,
  
  /** @type {boolean} Calendar panel visibility */
  isCalendarOpen: false,

  // Actions
  /** Toggle start menu visibility */
  toggleStartMenu: () => set((state) => ({ 
    isStartMenuOpen: !state.isStartMenuOpen,
    // Close other panels when opening start menu
    isNotificationsOpen: false,
    isSystemTrayOpen: false,
    isWidgetsOpen: false
  })),

  /** Set start menu open state */
  setStartMenuOpen: (isOpen) => set({ isStartMenuOpen: isOpen }),

  /** Toggle notifications panel */
  toggleNotifications: () => set((state) => ({ 
    isNotificationsOpen: !state.isNotificationsOpen,
    // Close other panels
    isStartMenuOpen: false,
    isSystemTrayOpen: false,
    isWidgetsOpen: false
  })),

  /** Toggle system tray panel */
  toggleSystemTray: () => set((state) => ({ 
    isSystemTrayOpen: !state.isSystemTrayOpen,
    // Close other panels
    isStartMenuOpen: false,
    isNotificationsOpen: false,
    isWidgetsOpen: false
  })),

  /** Toggle widgets panel */
  toggleWidgets: () => set((state) => ({ 
    isWidgetsOpen: !state.isWidgetsOpen,
    // Close other panels
    isStartMenuOpen: false,
    isNotificationsOpen: false,
    isSystemTrayOpen: false,
    isSearchOpen: false,
    isCalendarOpen: false
  })),
  
  /** Toggle search panel */
  toggleSearch: () => set((state) => ({ 
    isSearchOpen: !state.isSearchOpen,
    // Close other panels
    isStartMenuOpen: false,
    isNotificationsOpen: false,
    isSystemTrayOpen: false,
    isWidgetsOpen: false,
    isCalendarOpen: false
  })),
  
  /** Toggle calendar panel */
  toggleCalendar: () => set((state) => ({ 
    isCalendarOpen: !state.isCalendarOpen,
    // Close other panels
    isStartMenuOpen: false,
    isNotificationsOpen: false,
    isSystemTrayOpen: false,
    isWidgetsOpen: false,
    isSearchOpen: false
  })),

  /** Close all panels */
  closeAllPanels: () => set({
    isStartMenuOpen: false,
    isNotificationsOpen: false,
    isSystemTrayOpen: false,
    isWidgetsOpen: false,
    isSearchOpen: false,
    isCalendarOpen: false
  })
}));

export default useTaskbarStore;
