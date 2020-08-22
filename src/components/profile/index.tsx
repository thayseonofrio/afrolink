import React from "react";
import Label from "../label/index";
import Social from "../social/index";
import { ProfileType } from "src/types/profile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontFamily: "'Open Sans', sans-serif",
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  info: {
	display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%"
  },
  title: {
	fontWeight: "bold",
    color: "#3b4754"
  },
  skills: {
	width: "100%",
    display: "inline-flex",
    flexWrap: "wrap",
    alignItems: "flex-start",
    paddingTop: "0.5rem"
  },
  line: {
	display: "block",
    height: "1px",
    border: 0,
    borderTop: "1px solid #ccc",
    margin: "1em 0",
    padding: 0,
    width: "100%"
  },
  socialLinks: {
	display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%"
  }
});

const profile = (props: ProfileType) => {
  const {
    name,
    city,
    experience,
    gender,
    jobTitle,
    skills,
    state,
    socialLinks,
  } = props;
  const classes = useStyles();

  const getJobTitles = () => {
    return jobTitle.map((title) => <span key={title}> {title} </span>);
  };
  const getSkills = () => {
    return skills.map((skill) => <Label key={skill} text={skill} />);
  };
  const getSocialLinks = () => {
    if (!socialLinks) {
      return null;
    }
    const types = Object.keys(socialLinks);
    return types.map((type) => {
      const link = socialLinks[type];
      return <Social key={type} type={type} value={link} />;
    });
  };
  return (
    <div className={classes.root}>
      <h2 className={classes.title}> {name} </h2>
      <div className={classes.info}>
        <span>{gender}</span>
        {getJobTitles()}
        <span>{experience} meses </span>
        <span>
          {city}/{state}
        </span>
        <div className={classes.skills}>{getSkills()}</div>
      </div>
      <hr className={classes.line}/>
      <div className={classes.socialLinks}>{getSocialLinks()}</div>
    </div>
  );
};

export default profile;
