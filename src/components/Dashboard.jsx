import { GAME_MODES, LEVELS } from '../data/lessonData';

function Dashboard({
  selectedLanguage,
  currentLevel,
  setCurrentLevel,
  stats,
  achievements,
  currentUser,
  onModeSelect,
  onLogout,
  onBack
}) {
  const langStats = stats[selectedLanguage];
  const streakDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">LinguaQuest</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <span className="username-display">@{currentUser}</span>
          <button className="btn btn-outline" onClick={onLogout}>
            Logout
          </button>
          <button className="btn btn-outline" onClick={onBack}>
            Change Language
          </button>
        </div>
      </div>

      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {selectedLanguage === 'spanish' ? '¡Hola!' : '안녕하세요!'} Welcome back!
            </h2>
            <div className="level-badge">
              <span>Level {langStats.level}</span>
              <span>•</span>
              <span>{langStats.xp} XP</span>
            </div>
          </div>
          <div style={{ fontSize: '4rem' }}>
            {selectedLanguage === 'spanish' ? '🇪🇸' : '🇰🇷'}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              Level Progress
            </span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              {langStats.xp % 100} / 100 XP
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${(langStats.xp % 100)}%`,
                background: selectedLanguage === 'spanish'
                  ? 'linear-gradient(90deg, var(--spanish-primary), var(--spanish-accent))'
                  : 'linear-gradient(90deg, var(--korean-primary), var(--korean-accent))'
              }}
            />
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-value">{langStats.lessonsCompleted}</div>
            <div className="stat-label">Lessons Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{langStats.streak}</div>
            <div className="stat-label">Day Streak 🔥</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{currentLevel}</div>
            <div className="stat-label">Current Level</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{achievements.filter(a => a.unlocked).length}</div>
            <div className="stat-label">Achievements</div>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h4 style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Weekly Streak</h4>
          <div className="streak-container">
            {streakDays.map((day, i) => (
              <div key={i} className={`streak-day ${i < langStats.streak ? 'active' : ''}`}>
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Select Your Level</h2>
        <div className="tabs">
          {LEVELS.map(level => (
            <button
              key={level}
              className={`tab ${currentLevel === level ? 'active' : ''}`}
              onClick={() => setCurrentLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Choose Your Mode</h2>
        <div className="mode-grid">
          {GAME_MODES.map(mode => (
            <div
              key={mode.id}
              className="mode-card"
              onClick={() => onModeSelect(mode.id)}
            >
              <div className="mode-icon">{mode.icon}</div>
              <h3 style={{ marginBottom: '0.5rem' }}>{mode.name}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {mode.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Achievements</h2>
        <div className="achievement-grid">
          {achievements.map(achievement => (
            <div
              key={achievement.id}
              className={`achievement ${achievement.unlocked ? 'unlocked' : ''}`}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <div className="achievement-name">{achievement.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
