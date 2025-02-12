import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { AuthContext } from "../navigation/AppNavigator"; // Import AuthContext
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGoogle, faFacebook, faApple } from '@fortawesome/free-brands-svg-icons';
const LoginScreen = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    // Replace with actual authentication logic
    setIsAuthenticated(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subtitle}>Welcome back, you've been missed!</Text>

      <TextInput style={styles.input} placeholder="Enter username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity>
        <Text style={styles.recoveryText}>Recovery Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or continue with</Text>
      </View>

              <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesomeIcon icon={faGoogle} size={30} color="red" /> {/* Customize size and color */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesomeIcon icon={faApple} size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesomeIcon icon={faFacebook} size={30} color="#3b5998" /> {/* Facebook blue */}
          </TouchableOpacity>
        </View>

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerText}>Not a member? <Text style={{fontWeight: 'bold'}}>Register now</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F8F8F8", paddingHorizontal: 20 },
  title: { fontSize: 26, fontWeight: "bold", marginBottom: 5 },
  subtitle: { fontSize: 16, color: "#666", marginBottom: 20 },
  input: { width: "100%", height: 50, backgroundColor: "#FFF", borderRadius: 10, paddingHorizontal: 15, marginBottom: 10, elevation: 2 },
  recoveryText: { color: "#888", alignSelf: "flex-end", marginBottom: 20 },
  signInButton: { width: "100%", height: 50, backgroundColor: "#E63946", justifyContent: "center", alignItems: "center", borderRadius: 10, marginBottom: 20 },
  signInText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
  orContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  orText: { color: '#888' },
  socialButtonsContainer: { flexDirection: 'row', marginBottom: 20 },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    elevation: 2, // For Android shadow
  },
  socialIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  registerButton: {  marginBottom: 20 },
  registerText: { color: '#888' },
});

export default LoginScreen;