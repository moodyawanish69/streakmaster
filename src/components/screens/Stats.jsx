// Stats screen - shows user's progress and achievements
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Progress } from '../ui/ProgressBar.jsx';
import { ArrowLeft, Trophy, Flame, TrendingUp, Calendar, BookOpen } from '../Icons.jsx';

export function StatsScreen({ onBack, commitment }) 
{
  // Current stats data
  const [currentStreak] = useState(12);
  const [bestStreak] = useState(28);
  const [monthPoints] = useState(360);
  const [completedDays] = useState(12);

  // Calculate progress percentage
  const monthProgress = (completedDays / commitment) * 100;

  // Recent journal entries
  const recentEntries = [
    { date: 'Oct 14, 2025', preview: 'Completed 45 minutes of workout focusing on cardio and strength training...' },
    { date: 'Oct 13, 2025', preview: 'Amazing session today! Pushed myself harder than usual and felt great...' },
    { date: 'Oct 12, 2025', preview: 'Solid workout despite being tired. Consistency is what matters most...' },
  ];

  return (
  <div className="flex flex-col min-h-screen px-6 py-8" style={{ background: '#121212' }}>
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-gray-400 hover:text-white hover:border-[#FF3B30] transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            Stats & Progress
          </h2>
          <p className="text-sm text-gray-400">Your achievement overview</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="p-5 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.20), rgba(255,59,48,0.05))', border: '1px solid rgba(255,59,48,0.30)' }}>
            <Flame className="w-8 h-8 mb-3" style={{ color: '#FF3B30' }} />
            <div className="text-3xl text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{currentStreak}</div>
            <p className="text-sm text-gray-400">Current Streak</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="p-5 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255,214,10,0.20), rgba(255,214,10,0.05))', border: '1px solid rgba(255,214,10,0.30)' }}>
            <Trophy className="w-8 h-8 mb-3" style={{ color: '#FFD60A' }} />
            <div className="text-3xl text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{bestStreak}</div>
            <p className="text-sm text-gray-400">Best Streak</p>
          </Card>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
        <Card className="p-5 rounded-3xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" style={{ color: '#FF3B30' }} />
              <h4 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Points This Month
              </h4>
            </div>
            <div className="text-2xl" style={{ fontFamily: 'Inter, sans-serif', color: '#FFD60A' }}>
              {monthPoints}
            </div>
          </div>
          <p className="text-sm" style={{ color: '#9ca3af' }}>You earn 30 points per completed day</p>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mb-6">
        <Card className="p-6 rounded-3xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" style={{ color: '#FF3B30' }} />
              <h4 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                Monthly Progress
              </h4>
            </div>
            <div className="text-white">{completedDays}/{commitment} days</div>
          </div>

          <div className="mb-4">
            <Progress value={monthProgress} className="h-3 bg-[#0a0a0a]" />
          </div>

          <div className="flex justify-between text-sm">
            <span style={{ color: '#9ca3af' }}>{Math.round(monthProgress)}% complete</span>
            <span style={{ color: '#FFD60A' }}>{commitment - completedDays} days remaining</span>
          </div>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" style={{ color: '#FFD60A' }} />
            <h4 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
              Recent Entries
            </h4>
          </div>
        </div>

        <div className="space-y-3">
          {recentEntries.map((entry, index) => (
            <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + index * 0.1 }}>
              <Card className="p-4 rounded-2xl transition-all cursor-pointer" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
                <p className="text-xs mb-2" style={{ color: '#FFD60A' }}>{entry.date}</p>
                <p className="text-sm line-clamp-2" style={{ color: '#d1d5db' }}>{entry.preview}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Button variant="outline" className="w-full h-12 rounded-2xl" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #2a2a2a', color: '#d1d5db' }}>
        View All History
      </Button>
    </div>
  );
}

StatsScreen.propTypes = 
{
  onBack: PropTypes.func.isRequired,
  commitment: PropTypes.number.isRequired,
};
