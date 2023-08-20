import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Theme } from '../../components/Theme';

import { FormActions, useForm } from '../../context/FormContext';

import * as C from './styles';

export const FormStep1 = () => {
  const navigate = useNavigate();

  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1
    })
  }, [])

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setName,
      payload: e.target.value
    })
  }

  const handleNextStep = () => {
    if(state.name === '') {
      alert('Preencha os dados')
    } else {
      navigate('/step2');
    }
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>
        <hr />
        <label>
          Seu nome Completo
          <input type="text" autoFocus value={state.name} onChange={handleNameChange} />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
