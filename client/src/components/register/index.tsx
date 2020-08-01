import React from "react";
import { useForm } from "react-hook-form";
import { ProfileType } from "client/src/types/profile";
import { TextField, Button } from "@material-ui/core";
import Gender from "./fields/gender";
import JobTitle from "./fields/jobTitle";
import Skill from "./fields/skill";
import "./register.css";
import apis from "./../../services/profile"

// TODO - redirect to home after submit

type SocialLinksType = {
  email: string,
  site: string,
  github: string,
  linkedin: string
}

const register = () => {
  const { register, handleSubmit } = useForm<ProfileType & SocialLinksType>();
  const [gender, setGender] = React.useState("female");
  const [jobTitle, setJobTitle] = React.useState<string[]>([]);
  const [skills, setSkill] = React.useState<string[]>([]);

  const onSubmit = handleSubmit(
    ({
      name,
      experience,
      email,
      site,
      github,
      linkedin,
      city,
      state,
      country,
    }) => {
      const socialLinks = {
        email,
        site,
        github,
        linkedin
      }

      apis.createProfile({name, experience, city, skills, socialLinks, state, country, gender, jobTitle})
      .then((response) => {
        // TODO - show response
        console.log(response)
      })
      .catch((error) => {
        // TODO - show error
        console.log(error)
      })
    }
  );

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <TextField id="nameInput" inputRef={register({ required: true, maxLength: 200 })} name="name" label="Nome" />

        <Gender value={gender} setGender={setGender} inputRef={register({ required: true })}/>

        <JobTitle value={jobTitle} setJobTitle={setJobTitle} />

        <TextField
          id="experienceInput"
          inputRef={register({ required: true })}
          name="experience"
          type="number"
          label="Tempo de Experiência (em meses)"
        />

        <Skill value={skills} setSkill={setSkill} />

        <TextField
          id="emailInput"
          inputRef={register({ pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
          name="email"
          type="email"
          label="E-mail"
        />
        <TextField id="siteInput" inputRef={register} name="site" label="Site" />
        <TextField id="githubInput" inputRef={register} name="github" label="GitHub" />
        <TextField id="linkedinInput" inputRef={register} name="linkedin" label="LinkedIn" />

        <TextField id="cityInput" inputRef={register({ required: true })} name="city" label="Cidade" />
        <TextField id="stateInput" inputRef={register({ required: true })} name="state" label="Estado" />
        <TextField id="countryInput" inputRef={register({ required: true })} name="country" label="País" />

        <Button type="submit"> Enviar </Button>
      </form>
    </div>
  );
};

export default register;
