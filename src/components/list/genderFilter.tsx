import React from "react"
import {Select, MenuItem} from "@material-ui/core"

type GenderFilterProps = {
  className: string,
  onChange: any,
  value: unknown
}
const genderFilter = ({className, onChange, value}: GenderFilterProps) => {
	return (
		<Select
			labelId="gender-filter-input-label"
			id="gender-filter"
			name="gender-filter"
			className={className}
			label="Gênero"
			value={value}
			onChange={onChange}
			onBlur={onChange}
		>
			<MenuItem key="genero" value="default">
        Gênero
			</MenuItem>
			<MenuItem key="female" value="feminino">
        Feminino
			</MenuItem>
			<MenuItem key="male" value="masculino">
        Masculino
			</MenuItem>
			<MenuItem key="other" value="outro">
        Outro
			</MenuItem>
		</Select>
	)
}

export default genderFilter
