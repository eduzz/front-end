import { PropsWithChildren, memo } from 'react';

const PrivateRoute = ({ children }: PropsWithChildren) => {
  const isAuthenticaded = true;

  if (!isAuthenticaded) return null;

  return <>{children}</>;
};

export default memo(PrivateRoute);
