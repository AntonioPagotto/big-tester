import './Form.css';

function Form() {
  return (
    <div className="box-form">
      <div className="container-form">
        <h1>Faça seu cadastro grátis e concorra!</h1>
        <input className="w-100" type="text" name="firstname" placeholder="Nome Completo" />
        <input className="w-100" type="text" name="firstname" placeholder="E-mail" />
        <span className="space-between">
          <input className="w-50" type="text" name="firstname" placeholder="Telefone" />
          <input className="w-50" type="text" name="firstname" placeholder="Data de Nascimento" onfocus="(this.type='date')" />
        </span>
        <div className="container-radios">
          <span className="radio-btn">
            <input type="radio" name="gender" value="male" />
            <label for="male">MASCULINO</label>
          </span>
          <span className="radio-btn">
            <input type="radio" name="gender" value="male" />
            <label for="male">FEMININO</label>
          </span>
        </div>
        <p>
          <input type="checkbox" name="gender" value="male" />
            Ao marcar esta opção você aceita nossa <strong>Politica de Privacidade</strong> e está de acordo com nossos <strong>Termos e Condições</strong>.
        </p>
        <input type="submit" value="QUERO CONCORRER" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et enim risus justo sit volutpat ut quis massa. Pharetra eget dui, aenean at sed semper aliquet ultrices sit. Nisl sed aliquam aliquam augue scelerisque. At ornare vel vel quisque aliquam pellentesque eu.
      </p>
      </div>
    </div>
  );
}

export default Form;
