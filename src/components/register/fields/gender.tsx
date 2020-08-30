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
    </>
  );
};

export default gender;
