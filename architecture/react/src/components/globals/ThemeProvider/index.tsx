import 'antd/dist/reset.css';

import { PropsWithChildren } from 'react';

import { ConfigProvider } from 'antd';

import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import GlobalStyles from '@/GlobalStyles';

export default function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider>
      <EmotionThemeProvider theme={{}}>
        <GlobalStyles />
        {children}
      </EmotionThemeProvider>
    </ConfigProvider>
  );
}
