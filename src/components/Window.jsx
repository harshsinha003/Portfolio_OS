import { motion, AnimatePresence } from 'framer-motion';
import Draggable from 'react-draggable';
import useWindowStore from '../store/windowStore';
import { useRef, useState, useEffect, useCallback } from 'react';

const Window = ({ window }) => {
  const { closeWindow, minimizeWindow, maximizeWindow, setActiveWindow } = useWindowStore();
  const nodeRef = useRef(null);
  const [position, setPosition] = useState(window.position);
  const [size, setSize] = useState(window.size || { width: 900, height: 650 });
  const [isResizing, setIsResizing] = useState(false);
  const resizeRef = useRef({ direction: null, startX: 0, startY: 0, startWidth: 0, startHeight: 0, startLeft: 0, startTop: 0 });

  if (window.isMinimized) return null;

  const WindowComponent = window.component;

  const handleClose = (e) => {
    e.stopPropagation();
    closeWindow(window.id);
  };

  const handleMinimize = (e) => {
    e.stopPropagation();
    minimizeWindow(window.id);
  };

  const handleMaximize = (e) => {
    e.stopPropagation();
    maximizeWindow(window.id);
  };

  const handleMouseDown = () => {
    setActiveWindow(window.id);
  };

  const handleDrag = (e, data) => {
    setPosition({ x: data.x, y: data.y });
  };

  const handleResizeMove = useCallback((e) => {
    const { direction, startX, startY, startWidth, startHeight, startLeft, startTop } = resizeRef.current;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    let newWidth = startWidth;
    let newHeight = startHeight;
    let newLeft = startLeft;
    let newTop = startTop;

    // Minimum size constraints
    const minWidth = 400;
    const minHeight = 300;

    if (direction.includes('e')) {
      newWidth = Math.max(minWidth, startWidth + deltaX);
    }
    if (direction.includes('w')) {
      const potentialWidth = startWidth - deltaX;
      if (potentialWidth >= minWidth) {
        newWidth = potentialWidth;
        newLeft = startLeft + deltaX;
      }
    }
    if (direction.includes('s')) {
      newHeight = Math.max(minHeight, startHeight + deltaY);
    }
    if (direction.includes('n')) {
      const potentialHeight = startHeight - deltaY;
      if (potentialHeight >= minHeight) {
        newHeight = potentialHeight;
        newTop = startTop + deltaY;
      }
    }

    setSize({ width: newWidth, height: newHeight });
    setPosition({ x: newLeft, y: newTop });
  }, []);

  const handleResizeEnd = useCallback(() => {
    setIsResizing(false);
    document.removeEventListener('mousemove', handleResizeMove);
    document.removeEventListener('mouseup', handleResizeEnd);
  }, [handleResizeMove]);

  const handleResizeStart = useCallback((e, direction) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setActiveWindow(window.id);
    
    resizeRef.current = {
      direction,
      startX: e.clientX,
      startY: e.clientY,
      startWidth: size.width,
      startHeight: size.height,
      startLeft: position.x,
      startTop: position.y,
    };

    document.addEventListener('mousemove', handleResizeMove);
    document.addEventListener('mouseup', handleResizeEnd);
  }, [size.width, size.height, position.x, position.y, setActiveWindow, window.id, handleResizeMove, handleResizeEnd]);

  useEffect(() => {
    return () => {
      document.removeEventListener('mousemove', handleResizeMove);
      document.removeEventListener('mouseup', handleResizeEnd);
    };
  }, [handleResizeMove, handleResizeEnd]);

  const windowVariants = {
    initial: { scale: 0.9, opacity: 0, y: 30, filter: 'blur(8px)' },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }
    },
    exit: { 
      scale: 0.9, 
      opacity: 0, 
      y: 20,
      filter: 'blur(6px)',
      transition: {
        duration: 0.2,
        ease: 'easeInOut'
      }
    },
  };

  const windowStyle = window.isMaximized
    ? {
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: window.zIndex,
      }
    : {
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: `${size.width}px`,
        height: `${size.height}px`,
        zIndex: window.zIndex,
      };

  const windowContent = (
    <motion.div
      ref={nodeRef}
      className={`overflow-hidden ${
        window.isMaximized ? 'rounded-none' : 'rounded-lg'
      }`}
      style={{
        ...windowStyle,
        boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}
      variants={windowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={handleMouseDown}
    >
      {/* Windows 11 Title Bar */}
      <div className={`h-8 flex items-center justify-between px-3 cursor-move select-none ${
        ['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id)
          ? 'bg-white/80 backdrop-blur-sm border-b border-gray-200'
          : 'bg-[#2d2d2d] border-b border-[#3c3c3c]'
      }`}>
        <div className="flex items-center gap-2">
          <span className={['spotify', 'whatsapp', 'telegram', 'word', 'steam', 'vlc', 'vscode', 'chrome', 'vscode-desktop'].includes(window.id) ? 'text-sm' : 'text-base'}>{window.icon || '📁'}</span>
          <span className={`text-xs font-normal ${
            ['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id)
              ? 'text-gray-800'
              : 'text-white'
          }`}>{window.title}</span>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleMinimize}
            className={`w-11 h-8 flex items-center justify-center transition-colors group ${
              ['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id)
                ? 'hover:bg-gray-200'
                : 'hover:bg-[#3c3c3c]'
            }`}
            title="Minimize"
          >
            <svg width="10" height="1" viewBox="0 0 10 1" className={['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id) ? 'text-gray-800' : 'text-white'}>
              <rect width="10" height="1" fill="currentColor" />
            </svg>
          </button>
          <button
            onClick={handleMaximize}
            className={`w-11 h-8 flex items-center justify-center transition-colors group ${
              ['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id)
                ? 'hover:bg-gray-200'
                : 'hover:bg-[#3c3c3c]'
            }`}
            title="Maximize"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" className={['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id) ? 'text-gray-800' : 'text-white'}>
              <rect width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
          <button
            onClick={handleClose}
            className={`w-11 h-8 hover:bg-red-600 flex items-center justify-center transition-colors group`}
            title="Close"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" className="text-white group-hover:text-white">
              <path d="M0,0 L10,10 M10,0 L0,10" stroke="currentColor" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className={`h-[calc(100%-32px)] overflow-auto ${
        ['about', 'projects', 'skills', 'contact', 'resume'].includes(window.id)
          ? 'bg-transparent'
          : 'bg-[#202020]'
      }`}>
        <WindowComponent />
      </div>

      {/* Resize Handles - Only show when not maximized */}
      {!window.isMaximized && (
        <>
          {/* Corner Handles - 8x8px hit areas */}
          <div
            className="absolute top-0 left-0 w-2 h-2 cursor-nw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'nw')}
            style={{ width: '8px', height: '8px', zIndex: 1001 }}
          />
          <div
            className="absolute top-0 right-0 w-2 h-2 cursor-ne-resize"
            onMouseDown={(e) => handleResizeStart(e, 'ne')}
            style={{ width: '8px', height: '8px', zIndex: 1001 }}
          />
          <div
            className="absolute bottom-0 left-0 w-2 h-2 cursor-sw-resize"
            onMouseDown={(e) => handleResizeStart(e, 'sw')}
            style={{ width: '8px', height: '8px', zIndex: 1001 }}
          />
          <div
            className="absolute bottom-0 right-0 w-2 h-2 cursor-se-resize"
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            style={{ width: '8px', height: '8px', zIndex: 1001 }}
          />

          {/* Edge Handles - 4px wide/tall hit areas */}
          <div
            className="absolute top-0 left-2 right-2 cursor-n-resize"
            onMouseDown={(e) => handleResizeStart(e, 'n')}
            style={{ height: '4px', zIndex: 1001 }}
          />
          <div
            className="absolute bottom-0 left-2 right-2 cursor-s-resize"
            onMouseDown={(e) => handleResizeStart(e, 's')}
            style={{ height: '4px', zIndex: 1001 }}
          />
          <div
            className="absolute left-0 top-2 bottom-2 cursor-w-resize"
            onMouseDown={(e) => handleResizeStart(e, 'w')}
            style={{ width: '4px', zIndex: 1001 }}
          />
          <div
            className="absolute right-0 top-2 bottom-2 cursor-e-resize"
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            style={{ width: '4px', zIndex: 1001 }}
          />
        </>
      )}
    </motion.div>
  );

  // Only draggable if not maximized
  if (window.isMaximized) {
    return windowContent;
  }

  return (
    <Draggable
      nodeRef={nodeRef}
      handle=".cursor-move"
      position={position}
      onDrag={handleDrag}
      disabled={isResizing}
    >
      {windowContent}
    </Draggable>
  );
};

export default Window;
