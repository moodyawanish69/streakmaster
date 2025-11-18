// Home screen - main dashboard showing streak and progress
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Badge } from '../ui/Tag.jsx';
import { Flame, Trophy, Shield, Calendar, BarChart3, User } from '../Icons.jsx';
import confetti from 'canvas-confetti';

export function HomeScreen({
  goal,
  difficulty,
  commitment,
  onOpenUpdateModal,
  onNavigateToStats,
  onNavigateToProfile,
  streakJustUpdated = false,
  onAnimationComplete,
}) 
{
  // State for tracking streak data
  const [currentStreak, setCurrentStreak] = useState(12);
  const [points, setPoints] = useState(360);
  const [freezesRemaining, setFreezesRemaining] = useState(
    difficulty === 'easy' ? 10 : difficulty === 'medium' ? 5 : 0
  );
  const [showConfetti, setShowConfetti] = useState(false);

  // Handle streak update animation
  useEffect(() => 
  {
    if (streakJustUpdated) 
    {
      setShowConfetti(true);
      confetti({ particleCount: 80, spread: 70, origin: { x: 0.5, y: 0.5 }, colors: ['#FF3B30', '#FFD60A', '#FF6B30', '#FF9500'] });
      setCurrentStreak((p) => p + 1);
      setPoints((p) => p + 30);
      const timer = setTimeout(() => 
      {
        setShowConfetti(false);
        if (onAnimationComplete) onAnimationComplete();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [streakJustUpdated, onAnimationComplete]);

  // Week days and status
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekStatus = [true, true, true, false, true, true, true];
  
  // Random motivational quote
  const motivationalQuotes = ['Keep the fire alive!', 'One day at a time.', "You're building something great.", 'Consistency is key.', "Don't break the chain!"];
  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="flex flex-col min-h-screen px-6 py-8" style={{ background: '#121212' }}>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="capitalize" style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>{goal}</h3>
          <p className="text-sm" style={{ color: '#9ca3af' }}>Your daily journey</p>
        </div>
        <div className="flex gap-3">
          <button onClick={onNavigateToStats} className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#9ca3af' }}>
            <BarChart3 className="w-5 h-5" />
          </button>
          <button onClick={onNavigateToProfile} className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#9ca3af' }}>
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>

      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mb-8">
        <Card className="p-8 rounded-3xl relative overflow-hidden" style={streakJustUpdated ? { border: '2px solid #FF3B30', boxShadow: '0 0 40px rgba(255,59,48,0.6)', background: 'linear-gradient(135deg,#1a1a1a,#0a0a0a)' } : { border: '2px solid #2a2a2a', background: 'linear-gradient(135deg,#1a1a1a,#0a0a0a)' }}>
          <motion.div animate={{ boxShadow: ['0 0 40px #FF3B30', '0 0 80px #FF3B30', '0 0 40px #FF3B30'] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0" style={{ opacity: 0.2 }} />
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div animate={streakJustUpdated ? { rotate: [0, 10, -10, 10, -10, 0], scale: [1, 1.3, 1.3, 1] } : { rotate: [0, 5, -5, 0] }} transition={streakJustUpdated ? { duration: 1.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] } : { duration: 2, repeat: Infinity }}>
              <Flame className="w-16 h-16 mb-4" style={streakJustUpdated ? { color: '#FF3B30', filter: 'drop-shadow(0 0 20px #FF3B30) drop-shadow(0 0 40px #FF3B30)' } : { color: '#FF3B30' }} />
            </motion.div>
            <motion.div key={currentStreak} initial={{ scale: 1.2, opacity: 0 }} animate={streakJustUpdated ? { scale: [1.2, 1.5, 1], opacity: 1, textShadow: ['0 0 20px #FF3B30, 0 0 40px #FF3B30', '0 0 40px #FF3B30, 0 0 80px #FF3B30, 0 0 120px #FF3B30', '0 0 20px #FF3B30, 0 0 40px #FF3B30'] } : { scale: 1, opacity: 1 }} transition={{ duration: streakJustUpdated ? 1.5 : 0.3, times: streakJustUpdated ? [0, 0.5, 1] : undefined }} className="text-7xl mb-2" style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>{currentStreak}</motion.div>
            <p className="mb-1" style={{ color: '#9ca3af' }}>Day Streak</p>
            <p className="text-sm italic" style={{ color: '#FFD60A' }}>{randomQuote}</p>
          </div>
        </Card>
      </motion.div>

      <div className="grid grid-cols-3 gap-3 mb-8">
        <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <Badge className="mb-2" style={{ background: 'linear-gradient(90deg,#FF3B30,#FF6B30)', color: '#fff', border: 0, textTransform: 'capitalize' }}>{difficulty}</Badge>
          <p className="text-xs" style={{ color: '#9ca3af' }}>Difficulty</p>
        </Card>
        <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-1 mb-2">
            <Trophy className="w-4 h-4" style={{ color: '#FFD60A' }} />
            <motion.span key={points} initial={streakJustUpdated ? { scale: 1.5, color: '#FFD60A' } : false} animate={{ scale: 1, color: '#ffffff' }} transition={{ duration: 0.5 }}>
              {points}
            </motion.span>
          </div>
          <p className="text-xs" style={{ color: '#9ca3af' }}>Points</p>
        </Card>
        <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center gap-1 mb-2">
            <Shield className="w-4 h-4" style={{ color: '#FF3B30' }} />
            <span style={{ color: '#fff' }}>{freezesRemaining}</span>
          </div>
          <p className="text-xs" style={{ color: '#9ca3af' }}>Freezes</p>
        </Card>
      </div>

      <Card className="p-5 rounded-2xl mb-8" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-4 h-4" style={{ color: '#FFD60A' }} />
          <h4 style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>This Week</h4>
        </div>
        <div className="flex justify-between gap-2">
          {/* Show each day of the week */}
          {weekDays.map((day, index) => (
            <div key={day} className="flex-1 flex flex-col items-center gap-2">
              <p className="text-xs" style={{ color: '#9ca3af' }}>{day}</p>
              <div className="w-full h-16 rounded-xl flex items-center justify-center transition-all" style={weekStatus[index] ? { background: 'linear-gradient(135deg,#FF3B30,#FF6B30)', color: '#fff', boxShadow: '0 10px 20px rgba(255,59,48,0.3)' } : { background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#6b7280' }}>
                {weekStatus[index] ? '✓' : '✗'}
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Button onClick={onOpenUpdateModal} className="w-full h-16 rounded-3xl shadow-lg" style={{ background: 'linear-gradient(90deg,#FF3B30,#FF6B30)', color: '#fff', boxShadow: '0 10px 30px rgba(255,59,48,0.5)' }}>Mark Today Complete</Button>

      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <motion.div initial={{ scale: 0, opacity: 0, y: 20 }} animate={{ scale: [0, 1.1, 1], opacity: 1, y: 0, boxShadow: ['0 10px 40px rgba(255,59,48,0.4)', '0 20px 60px rgba(255,59,48,0.6)', '0 10px 40px rgba(255,59,48,0.4)'] }} exit={{ scale: 0, opacity: 0, y: -20 }} transition={{ duration: 0.6, times: [0, 0.6, 1] }} className="px-8 py-5 rounded-full" style={{ background: 'linear-gradient(90deg,#FF3B30,#FFD60A)', color: '#fff', border: '2px solid rgba(255,255,255,0.2)' }}>
              <p className="text-xl">🔥 Streak Updated! +1 Day</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

HomeScreen.propTypes = 
{
  goal: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  commitment: PropTypes.number.isRequired,
  onOpenUpdateModal: PropTypes.func.isRequired,
  onNavigateToStats: PropTypes.func.isRequired,
  onNavigateToProfile: PropTypes.func.isRequired,
  streakJustUpdated: PropTypes.bool,
  onAnimationComplete: PropTypes.func,
};
