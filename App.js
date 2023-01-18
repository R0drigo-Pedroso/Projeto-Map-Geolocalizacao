import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52608202998518,
    longitude: -46.54024478809865,
    latitudeDelta: 0.000000000009202,
    longitudeDelta: 0.01421,
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView style={styles.mapa} initialRegion={regiaoInicial} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
