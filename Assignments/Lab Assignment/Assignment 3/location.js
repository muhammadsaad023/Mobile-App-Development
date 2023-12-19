import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location is required');
      } else {
        getLocation();
      }
    } catch (error) {
      console.error('Error getting location permission:', error);
      setErrorMsg('Error getting location permission');
    }
  };

  const getLocation = async () => {
    try {
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    } catch (error) {
      console.error('Error getting location:', error);
      setErrorMsg('Error getting location');
    }
  };

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {/* Marker for user's current location */}
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            description="You are here!"
          />

          {/* Marker for COMSATS Attock */}
          <Marker
            coordinate={{
              latitude: 33.78322,
              longitude: 72.35359,
            }}
            title="COMSATS Attock"
            description="Welcome to COMSATS Attock!"
          />
        </MapView>
      ) : (
        <View>
          <Text style={{marginBottom:20 , fontWeight:'bold' , alignItems:'center'}}>{errorMsg || 'Location permission required'}</Text>
          <Button  title="Grant Location Permission" onPress={getLocationPermission} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
