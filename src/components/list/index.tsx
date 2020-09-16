import React, { useState, useEffect } from "react";
import apis from "../../services/profile";
import Profile from "../profile/index";
import { ProfileType } from "../../types/profile";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GenderFilter from "./genderFilter";

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
  })
);

export const getFilteredProfilesByGender = (
  profiles: ProfileType[] = [],
  filteredGender: string = ""
) => {
  const filteredProfiles = Object.entries(profiles)?.filter(
    ([key, profile]) => profile.gender === filteredGender
  );
  return filteredProfiles.map(([key, value]) => value);
};

const list = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>();
  const [unfilteredProfiles, setUnfilteredProfiles] = useState<ProfileType[]>();
  const [filteredGender, setFilteredGender] = useState<string>("default");
  const classes = useStyles();

  useEffect(() => {
    apis.getAllProfiles().then((response) => {
      const { data } = response;
      setProfiles(data);
      setUnfilteredProfiles(data);
    });
  }, []);

  useEffect(() => {
    if (filteredGender && filteredGender !== "default") {
      const filteredProfiles = getFilteredProfilesByGender(
        unfilteredProfiles,
        filteredGender
      );
      setProfiles(filteredProfiles);
    } else {
      setProfiles(unfilteredProfiles);
    }
  }, [filteredGender]);

  const handleFilteredGender = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const value = event.target.value as string;
    setFilteredGender(value);
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
        <GenderFilter onChange={handleFilteredGender} value={filteredGender} />
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
