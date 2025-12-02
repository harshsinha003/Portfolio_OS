import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactApp = () => {
// Initialize EmailJS with public key - uses environment variable with fallback
useEffect(() => {
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '614dP9LHjgdIzusOM';
emailjs.init(publicKey);
}, []);
const [formData, setFormData] = useState({
name: '',
from: '',
subject: '',
message: '',
});
const [submitted, setSubmitted] = useState(false);
const [sending, setSending] = useState(false);
const [error, setError] = useState('');

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {
e.preventDefault();
setSending(true);
setError('');

try {
// EmailJS configuration - uses environment variables with fallbacks
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_is36cc3';
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ele3z0p';

// Template parameters matching your email format
const templateParams = {
user_subject: formData.subject,
user_name: formData.name, // Sender's name
user_email: formData.from, // Sender's email
message: formData.message,
};

console.log('Sending email with params:', templateParams);

// Send email using EmailJS (public key already initialized in useEffect)
const response = await emailjs.send(serviceId, templateId, templateParams);
console.log('Email sent successfully:', response);

setSubmitted(true);
setTimeout(() => {
setSubmitted(false);
setFormData({ name: '', from: '', subject: '', message: '' });
}, 3000);
} catch (err) {
console.error('EmailJS Error:', err);
console.error('Error details:', err.text || err.message);
setError(`Failed to send: ${err.text || err.message || 'Unknown error'}. Please try again or contact me directly.`);
} finally {
setSending(false);
}
};

return (
<div className="h-full bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden flex flex-col">
  {/* Gmail-like Header */}
  <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between shadow-sm">
    <div className="flex items-center gap-4">
      <h1 className="text-xl font-medium text-gray-800">New Message</h1>
    </div>
    <div className="flex items-center gap-2">
      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Minimize">
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>

  {submitted ? (
  <div className="flex-1 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-md">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
      <p className="text-gray-600">Your message has been sent successfully.</p>
    </div>
  </div>
  ) : (
  <div className="flex-1 overflow-auto">
    <div className="bg-white mx-4 my-4 rounded-lg shadow-sm border border-gray-200">
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        {/* To Field - Your Email (Pre-filled) */}
        <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-3 bg-gray-50">
          <label className="text-sm text-gray-600 w-16">To</label>
          <input type="email" value="harshvardhansinha88@gmail.com" disabled
            className="flex-1 outline-none text-sm text-gray-600 bg-gray-50 cursor-not-allowed" />
        </div>

        {/* Name Field - Sender's Name */}
        <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <label className="text-sm text-gray-600 w-16">Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
            placeholder="Your Name" />
        </div>

        {/* From Field - Sender's Email */}
        <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <label className="text-sm text-gray-600 w-16">From</label>
          <input type="email" name="from" value={formData.from} onChange={handleChange} required
            className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400"
            placeholder="your.email@example.com" />
        </div>

        {/* Subject Field */}
        <div className="border-b border-gray-200 px-4 py-3 flex items-center gap-3">
          <label className="text-sm text-gray-600 w-16">Subject</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} required
            className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400" placeholder="Project inquiry" />
        </div>

        {/* Message Field */}
        <div className="px-4 py-3 flex-1">
          <textarea name="message" value={formData.message} onChange={handleChange} required
            className="w-full h-64 outline-none text-sm text-gray-800 placeholder-gray-400 resize-none"
            placeholder="Write your message here..." />
        </div>

        {/* Error Message */}
        {error && (
          <div className="px-4 py-2 bg-red-50 border-t border-red-200">
            <p className="text-sm text-red-600 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </p>
          </div>
        )}

        {/* Send Button */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Attach file">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <button type="button" className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Insert emoji">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <button type="submit" disabled={sending}
            className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {sending ? (
              <>
                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>

    {/* Contact Information Sidebar */}
    <div className="mx-4 my-4 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h3>
      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <a href="mailto:harshvardhansinha88@gmail.com" className="text-sm text-blue-600 hover:underline">
              harshvardhansinha88@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <a href="tel:+919334394348" className="text-sm text-green-600 hover:underline">
              +91 9334394348
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm text-gray-800">India</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Social Links</p>
          <div className="flex gap-2">
            <a href="https://github.com/harshsinha003" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              title="GitHub">
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/harshvardhan-sinha-8306a02a7/" target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              title="LinkedIn">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/Harshv_003" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 bg-sky-100 hover:bg-sky-200 rounded-full flex items-center justify-center transition-colors"
              title="Twitter">
              <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )}
</div>
);
};

export default ContactApp;