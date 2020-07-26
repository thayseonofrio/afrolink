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

type JobTitleProps = {
    value: string[],
    setJobTitle: Function
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

// TODO - add job titles
const jobTitles = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

const jobTitle = ({value, setJobTitle}: JobTitleProps) => {

    const handleJobTitleChange = (
        event: React.ChangeEvent<{ value: unknown }>
      ) => {
        setJobTitle(event.target.value as string[]);
      };


    return(
        <FormControl>
        <InputLabel id="job-title-label">Profissão</InputLabel>
        <Select
          labelId="job-title-label"
          id="job-title"
          multiple
          value={value}
          onChange={handleJobTitleChange}
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