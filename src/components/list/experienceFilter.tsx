import React from "react";
import {Select, MenuItem} from "@material-ui/core";
import { ExperienceFilter } from "./types";

type ExperienceFilterProps = {
  className: string,
  onChange: any
  value: unknown
}

const experienceFilter = ({className, onChange, value}: ExperienceFilterProps) => {
  return (
    <Select
      labelId="experience-filter-input-label"
      id="experience-filter"
      name="experience-filter"
      className={className}
      label="Experiência"
      value={value}
      onChange={onChange}
      onBlur={onChange}
    >
      <MenuItem key="genero" value="default">
        Experiência
      </MenuItem>
      <MenuItem key={ExperienceFilter.lessThanOne} value={ExperienceFilter.lessThanOne}>
        Menos de 1 ano
      </MenuItem>
      <MenuItem key={ExperienceFilter.oneToTwo} value={ExperienceFilter.oneToTwo}>
        1 a 2 anos
      </MenuItem>
      <MenuItem key={ExperienceFilter.twoToFour} value={ExperienceFilter.twoToFour}>
        2 a 4 anos
      </MenuItem>
      <MenuItem key={ExperienceFilter.moreThanFive} value={ExperienceFilter.moreThanFive}>
        Mais de 5 anos
      </MenuItem>
      <MenuItem key={ExperienceFilter.moreThanTen} value={ExperienceFilter.moreThanTen}>
        Mais de 10 anos
      </MenuItem>
    </Select>
  );
};

export default experienceFilter;
