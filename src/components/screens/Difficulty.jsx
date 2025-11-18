// Difficulty selection screen - how committed is the user?
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Badge } from '../ui/Tag.jsx';
import { Shield, ShieldAlert, Zap } from '../Icons.jsx';

// Different difficulty levels
const difficulties = [
  { id: 'easy', label: 'Easy', icon: Shield, freezes: '10 freezes allowed', description: 'Miss a day? No problem! Use a freeze to keep your streak alive.', color: '#FFD60A' },
  { id: 'medium', label: 'Medium', icon: ShieldAlert, freezes: '5 freezes allowed', description: 'A bit more challenging. You have limited safety nets.', color: '#FF9500' },
  { id: 'hard', label: 'Hard', icon: Zap, freezes: 'No freeze (reset if missed)', description: 'For the committed. Miss a day and your streak resets.', color: '#FF3B30' },
];

export function OnboardingDifficulty({ onNext, onBack }) 
{
  // Track selected difficulty
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  return (
    <div className="flex flex-col min-h-screen px-6" style={{ background: '#121212' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Choose Difficulty</h2>
        <p className="text-sm" style={{ color: '#9ca3af' }}>How committed are you?</p>
      </motion.div>
      <div className="flex-1 space-y-3">
        {/* Show all difficulty options */}
        {difficulties.map((d, i) => 
        {
          const Icon = d.icon; 
          const isSelected = selectedDifficulty === d.id;
          return (
            <motion.div key={d.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <Card
                onClick={() => setSelectedDifficulty(d.id)}
                className="p-5 cursor-pointer rounded-3xl border-2"
                style={{ background: '#1a1a1a', borderColor: isSelected ? '#FF3B30' : '#2a2a2a', boxShadow: isSelected ? '0 10px 30px rgba(255,59,48,0.3)' : 'none' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${d.color}20, ${d.color}40)` }}>
                    <Icon className="w-7 h-7" style={{ color: d.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{d.label}</h3>
                      {isSelected && (<Badge className="" style={{ background: '#FF3B30', color: '#fff', border: 0 }}>Selected</Badge>)}
                    </div>
                    <p className="text-sm" style={{ color: '#9ca3af' }}>{d.description}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#FFD60A' }}></div>
                      <p className="text-sm" style={{ color: d.color }}>{d.freezes}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
      <div className="pt-6 space-y-3">
        <Button onClick={() => selectedDifficulty && onNext(selectedDifficulty)} className="w-full h-14 rounded-3xl" style={{ color: '#fff', background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}>Continue</Button>
        <Button onClick={onBack} variant="ghost" className="w-full" style={{ color: '#9ca3af' }}>Back</Button>
      </div>
    </div>
  );
}

OnboardingDifficulty.propTypes = 
{ 
  onNext: PropTypes.func.isRequired, 
  onBack: PropTypes.func.isRequired 
};
