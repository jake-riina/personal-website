"use client";

import { useState } from "react";

interface AboutDropdownProps {
  title: string;
  content: string;
}

export default function AboutDropdown({ title, content }: AboutDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left text-white hover:text-blue-400 transition-colors"
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          {content}
        </div>
      )}
    </div>
  );
}

