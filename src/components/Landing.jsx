function Landing({ onLanguageSelect }) {
  return (
    <div className="landing">
      <h1 className="hero-title">LinguaQuest</h1>
      <p className="hero-subtitle">
        Master Spanish & Korean through immersive gameplay
      </p>
      <div className="language-selector">
        <div
          className="language-card spanish"
          onClick={() => onLanguageSelect('spanish')}
        >
          <div className="language-flag">🇪🇸</div>
          <h3 className="language-name">Spanish</h3>
          <p className="language-desc">
            From tapas to tango, master the romance
          </p>
        </div>
        <div
          className="language-card korean"
          onClick={() => onLanguageSelect('korean')}
        >
          <div className="language-flag">🇰🇷</div>
          <h3 className="language-name">Korean</h3>
          <p className="language-desc">
            From K-pop to kimchi, embrace the culture
          </p>
        </div>
      </div>
      <div style={{ marginTop: '3rem', color: 'var(--text-muted)' }}>
        <p className="mono" style={{ fontSize: '0.875rem' }}>
          ✨ Interactive Stories • 🎮 Gamified Learning • 🏆 Achievements
        </p>
      </div>
    </div>
  );
}

export default Landing;
