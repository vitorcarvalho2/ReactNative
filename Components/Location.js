import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import styleColors from "../assets/static/colors";
import MapView, { Marker } from "react-native-maps";

import { getCoordinates } from "../utils/geocode";

export default function Location() {
  const mockRegion = {
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [markedLocation, setMarkedLocation] = useState({
    latitude: mockRegion.latitude,
    longitude: mockRegion.longitude,
  });

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setMarkedLocation({
      latitude: lat,
      longitude: lng,
    });
  }

  async function getCoordinatesHandler(address) {
    console.log(address);
    const response = await getCoordinates(address);
    if (response.status === "OK") {
      //console.log(response);
    } else {
      Alert.alert(
        "Erro ao contatar a API de Geocode:",
        "Não foi possível recuperar as coordenadas."
      );
    }
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            scrollEnabled={true}
            zoomEnabled={true}
            region={mockRegion}
            onPress={selectLocationHandler}
          >
            <Marker coordinate={markedLocation} />
          </MapView>
        </View>
        <Input
          icon="location-outline"
          textInputConfig={{
            placeholder: "Endereço",
          }}
        />
        <Pressable style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Ir</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  inputContainer: {
    flexDirection: "column",
    width: "100%",
  },
  mapContainer: {
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 0,
    borderColor: styleColors.primary200,
    width: "80%",
    height: "300",
  },
  map: {
    borderWidth: 1,
    borderColor: "black",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    marginBottom: 20,
  },
  buttonText: {
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: styleColors.primary200,
    color: styleColors.secondary300,
    padding: 10,
    width: 80,
    backgroundColor: styleColors.primary200,
    elevation: 5,
    marginHorizontal: 20,
    textAlign: "center",
  },
});
