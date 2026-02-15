import { useState } from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';

function App() {
  const [screen, setScreen] = useState('landing');
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [currentLevel, setCurrentLevel] = useState('A1');
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [stats, setStats] = useState({
    spanish: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 },
    korean: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 }
  });
  const [achievements, setAchievements] = useState([
    { id: 1, name: 'First Steps', icon: '👶', unlocked: false },
    { id: 2, name: 'Streak Master', icon: '🔥', unlocked: false },
    { id: 3, name: 'Polyglot', icon: '🌍', unlocked: false },
    { id: 4, name: 'Perfect Score', icon: '💯', unlocked: false },
    { id: 5, name: 'Speed Demon', icon: '⚡', unlocked: false },
    { id: 6, name: 'Grammar Guru', icon: '📖', unlocked: false }
  ]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setScreen('dashboard');
  };

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setScreen('lesson');
    setCurrentLessonIndex(0);
  };

  const updateStats = (language, xpGain) => {
    setStats(prev => ({
      ...prev,
      [language]: {
        ...prev[language],
        xp: prev[language].xp + xpGain,
        lessonsCompleted: prev[language].lessonsCompleted + 1
      }
    }));

    // Check achievements
    if (stats[language].lessonsCompleted === 0) {
      unlockAchievement(1);
    }
  };

  const unlockAchievement = (id) => {
    setAchievements(prev =>
      prev.map(a => a.id === id ? { ...a, unlocked: true } : a)
    );
  };

  return (
    <>
      <div className="animated-bg" />
      {screen === 'landing' && (
        <Landing onLanguageSelect={handleLanguageSelect} />
      )}
      {screen === 'dashboard' && (
        <Dashboard
          selectedLanguage={selectedLanguage}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          stats={stats}
          achievements={achievements}
          onModeSelect={handleModeSelect}
          onBack={() => setScreen('landing')}
        />
      )}
      {screen === 'lesson' && (
        <Lesson
          selectedLanguage={selectedLanguage}
          selectedMode={selectedMode}
          currentLevel={currentLevel}
          currentLessonIndex={currentLessonIndex}
          setCurrentLessonIndex={setCurrentLessonIndex}
          updateStats={updateStats}
          onBack={() => setScreen('dashboard')}
        />
      )}
    </>
  );
}

export default App;
