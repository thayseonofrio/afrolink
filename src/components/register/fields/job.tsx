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
import jobs from "./../../../../data/jobs"

type JobsProps = {
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

const job = ({value, onChange, onBlur}: JobsProps) => {
    return(
        <FormControl>
        <InputLabel id="jobs-label">Profissão</InputLabel>
        <Select
          labelId="jobs-label"
          id="jobs"
          name="jobs"
          multiple
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          input={<Input />}
          renderValue={(selected) => (selected as string[]).join(", ")}
          MenuProps={MenuProps}
        >
          {jobs.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={value.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
}

export default job