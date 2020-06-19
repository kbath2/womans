import React from 'react';
import {StyleSheet} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {TextButton} from '../components/TextButton';
import {Error} from '../components/Error';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';

export function LoginScreen({navigation}) {
  const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('julioanderson04@gmail.com');
  const [password, setPassword] = React.useState('abc');
  return (
    <AuthContainer>
      <Heading style={styles.title}>WomanS</Heading>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={styles.input}
        placeholder={'Senha'}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => {
          login();
        }}
      />
      <TextButton
        title={'Não possui uma conta ? Registre-se !'}
        onPress={() => {
          navigation.navigate('Registration');
        }}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2b3b330',
    flex: 1,
    paddingTop: 90,
    alignItems: 'center',
    padding: 20,
  },

  tittle: {
    marginBottom: 48,
    color: 'black',
    fontWeight: 'bold',
  },

  input: {
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButton: {
    marginVertical: 32,
  },
});
