"use client";
import React, { useState } from "react";

export interface FilterTuggleProps {
  category?: string | null;
  filterOptions: FilterOption[];
  handleFilterOption: (option: string) => void;
}

export interface FilterOption {
  label: string;
  value: string;
}

const FilterTuggle = ({
  filterOptions,
  handleFilterOption,
  category,
}: FilterTuggleProps) => {
  const [selected, setSelected] = useState(category || "all");
  return (
    <div className="space-y-2 mt-4 cursor-pointer">
      {filterOptions.map((option) => (
        <h1
          onClick={() => {
            handleFilterOption(option.value);
            setSelected(option.value);
          }}
          key={option.value}
          className={`rounded-xl py-2 px-3 text-sm font-medium ${
            selected === option.value
              ? "bg-[#f97415] text-white"
              : "hover:text-[#f97415]"
          }`}
        >
          {option.label}
        </h1>
      ))}
    </div>
  );
};

export default FilterTuggle;
