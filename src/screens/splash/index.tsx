import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Import the background image
const bg_image = require('../../assets/images/logo_page.png'); // Assuming the image is in the correct path

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const userData = await AsyncStorage.getItem('user');
                if (userData) {
                    // If user data is present, navigate to the Home screen
                    navigation.replace('Home');
                } else {
                    // If no user data, navigate to the SignIn screen
                    navigation.replace('SignIn');
                }
            } catch (error) {
                console.error('Error checking AsyncStorage:', error);
                // Navigate to SignIn screen in case of error
                navigation.navigate('SignIn');
            }
        };

        checkLoginStatus();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground source={bg_image} style={styles.background}>
                {/* You can add logo or other elements here */}
                {/* <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.text}>Welcome to MyApp</Text> */}
            </ImageBackground>
        </View>
    );
};

// Styles for the splash screen
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        resizeMode: 'cover', // Makes the image cover the entire screen
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
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
