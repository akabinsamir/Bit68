import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,Button,TouchableOpacity,CheckBox,SafeAreaView,ScrollView} from 'react-native';
import Firstswipe from './Firstswipe';
import * as Font from 'expo-font';
//import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';





 class Cart extends React.Component {
  static navigationOptions =
  {
     
     
    
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
      visibleModal: null,
      details:true,
     
   }
  }
  async componentDidMount() {
    /*await Font.loadAsync({
      'FORMAL': require('./assets/fonts/Tajawal-Regular.ttf'),
     
      
    });*/
    

    this.setState({ fontLoaded: true });
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

              <View style={styles.footerprice}>
              <Image source={require('./images/cartfooter.png')} style={styles.footerphoto} />

              </View>
              <View style={styles.confirm}>
                    <TouchableOpacity
                     onPress={() => {
                      {/*} this.numberCarousel.scrollToIndex(index);*/}
                      //this.state.modaldate=this.state.mydata[index].startDate
                      //this.state.eventid = this.state.mydata[index].id
                      this.props.navigation.navigate('Reciept')
                  
                     }} style={{zIndex:1002}}>
                        <Image source={require('./images/confirmbutton.png')} style={{width:400,height:60}}/>
                    </TouchableOpacity> 

            </View>

            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'40%',zIndex:1002}} onPress={this.props.navigation.openDrawer}>
                        <Image source={require('./images/menutamween.png')} style={{width:27,height:27}}/>
                    </TouchableOpacity> 
                </SafeAreaView>

            </View>
            <View style={styles.cart}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'35%',zIndex:1002}}>
                        <Image source={require('./images/cartnumber.png')} style={{width:32,height:30}}/>
                    </TouchableOpacity> 

            </View>
     

            <ScrollView style={{width:'100%',height:'80%',zIndex:1001}}>
            <View style={styles.container}>

         

            </View>
       
            <View style={{flex:1,top:'12%',height:'29%',opacity:0,}}>
            <Firstswipe/>
            </View>
       
            <View style={{position:'absolute',top:'5.5%',left:'22%',zIndex:1001}}>

            <Text style={{width:180,height:33,fontFamily:'normal',zIndex:500,color:'white',fontSize:18}}>عربة المشتريات</Text>
    
              
          </View>
     

          <View style={{position:'absolute',bottom:'0%',zIndex:2,}}>

          <Image source={require('./images/cartbg.png')} style={{width:500,height:680,resizeMode:'stretch'}}/>

          </View>
          {/* item 1*/}
        {/*<AppStackNavigator/>*/}
            {/*end of item */}
            {/* item 1*/}
            <View style={{position:'absolute',bottom:'24%',height:300,width:500,zIndex:1000,left:'5%'}}>

<Image source={require('./images/milk.png')} style={{width:70,height:110}}/>
  </View>
  <View style={{position:'absolute',bottom:'26%',height:300,width:500,zIndex:1000,left:'47%'}}>
  <Image source={require('./images/ricename.png')} style={{width:195,height:30}}/>
  </View>
  <View style={{position:'absolute',bottom:'20%',height:300,width:500,zIndex:1000,left:'75%'}}>
  <Image source={require('./images/ricesize.png')} style={{width:80,height:30}}/>
  </View>
  <TouchableOpacity style={{position:'absolute',bottom:'14%',height:300,width:100,zIndex:1000,left:'85%'}}>
  <Image source={require('./images/plusicon.png')} style={{width:40,height:40}}/>
  </TouchableOpacity>
  <View style={{position:'absolute',bottom:'14.5%',height:300,width:500,zIndex:1000,left:'80%'}}>
  <Text style={{width:180,height:33,fontFamily:'normal',zIndex:500,fontSize:23}}>2</Text>
  </View>
  <TouchableOpacity style={{position:'absolute',bottom:'14%',height:300,width:50,zIndex:1000,left:'68%'}}>
  <Image source={require('./images/minceicon.png')} style={{width:43,height:43}}/>
  </TouchableOpacity>
  <View style={{position:'absolute',bottom:'13%',height:300,width:500,zIndex:1000,left:'40%'}}>
  <Image source={require('./images/pricesample.png')} style={{width:100,height:30}}/>
  </View>
  <View style={{position:'absolute',bottom:'7%',height:300,width:500,zIndex:1000,left:'5%'}}>
  <Image source={require('./images/seperator_line.png')} style={{width:370,height:2}}/>
  </View>
  {/*end of item */}
    {/* item 1*/}
    <View style={{position:'absolute',bottom:'4%',height:300,width:500,zIndex:1000,left:'5%'}}>

<Image source={require('./images/rice.png')} style={{width:110,height:110}}/>
  </View>
  <View style={{position:'absolute',bottom:'6%',height:300,width:500,zIndex:1000,left:'47%'}}>
  <Image source={require('./images/ricename.png')} style={{width:195,height:30}}/>
  </View>
  <View style={{position:'absolute',bottom:'0%',height:300,width:500,zIndex:1000,left:'75%'}}>
  <Image source={require('./images/ricesize.png')} style={{width:80,height:30}}/>
  </View>
  <TouchableOpacity style={{position:'absolute',top:'67%',height:300,width:100,zIndex:1000,left:'85%'}}>
  <Image source={require('./images/plusicon.png')} style={{width:40,height:40}}/>
  </TouchableOpacity>
  <View style={{position:'absolute',top:'66.5%',height:300,width:500,zIndex:1000,left:'80%'}}>
  <Text style={{width:180,height:33,fontFamily:'normal',zIndex:500,fontSize:23}}>2</Text>
  </View>
  <TouchableOpacity style={{position:'absolute',top:'67%',height:300,width:50,zIndex:1000,left:'68%'}}>
  <Image source={require('./images/minceicon.png')} style={{width:43,height:43}}/>
  </TouchableOpacity>
  <View style={{position:'absolute',top:'68%',height:300,width:500,zIndex:1000,left:'40%'}}>
  <Image source={require('./images/pricesample.png')} style={{width:100,height:30}}/>
  </View>
  <View style={{position:'absolute',top:'74%',height:300,width:500,zIndex:1000,left:'5%'}}>
  <Image source={require('./images/seperator_line.png')} style={{width:370,height:2}}/>
  </View>
  {/*end of item */}



        
          </ScrollView>
       
            
            </ImageBackground>
            



        );
    }
}
export default Cart

/*const AppStackNavigator = createStackNavigator({
    Home:Home,
    Products:Products,
})*/

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
      height:'0%',
      
      bottom:'102%',
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
    width:'100%',
    height:'9.2%',
    bottom:'0%',
 
    position:'absolute',

},
footerprice: {
    flex:1,
    zIndex:499,
    width:'100%',
    height:'19.5%',
    bottom:'3%',
 
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
      zIndex:1002,
      position:'absolute',
    },
    cart:{
      zIndex:1002,
      position:'absolute',
      left:'82%',
    },
    headerbutton1:{
      zIndex:1001,
      position:'absolute',
      left:'17%',
      top:'8%'
    },
    headerbuttoncat:{
        zIndex:1001,
        position:'absolute',
        left:'25%',
        top:'2.5%',
        width:200
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
     
    },
    confirm:{
      zIndex:9000,
      position:'absolute',
      left:'1.5%',
      top:'84.5%',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
      zIndex:30000,
    },
    modalContent: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height:'78%',
      
    
    },
   
   
  });
  