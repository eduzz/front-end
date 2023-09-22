import { PropsWithChildren } from 'react';

import { ConfigProvider, message } from 'antd';

import antdTheme from '@/assets/themes/antd';

message.config({ maxCount: 3, duration: 7 });

const AntdProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
};

export default AntdProvider;
