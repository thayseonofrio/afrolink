import React, { useEffect, useState } from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import sortBy from "lodash/sortBy";

type StateProps = {
  value: string;
  onChange: any;
  onBlur: any;
};

export type State = {
  id: number;
  sigla: string;
  nome: string;
};

const states = require("../../../data/states.json")

const state = ({ value, onChange, onBlur }: StateProps) => {
  const [stateList, setStateList] = useState<State[]>([]);

  useEffect(() => {
    const state = sortBy(states, (state) => state.nome);
    setStateList(state);
  }, []);

  return (
    <>
      <InputLabel id="state-input-label">Estado</InputLabel>
      <Select
        labelId="state-input-label"
        id="state"
        name="state"
        label="Estado"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {stateList.map((state) => (
          <MenuItem key={state.id} value={state.sigla}>
            {state.nome}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default state;
