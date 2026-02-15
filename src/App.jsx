import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Lesson from './components/Lesson';
import Auth from './components/Auth';
import { logout } from './utils/auth';
import { loadUserData, saveUserData, getSession } from './utils/storage';

function App() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // App state
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

  // Check session on mount
  useEffect(() => {
    const session = getSession();
    if (session?.currentUser) {
      const userData = loadUserData(session.currentUser);
      if (userData) {
        setIsAuthenticated(true);
        setCurrentUser(session.currentUser);

        // Hydrate state from localStorage
        setStats(userData.stats);
        setAchievements(userData.achievements);
        setCurrentLevel(userData.currentLevel);
        setSelectedLanguage(userData.selectedLanguage);
        setCurrentLessonIndex(userData.currentLessonIndex || 0);

        // Set screen based on saved state
        setScreen(userData.selectedLanguage ? 'dashboard' : 'landing');
      }
    }
  }, []);

  // Auto-save on state changes
  useEffect(() => {
    if (isAuthenticated && currentUser) {
      const userData = {
        stats,
        achievements,
        currentLevel,
        selectedLanguage,
        currentLessonIndex,
        lastUpdated: new Date().toISOString()
      };
      saveUserData(currentUser, userData);
    }
  }, [stats, achievements, currentLevel, selectedLanguage, currentLessonIndex, isAuthenticated, currentUser]);

  // Handle login
  const handleLogin = (username, userData) => {
    setIsAuthenticated(true);
    setCurrentUser(username);

    if (userData) {
      setStats(userData.stats);
      setAchievements(userData.achievements);
      setCurrentLevel(userData.currentLevel);
      setSelectedLanguage(userData.selectedLanguage);
      setCurrentLessonIndex(userData.currentLessonIndex || 0);
      setScreen(userData.selectedLanguage ? 'dashboard' : 'landing');
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setIsAuthenticated(false);
    setCurrentUser(null);

    // Reset to initial state
    setScreen('landing');
    setSelectedLanguage(null);
    setSelectedMode(null);
    setCurrentLevel('A1');
    setCurrentLessonIndex(0);
    setStats({
      spanish: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 },
      korean: { xp: 0, level: 1, streak: 0, lessonsCompleted: 0 }
    });
    setAchievements([
      { id: 1, name: 'First Steps', icon: '👶', unlocked: false },
      { id: 2, name: 'Streak Master', icon: '🔥', unlocked: false },
      { id: 3, name: 'Polyglot', icon: '🌍', unlocked: false },
      { id: 4, name: 'Perfect Score', icon: '💯', unlocked: false },
      { id: 5, name: 'Speed Demon', icon: '⚡', unlocked: false },
      { id: 6, name: 'Grammar Guru', icon: '📖', unlocked: false }
    ]);
  };

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

  // Show auth screen if not authenticated
  if (!isAuthenticated) {
    return (
      <>
        <div className="animated-bg" />
        <Auth onLogin={handleLogin} />
      </>
    );
  }

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
          currentUser={currentUser}
          onModeSelect={handleModeSelect}
          onLogout={handleLogout}
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
