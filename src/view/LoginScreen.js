import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import { Item, Input, Label} from 'native-base';
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const cor = 'orange';
export default function LoginScreen()
{
    const nav = useNavigation()
    return (
        <View
            style={{flex:1,backgroundColor:cor}}>
            <View style={estilo.containerImage}>
            
            </View>


            <View style={estilo.containerForm}>
                <View style={estilo.inputs}>
                    <Text style={{fontWeight:'bold',fontSize:23, color:cor}}>Login</Text>
                    <Item floatingLabel>
                        <Label style={{color:'grey'}}>Email</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel>
                        <Label style={{color:'grey'}}>Senha</Label>
                        <Input />
                    </Item>
                </View>

                <KeyboardAwareScrollView style={estilo.formBtn}>
                    <TouchableOpacity>
                        <Text style={{color:'grey'}}>Esqueci a senha</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:cor,height:50,width:140,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                        <Text style={estilo.btnLogin}>Entrar</Text>
                    </TouchableOpacity>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text style={{color:'grey'}}>Não tenho conta</Text>
                            <TouchableOpacity onPress={()=> nav.navigate('cadastrar')}>
                                <Text style={{color:cor,marginLeft:10,fontWeight:'bold',fontSize:15}}>Criar conta</Text>
                            </TouchableOpacity>
                        </View>
                    <TouchableOpacity>
                        <Text style={{color:'grey'}}>Continuar como visitante</Text>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    containerImage:{flex:1,justifyContent:'center'},
    containerForm:{flex:1.3,backgroundColor:'#fff',paddingTop:15},
    btnLogin:{color:'#fff',fontSize:19,fontWeight:'bold'},
    inputs:{height:'40%',paddingHorizontal:15,justifyContent:'space-evenly'},
    formBtn:{height:'60%',marginTop:5,paddingHorizontal:15}
})