import React, { useState, useEffect } from "react"
import apis from "../../services/profile"
import Profile from "../profile/index"
import { ProfileType } from "../../types/profile"
import { Grid, Paper } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"
import GenderFilter from "./genderFilter"
import StateFilter from "./stateFilter"
import SkillsFilter from "./skillsFilter"
import ExperienceFilter from "./experienceFilter"
import {ExperienceFilter as ExperienceFilterOption} from "./types"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			textAlign: "center",
			color: theme.palette.text.secondary,
		},
		filters: {
			display: "flex",
			width: "100%",
			padding: "0.5em",
			marginBottom: "3em",
			justifyContent: "center",
		},
		filtersInput: {
			margin: "0 1em"
		}
	})
)

const INITIAL_SKILLS_VALUE = "Habilidades"

const isSkillsFiltered = (filteredSkills: string[]) => filteredSkills && filteredSkills.length > 0 && filteredSkills[0] !== INITIAL_SKILLS_VALUE

const isStateFiltered = (filteredState: string) => filteredState && filteredState !== "default"

const isGenderedFiltered = (filteredGender: string) => filteredGender && filteredGender !== "default"

const isExperienceFiltered = (filteredExperience: string) => filteredExperience && filteredExperience !== "default"

const isExperienceInFilter = (profileExperience: number, filter: string) => {
	switch(filter) {
	case ExperienceFilterOption.LessThanOne:
		return profileExperience < 12
	case ExperienceFilterOption.OneToTwo:
		return profileExperience >= 12 && profileExperience < 24
	case ExperienceFilterOption.TwoToFour:
		return profileExperience >= 24 && profileExperience < 48
	case ExperienceFilterOption.MoreThanFive:
		return profileExperience >= 60 && profileExperience < 120
	case ExperienceFilterOption.MoreThanTen:
		return profileExperience >= 120
	default:
		return true
	}
}

export const getFilteredProfiles = (
	profiles: ProfileType[] = [],
	filteredGender?: string,
	filteredState?: string,
	filteredSkills?: string[],
	filteredExperience?: string,
) => {
	return Object.entries(profiles)
		?.filter(([, profile]) => {
			if (filteredGender && isGenderedFiltered(filteredGender)) {
				return profile.gender === filteredGender
			}
			return true
		})
		.filter(([, profile]) => {
			if (filteredState && isStateFiltered(filteredState)) {
				return profile.state === filteredState
			}
			return true
		})
		.filter(([, profile]) => {
			if (filteredSkills && isSkillsFiltered(filteredSkills)) {
				return filteredSkills.every(skill => profile.skills.includes(skill))
			}
			return true
		})
		.filter(([, profile]) => {
			if (filteredExperience && isExperienceFiltered(filteredExperience)) {
				return isExperienceInFilter(profile.experience, filteredExperience)
			}
			return true
		})
		.map(([, value]) => value)
}

const list = () => {
	const [profiles, setProfiles] = useState<ProfileType[]>()
	const [unfilteredProfiles, setUnfilteredProfiles] = useState<ProfileType[]>()
	const [filteredGender, setFilteredGender] = useState<string>("default")
	const [filteredState, setFilteredState] = useState<string>("default")
	const [filteredSkills, setFilteredSkills] = useState<string[]>([INITIAL_SKILLS_VALUE])
	const [filteredExperience, setFilteredExperience] = useState<string>("default")

	const classes = useStyles()

	useEffect(() => {
		apis.getAllProfiles().then((response) => {
			const { data } = response
			setProfiles(data)
			setUnfilteredProfiles(data)
		})
	}, [])

	useEffect(() => {
		if (isGenderedFiltered(filteredGender) || isStateFiltered(filteredState) || isSkillsFiltered(filteredSkills) ||  isExperienceFiltered(filteredExperience)) {
			const filteredProfiles = getFilteredProfiles(
				unfilteredProfiles,
				filteredGender,
				filteredState,
				filteredSkills,
				filteredExperience
			)
			setProfiles(filteredProfiles)
		} else {
			setProfiles(unfilteredProfiles)
		}
	}, [filteredGender, filteredState, filteredSkills, filteredExperience])

	const handleFilteredGender = (
		event: React.ChangeEvent<{ name?: string; value: string }>
	) => {
		const value: string = event.target.value
		setFilteredGender(value)
	}

	const handleFilteredState = (
		event: React.ChangeEvent<{ name?: string; value: string }>
	) => {
		const value = event.target.value
		setFilteredState(value)
	}

	const handleFilteredSkills = (
		event: React.ChangeEvent<{ name?: string; value: string[] }>
	) => {
		const value = event.target.value

		const isSkillSelected = value.length !== 0

		let updatedValue = []

		if (value.length > 1) {
			updatedValue = value.filter(element => element !== INITIAL_SKILLS_VALUE)
		} else if (!isSkillSelected) {
			updatedValue = [INITIAL_SKILLS_VALUE]
		} else {
			updatedValue = value
		}
		setFilteredSkills(updatedValue)
	}

	const handleFilteredExperience = (
		event: React.ChangeEvent<{ name?: string; value: string }>
	) => {
		const value = event.target.value
		setFilteredExperience(value)
	}


	const getProfiles = () => {
		if (profiles) {
			return Object.entries(profiles).map(([key, value]) => {
				return (
					<Grid key={key} item xs={12} sm={6}>
						<Paper className={classes.paper}>
							<Profile key={key} {...value} />
						</Paper>
					</Grid>
				)
			})
		}
		return null
	}
	return (
		<>
			<div className={classes.filters}>
				<GenderFilter className={classes.filtersInput} onChange={handleFilteredGender} value={filteredGender} />
				<StateFilter className={classes.filtersInput} onChange={handleFilteredState} value={filteredState} />
				<SkillsFilter className={classes.filtersInput} onChange={handleFilteredSkills} value={filteredSkills} />
				<ExperienceFilter className={classes.filtersInput} onChange={handleFilteredExperience} value={filteredExperience}></ExperienceFilter>
			</div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					{getProfiles()}
				</Grid>
			</div>
		</>
	)
}

export default list

