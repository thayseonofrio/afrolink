import React from "react";
import { useForm } from "react-hook-form";
import { ProfileType } from "client/src/types/profile";
import { TextField, Button } from "@material-ui/core";
import Gender from "./fields/gender";
import JobTitle from "./fields/jobTitle";
import Skill from "./fields/skill";
import State from "./fields/state";
import City from "./fields/city";
import apis from "./../../services/profile"
import { makeStyles } from "@material-ui/core/styles";


type SocialLinksType = {
  email: string,
  site: string,
  github: string,
  linkedin: string
}

type RegisterProps = {
  hideRegister: Function
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    "& div": {
      marginBottom: "10px"
    }
  }
});

const register = ({hideRegister}: RegisterProps) => {
  const { register, handleSubmit } = useForm<ProfileType & SocialLinksType>();
  const [gender, setGender] = React.useState("female");
  const [jobTitle, setJobTitle] = React.useState<string[]>([]);
  const [skills, setSkill] = React.useState<string[]>([]);
  const [stateInput, setStateInput] = React.useState("");
  const [cityInput, setCityInput] = React.useState("");
  const [formError, setFormError] = React.useState(false);
  const classes = useStyles();


  const onSubmit = handleSubmit(
    ({
      name,
      experience,
      email,
      site,
      github,
      linkedin,
      country,
    }) => {
      const socialLinks = {
        email,
        site,
        github,
        linkedin
      }

      apis.createProfile({name, experience, city: cityInput, skills, socialLinks, state: stateInput, country, gender, jobTitle})
      .then(() => {
        hideRegister(false)
      })
      .catch(() => {
        setFormError(true)
      })
    }
  );

  const errorMessage = formError ? <span> Ocorreu um erro ao cadastrar o perfil. Tente novamente. </span> : null

  return (
    <div className="register">
      <form className={classes.form} onSubmit={onSubmit}>
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

        <TextField id="countryInput" defaultValue="Brasil" inputRef={register({ required: true })} name="country" label="País" InputProps={{
            readOnly: true,
          }}/>

        <State value={stateInput} setStateInput={setStateInput} inputRef={register({ required: true })}/>

        {stateInput ? <City value={cityInput} setCity={setCityInput} stateValue={stateInput} inputRef={register({ required: true })} /> : null}

        <Button type="submit"> Enviar </Button>

        {errorMessage}
      </form>
    </div>
  );
};

export default register;
