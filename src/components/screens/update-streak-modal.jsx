// Modal for updating daily streak - user writes about their progress
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { TextArea } from '../ui/TextArea.jsx';
import { X, Sparkles } from '../Icons.jsx';

export function UpdateStreakModal({ isOpen, onClose, onSubmit }) 
{
  // Track user's journal entry
  const [entry, setEntry] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Count words in entry
  const wordCount = entry.trim().split(/\s+/).filter((w) => w.length > 0).length;
  const isValid = wordCount >= 50;
  
  // Handle form submission
  const handleSubmit = () => 
  {
    if (isValid) 
    {
      setShowSuccess(true);
      setTimeout(() => 
      {
        onSubmit();
        setShowSuccess(false);
        setEntry('');
        onClose();
      }, 2000);
    }
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-end justify-center" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} onClick={onClose}>
          <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={(e) => e.stopPropagation()} className="w-full" style={{ maxWidth: 390, background: '#121212', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
            <Card className="p-6" style={{ background: '#1a1a1a', border: 0, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>Update My Streak</h3>
                <button onClick={onClose} className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: '#2a2a2a', color: '#9ca3af' }}>
                  <X className="w-4 h-4" />
                </button>
              </div>
              {!showSuccess ? (
                <>
                  <div className="mb-4">
                    <label className="text-sm mb-2 block" style={{ color: '#9ca3af' }}>What did you do today?</label>
                    <TextArea value={entry} onChange={(e) => setEntry(e.target.value)} placeholder="Describe your progress today... (minimum 50 words)" className="min-h-[200px] rounded-2xl" />
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <p className="text-sm" style={{ color: '#9ca3af' }}>Word count</p>
                    <div className="px-3 py-1 rounded-full" style={{ background: isValid ? 'rgba(255,59,48,0.2)' : '#2a2a2a', color: isValid ? '#FF3B30' : '#9ca3af' }}>
                      {wordCount} / 50
                    </div>
                  </div>
                  <Button onClick={handleSubmit} disabled={!isValid} className="w-full h-14 rounded-3xl" style={{ color: '#fff', background: 'linear-gradient(90deg, #FF3B30, #FF6B30)', opacity: isValid ? 1 : 0.5, cursor: isValid ? 'pointer' : 'not-allowed' }}>Submit & Update Streak</Button>
                </>
              ) : (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center py-12">
                  <motion.div animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }} className="mb-6">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FF3B30,#FFD60A)' }}>
                      <Sparkles className="w-12 h-12" style={{ color: '#fff' }} />
                    </div>
                  </motion.div>
                  <h3 className="mb-2" style={{ color: '#fff', fontFamily: 'Inter, sans-serif' }}>Streak Updated!</h3>
                  <p className="text-center" style={{ color: '#9ca3af' }}>Great job! Keep the momentum going! 🔥</p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

UpdateStreakModal.propTypes = 
{ 
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
  onSubmit: PropTypes.func.isRequired 
};
