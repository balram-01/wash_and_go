import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = () => {
    const drop_top_right = require("./images/drop1.png");
    const drop_top_left = require("./images/drop_small.png");
    const wash_and_go_logo = require('../../assets/images/wash_go_logo.png');
    const logo_sub_text = "Sparkle & Shine Transform Your Drive with Every Wash!";

    return (
        <View style={styles.container}>

            <Image source={drop_top_left} style={styles.dropTopLeft} />


            <Image source={drop_top_right} style={styles.dropTopRight} />


            <Image source={wash_and_go_logo} style={styles.logo} />


            <Text style={styles.logoSubText}>{logo_sub_text}</Text>


            <TouchableOpacity style={styles.letsGoButton}>
                <Text style={styles.buttonText}>Let's Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signUpLink}>
                <Text style={styles.signUpText}>Already have an account?  <Text style={styles.signUpTextBold}>Sign in?</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    dropTopLeft: {
        position: 'absolute',
        top: 0,
        left: -17,
        width: 250,
        height: 250,
        resizeMode: 'contain',
    },
    dropTopRight: {
        position: 'absolute',
        top: 0,
        right: -15,
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    logo: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    logoSubText: {
        fontSize: 24,
        color: 'gray',
        textAlign: 'center',
        marginHorizontal: 30,
        marginBottom: 40,
        width: 300
    },
    letsGoButton: {
        backgroundColor: 'rgba(163, 207, 255, 1)', // Green color
        width: 340,
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'rgba(9, 42, 77, 1)',
        fontSize: 18,
        fontWeight: '700',
    },
    signUpLink: {
        marginTop: 10,
    },
    signUpText: {
        fontSize: 14,
        color: '#000000B2',
    },
    signUpTextBold: {
        fontWeight: 'bold',
        color: '#000',
    },
});

export default Welcome;
