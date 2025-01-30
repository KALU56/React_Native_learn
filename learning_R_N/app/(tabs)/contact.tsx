import { View, Text, StyleSheet, Pressable, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      <Pressable style={styles.button} onPress={() => Linking.openURL('https://t.me/your_telegram')}>
        <Icon name="telegram" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Telegram</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.linkedin.com/in/your_linkedin')}>
        <Icon name="linkedin" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>LinkedIn</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => Linking.openURL('https://www.facebook.com/your_facebook')}>
        <Icon name="facebook" size={24} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Facebook</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077b5', // Default LinkedIn blue
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    width: 200,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3, // Shadow for Android
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  icon: {
    marginRight: 8,
  },
});
