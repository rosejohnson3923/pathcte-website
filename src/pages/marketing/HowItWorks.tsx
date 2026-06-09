// ================================================================
// HOW IT WORKS PAGE
// Detailed explanation with audience-specific tabs
// ================================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Target, ArrowRight, Play, ChevronRight } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

type AudienceTab = 'student' | 'parent' | 'teacher' | 'admin';

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AudienceTab>('student');

  const tabs = [
    { id: 'student' as AudienceTab, label: '👦👧 Students', title: 'Your Epic Learning Adventure' },
    { id: 'parent' as AudienceTab, label: '👨‍👩‍👧‍👦 Parents', title: 'End Homework Battles Forever' },
    { id: 'teacher' as AudienceTab, label: '👩‍🏫 Teachers', title: 'Data-Driven Differentiation Made Simple' },
    { id: 'admin' as AudienceTab, label: '👔 Admins', title: 'Strategic Educational Innovation' }
  ];

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section id="how-pathfinity-works" className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            How Pathfinity.ai Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Discover how our revolutionary three-phase system ensures every student progresses and finds their optimal learning path
          </p>
        </div>
      </section>

      {/* Universal Overview Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              The Three-Phase Learning Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Every day, students experience a complete learning adventure that guarantees multiple opportunities to master skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phase 1: LEARN */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 LEARN Phase</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Master core skills across Math, English, Science, and Social Studies through focused lessons.
              </p>
            </div>

            {/* Phase 2: EXPERIENCE */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 EXPERIENCE Phase</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Apply those same skills in exciting careers at Career, Inc.—from chef to architect to game designer.
              </p>
            </div>

            {/* Phase 3: DISCOVER */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🚪 DISCOVER Phase</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Reinforce learning through engaging story adventures that test knowledge in narrative contexts.
              </p>
            </div>
          </div>

          {/* Breakthrough Message */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 The Breakthrough</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              A child who struggles with abstract math might excel when using those same skills as a chef, then master them completely in a story adventure.
            </p>
            <div className="flex items-center justify-center space-x-3 text-purple-600 dark:text-purple-400">
              <span className="text-2xl">🦉</span>
              <p className="text-sm font-medium">
                Finn, your AI guide, ensures every student finds their path to success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience-Specific Tabs */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Perspective
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how Pathfinity.ai transforms learning from your unique viewpoint
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
            {activeTab === 'student' && <StudentContent />}
            {activeTab === 'parent' && <ParentContent />}
            {activeTab === 'teacher' && <TeacherContent />}
            {activeTab === 'admin' && <AdminContent />}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how three-phase learning transforms education for every type of learner
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/demo"
              className="w-full sm:w-auto px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Try the Demo</span>
            </Link>
            
            <Link
              to="/get-started"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center space-x-2"
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

// Student Content Component
const StudentContent: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      👦👧 Your Epic Learning Adventure
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Level Up Every Day</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Choose Your Career</strong> at Career, Inc. from hundreds of exciting options</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Never Get Blocked</strong> - struggling in one area doesn't stop your adventure</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Earn XP and Badges</strong> for every activity, even when learning is challenging</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Advanced Career Paths</strong> - love being a chef? Progress from Cooking Helper → Sous Chef → Head Chef → Master Chef</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Why It's Like Your Favorite Games</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Continuous progression</strong> - always moving forward in your adventure</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Multiple paths to success</strong> - find the way YOU learn best</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Epic quests</strong> - save story characters using your real skills</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Achievement unlocks</strong> - discover new careers and story themes</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Real Student Reviews</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <blockquote className="text-sm italic text-gray-700 dark:text-gray-300">
          "I wanted to be a firefighter and got to count fire equipment! Math was actually fun when I was helping keep people safe. Now I love counting everything!"
          <footer className="text-xs font-medium text-green-600 dark:text-green-400 mt-2">- Tyler, 2nd Grade (K-5: Community Helper)</footer>
        </blockquote>
        <blockquote className="text-sm italic text-gray-700 dark:text-gray-300">
          "Being a game designer was AMAZING! I used geometry to create cool level designs and wrote stories for the characters. I never knew math and writing worked together like that!"
          <footer className="text-xs font-medium text-green-600 dark:text-green-400 mt-2">- Maya, 7th Grade (6-8: Technology Innovation)</footer>
        </blockquote>
      </div>
    </div>

    <div className="text-center">
      <Link
        to="/products/pathfinity"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        <span>Learn More for Students</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

// Parent Content Component
const ParentContent: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      👨‍👩‍👧‍👦 End Homework Battles Forever
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Problem We Solve</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your child gets "stuck" on homework and can't progress. Tears, frustration, and homework battles become the daily norm. Meanwhile, they play games for hours without getting blocked or frustrated.
        </p>
        
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Pathfinity.ai Solution</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>No More "I'm Stuck" Meltdowns</strong> - your child always progresses through the full learning journey</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Three Learning Contexts</strong> - struggling with abstract fractions? Excel as a chef using the same skills</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Learning Style Discovery</strong> - finally understand HOW your child learns best</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">What You'll See at Home</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>Confidence building as skills work in real contexts</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>Voluntary learning extensions when they discover careers they love</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>Rich insights: "Emma masters math through practical applications, not abstract problems"</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>No anxiety about "failing" - struggling in one area doesn't block progress</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Parent Testimonials</h4>
      <blockquote className="text-sm italic text-gray-700 dark:text-gray-300 mb-4">
        "My son always struggled with math and would get so frustrated being stuck on the same problems. With Pathfinity.ai, he learned fractions by being a chef, then chose to continue his cooking adventure for two extra hours. Now he says he wants to be a chef AND he's good at math!"
        <footer className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2">- Jennifer M., Parent of 4th Grader (K-5: Creative/Practical)</footer>
      </blockquote>
    </div>

    <div className="text-center">
      <Link
        to="/solutions/homeschool"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        <span>Learn More for Parents</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

// Teacher Content Component
const TeacherContent: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      👩‍🏫 Data-Driven Differentiation Made Simple
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The Challenge You Face</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You know every child learns differently, but how do you personalize learning for 25+ students? You need data to prove learning styles and tools to act on insights.
        </p>
        
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Rich Learning Analytics for Every Student</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Learning Style Identification</strong>: "Sarah masters math through practical applications, not abstract problems"</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Context Performance Data</strong>: See exactly which students improve through career scenarios vs. narrative assessments</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Three-Phase Assessment System</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Instead of one data point per skill, get rich insights into HOW each child learns best through traditional, practical, and narrative assessment contexts.
        </p>
        
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Parent Conference Gold</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>"Emma learns math best through hands-on activities like cooking scenarios"</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span>"Marcus shows sustained interest in engineering careers - consider STEM enrichment"</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Teacher Testimonial</h4>
      <blockquote className="text-sm italic text-gray-700 dark:text-gray-300">
        "For the first time, I have concrete data showing HOW each of my students learns best. Parent conferences became collaborative conversations about optimizing each child's learning path."
        <footer className="text-xs font-medium text-green-600 dark:text-green-400 mt-2">- Ms. Rodriguez, 4th Grade</footer>
      </blockquote>
    </div>

    <div className="text-center">
      <Link
        to="/solutions/districts"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        <span>Learn More for Teachers</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

// Admin Content Component
const AdminContent: React.FC = () => (
  <div>
    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      👔 Strategic Educational Innovation
    </h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The District Challenge</h4>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          21st-century workforce preparation requires more than test scores. You need students who can transfer skills across contexts, understand career pathways, and develop authentic interests that guide educational choices.
        </p>
        
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Comprehensive Analytics Dashboard</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>District-wide learning analytics</strong> across all subjects and grade levels</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-purple-600 mt-0.5" />
            <span><strong>Career interest trending</strong> by demographic groups and geographic regions</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Future-Ready Workforce Development</h4>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Early career awareness</strong> starting in elementary grades</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Skills-to-careers mapping</strong> showing students exactly why education matters</span>
          </li>
          <li className="flex items-start space-x-3">
            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
            <span><strong>Multi-context skill assessment</strong> beyond traditional testing</span>
          </li>
        </ul>
        
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">Strategic Long-Term Value</h4>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Elementary</strong>: Career awareness and learning style identification</li>
          <li><strong>Middle School</strong>: Career exploration and skill specialization</li>
          <li><strong>High School</strong>: Career preparation and college pathway alignment</li>
        </ul>
      </div>
    </div>

    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Administrator Testimonials</h4>
      <blockquote className="text-sm italic text-gray-700 dark:text-gray-300">
        "District-wide, we've seen 23% improvement in cross-curricular skill transfer and 31% increase in sustained engagement with career exploration. The long-term career interest tracking helps us align our curriculum with regional workforce needs."
        <footer className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2">- Dr. Johnson, District Superintendent (K-12: System-wide Impact)</footer>
      </blockquote>
    </div>

    <div className="text-center">
      <Link
        to="/solutions/districts"
        className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        <span>Learn More for Administrators</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default HowItWorks;