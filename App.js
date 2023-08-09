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
      <View style={styles.section}>
        <Text style={styles.label}>Apertura Ocular:</Text>
        <Picker
          selectedValue={aperturaOcular}
          onValueChange={(itemValue) => setAperturaOcular(itemValue)}
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
      <View style={styles.section}>
        <Text style={styles.label}>Respuesta Verbal:</Text>
        <Picker
          selectedValue={respuestaVerbal}
          onValueChange={(itemValue) => setRespuestaVerbal(itemValue)}
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
      <View style={styles.section}>
        <Text style={styles.label}>Respuesta Motora:</Text>
        <Picker
          selectedValue={respuestaMotora}
          onValueChange={(itemValue) => setRespuestaMotora(itemValue)}
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
      <View style={styles.section}>
        <Button title="Calcular Puntuación" onPress={calcularPuntuacionTotal} />
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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
