import React from 'react';
import Root from "./src/index";
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

export default function App() {
  const [loaded] = useFonts({
    'Urbanist-Regular': require('./assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-Bold': require('./assets/fonts/Urbanist-Bold.ttf'),
    'Urbanist-BoldItalic': require('./assets/fonts/Urbanist-BoldItalic.ttf'),
    'Urbanist-Italic': require('./assets/fonts/Urbanist-Italic.ttf'),
    'Urbanist-Ligth': require('./assets/fonts/Urbanist-Light.ttf'),
    'Urbanist-LightItalic': require('./assets/fonts/Urbanist-LightItalic.ttf'),
    'Urbanist-Thin': require('./assets/fonts/Urbanist-Thin.ttf'),
    'Urbanist-ThinItalic': require('./assets/fonts/Urbanist-ThinItalic.ttf'),
  })

  if(!loaded) {
    return <ActivityIndicator />; 
  }

  return (
    <Provider store={store}>
      <Root />
    </Provider>  
  );
}