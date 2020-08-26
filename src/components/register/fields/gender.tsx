import React from "react";
import { Select, MenuItem, InputLabel } from "@material-ui/core";

type GenderProps = {
  value: string;
  onChange: any;
  onBlur: any;
};

const gender = ({ value, onChange, onBlur }: GenderProps) => {
  return (
    <>
      <InputLabel id="gender-input-label">Selecione seu gênero</InputLabel>
      <Select
        labelId="gender-input-label"
        id="gender"
        name="gender"
        label="Gênero"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        <MenuItem key="female" value="female">
          Feminino
        </MenuItem>
        <MenuItem key="male" value="male">
          Masculino
        </MenuItem>
        <MenuItem key="other" value="other">
          Outro
        </MenuItem>
      </Select>
    </>
  );
};

export default gender;
