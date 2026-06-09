import React from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';
import {
  Users,
  GraduationCap,
  BookOpen,
  School,
  Building2,
  UserCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function DemoSelector() {
  const [activeTab, setActiveTab] = React.useState('students');

  const demoCategories = [
    {
      id: "students",
      title: "👦👧 Students",
      icon: <Users className="w-6 h-6" />,
      description: "Experience learning through different grade levels",
      color: "from-blue-500 to-indigo-600",
      users: [
        {
          name: "Sam Brown",
          grade: "Kindergarten",
          school: "Sand View Elementary",
          description: "Early learner discovering foundational skills",
          email: "sam.brown@sandview.plainviewisd.edu",
          password: "password123",
          emoji: "🧒",
          urlParam: "sam-k"
        },
        {
          name: "Alex Davis",
          grade: "1st Grade",
          school: "Sand View Elementary",
          description: "Building reading and math fundamentals",
          email: "alex.davis@sandview.plainviewisd.edu",
          password: "password123",
          emoji: "🌟",
          urlParam: "alex-1st"
        },
        {
          name: "Jordan Smith",
          grade: "7th Grade",
          school: "Ocean View Middle",
          description: "Advancing through middle school challenges",
          email: "jordan.smith@oceanview.plainviewisd.edu",
          password: "password123",
          emoji: "🌊",
          urlParam: "jordan-7th"
        },
        {
          name: "Taylor Johnson",
          grade: "10th Grade",
          school: "City View High",
          description: "Preparing for college and career paths",
          email: "taylor.johnson@cityview.plainviewisd.edu",
          password: "password123",
          emoji: "🏙️",
          urlParam: "taylor-10th"
        }
      ]
    },
    {
      id: "schools",
      title: "🏫 Schools",
      icon: <School className="w-6 h-6" />,
      description: "Experience different educational environments",
      color: "from-emerald-500 to-teal-600",
      subcategories: [
        {
          title: "Public Schools",
          users: [
            {
              name: "Ms. Jenna Grain",
              grade: "K-2 Teacher",
              school: "Sand View Elementary",
              description: "Elementary educator focused on early literacy",
              email: "jenna.grain@sandview.plainviewisd.edu",
              password: "password123",
              emoji: "👩‍🏫",
              urlParam: "teacher-view"
            },
            {
              name: "Ms. Brenda Sea",
              grade: "Middle School",
              school: "Ocean View Middle",
              description: "Science teacher inspiring young minds",
              email: "brenda.sea@oceanview.plainviewisd.edu",
              password: "password123",
              emoji: "👩‍🔬",
              urlParam: "brenda-teacher"
            },
            {
              name: "Mr. John Land",
              grade: "High School",
              school: "City View High",
              description: "Math teacher preparing students for advanced topics",
              email: "john.land@cityview.plainviewisd.edu",
              password: "password123",
              emoji: "👨‍🏫",
              urlParam: "john-teacher"
            }
          ]
        },
        {
          title: "Private/Micro Schools",
          users: [
            {
              name: "Samantha Johnson",
              grade: "Teacher, Owner",
              school: "New Frontier Micro School",
              description: "Experience lesson planning for micro school students",
              email: "samantha.johnson@newfrontier.pathfinity.edu",
              password: "password123",
              emoji: "🏫",
              urlParam: "microschool-teacher"
            }
          ]
        }
      ]
    },
    {
      id: "parents",
      title: "👨‍👩‍👧‍👦 Parents",
      icon: <UserCircle className="w-6 h-6" />,
      description: "Monitor your child's progress and support their learning",
      color: "from-purple-500 to-pink-600",
      users: [
        {
          name: "Sarah Davis",
          grade: "Parent",
          school: "Alex's Parent",
          description: "Supporting elementary learning at home",
          email: "sarah.davis@family.pathfinity.edu",
          password: "password123",
          emoji: "👩‍👧",
          urlParam: "sarah-parent"
        },
        {
          name: "Mike Brown",
          grade: "Parent",
          school: "Sam's Parent",
          description: "Engaged in kindergarten education",
          email: "mike.brown@family.pathfinity.edu",
          password: "password123",
          emoji: "👨‍👦",
          urlParam: "mike-parent"
        }
      ]
    },
    {
      id: "administration",
      title: "🏫 Administration",
      icon: <Building2 className="w-6 h-6" />,
      description: "School and district leadership dashboards",
      color: "from-gray-600 to-gray-800",
      users: [
        {
          name: "Dr. Maria Rodriguez",
          grade: "Principal",
          school: "Sand View Elementary",
          description: "School-level analytics and management",
          email: "principal@plainviewisd.edu",
          password: "password123",
          emoji: "🏫",
          urlParam: "principal"
        },
        {
          name: "Dr. James Wilson",
          grade: "Superintendent",
          school: "Plainview ISD",
          description: "District-wide oversight and strategy",
          email: "superintendent@plainviewisd.edu",
          password: "password123",
          emoji: "🎓",
          urlParam: "superintendent"
        }
      ]
    }
  ];

  const handleDemoSelect = (urlParam: string) => {
    // Navigate to the app with demo parameters for ALL users
    window.location.href = `https://app.pathfinity.ai/app/login?demo=true&user=${urlParam}`;
  };

  return (
    <MarketingLayout showDemoButton={false}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
              <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Plainview ISD Test Environment
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Demo Experience Center
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Select a demo account below to explore how Pathfinity transforms education for students,
              empowers teachers, engages parents, and provides insights for administrators.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="mb-8">
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="-mb-px flex space-x-8 justify-center">
                {demoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                      activeTab === category.id
                        ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="space-y-8">
            {demoCategories
              .filter(category => category.id === activeTab)
              .map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} p-4`}>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 rounded-lg">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Users Grid or Subcategories */}
                <div className="p-6">
                  {category.subcategories ? (
                    // Render subcategories for Schools
                    <div className="space-y-6">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex}>
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            {subcategory.title}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {subcategory.users.map((user, userIndex) => (
                              <button
                                key={userIndex}
                                onClick={() => handleDemoSelect(user.urlParam)}
                                className="group relative p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/20 dark:hover:to-indigo-900/20 transition-all duration-200 text-left border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md"
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="text-3xl">{user.emoji}</div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                      {user.name}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {user.grade} • {user.school}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                      {user.description}
                                    </p>
                                  </div>
                                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                                </div>

                                {/* Credentials Preview */}
                                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                                  <div className="text-xs space-y-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-gray-500 dark:text-gray-400">Email:</span>
                                      <span className="text-gray-700 dark:text-gray-300 font-mono text-[10px]">
                                        {user.email}
                                      </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                      <span className="text-gray-500 dark:text-gray-400">Password:</span>
                                      <span className="text-gray-700 dark:text-gray-300 font-mono">
                                        ••••••••••••
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Render regular users for other categories
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.users?.map((user, userIndex) => (
                        <button
                          key={userIndex}
                          onClick={() => handleDemoSelect(user.urlParam)}
                          className="group relative p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gradient-to-br hover:from-purple-50 hover:to-indigo-50 dark:hover:from-purple-900/20 dark:hover:to-indigo-900/20 transition-all duration-200 text-left border border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-3xl">{user.emoji}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                {user.name}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {user.grade} • {user.school}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                {user.description}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transform group-hover:translate-x-1 transition-transform" />
                          </div>

                          {/* Credentials Preview */}
                          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
                            <div className="text-xs space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-500 dark:text-gray-400">Email:</span>
                                <span className="text-gray-700 dark:text-gray-300 font-mono text-[10px]">
                                  {user.email}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-500 dark:text-gray-400">Password:</span>
                                <span className="text-gray-700 dark:text-gray-300 font-mono">
                                  ••••••••••••
                                </span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
            <div className="flex items-start space-x-2">
              <span className="text-amber-600 dark:text-amber-400">ℹ️</span>
              <div className="text-sm text-amber-800 dark:text-amber-200">
                <p className="font-semibold mb-1">Demo Environment Notice</p>
                <p>
                  This is a demonstration environment with sample data. All student progress,
                  grades, and analytics shown are simulated for testing purposes. No real
                  student data is used or stored.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingLayout>
  );
}

export default DemoSelector;