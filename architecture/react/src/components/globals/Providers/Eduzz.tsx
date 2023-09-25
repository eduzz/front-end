import { PropsWithChildren } from 'react';

import { ThemeProvider } from '@eduzz/ui-antd-theme';

const EduzzProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider enableAnimation brandColor='eduzz'>
      {children}
    </ThemeProvider>
  );
};

export default EduzzProvider;
