import React, { useState } from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import {
  Users,
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
  ArrowDown,
  FileText,
  MessageSquare,
  Bell
} from 'lucide-react';

export function TeacherDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);

  // Static mock data for Ms. Jenna Grain's K-2 classroom
  const classData = {
    teacher: 'Ms. Jenna Grain',
    grade: 'K-2',
    school: 'Sand View Elementary',
    totalStudents: 24,
    classAverage: 66,
    weeklyProgress: 12,
    assignmentsCompleted: 28,
    upcomingAssignments: 5,
    attendanceRate: 94,
    parentEngagement: 78
  };

  const students = [
    { id: 1, name: 'Emma Wilson', grade: 'K', progress: 45, lastActive: '2 hours ago', status: 'active', career: 'Veterinarian', companion: 'Buddy the Dog', streak: 3, needsHelp: false },
    { id: 2, name: 'Noah Thompson', grade: 'K', progress: 62, lastActive: '1 day ago', status: 'active', career: 'Chef', companion: 'Cookie Monster', streak: 5, needsHelp: false },
    { id: 3, name: 'Sophia Garcia', grade: '1', progress: 78, lastActive: '3 hours ago', status: 'active', career: 'Artist', companion: 'Paint Panda', streak: 12, needsHelp: false },
    { id: 4, name: 'Liam Martinez', grade: '1', progress: 55, lastActive: 'Yesterday', status: 'active', career: 'Builder', companion: 'Hammer Hero', streak: 2, needsHelp: true },
    { id: 5, name: 'Olivia Anderson', grade: '2', progress: 89, lastActive: 'Today', status: 'active', career: 'Scientist', companion: 'Lab Rat', streak: 20, needsHelp: false },
    { id: 6, name: 'Mason Taylor', grade: '2', progress: 34, lastActive: '3 days ago', status: 'at-risk', career: 'Athlete', companion: 'Sport Star', streak: 0, needsHelp: true },
    { id: 7, name: 'Ava Brown', grade: 'K', progress: 72, lastActive: 'Today', status: 'active', career: 'Teacher', companion: 'Professor Owl', streak: 8, needsHelp: false },
    { id: 8, name: 'Ethan Johnson', grade: '1', progress: 41, lastActive: '2 days ago', status: 'struggling', career: 'Pilot', companion: 'Sky Eagle', streak: 1, needsHelp: true }
  ];

  const assignments = [
    { id: 1, title: 'Math: Addition Basics', dueDate: '2 days', submitted: 18, total: 24, avgScore: 82 },
    { id: 2, title: 'Reading: Sight Words Practice', dueDate: '4 days', submitted: 15, total: 24, avgScore: 75 },
    { id: 3, title: 'Science: Weather Patterns', dueDate: '1 week', submitted: 5, total: 24, avgScore: 88 },
    { id: 4, title: 'Writing: Letter Formation', dueDate: 'Tomorrow', submitted: 20, total: 24, avgScore: 70 },
    { id: 5, title: 'Math: Number Recognition', dueDate: 'Today', submitted: 22, total: 24, avgScore: 91 }
  ];

  const skillBreakdown = {
    math: { average: 72, trend: 'up', topSkill: 'Counting', strugglingSkill: 'Addition' },
    reading: { average: 68, trend: 'stable', topSkill: 'Letter Recognition', strugglingSkill: 'Phonics' },
    science: { average: 61, trend: 'down', topSkill: 'Animals', strugglingSkill: 'Weather' },
    writing: { average: 65, trend: 'up', topSkill: 'Letter Formation', strugglingSkill: 'Sentences' }
  };

  const notifications = [
    { id: 1, type: 'alert', message: 'Mason Taylor has been inactive for 3 days', time: '1 hour ago' },
    { id: 2, type: 'success', message: 'Olivia Anderson achieved a 20-day streak!', time: '3 hours ago' },
    { id: 3, type: 'info', message: 'New parent message from Sarah Davis', time: '5 hours ago' },
    { id: 4, type: 'warning', message: '3 students need remediation in Addition', time: 'Yesterday' }
  ];

  const weeklySchedule = [
    { day: 'Monday', focus: 'Math - Numbers', time: '9:00 AM' },
    { day: 'Tuesday', focus: 'Reading - Phonics', time: '9:00 AM' },
    { day: 'Wednesday', focus: 'Science - Nature', time: '9:00 AM' },
    { day: 'Thursday', focus: 'Writing - Letters', time: '9:00 AM' },
    { day: 'Friday', focus: 'Review & Assessment', time: '9:00 AM' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Class Summary */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{classData.teacher}'s Classroom</h2>
                  <p className="text-blue-100">Grade {classData.grade} • {classData.school}</p>
                  <div className="flex items-center space-x-6 mt-4">
                    <div>
                      <p className="text-3xl font-bold">{classData.totalStudents}</p>
                      <p className="text-sm text-blue-200">Students</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{classData.classAverage}%</p>
                      <p className="text-sm text-blue-200">Class Average</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">+{classData.weeklyProgress}%</p>
                      <p className="text-sm text-blue-200">Weekly Growth</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-lg p-3 inline-block">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{classData.assignmentsCompleted}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
                <p className="text-xs text-gray-500 mt-1">This week</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{classData.upcomingAssignments}</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Due Soon</p>
                <p className="text-xs text-gray-500 mt-1">Next 7 days</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{classData.attendanceRate}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Attendance</p>
                <p className="text-xs text-green-600 mt-1">Above average</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <MessageSquare className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{classData.parentEngagement}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Parent Engagement</p>
                <p className="text-xs text-gray-500 mt-1">Active parents</p>
              </div>
            </div>

            {/* Recent Notifications */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-3">
                {notifications.map(notif => (
                  <div key={notif.id} className={`flex items-start space-x-3 p-3 rounded-lg ${
                    notif.type === 'alert' ? 'bg-red-50 dark:bg-red-900/20' :
                    notif.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
                    notif.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                    'bg-blue-50 dark:bg-blue-900/20'
                  }`}>
                    <div className="flex-shrink-0">
                      {notif.type === 'alert' && <AlertCircle className="w-5 h-5 text-red-500" />}
                      {notif.type === 'success' && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {notif.type === 'warning' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                      {notif.type === 'info' && <Bell className="w-5 h-5 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">{notif.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notif.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Schedule */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Learning Focus</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {weeklySchedule.map(schedule => (
                  <div key={schedule.day} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white">{schedule.day}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{schedule.focus}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{schedule.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Roster</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Student</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Grade</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Progress</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Career Path</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Streak</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Last Active</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map(student => (
                        <tr key={student.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 cursor-pointer"
                            onClick={() => setSelectedStudent(student.name)}>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                                  {student.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{student.name}</p>
                                {student.needsHelp && (
                                  <p className="text-xs text-red-600 dark:text-red-400">Needs attention</p>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{student.grade}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-24 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className={`h-2 rounded-full ${
                                  student.progress >= 70 ? 'bg-green-500' :
                                  student.progress >= 40 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`} style={{ width: `${student.progress}%` }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{student.progress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <p className="text-sm text-gray-900 dark:text-white">{student.career}</p>
                            <p className="text-xs text-gray-500">{student.companion}</p>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center space-x-1 ${
                              student.streak > 0 ? 'text-orange-500' : 'text-gray-400'
                            }`}>
                              {student.streak > 0 && <span>🔥</span>}
                              <span className="text-sm">{student.streak} days</span>
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{student.lastActive}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              student.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                              student.status === 'at-risk' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {student.status === 'active' ? 'Active' :
                               student.status === 'at-risk' ? 'At Risk' :
                               'Struggling'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {selectedStudent && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  💡 Click on a student to view detailed progress. In production, this would open the student's full profile.
                </p>
              </div>
            )}
          </div>
        );

      case 'assignments':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Active Assignments</h3>
              <div className="space-y-4">
                {assignments.map(assignment => (
                  <div key={assignment.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{assignment.title}</h4>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Due: {assignment.dueDate}</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Submitted: {assignment.submitted}/{assignment.total}
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            Avg Score: {assignment.avgScore}%
                          </span>
                        </div>
                      </div>
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        View Details
                      </button>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(assignment.submitted / assignment.total) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Class Skills Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(skillBreakdown).map(([subject, data]) => (
                  <div key={subject} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white capitalize">{subject}</h4>
                      <div className="flex items-center">
                        {data.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                        {data.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                        {data.trend === 'stable' && <span className="w-4 h-4 text-gray-500">-</span>}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{data.average}%</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-green-600 dark:text-green-400">✓ {data.topSkill}</p>
                      <p className="text-xs text-red-600 dark:text-red-400">⚠ {data.strugglingSkill}</p>
                    </div>
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
        <div className="bg-green-600 text-white px-4 py-2 text-center">
          <p className="text-sm">
            🎭 Demo Mode - Teacher Dashboard for Ms. Jenna Grain (K-2 Teacher)
          </p>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Teacher Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Manage your classroom and track student progress</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Logged in as:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Ms. Jenna Grain</span>
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
                    ? 'border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('students')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'students'
                    ? 'border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab('assignments')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'assignments'
                    ? 'border-green-600 text-green-600 dark:border-green-400 dark:text-green-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Assignments & Skills
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
              ℹ️ This is demo data for demonstration purposes. In production, you would see your actual classroom data with real-time student progress.
            </p>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export default TeacherDashboard;