import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  Alert,
  Button,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  /* state para a geolocalização */
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  useEffect(() => {
    async function obterLocalizacao() {
      // Acessando o status da requisição de permissão de uso
      const { status } = await Location.requestForegroundPermissionsAsync();

      // Verificando o status
      if (status !== "granted") {
        Alert.alert(
          "Ops!",
          "Você não autorizou o uso de recursos de localização"
        );
        return;
      }

      // Acessando os dados de geolocalização
      let localizacaoAtual = await Location.getCurrentPositionAsync({});

      // Adicionando os dados ao state
      setMinhaLocalizacao(localizacaoAtual);
    }

    obterLocalizacao();
  }, []);

  console.log(minhaLocalizacao);

  /* São Paulo */
  const regiaoInicial = {
    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };

  const [localizacao, setLocalizacao] = useState();

  return (
    <>
      <StatusBar />
      <View>
        <View style={styles.Botao}>
          <Button
            title="Sua localização"
            onPress={() => {
              setLocalizacao({
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                latitude: minhaLocalizacao.coords.latitude,
                longitude: minhaLocalizacao.coords.longitude,
              });
            }}
          />
        </View>
        <MapView
          style={styles.mapa}
          region={localizacao ?? regiaoInicial}
          liteMode={false} //Somete funciona o android
          userInterfaceStyle="dark" //Somente funciona no ios
        >
          {localizacao && (
            <Marker
              coordinate={localizacao}
              pinColor="#887"
              draggable
              title="Você está aqui!"
              onPress={(event) => {
                console.log(event.nativeEvent);
              }}
            >
              {/* <Image source={require("./assets/dinossauro.png")} /> */}
            </Marker>
          )}
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewBotao: {},
  container: {
    flex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
  },
});
