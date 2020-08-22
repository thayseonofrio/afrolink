import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { getAllStates } from "./../../../services/location"
import sortBy from "lodash/sortBy"

type StateProps = {
  value: string;
  setStateInput: Function;
  inputRef: any;
};

type State = {
  id: number;
  sigla: string;
  nome: string;
}

const state = ({ value, setStateInput, inputRef }: StateProps) => {
  const [stateList, setStateList] = useState<State[]>([])

  useEffect(() => {
    getAllStates()
    .then((response) => {
      const state = sortBy(response.data, state => state.nome)
      setStateList(state)
    }
    )
    .catch((err) => console.log(err))
  }, [])

  const handleStateSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateInput(event.target.value);
  };

  return (
    <TextField
      id="state"
      select
      inputRef={inputRef}
      name="state"
      label="Estado"
      value={value}
      onChange={handleStateSelection}
    >
      {stateList.map((state) => (
        <MenuItem key={state.id} value={state.sigla}>
          {state.nome}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default state;
