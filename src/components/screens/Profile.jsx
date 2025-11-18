// Profile screen - user account and settings
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'motion/react';
import { Button } from '../ui/Button.jsx';
import { Card } from '../ui/Card.jsx';
import { Badge } from '../ui/Tag.jsx';
import { Switch } from '../ui/Toggle.jsx';
import { Input } from '../ui/TextInput.jsx';
import { Label } from '../ui/Label.jsx';
import { ArrowLeft, User, Target, Shield, Bell, LogOut, Edit, Mail, Lock, UserCheck } from '../Icons.jsx';

export function ProfileScreen({ onBack, goal, difficulty }) 
{
  // User login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  // Handle user login
  const handleLogin = () => 
  {
    if (email && password) 
    {
      setIsLoggedIn(true);
      setShowLoginForm(false);
      setUserName(email.split('@')[0]);
    }
  };

  // Handle user logout
  const handleLogout = () => 
  {
    setIsLoggedIn(false);
    setEmail('');
    setPassword('');
    setUserName('');
  };

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
            Profile
          </h2>
          <p className="text-sm text-gray-400">Manage your account</p>
        </div>
      </div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
        <h4 className="text-gray-400 mb-3 text-sm uppercase tracking-wide">Account</h4>

        {!isLoggedIn ? (
          <Card className="p-6 rounded-3xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            {!showLoginForm ? (
              <div className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.2), rgba(255,214,10,0.2))' }}>
                  <UserCheck className="w-8 h-8" style={{ color: '#FFD60A' }} />
                </div>
                <h3 className="text-white mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sign In to Sync Your Progress
                </h3>
                <p className="text-sm text-gray-400 mb-6">Create an account to save your streaks across devices</p>
                <div className="space-y-3">
                  <Button
                    onClick={() => {
                      setShowLoginForm(true);
                      setIsSignUp(false);
                    }}
                    className="w-full h-12 rounded-2xl shadow-lg"
                    style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(90deg,#FF3B30,#FF6B30)', color: '#fff', boxShadow: '0 10px 15px rgba(255,59,48,0.3)' }}
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      setShowLoginForm(true);
                      setIsSignUp(true);
                    }}
                    variant="outline"
                    className="w-full h-12 rounded-2xl"
                    style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #2a2a2a', color: '#d1d5db' }}
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-white mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <Label htmlFor="email" className="text-gray-400 mb-2 block">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9ca3af' }} />
                      <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@example.com" className="pl-11 h-12 rounded-2xl" style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#fff' }} />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="password" className="text-gray-400 mb-2 block">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: '#9ca3af' }} />
                      <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="pl-11 h-12 rounded-2xl" style={{ fontFamily: 'Inter, sans-serif', background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#fff' }} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button onClick={handleLogin} disabled={!email || !password} className="w-full h-12 bg-gradient-to-r from-[#FF3B30] to-[#FF6B30] hover:from-[#FF3B30]/90 hover:to-[#FF6B30]/90 text-white rounded-2xl shadow-lg shadow-[#FF3B30]/30 disabled:opacity-50 disabled:cursor-not-allowed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {isSignUp ? 'Create Account' : 'Sign In'}
                  </Button>

                  <Button onClick={() => setShowLoginForm(false)} variant="ghost" className="w-full text-gray-400 hover:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Cancel
                  </Button>
                </div>

                {!isSignUp && (
                  <div className="mt-4 text-center">
                    <button onClick={() => setIsSignUp(true)} className="text-sm text-[#FFD60A] hover:underline">
                      Don't have an account? Sign up
                    </button>
                  </div>
                )}

                {isSignUp && (
                  <div className="mt-4 text-center">
                    <button onClick={() => setIsSignUp(false)} className="text-sm text-[#FFD60A] hover:underline">
                      Already have an account? Sign in
                    </button>
                  </div>
                )}
              </div>
            )}
          </Card>
        ) : (
          <Card className="p-6 rounded-3xl" style={{ background: 'linear-gradient(135deg,#1a1a1a,#0a0a0a)', border: '2px solid #2a2a2a' }}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#FF3B30,#FFD60A)' }}>
                <User className="w-8 h-8" style={{ color: '#ffffff' }} />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1 capitalize" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {userName || 'User'}
                </h3>
                <p className="text-sm text-gray-400">{email}</p>
              </div>
              <button className="w-10 h-10 rounded-full flex items-center justify-center transition-all" style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', color: '#9ca3af' }}>
                <Edit className="w-4 h-4" />
              </button>
            </div>

            <div className="flex gap-2">
              <Badge className="border-0 capitalize" style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(90deg,#FF3B30,#FF6B30)', color: '#fff' }}>
                {difficulty}
              </Badge>
              <Badge className="" style={{ fontFamily: 'Inter, sans-serif', background: 'rgba(255,214,10,0.2)', color: '#FFD60A', border: '1px solid rgba(255,214,10,0.3)' }}>
                12 Day Streak
              </Badge>
            </div>
          </Card>
        )}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6">
        <h4 className="text-gray-400 mb-3 text-sm uppercase tracking-wide">Current Goal</h4>
        <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.20), rgba(255,59,48,0.05))' }}>
                <Target className="w-6 h-6" style={{ color: '#FF3B30' }} />
              </div>
              <div>
                <p className="text-white capitalize" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {goal}
                </p>
                <p className="text-sm" style={{ color: '#9ca3af' }}>Active goal</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="" style={{ fontFamily: 'Inter, sans-serif', color: '#FFD60A' }}>
              Change
            </Button>
          </div>
        </Card>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
        <h4 className="text-gray-400 mb-3 text-sm uppercase tracking-wide">Settings</h4>
        <div className="space-y-3">
          <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(255,214,10,0.20), rgba(255,214,10,0.05))' }}>
                  <Shield className="w-6 h-6" style={{ color: '#FFD60A' }} />
                </div>
                <div>
                  <p className="text-white capitalize" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {difficulty} Difficulty
                  </p>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>{difficulty === 'easy' ? '10 freezes' : difficulty === 'medium' ? '5 freezes' : 'No freezes'}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="" style={{ fontFamily: 'Inter, sans-serif', color: '#FFD60A' }}>
                Edit
              </Button>
            </div>
          </Card>

          <Card className="p-4 rounded-2xl" style={{ background: '#1a1a1a', border: '1px solid #2a2a2a' }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.20), rgba(255,59,48,0.05))' }}>
                  <Bell className="w-6 h-6" style={{ color: '#FF3B30' }} />
                </div>
                <div>
                  <p className="text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Daily Reminder
                  </p>
                  <p className="text-sm" style={{ color: '#9ca3af' }}>8:00 PM</p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </Card>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-6">
        <Card className="p-4 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(255,59,48,0.10), transparent)', border: '1px solid rgba(255,59,48,0.30)' }}>
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 mt-0.5" style={{ color: '#FF3B30' }} />
            <div>
              <p className="text-white mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                Freezes Available
              </p>
              <p className="text-sm mb-2" style={{ color: '#9ca3af' }}>Use a freeze to skip a day without breaking your streak</p>
              <Button variant="outline" size="sm" className="" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid #FF3B30', color: '#FF3B30' }}>
                View Freeze History
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      <div className="flex-1"></div>

      {isLoggedIn && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Button onClick={handleLogout} variant="outline" className="w-full h-12 rounded-2xl" style={{ fontFamily: 'Inter, sans-serif', border: '1px solid rgba(255,59,48,0.5)', color: '#FF3B30' }}>
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </motion.div>
      )}
    </div>
  );
}

ProfileScreen.propTypes = 
{
  onBack: PropTypes.func.isRequired,
  goal: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};
