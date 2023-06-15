import { BrowserRouter } from 'react-router-dom';

import ThemeProvider from '@/components/globals/ThemeProvider';
import AppRoutes from '@/pages/routes';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
