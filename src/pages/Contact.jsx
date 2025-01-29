import React from 'react';

const Contact = () => (
  <section className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      {/* Contact Information */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-4">
          Have any questions or need support? Reach out to us using the information below or use the contact form.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <ul className="space-y-4">
              <li><strong>Email:</strong> <a href="mailto:support@clothingstore.com" className="text-blue-500">support@Wearluxe.com</a></li>
              <li><strong>Phone:</strong> <span className="text-gray-600">+91 9883747327</span></li>
              <li><strong>Address:</strong> <span className="text-gray-600">123 Fashion Street, India, IN 10001</span></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" rows="4" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-300" required></textarea>
              </div>
              <button type="submit" className="w-full bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Our Store</h2>
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=123+Fashion+Street,New+York,NY+10001"
          width="100%"
          height="450"
          style={{ border: 'none' }}
          allowFullScreen
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>

      {/* Live Chat Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition">
          <span className="material-icons">chat</span>
        </button>
      </div>
    </div>
  </section>
);

export default Contact;
