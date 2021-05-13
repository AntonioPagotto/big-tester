import './Form.css';
import InputMask from "react-input-mask";
import { useForm } from 'react-hook-form'

function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="box-form">
      <div className="container-form">
        <h1>Faça seu cadastro grátis e concorra!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="w-100" type="text" placeholder="Nome Completo" id="nome" {...register('nome', { required: true, maxLength: 30 })} />
          {errors.nome && errors.nome.type === "required" && <p className="red-alert">Campo Obrigatório!</p>}
          {errors.nome && errors.nome.type === "maxLength" && <p className="red-alert">Seu nome não pode conter mais de 30 caracteres!</p>}

          <input className="w-100" type="text" placeholder="E-mail" id="email" {...register('email', { required: true, maxLength: 30 })} />
          {errors.email && errors.email.type === "required" && <p className="red-alert">Campo Obrigatório!</p>}
          {errors.email && errors.email.type === "maxLength" && <p className="red-alert">Seu e-mail não pode conter mais de 30 caracteres!</p>}

          <span className="space-between">
            <InputMask mask="(99)99999-9999" className="w-50" type="text" placeholder="Telefone" id="telefone" {...register('telefone', { required: true })} />
            <InputMask mask="99/99/9999" className="w-50" type="text" placeholder="Data de Nascimento" id="datanascimento" {...register('datanascimento', { required: true })} />
          </span>

          <span className="space-between">
            {errors.telefone && errors.telefone.type === "required" && <p className="w-50 red-alert">Telefone Obrigatório!</p>}
            {errors.datanascimento && errors.datanascimento.type === "required" && <p className="w-50 red-alert">Data Obrigatória!</p>}
          </span>

          <div className="container-radios">
            <span className="radio-btn">
              <input type="radio" id="masc" value="masculino" name="sexo" id="sexo" {...register('sexo', { required: true })} />
              <label>MASCULINO</label>
            </span>
            <span className="radio-btn">
              <input type="radio" id="fem" value="feminino" name="sexo" id="sexo" {...register('sexo', { required: true })} />
              <label>FEMININO</label>
            </span>
            {errors.sexo && errors.sexo.type === "required" && <p className="red-alert">Selecione uma opção!</p>}
          </div>
          <p>
            <input type="checkbox" name="checkbox" id="checkbox" {...register('checkbox', { required: true })} />
            Ao marcar esta opção você aceita nossa <strong>Politica de Privacidade</strong> e está de acordo com nossos <strong>Termos e Condições</strong>.
        </p>
          {errors.checkbox && errors.checkbox.type === "required" && <p className="red-alert">Você deve concordar com os termos para continuar!</p>}
          <input type="submit" value="QUERO CONCORRER" />
        </form>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim risus justo sit volutpat ut quis massa. Pharetra eget dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam aliquam augue scelerisque. At ornare vel vel quisque aliquam pellentesque eu.
      </p>
      </div>
    </div>
  );
}

export default Form;
