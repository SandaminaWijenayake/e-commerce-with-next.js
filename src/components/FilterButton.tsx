import React, { useState, useEffect, use, useRef } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import FilterTuggle from "./FilterTuggle";
import type { FilterTuggleProps } from "./FilterTuggle";

interface FilterButtonProps extends FilterTuggleProps {}
const FilterButton = (props: FilterButtonProps) => {
  const { filterOptions, handleFilterOption } = props;
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    setOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleFilterOption]);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden btn-gray py-2.5 px-6"
      >
        <FilterAltOutlinedIcon className="mr-1 -translate-y-0.5" />
        <span className="font-semibold text-sm">Filters</span>
      </button>
      <div
        ref={dropdownRef}
        className={`lg:hidden ${open ? "block" : "hidden"}`}
      >
        <FilterTuggle
          filterOptions={filterOptions}
          handleFilterOption={handleFilterOption}
        />
      </div>
    </div>
  );
};

export default FilterButton;
