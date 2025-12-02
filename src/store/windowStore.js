import { create } from 'zustand';

const useWindowStore = create((set) => ({
  openWindows: [],
  zIndexCounter: 1000,

  openWindow: (id, title, component, icon) =>
    set((state) => {
      // Check if window is already open
      const existingWindow = state.openWindows.find((w) => w.id === id);
      
      if (existingWindow) {
        // If minimized, restore it and bring to front
        if (existingWindow.isMinimized) {
          return {
            openWindows: state.openWindows.map((w) =>
              w.id === id
                ? { ...w, isMinimized: false, zIndex: state.zIndexCounter + 1 }
                : w
            ),
            zIndexCounter: state.zIndexCounter + 1,
          };
        }
        // Just bring to front
        return {
          openWindows: state.openWindows.map((w) =>
            w.id === id ? { ...w, zIndex: state.zIndexCounter + 1 } : w
          ),
          zIndexCounter: state.zIndexCounter + 1,
        };
      }

      // Create new window
      const newWindow = {
        id,
        title,
        component,
        icon: icon || '📁',
        isMinimized: false,
        isMaximized: false,
        zIndex: state.zIndexCounter + 1,
        position: {
          x: Math.random() * 100 + 50,
          y: Math.random() * 50 + 50,
        },
        size: {
          width: 900,
          height: 650,
        },
      };

      return {
        openWindows: [...state.openWindows, newWindow],
        zIndexCounter: state.zIndexCounter + 1,
      };
    }),

  closeWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.filter((w) => w.id !== id),
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      ),
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w
      ),
    })),

  setActiveWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.map((w) =>
        w.id === id ? { ...w, zIndex: state.zIndexCounter + 1 } : w
      ),
      zIndexCounter: state.zIndexCounter + 1,
    })),

  restoreWindow: (id) =>
    set((state) => ({
      openWindows: state.openWindows.map((w) =>
        w.id === id
          ? { ...w, isMinimized: false, zIndex: state.zIndexCounter + 1 }
          : w
      ),
      zIndexCounter: state.zIndexCounter + 1,
    })),
}));

export default useWindowStore;
