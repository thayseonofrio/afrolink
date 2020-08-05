import React from "react"
import {
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Input,
    ListItemText,
    Checkbox,
  } from "@material-ui/core";
import languages from "./../../../../../data/languages"

type SkillsProps = {
    value: string[],
    setSkill: Function
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const skill = ({value, setSkill}: SkillsProps) => {

    const handleSkillChange = (
        event: React.ChangeEvent<{ value: unknown }>
      ) => {
        setSkill(event.target.value as string[]);
      };


    return(
        <FormControl>
        <InputLabel id="skills-label">Habilidades</InputLabel>
        <Select
          labelId="skills-label"
          id="skills"
          multiple
          value={value}
          onChange={handleSkillChange}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(", ")}
          MenuProps={MenuProps}
        >
          {languages.map((skill) => (
            <MenuItem key={skill} value={skill}>
              <Checkbox checked={value.indexOf(skill) > -1} />
              <ListItemText primary={skill} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
}

export default skill