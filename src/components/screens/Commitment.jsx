// Commitment screen - how many days will they commit to?
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Slider } from '../ui/RangeSlider.jsx';
import { Calendar } from '../Icons.jsx';

export function OnboardingCommitment({ onNext, onBack }) 
{
  // Track number of days
  const [days, setDays] = useState(30);
  return (
    <div className="flex flex-col min-h-screen px-6" style={{ background: '#121212' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Set Your Commitment</h2>
        <p className="text-sm" style={{ color: '#9ca3af' }}>How long will you commit?</p>
      </motion.div>
      <div className="flex-1">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
          <Card className="p-8 rounded-3xl mb-8" style={{ background: '#1a1a1a', border: '2px solid #2a2a2a' }}>
            <div className="flex flex-col items-center justify-center mb-8">
              <motion.div animate={{ boxShadow: ['0 0 20px #FFD60A', '0 0 40px #FFD60A', '0 0 20px #FFD60A'] }} transition={{ duration: 2, repeat: Infinity }} className="w-20 h-20 rounded-full flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #FFD60A, #FF9500)' }}>
                <Calendar className="w-10 h-10" style={{ color: '#fff' }} />
              </motion.div>
              <motion.div key={days} initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                <div className="text-6xl mb-2" style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>{days}</div>
                <p style={{ color: '#9ca3af' }}>days commitment</p>
              </motion.div>
            </div>
            <div className="space-y-6">
              <Slider value={[days]} onValueChange={(v) => setDays(v[0])} min={7} max={365} step={1} className="w-full" />
              <div className="flex justify-between text-sm" style={{ color: '#6b7280' }}>
                <span>7 days</span><span>365 days</span>
              </div>
            </div>
          </Card>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#FFD60A' }}></div>
              <p className="text-sm" style={{ color: '#d1d5db' }}>Approximately <span style={{ color: '#FFD60A' }}>{Math.ceil(days / 30)} months</span> of daily tracking</p>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#FF3B30' }}></div>
              <p className="text-sm" style={{ color: '#d1d5db' }}>You can always extend your commitment later</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pt-6 space-y-3">
        <Button onClick={() => onNext(days)} className="w-full h-14 rounded-3xl" style={{ color: '#fff', background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}>Start My Streak</Button>
        <Button onClick={onBack} variant="ghost" className="w-full" style={{ color: '#9ca3af' }}>Back</Button>
      </div>
    </div>
  );
}

OnboardingCommitment.propTypes = 
{ 
  onNext: PropTypes.func.isRequired, 
  onBack: PropTypes.func.isRequired 
};
