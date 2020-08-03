import React, { useEffect, useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { getCitiesByState } from "./../../../services/location"

type CityProps = {
  value: string;
  stateValue: string;
  setCity: Function;
  inputRef: any;
};

type City = {
  id: number;
  nome: string;
}

const city = ({ value, stateValue, setCity, inputRef }: CityProps) => {
  const [cityList, setCityList] = useState<City[]>([])

  useEffect(() => {
    let isMounted = true;
    if (stateValue && isMounted) {
      getCitiesByState(stateValue)
      .then((response) => setCityList(response.data))
      .catch((err) => console.log(err))
    }
    return () => { isMounted = false };
  }, [stateValue])

  const handleCitySelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <TextField
      id="city"
      select
      inputRef={inputRef}
      name="city"
      label="Cidade"
      value={value}
      onChange={handleCitySelection}
    >
      {cityList ? cityList.map((city) => (
        <MenuItem key={city.id} value={city.nome}>
          {city.nome}
        </MenuItem>
      )) : null}
    </TextField>
  );
};

export default city;
