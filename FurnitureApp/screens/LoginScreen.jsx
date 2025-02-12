import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Import gradient background
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";
import { AuthContext } from "../context/AuthContext"; // Updated AuthContext import

const LoginScreen = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    // Replace with actual authentication logic
    setIsAuthenticated(true);
  };

  return (
    <ImageBackground source={require('../assets/background.jpg')} style={styles.backgroundImage}> {/* Add your background image */}
      <LinearGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.6)"]} style={styles.gradientContainer}> {/* Adjust gradient as needed */}
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
          <Text style={styles.title}>Welcome Back! 👋</Text>
          <Text style={styles.subtitle}>Sign in to continue your journey.</Text>

          <TextInput style={styles.input} placeholder="Enter username" placeholderTextColor="#aaa" />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#aaa" />

          <TouchableOpacity>
            <Text style={styles.recoveryText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>

          <View style={styles.orContainer}>
            <View style={styles.line} />
            <Text style={styles.orText}>Or continue with</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesomeIcon icon={faGoogle} size={30} color="red" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesomeIcon icon={faApple} size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesomeIcon icon={faFacebook} size={30} color="#3b5998" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerText}>
              New here? <Text style={styles.boldText}>Register Now</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  gradientContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 20,
    opacity: 0.9,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    color: "#FFF",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  recoveryText: {
    color: "#FFF",
    alignSelf: "flex-end",
    marginBottom: 20,
    fontSize: 14,
    textDecorationLine: "underline",
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  signInText: {
    color: "#E63946",
    fontSize: 18,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
    justifyContent: "center",
  },
  orText: {
    color: "#FFF",
    fontSize: 14,
    marginHorizontal: 10,
    opacity: 0.9,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  registerButton: {
    marginBottom: 20,
  },
  registerText: {
    color: "#FFF",
    fontSize: 16,
    opacity: 0.9,
  },
  boldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
