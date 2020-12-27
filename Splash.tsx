import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppIntroSlider from 'react-native-app-intro-slider';

import Bithome from './Bithome';

const data = [
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    image: require('./images/Group_633.png'),
    bg: '#FFFFFF',
    id:'1',
  },
  {
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    image: require('./images/Group_633.png'),
    bg: '#FFFFFF',
    id:'2',
  },
  {
    title: 'Lorem ipsum',
    text: "Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
    image: require('./images/Group_633.png'),
    bg: '#FFFFFF',
    id:'3',
  },
];

type Item = typeof data[0];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: "40%",
    marginVertical: 32,
    resizeMode:'contain',
    

  },
  text: {
    color: '#2E2E2E',
    textAlign: 'center',
    width:'75%',
    fontSize:17,
    top:'7%'
  },
  title: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight:'700',
    top:'40%',
     
  },
  buttonCircleNext: {
    width: 44,
    height: 44,
    backgroundColor: '#D95500',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCirclePrev: {
    width: 44,
    height: 44,
    backgroundColor: '#D95500',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonCircleDone: {
    width: 100,
    height: 44,
    backgroundColor: '#D95500',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface Props {
  navigation: any
};


export default class Splash extends React.Component<Props> {
  

  _renderItem = ({item}: {item: Item}) => {
    
    return (
      <View
        key={item.id}
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item: Item) => item.title;

  _renderNextButton = () => {
    return (
      <View  style={styles.buttonCircleNext}>
        <Icon
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderPrevButton = () => {
    return (
      <View  style={styles.buttonCirclePrev}>
        <Icon
          name="md-arrow-round-back"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircleDone}>
        <Text style={{color:'white',fontWeight:'200'}}>Get Started</Text>
      </View>
    );
  };

  render() {
    const {navigation} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderDoneButton={this._renderDoneButton}
          renderNextButton={this._renderNextButton}
          renderPrevButton={this._renderPrevButton}
          showPrevButton
          renderItem={this._renderItem}
          dotStyle={{borderWidth:10/7, borderRadius:10,borderColor:'#D95500'}}
          activeDotStyle={{backgroundColor: '#D95500'}}
          data={data}
          onDone={navigation.navigate("Bithome")}
        />
      </View>
    );
  }
}