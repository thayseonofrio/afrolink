import React, { useEffect, useState } from "react";
import { InputLabel, Select, MenuItem } from "@material-ui/core";
import { getAllStates } from "./../../../services/location";
import sortBy from "lodash/sortBy";

type StateProps = {
  value: string;
  onChange: any;
  onBlur: any;
};

type State = {
  id: number;
  sigla: string;
  nome: string;
};

const state = ({ value, onChange, onBlur }: StateProps) => {
  const [stateList, setStateList] = useState<State[]>([]);

  useEffect(() => {
    getAllStates()
      .then((response) => {
        const state = sortBy(response.data, (state) => state.nome);
        setStateList(state);
      })
      .catch((err) => console.log(err));
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
