import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AboutDropdown from "@/components/AboutDropdown";

export default function Home() {
  // Get HandsOn project and 2 other projects for featured section
  const handsOnProject = projects.find(p => p.title.includes("HandsOn"));
  const otherProjects = projects.filter(p => !p.title.includes("HandsOn")).slice(0, 2);
  const featuredProjects = handsOnProject 
    ? [handsOnProject, ...otherProjects].slice(0, 3)
    : projects.slice(0, 3);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center pt-12 md:pt-24 pb-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
              {/* Left Side - Text and Button */}
              <div className="text-center md:text-left order-2 md:order-1">
                {/* Name Section */}
                <div className="mb-6">
                  <h1 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-2">
                    Hello, I'm
                  </h1>
                  <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 whitespace-normal md:whitespace-nowrap" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    JAKE RIINA
                  </h2>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-lg">
                    Designer and engineer with experience building innovative products. I love creating intuitive interfaces, 
                    solving complex problems, and developing solutions that make a meaningful impact.
                  </p>
                </div>

                {/* Button */}
                <div className="mt-8">
                  <Link
                    href="/projects"
                    className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Projects
                  </Link>
                </div>
              </div>

              {/* Right Side - Photo */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
                  <Image
                    src="/Jake Riina Headshot_edited.jpg"
                    alt="Jake Riina"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Left Side - Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Image 1</span>
                </div>
                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Image 2</span>
                </div>
                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Image 3</span>
                </div>
                <div className="relative w-full h-48 bg-gray-800 rounded-lg overflow-hidden border border-gray-700 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Image 4</span>
                </div>
              </div>

              {/* Right Side - Dropdowns */}
              <div>
                <AboutDropdown
                  title="Soccer"
                  content="I've played soccer since I was 4 years old. It has taught me leadership, discipline, respect, professionalism, and resilience. I was the captain of my high school varsity team in 2022 when we won the New York State Class A Championship."
                />
                <AboutDropdown
                  title="Volunteering"
                  content="Volunteering is something that has always brought me joy and perspective. I've volunteered primarily at Temple Sharaay Tefila in Bedford, NY, where I assist with Holiday Meal prep and delivery. I also volunteer at the Community Center of Northern Westchester, where I help collect and sort clothing donations and help local residents find clothes they need."
                />
                <AboutDropdown
                  title="Photography"
                  content="I love photography because it allows me to capture beautiful moments and savour experiences. Growing up, my parents photographed everything, and because of that, it's allowed us to go back and relive some of our favorite memories. I want to carry on that tradition."
                />
                <AboutDropdown
                  title="Travel"
                  content="I really enjoy travelling because it allows me to try new things, meet new people, and create new experiences that broaden my perspective. Some of my favorite places I've been include Barcelona, Rome, Morocco, Malta, Valencia, and the Canary Islands."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Get In Touch
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hello!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

