import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { memo, useMemo } from "react";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  // Memoize the tags array to prevent recalculation on every render
  const tags = useMemo(() => {
    return [...project.disciplines, ...project.projectTypes, ...project.skills, ...project.contexts];
  }, [project.disciplines, project.projectTypes, project.skills, project.contexts]);

  return (
    <Link
      href={project.link || "#"}
      className="block group"
    >
      <div className="bg-gray-900 border border-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 will-change-transform">
        {/* Project Image */}
        <div className="relative w-full h-48 bg-gray-700 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            unoptimized={false}
            priority={false}
          />
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors min-h-[3.5rem]">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 min-h-[3rem]">
            {tags.slice(0, 4).map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded border border-gray-700"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded border border-gray-700">
                +{tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

// Only re-render if project data actually changes
export default memo(ProjectCard, (prevProps, nextProps) => {
  return (
    prevProps.project.id === nextProps.project.id &&
    prevProps.project.title === nextProps.project.title &&
    prevProps.project.description === nextProps.project.description &&
    prevProps.project.image === nextProps.project.image &&
    prevProps.project.link === nextProps.project.link
  );
});

