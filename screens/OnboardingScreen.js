import { 
    StyleSheet, 
    Text, 
    View,
    Button,
    Image,
    TouchableOpacity,

} from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'black': 'gray';
    return (
        <View
            style={{
                width: 5,
                height: 5,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <Button
        title='Skip'
        color='#000000'
        {...props}
    />
)

const Next = ({...props}) => (
    <Button
        title='Next'
        color='#000000'
        {...props}
    />
)

const Done = ({...props}) => (
    <TouchableOpacity style={{
        marginHorizontal: 8
    }}
        {...props}
    >
        <Text style={{fontSize: 16}}>Done</Text>
    </TouchableOpacity>
)

const OnboardingScreen = ({navigation}) => {
  return (
      <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
        onSkip={() => navigation.navigate("Login")} //replace
        onDone={() => navigation.navigate("Login")}
          pages={[
              {
                  backgroundColor: '#a6e4d0',
                  image: <Image source={require('../assets/images/Onboarding.png')} />,
                  title: 'Onboarding 1',
                  subtitle: 'Done with React Native Onboarding Swiper',
              },
              {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/images/Onboarding.png')} />,
                title: 'Onboarding 2',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
          ]}
      />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})