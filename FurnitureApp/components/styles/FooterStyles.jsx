// components/styles/FooterStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  iconButton: {
    padding: 10,
  },
  favoriteButtonFooter: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 5,
  },
});