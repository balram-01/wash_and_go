import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';

const SignUp = () => {
    const wash_and_go_logo = require('../../assets/images/wash_go_logo.png');
    const drop_btm_left = require('../../assets/images/drop_btm_left.png');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agree, setAgree] = useState(false);

    const handleSignUp = async () => {
        if (!name || !phone || !password || !agree) {
            Alert.alert("Error", "Please fill all fields and agree to the terms.");
            return;
        }

        try {
            const response = await fetch('https://tor.appdevelopers.mobi/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phone: phone,
                    password: password,
                    name: name,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                // Handle successful sign-up (e.g., navigate to another screen or store token)
                if (result?.message) {
                    Alert.alert("Message", result?.message);
                }
            } else {
                // Handle error response
                Alert.alert("Error", result.message || "An error occurred. Please try again.");
            }
        } catch (error) {
            Alert.alert("Error", "An error occurred. Please try again.");
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <Image source={wash_and_go_logo} style={styles.logo} />

            {/* Header Section */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Sign Up</Text>
                <Text style={styles.subText}>Create a new account to get started</Text>
            </View>

            {/* Input Fields */}
            <View style={styles.inputContainer}>
                {/* Name Input */}
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    mode="outlined"
                    placeholder="John Doe"
                    left={<TextInput.Icon icon="account-outline" color="#808080" />}
                    style={styles.input}
                    outlineColor="#ccc"
                    activeOutlineColor="#8CBDF9"
                    textColor="#000"
                />

                {/* Phone Input */}
                <TextInput
                    label="Phone Number"
                    value={phone}
                    onChangeText={(text) => setPhone(text)}
                    mode="outlined"
                    placeholder="123-456-7890"
                    left={<TextInput.Icon icon="phone-outline" color="#808080" />}
                    style={styles.input}
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    outlineColor="#ccc"
                    activeOutlineColor="#8CBDF9"
                    textColor="#000"
                />

                {/* Password Input */}
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    mode="outlined"
                    placeholder="password"
                    secureTextEntry={!showPassword}
                    left={<TextInput.Icon icon="lock-outline" color="#808080" />}
                    right={
                        <TextInput.Icon
                            icon={showPassword ? "eye-off-outline" : "eye-outline"}
                            onPress={() => setShowPassword(!showPassword)}
                            color="#808080"
                        />
                    }
                    style={styles.input}
                    outlineColor="#ccc"
                    activeOutlineColor="#8CBDF9"
                    textColor="#000"
                />
            </View>

            {/* Agree to Terms */}
            <View style={styles.termsContainer}>
                <Checkbox
                    status={agree ? 'checked' : 'unchecked'}
                    onPress={() => setAgree(!agree)}
                    color="#A3CFFF"
                />
                <Text style={styles.termsText}>I agree to the terms and conditions</Text>
            </View>

            {/* Sign Up Button */}
            <Button
                mode="contained"
                onPress={handleSignUp}
                style={styles.signInButton}
                contentStyle={styles.signInButtonContent}
                textColor='#092A4D'
                labelStyle={{ fontSize: 20, fontWeight: '700' }}
                disabled={!agree}
            >
                Sign Up
            </Button>

            {/* Or Divider with Lines */}
            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>or</Text>
                <View style={styles.line} />
            </View>

            {/* Google and Apple Sign In */}
            <View style={styles.socialContainer}>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/images/apple.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>

            {/* Sign In */}
            <Text style={styles.signUpText}>
                Already have an account? <Text style={styles.signUpLink}>Sign In</Text>
            </Text>
            <Text style={styles.licenceText}>By signing up, you agree to our terms of use and privacy policy</Text>
            
            {/* Bottom Decoration */}
            <Image source={drop_btm_left} style={styles.bottomImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    logo: {
        width: 233,
        height: 170,
        resizeMode: 'contain',
        marginTop: 50,
        alignSelf: 'center'
    },
    headerContainer: {
        alignItems: 'flex-start',
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
        marginBottom: 30,
        textAlign: 'left',
        maxWidth: 160
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        marginBottom: 15,
    },
    termsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    termsText: {
        fontSize: 14,
        color: '#000',
        marginLeft: 10,
    },
    signInButton: {
        backgroundColor: '#A3CFFF',
        width: '100%',
        borderRadius: 30,
        marginTop: 20,
    },
    signInButtonContent: {
        paddingVertical: 8,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'center'
    },
    line: {
        height: 1,
        backgroundColor: '#A3CFFF',
        flex: 1,
        marginHorizontal: 10,
    },
    orText: {
        fontSize: 16,
        color: '#666',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '25%',
        alignSelf: 'center'
    },
    socialIcon: {
        width: 40,
        height: 40,
    },
    signUpText: {
        fontSize: 14,
        color: '#666',
        marginTop: 20,
        textAlign: 'center'
    },
    signUpLink: {
        color: '#000000',
        fontWeight: 'bold',
    },
    bottomImage: {
        width: 200,
        height: 145,
        resizeMode: 'contain',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    licenceText: {
        color: '#808080', 
        textAlign: 'center',
        marginTop: 20
    }
});

export default SignUp;
