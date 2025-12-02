import { motion } from 'framer-motion';
import useWindowStore from '../store/windowStore';
import { useState, useEffect } from 'react';

const DesktopIcon = ({ id, title, icon, component }) => {
  const openWindow = useWindowStore((state) => state.openWindow);
  const [clicks, setClicks] = useState(0);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setClicks(0), 300);
    return () => clearTimeout(timer);
  }, [clicks]);

  const handleClick = () => {
    setClicks((prev) => prev + 1);
    setSelected(true);

    if (clicks === 1) {
      // Double click
      openWindow(id, title, component, icon);
      setClicks(0);
      setSelected(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 400, damping: 15 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      className={`w-[60px] h-[60px] flex flex-col items-center justify-center cursor-pointer ${
        selected ? 'bg-white/20 border border-white/40' : 'hover:bg-white/10'
      } rounded p-0.5 transition-all duration-200`}
      onClick={handleClick}
      data-app-id={id}
    >
      <div className="mb-0.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
        {typeof icon === 'string' ? (
          <div className="text-lg">{icon}</div>
        ) : (
          icon
        )}
      </div>
      <span className="text-[10px] text-white text-center font-normal leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] px-0.5">
        {title}
      </span>
    </motion.div>
  );
};

export default DesktopIcon;
