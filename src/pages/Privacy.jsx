import React from 'react';

const PrivacyPolicy = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
    <p className="mb-4">
      At Wearluxe, your privacy is a priority. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Personal information you provide (e.g., name, email, address).</li>
      <li>Payment information for purchases.</li>
      <li>Usage data, such as pages visited and time spent on the site.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
    <p className="mb-4">
      We use your data to process transactions, improve user experience, and send promotional materials. Your information is never sold or shared without consent.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4">Your Rights</h2>
    <p className="mb-4">
      You have the right to access, correct, or delete your personal information. Contact us at <span className="text-yellow-400">privacy@Wearluxe.com</span> for any requests.
    </p>
  </div>
);

export default PrivacyPolicy;