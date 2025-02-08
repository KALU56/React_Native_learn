import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 20,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    padding: 10,
  },
  detailImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginTop: 60,
  },
  colorSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  colorOption: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  price: {
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#888',
  },
  description: {
    fontSize: 16,
    marginTop: 20,
    color: '#555',
    lineHeight: 24,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  quantityButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  buyButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  buyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
