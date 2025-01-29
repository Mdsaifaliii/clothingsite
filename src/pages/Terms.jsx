import React from 'react';

const TermsOfService = () => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
    <p className="mb-4">
      Welcome to Clothing Store! By accessing or using our website, you agree to comply with these terms and conditions.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4">Use of the Website</h2>
    <p className="mb-4">
      Our website is intended for lawful purposes only. You may not use our site to:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>Engage in fraudulent activities.</li>
      <li>Distribute harmful software or materials.</li>
      <li>Violate intellectual property rights.</li>
    </ul>

    <h2 className="text-2xl font-semibold mt-6 mb-4">Order and Payment Terms</h2>
    <p className="mb-4">
      All orders are subject to availability. Payment must be made at checkout via our secure payment gateway. We reserve the right to cancel any order that violates our policies.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-4">Limitation of Liability</h2>
    <p className="mb-4">
      Wearluxe is not responsible for any indirect, incidental, or consequential damages arising from your use of our website.
    </p>

    <p className="mt-6">
      If you have any questions about these terms, contact us at <span className="text-yellow-400">support@Wearluxe.com</span>.
    </p>
  </div>
);

export default TermsOfService;