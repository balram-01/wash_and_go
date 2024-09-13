import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const wash_and_go_logo = require('../../assets/images/wash_go_logo.png');
  const drop_btm_left = require('../../assets/images/drop_btm_left.png');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          setUserName(userData.name || 'User');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      navigation.replace('SignIn');
    } catch (error) {
      Alert.alert('Error', 'Failed to log out. Please try again.');
      console.error('Logout error:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <Image source={wash_and_go_logo} style={styles.logo} />

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome, {userName}!</Text>
          <Text style={styles.subText}>We’re glad to have you back</Text>
        </View>

        <Button
          mode="contained"
          onPress={handleLogout}
          style={styles.logoutButton}
          contentStyle={styles.logoutButtonContent}
          textColor="#092A4D"
          labelStyle={{fontSize: 20, fontWeight: '700'}}>
          Logout
        </Button>

        <Image source={drop_btm_left} style={styles.bottomImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 233,
    height: 170,
    resizeMode: 'contain',
    marginTop: 50,
    alignSelf: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
  },
  subText: {
    fontSize: 16,
    color: '#808080',
    marginTop: 10,
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#A3CFFF',
    width: '100%',
    borderRadius: 30,
    marginTop: 20,
  },
  logoutButtonContent: {
    paddingVertical: 8,
  },
  bottomImage: {
    width: 200,
    height: 145,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default Home;
