import { FormProvider } from './context/FormContext';
import { AppRouter } from './router';

export const App = () => {
  return (
    <FormProvider>
      <AppRouter />
    </FormProvider>
  );
};
