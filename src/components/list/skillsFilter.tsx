import React from "react"
import {
	Select,
	MenuItem,
	Checkbox,
	ListItemText,
	Input,
} from "@material-ui/core"
import languages from "./../../../data/languages"

type SkillsFilterProps = {
  className: string;
  onChange: any;
  value: string[];
};
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

const skillsFilter = ({ className, onChange, value }: SkillsFilterProps) => {
	return (
		<Select
			id="skills-filter"
			className={className}
			name="skills-filter"
			label="Habilidades"
			labelId="skills-label"
			multiple
			value={value}
			onChange={onChange}
			onBlur={onChange}
			input={<Input />}
			renderValue={(selected) => (Array(String(selected))).join(", ")}
			MenuProps={MenuProps}
		>
			<MenuItem disabled key="default" value="Habilidades">
				<ListItemText primary="Habilidades" />
			</MenuItem>
			{languages.map((skill) => (
				<MenuItem key={skill} value={skill}>
					<Checkbox checked={value.indexOf(skill) > -1} />
					<ListItemText primary={skill} />
				</MenuItem>
			))}
		</Select>
	)
}

export default skillsFilter
