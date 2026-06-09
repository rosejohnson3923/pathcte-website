// ================================================================
// GET STARTED PAGE
// Contact form with license interest segmentation and role selection
// ================================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, User, Mail, GraduationCap, Building2, MessageSquare } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

interface FormData {
  name: string;
  email: string;
  role: 'student' | 'parent' | 'teacher' | 'administrator' | '';
  licenseInterest: 'family' | 'school' | 'district' | '';
  gradeLevel: string;
  school: string;
  district: string;
  hearAboutUs: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  role?: string;
  licenseInterest?: string;
  gradeLevel?: string;
}

export const GetStarted: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    role: '',
    licenseInterest: '',
    gradeLevel: '',
    school: '',
    district: '',
    hearAboutUs: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    { id: 'student', label: '👦👧 Student', description: 'I want to experience career-connected learning' },
    { id: 'parent', label: '👨‍👩‍👧‍👦 Parent', description: 'I want to support my child\'s learning journey' },
    { id: 'teacher', label: '👩‍🏫 Teacher', description: 'I want to enhance my classroom with career-connected content' },
    { id: 'administrator', label: '👔 Administrator', description: 'I want to bring career-connected learning to my school or district' }
  ];

  const licenseOptions = [
    { id: 'family', label: 'Family License', description: 'For homeschool families and individual learners' },
    { id: 'school', label: 'School License', description: 'For microschools, private schools, and charter schools' },
    { id: 'district', label: 'District License', description: 'For school districts seeking enterprise solutions' }
  ];

  const gradeLevels = [
    { value: 'k', label: 'Kindergarten' },
    { value: '1', label: '1st Grade' },
    { value: '2', label: '2nd Grade' },
    { value: '3', label: '3rd Grade' },
    { value: '4', label: '4th Grade' },
    { value: '5', label: '5th Grade' },
    { value: '6', label: '6th Grade' },
    { value: '7', label: '7th Grade' },
    { value: '8', label: '8th Grade' },
    { value: '9', label: '9th Grade' },
    { value: '10', label: '10th Grade' },
    { value: '11', label: '11th Grade' },
    { value: '12', label: '12th Grade' },
    { value: 'multiple', label: 'Multiple Grades' },
    { value: 'adult', label: 'Adult/Professional' }
  ];

  const hearAboutOptions = [
    'Search Engine (Google, Bing, etc.)',
    'Social Media (Facebook, Twitter, LinkedIn)',
    'Educational Conference or Event',
    'Colleague or Friend Recommendation',
    'Educational Publication or Blog',
    'School District Communication',
    'Email Newsletter',
    'Advertisement',
    'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Role validation
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }

    // License interest validation
    if (!formData.licenseInterest) {
      newErrors.licenseInterest = 'Please select a license type';
    }

    // Grade level validation (required for students and parents)
    if ((formData.role === 'student' || formData.role === 'parent') && !formData.gradeLevel) {
      newErrors.gradeLevel = 'Grade level is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct email content
      const emailContent = {
        to: 'info@pathfinity.ai',
        subject: 'New Inquiry - Pathfinity.ai',
        body: `
NEW INQUIRY

Name: ${formData.name}
Email: ${formData.email}
Role: ${formData.role}
License Interest: ${formData.licenseInterest}
${formData.gradeLevel ? `Grade Level: ${formData.gradeLevel}` : ''}
${formData.school ? `School: ${formData.school}` : ''}
${formData.district ? `District: ${formData.district}` : ''}
${formData.hearAboutUs ? `How they heard about us: ${formData.hearAboutUs}` : ''}

Inquiry Date: ${new Date().toLocaleString()}
Source: Pathfinity.ai Get Started Form
        `.trim()
      };

      // For now, we'll simulate the email sending
      // In production, this would integrate with your email service
      console.log('Email would be sent to:', emailContent);

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (show error message to user)
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <MarketingLayout>
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
              </div>

              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Thank You for Your Interest!
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                We've received your inquiry and a member of our team will be in touch shortly.
              </p>

              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">What happens next?</h3>
                <ul className="text-left text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• You'll receive a confirmation email at {formData.email}</li>
                  <li>• Our team will follow up within 1-2 business days</li>
                  <li>• We'll match you with the right plan for your needs</li>
                  <li>• In the meantime, explore our demo to see the platform in action</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/demo"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Try the Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  to="/how-it-works"
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 border-2 border-purple-300 dark:border-purple-500 rounded-xl font-semibold text-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get Started with{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Pathfinity
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Tell us about yourself and we'll connect you with the right career-connected learning solution for your needs.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>AI-powered personalization</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>K-12 career exploration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Flexible licensing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <User className="w-4 h-4 inline mr-2" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <Mail className="w-4 h-4 inline mr-2" />
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                I am a... <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roles.map((role) => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => handleInputChange('role', role.id)}
                    className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                      formData.role === role.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{role.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{role.description}</div>
                  </button>
                ))}
              </div>
              {errors.role && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.role}
                </p>
              )}
            </div>

            {/* License Interest Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                I'm interested in... <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {licenseOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => handleInputChange('licenseInterest', option.id)}
                    className={`p-4 border-2 rounded-lg text-left transition-all duration-200 ${
                      formData.licenseInterest === option.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-500'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{option.label}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{option.description}</div>
                  </button>
                ))}
              </div>
              {errors.licenseInterest && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.licenseInterest}
                </p>
              )}
            </div>

            {/* Grade Level (conditional) */}
            {(formData.role === 'student' || formData.role === 'parent') && (
              <div>
                <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <GraduationCap className="w-4 h-4 inline mr-2" />
                  Grade Level <span className="text-red-500">*</span>
                </label>
                <select
                  id="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={(e) => handleInputChange('gradeLevel', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white ${
                    errors.gradeLevel ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select grade level</option>
                  {gradeLevels.map((grade) => (
                    <option key={grade.value} value={grade.value}>
                      {grade.label}
                    </option>
                  ))}
                </select>
                {errors.gradeLevel && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.gradeLevel}
                  </p>
                )}
              </div>
            )}

            {/* School/District Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  School Name (Optional)
                </label>
                <input
                  type="text"
                  id="school"
                  value={formData.school}
                  onChange={(e) => handleInputChange('school', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter school name"
                />
              </div>

              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Building2 className="w-4 h-4 inline mr-2" />
                  District Name (Optional)
                </label>
                <input
                  type="text"
                  id="district"
                  value={formData.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                  placeholder="Enter district name"
                />
              </div>
            </div>

            {/* How did you hear about us */}
            <div>
              <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                How did you hear about us? (Optional)
              </label>
              <select
                id="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={(e) => handleInputChange('hearAboutUs', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
              >
                <option value="">Select an option</option>
                {hearAboutOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl font-semibold text-lg transition-all duration-200 ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Pathfinity.ai?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Career-connected learning that transforms how students engage with education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every student receives a personalized learning path powered by our PathIQ intelligence system
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Real-World Connections</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect every lesson to real careers so students see why their education matters
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Flexible for Everyone</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Plans for individual families, schools, and districts — from homeschool to enterprise
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default GetStarted;
