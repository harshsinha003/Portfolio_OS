// const ResumeApp = () => {
//   return (
//     <div className="h-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-auto">
//     <div className="p-8 max-w-4xl mx-auto">
//       <div className="mb-8 flex justify-between items-start">
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">Resume</h1>
//           <p className="text-gray-600">
//             My professional experience and education
//           </p>
//         </div>
//         <a
//           href="/Hv_Sinha_Resume.pdf"
//           download="Harshvardhan_Sinha_Resume.pdf"
//           className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
//             />
//           </svg>
//           Download PDF
//         </a>
//       </div>

//       {/* Experience */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//           <span className="text-3xl">💼</span>
//           Work Experience
//         </h2>

//         <div className="space-y-6">
//           <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
//             <div className="flex justify-between items-start mb-3">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Summer Intern
//                 </h3>
//                 <p className="text-blue-600 font-medium">DeviceDisk</p>
//               </div>
//               <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
//                 May 2025 - July 2025
//               </span>
//             </div>
//             <ul className="list-disc list-inside space-y-2 text-gray-700">
//               <li>Contributed to website and web application development by assisting in UI design, coding, and debugging</li>
//               <li>Collaborated with the development team on live website projects and gained hands-on experience with real-world workflows</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Education */}
//       <section className="mb-8">
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//           <span className="text-3xl">🎓</span>
//           Education
//         </h2>

//         <div className="space-y-4">
//           <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Bachelor of Technology in Computer Science
//                 </h3>
//                 <p className="text-blue-600 font-medium">Vellore Institute of Technology</p>
//               </div>
//               <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
//                 Sept 2022 - July 2026
//               </span>
//             </div>
//             <p className="text-gray-700">
//               CGPA: 7.76/10.0 • Core: Computer Science
//             </p>
//           </div>

//           <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Amle Besant International School
//                 </h3>
//                 <p className="text-green-600 font-medium">12th C.B.S.E - 74%</p>
//               </div>
//               <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
//                 April 2019 - March 2020
//               </span>
//             </div>
//           </div>

//           <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
//             <div className="flex justify-between items-start mb-2">
//               <div>
//                 <h3 className="text-xl font-bold text-gray-800">
//                   Infant Jesus School
//                 </h3>
//                 <p className="text-amber-600 font-medium">10th C.B.S.E - 81%</p>
//               </div>
//               <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
//                 March 2017 - April 2018
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Certifications */}
//       <section>
//         <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//           <span className="text-3xl">🏆</span>
//           Certifications & Awards
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <a href="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/9BD5E6E8A3F56C27?sharingId" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 border border-gray-200 shadow hover:shadow-lg transition-shadow">
//             <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
//               AI-900: Microsoft Azure AI Fundamentals
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </h3>
//             <p className="text-sm text-gray-600">Microsoft • 2024</p>
//           </a>

//           <a href="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/CCB8F87F33C0E4D3?sharingId" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 border border-gray-200 shadow hover:shadow-lg transition-shadow">
//             <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
//               Oracle Cloud Infrastructure Data Science Professional
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </h3>
//             <p className="text-sm text-gray-600">Oracle • 2024</p>
//           </a>

//           <a href="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/E5B7C6A7F0BAF4B4?sharingId" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-4 border border-gray-200 shadow hover:shadow-lg transition-shadow">
//             <h3 className="font-bold text-gray-800 mb-1 flex items-center gap-2">
//               Oracle Cloud Infrastructure Generative AI Professional
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//               </svg>
//             </h3>
//             <p className="text-sm text-gray-600">Oracle • 2024</p>
//           </a>
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// };

// export default ResumeApp;














const ResumeApp = () => {
  return (
    <div className="h-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-auto">
      <div className="p-8 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-10 flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Harshvardhan Sinha</h1>
            <p className="text-gray-700 mt-1 max-w-xl">
              Final-year B.Tech CSE student skilled in algorithms, full-stack development, and 
              data analytics — passionate about problem-solving and building impactful solutions.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <a
              href="/Hv_Sinha_Resume.pdf"
              download="Harshvardhan_Sinha_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 
                  1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download PDF
            </a>

            <div className="text-right text-gray-700 text-sm">
              <p><strong>Email:</strong> harshvardhansinha88@gmail.com</p>
              <p><strong>Phone:</strong> +91 9334394348</p>
              <p><strong>Location:</strong> Patna, Bihar, India</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            💼 Work Experience
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Summer Intern</h3>
                <p className="text-blue-600 font-medium">DeviceDisk</p>
              </div>
              <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                May 2025 – July 2025
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Contributed to website and web application development by assisting in UI design,
                coding, and debugging.
              </li>
              <li>
                Worked closely with the development team on live projects and gained hands-on
                experience with real-world workflows.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🚀 Projects
          </h2>

          <div className="space-y-6">

            {/* Project 1 */}
            <div className="bg-white p-6 rounded-xl border shadow">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Diagnosify – AI-Powered Disease Prediction System
                </h3>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Nov 2024 – Jan 2025
                </span>
              </div>
              <p className="text-gray-700">
                Built a MERN stack health application integrated with Python Flask and SVC model to
                predict diseases from symptoms, offering medication, diet, and workout
                recommendations. Implemented user authentication, PDF reports & a fully responsive UI.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-6 rounded-xl border shadow">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">Real-Time Food Delivery System</h3>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Apr 2025 – May 2025
                </span>
              </div>
              <p className="text-gray-700">
                Developed a MERN-stack food delivery platform with real-time Google Maps tracking,
                Google One-Tap login, Razorpay payments, OTP-based password reset, and a full cart-to-checkout
                workflow with order history.
              </p>
            </div>

            {/* Project 3 */}
            <div className="bg-white p-6 rounded-xl border shadow">
              <div className="flex justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Portfolio OS – Windows 11 Inspired Portfolio
                </h3>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                  Sep 2025 – Oct 2025
                </span>
              </div>
              <p className="text-gray-700">
                Created an immersive React-based portfolio mimicking Windows 11 with draggable
                windows, apps, glassmorphism UI, and Zustand-powered state management with smooth 
                Framer Motion animations.
              </p>
            </div>

          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🎓 Education
          </h2>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Bachelor of Technology in Computer Science
                </h3>
                <span className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full">
                  Sept 2022 – July 2026
                </span>
              </div>
              <p className="text-gray-700">Vellore Institute of Technology • CGPA: 7.76</p>
            </div>

            <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">
                  Annie Besant International School
                </h3>
                <span className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full">
                  April 2019 – March 2020
                </span>
              </div>
              <p className="text-gray-700">12th C.B.S.E – 74%</p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-xl">
              <div className="flex justify-between mb-2">
                <h3 className="text-lg font-bold text-gray-900">Infant Jesus School</h3>
                <span className="text-sm bg-white text-gray-700 px-3 py-1 rounded-full">
                  March 2017 – April 2018
                </span>
              </div>
              <p className="text-gray-700">10th C.B.S.E – 81%</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🛠️ Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Programming Languages</h3>
              <p className="text-gray-700">C++, C, Java, Python, SQL</p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Web Development</h3>
              <p className="text-gray-700">
                HTML, CSS, JavaScript, React.js, Node.js, Express.js, Tailwind, Framer Motion
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Databases</h3>
              <p className="text-gray-700">MongoDB, MySQL, PostgreSQL</p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Machine Learning</h3>
              <p className="text-gray-700">
                SVC, Scikit-Learn, Pandas, NumPy, Feature Engineering, Data Preprocessing
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Tools & Platforms</h3>
              <p className="text-gray-700">Git, GitHub, Vercel, Postman, Notion, Docker</p>
            </div>

            <div className="bg-white p-5 rounded-xl border shadow">
              <h3 className="font-bold text-gray-900 mb-2">Soft Skills</h3>
              <p className="text-gray-700">
                Problem-Solving, Teamwork, Technical Advisory, Adaptability
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            🏆 Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <CertItem title="AI-900: Microsoft Azure AI Fundamentals" year="2024"
              link="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/9BD5E6E8A3F56C27?sharingId" />

            <CertItem title="Oracle Cloud Infrastructure Data Science Professional" year="2024"
              link="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/CCB8F87F33C0E4D3?sharingId" />

            <CertItem title="Oracle Cloud Infrastructure Generative AI Professional" year="2024"
              link="https://learn.microsoft.com/api/credentials/share/en-us/HarshvardhanSinha-9337/E5B7C6A7F0BAF4B4?sharingId" />
          </div>
        </section>

        {/* Interests */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            ⭐ Interests
          </h2>

          <p className="text-gray-700 bg-white p-5 rounded-xl border shadow">
            Exploring new technologies • Watching movies and anime • Tech trends & innovations •
            Filmmaking • Visual storytelling
          </p>
        </section>
      </div>
    </div>
  );
};

const CertItem = ({ title, year, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white rounded-xl p-4 border border-gray-200 shadow hover:shadow-lg transition"
  >
    <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2">
      {title}
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 
           0v6m0-6L10 14" />
      </svg>
    </h3>
    <p className="text-sm text-gray-600">{year}</p>
  </a>
);

export default ResumeApp;
