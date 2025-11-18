// Main App component - manages all screens and navigation
import React, { useState } from 'react';
import { OnboardingWelcome } from './components/screens/Welcome.jsx';
import { OnboardingGoalSelection } from './components/screens/Goals.jsx';
import { OnboardingDifficulty } from './components/screens/Difficulty.jsx';
import { OnboardingCommitment } from './components/screens/Commitment.jsx';
import { HomeScreen } from './components/screens/Home.jsx';
import { UpdateStreakModal } from './components/screens/UpdateModal.jsx';
import { StatsScreen } from './components/screens/Stats.jsx';
import { ProfileScreen } from './components/screens/Profile.jsx';

function App() 
{
  // Track which screen we're on
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [streakJustUpdated, setStreakJustUpdated] = useState(false);

  // User's settings
  const [goal, setGoal] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [commitment, setCommitment] = useState(30);

  // Handle when user picks a goal
  const handleGoalSelect = (selectedGoal) => 
  {
    setGoal(selectedGoal);
    setCurrentScreen('difficulty');
  };

  // Handle when user picks difficulty
  const handleDifficultySelect = (selectedDifficulty) => 
  {
    setDifficulty(selectedDifficulty);
    setCurrentScreen('commitment');
  };

  // Handle when user sets commitment days
  const handleCommitmentSelect = (selectedCommitment) => 
  {
    setCommitment(selectedCommitment);
    setCurrentScreen('home');
  };

  // Handle streak update
  const handleStreakUpdate = () => 
  {
    setStreakJustUpdated(true);
  };

  // Reset animation flag
  const handleAnimationComplete = () => 
  {
    setStreakJustUpdated(false);
  };

  return (
    <div>
      <div className="w-full max-w-390 mx-auto min-h-screen relative overflow-hidden" style={{ background: '#121212' }}>
        {/* Background gradient blurs for effect */}
        <div className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,59,48,0.10)', filter: 'blur(100px)', transform: 'translate(-50%, -50%)' }}></div>
        <div className="fixed bottom-0 right-0 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(255,214,10,0.10)', filter: 'blur(100px)', transform: 'translate(50%, 50%)' }}></div>

        <div className="relative z-10">
          {/* Show welcome screen */}
          {currentScreen === 'welcome' && (
            <OnboardingWelcome onNext={() => setCurrentScreen('goal')} />
          )}

          {/* Show goal selection */}
          {currentScreen === 'goal' && (
            <OnboardingGoalSelection
              onNext={handleGoalSelect}
              onBack={() => setCurrentScreen('welcome')}
            />
          )}

          {/* Show difficulty selection */}
          {currentScreen === 'difficulty' && (
            <OnboardingDifficulty
              onNext={handleDifficultySelect}
              onBack={() => setCurrentScreen('goal')}
            />
          )}

          {/* Show commitment screen */}
          {currentScreen === 'commitment' && (
            <OnboardingCommitment
              onNext={handleCommitmentSelect}
              onBack={() => setCurrentScreen('difficulty')}
            />
          )}

          {/* Show home screen */}
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

          {/* Show stats screen */}
          {currentScreen === 'stats' && (
            <StatsScreen onBack={() => setCurrentScreen('home')} commitment={commitment} />
          )}

          {/* Show profile screen */}
          {currentScreen === 'profile' && (
            <ProfileScreen onBack={() => setCurrentScreen('home')} goal={goal} difficulty={difficulty} />
          )}

          {/* Update streak modal */}
          <UpdateStreakModal isOpen={isUpdateModalOpen} onClose={() => setIsUpdateModalOpen(false)} onSubmit={handleStreakUpdate} />
        </div>
      </div>
    </div>
  );
}

export default App;