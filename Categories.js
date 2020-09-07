import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import axios from 'axios';
import Swiper from "react-native-swiper";
let screenWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",

    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },

  slide2: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",

    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  slide3: {
    flex: 1,
    top: "1%",
    marginBottom: "10%",
    paddingBottom: "5%",
    paddingTop: "4%",

    width: screenWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class Categories extends React.Component {
  
  constructor() {
    super();

    this.state = {

      dataSource: [
        {
          products: [
            "5f4fbe4dec26962c14512f18",
            "5f4fbe84ec26962c14512f19",
            "5f4fbed6ec26962c14512f1a",
            "5f4fc033ec26962c14512f1d",
            "5f4fdd98c2e6563ea0872c79",
          ],
          _id: "5f4fbc57782b7f1c0ceab1f0",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbc83782b7f1c0ceab1f1",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbca4782b7f1c0ceab1f2",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbcc0782b7f1c0ceab1f3",
          name: " مستلزمات Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbccf782b7f1c0ceab1f4",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbcd9782b7f1c0ceab1f5",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fbce9782b7f1c0ceab1f6",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: ["5f4fbf78ec26962c14512f1c"],
          _id: "5f4fbf17ec26962c14512f1b",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: ["5f4fc0bfec26962c14512f1f"],
          _id: "5f4fc066ec26962c14512f1e",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
        {
          products: [],
          _id: "5f4fe7f3e0827320e0ddffa7",
          name: "Loading...",
          categoryimage:
            "http://192.168.43.201:3000/uploads/categories/cartloading.gif",
          __v: 0,
        },
      ],
    };
  }

 componentDidMount() {
  //const { navigation } = this.props;
 
    fetch("http://192.168.43.201:3000/api/categories/")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          //image1: responseJson[0].categoryimage,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  navi = (text) => {
  if (text != null)
  {
    this.props.navigation.navigate("Products",{
      link:text
    });
  }
    //console.log(text)
  };
refresh()
{
  alert("hi")
}
  render() {
    //const Navigation  = this.props.navigation;
    //const { navigation } = this.props;  
    //console.log({navigation});
    //const { navigation } = this.props;  
    const { navigation } = this.props;
    let screenWidth = Dimensions.get("window").width;
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        pagination={false}
        autoplay={false}
        autoplayTimeout={3}
        dot={<View style={{ opacity: 0 }} />}
        activeDot={<View style={{ opacity: 0 }} />}
      >
        <View style={{ position: "absolute" }}>
          <TouchableOpacity
            onPress={() => this.navi(this.state.dataSource[0]._id)}
            style={{ left: 10, position: "absolute", top: 5 }}
          >
            <Image
              source={{ uri: this.state.dataSource[0].categoryimage }}
              style={{
                height: 70,
                width: 70,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "6%",
                right: "6%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[0].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.navi(this.state.dataSource[1]._id)}
           style={{ left: 80, position: "absolute" }}>
            <Image
              source={{ uri: this.state.dataSource[1].categoryimage }}
              style={{
                height: 80,
                width: 80,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "9%",
                right: "25%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[1].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => this.navi(this.state.dataSource[2]._id)}
            style={{ left: 160, position: "absolute" }}>
            <Image
              source={{ uri: this.state.dataSource[2].categoryimage }}
              style={{
                height: 80,
                width: 80,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "10%",
                right: "25%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[2].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => this.navi(this.state.dataSource[3]._id)}
           style={{ left: 240, position: "absolute" }}>
            <Image
              source={{ uri: this.state.dataSource[3].categoryimage }}
              style={{
                height: 75,
                width: 75,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 9,
                zIndex: 100,
                bottom: "6%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[3].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.navi(this.state.dataSource[4]._id)} 
           style={{ left: 320, position: "absolute" }}>
            <Image
              source={{ uri: this.state.dataSource[4].categoryimage }}
              style={{
                height: 75,
                width: 75,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "6%",
                right: "37%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[4].name}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
           onPress={() => this.navi(this.state.dataSource[5]._id)}
          style={{ left: 10, position: "absolute", top: 89 }}>
            <Image
              source={{ uri: this.state.dataSource[5].categoryimage }}
              style={{
                height: 70,
                width: 70,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "6%",
                right: "25%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[5].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
           onPress={() => this.navi(this.state.dataSource[6]._id)}
           style={{ left: 80, position: "absolute", top: 87 }}>
            <Image
              source={{ uri: this.state.dataSource[6].categoryimage }}
              style={{
                height: 80,
                width: 80,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "14%",
                right: "30%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[6].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.navi(this.state.dataSource[7]._id)}
            style={{ left: 160, position: "absolute", top: 87 }}
          >
            <Image
              source={{ uri: this.state.dataSource[7].categoryimage }}
              style={{
                height: 80,
                width: 80,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "12%",
                right: "30%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[7].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.navi(this.state.dataSource[8]._id)}
            style={{ left: 240, position: "absolute", top: 87 }}
          >
            <Image
              source={{ uri: this.state.dataSource[8].categoryimage }}
              style={{
                height: 75,
                width: 75,
                zIndex: 100,
              }}
            />

            <Text
              style={{
                fontSize: 9,
                zIndex: 100,
                bottom: "6%",
                right: "10%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[8].name}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={() => this.navi(this.state.dataSource[9]._id)}
            style={{ left: 320, position: "absolute", top: 87 }}
          >
            <Image
              source={{ uri: this.state.dataSource[9].categoryimage }}
              style={{
                height: 75,
                width: 75,
                zIndex: 100,
              }}
            />
            <Text
              style={{
                fontSize: 10,
                zIndex: 100,
                bottom: "8%",
                right: "30%",
                fontWeight: "bold",
              }}
            >
              {" "}
              {this.state.dataSource[9].name}
            </Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
