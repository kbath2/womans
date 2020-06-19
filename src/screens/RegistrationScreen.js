import React from 'react';
import {StyleSheet} from 'react-native';

import {Heading} from '../components/Heading';
import {Input} from '../components/Input';
import {FilledButton} from '../components/FilledButton';
import {Error} from '../components/Error';
import {IconButton} from '../components/IconButton';
import {AuthContainer} from '../components/AuthContainer';
import {AuthContext} from '../contexts/AuthContext';

export function RegistrationScreen({navigation}) {
  const {register} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  return (
    <AuthContainer>
      <IconButton
        style={styles.closeIcon}
        name={'close-circle-outline'}
        onPress={() => {
          navigation.pop();
        }}
      />
      <Heading style={styles.title}>Cadastro pessoal</Heading>
      <Error error={''} />
      <Input
        style={styles.input}
        placeholder={'Nome'}
        keyboardType={'default'}
      />
      <Input
        style={styles.input}
        placeholder={'Endereço completo'}
        keyboardType={'default'}
      />
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
        title={'Enviar'}
        style={styles.loginButton}
        onPress={() => {
          register(email, password);
        }}
      />
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecd7df',
    flex: 1,
    paddingTop: 90,
    alignItems: 'center',
    padding: 20,
  },

  tittle: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'Open Sans',
  },

  input: {
    marginVertical: 10,
    fontWeight: 'bold',
    padding: 3,
  },

  loginButton: {
    marginVertical: 32,
  },

  closeIcon: {
    position: 'absolute',
    top: 60,
    right: 16,
  },
});
