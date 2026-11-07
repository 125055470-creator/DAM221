import { StyleSheet, Text, View } from 'react-native';
import Registro_Libros from './screens/Registro_Libros';

export default function App() {
  return (
      <View style={styles.container}>
        <Registro_Libros/>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
