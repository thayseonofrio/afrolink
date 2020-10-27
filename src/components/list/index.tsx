import React, { useState, useEffect } from "react";
import apis from "../../services/profile";
import Profile from "../profile/index";
import { ProfileType } from "../../types/profile";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GenderFilter from "./genderFilter";
import StateFilter from "./stateFilter";
import SkillsFilter from "./skillsFilter";

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
);

const INITIAL_SKILLS_VALUE = "Habilidades";

const isSkillsFiltered = (filteredSkills: string[]) => filteredSkills && filteredSkills.length > 0 && filteredSkills[0] !== INITIAL_SKILLS_VALUE

const isStateFiltered = (filteredState: string) => filteredState && filteredState !== "default"

const isGenderedFiltered = (filteredGender: string) => filteredGender && filteredGender !== "default"


export const getFilteredProfiles = (
  profiles: ProfileType[] = [],
  filteredGender?: string,
  filteredState?: string,
  filteredSkills?: string[]
) => {
  return Object.entries(profiles)
    ?.filter(([key, profile]) => {
      if (filteredGender && isGenderedFiltered(filteredGender)) {
        return profile.gender === filteredGender
      };
      return true;
    })
    .filter(([key, profile]) => {
      if (filteredState && isStateFiltered(filteredState)) {
        return profile.state === filteredState
      };
      return true;
    })
    .filter(([key, profile]) => {
      if (filteredSkills && isSkillsFiltered(filteredSkills)) {
        return filteredSkills.every(skill => profile.skills.includes(skill))
      };
      return true;
    })
    .map(([key, value]) => value);
};

const list = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>();
  const [unfilteredProfiles, setUnfilteredProfiles] = useState<ProfileType[]>();
  const [filteredGender, setFilteredGender] = useState<string>("default");
  const [filteredState, setFilteredState] = useState<string>("default");
  const [filteredSkills, setFilteredSkills] = useState<string[]>([INITIAL_SKILLS_VALUE]);
  const classes = useStyles();

  useEffect(() => {
    apis.getAllProfiles().then((response) => {
      const { data } = response;
      setProfiles(data);
      setUnfilteredProfiles(data);
    });
  }, []);

  useEffect(() => {
    if (isGenderedFiltered(filteredGender) || isStateFiltered(filteredState) || isSkillsFiltered(filteredSkills)) {
      const filteredProfiles = getFilteredProfiles(
        unfilteredProfiles,
        filteredGender,
        filteredState,
        filteredSkills
      );
      setProfiles(filteredProfiles);
    } else {
      setProfiles(unfilteredProfiles);
    }
  }, [filteredGender, filteredState, filteredSkills]);

  const handleFilteredGender = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setFilteredGender(value);
  };

  const handleFilteredState = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setFilteredState(value);
  };

  const handleFilteredSkills = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string[];
    const isSkillSelected = value.length !== 0

    let updatedValue = []

    if (value.length > 1) {
      updatedValue = value.filter(element => element !== INITIAL_SKILLS_VALUE)
    } else if (!isSkillSelected) {
      updatedValue = [INITIAL_SKILLS_VALUE]
    } else {
      updatedValue = value
    }
    setFilteredSkills(updatedValue);
  };

  const getProfiles = () => {
    if (profiles) {
      return Object.entries(profiles).map(([key, value]) => {
        return (
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Profile key={key} {...value} />
            </Paper>
          </Grid>
        );
      });
    }
    return null;
  };
  return (
    <>
      <div className={classes.filters}>
        <GenderFilter className={classes.filtersInput} onChange={handleFilteredGender} value={filteredGender} />
        <StateFilter className={classes.filtersInput} onChange={handleFilteredState} value={filteredState} />
        <SkillsFilter className={classes.filtersInput} onChange={handleFilteredSkills} value={filteredSkills} />
      </div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {getProfiles()}
        </Grid>
      </div>
    </>
  );
};

export default list;

