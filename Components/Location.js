import Input from "./Input";
import { useState } from "react";
import { View, Pressable, Text, StyleSheet, Alert } from "react-native";
import styleColors from "../assets/static/colors";
import MapView, { Marker } from "react-native-maps";
import { getCoordinates } from "../utils/geocode";

export default function Location({ onLocationPicked, locationData={address: "", lat: -23.5506507, lon: -46.6333824} }) {
  const [location, setLocation] = useState(locationData);
  const [markedRegion, setMarkedRegion] = useState({
    latitude: location.lat,
    longitude: location.lon,
    latitudeDelta: 0.15,
    longitudeDelta: 0.1,
  });

  async function inputTravelHandler(address) {
    const response = await getCoordinates(address);

    if (response.status === "OK") {
      const location = response.data[0];
      const lat = parseFloat(location.lat);
      const lon = parseFloat(location.lon);

      onLocationPicked({ lat, lon, address });
      setMarkedRegion((prevState) => ({
        ...prevState,
        latitude: lat,
        longitude: lon,
      }));
    } else {
      Alert.alert(
        "Erro ao contatar a API de Geocode:",
        "Não foi possível recuperar as coordenadas."
      );
    }
  }

  async function mapTravelHandler(lat, lon) {
    return;
  }

  function markLocationHandler(event) {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    return;
  }

  return (
    <>
      <View style={styles.mainContainer}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            showsUserLocation={true}
            scrollEnabled={false}
            zoomEnabled={true}
            region={markedRegion}
            onPress={markLocationHandler}
          >
            <Marker
              coordinate={{
                latitude: markedRegion.latitude,
                longitude: markedRegion.longitude,
              }}
            />
          </MapView>
        </View>
        <Input
          icon="location-outline"
          textInputConfig={{
            placeholder: "Endereço",
            value: location.address,
            onChangeText: (text) => setLocation((prevState) => ({...prevState, address: text})),	
          }}
        />
        <Pressable
          style={styles.buttonContainer}
          onPress={() => inputTravelHandler(location.address)}
        >
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
