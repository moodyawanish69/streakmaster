import React, { useState } from 'react';
// Use the actual files under src/components/screens (lowercase paths and kebab-case filenames)
import { OnboardingWelcome } from './src/components/screens/onboarding-welcome.jsx';
import { OnboardingGoalSelection } from './src/components/screens/onboarding-goal.jsx';
import { OnboardingDifficulty } from './src/components/screens/onboarding-difficulty.jsx';
import { OnboardingCommitment } from './src/components/screens/onboarding-commitment.jsx';
import { HomeScreen } from './src/components/screens/home.jsx';
import { UpdateStreakModal } from './src/components/screens/update-streak-modal.jsx';
import { StatsScreen } from './src/components/screens/stats.jsx';
import { ProfileScreen } from './src/components/screens/profile.jsx';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [streakJustUpdated, setStreakJustUpdated] = useState(false);

  const [goal, setGoal] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [commitment, setCommitment] = useState(30);

  const handleGoalSelect = (selectedGoal) => {
    setGoal(selectedGoal);
    setCurrentScreen('difficulty');
  };

  const handleDifficultySelect = (selectedDifficulty) => {
    setDifficulty(selectedDifficulty);
    setCurrentScreen('commitment');
  };

  const handleCommitmentSelect = (selectedCommitment) => {
    setCommitment(selectedCommitment);
    setCurrentScreen('home');
  };

  const handleStreakUpdate = () => {
    setStreakJustUpdated(true);
  };

  const handleAnimationComplete = () => {
    setStreakJustUpdated(false);
  };

  return (
    <div>
      <div className="w-full max-w-390 mx-auto min-h-screen relative overflow-hidden" style={{ background: '#121212' }}>
        <div className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,59,48,0.10)', filter: 'blur(100px)', transform: 'translate(-50%, -50%)' }}></div>
        <div className="fixed bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,214,10,0.10)', filter: 'blur(100px)', transform: 'translate(50%, 50%)' }}></div>

        <div className="relative z-10">
          {currentScreen === 'welcome' && (
            <OnboardingWelcome onNext={() => setCurrentScreen('goal')} />
          )}

          {currentScreen === 'goal' && (
            <OnboardingGoalSelection
              onNext={handleGoalSelect}
              onBack={() => setCurrentScreen('welcome')}
            />
          )}

          {currentScreen === 'difficulty' && (
            <OnboardingDifficulty
              onNext={handleDifficultySelect}
              onBack={() => setCurrentScreen('goal')}
            />
          )}

          {currentScreen === 'commitment' && (
            <OnboardingCommitment
              onNext={handleCommitmentSelect}
              onBack={() => setCurrentScreen('difficulty')}
            />
          )}

          {currentScreen === 'home' && (
            <HomeScreen
              goal={goal}
              difficulty={difficulty}
              commitment={commitment}
              onOpenUpdateModal={() => setIsUpdateModalOpen(true)}
              onNavigateToStats={() => setCurrentScreen('stats')}
              onNavigateToProfile={() => setCurrentScreen('profile')}
              streakJustUpdated={streakJustUpdated}
              onAnimationComplete={handleAnimationComplete}
            />
          )}

          {currentScreen === 'stats' && (
            <StatsScreen
              onBack={() => setCurrentScreen('home')}
              commitment={commitment}
            />
          )}

          {currentScreen === 'profile' && (
            <ProfileScreen
              onBack={() => setCurrentScreen('home')}
              goal={goal}
              difficulty={difficulty}
            />
          )}

          <UpdateStreakModal
            isOpen={isUpdateModalOpen}
            onClose={() => setIsUpdateModalOpen(false)}
            onSubmit={handleStreakUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
