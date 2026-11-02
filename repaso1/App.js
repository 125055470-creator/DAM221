import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Switch, Button, Alert, ScrollView } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [carrera, setCarrera] = useState('');
  const [semestre, setSemestre] = useState('');
  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  function mostrarAlerta(titulo, mensaje) {
      Alert.alert(titulo, mensaje);
  }

  function enviarRegistro() {
    if (nombre === '' || carrera === '' || semestre === '') {
      mostrarAlerta('Campos incompletos', 'Debes llenar todos los campos.');
      return;
    }

    if (semestre != parseInt(semestre)) {
      mostrarAlerta('Error', 'El semestre debe ser un número.');
      return;
    }

    mostrarAlerta( 'Registro enviado',
      'Nombre: ' + nombre + '\n' +
      'Carrera: ' + carrera + '\n' +
      'Semestre: ' + semestre + '\n\n' +
      'Taller: ' + (taller ? 'Sí' : 'No') + '\n' +
      'Constancia: ' + (constancia ? 'Sí' : 'No') + '\n' +
      'Deportes: ' + (deportes ? 'Sí' : 'No')
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Evento Universitario</Text>

      <TextInput style={styles.input} 
        placeholder="Nombre " 
        value={nombre} 
        onChangeText={setNombre} 
        />

      <TextInput style={styles.input} 
        placeholder="Carrera" 
        value={carrera} 
        onChangeText={setCarrera} />

      <TextInput style={styles.input} 
        placeholder="Semestre" 
        value={semestre} 
        onChangeText={setSemestre} 
        keyboardType="numeric" />

      <Text style={styles.subtitulo}>Opciones</Text>

      <Text>¿Asistirá al taller? </Text>
      <Switch 
        value={taller} 
        onValueChange={setTaller} 
        disabled={false} trackColor={{ false: '#e7eae9', true: '#e7eae9' }} 
        thumbColor={taller ? '#87cfff' : '#939193'} />

      <Text>¿Requiere constancia? </Text>
      <Switch 
        value={constancia} 
        onValueChange={setConstancia} 
        disabled={false} 
        trackColor={{ false: '#e7eae9', true: '#e7eae9' }} 
        thumbColor={constancia ? '#87cfff' : '#939193'} />

      <Text>¿Participará en deportes? </Text>
      <Switch 
        value={deportes} 
        onValueChange={setDeportes} 
        disabled={false} 
        trackColor={{ false: '#e7eae9', true: '#e7eae9' }} 
        thumbColor={deportes ? '#87cfff' : '#939193'} />

      <View style={styles.boton}>
        <Button title="Enviar Registro" onPress={enviarRegistro} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: 20, paddingTop: 150 },
  titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 10, padding: 12, marginBottom: 14, fontSize: 16 },
  subtitulo: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 10 },
  boton: { marginTop: 20 },
});