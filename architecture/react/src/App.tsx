import '@/global.css';

import { BrowserRouter } from 'react-router-dom';

import Providers from '@/components/globals/Providers';
import AppRoutes from '@/pages/routes';

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Providers>
  );
};

export default App;
