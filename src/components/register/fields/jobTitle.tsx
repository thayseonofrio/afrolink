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
import jobTitles from "./../../../../data/jobTitles"

type JobTitleProps = {
    value: string[],
    onChange: any,
    onBlur: any
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

const jobTitle = ({value, onChange, onBlur}: JobTitleProps) => {
    return(
      <FormControl>
      <InputLabel id="job-title-label">Profissão</InputLabel>
      <Select
        labelId="job-title-label"
        id="job-title-label"
        name="job-title-label"
        multiple
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(", ")}
        MenuProps={MenuProps}
      >
        {jobTitles.map((job) => (
          <MenuItem key={job} value={job}>
            <Checkbox checked={value.indexOf(job) > -1} />
            <ListItemText primary={job} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    )
}

export default jobTitle