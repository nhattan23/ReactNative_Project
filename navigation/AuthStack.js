import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
    LoginScreen,
    OnboardingScreen,
    SignupScreen,
  } from "../screens/index"


const Stack = createStackNavigator();

const AuthStack = () => {
    const [isFirstLaunch, setIsFirstLaunch] = useState(null);
    let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if(value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if( isFirstLaunch === null ) {
    return null
  } else if( isFirstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = 'Login'
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen 
            name='Onboarding'
            component={OnboardingScreen}
            options={{header: () => null}}
        />
        <Stack.Screen 
            name='Login'
            component={LoginScreen}
            options={{header: () => null}}
        />
        <Stack.Screen 
            name='Signup'
            component={SignupScreen}
            options={({navigation}) => ({
              title: '',
              headerStyle: {
                backgroundColor: '#f9fafd',
                shadowColor: '#f9fafd',
                elevation: 0,
              },
              headerLeft: () => (
                <View style={{marginLeft: 10}}>
                  <FontAwesome.Button 
                    name='long-arrow-left'
                    size={25}
                    backgroundColor='#f9fafd'
                    color='#333'
                    onPress={() => navigation.navigate('Login')}
                  />
                </View>
              ),
            })}
        />
    </Stack.Navigator>
  )
};

export default AuthStack;

