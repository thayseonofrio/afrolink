import React from "react"
import {Select, MenuItem} from "@material-ui/core"
import { ExperienceFilter } from "./types"

type ExperienceFilterProps = {
  className: string,
  onChange: any,
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
			<MenuItem key={ExperienceFilter.LessThanOne} value={ExperienceFilter.LessThanOne}>
        Menos de 1 ano
			</MenuItem>
			<MenuItem key={ExperienceFilter.OneToTwo} value={ExperienceFilter.OneToTwo}>
        1 a 2 anos
			</MenuItem>
			<MenuItem key={ExperienceFilter.TwoToFour} value={ExperienceFilter.TwoToFour}>
        2 a 4 anos
			</MenuItem>
			<MenuItem key={ExperienceFilter.MoreThanFive} value={ExperienceFilter.MoreThanFive}>
        Mais de 5 anos
			</MenuItem>
			<MenuItem key={ExperienceFilter.MoreThanTen} value={ExperienceFilter.MoreThanTen}>
        Mais de 10 anos
			</MenuItem>
		</Select>
	)
}

export default experienceFilter
