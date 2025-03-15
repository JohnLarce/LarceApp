import React, {useState} from 'react';
import {TextInput, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { loginStyle } from '../style/MainStyle';

const Homescreen = () => {
  const [fname, setFirstName] = useState('');
  const [lname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setConfirmPassword] = useState('');

  const handleLogin = () => {

    console.log('First Name',fname);
    console.log('Last Name',lname)
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', cpassword);
  };

  return (
    <ImageBackground
      source={require('../assets/sneaks.jpg')}
      style={loginStyle.container}>
      <Text style={loginStyle.formHeader}>REGISTER HERE</Text>

      <TextInput
        style={loginStyle.input}
        placeholder="First Name"
        placeholderTextColor="white"
        value={fname}
          onChangeText={setFirstName}
        />
      <TextInput
        style={loginStyle.input}
        placeholder="Last Name"
        placeholderTextColor="white"
        value={lname}
        onChangeText={setLastName}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Username"
        placeholderTextColor="white"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={loginStyle.input}
        placeholder="Confirm Password"
        placeholderTextColor="white"
        secureTextEntry
        value={cpassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity style={loginStyle.loginButton} onPress={handleLogin}>
        <Text style={loginStyle.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Homescreen;