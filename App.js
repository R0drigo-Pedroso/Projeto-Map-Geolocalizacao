import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52608202998518,
    longitude: -46.54024478809865,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.001421,
  };

  const localizacao = {
    latitude: -33.867886,
    longitude: -63.987,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          style={styles.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} //Somete funciona o android
          mapType="satellite"
          userInterfaceStyle="dark" //Somente funciona no ios
          // maxZoomLevel={16}
          // minZoomLevel={3}
        >
          <Marker
            coordinate={localizacao}
            pinColor="#887"
            draggable
            title="Você está aqui!"
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
          />
        </MapView>
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
