import { GlobalStyles as EmotionGlobalStyles, css } from '@/styled';

const GlobalStyles = () => {
  return (
    <EmotionGlobalStyles
      styles={css`
        html {
          -webkit-font-smoothing: antialiased;
        }
      `}
    />
  );
};

export default GlobalStyles;
