const SkillsApp = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Next.js', level: 88 },
        { name: 'Vue.js', level: 80 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 93 },
        { name: 'Express', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 87 },
        { name: 'REST APIs', level: 95 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: '🛠️',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 88 },
        { name: 'Kubernetes', level: 75 },
      ],
    },
    {
      title: 'Other',
      icon: '💡',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 80 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'Testing', level: 87 },
        { name: 'GraphQL', level: 82 },
        { name: 'WebSockets', level: 85 },
      ],
    },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-auto">
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Skills & Expertise</h1>
        <p className="text-gray-600">
          Technologies and tools I work with daily
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl`}
              >
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {category.title}
              </h2>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Skills */}
      <div className="mt-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Also Familiar With
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Redux',
            'Jest',
            'Webpack',
            'Vite',
            'Sass',
            'Material-UI',
            'Prisma',
            'Firebase',
            'Supabase',
            'Vercel',
            'Netlify',
            'GitHub Actions',
            'Zustand',
            'Framer Motion',
            'Three.js',
            'WebGL',
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white text-gray-700 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SkillsApp;
