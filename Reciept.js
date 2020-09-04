import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,Button,TouchableOpacity,CheckBox,SafeAreaView,ScrollView} from 'react-native';

/*import { Dropdown } from 'react-native-material-dropdown';
import Eventscrolltwonew from './Eventscrolltwonew';
import Bannerscroll from './Bannerscroll';
import Eventscrollnew from './Eventscrollnew';*/
/*import Firstswipe from './Firstswipe';
import Subcategory from './Subcategory';
import Brands from './Brands';
import Footer1 from './Footer1';

import Footer2 from './Footer2';*/
import Modal from 'react-native-modal';
/*import {FontAwesome5} from '@expo/vector-icons'
import { Switch} from 'react-native'*/
//import * as Font from 'expo-font';

//import { Footer } from 'native-base';




export default class Reciept extends React.Component {
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
      visibleModal: 2,
      details:true,
     
   }
  }
  async componentDidMount() {
    /*await Font.loadAsync({
      'FORMAL': require('./assets/fonts/Tajawal-Regular.ttf'),
     
      
    });*/
    AsyncStorage.getItem('cart').then((cart)=>{
        if (cart !== null) {
          // We have data!!
          const cartfood = JSON.parse(cart)
          this.setState({dataCart:cartfood})
          console.log(cartfood)
        }
      })
      .catch((err)=>{
        alert(err)
      })
  

    this.setState({ fontLoaded: true });
  }
      
      toggleSwitch = (value) => {
          //onValueChange of the switch this function will be called
          this.setState({switchValue: value})
          //state changes according to switch
          //which will result in re-render the text
      }
    
      _renderModalContent = () => (
        <View style={styles.modalContent}>
            <ScrollView style={{position:'absolute',width:'100%',height:'93%',bottom:'5%',zIndex:40000,left:'5%'}} >
           <Image source={require('./images/remodaltest.png')} 
            style={{position:'relative',width:350,height:570,}}
            />
             <Image source={require('./images/remodaltest2.png')} 
            style={{position:'relative',width:350,height:200,}}
            />
            </ScrollView>
          
        </View>
      );
  
    
    render(){
      const { navigation } = this.props;  
      const username = 'batates';  
      const partname = username.split(" ")[0];
     
    
      if(partname.length>10){ this.state.finalname=partname.substring(0,10)+".."}
      const picture = navigation.getParam('picture', 'some default value'); 
        return (

            
            
         
          
            <ImageBackground source={require('./images/rebg.png')} style={{width:'100%', height:'100%',flex:1}}>
            
              <View style={styles.header}>
              <Image source={require('./images/headertamween.png')} style={styles.headerphoto} />
              </View>
              <View style={styles.footer}>
              <Image source={require('./images/footertamween.png')} style={styles.footerphoto} />
              </View>

          
             

            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',tintColor:"white",margin:16,top:'40%',zIndex:1002,}} onPress={() => navigation.goBack(null)}>
                        <Image source={require('./images/whitearrow.png')} style={{width:27,height:27}}/>
                    </TouchableOpacity> 
                </SafeAreaView>
             
            </View>
            <View style={{top:'10%',left:'3.5%',position:'absolute'}}>
                <TouchableOpacity style={{alignItems:'flex-end',tintColor:"white",margin:16,zIndex:1002}} onPress={() => navigation.goBack(null)}>
                        <Image source={require('./images/supportbg.png')} style={{width:120,height:70,resizeMode:'contain'}}/>
                        <Image source={require('./images/supportword.png')} style={{width:100,height:70,resizeMode:'contain',bottom:'50%',right:'6%'}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{top:'15%',left:'7%',position:'absolute'}}>
                
                        <Image source={require('./images/orderdetailsbutton.png')} style={{width:350,height:120,resizeMode:'contain'}}/>
                        <Image source={require('./images/inforestatic.jpg')} style={{width:330,height:80,resizeMode:'contain',bottom:'49.5%',left:'3%'}}/>
                    
                    </View>
            <View style={{top:'13.5%',left:'70%',position:'absolute'}}>
                
                        <Image source={require('./images/code.png')} style={{width:80,height:30,resizeMode:'contain'}}/>
   
                    </View>
            <View style={styles.cart}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'35%',zIndex:1002}}>
                        <Image source={require('./images/carttamween.png')} style={{width:32,height:30}}/>
                    </TouchableOpacity> 

            </View>
            {/*<View style={styles.headerbutton1}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,zIndex:500}}>
                        <Image source={require('./images/searchbar.png')} style={{width:240,height:45}}/>
                    </TouchableOpacity> 

        </View>*/}
            {/*<View style={styles.headerbuttoncat}>
                                
                        <Dropdown
                        animationDuration={100}
                        
                    //textColor='green'
                    //itemColor='green'
                    //disabledItemColor='green'
                    labelFontSize={16}
                    dropdownPosition={-4}
                    textColor='black'
                    baseColor='white'
                    itemCount={10}
                    label=' 1منتجات الالبان والبيض'
                    data={values}
                />

    </View>*/}

            <ScrollView style={{width:'100%',height:'80%',zIndex:1001}}>
            <View style={styles.container}>
              
            {/*<Image source={require('./images/cairojazz.png')} style={styles.logo} />*/}
         

            </View>
           {/* <View>
            <Image source={require('./images/profilecircle.png')} style={styles.profile} />
            <Image source={{uri:picture}} style={styles.profile2} />
            <Text style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#fff',
                height: 40,
                width:210,
                bottom:680,
                left:71,
                fontSize: 10,
                width:400,
                color: '#541e1b',
                fontWeight: 'bold',
                zIndex:3,
            }}>{this.state.finalname}</Text>
          </View>*/}
            {/*<View style={{flex:1,top:'12%',height:'29%',opacity:0,}}>
            <Firstswipe/>
        </View>*/}
            {/*<View style={{top:'18%'}}>
            <Image source={require('./images/backgroundCUT.png')} style={styles.minibacktwo} />
        </View>*/}
            <View style={{position:'absolute',top:'5.5%',left:'42%',zIndex:1001}}>

            <Text style={{width:180,height:33,fontFamily:'normal',zIndex:500,color:'white',fontSize:18}}>Reciept</Text>
            {/*Text to show the text according to switch condition*/}
            
       
          {/*<View>{this.state.switchValue? <View style={{position:'relative',bottom:225,right:160,zIndex:500}}><Footer2/></View>:<View style={{position:'relative',bottom:225,right:160,zIndex:500}}><Footer1/></View>}</View>*/}


           
            {/*Switch with value set in constructor*/}
           

            {/*<Switch 
              style={{zIndex:501,position:'absolute',marginTop:55,left:30 ,opacity:0.01,transform: [{ scaleX: 4 }, { scaleY: 3 }]}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
              trackColor={{true: '#f8de7e', false: '#8e1600'}}
              />
              
              
            <Switch 
              style={{zIndex:501,position:'absolute',marginTop:55,left:150 ,opacity:0.01,transform: [{ scaleX: 4 }, { scaleY: 3 }]}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
              trackColor={{true: '#f8de7e', false: '#8e1600'}}
              />
                 
            <Switch 
              style={{zIndex:501, position:'absolute',marginTop:55,right:450 ,opacity:0.01,transform: [{ scaleX: 4 }, { scaleY: 3 }]}}
              onValueChange = {this.toggleSwitch}
              value = {this.state.switchValue}
              trackColor={{true: '#f8de7e', false: '#8e1600'}}
            />*/}
              
          </View>
     

          {/*<View style={{position:'absolute',bottom:'26%',height:850,width:600,zIndex:500,left:'0.5%'}}><Eventscrollnew/></View>*/}
         
          {/* item 1*/}
         

        
          </ScrollView>
          <Modal
            style={styles.bottomModal}
         isVisible={this.state.visibleModal === 2}
         animationIn={'slideInDown'}
         animationOut={'slideOutUp'}
         backdropOpacity={0}
         //scrollVertical={true}
         //coverScreen={false}
         >
           
         {this._renderModalContent()}
         
   

              </Modal>
            
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
    zIndex:50000,
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
  zIndex:50000,
  
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
      zIndex:40000,
    },
    modalContent: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderColor: 'rgba(0, 0, 0, 0.1)',
      height:'75%',
      
      zIndex:30000

      
    
    },
   
   
  });
  