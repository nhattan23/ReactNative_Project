import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useState, useEffect } from 'react'
import {
  FormButton,
  FormInput,
  SocialButton,
} from '../components'

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassord, setConfirmPassword] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>

      <FormInput 
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput 
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput 
        labelValue={confirmPassord}
        onChangeText={(password) => setConfirmPassword(password)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton 
        buttonTitle="Sign up"
        onPress={() => alert('Sign in Clicked')}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>By registerting</Text>
        <TouchableOpacity onPress={()=> alert('Terms Clicked')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Terms of service</Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={()=> alert('Privacy Clicked')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <SocialButton 
        buttonTitle="Sign In With Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() =>  {}}
      />

      <SocialButton
        buttonTitle="Sign In With Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => { }}
      />

      <TouchableOpacity 
        style={styles.forgotButton}
        onPress={()=> navigation.navigate('Login')}  
      >
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18, 
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-regular'
  },
  textPrivate:{
    marginHorizontal: 10,
    marginVertical: 15,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  color_textPrivate: {
    color: 'gray'
  }
})