/**
 * StartButton Component
 * Windows 11 style start button with colorful logo
 * @module components/Taskbar/StartButton
 */
const StartButton = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`h-10 w-10 flex items-center justify-center transition-all rounded-lg mx-0.5 ${
        isOpen ? 'bg-white/10' : 'hover:bg-white/8'
      }`}
      title="Start"
      aria-label="Open Start Menu"
      aria-expanded={isOpen}
    >
      <svg 
        width="16" 
        height="16" 
        viewBox="0 0 128 128" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path 
          fill="#0078d4" 
          d="M67.328 67.331h60.669V128H67.328zm-67.325 0h60.669V128H.003zM67.328 0h60.669v60.669H67.328zM.003 0h60.669v60.669H.003z"
        />
      </svg>
    </button>
  );
};

export default StartButton;
