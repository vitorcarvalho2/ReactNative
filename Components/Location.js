import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import styleColors from "../assets/static/colors";
import MapView, { Marker } from "react-native-maps";

export default function Location() {
  const starterRegion = {
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [markedLocation, setMarkedLocation] = useState({
    latitude: starterRegion.latitude,
    longitude: starterRegion.longitude,
  });

  function selectLocationHandler(event) {
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setMarkedLocation({
      latitude: lat,
      longitude: lng,
    });
  }

  return (
    <>
      <View style={styles.inputContainer}>
        <Input
          icon="location-outline"
          textInputConfig={{
            placeholder: "Endereco",
          }}
        />
        <Button title="Buscar"/>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          scrollEnabled={false}
          zoomEnabled={false}
          region={starterRegion}
          onPress={selectLocationHandler}
        >
          <Marker coordinate={markedLocation} />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "100%",
  },
  mapContainer: {
    borderWidth: 1,
    borderRadius: 2,
    marginTop: 20,
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
});
