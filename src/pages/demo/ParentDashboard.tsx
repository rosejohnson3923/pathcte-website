import React, { useState } from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import {
  User,
  TrendingUp,
  Clock,
  Target,
  Award,
  Calendar,
  BookOpen,
  Brain,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  XCircle,
  Star,
  Activity,
  BarChart3,
  PieChart,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export function ParentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Static mock data for Alex Davis (1st Grade)
  const childData = {
    name: 'Alex Davis',
    grade: '1st Grade',
    school: 'Sand View Elementary',
    teacher: 'Ms. Jenna Grain',
    avatar: '👦',
    career: 'Space Explorer',
    companion: 'Astro the Robot',
    overallProgress: 35,
    weeklyProgress: 8,
    streakDays: 5,
    totalTimeSpent: 185, // minutes this week
    lastActive: '2 hours ago',
    currentSkill: 'Addition Basics',
    nextSkill: 'Subtraction Introduction',
    gradeLevel: 1,
    skillsCompleted: 12,
    totalSkills: 48,
    remediationNeeded: 2
  };

  const achievements = [
    { id: 1, name: 'First Week Complete', icon: '🌟', date: '3 days ago', description: 'Completed first week of learning' },
    { id: 2, name: '5 Day Streak', icon: '🔥', date: 'Today', description: 'Learned 5 days in a row' },
    { id: 3, name: 'Math Explorer', icon: '🔢', date: '1 week ago', description: 'Completed 10 math skills' },
    { id: 4, name: 'Reading Champion', icon: '📚', date: '2 weeks ago', description: 'Read 20 stories' }
  ];

  const skills = {
    math: {
      completed: 8,
      total: 20,
      current: 'Addition Basics',
      mastery: 72,
      topics: [
        { name: 'Counting to 100', status: 'completed', score: 95 },
        { name: 'Number Recognition', status: 'completed', score: 88 },
        { name: 'Addition Basics', status: 'in-progress', score: 65 },
        { name: 'Subtraction Basics', status: 'locked', score: 0 }
      ]
    },
    reading: {
      completed: 4,
      total: 16,
      current: 'Sight Words',
      mastery: 68,
      topics: [
        { name: 'Letter Recognition', status: 'completed', score: 92 },
        { name: 'Phonics Basics', status: 'completed', score: 85 },
        { name: 'Sight Words', status: 'in-progress', score: 55 },
        { name: 'Simple Sentences', status: 'locked', score: 0 }
      ]
    },
    science: {
      completed: 0,
      total: 12,
      current: 'Not Started',
      mastery: 0,
      topics: [
        { name: 'Weather Patterns', status: 'locked', score: 0 },
        { name: 'Plant Life Cycle', status: 'locked', score: 0 },
        { name: 'Animal Habitats', status: 'locked', score: 0 },
        { name: 'Basic Physics', status: 'locked', score: 0 }
      ]
    }
  };

  const remediationItems = [
    { id: 1, skill: 'Number Bonds to 10', subject: 'Math', attempts: 3, lastAttempt: '2 days ago', priority: 'high' },
    { id: 2, skill: 'Vowel Sounds', subject: 'Reading', attempts: 2, lastAttempt: '4 days ago', priority: 'medium' }
  ];

  const weeklyActivity = [
    { day: 'Mon', minutes: 45, skills: 3 },
    { day: 'Tue', minutes: 30, skills: 2 },
    { day: 'Wed', minutes: 55, skills: 4 },
    { day: 'Thu', minutes: 25, skills: 1 },
    { day: 'Fri', minutes: 40, skills: 3 },
    { day: 'Sat', minutes: 0, skills: 0 },
    { day: 'Sun', minutes: 20, skills: 1 }
  ];

  const learningGoals = [
    { id: 1, goal: 'Complete Addition Module', target: 'End of Month', progress: 65, status: 'on-track' },
    { id: 2, goal: 'Read 10 Books', target: '2 Weeks', progress: 40, status: 'at-risk' },
    { id: 3, goal: 'Master Sight Words', target: '3 Weeks', progress: 55, status: 'on-track' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Child Summary Card */}
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">{childData.avatar}</div>
                  <div>
                    <h2 className="text-2xl font-bold">{childData.name}</h2>
                    <p className="text-purple-100">{childData.grade} • {childData.school}</p>
                    <p className="text-sm text-purple-200 mt-1">Teacher: {childData.teacher}</p>
                    <div className="flex items-center space-x-4 mt-3">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">🚀</span>
                        <span className="text-sm">{childData.career}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm">🤖</span>
                        <span className="text-sm">{childData.companion}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{childData.overallProgress}%</div>
                  <p className="text-sm text-purple-200">Overall Progress</p>
                  <div className="flex items-center space-x-1 mt-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">+{childData.weeklyProgress}% this week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{childData.streakDays}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Day Streak</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">🔥 On fire!</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(childData.totalTimeSpent / 60)}h {childData.totalTimeSpent % 60}m</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Time This Week</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Last: {childData.lastActive}</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Target className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{childData.skillsCompleted}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Skills Completed</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Of {childData.totalSkills} total</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{childData.remediationNeeded}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Need Review</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Action needed</p>
              </div>
            </div>

            {/* Current Focus & Recent Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Focus */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Now Learning</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400">65% Complete</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{childData.currentSkill}</h4>
                    <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2 mt-3">
                      <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Up Next</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">{childData.nextSkill}</h4>
                  </div>
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.slice(0, 3).map(achievement => (
                    <div key={achievement.id} className="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{achievement.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly Activity Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Activity</h3>
              <div className="flex items-end space-x-2 h-40">
                {weeklyActivity.map(day => (
                  <div key={day.day} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-purple-500 rounded-t" style={{ height: `${(day.minutes / 60) * 100}%` }}></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{day.day}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{day.minutes}m</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([subject, data]) => (
                <div key={subject} className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize">
                      {subject === 'math' && '🔢'} {subject === 'reading' && '📚'} {subject === 'science' && '🔬'} {subject}
                    </h3>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">{data.mastery}%</span>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>{data.completed} of {data.total} skills</span>
                      <span>{Math.round((data.completed / data.total) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          subject === 'math' ? 'bg-blue-500' :
                          subject === 'reading' ? 'bg-green-500' :
                          'bg-purple-500'
                        }`}
                        style={{ width: `${(data.completed / data.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {data.topics.map(topic => (
                      <div key={topic.name} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700/50 rounded">
                        <div className="flex items-center space-x-2">
                          {topic.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                          {topic.status === 'in-progress' && <Activity className="w-4 h-4 text-blue-500" />}
                          {topic.status === 'locked' && <XCircle className="w-4 h-4 text-gray-400" />}
                          <span className="text-sm text-gray-700 dark:text-gray-300">{topic.name}</span>
                        </div>
                        {topic.score > 0 && (
                          <span className={`text-sm font-medium ${
                            topic.score >= 80 ? 'text-green-600' :
                            topic.score >= 60 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>{topic.score}%</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Goals</h3>
              <div className="space-y-4">
                {learningGoals.map(goal => (
                  <div key={goal.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">{goal.goal}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        goal.status === 'on-track' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                        'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      }`}>
                        {goal.status === 'on-track' ? 'On Track' : 'At Risk'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span>Target: {goal.target}</span>
                      <span>{goal.progress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          goal.status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Remediation Queue</h3>
              <div className="space-y-3">
                {remediationItems.map(item => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{item.skill}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.subject} • {item.attempts} attempts • Last: {item.lastAttempt}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      item.priority === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' :
                      'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {item.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MarketingLayout showDemoButton={false}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Demo Mode Banner */}
        <div className="bg-purple-600 text-white px-4 py-2 text-center">
          <p className="text-sm">
            🎭 Demo Mode - Parent Dashboard for Sarah Davis (Alex's Parent)
          </p>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Parent Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor and support your child's learning journey</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Logged in as:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Sarah Davis</span>
                </div>
                <button
                  onClick={() => window.location.href = 'https://pathfinity.ai'}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'overview'
                    ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'skills'
                    ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Skills Progress
              </button>
              <button
                onClick={() => setActiveTab('goals')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'goals'
                    ? 'border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Goals & Remediation
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>

        {/* Footer Note */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              ℹ️ This is demo data for demonstration purposes. In production, you would see your actual child's progress and real-time updates.
            </p>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export default ParentDashboard;