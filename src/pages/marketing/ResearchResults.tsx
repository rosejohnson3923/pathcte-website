// ================================================================
// RESEARCH RESULTS PAGE
// Comprehensive research validation and scientific foundation for Pathfinity.ai
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  BarChart3, 
  Users, 
  Target, 
  BookOpen,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
  Globe,
  Sparkles,
  Shield,
  Star,
  Briefcase,
  Brain,
  Lightbulb,
  Building2,
  Clock,
  GraduationCap,
  Trophy,
  ChevronRight,
  Zap,
  Heart
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export const ResearchResults: React.FC = () => {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="science-behind-pathfinity" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Trophy className="w-8 h-8 text-blue-500" />
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                The Science Behind Pathfinity.ai
              </h1>
              <Trophy className="w-8 h-8 text-blue-500" />
            </div>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto">
              Built on the most extensive EdTech market research program in the industry, validated by real-world testing with over 10,000+ students across 100+ schools and universities.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-10 text-lg text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-blue-500" />
                <span>10,000+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-6 h-6 text-blue-500" />
                <span>100+ Schools</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-blue-500" />
                <span>37 Contract Awards</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://app.pathfinity.ai"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Experience the Research</span>
              </a>
              
              <Link
                to="/get-started"
                className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 border-2 border-blue-300 dark:border-blue-500 rounded-xl font-semibold text-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research at Scale */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏗️ Unprecedented Market Research & Validation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Our product and value propositions result from iterative and extensive market research & testing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">37</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Contract Awards</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">K-12 School Districts & Colleges</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Schools/Campuses</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">Research & Implementation</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Students Impacted</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Proven EdTech</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Years</div>
              <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">Continuous Research</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Learning Center */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/images/esposure-logo-black.png" 
                alt="Esposure™" 
                className="h-12 w-auto mr-4 dark:hidden"
              />
              <img 
                src="/images/esposure-logo-white.png" 
                alt="Esposure™" 
                className="h-12 w-auto mr-4 hidden dark:block"
              />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Digital Learning Center
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              8,000+ square foot state-of-the-art Digital Learning Center in Duncanville, Texas - the epicenter for educational research and market validation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Research Infrastructure</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Production-Ready Esports Stage</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Live broadcast capability for local and international tournaments</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Broadcast-Ready Studios</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Professional podcast and digital content production rooms</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Interactive Classrooms</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Real-world testing environments for learning innovations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Full Production Facility</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Professional broadcast equipment for content creation</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Dual-Purpose Mission</h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="w-8 h-8 text-red-500" />
                    <h4 className="font-bold text-gray-900 dark:text-white">Student Engagement</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Excite and engage students in digital skills of the future through hands-on learning experiences</p>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-8 h-8 text-blue-500" />
                    <h4 className="font-bold text-gray-900 dark:text-white">Market Research</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Conduct comprehensive research and confirm product-market fit for Learning Experience Platforms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Market Validation */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Comprehensive Market Validation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Direct stakeholder engagement across all education levels and roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3 mb-4">
                <Trophy className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Esports Competitions</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Hundreds of esports competitions providing direct student engagement and real-time feedback collection
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Direct Student Feedback</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Teacher Development</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Comprehensive workshops with educators providing input on platform design and functionality
              </p>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">Educator Input</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Community Sessions</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Parent and administrator listening sessions gathering feedback on educational priorities
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Stakeholder Alignment</div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="w-8 h-8 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Field Trips</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                500+ field trips with schools experiencing our innovations firsthand
              </p>
              <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">Experiential Validation</div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Business Partners</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                50+ business and corporate sponsors validating workforce-ready initiatives
              </p>
              <div className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">Industry Validation</div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-yellow-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Cross-Demographic</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Urban, suburban, and rural school district participation ensuring broad applicability
              </p>
              <div className="text-sm text-yellow-600 dark:text-yellow-400 font-medium">Diverse Validation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Participants */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📊 Research Participants
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Comprehensive stakeholder engagement across all education levels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100s</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Teachers</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Market tested our product and provided curriculum feedback</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">1000s</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Students</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Validated engagement mechanics and learning preferences</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">1000s</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Parents</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Confirmed family needs and adoption requirements</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">100s</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Administrators</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Validated institutional requirements and implementation needs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Research Foundation */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🔬 Academic Research Foundation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Decades of peer-reviewed educational research supporting our market-tested three-phase learning approach
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Transfer Learning Theory</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Students transfer knowledge more effectively when they comprehend principles through multiple contexts rather than isolated instruction.
              </p>
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Only 10-40% of traditional knowledge transfers immediately</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Multi-Context Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Transfer includes near transfer (similar contexts) and far transfer (different, real-world situations) for deep understanding.
              </p>
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">Abstract → Practical → Narrative contexts</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">No-Barrier Progression</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Excessive barriers between learning phases lead to failed knowledge conversion. Continuous progression maximizes transfer opportunities.
              </p>
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Unlike traditional "gating" systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Results */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              📈 Digital Learning Center Research Results
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              2020-2024 comprehensive market validation outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-500 mr-3" />
                  Student Engagement Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Field Trip Interest</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">98%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Esports Engagement</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">95%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Career Interest Development</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">87%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Learning Style Preferences</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">92%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 text-green-500 mr-3" />
                  Educator Adoption Insights
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Gamification Integration</span>
                    <span className="font-bold text-green-600 dark:text-green-400">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Multi-Context Need</span>
                    <span className="font-bold text-green-600 dark:text-green-400">89%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Real-Time Analytics</span>
                    <span className="font-bold text-green-600 dark:text-green-400">91%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Career-Connected Learning</span>
                    <span className="font-bold text-green-600 dark:text-green-400">88%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Heart className="w-6 h-6 text-purple-500 mr-3" />
                  Family & Community Validation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Parent Satisfaction</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">93%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Community Engagement</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">88%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Platform Security</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">99%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Academic Integration</span>
                    <span className="font-bold text-purple-600 dark:text-purple-400">90%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Briefcase className="w-6 h-6 text-orange-500 mr-3" />
                  Business & Industry Validation
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Corporate Sponsors</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Career Pathway Alignment</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Workforce Requirements</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-300">Partnership Commitments</span>
                    <span className="font-bold text-orange-600 dark:text-orange-400">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP Platform Success */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🏆 Built on Esposure's DEEP™ Platform Success
            </h2>
            <div className="flex items-center justify-center mt-4 mb-6">
              <img 
                src="/images/esposure-logo-black.png" 
                alt="Esposure™" 
                className="h-10 w-auto dark:hidden opacity-80"
              />
              <img 
                src="/images/esposure-logo-white.png" 
                alt="Esposure™" 
                className="h-10 w-auto hidden dark:block opacity-80"
              />
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Leveraging 15+ years of EdTech leadership and our proprietary Distributed Education and Entertainment Platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Established Market Credibility</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">EdTech Experience</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">15+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Students Served</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">10,000+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Contract Awards</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">37</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Platform Uptime</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">99.9%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">DEEP™ Platform Technical Foundation</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Scalable Cloud Infrastructure</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Supporting massive concurrent research studies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Advanced AI Personalization</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Refined through 10,000+ student interactions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Real-Time Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Validated by hundreds of educator workshops</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Enterprise-Grade Security</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Trusted by 37 institutional contract awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Study Results */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              🎯 Pilot Study Results (2024)
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Real-world validation of our research-backed approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">78%</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Cross-Context Transfer</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Skill application improvement</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">92%</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Learning Style ID</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Measurable preferences</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">85%</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Engagement Increase</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">Voluntary learning time</div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">65%</div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Retention Improvement</div>
              <div className="text-xs text-gray-600 dark:text-gray-300">30-day skill retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join the Educational Revolution?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience learning backed by rigorous research and validated by over 10,000 students across 100+ schools
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Experience the Research</span>
            </Link>
            
            <Link
              to="/get-started"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default ResearchResults;