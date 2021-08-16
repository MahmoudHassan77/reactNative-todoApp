import React from 'react';
import { Dimensions, I18nManager, Text } from 'react-native';
import AppContextProvider from './src/context/AppContext';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import { useFonts } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);


export default function App() {
  let [fontsLoaded] = useFonts({
    'Arabic-myFont': require('./assets/fonts/a-massir-ballpoint.ttf'),
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <AppContextProvider>
        {!fontsLoaded? <AppLoading />:<Home />}
      </AppContextProvider>
    </SafeAreaView>
  );
}

