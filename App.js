import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const opcionesAperturaOcular = [
  { label: 'Espontánea', value: '4' },
  { label: 'A estímulos verbales', value: '3' },
  { label: 'A estímulos dolorosos', value: '2' },
  { label: 'Ninguna respuesta', value: '1' },
];

const opcionesRespuestaVerbal = [
  { label: 'Orientada y conversación coherente', value: '5' },
  { label: 'Confusa pero conversación coherente', value: '4' },
  { label: 'Palabras inapropiadas', value: '3' },
  { label: 'Sonidos incomprensibles', value: '2' },
  { label: 'Ninguna respuesta', value: '1' },
];

const opcionesRespuestaMotora = [
  { label: 'Obedece órdenes verbales', value: '6' },
  { label: 'Localiza el dolor', value: '5' },
  { label: 'Retirada al dolor', value: '4' },
  { label: 'Flexión anormal (decorticación)', value: '3' },
  { label: 'Extensión anormal (descerebración)', value: '2' },
  { label: 'Ninguna respuesta', value: '1' },
];

const App = () => {
  const [aperturaOcular, setAperturaOcular] = useState('4');
  const [respuestaVerbal, setRespuestaVerbal] = useState('5');
  const [respuestaMotora, setRespuestaMotora] = useState('6');
  const [puntuacionTotal, setPuntuacionTotal] = useState(15);

  const calcularPuntuacionTotal = () => {
    const puntuacion =
      parseInt(aperturaOcular) +
      parseInt(respuestaVerbal) +
      parseInt(respuestaMotora);
    setPuntuacionTotal(puntuacion);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escala de Coma de Glasgow</Text>
      <View style={styles.pickerSection}>
        <Text style={styles.label}>Apertura Ocular:</Text>
        <Picker
          selectedValue={aperturaOcular}
          onValueChange={(itemValue) => setAperturaOcular(itemValue)}
          style={styles.picker}
        >
          {opcionesAperturaOcular.map((opcion) => (
            <Picker.Item
              key={opcion.value}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerSection}>
        <Text style={styles.label}>Respuesta Verbal:</Text>
        <Picker
          selectedValue={respuestaVerbal}
          onValueChange={(itemValue) => setRespuestaVerbal(itemValue)}
          style={styles.picker}
        >
          {opcionesRespuestaVerbal.map((opcion) => (
            <Picker.Item
              key={opcion.value}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.pickerSection}>
        <Text style={styles.label}>Respuesta Motora:</Text>
        <Picker
          selectedValue={respuestaMotora}
          onValueChange={(itemValue) => setRespuestaMotora(itemValue)}
          style={styles.picker}
        >
          {opcionesRespuestaMotora.map((opcion) => (
            <Picker.Item
              key={opcion.value}
              label={opcion.label}
              value={opcion.value}
            />
          ))}
        </Picker>
      </View>
      <View style={styles.buttonSection}>
        <Button
          title="Calcular Puntuación"
          onPress={calcularPuntuacionTotal}
          color="#007bff"
        />
      </View>
      <Text style={styles.result}>Puntuación Total: {puntuacionTotal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  pickerSection: {
    marginBottom: 15,
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#ced4da',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#343a40',
  },
  picker: {
    color: '#343a40',
  },
  buttonSection: {
    marginTop: 20,
    width: '80%',
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#343a40',
  },
});

export default App;
