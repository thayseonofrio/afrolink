import React from "react";
import { useForm } from "react-hook-form";
import { ProfileType } from "client/src/types/profile";

const register = () => {
  const { register, setValue, handleSubmit, errors } = useForm<ProfileType>();
  const onSubmit = handleSubmit((props) => {
    console.log(props);
  });

  return (
    <form onSubmit={onSubmit}>
      <label>Nome</label>
      <input name="name" ref={register} />

      <label>Gênero</label>
      <select name="gender" ref={register}>
        <option value="female">Feminino</option>
        <option value="male">Masculino</option>
        <option value="other">Outro</option>
      </select>

      {/* TODO: transform in multiple inputs */}
      <label>Profissão</label>
      <input name="jobTitle" ref={register} />

      <label>Tempo de experiência</label>
      <input name="experience" type="number" ref={register} />

      {/* TODO: data comes from DB */}
      <label>Habilidades</label>
      <select name="skills" id="skills" multiple>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="java">Java</option>
      </select>

      <label>E-mail</label>
      <input name="email" type="email" ref={register} />

      <label>Site</label>
      <input name="site" ref={register} />

      <label>Github</label>
      <input name="github" ref={register} />

      <label>Linkedin</label>
      <input name="linkedin" ref={register} />

      <label>Cidade</label>
      <input name="city" ref={register} />

      <label>Estado</label>
      <input name="state" ref={register} />

      <label>País</label>
      <input name="country" ref={register} />

      <input type="submit" />
    </form>
  );
};

export default register;
