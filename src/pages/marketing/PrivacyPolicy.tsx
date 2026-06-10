import React from 'react';
import { MarketingLayout } from '../../components/marketing/MarketingLayout';

export const PrivacyPolicy: React.FC = () => {
  return (
    <MarketingLayout>
      <div className="min-h-screen">
        {/* Header */}
        <section id="privacy-policy-top" className="pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-300">Last Updated: June 2026</p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              
              {/* Introduction */}
              <div className="mb-12 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20">
                <p className="text-gray-300 leading-relaxed">
                  At PathCTE, we are committed to protecting your privacy and ensuring the security of your personal information.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our
                  website or use our career-technical education platform. PathCTE is part of the Pathfinity suite, a product
                  of Esposure, Inc.
                </p>
              </div>

              <div className="space-y-12">
                
                {/* Section 1 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    1. Information We Collect
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                      <p className="text-gray-300 mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Name and contact information (email address, phone number)</li>
                        <li>Educational background and learning preferences</li>
                        <li>Account credentials and profile information</li>
                        <li>Communication preferences and settings</li>
                        <li>Learning progress and achievement data</li>
                        <li>Feedback and survey responses</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Educational Data</h3>
                      <p className="text-gray-300 mb-4">Through our AI-powered platform, we collect:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Learning interactions and responses across career exploration, certifications, and progression</li>
                        <li>Assessment results and performance analytics</li>
                        <li>Time spent on activities and learning patterns</li>
                        <li>AI-generated insights and personalized recommendations</li>
                        <li>Progress tracking and milestone achievements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Automatically Collected Information</h3>
                      <p className="text-gray-300 mb-4">When you use our platform, we automatically collect:</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                        <li>Device and browser information</li>
                        <li>IP address and location data</li>
                        <li>Usage patterns and navigation data</li>
                        <li>Platform performance and error logs</li>
                        <li>Cookie and tracking technology data</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-gray-300 mb-4">We use the information we collect for the following purposes:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>To provide and improve our AI-powered educational services</li>
                    <li>To personalize career exploration, certification prep, and progression</li>
                    <li>To generate adaptive assessments and track learning progress</li>
                    <li>To communicate with you about your account and platform updates</li>
                    <li>To provide customer support and respond to your inquiries</li>
                    <li>To analyze platform usage and enhance educational effectiveness</li>
                    <li>To ensure platform security and prevent fraud</li>
                    <li>To comply with legal obligations and educational standards</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    3. Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Educational Partners:</strong> With schools, teachers, and administrators as part of educational service delivery</li>
                    <li><strong className="text-white">Service Providers:</strong> With trusted third-party providers who assist in platform operations</li>
                    <li><strong className="text-white">Esposure Inc.:</strong> With our parent company for platform infrastructure and support</li>
                    <li><strong className="text-white">Legal Requirements:</strong> When required by law or to protect rights and safety</li>
                    <li><strong className="text-white">Consent:</strong> When you have given explicit consent to share your information</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    4. Student Privacy Protection
                  </h2>
                  <p className="text-gray-300 mb-4">We are committed to protecting student privacy and comply with educational privacy laws:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">FERPA Compliance:</strong> We comply with the Family Educational Rights and Privacy Act</li>
                    <li><strong className="text-white">COPPA Compliance:</strong> We follow Children's Online Privacy Protection Act requirements</li>
                    <li><strong className="text-white">Student Data Protection:</strong> Educational records are protected with enhanced security measures</li>
                    <li><strong className="text-white">Parental Rights:</strong> Parents have rights to access and control their child's information</li>
                    <li><strong className="text-white">Data Minimization:</strong> We collect only the data necessary for educational purposes</li>
                    <li><strong className="text-white">Secure Processing:</strong> All student data is processed using secure, encrypted systems</li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    5. AI and Data Processing
                  </h2>
                  <p className="text-gray-300 mb-4">Our AI-powered platform processes educational data to enhance learning:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Adaptive Learning:</strong> AI algorithms personalize content based on learning patterns</li>
                    <li><strong className="text-white">Assessment Generation:</strong> Automated creation of assessments tailored to individual progress</li>
                    <li><strong className="text-white">Progress Analytics:</strong> AI-driven insights into learning effectiveness and outcomes</li>
                    <li><strong className="text-white">Content Recommendations:</strong> Intelligent suggestions for learning paths and activities</li>
                    <li><strong className="text-white">Performance Prediction:</strong> AI models that help identify learning needs and opportunities</li>
                    <li><strong className="text-white">Data Anonymization:</strong> Personal identifiers are protected in AI processing workflows</li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    6. Data Security
                  </h2>
                  <p className="text-gray-300 mb-4">We implement comprehensive security measures to protect your information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Industry-standard encryption for data transmission and storage</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Multi-factor authentication and access controls</li>
                    <li>Secure cloud infrastructure provided by Esposure Inc.</li>
                    <li>Employee training on data protection and privacy practices</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                </div>

                {/* Section 7 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    7. Your Rights and Choices
                  </h2>
                  <p className="text-gray-300 mb-4">You have the following rights regarding your personal information:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you</li>
                    <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                    <li><strong className="text-white">Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong className="text-white">Opt-out:</strong> Unsubscribe from communications and marketing messages</li>
                    <li><strong className="text-white">Account Control:</strong> Manage your profile settings and privacy preferences</li>
                  </ul>
                </div>

                {/* Section 8 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    8. Cookies and Tracking
                  </h2>
                  <p className="text-gray-300 mb-4">We use cookies and similar technologies to enhance your experience:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Essential Cookies:</strong> Required for platform functionality and security</li>
                    <li><strong className="text-white">Analytics Cookies:</strong> To understand platform usage and improve services</li>
                    <li><strong className="text-white">Functional Cookies:</strong> To remember your preferences and settings</li>
                    <li><strong className="text-white">Performance Cookies:</strong> To monitor and optimize platform performance</li>
                  </ul>
                  <p className="text-gray-300 mt-4">You can control cookie settings through your browser preferences.</p>
                </div>

                {/* Section 9 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    9. Data Retention
                  </h2>
                  <p className="text-gray-300 mb-4">We retain your information as follows:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li><strong className="text-white">Account Data:</strong> Retained while your account is active</li>
                    <li><strong className="text-white">Educational Records:</strong> Retained according to educational privacy laws and school policies</li>
                    <li><strong className="text-white">Learning Analytics:</strong> Anonymized data may be retained for research and platform improvement</li>
                    <li><strong className="text-white">Communication Records:</strong> Retained for customer service and legal purposes</li>
                    <li><strong className="text-white">Platform Logs:</strong> Retained for security and performance monitoring</li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    10. Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-300 mb-4">We may update this Privacy Policy from time to time. We will notify you of changes by:</p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>Posting the updated policy on our website</li>
                    <li>Updating the "Last Updated" date</li>
                    <li>Sending email notifications for significant changes</li>
                    <li>Providing in-platform notifications for registered users</li>
                  </ul>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-purple-400/30">
                    11. Contact Information
                  </h2>
                  <p className="text-gray-300 mb-6">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-400/20">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-white font-semibold mb-2">PathCTE</h3>
                        <p className="text-gray-300">Career-technical education · part of the Pathfinity suite</p>
                        <p className="text-gray-300">Powered by Esposure, Inc.</p>
                      </div>

                      <div>
                        <p className="text-gray-300"><strong className="text-white">Email:</strong> info@pathfinity.ai</p>
                        <p className="text-gray-300"><strong className="text-white">Website:</strong> pathcte.com</p>
                        <p className="text-gray-300"><strong className="text-white">Contact Form:</strong> <a href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">Contact Us</a></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="text-center pt-8 border-t border-white/20">
                  <p className="text-gray-400 text-sm italic">
                    This Privacy Policy is effective as of the date listed above and applies to all information
                    collected by PathCTE through our website and platform services.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </MarketingLayout>
  );
};