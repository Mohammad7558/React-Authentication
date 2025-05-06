import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse top-[-100px] left-[-100px]"></div>
          <div className="absolute w-[400px] h-[400px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse bottom-[-100px] right-[-100px]"></div>
          <div className="z-10 w-full max-w-3xl p-8 rounded-2xl shadow-2xl bg-base-100 backdrop-blur-md bg-opacity-90 border border-gray-200">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
              Privacy Policy
            </h1>
            <div className="prose max-w-none max-h-[500px] overflow-y-auto text-gray-700">
              <p>
                Your privacy is important to us. This privacy policy explains how we
                collect, use, and protect your personal information.
              </p>
              <h2>1. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address,
                and usage data when you use our service.
              </p>
              <h2>2. How We Use Your Information</h2>
              <p>
                We use your information to provide and improve our services,
                communicate with you, and comply with legal obligations.
              </p>
              <h2>3. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience and analyze
                website traffic.
              </p>
              <h2>4. Third-Party Services</h2>
              <p>
                We may use third-party services for analytics or communication.
                These services may collect their own data subject to their privacy
                policies.
              </p>
              <h2>5. Data Security</h2>
              <p>
                We take appropriate measures to protect your information from
                unauthorized access or disclosure.
              </p>
              <h2>6. Changes to This Policy</h2>
              <p>
                We reserve the right to update this policy at any time. Changes will
                be posted on this page.
              </p>
              <h2>7. Contact Us</h2>
              <p>
                If you have any questions or concerns about our privacy policy,
                please contact us at privacy@example.com.
              </p>
            </div>
          </div>
        </div>
      );
};

export default PrivacyPolicy;