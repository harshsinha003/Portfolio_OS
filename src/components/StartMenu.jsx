import { motion } from 'framer-motion';
import useWindowStore from '../store/windowStore';
import AboutApp from '../apps/AboutApp';
import ProjectsApp from '../apps/ProjectsApp';
import SkillsApp from '../apps/SkillsApp';
import ContactApp from '../apps/ContactApp';
import ResumeApp from '../apps/ResumeApp';
import { 
  GitHubIcon,
  VSCodeIcon,
  WebStormIcon,
  PyCharmIcon,
  SublimeIcon,
  PostmanIcon,
  DockerIcon,
  MongoDBIcon,
  FigmaIcon,
  PhotoshopIcon,
  SquooshIcon,
  FirefoxIcon,
  ChromeIcon,
  EdgeIcon,
  ZoomIcon,
  WhatsAppIcon,
  TwitterIcon,
  LinkedInIcon
} from './Icons';

const StartMenu = ({ onClose }) => {
  const openWindow = useWindowStore((state) => state.openWindow);

  const pinnedApps = [
    { id: 'github', title: 'GitHub', icon: <GitHubIcon />, component: AboutApp },
    { id: 'vscode', title: 'VSCode', icon: <VSCodeIcon />, component: ProjectsApp },
    { id: 'webstorm', title: 'WebStorm', icon: <WebStormIcon />, component: SkillsApp },
    { id: 'pycharm', title: 'PyCharm', icon: <PyCharmIcon />, component: ContactApp },
    { id: 'sublime', title: 'Sublime', icon: <SublimeIcon />, component: AboutApp },
    { id: 'postman', title: 'Postman', icon: <PostmanIcon />, component: ProjectsApp },
    { id: 'docker', title: 'Docker', icon: <DockerIcon />, component: SkillsApp },
    { id: 'compass', title: 'Compass', icon: <MongoDBIcon />, component: ContactApp },
    { id: 'figma', title: 'Figma', icon: <FigmaIcon />, component: ResumeApp },
    { id: 'photoshop', title: 'Photoshop', icon: <PhotoshopIcon />, component: AboutApp },
    { id: 'squoosh', title: 'Squoosh', icon: <SquooshIcon />, component: ProjectsApp },
    { id: 'firefox', title: 'Firefox', icon: <FirefoxIcon />, component: SkillsApp },
    { id: 'chrome', title: 'Chrome', icon: <ChromeIcon />, component: ContactApp },
    { id: 'edge', title: 'Edge', icon: <EdgeIcon />, component: ResumeApp },
    { id: 'zoom', title: 'Zoom', icon: <ZoomIcon />, component: ProjectsApp },
    { id: 'whatsapp', title: 'WhatsApp', icon: <WhatsAppIcon />, component: SkillsApp },
    { id: 'twitter', title: 'Twitter', icon: <TwitterIcon />, component: ContactApp },
    { id: 'linkedin', title: 'LinkedIn', icon: <LinkedInIcon />, component: AboutApp },
  ];

  const handleAppClick = (app) => {
    openWindow(app.id, app.title, app.component, app.icon);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(10px)' }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 35,
        mass: 0.6
      }}
      className="fixed bottom-14 w-[650px] bg-[#1f2937]/70 backdrop-blur-3xl rounded-2xl overflow-hidden z-50 border border-white/20"
      style={{ 
        left: 'calc(50% - 325px)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 0 rgba(255,255,255,0.1)',
        background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.7) 0%, rgba(17, 24, 39, 0.8) 100%)'
      }}
    >
      {/* Search Bar */}
      <div className="p-6 pb-4">
        <div className="w-full h-10 px-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 16 16" className="text-gray-400">
            <circle cx="7" cy="7" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M11.5 11.5 L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input 
            type="text" 
            placeholder="Type here to search"
            className="flex-1 bg-transparent text-sm text-white placeholder-gray-400 outline-none"
          />
        </div>
      </div>

      {/* Pinned Apps Section */}
      <div className="px-6 pb-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[11px] font-medium text-white/80">Pinned</h3>
          <button className="text-[10px] text-white/70 hover:text-white flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded transition-colors">
            All Apps
            <svg width="8" height="8" viewBox="0 0 12 12" className="text-white/70">
              <path d="M4 2 L8 6 L4 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </button>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-6 gap-1">
          {pinnedApps.map((app, index) => (
            <motion.button
              key={app.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.02,
                type: 'spring',
                stiffness: 400,
                damping: 30
              }}
              whileHover={{ 
                backgroundColor: 'rgba(255,255,255,0.12)',
                scale: 1.05,
                transition: { duration: 0.15 }
              }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              onClick={() => handleAppClick(app)}
              className="flex flex-col items-center justify-center p-3 rounded-lg transition-colors"
            >
              <div className="w-11 h-11 mb-2 flex items-center justify-center scale-110">{app.icon}</div>
              <span className="text-[10px] text-white/85 text-center leading-tight">{app.title}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recommended Section */}
      <div className="px-6 py-3 border-t border-white/10">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[11px] font-medium text-white/80">Recommended</h3>
          <button className="text-[10px] text-white/70 hover:text-white flex items-center gap-1 px-2 py-0.5 hover:bg-white/10 rounded transition-colors">
            More
            <svg width="8" height="8" viewBox="0 0 12 12" className="text-white/70">
              <path d="M4 2 L8 6 L4 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <LinkedInIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">LinkedIn</div>
              <div className="text-[9px] text-white/50 truncate">Connect on LinkedIn</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <FirefoxIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">Firefox</div>
              <div className="text-[9px] text-white/50 truncate">Sunday at 10:14 AM</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <PyCharmIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">PyCharm</div>
              <div className="text-[9px] text-white/50 truncate">August 26</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <PostmanIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">Postman</div>
              <div className="text-[9px] text-white/50 truncate">August 25</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <TwitterIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">Twitter</div>
              <div className="text-[9px] text-white/50 truncate">Connect on Twitter</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer">
            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
              <ZoomIcon />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-white/90 font-medium truncate">Zoom</div>
              <div className="text-[9px] text-white/50 truncate">Recently added</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 bg-white/5 backdrop-blur-sm border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 flex-1 hover:bg-white/10 p-1.5 -ml-1.5 rounded-lg transition-colors cursor-pointer">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-[10px] font-bold">
            HS
          </div>
          <span className="text-[11px] text-white/90 font-medium">Harshvardhan Sinha</span>
        </div>
        <button className="w-9 h-9 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors" title="Power">
          <svg width="15" height="15" viewBox="0 0 16 16" className="text-white/90">
            <path d="M8 2 V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 4.5 C2.5 6 2 7.5 2 9.5 C2 12.5 4.5 15 8 15 C11.5 15 14 12.5 14 9.5 C14 7.5 13.5 6 12 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default StartMenu;
