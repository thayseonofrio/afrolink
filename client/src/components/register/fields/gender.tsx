import React from "react";
import { TextField, MenuItem } from "@material-ui/core";

type GenderProps = {
  value: string;
  setGender: Function;
};

const gender = ({ value, setGender }: GenderProps) => {
  const handleGenderSelection = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGender(event.target.value);
  };

  return (
    <TextField
      id="gender"
      select
      name="gender"
      label="Gênero"
      value={value}
      onChange={handleGenderSelection}
      helperText="Selecione seu Gênero"
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
    </TextField>
  );
};

export default gender;
