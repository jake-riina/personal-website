import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function TrustGateProjectPage() {
  const project = projects.find(p => p.id === "2");

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
          src="/TrustGateCover.png"
          alt="TrustGate: AI Gateway"
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
                TrustGate is an AI-first security platform that serves as a centralized gateway for accessing 
                hundreds of AI models. The platform provides robust control mechanisms and enables organizations 
                to deploy AI solutions faster with less friction, supporting global scaling initiatives.
              </p>
              <p>
                The AI Gateway acts as a unified interface that routes requests to various AI providers including 
                OpenAI, Anthropic, Google, and open-source models like Llama. This centralized approach simplifies 
                AI integration, reduces vendor lock-in, and provides comprehensive runtime security for AI 
                applications.
              </p>
              <p>
                The platform features an intuitive dashboard that allows teams to manage multiple AI models from 
                a single interface, monitor usage, implement security policies, and scale their AI infrastructure 
                globally with ease.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Centralized AI Access</h3>
                <p className="text-gray-400 text-sm">
                  Unified gateway to access hundreds of AI models from multiple providers in one place.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Runtime Security</h3>
                <p className="text-gray-400 text-sm">
                  Advanced security controls and monitoring to protect AI applications and data.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Global Scaling</h3>
                <p className="text-gray-400 text-sm">
                  Infrastructure designed to support rapid deployment and scaling across global markets.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Multi-Provider Support</h3>
                <p className="text-gray-400 text-sm">
                  Seamless integration with OpenAI, Anthropic, Google, Llama, and other AI providers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

