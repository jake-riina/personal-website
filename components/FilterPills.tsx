"use client";

import { memo, useCallback, useMemo } from "react";

interface FilterPillsProps<T extends string> {
  label: string;
  options: T[];
  selected: T[];
  onChange: (selected: T[]) => void;
  allOption?: boolean;
}

function FilterPills<T extends string>({
  label,
  options,
  selected,
  onChange,
  allOption = true,
}: FilterPillsProps<T>) {
  const allSelected = useMemo(() => 
    selected.length === 0 || selected.length === options.length,
    [selected.length, options.length]
  );

  const toggleOption = useCallback((option: T) => {
    if (option === "All") {
      onChange([]);
    } else {
      // Create new array based on current selected state
      const isSelected = selected.includes(option);
      if (isSelected) {
        onChange(selected.filter((item) => item !== option));
      } else {
        onChange([...selected, option]);
      }
    }
  }, [selected, onChange]);

  const handleAllClick = useCallback(() => {
    onChange([]);
  }, [onChange]);

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {allOption && (
          <button
            onClick={handleAllClick}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 will-change-auto ${
              allSelected
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            All
          </button>
        )}
        {options.map((option) => (
          <button
            key={option}
            onClick={() => toggleOption(option)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 will-change-auto ${
              selected.includes(option)
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(FilterPills) as typeof FilterPills;

