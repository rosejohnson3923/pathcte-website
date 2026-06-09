import React, { useState } from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import {
  School,
  Users,
  TrendingUp,
  Award,
  AlertCircle,
  BarChart3,
  PieChart,
  Activity,
  BookOpen,
  Target,
  Calendar,
  Clock,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  GraduationCap,
  Brain,
  Shield,
  Star
} from 'lucide-react';

export function PrincipalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Static mock data for Dr. Maria Rodriguez - Sand View Elementary Principal
  const schoolData = {
    name: 'Sand View Elementary',
    principal: 'Dr. Maria Rodriguez',
    district: 'Plainview ISD',
    totalStudents: 450,
    totalTeachers: 28,
    totalStaff: 42,
    averageProgress: 68,
    weeklyGrowth: 5.2,
    attendanceRate: 94.3,
    parentEngagement: 72,
    yearOverYearGrowth: 8.5
  };

  const gradePerformance = [
    { grade: 'Kindergarten', students: 75, avgProgress: 72, trending: 'up', topTeacher: 'Ms. Grain' },
    { grade: '1st Grade', students: 82, avgProgress: 68, trending: 'stable', topTeacher: 'Ms. Smith' },
    { grade: '2nd Grade', students: 78, avgProgress: 71, trending: 'up', topTeacher: 'Mr. Johnson' },
    { grade: '3rd Grade', students: 85, avgProgress: 65, trending: 'down', topTeacher: 'Ms. Davis' },
    { grade: '4th Grade', students: 72, avgProgress: 69, trending: 'up', topTeacher: 'Mr. Brown' },
    { grade: '5th Grade', students: 58, avgProgress: 62, trending: 'stable', topTeacher: 'Ms. Wilson' }
  ];

  const teacherPerformance = [
    { name: 'Ms. Jenna Grain', grade: 'K-2', students: 24, avgProgress: 78, engagement: 92 },
    { name: 'Ms. Emily Smith', grade: '1st', students: 26, avgProgress: 72, engagement: 88 },
    { name: 'Mr. John Johnson', grade: '2nd', students: 25, avgProgress: 75, engagement: 85 },
    { name: 'Ms. Sarah Davis', grade: '3rd', students: 28, avgProgress: 68, engagement: 79 },
    { name: 'Mr. Mike Brown', grade: '4th', students: 27, avgProgress: 71, engagement: 82 },
    { name: 'Ms. Lisa Wilson', grade: '5th', students: 29, avgProgress: 65, engagement: 76 }
  ];

  const interventionNeeded = [
    { student: 'Mason Taylor', grade: '2nd', teacher: 'Mr. Johnson', issue: 'Inactive 3+ days', priority: 'high' },
    { student: 'Ethan Johnson', grade: '1st', teacher: 'Ms. Smith', issue: 'Math remediation', priority: 'medium' },
    { student: 'Liam Martinez', grade: '1st', teacher: 'Ms. Grain', issue: 'Reading support', priority: 'medium' },
    { student: 'Emma Brown', grade: '3rd', teacher: 'Ms. Davis', issue: 'Attendance', priority: 'high' },
    { student: 'Noah Wilson', grade: '4th', teacher: 'Mr. Brown', issue: 'Science struggles', priority: 'low' }
  ];

  const careerDistribution = [
    { career: 'Space Explorer', count: 45, percentage: 10 },
    { career: 'Veterinarian', count: 58, percentage: 13 },
    { career: 'Artist', count: 72, percentage: 16 },
    { career: 'Scientist', count: 63, percentage: 14 },
    { career: 'Teacher', count: 54, percentage: 12 },
    { career: 'Chef', count: 41, percentage: 9 },
    { career: 'Builder', count: 38, percentage: 8 },
    { career: 'Athlete', count: 36, percentage: 8 },
    { career: 'Pilot', count: 43, percentage: 10 }
  ];

  const monthlyMetrics = [
    { month: 'August', enrollment: 445, progress: 45, attendance: 92 },
    { month: 'September', enrollment: 448, progress: 52, attendance: 94 },
    { month: 'October', enrollment: 450, progress: 58, attendance: 93 },
    { month: 'November', enrollment: 450, progress: 63, attendance: 94 },
    { month: 'December', enrollment: 450, progress: 68, attendance: 94 }
  ];

  const achievements = [
    { title: 'District Math Award', date: 'Last Month', icon: '🏆', description: 'Top performing elementary in mathematics' },
    { title: '95% Parent Satisfaction', date: '2 Months Ago', icon: '⭐', description: 'Exceeded district parent survey goals' },
    { title: 'Green School Certification', date: '3 Months Ago', icon: '🌱', description: 'Environmental excellence recognition' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* School Summary */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{schoolData.name}</h2>
                  <p className="text-indigo-100">Principal: {schoolData.principal} • {schoolData.district}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-3xl font-bold">{schoolData.totalStudents}</p>
                      <p className="text-sm text-indigo-200">Students</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{schoolData.totalTeachers}</p>
                      <p className="text-sm text-indigo-200">Teachers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{schoolData.averageProgress}%</p>
                      <p className="text-sm text-indigo-200">Avg Progress</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">+{schoolData.yearOverYearGrowth}%</p>
                      <p className="text-sm text-indigo-200">YoY Growth</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-lg p-3 inline-block">
                    <School className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">+{schoolData.weeklyGrowth}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Weekly Growth</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Above target</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{schoolData.attendanceRate}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Attendance</p>
                <p className="text-xs text-gray-500 mt-1">District avg: 92%</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{schoolData.parentEngagement}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Parent Engagement</p>
                <p className="text-xs text-gray-500 mt-1">Active participation</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Interventions</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Need attention</p>
              </div>
            </div>

            {/* Grade Performance & Recent Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Grade Performance */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Grade Level Performance</h3>
                <div className="space-y-3">
                  {gradePerformance.slice(0, 4).map(grade => (
                    <div key={grade.grade} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{grade.grade}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{grade.students} students</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <p className="text-lg font-bold text-gray-900 dark:text-white">{grade.avgProgress}%</p>
                          <p className="text-xs text-gray-500">avg progress</p>
                        </div>
                        <div className="flex items-center">
                          {grade.trending === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                          {grade.trending === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                          {grade.trending === 'stable' && <span className="w-4 h-4 text-gray-500">-</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Achievements */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Achievements</h3>
                <div className="space-y-3">
                  {achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                        <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Monthly Trends Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Monthly Progress Trends</h3>
              <div className="flex items-end space-x-2 h-40">
                {monthlyMetrics.map(month => (
                  <div key={month.month} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-indigo-500 rounded-t" style={{ height: `${month.progress}%` }}></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{month.month.slice(0, 3)}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{month.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'teachers':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Teacher Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Teacher</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Grade</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Students</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Avg Progress</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Engagement</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacherPerformance.map((teacher, idx) => (
                        <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                                <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                                  {teacher.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{teacher.name}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{teacher.grade}</td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{teacher.students}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className={`h-2 rounded-full ${
                                  teacher.avgProgress >= 70 ? 'bg-green-500' :
                                  teacher.avgProgress >= 60 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`} style={{ width: `${teacher.avgProgress}%` }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{teacher.avgProgress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`text-sm font-medium ${
                              teacher.engagement >= 85 ? 'text-green-600 dark:text-green-400' :
                              teacher.engagement >= 75 ? 'text-yellow-600 dark:text-yellow-400' :
                              'text-red-600 dark:text-red-400'
                            }`}>{teacher.engagement}%</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              teacher.avgProgress >= 70 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                              teacher.avgProgress >= 65 ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                              'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            }`}>
                              {teacher.avgProgress >= 70 ? 'Excellent' :
                               teacher.avgProgress >= 65 ? 'Good' :
                               'Needs Support'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Top Performing Classes */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">🏆 Top Performing Class</h3>
              <p className="text-green-700 dark:text-green-300">Ms. Jenna Grain's K-2 class leads with 78% average progress and 92% engagement!</p>
            </div>
          </div>
        );

      case 'interventions':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Students Requiring Intervention</h3>
              <div className="space-y-3">
                {interventionNeeded.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${
                    item.priority === 'high'
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                      : item.priority === 'medium'
                      ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
                      : 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.student}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Grade {item.grade} • Teacher: {item.teacher}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">Issue: {item.issue}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.priority === 'high'
                            ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                            : item.priority === 'medium'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {item.priority === 'high' ? 'High Priority' : item.priority === 'medium' ? 'Medium' : 'Low'}
                        </span>
                        <button className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Path Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Career Path Distribution</h3>
              <div className="space-y-3">
                {careerDistribution.map(career => (
                  <div key={career.career} className="flex items-center space-x-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{career.career}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{career.count} students ({career.percentage}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: `${career.percentage}%` }}></div>
                      </div>
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
        <div className="bg-indigo-600 text-white px-4 py-2 text-center">
          <p className="text-sm">
            🎭 Demo Mode - Principal Dashboard for Dr. Maria Rodriguez (Sand View Elementary)
          </p>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Principal Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">School-wide analytics and management</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Logged in as:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Dr. Maria Rodriguez</span>
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
                    ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('teachers')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'teachers'
                    ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Teachers
              </button>
              <button
                onClick={() => setActiveTab('interventions')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'interventions'
                    ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Interventions & Insights
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
              ℹ️ This is demo data for demonstration purposes. In production, you would see real school metrics and live student progress data.
            </p>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export default PrincipalDashboard;