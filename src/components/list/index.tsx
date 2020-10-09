import React, { useState, useEffect } from "react";
import apis from "../../services/profile";
import Profile from "../profile/index";
import { ProfileType } from "../../types/profile";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GenderFilter from "./genderFilter";
import StateFilter from "./stateFilter";

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

export const getFilteredProfiles = (
  profiles: ProfileType[] = [],
  filteredGender?: string,
  filteredState?: string
) => {
  return Object.entries(profiles)
    ?.filter(([key, profile]) => {
      if (filteredGender && filteredGender !== "default") {
        return profile.gender === filteredGender
      };
      return true;
    })
    .filter(([key, profile]) => {
      if (filteredState && filteredState !== "default") {
        return profile.state === filteredState
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
  const classes = useStyles();

  const isGenderedFiltered = filteredGender && filteredGender !== "default";
  const isStateFiltered = filteredState && filteredState !== "default";

  useEffect(() => {
    apis.getAllProfiles().then((response) => {
      const { data } = response;
      setProfiles(data);
      setUnfilteredProfiles(data);
    });
  }, []);

  useEffect(() => {
    if (isGenderedFiltered || isStateFiltered) {
      const filteredProfiles = getFilteredProfiles(
        unfilteredProfiles,
        filteredGender,
        filteredState
      );
      setProfiles(filteredProfiles);
    } else {
      setProfiles(unfilteredProfiles);
    }
  }, [filteredGender, filteredState]);

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
