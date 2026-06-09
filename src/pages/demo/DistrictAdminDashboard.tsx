import React, { useState } from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import {
  Building2,
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
  DollarSign,
  Briefcase,
  Map,
  Brain
} from 'lucide-react';

export function DistrictAdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Static mock data for Dr. James Wilson - Plainview ISD Superintendent
  const districtData = {
    name: 'Plainview ISD',
    superintendent: 'Dr. James Wilson',
    totalSchools: 12,
    elementarySchools: 6,
    middleSchools: 3,
    highSchools: 3,
    totalStudents: 8450,
    totalTeachers: 542,
    totalStaff: 850,
    districtAverage: 71.7,
    yearOverYearGrowth: 8.2,
    budgetUtilization: 87,
    graduationRate: 92.3,
    collegeReadiness: 78.5
  };

  const schools = [
    { name: 'Sand View Elementary', type: 'Elementary', students: 450, avgProgress: 68, principal: 'Dr. Rodriguez', trend: 'up' },
    { name: 'Ocean View Middle', type: 'Middle', students: 380, avgProgress: 72, principal: 'Mr. Thompson', trend: 'up' },
    { name: 'City View High', type: 'High', students: 520, avgProgress: 75, principal: 'Ms. Johnson', trend: 'stable' },
    { name: 'Mountain Ridge Elementary', type: 'Elementary', students: 425, avgProgress: 70, principal: 'Dr. Chen', trend: 'up' },
    { name: 'Valley Stream Elementary', type: 'Elementary', students: 390, avgProgress: 66, principal: 'Ms. Garcia', trend: 'down' },
    { name: 'Riverside Middle', type: 'Middle', students: 410, avgProgress: 69, principal: 'Mr. Davis', trend: 'stable' },
    { name: 'Sunset High', type: 'High', students: 480, avgProgress: 73, principal: 'Dr. Wilson', trend: 'up' },
    { name: 'Prairie View Elementary', type: 'Elementary', students: 405, avgProgress: 71, principal: 'Ms. Brown', trend: 'up' }
  ];

  const performanceByLevel = [
    { level: 'Elementary Schools', schools: 6, students: 2470, avgProgress: 69, trend: 'up' },
    { level: 'Middle Schools', schools: 3, students: 1200, avgProgress: 70, trend: 'stable' },
    { level: 'High Schools', schools: 3, students: 1520, avgProgress: 74, trend: 'up' }
  ];

  const budgetAllocation = [
    { category: 'Instruction', amount: 42000000, percentage: 52 },
    { category: 'Support Services', amount: 18000000, percentage: 22 },
    { category: 'Operations', amount: 12000000, percentage: 15 },
    { category: 'Transportation', amount: 5000000, percentage: 6 },
    { category: 'Technology', amount: 4000000, percentage: 5 }
  ];

  const keyInitiatives = [
    { name: 'AI-Powered Learning', status: 'active', progress: 68, impact: 'high', schools: 8 },
    { name: 'STEM Excellence Program', status: 'active', progress: 75, impact: 'high', schools: 12 },
    { name: 'Parent Engagement Portal', status: 'active', progress: 82, impact: 'medium', schools: 12 },
    { name: 'Teacher Development', status: 'planning', progress: 45, impact: 'high', schools: 12 },
    { name: 'Career Pathways', status: 'active', progress: 71, impact: 'medium', schools: 6 }
  ];

  const quarterlyMetrics = [
    { quarter: 'Q1 2026', enrollment: 8200, progress: 65, satisfaction: 78 },
    { quarter: 'Q2 2026', enrollment: 8350, progress: 68, satisfaction: 80 },
    { quarter: 'Q3 2026', enrollment: 8400, progress: 70, satisfaction: 82 },
    { quarter: 'Q4 2026', enrollment: 8450, progress: 72, satisfaction: 85 }
  ];

  const careerPathwayDistribution = [
    { pathway: 'STEM', students: 2535, percentage: 30 },
    { pathway: 'Arts & Humanities', students: 1690, percentage: 20 },
    { pathway: 'Business', students: 1268, percentage: 15 },
    { pathway: 'Healthcare', students: 1014, percentage: 12 },
    { pathway: 'Education', students: 845, percentage: 10 },
    { pathway: 'Trades', students: 676, percentage: 8 },
    { pathway: 'Other', students: 422, percentage: 5 }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* District Summary */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl p-6 text-white">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{districtData.name}</h2>
                  <p className="text-gray-300">Superintendent: {districtData.superintendent}</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                    <div>
                      <p className="text-3xl font-bold">{districtData.totalSchools}</p>
                      <p className="text-sm text-gray-400">Schools</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{districtData.totalStudents.toLocaleString()}</p>
                      <p className="text-sm text-gray-400">Students</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{districtData.totalTeachers}</p>
                      <p className="text-sm text-gray-400">Teachers</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">{districtData.districtAverage}%</p>
                      <p className="text-sm text-gray-400">Avg Progress</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">+{districtData.yearOverYearGrowth}%</p>
                      <p className="text-sm text-gray-400">YoY Growth</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-lg p-3 inline-block">
                    <Building2 className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{districtData.graduationRate}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Graduation Rate</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Above state avg</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{districtData.collegeReadiness}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">College Ready</p>
                <p className="text-xs text-gray-500 mt-1">State target: 75%</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">{districtData.budgetUtilization}%</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Budget Used</p>
                <p className="text-xs text-gray-500 mt-1">$81M total budget</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">15.6</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Student-Teacher Ratio</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Better than target</p>
              </div>
            </div>

            {/* Performance by School Level */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance by School Level</h3>
              <div className="space-y-3">
                {performanceByLevel.map(level => (
                  <div key={level.level} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{level.level}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {level.schools} schools • {level.students.toLocaleString()} students
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{level.avgProgress}%</p>
                        <p className="text-xs text-gray-500">avg progress</p>
                      </div>
                      <div className="flex items-center">
                        {level.trend === 'up' && <ArrowUp className="w-5 h-5 text-green-500" />}
                        {level.trend === 'stable' && <span className="w-5 h-5 text-gray-500">→</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quarterly Trends */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quarterly Progress Trends</h3>
              <div className="flex items-end space-x-2 h-40">
                {quarterlyMetrics.map(quarter => (
                  <div key={quarter.quarter} className="flex-1 flex flex-col items-center">
                    <div className="w-full bg-gray-700 rounded-t" style={{ height: `${quarter.progress}%` }}></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">{quarter.quarter.split(' ')[0]}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-500">{quarter.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'schools':
        return (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">School Performance</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">School</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Type</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Students</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Principal</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Avg Progress</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-gray-700 dark:text-gray-300">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school, idx) => (
                        <tr key={idx} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <School className="w-5 h-5 text-gray-400" />
                              <p className="text-sm font-medium text-gray-900 dark:text-white">{school.name}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              school.type === 'Elementary' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                              school.type === 'Middle' ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' :
                              'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            }`}>
                              {school.type}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{school.students}</td>
                          <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{school.principal}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-2">
                              <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                <div className={`h-2 rounded-full ${
                                  school.avgProgress >= 72 ? 'bg-green-500' :
                                  school.avgProgress >= 68 ? 'bg-yellow-500' :
                                  'bg-red-500'
                                }`} style={{ width: `${school.avgProgress}%` }}></div>
                              </div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{school.avgProgress}%</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center">
                              {school.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                              {school.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                              {school.trend === 'stable' && <span className="text-gray-500">→</span>}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Top Performing School */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">🏆 Top Performing School</h3>
              <p className="text-blue-700 dark:text-blue-300">City View High leads the district with 75% average progress and consistent growth!</p>
            </div>
          </div>
        );

      case 'initiatives':
        return (
          <div className="space-y-6">
            {/* Key Initiatives */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Strategic Initiatives</h3>
              <div className="space-y-4">
                {keyInitiatives.map(initiative => (
                  <div key={initiative.name} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{initiative.name}</h4>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                            initiative.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                            'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          }`}>
                            {initiative.status === 'active' ? 'Active' : 'Planning'}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <span>{initiative.schools} schools</span>
                          <span>Impact: {initiative.impact}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">{initiative.progress}%</p>
                        <p className="text-xs text-gray-500">progress</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-gray-700 h-2 rounded-full" style={{ width: `${initiative.progress}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Budget Allocation */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Budget Allocation (FY 2026)</h3>
              <div className="space-y-3">
                {budgetAllocation.map(budget => (
                  <div key={budget.category} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{budget.category}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          ${(budget.amount / 1000000).toFixed(1)}M ({budget.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${budget.percentage}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Pathway Distribution */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Student Career Pathway Distribution</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {careerPathwayDistribution.map(pathway => (
                  <div key={pathway.pathway} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{pathway.percentage}%</p>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{pathway.pathway}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{pathway.students.toLocaleString()} students</p>
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
        <div className="bg-gray-700 text-white px-4 py-2 text-center">
          <p className="text-sm">
            🎭 Demo Mode - District Administrator Dashboard for Dr. James Wilson (Plainview ISD Superintendent)
          </p>
        </div>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">District Administrator Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">District-wide analytics and strategic oversight</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Logged in as:</span>
                  <span className="font-medium text-gray-900 dark:text-white">Dr. James Wilson</span>
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
                    ? 'border-gray-600 text-gray-700 dark:border-gray-400 dark:text-gray-300'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('schools')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'schools'
                    ? 'border-gray-600 text-gray-700 dark:border-gray-400 dark:text-gray-300'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Schools
              </button>
              <button
                onClick={() => setActiveTab('initiatives')}
                className={`py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'initiatives'
                    ? 'border-gray-600 text-gray-700 dark:border-gray-400 dark:text-gray-300'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Initiatives & Budget
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
              ℹ️ This is demo data for demonstration purposes. In production, you would see real district metrics and live analytics from all schools.
            </p>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export default DistrictAdminDashboard;