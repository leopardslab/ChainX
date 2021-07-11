import { StyleSheet } from 'react-native';

export const splashScreenStyles = StyleSheet.create({
    container :{
      flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
      },
    loadingSpinner: {
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      height: 10
    },
    loadingText: {
      
      color: '#000000',
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 20
    }
  });