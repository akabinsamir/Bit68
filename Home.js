import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,TouchableOpacity,SafeAreaView,ScrollView,Dimensions} from 'react-native';
import Eventscrollnew from './Eventscrollnew';
import Firstswipe from './Firstswipe';
import Categories from './Categories';
import AsyncStorage from '@react-native-community/async-storage';

let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;

export default class Home extends React.Component {
  static navigationOptions =
  {
     title: 'الرئيسية',
     
    
     drawerIcon: <Image source={require('./images/beekoo115.png')} style={{height:0.5,width:560,top:'52%',position:'absolute'}} />,
     labelStyle:{
      fontWeight:'normal',
      //fontFamily:'FORMAL'
    }
    

    


  };
 
  
  constructor(){
    super()
    
    this.state = {
      email: '',
      password: '',
      date:'',
      fontLoaded: false,
      switchValue:false,
      finalname:null,
      counter:0,
      categoryID:null,
      mydata:null,
      dataCart:[],
     
   }
  }
  
componentDidMount() {
     fetch('http://192.168.43.201:3000/api/products')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        mydata: responseJson,
      });
   
    });
    AsyncStorage.clear();


   
  }
 
      
      toggleSwitch = (value) => {
          //onValueChange of the switch this function will be called
          this.setState({switchValue: value})
          //state changes according to switch
          //which will result in re-render the text
      }
    


    
    render(){
      const { navigation } = this.props;  
      const username = 'batates';  
      const partname = username.split(" ")[0];
    
      if(partname.length>10){ this.state.finalname=partname.substring(0,10)+".."}
      const picture = navigation.getParam('picture', 'some default value'); 
        return (

            
            
         
          
            <ImageBackground source={require('./images/mrwhite.jpg')} style={{width:'100%', height:'100%',flex:1}}>
               
              <View style={styles.header}>
              <Image source={require('./images/headertamween.png')} style={styles.headerphoto} />
              </View>
              <View style={styles.footer}>
              <Image source={require('./images/footertamween.png')} style={styles.footerphoto} />
              </View>
            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'40%',zIndex:500}} onPress={this.props.navigation.openDrawer}>
                        <Image source={require('./images/menutamween.png')} style={{width:30,height:30}}/>
                    </TouchableOpacity> 
                </SafeAreaView>

            </View>
            <View style={styles.cart}>
                    <TouchableOpacity onPress={() => {
              AsyncStorage.getItem('cart').then((cart)=>{
                //console.log(this.state.totalprice)
                
                  // We have data!!
                  const cartfood = JSON.parse(cart)
                  this.props.navigation.navigate("Cart",{
                    cart:cartfood
                  });
             
              })
              .catch((err)=>{
                alert(err)
              })



           
          }} style={{alignItems:'flex-end',margin:16,top:'30%',zIndex:500}}>
                        <Image source={require('./images/carttamween.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity> 

            </View>
            <View style={styles.headerbutton1}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,zIndex:500}}>
                        <Image source={require('./images/headerbutton1.png')} style={{width:120,height:35}}/>
                    </TouchableOpacity> 

            </View>
            <View style={styles.headerbutton2}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,zIndex:500}}>
                        <Image source={require('./images/headerbutton2.png')} style={{width:100,height:32}}/>
                    </TouchableOpacity> 

            </View>
            <ScrollView style={{width:'100%',height:'100%',zIndex:1}}>
            <View style={styles.container}>
              
            {/*<Image source={require('./images/cairojazz.png')} style={styles.logo} />*/}
         

            </View>
          
            <View style={{flex:1,bottom:'20%',height:'10%'}}>
            <Firstswipe/>
            </View>
         
            <View style={{position:'absolute',top:'29.5%',left:'73%',zIndex:100}}>

            <Image source={require('./images/arabicTASNEFAAT.png')} style={{width:screenWidth/4,height:screenHeight/25}}/>
         </View>
          <View style={{position:'absolute',bottom:'40%',height:screenHeight/3,width:screenWidth,zIndex:1000,left:'0.5%'}}>

          <Categories navigation={this.props.navigation}/>
            </View>

          {this.state.mydata? (<View style={{position:'absolute',top:'7.5%',height:850,width:600,zIndex:500,left:'0.5%'}}><Eventscrollnew products={this.state.mydata} navigation={this.props.navigation}/></View>):(<View></View>)}
          <View style={{position:'absolute',bottom:'49%',zIndex:2}}>

          <Image source={require('./images/graybg.png')} style={{width:screenWidth,height:screenHeight/4.5}}/>

          </View>


      

          <TouchableOpacity style={{position:'absolute',margin:16,top:'50%',left:'17%',zIndex:1001}}>
                        <Image source={require('./images/yellowbutton.png')} style={{width:120,height:57}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{position:'absolute',margin:16,top:'50%',left:'47%',zIndex:1001}}>
                        <Image source={require('./images/redbutton.png')} style={{width:120,height:57}}/>
          </TouchableOpacity>

          

          <View style={{position:'absolute',bottom:'16%',zIndex:200}}>

          <Image source={require('./images/graybg.png')} style={{width:420,height:260}}/>
          

          </View>

          <View style={{bottom:'17%',zIndex:200}}>

          <Image source={require('./images/shelf2.png')} style={{width:412,height:200}}/>
          

          </View>

            <View style={{position:'absolute',bottom:'39%',zIndex:201,left:'69%'}}>
            <Image source={require('./images/specialproducts.png')} style={{width:115,height:33}}/>
          </View>
          </ScrollView>
        {/*}  <TouchableOpacity  value = {this.state.switchValue} style={{zIndex:50}}>
   
                
          { this.state.switchValue?
          <TouchableOpacity style={{position:'relative' , bottom:432,zIndex:50,left:36}}>
            <Image style={{height:38,width:111,zIndex:50}} source={require('./images/cjc.png')}/>
            </TouchableOpacity>
            
            :
            <TouchableOpacity style={{position:'relative' , bottom:436,zIndex:50,left:256}}>
            <Image style={{height:38,width:111,zIndex:50}} source={require('./images/610.png')}/>
            </TouchableOpacity>
          }
        </TouchableOpacity>*/}




         {/*} <View style={{position:'absolute',top:350,left:165}}  pointerEvents='none'>
          <TouchableOpacity  value = {this.state.switchValue} >
   
                
                 { this.state.switchValue?
                 <TouchableOpacity onPress = {this.toggleSwitch} >
                  <Image style={{height:30,width:78 ,}} source={require('./images/buttonON.png')}/>
                  </TouchableOpacity>
                  
                  :
                  <TouchableOpacity onPress = {this.toggleSwitch} >
                  <Image style={{height:30,width:78}} source={require('./images/buttonOFF.png')}/>
                  </TouchableOpacity>
                 }
                  </TouchableOpacity>
                 {this.state.fontLoaded?( <View style={{top:'45%',right:'30%'}}>
                    <Text style={{fontSize:20,fontFamily:'FORMAL',color:'#E6E2A3'}}>
                      Upcoming Events
                    </Text>
                  </View>):(<View style={{top:'45%',right:'30%'}}>
                    <Text style={{fontSize:20,fontFamily:'normal',color:'#E6E2A3'}}>
                      Upcoming Events
                    </Text>
                  </View>)}
                 
                
                </View>*/}
          {/*<View style={{position:'absolute',top:347,right:45,zIndex:40}}>
          <Image style={{height:40,width:110,zIndex:40}} source={require('./images/610OFF.png')}/>
          </View>
          <View style={{position:'absolute',top:350,right:265,zIndex:40}}>
          <Image style={{height:40,width:110,zIndex:40}} source={require('./images/cjcOFF.png')}/>
              </View>*/}
            
            </ImageBackground>
            



        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: 0,
        top:0,
        position:'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
      flex:1,
   
      width:'100%',
      height:'2%',
      bottom:'100%',
      zIndex:1000,
      position:'absolute',

  },
  headerphoto:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'stretch',
    zIndex:1000,
    paddingTop: '25%',
    width:'100%',
    height:'0%',
    
    
  },
  footer: {
    flex:1,
    zIndex:500,
    width:screenWidth,
    height:screenHeight/10.5,
    bottom:'0%',
 
    position:'absolute',

},
footerphoto:{
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
 
  
  width:'100%',
  height:'0%',
  
  
},
    textmenu:{
      color:'#541e1b',
      fontSize:20,
      fontWeight: "500",
  },
    logo:{
    
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode:'contain',

      bottom:'37.5%',
      paddingTop: '1%',
      width:'17%',
      height:'17%',
      zIndex:3,
      
      
    },
    menu:{
      zIndex:1001,
      position:'absolute',
    },
    cart:{
      zIndex:1001,
      position:'absolute',
      left:'82%',
    },
    headerbutton1:{
      zIndex:1001,
      position:'absolute',
      left:'44.5%',
      top:'3.7%'
    },
    headerbutton2:{
      zIndex:1001,
      position:'absolute',
      left:'20%',
      top:'3.8%'
    },
    profile:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
        bottom:520,
        left:15,
        paddingTop: 100,
        width:50,
        height:50,
        tintColor:'#541e1b',
        zIndex:3,

    },
    profile2:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode:'contain',
        bottom:620,
        left:16,
        paddingTop: 100,
        width:47,
        height:47,
        borderRadius: 400/ 2,
        zIndex:3,

    },
    miniback:{
        flex: 1,
        
        position:'absolute',
        bottom:465,
        paddingTop: 100,
        width:'100%',
        height:250,
       
        
        

    },
    minibacktwo:{
      
        flex:2,
        position:'absolute',
        bottom:1,
       alignItems:'stretch',
       justifyContent:'center',
        width:'100%',
        height:710,
       
      
     
      
      

  },
    dot:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      resizeMode:'contain',
      marginBottom:120,
      paddingTop: 50,
      width:40 ,
      height:40,
    },
    FacebookStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#485a96',
      borderWidth: .5,
      borderColor: '#fff',
      height: 40,
      width:210,
      borderRadius: 5 ,
      margin: 5,
      bottom:120,
      left:90
     
    },
     
    ImageIconStyle: {
       padding: 10,
       margin: 5,
       height: 25,
       width: 25,
       resizeMode : 'stretch',
     
    },
     
    TextStyle :{
     
      color: "#fff",
      marginBottom : 4,
      marginRight :20,
      
    },
     
    SeparatorLine :{
     
    backgroundColor : '#00008b',
    width: 1,
    height: 32
     
    }
   
  });
  