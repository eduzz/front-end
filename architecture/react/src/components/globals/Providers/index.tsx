import { PropsWithChildren } from 'react';

import { message } from 'antd';

import AntdProvider from './Antd';
import EduzzProvider from './Eduzz';
import ReactQueryProvider from './ReactQuery';

message.config({ maxCount: 3, duration: 7 });

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReactQueryProvider>
      <EduzzProvider>
        <AntdProvider>{children}</AntdProvider>
      </EduzzProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
