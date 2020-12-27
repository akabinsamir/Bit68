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
  StatusBar,
} from "react-native";

import SearchInput, { createFilter } from "react-native-search-filter";
import Eventscrollnew from "./Eventscrollnew";
import AsyncStorage from "@react-native-community/async-storage";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";

const KEYS_TO_FILTERS = ["productName"];

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

class Products extends React.Component {
  static navigationOptions = {
    title: "Products",
    drawerIcon: (
      <View style={{ bottom: "28%" }}>
        <Image
          source={require("./images/products.png")}
          style={{
            height: 30,
            width: 30,
            position: "absolute",
            resizeMode: "contain",
          }}
        />
      </View>
    ),
  };

  constructor() {
    super();

    this.state = {
      date: "",
      switchValue: false,
      finalname: null,
      visibleModal: null,
      mydata: {},
      searchTerm: "",
      filteredMydata: null,
      isTrue: true,
      mycatName: null,
      mybrands: null,
      subc: null,
      mycategories: null,
      mycatdata:null,
      font:'normal',
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
    if (term.length == 0) {
      this.setState({
        filteredMydata: this.state.mydata,
      });
    } else {
      const filteredProducts = this.state.mydata.filter(
        createFilter(term, KEYS_TO_FILTERS)
      );

      if (filteredProducts.length != 2) {
        this.setState({
          filteredMydata: filteredProducts,
        });
      } else {
        this.setState({
          filteredMydata: this.state.mydata,
        });
      }
    }
  }
 
  componentDidUpdate(prevProps, prevState) {
    
    if (
      prevProps.navigation.state.params.catid !==
      this.props.navigation.state.params.catid
    ) {
       fetch("https://5bcce576cf2e850013874767.mockapi.io/task/categories/" + this.props.navigation.state.params.catid)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mydata: responseJson,
        });
      })
  

    }
  }
 async componentDidMount() {
   
    /*await Font.loadAsync({
      'main':require('./assets/fonts/Tajawal-Regular.ttf')
    })*/

    //this.setState({font:'main'})

    const { navigation } = this.props;
    if (!navigation.state.params) {
      const catid = 1;
    } else if (navigation.state.params.catid != null) {
      const { catid } = navigation.state.params;

    await fetch("https://5bcce576cf2e850013874767.mockapi.io/task/categories/" + catid)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            mydata: responseJson,
          });
        })
    }
    
  }
  render() {

    return (
      <ImageBackground
        source={require("./images/mrwhite.jpg")}
        style={{ width: "100%", height: "100%", flex: 1, zIndex: 0 }}
      >
        <StatusBar translucent backgroundColor="transparent" />
        
    {this.state.mydata?( <View style={styles.header}>
          <Image
            source={{ uri:this.state.mydata.category_img }}
            style={styles.headerphoto}
          />
        </View>):(<View><Text>Loading...</Text></View>)}
        <View style={styles.footer}>
          <Image
            source={require("./images/footertamween.png")}
            style={styles.footerphoto}
          />
        </View>

       <View style={styles.menu}>
          <SafeAreaView>
            <TouchableOpacity
              style={{
                alignItems: "flex-end",
                zIndex: 500,
              }}
              onPress={this.props.navigation.openDrawer}
            >
              <Image
                source={require("./images/bitbackbutton.png")}
                style={{ width: screenWidth/13, height: screenWidth/13 ,resizeMode:'contain',tintColor:'black'}}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </View>
        <View style={styles.cart}>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.getItem("cart")
                .then((cart) => {
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
            style={{
              margin: 5,
              height: screenHeight/11,
              opacity: 1,
              width: "82.5%",
              bottom: "2%",
              left: "15%",
              textAlign: "center",
              fontFamily: this.state.font,
              color: "gray",
              

              fontSize: RFValue(20, screenHeight),
              zIndex: 5001,
            }}
            underlineColorAndroid="transparent"
            placeholder="Look for a product"
            placeholderTextColor="gray"
            autoCapitalize="none"
            onChangeText={(term) => {
              this.searchUpdated(term);
            }}
          />

          <Image
            source={require("./images/searchbar.png")}
            style={{ width: screenWidth/1.6, height: screenHeight/12, bottom: "50%",resizeMode:'contain'}}
          />
        </View>
        <View>

        </View>
      {/* <ScrollView style={{ width: "100%", height: "100%" }}>
  
         
          {this.state.filteredMydata ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height:screenHeight+(screenHeight/7),
                width:screenWidth+screenWidth,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.filteredMydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}


{this.state.mycatdata ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height:screenHeight+(screenHeight/7),
                width:screenWidth+screenWidth,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.mycatdata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          

          {this.state.mydata != null && this.state.filteredMydata == null ? (
            <View
              style={{
                position: "absolute",
                bottom: "25.5%",
                height:screenHeight+(screenHeight/7),
                width:screenWidth+screenWidth,
                zIndex: 500,
                left: "0.5%",
              }}
            >
              <Eventscrollnew
                products={this.state.mydata}
                navigation={this.props.navigation}
              />
            </View>
          ) : (
            <View></View>
          )}
          <View style={{ position: "absolute", bottom: "72%", zIndex: 2 }}>
            <Image
              source={require("./images/catbg.png")}
              style={{ width: screenWidth/0.8, height: 110, resizeMode: "stretch" }}
            />
          </View>

         
          </ScrollView>*/}
      </ImageBackground>
    );
  }
}
export default Products;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    top: 0,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    
    zIndex: 5000,
  
    top: "0%",
    alignItems:'center',
    position: "absolute",
    
  },
  headerphoto: {
    alignItems: "center",
    justifyContent: "center",
    resizeMode:'stretch',
    width: screenWidth,
    height: screenHeight/2.2,
    
   
  },
  footer: {
    alignItems:'center',
    zIndex: 5000,
    width: screenWidth,
    height: screenHeight / 10.5,
    bottom: "0%",
    position: "absolute",
  },
  footerphoto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    resizeMode:'contain'
  },
  footerprice: {
    flex: 1,
    zIndex: 499,
    width: "100%",
    height: "11%",
    bottom: "3%",

    position: "absolute",
  },

  textmenu: {
    color: "#541e1b",
    fontSize: RFValue(20, screenHeight),
    fontWeight: "500",
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
    zIndex: 5001,
    position: "absolute",
    left: "19%",
    top: "7%",
  },
  headerbuttoncat: {
    zIndex: 5001,
    position: "absolute",
    top: "2.5%",
    width: screenWidth,
  },
  headerbutton2: {
    zIndex: 5001,
    position: "absolute",
    left: "20%",
    top: "3.8%",
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

  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20,
  },

  SeparatorLine: {
    backgroundColor: "#00008b",
    width: 1,
    height: 32,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    bottom: "39.5%",
    alignItems: "center",
    borderRadius: 50,
    width: "100%",
    height: "55%",

    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  catTextleft:
  {
    fontSize: RFValue(25, screenHeight),
    padding: 15,
    borderBottomWidth: 1,
    color:'gray',
    borderColor: "gray",
    marginLeft: "58%",
    
  },
  catTextleft2:
  {
    fontSize: RFValue(25, screenHeight),
    padding: 15,
    borderBottomWidth: 1,
    color:'#80fc38',
    borderColor: "#80fc38",
    marginLeft: "58%",
  },
  catTextright:
  {
    fontSize: RFValue(25, screenHeight),
    padding: 15,
    borderBottomWidth: 1,
    color:'gray',
    borderColor: "gray",
    marginRight: "58%",
  },
  catTextright2:
  {
    fontSize: RFValue(25, screenHeight),
    padding: 15,
    borderBottomWidth: 1,
    color:'#80fc38',
    borderColor: "#80fc38",
    marginRight: "58%",
  },
});
