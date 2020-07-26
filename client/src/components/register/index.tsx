import React from "react";
import { useForm, Controller } from "react-hook-form";
import { ProfileType } from "client/src/types/profile";
import { TextField, Button } from "@material-ui/core";
import Gender from "./fields/gender";
import JobTitle from "./fields/jobTitle";
import Skill from "./fields/skill";
import "./register.css";

// TODO - add validation
// TODO - send to backend
// TODO - redirect to home after submit

const register = () => {
  const { register, handleSubmit } = useForm<ProfileType>();
  const [gender, setGender] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState<string[]>([]);
  const [skill, setSkill] = React.useState<string[]>([]);

  const onSubmit = handleSubmit(
    ({
      name,
      experience,
      // email,
      // site,
      // github,
      // linkedin,
      city,
      state,
      country,
    }) => {
      console.log(name);
      console.log(experience);
      // console.log(email);
      // console.log(site);
      // console.log(github);
      // console.log(linkedin);
      console.log(city);
      console.log(state);
      console.log(country);
      console.log(gender);
      console.log(jobTitle);
    }
  );

  return (
    <div className="register">
      <form onSubmit={onSubmit}>
        <TextField inputRef={register} name="name" label="Nome" />

        <Gender value={gender} setGender={setGender} />

        <JobTitle value={jobTitle} setJobTitle={setJobTitle} />

        <TextField
          inputRef={register}
          name="experience"
          type="number"
          label="Tempo de Experiência (em meses)"
        />

        <Skill value={skill} setSkill={setSkill} />

        <TextField
          inputRef={register}
          name="email"
          type="email"
          label="E-mail"
        />
        <TextField inputRef={register} name="site" label="Site" />
        <TextField inputRef={register} name="github" label="GitHub" />
        <TextField inputRef={register} name="linkedin" label="LinkedIn" />

        <TextField inputRef={register} name="city" label="Cidade" />
        <TextField inputRef={register} name="state" label="Estado" />
        <TextField inputRef={register} name="country" label="País" />

        <Button type="submit"> Enviar </Button>
      </form>
    </div>
  );
};

export default register;
