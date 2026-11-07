import { useState, useEffect } from 'react';
import {
  View, Text, TextInput, Alert, FlatList, ActivityIndicator,
  KeyboardAvoidingView, Image, Pressable, ImageBackground,
  SafeAreaView, StyleSheet,
} from 'react-native';

export default function Registro_Libros() {
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);
  const [cargando, setCargando] = useState(false);

  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');

  const [libros, setLibros] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMostrarBienvenida(false);
    }, 2000);
  }, []);

  function agregarLibro() {
    if (titulo.trim() === '' || autor.trim() === '' || genero.trim() === '') {
      Alert.alert('Campos incompletos', 'Todos los campos son obligatorios.');
      return;
    }

    setCargando(true);

    setTimeout(() => {
      const nuevoLibro = {
        id: libros.length.toString(),
        titulo: titulo,
        autor: autor,
        genero: genero,
      };
      setLibros([...libros, nuevoLibro]);

      setTitulo('');
      setAutor('');
      setGenero('');

      setCargando(false);
      Alert.alert('Éxito', 'Libro guardado correctamente.');
    }, 4000);
  }

  if (mostrarBienvenida) {
    return (
      <View style={styles.bienvenida}>
        <Image style={styles.imagen} source={require('../assets/librito.png')} />
        <Text style={styles.titulo}>repa2</Text>
      </View>
    );
  }

  return (
    <ImageBackground source={require('../assets/fondito.jpeg')} style={styles.fondo}>
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <Text style={styles.tituloPrincipal}>Catálogo de Libros</Text>

          <TextInput
            style={styles.texttInput}
            placeholder="Título del libro"
            value={titulo}
            onChangeText={setTitulo}
          />
          <TextInput
            style={styles.texttInput}
            placeholder="Autor"
            value={autor}
            onChangeText={setAutor}
          />
          <TextInput
            style={styles.texttInput}
            placeholder="Género"
            value={genero}
            onChangeText={setGenero}
          />

          <Pressable onPress={agregarLibro} disabled={cargando} style={styles.boton}>
            <Text style={styles.textoBoton}>Agregar Libro</Text>
          </Pressable>

          {cargando && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.textoLoading}>Guardando libro...</Text>
            </View>
          )}

          <Text style={styles.total}>Total de libros: {libros.length}</Text>

          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            style={styles.lista}
            renderItem={({ item }) => (
              <View style={styles.tarjeta}>
                <Text style={styles.tarjetaTitulo}>{item.titulo}</Text>
                <Text>Autor: {item.autor}</Text>
                <Text>Género: {item.genero}</Text>
              </View>
            )}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bienvenida: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 150,
    height: 150,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
  },
  fondo: {
    flex: 1,
    width: '100%',
  },
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
  },
  texttInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    width: '90%',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#1565c0',
    padding: 12,
    borderRadius: 6,
    width: '90%',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    alignItems: 'center',
    marginTop: 10,
  },
  textoLoading: {
    color: '#fff',
    marginTop: 4,
  },
  total: {
    color: '#fff',
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },
  lista: {
    width: '90%',
  },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  tarjetaTitulo: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});