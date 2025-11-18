import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Dumbbell, Code, Languages, Target } from '../Icons.jsx';

const goals = [
  { id: 'gym', label: 'Gym', icon: Dumbbell, color: '#FF3B30' },
  { id: 'coding', label: 'Coding', icon: Code, color: '#FFD60A' },
  { id: 'language', label: 'Language Learning', icon: Languages, color: '#FF3B30' },
  { id: 'custom', label: 'Custom Goal', icon: Target, color: '#FFD60A' },
];

export function OnboardingGoalSelection({ onNext, onBack }) {
  const [selectedGoal, setSelectedGoal] = useState(null);

  return (
    <div className="flex flex-col min-h-screen px-6" style={{ background: '#121212' }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h2 className="text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
          Choose Your Goal
        </h2>
        <p className="text-sm" style={{ color: '#9ca3af' }}>What do you want to track?</p>
      </motion.div>

      <div className="flex-1 space-y-3">
        {goals.map((goal, index) => {
          const Icon = goal.icon;
          const isSelected = selectedGoal === goal.id;
          return (
            <motion.div key={goal.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
              <Card
                onClick={() => setSelectedGoal(goal.id)}
                className={`p-5 cursor-pointer rounded-3xl border-2 ${isSelected ? '' : ''}`}
                style={{
                  background: '#1a1a1a',
                  borderColor: isSelected ? '#FF3B30' : '#2a2a2a',
                  boxShadow: isSelected ? '0 10px 30px rgba(255,59,48,0.3)' : 'none',
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${goal.color}20, ${goal.color}40)` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: goal.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>{goal.label}</h3>
                  </div>
                  {isSelected && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-6 h-6 rounded-full" style={{ background: '#FF3B30' }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: '#fff', margin: '7px auto 0' }}></div>
                    </motion.div>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="pt-6 space-y-3">
        <Button
          onClick={() => selectedGoal && onNext(selectedGoal)}
          className="w-full h-14 rounded-3xl"
          style={{ color: '#fff', background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}
        >
          Continue
        </Button>
        <Button onClick={onBack} variant="ghost" className="w-full" style={{ color: '#9ca3af' }}>
          Back
        </Button>
      </div>
    </div>
  );
}

OnboardingGoalSelection.propTypes = {
  onNext: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
