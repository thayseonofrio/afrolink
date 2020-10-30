import React, { useEffect, useState } from "react"
import {Select, MenuItem} from "@material-ui/core"
import sortBy from "lodash/sortBy"
import { State } from "../register/fields/state"

type StateFilterProps = {
  className: string,
  onChange: any,
  value: unknown
}

const states = require("../../data/states.json")

const stateFilter = ({className, onChange, value}: StateFilterProps) => {

	const [stateList, setStateList] = useState<State[]>([])

	useEffect(() => {
		const state = sortBy(states, (state) => state.nome)
		setStateList(state)
	}, [])

	return (
		<Select
			labelId="state-filter-input-label"
			id="state-filter"
			className={className}
			name="state-filter"
			label="Estado"
			value={value}
			onChange={onChange}
			onBlur={onChange}
		>
			<MenuItem key="estado" value="default">
        Estado
			</MenuItem>
			{stateList.map((state) => (
				<MenuItem key={state.id} value={state.sigla}>
					{state.nome}
				</MenuItem>
			))}
		</Select>
	)
}

export default stateFilter
