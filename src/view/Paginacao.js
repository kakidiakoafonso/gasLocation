import React from 'react'
import { View, Text , Image} from 'react-native'
import Carousel from "react-native-snap-carousel";

export default function Paginacao() 
{
    const API = 
    [
        {id:1,img:'https://images.pexels.com/photos/5196413/pexels-photo-5196413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {id:2,img:'https://images.pexels.com/photos/5196413/pexels-photo-5196413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {id:3,img:'https://images.pexels.com/photos/5196413/pexels-photo-5196413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
    ]
    function renderizador({item}) 
    {
        return(
            <View style={{backgroundColor:'#fff', height:200,width:200}}>
                <Image source={{uri:item.img}} style={{width:'100%',height:'100%'}} resizeMode='contain'/>
            </View>
        )    
    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>

            <Carousel  
                data={API}
                pagingEnabled
                itemWidth={300}
                sliderWidth={300}
                renderItem={renderizador}
            />
        </View>
    )
}






























/*





import React from 'react'
import { TouchableOpacity } from 'react-native'
import { View, Text,Image,ScrollView,Dimensions} from 'react-native'

const {width,height} = Dimensions.get('window')
const img = 
[
    'https://images.pexels.com/photos/2767923/pexels-photo-2767923.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    'https://images.pexels.com/photos/5196413/pexels-photo-5196413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
]
export default function Paginacao() {
    return (
        <View style={{flex:1}}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}
                style={{backgroundColor:'#fff',position:'relative'}}
            >
                {
                    img.map(({i,index}) =>(
                        <View key={index}>
                            <Image source={{uri:img[1]}} style={{width:width,height:200}} resizeMode='contain'/>
                        </View>
                    ))
                }
            </ScrollView>
            <View style={{position:'absolute',top:-10,flexDirection:'row'}}>
                {
                    <TouchableOpacity style={{backgroundColor:'orange',width:50,height:15}}>
                    </TouchableOpacity>
                }
            </View>
            <Text>AAA</Text>
        </View>
    )
}






*/