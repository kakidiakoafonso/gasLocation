import { Icon } from 'native-base';
import React from 'react'
import { View,Image,Dimensions,StyleSheet,ImageBackground,Text,TouchableOpacity} from 'react-native'

const { width } = Dimensions.get('window');
const cor ='orange'
export default function Carrousel({id,img}) 
{
    return (
        <View key={id} style={{width:width*0.9}}>
            <Image source={{uri:img}} style={{width:width,height:'100%'}} resizeMode='cover'/>
        </View>

    )
}



export const DestaqueComponent = ({API}) =>
{
    return(
        <ImageBackground source={{uri: API}} style={{width:width*0.9,height:220,justifyContent:'flex-end'}}>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center',flexDirection:'row',backgroundColor: 'rgba(255, 195, 52,0.5)'}}>
                                    <View style={{width:60,height:60,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderRadius:40}}>
                                        <Text style={{color:cor,fontWeight:'bold'}}>5 km</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:22,marginLeft:8,color:'#fff',fontWeight:'bold'}}>Rocha Pinto</Text>
                                    </View>
                                </View>
                               <View style={{height:60,backgroundColor:'#000',flexDirection:'row',alignItems:'center',justifyContent:'space-around',backgroundColor: 'rgba(0,0,0,0.5)'}}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',width:130}}>
                                        <Image source={require('../../assets/Icons/Bomb.jpg')} 
                                            style={{width:30,height:30,borderRadius:4}}/>
                                        <Image source={require('../../assets/Icons/gas.jpg')} 
                                            style={{width:30,height:30,borderRadius:4}}/>
                                        <Image source={require('../../assets/Icons/like.jpg')} 
                                            style={{width:30,height:30,borderRadius:4}}/>
                                    </View>
                                    <TouchableOpacity style={{backgroundColor:'orange',width:width*0.4,height:40,opacity:1,
                                        borderRadius:5,flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
                                        <Icon name='directions' type='MaterialIcons' style={{color:'#fff'}}/>
                                        <Text style={{fontSize:12,fontWeight:'bold',color:'#FFF'}}>OBTER DIRECÇÕES</Text>
                                    </TouchableOpacity>
                               </View>
                           </ImageBackground>

    )  
}
export const IndicadorPagina = ({slideAtivo,id}) =>
{
    return(<View key={id} style={id==slideAtivo? styles.ativo : styles.iNativo }></View>  )  
}
export const DestaqueIndicadorPagina = ({slideAtivo,id}) =>
{
    return(<View key={id} style={id==slideAtivo? styles.Dativo : styles.DiNativo }></View>  )  
}

const styles = StyleSheet.create({
  ativo:{width:width*0.22,height:8,backgroundColor:'#fff',borderRadius:8},
  iNativo:{width:width*0.1,height:8,backgroundColor:'#ffe4b3',borderRadius:8,margin:2},
  Dativo:{width:width*0.12,height:10,backgroundColor:'orange',borderRadius:8},
  DiNativo:{width:width*0.06,height:10,backgroundColor:'#e6e6e6',borderRadius:8,margin:2},
});