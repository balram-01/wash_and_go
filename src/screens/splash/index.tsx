import React, {useEffect} from 'react';
import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const bg_image = require('../../assets/images/logo_page.png');

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          navigation.replace('Home');
        } else {
          navigation.replace('SignIn');
        }
      } catch (error) {
        console.error('Error checking AsyncStorage:', error);

        navigation.navigate('SignIn');
      }
    };

    checkLoginStatus();
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <ImageBackground
          source={bg_image}
          style={styles.background}></ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Splash;
