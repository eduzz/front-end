import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from '@/components/globals/Layout';
import PrivateRoute from '@/components/globals/PrivateRoute';

import HelloWorld from './HelloWorld';

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route path='/not-found' element={<>Página não encontrada</>} />

      {/* private routes */}
      <Route
        path='/'
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route path='/' element={<HelloWorld />} />
      </Route>

      {/* redirect */}
      <Route path='*' element={<Navigate to='/not-found' replace />} />
    </Routes>
  );
};

export default AppRoutes;
