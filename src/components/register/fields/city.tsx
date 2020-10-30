import React, { useEffect, useState } from "react"
import { InputLabel, Select, MenuItem } from "@material-ui/core"
import { getCitiesByState } from "./../../../services/location"
import sortBy from "lodash/sortBy"

type CityProps = {
  value: string;
  stateValue: string;
  onChange: any;
  onBlur: any;
};

type City = {
  id: number;
  nome: string;
};

const city = ({ value, stateValue, onChange, onBlur }: CityProps) => {
	const [cityList, setCityList] = useState<City[]>([])

	useEffect(() => {
		let isMounted = true
		if (stateValue && isMounted) {
			getCitiesByState(stateValue)
				.then((response) => {
					const cities = sortBy(response.data, (city) => city.nome)
					setCityList(cities)
				})
				.catch((err) => console.log(err))
		}
		return () => {
			isMounted = false
		}
	}, [stateValue])

	return (
		<>
			<InputLabel id="city-input-label">Cidade</InputLabel>
			<Select
				labelId="city-input-label"
				id="city"
				name="city"
				label="Cidade"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			>
				{cityList
					? cityList.map((city) => (
						<MenuItem key={city.id} value={city.nome}>
							{city.nome}
						</MenuItem>
					))
					: null}
			</Select>
		</>
	)
}

export default city
