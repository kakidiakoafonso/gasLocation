import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Item, Input} from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import React from 'react';
import { useNavigation } from "@react-navigation/native";


const cor = 'orange';
export default function LoginScreen()
{
    const nav = useNavigation()
    return (
        <View
            style={{flex:1,backgroundColor:cor}}>
            <View style={estilo.containerImage}>
            </View>


            <KeyboardAwareScrollView style={estilo.containerForm}>
                <View style={estilo.inputs}>
                    <Text style={{fontWeight:'bold',fontSize:23, color:cor}}>Criar conta</Text>
                    <Item>
                        <Input placeholder='Nome'/>
                    </Item>
                    <Item>
                        <Input placeholder='Email'/>
                    </Item>
                    <Item>
                        <Input placeholder='Senha'/>
                    </Item>
                    <Item>
                        <Input placeholder='Confirmar senha'/>
                    </Item>
                </View>

                <View style={estilo.formBtn}>
                    <TouchableOpacity style={{backgroundColor:cor,height:50,width:140,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text style={estilo.btnLogin}>Registrar</Text>
                    </TouchableOpacity>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'grey'}}>Já tenho conta</Text>
                            <TouchableOpacity onPress={()=>nav.navigate('login')}>
                                <Text style={{color:cor,marginLeft:10,fontWeight:'bold',fontSize:15}}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
}

const estilo = StyleSheet.create({
    containerImage:{height:'35%',justifyContent:'center',alignItems:'center'},
    containerForm:{height:'65%',backgroundColor:'#fff',paddingTop:15},
    btnLogin:{color:'#fff',fontSize:19,fontWeight:'bold'},
    inputs:{height:'75%',paddingHorizontal:15,justifyContent:'space-evenly'},
    formBtn:{height:'25%',marginTop:5,paddingHorizontal:15,justifyContent:'space-evenly'}
})