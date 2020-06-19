import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

export function Input({style, ...props}) {
  return <TextInput {...props} style={[styles.input, style]} />;
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ffdada',
    width: '100%',
    padding: 2,
    color: 'black',
    fontFamily: 'Open Sans',
    borderRadius: 8,
  },
});
