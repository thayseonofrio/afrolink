import React from "react";
import { TextField, Button } from "@material-ui/core";
import Gender from "./fields/gender";
import Skill from "./fields/skill";
import Job from "./fields/job";
import State from "./fields/state";
import City from "./fields/city";
import apis from "./../../services/profile";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from 'yup';

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

const REQUIRED_FIELD = "Campo obrigatório"

const ProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto')
    .max(200, 'Limite excedido')
    .required(REQUIRED_FIELD),
  gender: Yup.string()
    .required(REQUIRED_FIELD),
  email: Yup.string()
    .email('E-mail inválido')
    .required(REQUIRED_FIELD),
  experience: Yup.number()
    .required(REQUIRED_FIELD),
  skills: Yup.array()
    .required(REQUIRED_FIELD),
  jobs: Yup.array()
    .required(REQUIRED_FIELD),
  site: Yup.string()
    .notRequired(),
    linkedin: Yup.string()
    .notRequired(),
    github: Yup.string()
    .notRequired(),
    country: Yup.string()
    .required(REQUIRED_FIELD),
    state: Yup.string()
    .required(REQUIRED_FIELD),
    city: Yup.string()
    .required(REQUIRED_FIELD),
});

const register = ({ hideRegister }: RegisterProps) => {
  const classes = useStyles();

  const onSubmit = (
      values: any,
    setSubmitting: (value: boolean) => void,
    setFieldError: (field: string, error: string) => void
  ) => {
    setSubmitting(true);
    const {name, gender, experience, skills, jobs, email, site, linkedin, github, country, state, city }  = values
    const socialLinks: SocialLinksType = {
      email,
      site,
      github,
      linkedin,
    };
    apis
      .createProfile({
        name,
        experience,
        city,
        skills,
        socialLinks,
        state,
        country,
        gender,
        jobTitle: jobs,
      })
      .then(() => {
        hideRegister(false);
        setSubmitting(false);

      })
      .catch(() => {
        setFieldError('general', "Ocorreu um erro ao cadastrar o perfil. Tente novamente.")
        setSubmitting(false);
      });
  };

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
          jobs: [],
          skills: [],
          city: "",
          state: "",
          general: ""
        }}
        validationSchema={ProfileSchema}
        onSubmit={(values, { setSubmitting,  setFieldError}) => {
          onSubmit(values, setSubmitting, setFieldError);
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

            {errors.name && touched.name && errors.name}

            <Gender
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.gender}
            />
            {errors.gender && touched.gender && errors.gender}

            <TextField
              id="experienceInput"
              name="experience"
              type="number"
              label="Tempo de Experiência (em meses)"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.experience}
            />
            {errors.experience && touched.experience && errors.experience}

            <Skill
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.skills}
            />

            {errors.skills && touched.skills && errors.skills}

            <Job
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.jobs}
            />

            {errors.jobs && touched.jobs && errors.jobs}

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

            {errors.site && touched.site && errors.site}

            <TextField
              id="githubInput"
              name="github"
              label="GitHub"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.github}
            />

            {errors.github && touched.github && errors.github}

            <TextField
              id="linkedinInput"
              name="linkedin"
              label="LinkedIn"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.linkedin}
            />

            {errors.linkedin && touched.linkedin && errors.linkedin}

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
            {errors.country && touched.country && errors.country}

            <State
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
            />

            {errors.state && touched.state && errors.state}

            {values.state ? (
              <>
              <City
                onChange={handleChange}
                onBlur={handleBlur}
                stateValue={values.state}
                value={values.city}
              />
              {errors.city && touched.city && errors.city}
              </>
            ) : null}

            <Button type="submit" disabled={isSubmitting}>
              Enviar
            </Button>

            {errors.general}
          </form>
        )}
      </Formik>
      <form></form>
    </div>
  );
};

export default register;
