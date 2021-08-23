import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {colors} from './src/consts/colors';
import defaultTheme from './src/consts/defaultTheme';
import MainContextProvider from './src/contexts/MainContext';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.mainBlack} />
      <MainContextProvider>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
        </ThemeProvider>
      </MainContextProvider>
    </>
  );
};

export default App;
