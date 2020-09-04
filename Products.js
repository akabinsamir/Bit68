import React from 'react';
import { StyleSheet, Text, View,Image, ImageBackground ,Button,TouchableOpacity,CheckBox,SafeAreaView,ScrollView} from 'react-native';
import Modal from 'react-native-modal'; // 2.4.0
import { NavigationEvents } from 'react-navigation';
import Eventscrollnew from './Eventscrollnew';
import Firstswipe from './Firstswipe';
import Subcategory from './Subcategory';
import Brands from './Brands';

import * as Font from 'expo-font';




     class Products extends React.Component {
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

      mycategory : null,
      mydata:[]
     
   }
  }
  componentDidUpdate(prevProps,prevState){
    if (prevProps.navigation.state.params.link !== this.props.navigation.state.params.link){
      const { navigation } = this.props;  
      const { link } = navigation.state.params;
      
      fetch('http://192.168.0.100:3000/api/categories/'+link)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mydata: responseJson,
        });
       
        for(let i = 0; i < responseJson.length; i++){
          fetch('http://192.168.0.100:3000/api/products/'+responseJson[i])
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          mydata: responseJson,
        });
        console.log(responseJson)
      });
        }
      });
     
    
    }
    }
  componentDidMount() {
    /*const { navigation } = this.props;  
    const { link } = navigation.state.params;
    console.log(link);*/
    const { navigation } = this.props;  
  const { link } = navigation.state.params;
  
  fetch('http://192.168.0.100:3000/api/categories/'+link)
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      mydata: responseJson,
    });

    for(let i = 0; i < responseJson.length; i++){
      fetch('http://192.168.0.100:3000/api/products/'+responseJson[i])
  .then((response) => response.json())
  .then((responseJson) => {
    this.setState({
      mydata: responseJson,
    });
    //this.state.mydata.push(responseJson)
    
    var joined = this.state.mydata.concat({responseJson});
    this.setState({ mydata: joined })    
    
  });
  console.log(this.state.mydata)
  //console.log(this.state.mydata)
    }
  });
  
  }

      
     /* toggleSwitch = (value) => {
          //onValueChange of the switch this function will be called
          this.setState({switchValue: value})
          //state changes according to switch
          //which will result in re-render the text
      }*/
      _renderModalContent = () => (
        <View style={styles.modalContent}>
           <Image source={require('./images/catmenucrop.jpg')} 
            style={{width: '100%',height: '100%', resizeMode:'contain',position:'relative'}}
            />
          
        </View>
      );


    
    render(){
      const { navigation } = this.props;  
     
      const username = 'batates';  
      const partname = username.split(" ")[0];
      
    
      if(partname.length>10){ this.state.finalname=partname.substring(0,10)+".."}
      
        return (

            
            
         
          
            <ImageBackground source={require('./images/mrwhite.jpg')} style={{width:'100%', height:'100%',flex:1}}>
            {/*  <NavigationEvents
                onDidFocus={this.myfunction()}
              />*/}
              <View style={styles.header}>
              <Image source={require('./images/headertamween.png')} style={styles.headerphoto} />
              </View>
              <View style={styles.footer}>
              <Image source={require('./images/footertamween.png')} style={styles.footerphoto} />
              </View>

              <View style={styles.footerprice}>
              <Image source={require('./images/footerpricebg.png')} style={styles.footerphoto} />
              </View>
            
            <View style={styles.menu}>
                <SafeAreaView>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'40%',zIndex:500}} onPress={this.props.navigation.openDrawer}>
                        <Image source={require('./images/menutamween.png')} style={{width:30,height:30}}/>
                    </TouchableOpacity> 
                </SafeAreaView>

            </View>
            <View style={styles.cart}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,top:'30%',zIndex:500}}>
                        <Image source={require('./images/carttamween.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity> 

            </View>
            <View style={styles.headerbutton1}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:16,zIndex:500}}>
                        <Image source={require('./images/searchbar.png')} style={{width:220,height:40}}/>
                    </TouchableOpacity> 

            </View>
            <View style={styles.headerbuttoncat}>
                                
            <TouchableOpacity
             onPress={() => {
              {/*} this.numberCarousel.scrollToIndex(index);*/}
              //this.state.modaldate=this.state.mydata[index].startDate
              //this.state.eventid = this.state.mydata[index].id
              this.setState({ visibleModal: 2 })
          
             }} style={{alignItems:'flex-end',margin:16,zIndex:500}}>
                        <Image source={require('./images/submenubutton.png')} style={{width:100,height:25}}/>
                    </TouchableOpacity> 

            </View>

            <ScrollView style={{width:'100%',height:'100%'}}>
            <View style={styles.container}>
              
           
         
         

            </View>
        
            <View style={{flex:1,top:'12%',height:'29%',opacity:0,}}>
            <Firstswipe/>
            </View>
            {/*<View style={{top:'18%'}}>
            <Image source={require('./images/backgroundCUT.png')} style={styles.minibacktwo} />
        </View>*/}
            <View style={{position:'absolute',top:'13%',left:'51%',zIndex:100}}>

            <Image source={require('./images/subcatword.png')} style={{width:180,height:33}}/>
            {/*Text to show the text according to switch condition*/}
            
          </View>
          <View style={{position:'absolute',bottom:'52.5%',height:300,width:500,zIndex:1000,left:'0.5%'}}>

          <Subcategory/>
            </View>

          {/*<View style={{position:'absolute',bottom:'25.5%',height:850,width:600,zIndex:500,left:'0.5%'}}><Eventscrollnew 
          products={{}}
          
          
      navigation={this.props.navigation}/></View>*/}
          <View style={{position:'absolute',bottom:'72%',zIndex:2,}}>

          <Image source={require('./images/catbg.png')} style={{width:500,height:110,resizeMode:'stretch'}}/>

          </View>

          

          <View style={{position:'absolute',bottom:'29%',zIndex:200}}>

          <Image source={require('./images/sanfbg.png')} style={{width:420,height:400}}/>
          

          </View>

          <View style={{bottom:'35.7%',zIndex:200}}>

          <Image source={require('./images/shelf2.png')} style={{width:412,height:200}}/>
          

          </View>

            <View style={{position:'absolute',bottom:'65%',zIndex:201,left:'40%'}}>
            <Image source={require('./images/sanfword.png')} style={{width:80,height:29}}/>
          </View>


          <View style={{position:'absolute',bottom:'53%',height:100,width:500,zIndex:1000,left:'0.5%'}}>

                <Brands/>
                </View>
          </ScrollView>
            <Modal
            style={styles.bottomModal}
         isVisible={this.state.visibleModal === 2}
         animationIn={'slideInDown'}
         animationOut={'slideOutUp'}
         
         onBackdropPress={() => this.setState({ visibleModal:null })}>
           
         {this._renderModalContent()}
         
   

              </Modal>
            </ImageBackground>
            



        );
    }
}
export default Products
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
    width:'100%',
    height:'9%',
    bottom:'0%',
 
    position:'absolute',

},
footerprice: {
    flex:1,
    zIndex:499,
    width:'100%',
    height:'11%',
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
      left:'19%',
      top:'7%'
    },
    headerbuttoncat:{
        zIndex:1001,
        position:'absolute',
        left:'17%',
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
    modalContent: {
      backgroundColor: 'white',
      padding: 22,
      justifyContent: 'center',
      bottom:'39.5%',
      alignItems: 'center', 
      borderRadius: 50,
      width:'100%',
      height:'55%',
     
      borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
      justifyContent: 'flex-end',
      margin: 0,
    },
   
  });
  