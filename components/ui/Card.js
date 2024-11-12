import { StyleSheet, View } from 'react-native';
import Colors from '../../util/colors';

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
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
