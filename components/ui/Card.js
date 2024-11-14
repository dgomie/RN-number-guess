import { StyleSheet, View, Dimensions } from 'react-native';
import Colors from '../../util/colors';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window')

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 6,
        shadowOpacity: 0.4,
        backgroundColor: Colors.primary800,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
