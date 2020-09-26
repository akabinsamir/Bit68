import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Image,Dimensions,StatusBar} from 'react-native';
import MapView,{Marker} from 'react-native-maps'
//import AsyncStorage from "@react-native-community/async-storage";
import * as Location from 'expo-location';
let screenWidth = Dimensions.get("window").width;
let screenHeight = Platform.OS === 'android' ? Dimensions.get('screen').height - StatusBar.currentHeight :Dimensions.get('window').height;


export default function Map({ navigation }) {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
     setLocation(location);
      
     
    })();
  });

  let text = null;
  let long = 30.0142356;
  let lat = 30.0142356;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    long = JSON.stringify(location.coords.longitude)
    lat = JSON.stringify(location.coords.latitude)
 
  }

  return (
    text?<View style={{width:screenWidth,height:screenHeight}}>
      
    <MapView 
    customMapStyle={[{"elementType": "geometry","stylers": [{"color": "#511923"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#333333"}]},{"featureType": "administrative.country","elementType": "geometry.stroke","stylers": [{"color": "#000000"}]},{"featureType": "administrative.land_parcel","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "administrative.province","elementType": "geometry.stroke","stylers": [{"color": "#000000"}]},{"featureType": "landscape.man_made","elementType": "geometry.stroke","stylers": [{"color": "#333333"}]},{"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#702c2b"}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#702c2b"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#333333"}]},{"featureType": "poi.park","elementType": "geometry.fill","stylers": [{"color": "#702c2b"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#000000"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#333333"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#e5933d"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#e5933d"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway","elementType": "labels.text.stroke","stylers": [{"color": "#333333"}]},{"featureType": "transit","elementType": "labels.text.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "transit","elementType": "labels.text.stroke","stylers": [{"color": "#333333"}]},{"featureType": "transit.line","elementType": "geometry.fill","stylers": [{"color": "#e5933d"}]},{"featureType": "transit.station","elementType": "geometry","stylers": [{"color": "#702c2b"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#061117"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#4e6d70"}]}]}
    style={{flex:1,
            alignItems:'stretch',
            zIndex:19,
          }}
      initialRegion={{
      latitude: Number(lat),
      longitude:Number(long),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      
     
      }}
      
  >
    <Marker
    coordinate={{
      latitude: Number(lat),
      longitude: Number(long),
    }}>

  <TouchableOpacity >
  <Image style={{height:43,width:90,zIndex:50,zIndex:20,resizeMode:'contain'}} source={require('./images/marker.png')}/>
  </TouchableOpacity> 
</Marker>
  </MapView>
 {/**/}
  <TouchableOpacity onPress={() =>   
          console.log(location),
         // AsyncStorage.setItem("location", JSON.stringify(location)),
          navigation.navigate('Home')
     
    
  } style={{position:'absolute',width:'95%',height:'80%',top:'70%',left:'2%'}}>
  <Image style={{zIndex:50,width:'100%',height:'40%',resizeMode:'contain'}} source={require('./images/confirmlocation.png')}/>
  </TouchableOpacity>
  </View>
  :
 <View style={{top:'50%',}}>
  <Text style={{textAlign:'center'}}>
    Accessing Location ...
  </Text>
  </View>
  
  
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:'50%'
  },
});