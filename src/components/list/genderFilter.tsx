import React from "react";
import {Select, MenuItem} from "@material-ui/core";

type GenderFilterProps = {
    onChange: any
    value: unknown
}
const genderFilter = ({onChange, value}: GenderFilterProps) => {
  return (
    <Select
      labelId="gender-input-label"
      id="gender"
      name="gender"
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
  );
};

export default genderFilter;
