import React, { useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AuthContext } from "../navigation/AppNavigator"; // Import AuthContext

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
});

export default LoginScreen;
