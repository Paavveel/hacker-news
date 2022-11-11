import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';
export const App = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
};
