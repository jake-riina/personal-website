"use client";

import { useState, useMemo, useCallback, useTransition, startTransition } from "react";
import { projects, Project, Discipline, ProjectType, Skill, Context } from "@/data/projects";
import FilterPills from "@/components/FilterPills";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const disciplines: Discipline[] = ["Product Design", "UX/UI", "Engineering", "Business / Strategy"];
const projectTypes: ProjectType[] = ["Physical Product", "App / Software", "Research", "Startup / Concept"];
const skills: Skill[] = ["CAD", "Prototyping", "Figma", "User Research", "Manufacturing", "Data"];
const contexts: Context[] = ["Academic", "Internship", "Startup"];

export default function ProjectsPage() {
  const [selectedDisciplines, setSelectedDisciplines] = useState<Discipline[]>([]);
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<ProjectType[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedContexts, setSelectedContexts] = useState<Context[]>([]);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Optimized filtering with early exits
  const filteredProjects = useMemo(() => {
    // Early exit if no filters
    if (selectedDisciplines.length === 0 && 
        selectedProjectTypes.length === 0 && 
        selectedSkills.length === 0 && 
        selectedContexts.length === 0) {
      return projects;
    }

    // Use Sets for O(1) lookups instead of O(n) array operations
    const disciplineSet = new Set(selectedDisciplines);
    const projectTypeSet = new Set(selectedProjectTypes);
    const skillSet = new Set(selectedSkills);
    const contextSet = new Set(selectedContexts);

    return projects.filter((project) => {
      // Early exit if any category doesn't match
      if (selectedDisciplines.length > 0 && !project.disciplines.some((d) => disciplineSet.has(d))) {
        return false;
      }
      if (selectedProjectTypes.length > 0 && !project.projectTypes.some((pt) => projectTypeSet.has(pt))) {
        return false;
      }
      if (selectedSkills.length > 0 && !project.skills.some((s) => skillSet.has(s))) {
        return false;
      }
      if (selectedContexts.length > 0 && !project.contexts.some((c) => contextSet.has(c))) {
        return false;
      }
      return true;
    });
  }, [selectedDisciplines, selectedProjectTypes, selectedSkills, selectedContexts]);

  // Use startTransition to make filter updates non-blocking
  const handleDisciplineChange = useCallback((newSelection: Discipline[]) => {
    startTransition(() => {
      setSelectedDisciplines(newSelection);
    });
  }, []);

  const handleProjectTypeChange = useCallback((newSelection: ProjectType[]) => {
    startTransition(() => {
      setSelectedProjectTypes(newSelection);
    });
  }, []);

  const handleSkillChange = useCallback((newSelection: Skill[]) => {
    startTransition(() => {
      setSelectedSkills(newSelection);
    });
  }, []);

  const handleContextChange = useCallback((newSelection: Context[]) => {
    startTransition(() => {
      setSelectedContexts(newSelection);
    });
  }, []);

  return (
    <main className="min-h-screen bg-black py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-block text-blue-400 hover:text-blue-300 mb-4"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Projects
          </h1>
          <p className="text-gray-400 mt-2">
            {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"} found
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-900 rounded-lg shadow-md p-6 mb-8 border border-gray-800">
          <FilterPills
            label="Discipline"
            options={disciplines}
            selected={selectedDisciplines}
            onChange={handleDisciplineChange}
          />
          <FilterPills
            label="Project Type"
            options={projectTypes}
            selected={selectedProjectTypes}
            onChange={handleProjectTypeChange}
          />
          
          {/* Advanced Filters Dropdown */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors mb-4"
            >
              <span className="text-sm font-semibold uppercase tracking-wide">
                Additional Filters
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-200 ${showAdvancedFilters ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showAdvancedFilters && (
              <div className="space-y-6">
                <FilterPills
                  label="Skills"
                  options={skills}
                  selected={selectedSkills}
                  onChange={handleSkillChange}
                />
                <FilterPills
                  label="Context"
                  options={contexts}
                  selected={selectedContexts}
                  onChange={handleContextChange}
                />
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid - Only render visible projects to avoid processing hidden images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No projects match the selected filters. Try adjusting your selections.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

