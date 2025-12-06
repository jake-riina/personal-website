import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function HandsOnProjectPage() {
  const project = projects.find(p => p.id === "1");

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen bg-black">
      {/* Header with back button */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/projects"
          className="inline-block text-blue-400 hover:text-blue-300 mb-6"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
        <Image
          src="/HandsOnProjectCover.png"
          alt="HandsOn Robotic Surgery Training Platform"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Project Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title and Description */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Disciplines */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
                Disciplines
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.disciplines.map((discipline, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {discipline}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Type */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
                Project Type
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.projectTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Context */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <h3 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wide">
                Context
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.contexts.map((context, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                  >
                    {context}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-12 min-h-[320px]">
            <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                HandsOn is an innovative robotic surgery training platform that combines cutting-edge 
                software with smart glove technology to provide immersive, hands-on training for medical 
                professionals.
              </p>
              <p>
                The system includes modules for different surgical techniques such as pressure control, 
                cutting procedures, and instrument manipulation. Each module is designed to build 
                specific skills through interactive exercises and real-time feedback.
              </p>
              <p>
                The smart glove component enables haptic feedback and precise motion tracking, allowing 
                trainees to practice robotic surgery techniques in a safe, controlled environment before 
                operating on real patients.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Smart Glove Integration</h3>
                <p className="text-gray-400 text-sm">
                  Advanced haptic feedback and motion tracking for realistic training experiences.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Progress Tracking</h3>
                <p className="text-gray-400 text-sm">
                  Comprehensive analytics and skill assessments to monitor trainee development.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Interactive Modules</h3>
                <p className="text-gray-400 text-sm">
                  Various training modules covering different surgical techniques and procedures.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Daily Challenges</h3>
                <p className="text-gray-400 text-sm">
                  Engaging daily exercises to build speed, accuracy, and surgical awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

