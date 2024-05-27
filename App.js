import React, {useEffect} from 'react'
import Providers from './navigation'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';



const App = () => {
  const [fontsLoaded] = useFonts({
    "Lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Kufam-SemiBoldItalic": require("./assets/fonts/Kufam SemiBold Italic.otf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, [])

  if(!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return <Providers/>;
}

export default App;