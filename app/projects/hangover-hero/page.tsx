import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function HangoverHeroProjectPage() {
  const project = projects.find(p => p.id === "3");

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
      <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden bg-gray-900">
        <Image
          src="/HHCover_detail.jpg"
          alt="Hangover Hero Mobile App"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBMRXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAKKADAAQAAAABAAAAFgAAAAD/wAARCAAWACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAWFhYWFhYmFhYmNiYmJjZJNjY2NklcSUlJSUlcb1xcXFxcXG9vb29vb29vhoaGhoaGnJycnJyvr6+vr6+vr6+v/9sAQwEbHR0tKS1MKSlMt3xmfLe3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3t7e3/90ABAAD/9oADAMBAAIRAxEAPwCxLcTecAJSoI9ap3N9dwKAjk5zznrToIYnf9/0H41fmt42ZJU+6gOB+GK1lK0dTKNNc2jMdNRvN6hi3PPU1aaSe6URyEhWHQ5qeJwkaoww3SoXuMFGkypOSB6iolL3bouKfNZo524jMb47VXrfkiWddwFVvsS1gpdzdw7H/9C9p4SS3yw53Z/MVNeyeVB8oqHS/wDj3P1H8hTtS/1FOrswp7orSWMxeMhxtON2euT1qa+uYIj5Plhio4z0FXj0j+orC1P/AI+TVN+6kLq2UXvZVJK4wxyRiovt8voKglqvWXKi+Zn/2Q=="
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
                Hangover Hero is a vibrant mobile gaming application that delivers an engaging side-scrolling 
                experience. The app combines intuitive gameplay mechanics with eye-catching visuals to create 
                an entertaining user experience.
              </p>
              <p>
                The game features a dynamic 2D side-scrolling environment with a cityscape backdrop, water-based 
                obstacles, and various interactive elements. Players navigate through challenges while collecting 
                power-ups and achieving high scores.
              </p>
              <p>
                Designed with a focus on user engagement and retention, the app provides a seamless mobile 
                gaming experience with smooth controls, progressive difficulty, and rewarding gameplay loops 
                that keep players coming back.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Side-Scrolling Gameplay</h3>
                <p className="text-gray-400 text-sm">
                  Smooth 2D side-scrolling mechanics with dynamic obstacles and interactive elements.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Power-Up System</h3>
                <p className="text-gray-400 text-sm">
                  Engaging power-up meter and collection system to enhance gameplay progression.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Score Tracking</h3>
                <p className="text-gray-400 text-sm">
                  Real-time score tracking and time-based challenges to encourage replayability.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Vibrant Visual Design</h3>
                <p className="text-gray-400 text-sm">
                  Eye-catching pixel art style with colorful environments and dynamic backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

