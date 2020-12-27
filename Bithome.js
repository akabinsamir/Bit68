import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  Easing
} from "react-native";
import {  LogBox } from 'react-native';
import Eventscrollnew from "./Eventscrollnew";
import Firstswipe from "./Firstswipe";
import Categories from "./Categories";
import SearchInput, { createFilter } from "react-native-search-filter";
import AsyncStorage from "@react-native-community/async-storage";
import SearchableDropDown from 'react-native-dropdown-searchable';

import * as Font from "expo-font";


const KEYS_TO_FILTERS = ["name"];

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default class Bithome extends React.Component {
  static navigationOptions = {
    title: "Home",

    drawerIcon: (
      <View style={{bottom:'28%'}}>
      <Image
        source={require("./images/home.png")}
        style={{ height:30, width: 30, position: "absolute" ,resizeMode:'contain'}}
      />
      </View>
    ),
   
  };

  constructor() {
    super();
    this.state = {
      finalname: null,
      counter: 0,
      categoryID: null,
      mydata: null,
      dataCart: [],
      country: "الكل",
      list:null,
      tag:null,
      searchTerm: "",
      filteredMydata: null,
      font:'normal',
    
    
    }
    
  }
  
 /* parentMethod(data) {
    console.log(data)
    
     
      
    
  }*/
  searchUpdated(term) {
    this.setState({ searchTerm: term });
    if(term.length == 0)
    {
      this.setState({
        filteredMydata: this.state.mydata,
      
      });
    }
    else{
    const filteredProducts = this.state.mydata.filter(
      createFilter(term, KEYS_TO_FILTERS)
    );
if(filteredProducts.length != 2)
{
    this.setState({
      filteredMydata: filteredProducts,
    
    });
  }
  else{
    this.setState({
      filteredMydata: this.state.mydata,
    
    });
  }

  }

  }
 async componentDidMount() {
  /*await Font.loadAsync({
    'main':require('./assets/fonts/Tajawal-Regular.ttf')
  })*/

   await fetch("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mydata: responseJson,
        });
        
      });
    AsyncStorage.clear();//clearing storage , wasy for testing
  }

  

  render() {
    const { navigation } = this.props;
 
    return (
      <ImageBackground
        source={require("./images/mrwhite.jpg")}
        style={{ width: "100%", height: "100%", flex: 1,zIndex:0 }}
      >

        <View style={styles.menu}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                //margin: 16,
                //top: "30%",
                zIndex: 500,
              }}
              onPress={this.props.navigation.openDrawer}
            >
              <Image
                source={require("./images/bitmenu.png")}
                style={{ width: screenWidth/13, height: screenWidth/10 ,resizeMode:'contain'}}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.getItem("cart")
                .then((cart) => {
                  //console.log(this.state.totalprice)

                  // We have data!!
                  const cartfood = JSON.parse(cart);
                  this.props.navigation.navigate("Cart", {
                    cart: cartfood,
                    username:this.state.username
                  });
                  console.log(cartfood);
                })
                .catch((err) => {
                  alert(err);
                });
            }}
            style={{
       
              zIndex: 500,
            }}
          >
            <Image
              source={require("./images/bitcart.png")}
              style={{ width: screenWidth/2 ,height:screenHeight/27,resizeMode:'contain' ,}}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.headerbutton1}>    
            <SearchInput
            style={{zIndex:10100,textAlign: "center",fontFamily:this.state.font}}
            underlineColorAndroid="transparent"
            placeholder="look for a category"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(term) => {
              this.searchUpdated(term);
            }}
          />
           
        </View>
        
        <View style={styles.headerbutton2}>

       { this.state.list? (<SearchableDropDown
          onTextChange={tag => {
            this.setState({ tag:tag });
            if(this.state.tag == '')
            {
              fetch("http://www.tamweenymarket.com/api/products")
              .then((response) => response.json())
              .then((responseJson) => {
                this.setState({
                  mydata: responseJson,
                });
              });
            }
          }}
          onItemSelect={item => {
            this.setState({ tagItem: item });
            fetch("http://www.tamweenymarket.com/api/brands/"+item._id)
            .then((response) => response.json())
            .then((responseJson) => {
              this.setState({
                mydata: responseJson,
              });
            });
          }}
          itemText={{fontFamily:this.state.font}}
          items={this.state.list}
          defaultIndex={0}
          resetValue={false}
          placeholder={'الماركات'}
          placeholderTextColor={'gray'}
          underlineColorAndroid="transparent"
          
        />)
        :
        (<View></View>)}
        </View>
        <ScrollView style={{ width: screenWidth, height: screenHeight, zIndex: 0 , top :'5%'}}>

          <View style={{ flex: 1, bottom: "20%" }}>
            <Firstswipe />
          </View>

       
          <View
            style={{
              position: "absolute",
              bottom: "7%",
              height: screenHeight / 2,
              width: screenWidth,
              zIndex: 1001,
              left: "7%",
            }}
          >
            <Categories navigation={this.props.navigation} mydata={this.state.filteredMydata} />
          </View>

         
        </ScrollView>
      
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
 
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    zIndex:0
  },
  header: {
    
    zIndex: 5000,
    width: screenWidth,
    height: screenHeight / 9,
    top: "0%",
    alignItems:'center',
    position: "absolute",
    
  },
  headerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode:'stretch'
    
   
  },
  logo: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",

    bottom: "37.5%",
    paddingTop: "1%",
    width: "17%",
    height: "17%",
    zIndex: 3,
  },
  menu: {
    zIndex: 100000,
    position: "absolute",
    top:'10%',
    left:'5%'
  },
  cart: {
    zIndex: 5000,
    position: "absolute",
    left: "65%",
    top:'10%'
  },
  headerbutton1: {
    zIndex: 10100,
    position: "absolute",
    left: "35%",
    top: "10%",
  },
  headerbutton2: {
    zIndex: 5000,
    position: "absolute",
    left: "25%",
    top: screenHeight/20,
    
  },
  profile: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    bottom: 520,
    left: 15,
    paddingTop: 100,
    width: 50,
    height: 50,
    tintColor: "#541e1b",
    zIndex: 3,
  },
  profile2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    bottom: 620,
    left: 16,
    paddingTop: 100,
    width: 47,
    height: 47,
    borderRadius: 400 / 2,
    zIndex: 3,
  },
  miniback: {
    flex: 1,

    position: "absolute",
    bottom: 465,
    paddingTop: 100,
    width: "100%",
    height: 250,
  },
  minibacktwo: {
    flex: 2,
    position: "absolute",
    bottom: 1,
    alignItems: "stretch",
    justifyContent: "center",
    width: "100%",
    height: 710,
  },
  dot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    marginBottom: 120,
    paddingTop: 50,
    width: 40,
    height: 40,
  },
  FacebookStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#485a96",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 210,
    borderRadius: 5,
    margin: 5,
    bottom: 120,
    left: 90,
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
  },


  SeparatorLine: {
    backgroundColor: "#00008b",
    width: 1,
    height: 32,
  },
});
