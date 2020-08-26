import React from "react";
import { ProfileType } from "src/types/profile";
import { TextField, Button } from "@material-ui/core";
import Gender from "./fields/gender";
import JobTitle from "./fields/jobTitle";
import Skill from "./fields/skill";
import State from "./fields/state";
import City from "./fields/city";
import apis from "./../../services/profile";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";

type SocialLinksType = {
  email: string;
  site: string;
  github: string;
  linkedin: string;
};

type RegisterProps = {
  hideRegister: Function;
};

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    "& div": {
      marginBottom: "10px",
    },
  },
});

const register = ({ hideRegister }: RegisterProps) => {
  const classes = useStyles();

  const onSubmit: any = (
    props: any,
    setSubmitting: (value: boolean) => void
    //   {
    //   name,
    //   experience,
    //   email,
    //   site,
    //   github,
    //   linkedin,
    //   country,
    // }
  ) => {
    setSubmitting(true);

    // const socialLinks = {
    //   email,
    //   site,
    //   github,
    //   linkedin,
    // };
    console.log(props);
    // apis
    //   .createProfile({
    //     name,
    //     experience,
    //     city: cityInput,
    //     skills,
    //     socialLinks,
    //     state: stateInput,
    //     country,
    //     gender,
    //     jobTitle,
    //   })
    //   .then(() => {
    //     hideRegister(false);
    //     setSubmitting(false);

    //   })
    //   .catch(() => {
    //     setFormError(true);
    //     setSubmitting(false);

    //   });
  };

  // const errorMessage = formError ? (
  //   <span> Ocorreu um erro ao cadastrar o perfil. Tente novamente. </span>
  // ) : null;

  return (
    <div className="register">
      <Formik
        initialValues={{
          name: "",
          email: "",
          gender: "",
          experience: 0,
          site: "",
          github: "",
          linkedin: "",
          country: "Brasil",
          jobTitle: [],
          skills: [],
          city: "",
          state: ""
        }}
        validate={(values) => {
          const errors: any = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values, setSubmitting);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              id="nameInput"
              name="name"
              label="Nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <Gender
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
            />

            <JobTitle
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jobTitle}
            />

            <TextField
              id="experienceInput"
              name="experience"
              type="number"
              label="Tempo de Experiência (em meses)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.experience}
            />

            <Skill
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skills}
            />

            <TextField
              id="emailInput"
              name="email"
              type="email"
              label="E-mail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <TextField
              id="siteInput"
              name="site"
              label="Site"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.site}
            />
            <TextField
              id="githubInput"
              name="github"
              label="GitHub"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.github}
            />
            <TextField
              id="linkedinInput"
              name="linkedin"
              label="LinkedIn"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.linkedin}
            />

            <TextField
              id="countryInput"
              name="country"
              label="País"
              InputProps={{
                readOnly: true,
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.country}
            />

            <State
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
            />

            {values.state ? (
              <City
                onChange={handleChange}
                onBlur={handleBlur}
                stateValue={values.state}
                value={values.city}
              />
            ) : null}

            <Button type="submit" disabled={isSubmitting}>
              Enviar
            </Button>

          </form>
        )}
      </Formik>
      <form></form>
    </div>
  );
};

export default register;
