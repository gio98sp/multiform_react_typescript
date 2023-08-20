import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';

import { FormActions, useForm } from '../../context/FormContext';

import * as C from './styles';
import { Link } from 'react-router-dom';

export const FormStep3 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
    if (state.name === '') navigate('/');
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (state.email === '' || state.github === '') {
      alert('Preencha os dados');
    } else {
      console.log(state);
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os seus contatos.</p>
        <hr />

        <label>
          Qual o seu Email?
          <input type="email" autoFocus value={state.email} onChange={handleEmailChange} />
        </label>

        <label>
          Qual o seu GitHub?
          <input type="url" value={state.github} onChange={handleGithubChange} />
        </label>

        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};
