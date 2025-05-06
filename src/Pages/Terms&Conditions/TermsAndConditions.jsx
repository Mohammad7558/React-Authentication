import React, { useEffect } from "react";
import { useLocation } from "react-router";

const TermsAndConditions = () => {

  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/terms'){
      window.document.title = 'Terms - Event Master'
    }
  }, [location.pathname])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse bottom-[-100px] right-[-100px]"></div>
      <div className="z-10 w-full max-w-3xl p-8 rounded-2xl shadow-2xl bg-base-100 backdrop-blur-md bg-opacity-90 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Terms and Conditions
        </h1>
        <div className="prose max-w-none max-h-[500px] overflow-y-auto text-gray-700">
          <p>
            Welcome to our application. By accessing or using our service, you
            agree to the following terms and conditions...
          </p>
          <h2>1. Use of the Service</h2>
          <p>
            You must be at least 13 years old to use our service. You agree not
            to misuse the service in any way.
          </p>
          <h2>2. Privacy</h2>
          <p>
            We respect your privacy and will only collect and use your
            information as described in our Privacy Policy.
          </p>
          <h2>3. Changes</h2>
          <p>
            We reserve the right to update these terms at any time. Continued
            use of the service constitutes acceptance of the updated terms.
          </p>
          <h2>4. Contact</h2>
          <p>
            If you have any questions about these terms, feel free to contact
            us at support@example.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
