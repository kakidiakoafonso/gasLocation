import {Card, CardItem,Icon} from 'native-base';
import React,{useState} from 'react'
import { View, Text,TouchableOpacity,Image,ScrollView,Dimensions,StyleSheet} from 'react-native'
import { Divider } from 'react-native-elements';

import Carrousel, { IndicadorPagina,DestaqueIndicadorPagina, DestaqueComponent} from './Components/Carrousel';

const API = 
    [
        'https://images.pexels.com/photos/5196413/pexels-photo-5196413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/4500711/pexels-photo-4500711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6401682/pexels-photo-6401682.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://images.pexels.com/photos/6015282/pexels-photo-6015282.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    ]
    

const cor = 'orange'
const home = () => 
{

    const [slideAtivo, setslideAtivo] = useState(0)
    const [destaqueSlide, setdestaqueSlide] = useState(0)

    function mudarIndice(nativeEvent) 
    {
       const slide = Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width)
       if(slide!==slideAtivo)
        setslideAtivo(slide)
       
    }
    function mudarIndiceDestaque(nativeEvent) 
    {
       const slide = Math.ceil(nativeEvent.contentOffset.x /nativeEvent.layoutMeasurement.width)
       if(slide!==destaqueSlide)
        setdestaqueSlide(slide)
       
    }
    return (
        <View style={{flex:1}}>
         <View style={{height:120,backgroundColor:cor,paddingTop:30,
                borderBottomLeftRadius:30,borderBottomRightRadius:30
            }}>
                <View style={{justifyContent:'space-evenly',flexDirection:'row',alignItems:'center'}}>
                    <Icon name='user' type='Entypo' style={{color:'#fff'}}/>
                    <Text style={{fontWeight:'bold',color:'#fff'}}>Bem vindo Carlos Maloza</Text>
                    <TouchableOpacity style={{height:40,width:40,backgroundColor:'#fff',
                        borderRadius:22,alignItems:'center'}}>
                        <Icon name='search' type='EvilIcons' style={{fontSize:40,marginTop:5}}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{top:-25}}>
            <View style={{height:150,width:width*0.9,borderRadius:25,alignSelf:'center'}}>
                <ScrollView horizontal
                    pagingEnabled showsHorizontalScrollIndicator={false}
                    onScroll={({nativeEvent})=>mudarIndice(nativeEvent)} 
                    style={{backgroundColor:'red',width:width*0.9}}
                    contentContainerStyle={{backgroundColor:'red'}}
                    >
                    {
                        API.map((img,id)=> ( <Carrousel id={id} img={img}/>))
                    }
                </ScrollView>
                

                <View style={{backgroundColor:cor,height:23,width:'80%',position:'absolute',bottom:15,justifyContent:'center',
                                alignItems:'center',alignSelf:'center',borderRadius:9,flexDirection:'row'}}>
                                    {
                                        API.map((i,id)=>
                                        (
                                            <IndicadorPagina slideAtivo={slideAtivo} id={id}/>
                                        ))
                                    }
                                </View>


            </View>
            <Card>
                       <CardItem style={{justifyContent:'flex-start'}}>
                            <View style={{backgroundColor:cor,width:40,height:40,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                                <Icon name='directions' type='MaterialIcons' style={{color:'#fff'}}/>
                            </View>
                            <Text>Destaques</Text>
                       </CardItem>
                       <Divider style={{height:1,width:'90%',alignSelf:'center'}}/>
                       <CardItem>

                       <ScrollView horizontal
                            pagingEnabled showsHorizontalScrollIndicator={false}
                            onScroll={({nativeEvent})=>mudarIndiceDestaque(nativeEvent)} 
                            style={{backgroundColor:'red',width:width*0.9}}
                            contentContainerStyle={{backgroundColor:'red'}}
                            >
                            {
                                API.map((img,id)=> <DestaqueComponent API={API[2]}/>)
                            }
                        </ScrollView>
                       </CardItem>
                       <CardItem style={{justifyContent:'center'}}>
                                <View style={{height:23,width:'80%',justifyContent:'center',
                                alignItems:'center',borderRadius:9,flexDirection:'row'}}>
                                    {
                                        API.map((i,id)=>
                                        (
                                            <DestaqueIndicadorPagina slideAtivo={destaqueSlide} id={id}/>
                                        ))
                                    }
                                </View>
                       </CardItem>
            </Card>
            </ScrollView>
        </View>
    )
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'red' },
  child: { width, justifyContent: 'center' },
  text: { fontSize: 13, textAlign: 'center' },
  ativo:{width:width*0.22,height:8,backgroundColor:'#fff',borderRadius:8},
  iNativo:{width:width*0.1,height:8,backgroundColor:'#ffe4b3',borderRadius:8,margin:2},
});


export default home

