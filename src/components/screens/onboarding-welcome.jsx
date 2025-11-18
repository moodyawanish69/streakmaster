import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Flame } from '../Icons.jsx';

export function OnboardingWelcome({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center" style={{ background: '#121212' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="mb-8"
      >
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: ['0 0 20px #FF3B30', '0 0 40px #FF3B30', '0 0 20px #FF3B30'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #FF3B30, #FFD60A)' }}
          >
            <Flame className="w-12 h-12" />
          </motion.div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-4"
        style={{ fontFamily: 'Inter, sans-serif', color: '#ffffff' }}
      >
        Streak Master
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-12"
        style={{ fontFamily: 'Inter, sans-serif', color: '#FFD60A' }}
      >
        Track. Commit. Conquer.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full"
        style={{ maxWidth: 390 }}
      >
        <Button
          onClick={onNext}
          className="w-full h-14 rounded-3xl shadow-lg"
          style={{ fontFamily: 'Inter, sans-serif', color: '#fff', background: 'linear-gradient(90deg, #FF3B30, #FF6B30)' }}
        >
          Get Started
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 space-y-3"
        style={{ color: '#9ca3af' }}
      >
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full" style={{ background: '#FF3B30' }}></div>
          <p className="text-sm">Build unstoppable habits</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full" style={{ background: '#FFD60A' }}></div>
          <p className="text-sm">Track your progress daily</p>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <div className="w-2 h-2 rounded-full" style={{ background: '#FF3B30' }}></div>
          <p className="text-sm">Stay motivated with streaks</p>
        </div>
      </motion.div>
    </div>
  );
}

OnboardingWelcome.propTypes = {
  onNext: PropTypes.func.isRequired,
};
