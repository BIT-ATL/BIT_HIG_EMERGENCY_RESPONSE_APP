import { Image, StyleSheet, Platform } from 'react-native';
export const styles = StyleSheet.create({
  input: 
  {
    height: 100,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    fontSize:50,
    fontWeight:'400'
  }, 
  inputDescription: {
    height: 100,
    margin: 0,
    borderWidth: 1,
    padding: 10,
    fontSize:24
  }, 
  switchText: 
  {
    fontSize: 20,
    fontFamily:'Arial',
    fontWeight:'400'
  },
  text: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily:'Arial',
    textAlign: 'center',
  },
  switch: 
  {
    // transform: 'translateX(64px)',
  },
  pressable: {
    height: 50,
    margin: 0,
    padding: 10,
    backgroundColor: '#101010',
    alignItems:'center',
    justifyContent: 'center',
  }
});