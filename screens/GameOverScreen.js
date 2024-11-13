import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../util/colors'

export default function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/success.png')} style={styles.image}/>
      </View>
      <View>
        <Text>Your phone needed X rounds to guess the number Y</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 36,
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
  }
});
