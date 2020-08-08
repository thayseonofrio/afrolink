import React, { useState, useEffect } from "react";
import apis from "../../services/profile";
import Profile from "../profile/index";
import { ProfileType } from "../../types/profile";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  })
);

const list = () => {
  const [profiles, setProfiles] = useState<ProfileType[]>();
  const classes = useStyles();

  useEffect(() => {
    apis.getAllProfiles().then((response) => {
      const { data } = response;
      setProfiles(data);
    });
  }, []);

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
    <div className={classes.root}>
      <Grid container spacing={3}>
        {getProfiles()}
      </Grid>
    </div>
  );
};

export default list;
