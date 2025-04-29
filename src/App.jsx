import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import './App.css'

// App screenshots from public/Images folder
const screenshots = [
  { id: 1, src: '/Images/Image1.jpeg', alt: 'Smart Gallery Screenshot 1' },
  { id: 2, src: '/Images/Image2.jpeg', alt: 'Smart Gallery Screenshot 2' },
  { id: 3, src: '/Images/Image3.jpeg', alt: 'Smart Gallery Screenshot 3' },
  { id: 4, src: '/Images/Image4.jpeg', alt: 'Smart Gallery Screenshot 4' },
  { id: 5, src: '/Images/Image5.jpeg', alt: 'Smart Gallery Screenshot 5' },
  { id: 6, src: '/Images/Image6.jpeg', alt: 'Smart Gallery Screenshot 6' },
  { id: 7, src: '/Images/Image7.jpeg', alt: 'Smart Gallery Screenshot 7' },
  { id: 8, src: '/Images/Image8.jpeg', alt: 'Smart Gallery Screenshot 8' },
  { id: 9, src: '/Images/Image9.jpeg', alt: 'Smart Gallery Screenshot 9' },
];

// Video from public/Vedio folder
const videos = [
  { id: 1, src: '/Vedio/Vedio.mp4', title: 'Smart Gallery Demo' },
];

// Features list
const features = [
  { id: 1, name: 'AI Caption Generator', description: 'Automatically generate captions for your photos using AI' },
  { id: 2, name: 'Hidden Albums', description: 'Keep your private photos secure with password-protected albums' },
  { id: 3, name: 'AI Image Q&A', description: 'Ask questions about your photos and get intelligent answers' },
  { id: 4, name: 'Dynamic Filtering', description: 'Filter your photos by people, places, objects, and more' },
  { id: 5, name: 'Futuristic Image Generation', description: 'Create new images with AI based on your descriptions' },
  { id: 6, name: 'Smart Sorting', description: 'Automatically organize your photos by date, location, and content' },
  { id: 7, name: 'Face Classification', description: 'Automatically identify and group photos by people and faces' },
  { id: 8, name: 'Object Detection', description: 'Identify and categorize objects within your photos' },
  { id: 9, name: 'Edit with Prompts', description: 'Edit your images using natural language prompts' },
  { id: 10, name: 'Favorites Section', description: 'Save and organize your favorite photos in one place' },
  { id: 11, name: 'Smart Albums', description: 'Auto-generated albums based on events, locations, and people' },
  { id: 12, name: 'Recently Deleted', description: 'Recover photos you accidentally deleted within 30 days' },
  { id: 13, name: 'Advanced Filtration', description: 'Filter images by colors, composition, and visual elements' },
  { id: 14, name: 'Setting', description: 'Customize your app preferences and configurations' },
  { id: 15, name: 'Profile', description: 'Manage your user profile and account information' },
];

// Tab component
const Tab = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-3 transition-all duration-300 ${selected
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 text-white-700 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'}
      `}
    >
      {children}
    </button>
  );
};

// Phone frame component for screenshots
const PhoneFrame = ({ children }) => {
  return (
    <div className="relative rounded-2xl border border-gray-300 shadow-lg p-2 bg-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="phone-notch"></div>
      {children}
    </div>
  );
};

// Screenshot section
const ScreenshotsSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {screenshots.map((screenshot) => (
        <PhoneFrame key={screenshot.id}>
          <img 
            src={screenshot.src} 
            alt={screenshot.alt} 
            className="w-full h-auto rounded-xl object-cover"
            loading="lazy"
          />
        </PhoneFrame>
      ))}
    </motion.div>
  );
};

// Video section
const VideosSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Watch Smart Gallery in Action</h2>
      <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="aspect-[9/16] bg-gray-100 max-w-[320px] mx-auto">
              <video 
                src={video.src} 
                controls 
                className="w-full h-full object-contain"
                poster="/Images/Image1.jpeg"
              ></video>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Feature section
const FeaturesSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-center mb-8">App Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="flex items-start space-x-3 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-md transition-all duration-300"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <CheckIcon className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">{feature.name}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Theme toggle component
const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button 
      onClick={toggleDarkMode}
      className={`fixed top-4 right-4 z-50 p-2 rounded-full transition-colors duration-300 ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-gray-800'}`}
      aria-label="Toggle dark mode"
    >
      {darkMode ? <SunIcon className="w-7 h-7" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('screenshots');
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#f9fafb] text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Theme Toggle */}
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-[#0f172a]'}`}>Smart Gallery</h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-500'}`}>Your AI-powered photo organizer</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Tab 
            selected={activeTab === 'screenshots'} 
            onClick={() => setActiveTab('screenshots')}
          >
            App Screenshots
          </Tab>
          <Tab 
            selected={activeTab === 'videos'} 
            onClick={() => setActiveTab('videos')}
          >
            Videos
          </Tab>
          <Tab 
            selected={activeTab === 'features'} 
            onClick={() => setActiveTab('features')}
          >
            Features
          </Tab>
        </div>

        {/* Content Section */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeTab === 'screenshots' && <ScreenshotsSection />}
            {activeTab === 'videos' && <VideosSection />}
            {activeTab === 'features' && <FeaturesSection />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
