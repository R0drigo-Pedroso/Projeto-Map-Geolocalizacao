import { useState } from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -23.52608202998518,
    longitude: -46.54024478809865,

    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  };

  const [localizacao, setLocalizacao] = useState({
    latitude: -23.52608202998518,
    longitude: -46.54024478809865,
    latitudeDelta: 0.0222,
    longitudeDelta: 0.00121,
  });

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView
          style={styles.mapa}
          initialRegion={regiaoInicial}
          liteMode={false} //Somete funciona o android
          // mapType="none"
          userInterfaceStyle="dark" //Somente funciona no ios
          // maxZoomLevel={16}
          // minZoomLevel={3}
          onPress={(e) => {
            setLocalizacao({
              ...localizacao,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log(localizacao);
          }}
        >
          <Marker
            coordinate={localizacao}
            pinColor="#887"
            draggable
            title="Você está aqui!"
            onPress={(event) => {
              console.log(event.nativeEvent);
            }}
          >
            <Image source={require("./assets/dinossauro.png")} />
          </Marker>
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
