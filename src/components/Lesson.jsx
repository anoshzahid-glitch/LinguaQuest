import { useState } from 'react';
import { LESSON_DATA } from '../data/lessonData';

function Lesson({
  selectedLanguage,
  selectedMode,
  currentLevel,
  currentLessonIndex,
  setCurrentLessonIndex,
  updateStats,
  onBack
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const getLessonData = () => {
    if (!selectedLanguage || !currentLevel) return [];
    const allLessons = LESSON_DATA[selectedLanguage][currentLevel] || [];

    // Filter lessons based on game mode with smart fallbacks
    let filteredLessons = [];

    if (selectedMode === 'vocabulary') {
      // Vocabulary mode: focus on words, numbers, alphabet
      filteredLessons = allLessons.filter(lesson =>
        lesson.type === 'vocabulary' || lesson.type === 'numbers' || lesson.type === 'alphabet'
      );
    } else if (selectedMode === 'conversation') {
      // Conversation mode: real-world scenarios
      filteredLessons = allLessons.filter(lesson =>
        lesson.type === 'conversation' || lesson.type === 'vocabulary'
      );
      // Fallback: if no conversation lessons, show all vocabulary
      if (filteredLessons.length === 0) {
        filteredLessons = allLessons.filter(lesson => lesson.type === 'vocabulary');
      }
    } else if (selectedMode === 'battle') {
      // Battle mode: grammar challenges and advanced content
      filteredLessons = allLessons.filter(lesson =>
        lesson.type === 'grammar' || lesson.type === 'advanced' || lesson.type === 'idiom' || lesson.type === 'honorific'
      );
      // Fallback for beginner levels: show all lessons if no advanced content
      if (filteredLessons.length === 0 && (currentLevel === 'A1' || currentLevel === 'A2')) {
        filteredLessons = allLessons; // Show all available lessons for beginners
      }
    } else {
      // Story mode: all lesson types for comprehensive learning
      filteredLessons = allLessons;
    }

    // Safety check: if somehow no lessons, return all
    return filteredLessons.length > 0 ? filteredLessons : allLessons;
  };

  const lessons = getLessonData();
  const currentLesson = lessons[currentLessonIndex];

  const handleAnswerSelect = (index) => {
    if (feedback) return; // Already answered

    setSelectedAnswer(index);
    const isCorrect = index === currentLesson.correct;
    setFeedback({
      correct: isCorrect,
      explanation: currentLesson.explanation
    });

    // Update stats
    if (isCorrect) {
      const xpGain = currentLevel === 'A1' ? 10 : currentLevel === 'A2' ? 15 : currentLevel === 'B1' ? 20 : currentLevel === 'B2' ? 25 : currentLevel === 'C1' ? 30 : 35;
      updateStats(selectedLanguage, xpGain);
    }
  };

  const handleNext = () => {
    if (currentLessonIndex < lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setSelectedAnswer(null);
      setFeedback(null);
    } else {
      onBack();
    }
  };

  if (!currentLesson) {
    return (
      <div className="container">
        <div className="glass-card" style={{ textAlign: 'center' }}>
          <h2>No lessons available for this level yet!</h2>
          <button
            className="btn btn-outline"
            onClick={onBack}
            style={{ marginTop: '2rem' }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentLessonIndex + 1) / lessons.length) * 100;

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">LinguaQuest</h1>
        <button className="btn btn-outline" onClick={onBack}>
          Exit Lesson
        </button>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span className="mono" style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            Lesson {currentLessonIndex + 1} of {lessons.length}
          </span>
          <span className="level-badge">
            {currentLevel} • {currentLesson.type}
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
              background: selectedLanguage === 'spanish'
                ? 'linear-gradient(90deg, var(--spanish-primary), var(--spanish-accent))'
                : 'linear-gradient(90deg, var(--korean-primary), var(--korean-accent))'
            }}
          />
        </div>
      </div>

      <div className="lesson-card">
        <div className="question">
          {currentLesson.question}
          {selectedLanguage === 'korean' && (
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem', fontStyle: 'italic' }}>
              💡 Korean text includes romanization in parentheses for pronunciation help
            </div>
          )}
        </div>

        <div className="answer-grid">
          {currentLesson.options.map((option, index) => {
            // Check if option contains Korean characters
            const hasKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(option);
            // Extract romanization if present in parentheses
            const romanizationMatch = option.match(/\(([^)]+)\)/);
            const displayText = hasKorean && romanizationMatch ? option : option;

            return (
              <div
                key={index}
                className={`answer-option ${
                  selectedAnswer === index
                    ? feedback?.correct
                      ? 'correct'
                      : 'incorrect'
                    : ''
                } ${
                  feedback && index === currentLesson.correct
                    ? 'correct'
                    : ''
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                <div>{displayText}</div>
                {selectedLanguage === 'korean' && hasKorean && !romanizationMatch && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {/* Romanization helper for pure Korean text */}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {feedback && (
          <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              {feedback.correct ? '✅ Correct!' : '❌ Incorrect'}
            </div>
            <p>{feedback.explanation}</p>
            
            {currentLesson.vocabulary && (
              <div className="vocab-card" style={{ marginTop: '1rem', textAlign: 'left' }}>
                <div className="vocab-word">
                  {currentLesson.vocabulary.word}
                  {currentLesson.vocabulary.romanization && (
                    <span style={{ fontSize: '1rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                      ({currentLesson.vocabulary.romanization})
                    </span>
                  )}
                </div>
                <div className="vocab-translation">{currentLesson.vocabulary.translation}</div>
                {currentLesson.vocabulary.example && (
                  <div className="vocab-example">
                    Example: {currentLesson.vocabulary.example}
                  </div>
                )}
              </div>
            )}

            {currentLesson.grammar && (
              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', textAlign: 'left' }}>
                <div style={{ fontWeight: '600', marginBottom: '0.5rem', color: 'var(--korean-primary)' }}>
                  📖 Grammar Point
                </div>
                <div style={{ color: 'var(--text-muted)' }}>
                  {currentLesson.grammar}
                </div>
              </div>
            )}

            <button
              className={selectedLanguage === 'spanish' ? 'btn btn-spanish' : 'btn btn-korean'}
              onClick={handleNext}
              style={{ marginTop: '1.5rem' }}
            >
              {currentLessonIndex < lessons.length - 1 ? 'Next Lesson →' : 'Complete ✓'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Lesson;
