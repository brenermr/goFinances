// Native Components
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

// My Fonts
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins'

// My Components and Themes
import theme from './src/global/styles/theme'
import { Dashboard } from './src/screens/Dashboard/';


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })
  if(!fontsLoaded){
    return(
      <AppLoading/>
    )
  }else{

    return(
      <ThemeProvider theme={theme}>
         <Dashboard/>
      </ThemeProvider>
      ) 
  }
}


